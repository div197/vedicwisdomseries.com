// 🕉️ TAURUS AGENT REAL-TIME DATA SYNC SYSTEM
// Preparation for global data synchronization across spiritual community
// WebSocket foundation with offline-first approach

interface SyncEvent<T = any> {
  id: string;
  type: 'create' | 'update' | 'delete' | 'sync_request' | 'sync_response';
  entity: 'offering' | 'testimonial' | 'teacher' | 'content' | 'metadata';
  data: T;
  timestamp: number;
  userId?: string;
  version: number;
}

// Event callback type definitions
interface EventCallbacks {
  initialized: (data: { state: SyncState }) => void;
  error: (data: { error: Event; timestamp: number }) => void;
  maxReconnectAttemptsReached: (data: { attempts: number }) => void;
  online: (data: { timestamp: number }) => void;
  offline: (data: { timestamp: number }) => void;
  connectionStatusChanged: (data: { status: ConnectionStatus; isConnected: boolean; timestamp: number }) => void;
  syncCompleted: (data: { lastSync: number; serverData: any }) => void;
  conflictResolved: (data: { localEvent: SyncEvent; serverEvent: SyncEvent; resolvedEvent: SyncEvent }) => void;
  dataChanged: (data: { type: string; entity: string; data: any; timestamp: number }) => void;
}

type SyncEventCallback<K extends keyof EventCallbacks = keyof EventCallbacks> = EventCallbacks[K];

interface SyncState {
  isOnline: boolean;
  isConnected: boolean;
  lastSync: number;
  pendingChanges: SyncEvent[];
  conflictResolution: 'client' | 'server' | 'merge';
}

interface SyncConfig {
  endpoint: string;
  reconnectInterval: number;
  maxReconnectAttempts: number;
  syncInterval: number;
  batchSize: number;
  enableOfflineMode: boolean;
}

// Connection status types
type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'error';

export class VedicDataSync {
  private ws: WebSocket | null = null;
  private config: SyncConfig;
  private state: SyncState;
  private reconnectAttempts: number = 0;
  private syncTimer: number | null = null;
  private eventListeners: Map<string, Set<SyncEventCallback>> = new Map();
  private messageQueue: SyncEvent[] = [];
  private isInitialized: boolean = false;

  constructor(config: SyncConfig) {
    this.config = config;
    this.state = {
      isOnline: navigator.onLine || true,
      isConnected: false,
      lastSync: Date.now(),
      pendingChanges: [],
      conflictResolution: 'merge'
    };

    // Monitor online/offline status
    if (typeof window !== 'undefined') {
      window.addEventListener('online', this.handleOnline.bind(this));
      window.addEventListener('offline', this.handleOffline.bind(this));
    }
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    // Load pending changes from localStorage
    await this.loadPendingChanges();
    
    // Start connection if online
    if (this.state.isOnline) {
      await this.connect();
    }

    // Set up periodic sync
    this.setupPeriodicSync();
    
    this.isInitialized = true;
    this.emit('initialized', { state: this.state });
  }

  private async connect(): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN) return;

    this.updateConnectionStatus('connecting');

    try {
      this.ws = new WebSocket(this.config.endpoint);
      
      this.ws.onopen = this.handleOpen.bind(this);
      this.ws.onmessage = this.handleMessage.bind(this);
      this.ws.onclose = this.handleClose.bind(this);
      this.ws.onerror = this.handleError.bind(this);

    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.handleReconnect();
    }
  }

  private handleOpen(): void {
    console.log('WebSocket connected');
    this.updateConnectionStatus('connected');
    this.reconnectAttempts = 0;
    
    // Send authentication/initialization message
    this.send({
      id: this.generateId(),
      type: 'sync_request',
      entity: 'metadata',
      data: { clientId: this.getClientId(), lastSync: this.state.lastSync },
      timestamp: Date.now(),
      version: 1
    });

    // Process queued messages
    this.processMessageQueue();
    
    // Sync pending changes
    this.syncPendingChanges();
  }

  private handleMessage(event: MessageEvent): void {
    try {
      const syncEvent: SyncEvent = JSON.parse(event.data);
      this.processSyncEvent(syncEvent);
    } catch (error) {
      console.error('Failed to process sync message:', error);
    }
  }

  private handleClose(event: CloseEvent): void {
    console.log('WebSocket closed:', event.code, event.reason);
    this.updateConnectionStatus('disconnected');
    
    if (event.code !== 1000 && this.state.isOnline) {
      this.handleReconnect();
    }
  }

  private handleError(error: Event): void {
    console.error('WebSocket error:', error);
    this.updateConnectionStatus('error');
    this.emit('error', { error, timestamp: Date.now() });
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts >= this.config.maxReconnectAttempts) {
      console.error('Max reconnection attempts reached');
      this.emit('maxReconnectAttemptsReached', { attempts: this.reconnectAttempts });
      return;
    }

    this.updateConnectionStatus('reconnecting');
    this.reconnectAttempts++;

    const delay = Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000);
    
    setTimeout(() => {
      if (this.state.isOnline) {
        this.connect();
      }
    }, delay);
  }

  private handleOnline(): void {
    this.state.isOnline = true;
    this.emit('online', { timestamp: Date.now() });
    
    if (!this.state.isConnected) {
      this.connect();
    }
  }

  private handleOffline(): void {
    this.state.isOnline = false;
    this.updateConnectionStatus('disconnected');
    this.emit('offline', { timestamp: Date.now() });
  }

  private updateConnectionStatus(status: ConnectionStatus): void {
    this.state.isConnected = status === 'connected';
    this.emit('connectionStatusChanged', { 
      status, 
      isConnected: this.state.isConnected,
      timestamp: Date.now() 
    });
  }

  private processSyncEvent(event: SyncEvent): void {
    switch (event.type) {
      case 'sync_response':
        this.handleSyncResponse(event);
        break;
      case 'create':
      case 'update':
      case 'delete':
        this.handleDataChange(event);
        break;
      default:
        console.warn('Unknown sync event type:', event.type);
    }
  }

  private handleSyncResponse(event: SyncEvent): void {
    // Process server response to sync request
    this.state.lastSync = event.timestamp;
    this.saveSyncState();
    this.emit('syncCompleted', { 
      lastSync: this.state.lastSync,
      serverData: event.data 
    });
  }

  private handleDataChange(event: SyncEvent): void {
    // Check for conflicts with local changes
    const hasLocalChanges = this.state.pendingChanges.some(
      pending => pending.entity === event.entity && pending.data.id === event.data.id
    );

    if (hasLocalChanges) {
      this.handleConflict(event);
    } else {
      this.applyDataChange(event);
    }
  }

  private handleConflict(serverEvent: SyncEvent): void {
    const localEvent = this.state.pendingChanges.find(
      pending => pending.entity === serverEvent.entity && 
                 pending.data.id === serverEvent.data.id
    );

    if (!localEvent) return;

    let resolvedData;
    
    switch (this.state.conflictResolution) {
      case 'server':
        resolvedData = serverEvent.data;
        break;
      case 'client':
        resolvedData = localEvent.data;
        break;
      case 'merge':
        resolvedData = this.mergeData(localEvent.data, serverEvent.data);
        break;
    }

    const resolvedEvent: SyncEvent = {
      ...serverEvent,
      data: resolvedData,
      timestamp: Date.now()
    };

    this.applyDataChange(resolvedEvent);
    this.removePendingChange(localEvent);
    
    this.emit('conflictResolved', { 
      localEvent, 
      serverEvent, 
      resolvedEvent 
    });
  }

  private mergeData(localData: any, serverData: any): any {
    // Simple merge strategy - can be enhanced based on data structure
    return {
      ...localData,
      ...serverData,
      mergedAt: Date.now(),
      conflictResolved: true
    };
  }

  private applyDataChange(event: SyncEvent): void {
    // Emit event for components to handle
    this.emit('dataChanged', {
      type: event.type,
      entity: event.entity,
      data: event.data,
      timestamp: event.timestamp
    });

    // Update local cache if available
    this.updateLocalCache(event);
  }

  private updateLocalCache(event: SyncEvent): void {
    // Integration with vedicCache from dataCache.ts
    const cacheKey = `${event.entity}_${event.data.id || 'current'}`;
    
    switch (event.type) {
      case 'create':
      case 'update':
        // Cache updated data
        import('./dataCache').then(({ vedicCache }) => {
          vedicCache.set(event.entity, cacheKey, event.data);
        });
        break;
      case 'delete':
        // Remove from cache
        import('./dataCache').then(({ vedicCache }) => {
          vedicCache.delete(event.entity, cacheKey);
        });
        break;
    }
  }

  // Public API methods
  public async sync(entity: string, data: any, type: 'create' | 'update' | 'delete'): Promise<void> {
    const event: SyncEvent = {
      id: this.generateId(),
      type,
      entity: entity as any,
      data,
      timestamp: Date.now(),
      userId: this.getUserId(),
      version: 1
    };

    if (this.state.isConnected) {
      this.send(event);
    } else {
      // Queue for later sync
      this.addPendingChange(event);
    }
  }

  public async requestSync(entity?: string): Promise<void> {
    const event: SyncEvent = {
      id: this.generateId(),
      type: 'sync_request',
      entity: entity as any || 'metadata',
      data: { 
        lastSync: this.state.lastSync,
        entities: entity ? [entity] : ['offering', 'testimonial', 'teacher', 'content']
      },
      timestamp: Date.now(),
      version: 1
    };

    if (this.state.isConnected) {
      this.send(event);
    }
  }

  public getConnectionStatus(): ConnectionStatus {
    if (!this.state.isOnline) return 'disconnected';
    if (!this.ws) return 'disconnected';
    
    switch (this.ws.readyState) {
      case WebSocket.CONNECTING:
        return 'connecting';
      case WebSocket.OPEN:
        return 'connected';
      case WebSocket.CLOSING:
      case WebSocket.CLOSED:
        return this.reconnectAttempts > 0 ? 'reconnecting' : 'disconnected';
      default:
        return 'error';
    }
  }

  public getSyncState(): SyncState {
    return { ...this.state };
  }

  public setPendingChanges(changes: SyncEvent[]): void {
    this.state.pendingChanges = changes;
    this.savePendingChanges();
  }

  public clearPendingChanges(): void {
    this.state.pendingChanges = [];
    this.savePendingChanges();
  }

  // Event system
  public on<K extends keyof EventCallbacks>(event: K, callback: EventCallbacks[K]): void;
  public on(event: string, callback: SyncEventCallback): void;
  public on(event: string, callback: SyncEventCallback): void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }
    this.eventListeners.get(event)!.add(callback);
  }

  public off<K extends keyof EventCallbacks>(event: K, callback: EventCallbacks[K]): void;
  public off(event: string, callback: SyncEventCallback): void;
  public off(event: string, callback: SyncEventCallback): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.delete(callback);
    }
  }

  private emit(event: string, data: any): void {
    const listeners = this.eventListeners.get(event);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(data);
        } catch (error) {
          console.error('Event listener error:', error);
        }
      });
    }
  }

  // Private utility methods
  private send(event: SyncEvent): void {
    if (this.ws?.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(event));
    } else {
      this.messageQueue.push(event);
    }
  }

  private processMessageQueue(): void {
    while (this.messageQueue.length > 0 && this.ws?.readyState === WebSocket.OPEN) {
      const event = this.messageQueue.shift()!;
      this.ws.send(JSON.stringify(event));
    }
  }

  private addPendingChange(event: SyncEvent): void {
    this.state.pendingChanges.push(event);
    this.savePendingChanges();
  }

  private removePendingChange(event: SyncEvent): void {
    this.state.pendingChanges = this.state.pendingChanges.filter(
      pending => pending.id !== event.id
    );
    this.savePendingChanges();
  }

  private async syncPendingChanges(): Promise<void> {
    const batches = this.chunkArray(this.state.pendingChanges, this.config.batchSize);
    
    for (const batch of batches) {
      for (const event of batch) {
        this.send(event);
      }
    }
  }

  private setupPeriodicSync(): void {
    if (this.syncTimer) clearInterval(this.syncTimer);
    
    this.syncTimer = window.setInterval(() => {
      if (this.state.isConnected) {
        this.requestSync();
      }
    }, this.config.syncInterval);
  }

  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getClientId(): string {
    let clientId = localStorage.getItem('vedic_client_id');
    if (!clientId) {
      clientId = this.generateId();
      localStorage.setItem('vedic_client_id', clientId);
    }
    return clientId;
  }

  private getUserId(): string {
    return localStorage.getItem('vedic_user_id') || 'anonymous';
  }

  private async loadPendingChanges(): Promise<void> {
    try {
      const stored = localStorage.getItem('vedic_pending_changes');
      if (stored) {
        this.state.pendingChanges = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load pending changes:', error);
      this.state.pendingChanges = [];
    }
  }

  private savePendingChanges(): void {
    try {
      localStorage.setItem('vedic_pending_changes', JSON.stringify(this.state.pendingChanges));
    } catch (error) {
      console.error('Failed to save pending changes:', error);
    }
  }

  private saveSyncState(): void {
    try {
      localStorage.setItem('vedic_sync_state', JSON.stringify({
        lastSync: this.state.lastSync,
        conflictResolution: this.state.conflictResolution
      }));
    } catch (error) {
      console.error('Failed to save sync state:', error);
    }
  }

  public destroy(): void {
    if (this.ws) {
      this.ws.close(1000, 'Client disconnect');
      this.ws = null;
    }
    
    if (this.syncTimer) {
      clearInterval(this.syncTimer);
      this.syncTimer = null;
    }
    
    this.eventListeners.clear();
    this.messageQueue = [];
    this.isInitialized = false;
  }
}

// Default configuration
const defaultSyncConfig: SyncConfig = {
  endpoint: 'wss://api.vaidikwisdomseries.com/sync', // Placeholder
  reconnectInterval: 5000,
  maxReconnectAttempts: 10,
  syncInterval: 300000, // 5 minutes
  batchSize: 10,
  enableOfflineMode: true
};

// Singleton instance
export const vedicSync = new VedicDataSync(defaultSyncConfig);

// React hook for sync functionality
import { useState, useEffect } from 'react';

export function useDataSync() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('disconnected');
  const [syncState, setSyncState] = useState<SyncState>(vedicSync.getSyncState());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize sync system
    if (!isInitialized) {
      vedicSync.initialize().then(() => {
        setIsInitialized(true);
      });
    }

    // Set up event listeners
    const handleConnectionChange = (data: any) => {
      setConnectionStatus(data.status);
    };

    const handleSyncStateChange = () => {
      setSyncState(vedicSync.getSyncState());
    };

    vedicSync.on('connectionStatusChanged', handleConnectionChange);
    vedicSync.on('syncCompleted', handleSyncStateChange);
    vedicSync.on('dataChanged', handleSyncStateChange);

    return () => {
      vedicSync.off('connectionStatusChanged', handleConnectionChange);
      vedicSync.off('syncCompleted', handleSyncStateChange);
      vedicSync.off('dataChanged', handleSyncStateChange);
    };
  }, [isInitialized]);

  const sync = (entity: string, data: any, type: 'create' | 'update' | 'delete') => {
    return vedicSync.sync(entity, data, type);
  };

  const requestSync = (entity?: string) => {
    return vedicSync.requestSync(entity);
  };

  return {
    connectionStatus,
    syncState,
    isInitialized,
    sync,
    requestSync,
    isOnline: syncState.isOnline,
    isConnected: syncState.isConnected,
    pendingChanges: syncState.pendingChanges.length,
    lastSync: new Date(syncState.lastSync)
  };
}