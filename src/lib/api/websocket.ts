// 🕉️ WebSocket Client - Vedic Wisdom Series
// Real-time spiritual communication with divine consciousness

// WebSocket Event Types for Spiritual Platform
export type WebSocketEventType = 
  | 'live_teaching'
  | 'meditation_session'
  | 'community_chat'
  | 'spiritual_notification'
  | 'course_update'
  | 'teacher_presence'
  | 'group_chanting'
  | 'wisdom_sharing'
  | 'student_progress'
  | 'system_announcement';

// WebSocket Message Interface
export interface WebSocketMessage<T = any> {
  id: string;
  type: WebSocketEventType;
  event: string;
  data: T;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  metadata?: Record<string, any>;
}

// Connection State
export type ConnectionState = 'connecting' | 'connected' | 'disconnected' | 'error' | 'reconnecting';

// WebSocket Configuration
interface WebSocketConfig {
  url: string;
  protocols?: string[];
  reconnect: boolean;
  reconnectAttempts: number;
  reconnectDelay: number;
  heartbeatInterval: number;
  enableDebugMode: boolean;
  authToken?: string;
}

// Event Handler Type
type EventHandler<T = any> = (message: WebSocketMessage<T>) => void;

// Connection Event Handler
type ConnectionEventHandler = (state: ConnectionState, error?: Error) => void;

class SpiritualWebSocketClient {
  private config: WebSocketConfig;
  private socket: WebSocket | null = null;
  private connectionState: ConnectionState = 'disconnected';
  private reconnectAttempts = 0;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private reconnectTimer: NodeJS.Timeout | null = null;
  
  // Event handlers
  private eventHandlers: Map<string, EventHandler[]> = new Map();
  private connectionHandlers: ConnectionEventHandler[] = [];
  
  // Message queue for offline scenarios
  private messageQueue: WebSocketMessage[] = [];
  private maxQueueSize = 100;

  constructor(config: WebSocketConfig) {
    this.config = config;
  }

  // Connect to WebSocket server
  async connect(): Promise<void> {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      console.log('🕉️ Already connected to spiritual consciousness stream');
      return;
    }

    try {
      this.setConnectionState('connecting');
      
      const wsUrl = new URL(this.config.url);
      if (this.config.authToken) {
        wsUrl.searchParams.set('auth', this.config.authToken);
      }

      this.socket = new WebSocket(wsUrl.toString(), this.config.protocols);
      
      this.socket.onopen = this.handleOpen.bind(this);
      this.socket.onmessage = this.handleMessage.bind(this);
      this.socket.onclose = this.handleClose.bind(this);
      this.socket.onerror = this.handleError.bind(this);

    } catch (error) {
      console.error('🚨 Failed to establish spiritual connection:', error);
      this.setConnectionState('error', error as Error);
      throw error;
    }
  }

  // Disconnect from WebSocket server
  disconnect(): void {
    this.clearTimers();
    
    if (this.socket) {
      this.socket.close(1000, 'Client disconnect');
      this.socket = null;
    }
    
    this.setConnectionState('disconnected');
    this.reconnectAttempts = 0;
  }

  // Send message to server
  send<T = any>(type: WebSocketEventType, event: string, data: T, metadata?: Record<string, any>): void {
    const message: WebSocketMessage<T> = {
      id: this.generateMessageId(),
      type,
      event,
      data,
      timestamp: new Date().toISOString(),
      metadata: {
        platform: 'vedic-wisdom-series',
        clientVersion: '1.0.0',
        ...metadata
      }
    };

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
      
      if (this.config.enableDebugMode) {
        console.log('🕉️ Sent spiritual message:', message);
      }
    } else {
      // Queue message for when connection is restored
      this.queueMessage(message);
      
      if (this.config.enableDebugMode) {
        console.log('🔄 Queued spiritual message for later delivery:', message);
      }
    }
  }

  // Subscribe to specific event type
  on<T = any>(eventType: string, handler: EventHandler<T>): () => void {
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, []);
    }
    
    this.eventHandlers.get(eventType)!.push(handler);
    
    // Return unsubscribe function
    return () => {
      const handlers = this.eventHandlers.get(eventType);
      if (handlers) {
        const index = handlers.indexOf(handler);
        if (index > -1) {
          handlers.splice(index, 1);
        }
      }
    };
  }

  // Subscribe to connection state changes
  onConnectionChange(handler: ConnectionEventHandler): () => void {
    this.connectionHandlers.push(handler);
    
    // Return unsubscribe function
    return () => {
      const index = this.connectionHandlers.indexOf(handler);
      if (index > -1) {
        this.connectionHandlers.splice(index, 1);
      }
    };
  }

  // Get current connection state
  getConnectionState(): ConnectionState {
    return this.connectionState;
  }

  // Set authentication token
  setAuthToken(token: string): void {
    this.config.authToken = token;
    
    // If connected, send auth update
    if (this.connectionState === 'connected') {
      this.send('system_announcement', 'auth_update', { token });
    }
  }

  // Handle WebSocket open event
  private handleOpen(): void {
    console.log('🕉️ Spiritual consciousness stream established');
    this.setConnectionState('connected');
    this.reconnectAttempts = 0;
    
    // Start heartbeat
    this.startHeartbeat();
    
    // Send queued messages
    this.flushMessageQueue();
    
    // Send initial presence
    this.send('teacher_presence', 'student_online', {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      platform: 'web'
    });
  }

  // Handle WebSocket message event
  private handleMessage(event: MessageEvent): void {
    try {
      const message: WebSocketMessage = JSON.parse(event.data);
      
      if (this.config.enableDebugMode) {
        console.log('🕉️ Received spiritual message:', message);
      }
      
      // Handle heartbeat response
      if (message.event === 'pong') {
        return;
      }
      
      // Emit to specific event handlers
      const handlers = this.eventHandlers.get(message.event) || [];
      const typeHandlers = this.eventHandlers.get(message.type) || [];
      const allHandlers = this.eventHandlers.get('*') || [];
      
      [...handlers, ...typeHandlers, ...allHandlers].forEach(handler => {
        try {
          handler(message);
        } catch (error) {
          console.error('🚨 Error in message handler:', error);
        }
      });
      
    } catch (error) {
      console.error('🚨 Failed to parse spiritual message:', error);
    }
  }

  // Handle WebSocket close event
  private handleClose(event: CloseEvent): void {
    console.log('🕉️ Spiritual connection closed:', event.code, event.reason);
    this.setConnectionState('disconnected');
    this.clearTimers();
    
    // Attempt reconnection if enabled
    if (this.config.reconnect && this.reconnectAttempts < this.config.reconnectAttempts) {
      this.scheduleReconnect();
    }
  }

  // Handle WebSocket error event
  private handleError(event: Event): void {
    console.error('🚨 Spiritual connection error:', event);
    this.setConnectionState('error', new Error('WebSocket connection error'));
  }

  // Set connection state and notify handlers
  private setConnectionState(state: ConnectionState, error?: Error): void {
    this.connectionState = state;
    this.connectionHandlers.forEach(handler => {
      try {
        handler(state, error);
      } catch (err) {
        console.error('🚨 Error in connection handler:', err);
      }
    });
  }

  // Schedule reconnection attempt
  private scheduleReconnect(): void {
    this.reconnectAttempts++;
    this.setConnectionState('reconnecting');
    
    const delay = this.config.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
    
    console.log(`🔄 Attempting spiritual reconnection ${this.reconnectAttempts}/${this.config.reconnectAttempts} in ${delay}ms`);
    
    this.reconnectTimer = setTimeout(() => {
      this.connect().catch(error => {
        console.error('🚨 Reconnection failed:', error);
        
        if (this.reconnectAttempts >= this.config.reconnectAttempts) {
          console.error('🚨 Maximum reconnection attempts reached');
          this.setConnectionState('error', new Error('Max reconnection attempts reached'));
        }
      });
    }, delay);
  }

  // Start heartbeat to keep connection alive
  private startHeartbeat(): void {
    this.heartbeatTimer = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send('system_announcement', 'ping', { timestamp: Date.now() });
      }
    }, this.config.heartbeatInterval);
  }

  // Clear all timers
  private clearTimers(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  // Queue message for later delivery
  private queueMessage(message: WebSocketMessage): void {
    if (this.messageQueue.length >= this.maxQueueSize) {
      this.messageQueue.shift(); // Remove oldest message
    }
    this.messageQueue.push(message);
  }

  // Send all queued messages
  private flushMessageQueue(): void {
    if (this.messageQueue.length === 0) return;
    
    console.log(`🕉️ Sending ${this.messageQueue.length} queued spiritual messages`);
    
    this.messageQueue.forEach(message => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify(message));
      }
    });
    
    this.messageQueue = [];
  }

  // Generate unique message ID
  private generateMessageId(): string {
    return `vws_msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Spiritual WebSocket Client Manager
class SpiritualWebSocketManager {
  private clients: Map<string, SpiritualWebSocketClient> = new Map();
  private defaultConfig: Partial<WebSocketConfig> = {
    reconnect: true,
    reconnectAttempts: 5,
    reconnectDelay: 1000,
    heartbeatInterval: 30000,
    enableDebugMode: import.meta.env.NODE_ENV === 'development'
  };

  // Create or get WebSocket client for specific purpose
  getClient(purpose: string, config?: Partial<WebSocketConfig>): SpiritualWebSocketClient {
    if (this.clients.has(purpose)) {
      return this.clients.get(purpose)!;
    }

    const fullConfig: WebSocketConfig = {
      url: this.getWebSocketUrl(purpose),
      ...this.defaultConfig,
      ...config
    } as WebSocketConfig;

    const client = new SpiritualWebSocketClient(fullConfig);
    this.clients.set(purpose, client);
    
    return client;
  }

  // Get WebSocket URL based on purpose
  private getWebSocketUrl(purpose: string): string {
    const baseUrl = import.meta.env.VITE_WS_BASE_URL || 'wss://ws.vaidikwisdomseries.com';
    const endpoints: Record<string, string> = {
      'live-teaching': '/live-teaching',
      'meditation': '/meditation-sessions',
      'community': '/community-chat',
      'notifications': '/notifications',
      'general': '/general'
    };

    return `${baseUrl}${endpoints[purpose] || endpoints.general}`;
  }

  // Connect all clients
  async connectAll(): Promise<void> {
    const connections = Array.from(this.clients.values()).map(client => client.connect());
    await Promise.allSettled(connections);
  }

  // Disconnect all clients
  disconnectAll(): void {
    this.clients.forEach(client => client.disconnect());
  }

  // Remove client
  removeClient(purpose: string): void {
    const client = this.clients.get(purpose);
    if (client) {
      client.disconnect();
      this.clients.delete(purpose);
    }
  }
}

// Create and export WebSocket manager instance
export const wsManager = new SpiritualWebSocketManager();

// Export types and classes
export { SpiritualWebSocketClient, SpiritualWebSocketManager };

// Convenience functions for common spiritual use cases
export const spiritualWebSocket = {
  // Connect to live teaching session
  joinLiveTeaching: (sessionId: string, authToken?: string) => {
    const client = wsManager.getClient('live-teaching', { authToken });
    client.connect();
    
    // Join specific teaching session
    client.send('live_teaching', 'join_session', { sessionId });
    
    return client;
  },

  // Connect to meditation session
  joinMeditationSession: (sessionId: string, authToken?: string) => {
    const client = wsManager.getClient('meditation', { authToken });
    client.connect();
    
    // Join meditation session
    client.send('meditation_session', 'join_meditation', { sessionId });
    
    return client;
  },

  // Connect to community chat
  joinCommunity: (userId: string, authToken?: string) => {
    const client = wsManager.getClient('community', { authToken });
    client.connect();
    
    // Join community with user info
    client.send('community_chat', 'join_community', { userId });
    
    return client;
  },

  // Connect to notifications
  subscribeToNotifications: (userId: string, authToken?: string) => {
    const client = wsManager.getClient('notifications', { authToken });
    client.connect();
    
    // Subscribe to user notifications
    client.send('spiritual_notification', 'subscribe', { userId });
    
    return client;
  },

  // Send spiritual message to community
  sendSpiritualMessage: (message: string, type: 'wisdom' | 'question' | 'gratitude' = 'wisdom') => {
    const client = wsManager.getClient('community');
    client.send('wisdom_sharing', 'spiritual_message', {
      message,
      messageType: type,
      timestamp: new Date().toISOString()
    });
  },

  // Share meditation experience
  shareMeditationExperience: (experience: {
    duration: number;
    type: string;
    insights: string;
    mood: 'peaceful' | 'blissful' | 'challenging' | 'neutral';
  }) => {
    const client = wsManager.getClient('meditation');
    client.send('meditation_session', 'share_experience', experience);
  },

  // Request spiritual guidance
  requestGuidance: (question: string, category: 'vedic-texts' | 'meditation' | 'lifestyle' | 'philosophy') => {
    const client = wsManager.getClient('community');
    client.send('wisdom_sharing', 'guidance_request', {
      question,
      category,
      timestamp: new Date().toISOString()
    });
  }
};