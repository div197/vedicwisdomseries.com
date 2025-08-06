// 🕉️ CANCER AGENT DATA ENCRYPTION SYSTEM
// Enterprise-grade encryption with spiritual protection
// AES-256-GCM encryption with key rotation and secure storage

export interface EncryptedData {
  data: string;
  iv: string;
  tag: string;
  keyId: string;
  timestamp: number;
  algorithm: string;
}

export interface EncryptionKey {
  id: string;
  key: CryptoKey;
  algorithm: string;
  createdAt: number;
  isActive: boolean;
}

export interface SecureStorage {
  encrypted: boolean;
  compressed: boolean;
  expiresAt?: number;
}

class DataEncryptionService {
  private keys = new Map<string, EncryptionKey>();
  private activeKeyId: string | null = null;
  private keyRotationInterval = 24 * 60 * 60 * 1000; // 24 hours
  private rotationTimer: NodeJS.Timeout | null = null;

  constructor() {
    this.initializeEncryption();
  }

  // Initialize encryption system
  private async initializeEncryption(): Promise<void> {
    try {
      // Load or generate master key
      await this.loadOrGenerateMasterKey();
      
      // Start key rotation schedule
      this.scheduleKeyRotation();
      
      console.log('🔒 Encryption system initialized');
    } catch (error) {
      console.error('Failed to initialize encryption:', error);
      throw new Error('Encryption initialization failed');
    }
  }

  // Master key management
  private async loadOrGenerateMasterKey(): Promise<void> {
    try {
      const storedKeyData = localStorage.getItem('vws_master_key');
      
      if (storedKeyData) {
        // Load existing key
        const keyData = JSON.parse(storedKeyData);
        const keyMaterial = await this.importKey(keyData.key);
        
        this.keys.set(keyData.id, {
          id: keyData.id,
          key: keyMaterial,
          algorithm: keyData.algorithm,
          createdAt: keyData.createdAt,
          isActive: true
        });
        
        this.activeKeyId = keyData.id;
      } else {
        // Generate new master key
        await this.generateNewKey();
      }
    } catch (error) {
      console.warn('Failed to load existing key, generating new one');
      await this.generateNewKey();
    }
  }

  // Generate new encryption key
  private async generateNewKey(): Promise<string> {
    const keyId = this.generateKeyId();
    
    const key = await crypto.subtle.generateKey(
      {
        name: 'AES-GCM',
        length: 256
      },
      true,
      ['encrypt', 'decrypt']
    );

    const keyData: EncryptionKey = {
      id: keyId,
      key,
      algorithm: 'AES-GCM',
      createdAt: Date.now(),
      isActive: true
    };

    this.keys.set(keyId, keyData);
    this.activeKeyId = keyId;

    // Store key securely
    await this.storeKey(keyData);

    return keyId;
  }

  // Store encryption key
  private async storeKey(keyData: EncryptionKey): Promise<void> {
    try {
      const exportedKey = await crypto.subtle.exportKey('raw', keyData.key);
      
      const storageData = {
        id: keyData.id,
        key: Array.from(new Uint8Array(exportedKey)),
        algorithm: keyData.algorithm,
        createdAt: keyData.createdAt
      };

      localStorage.setItem('vws_master_key', JSON.stringify(storageData));
    } catch (error) {
      console.error('Failed to store encryption key:', error);
    }
  }

  // Import stored key
  private async importKey(keyArray: number[]): Promise<CryptoKey> {
    const keyBuffer = new Uint8Array(keyArray).buffer;
    
    return await crypto.subtle.importKey(
      'raw',
      keyBuffer,
      {
        name: 'AES-GCM',
        length: 256
      },
      true,
      ['encrypt', 'decrypt']
    );
  }

  // Main encryption method
  async encrypt(data: string, keyId?: string): Promise<EncryptedData> {
    const useKeyId = keyId || this.activeKeyId;
    
    if (!useKeyId) {
      throw new Error('No encryption key available');
    }

    const keyData = this.keys.get(useKeyId);
    
    if (!keyData) {
      throw new Error(`Encryption key ${useKeyId} not found`);
    }

    try {
      // Generate random IV
      const iv = crypto.getRandomValues(new Uint8Array(12));
      
      // Encode data
      const encodedData = new TextEncoder().encode(data);
      
      // Encrypt data
      const encryptedBuffer = await crypto.subtle.encrypt(
        {
          name: 'AES-GCM',
          iv: iv
        },
        keyData.key,
        encodedData
      );

      // Split encrypted data and tag
      const encryptedArray = new Uint8Array(encryptedBuffer);
      const encryptedData = encryptedArray.slice(0, -16);
      const tag = encryptedArray.slice(-16);

      return {
        data: this.arrayBufferToBase64(encryptedData),
        iv: this.arrayBufferToBase64(iv),
        tag: this.arrayBufferToBase64(tag),
        keyId: useKeyId,
        timestamp: Date.now(),
        algorithm: keyData.algorithm
      };
    } catch (error) {
      console.error('Encryption failed:', error);
      throw new Error('Data encryption failed');
    }
  }

  // Main decryption method
  async decrypt(encryptedData: EncryptedData): Promise<string> {
    const keyData = this.keys.get(encryptedData.keyId);
    
    if (!keyData) {
      throw new Error(`Decryption key ${encryptedData.keyId} not found`);
    }

    try {
      // Convert base64 to buffers
      const iv = this.base64ToArrayBuffer(encryptedData.iv);
      const data = this.base64ToArrayBuffer(encryptedData.data);
      const tag = this.base64ToArrayBuffer(encryptedData.tag);
      
      // Combine data and tag
      const combined = new Uint8Array(data.byteLength + tag.byteLength);
      combined.set(new Uint8Array(data), 0);
      combined.set(new Uint8Array(tag), data.byteLength);

      // Decrypt data
      const decryptedBuffer = await crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: new Uint8Array(iv)
        },
        keyData.key,
        combined
      );

      // Decode result
      return new TextDecoder().decode(decryptedBuffer);
    } catch (error) {
      console.error('Decryption failed:', error);
      throw new Error('Data decryption failed');
    }
  }

  // Secure local storage
  async setSecureItem(key: string, value: any, options: Partial<SecureStorage> = {}): Promise<void> {
    const storageOptions: SecureStorage = {
      encrypted: true,
      compressed: false,
      ...options
    };

    let processedValue = JSON.stringify(value);

    // Compress if requested
    if (storageOptions.compressed && 'CompressionStream' in window) {
      try {
        processedValue = await this.compressString(processedValue);
      } catch (error) {
        console.warn('Compression failed, storing uncompressed:', error);
      }
    }

    // Encrypt if requested
    if (storageOptions.encrypted) {
      const encrypted = await this.encrypt(processedValue);
      processedValue = JSON.stringify(encrypted);
    }

    // Add metadata
    const storageData = {
      value: processedValue,
      options: storageOptions,
      timestamp: Date.now()
    };

    localStorage.setItem(`vws_secure_${key}`, JSON.stringify(storageData));
  }

  async getSecureItem<T>(key: string): Promise<T | null> {
    try {
      const stored = localStorage.getItem(`vws_secure_${key}`);
      
      if (!stored) {
        return null;
      }

      const storageData = JSON.parse(stored);

      // Check expiration
      if (storageData.options.expiresAt && Date.now() > storageData.options.expiresAt) {
        localStorage.removeItem(`vws_secure_${key}`);
        return null;
      }

      let value = storageData.value;

      // Decrypt if encrypted
      if (storageData.options.encrypted) {
        const encryptedData = JSON.parse(value);
        value = await this.decrypt(encryptedData);
      }

      // Decompress if compressed
      if (storageData.options.compressed && 'DecompressionStream' in window) {
        try {
          value = await this.decompressString(value);
        } catch (error) {
          console.warn('Decompression failed:', error);
        }
      }

      return JSON.parse(value);
    } catch (error) {
      console.error('Failed to retrieve secure item:', error);
      return null;
    }
  }

  removeSecureItem(key: string): void {
    localStorage.removeItem(`vws_secure_${key}`);
  }

  // Session encryption (temporary keys)
  async createSessionKey(): Promise<string> {
    const sessionKeyId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const key = await crypto.subtle.generateKey(
      {
        name: 'AES-GCM',
        length: 256
      },
      false, // Non-extractable for session keys
      ['encrypt', 'decrypt']
    );

    this.keys.set(sessionKeyId, {
      id: sessionKeyId,
      key,
      algorithm: 'AES-GCM',
      createdAt: Date.now(),
      isActive: true
    });

    // Auto-expire session key after 1 hour
    setTimeout(() => {
      this.keys.delete(sessionKeyId);
    }, 60 * 60 * 1000);

    return sessionKeyId;
  }

  // Hash functions for passwords and sensitive data
  async hashPassword(password: string, salt?: string): Promise<{ hash: string; salt: string }> {
    const actualSalt = salt || this.generateSalt();
    const encoder = new TextEncoder();
    
    // Use PBKDF2 with high iteration count
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(password),
      'PBKDF2',
      false,
      ['deriveBits']
    );

    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        hash: 'SHA-256',
        salt: encoder.encode(actualSalt),
        iterations: 100000
      },
      keyMaterial,
      256
    );

    return {
      hash: this.arrayBufferToBase64(derivedBits),
      salt: actualSalt
    };
  }

  async verifyPassword(password: string, hash: string, salt: string): Promise<boolean> {
    const { hash: computedHash } = await this.hashPassword(password, salt);
    return computedHash === hash;
  }

  // Secure random generation
  generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return this.arrayBufferToBase64(array);
  }

  generateSalt(): string {
    return this.generateSecureToken(16);
  }

  // Key rotation
  private scheduleKeyRotation(): void {
    this.rotationTimer = setInterval(() => {
      this.rotateKeys().catch(console.error);
    }, this.keyRotationInterval);
  }

  private async rotateKeys(): Promise<void> {
    try {
      console.log('🔄 Rotating encryption keys');
      
      // Mark current key as inactive
      if (this.activeKeyId) {
        const currentKey = this.keys.get(this.activeKeyId);
        if (currentKey) {
          currentKey.isActive = false;
        }
      }

      // Generate new active key
      await this.generateNewKey();
      
      // Keep old keys for decryption (cleanup after 30 days)
      this.cleanupOldKeys();
      
      console.log('✅ Key rotation completed');
    } catch (error) {
      console.error('Key rotation failed:', error);
    }
  }

  private cleanupOldKeys(): void {
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    
    for (const [keyId, keyData] of this.keys.entries()) {
      if (!keyData.isActive && keyData.createdAt < thirtyDaysAgo) {
        this.keys.delete(keyId);
        console.log(`🗑️ Cleaned up old key: ${keyId}`);
      }
    }
  }

  // Utility methods
  private generateKeyId(): string {
    return `key_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  private async compressString(str: string): Promise<string> {
    if (!('CompressionStream' in window)) {
      return str;
    }

    const stream = new CompressionStream('gzip');
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();

    writer.write(new TextEncoder().encode(str));
    writer.close();

    const chunks: Uint8Array[] = [];
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (value) {
        chunks.push(value);
      }
    }

    const compressed = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0));
    let offset = 0;
    for (const chunk of chunks) {
      compressed.set(chunk, offset);
      offset += chunk.length;
    }

    return this.arrayBufferToBase64(compressed);
  }

  private async decompressString(compressedBase64: string): Promise<string> {
    if (!('DecompressionStream' in window)) {
      return compressedBase64;
    }

    const compressed = this.base64ToArrayBuffer(compressedBase64);
    const stream = new DecompressionStream('gzip');
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();

    writer.write(compressed);
    writer.close();

    const chunks: Uint8Array[] = [];
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      if (value) {
        chunks.push(value);
      }
    }

    const decompressed = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0));
    let offset = 0;
    for (const chunk of chunks) {
      decompressed.set(chunk, offset);
      offset += chunk.length;
    }

    return new TextDecoder().decode(decompressed);
  }

  // Cleanup
  destroy(): void {
    if (this.rotationTimer) {
      clearInterval(this.rotationTimer);
      this.rotationTimer = null;
    }
    
    this.keys.clear();
    this.activeKeyId = null;
  }

  // Getters
  get activeKey(): EncryptionKey | null {
    return this.activeKeyId ? this.keys.get(this.activeKeyId) || null : null;
  }

  get keyCount(): number {
    return this.keys.size;
  }

  getKeyInfo(): Array<{ id: string; createdAt: number; isActive: boolean }> {
    return Array.from(this.keys.values()).map(key => ({
      id: key.id,
      createdAt: key.createdAt,
      isActive: key.isActive
    }));
  }
}

// Create and export singleton instance
export const encryptionService = new DataEncryptionService();

// Export types and service
export default encryptionService;