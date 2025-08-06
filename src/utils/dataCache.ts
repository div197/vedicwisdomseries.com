// 🕉️ TAURUS AGENT DATA CACHING SYSTEM
// Enterprise-grade IndexedDB caching for Vedic Wisdom Series
// Optimized for global access with offline capability

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  version: string;
  expires: number;
}

interface CacheConfig {
  dbName: string;
  version: number;
  stores: string[];
  defaultTTL: number; // Time to live in milliseconds
}

class VedicDataCache {
  private db: IDBDatabase | null = null;
  private config: CacheConfig;
  private initPromise: Promise<void> | null = null;

  constructor(config: CacheConfig) {
    this.config = config;
  }

  async init(): Promise<void> {
    if (this.initPromise) return this.initPromise;

    this.initPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.config.dbName, this.config.version);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        
        // Create stores if they don't exist
        this.config.stores.forEach(storeName => {
          if (!db.objectStoreNames.contains(storeName)) {
            const store = db.createObjectStore(storeName, { keyPath: 'key' });
            store.createIndex('timestamp', 'timestamp');
            store.createIndex('expires', 'expires');
          }
        });
      };
    });

    return this.initPromise;
  }

  async set<T>(store: string, key: string, data: T, ttl?: number): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const expires = Date.now() + (ttl || this.config.defaultTTL);
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      version: '1.0.0',
      expires
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([store], 'readwrite');
      const objectStore = transaction.objectStore(store);
      const request = objectStore.put({ key, ...entry });

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async get<T>(store: string, key: string): Promise<T | null> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([store], 'readonly');
      const objectStore = transaction.objectStore(store);
      const request = objectStore.get(key);

      request.onsuccess = () => {
        const result = request.result;
        if (!result) {
          resolve(null);
          return;
        }

        // Check if entry has expired
        if (Date.now() > result.expires) {
          this.delete(store, key); // Clean up expired entry
          resolve(null);
          return;
        }

        resolve(result.data);
      };

      request.onerror = () => reject(request.error);
    });
  }

  async delete(store: string, key: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([store], 'readwrite');
      const objectStore = transaction.objectStore(store);
      const request = objectStore.delete(key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async clear(store: string): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([store], 'readwrite');
      const objectStore = transaction.objectStore(store);
      const request = objectStore.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async cleanExpired(): Promise<void> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const now = Date.now();
    
    for (const storeName of this.config.stores) {
      await new Promise<void>((resolve, reject) => {
        const transaction = this.db!.transaction([storeName], 'readwrite');
        const objectStore = transaction.objectStore(storeName);
        const index = objectStore.index('expires');
        const range = IDBKeyRange.upperBound(now);
        const request = index.openCursor(range);

        request.onsuccess = (event) => {
          const cursor = (event.target as IDBRequest).result;
          if (cursor) {
            cursor.delete();
            cursor.continue();
          } else {
            resolve();
          }
        };

        request.onerror = () => reject(request.error);
      });
    }
  }

  async getStats(): Promise<Record<string, number>> {
    await this.init();
    if (!this.db) throw new Error('Database not initialized');

    const stats: Record<string, number> = {};

    for (const storeName of this.config.stores) {
      await new Promise<void>((resolve, reject) => {
        const transaction = this.db!.transaction([storeName], 'readonly');
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.count();

        request.onsuccess = () => {
          stats[storeName] = request.result;
          resolve();
        };

        request.onerror = () => reject(request.error);
      });
    }

    return stats;
  }
}

// Singleton instance for the app
export const vedicCache = new VedicDataCache({
  dbName: 'VedicWisdomCache',
  version: 1,
  stores: ['content', 'offerings', 'testimonials', 'teacher', 'metadata'],
  defaultTTL: 24 * 60 * 60 * 1000 // 24 hours
});

// Convenience functions for common operations
export const cacheHelpers = {
  // Cache offerings with 6-hour TTL (more dynamic content)
  setOfferings: (data: any) => vedicCache.set('offerings', 'current', data, 6 * 60 * 60 * 1000),
  getOfferings: () => vedicCache.get('offerings', 'current'),

  // Cache teacher profile with 24-hour TTL
  setTeacher: (data: any) => vedicCache.set('teacher', 'profile', data),
  getTeacher: () => vedicCache.get('teacher', 'profile'),

  // Cache testimonials with 12-hour TTL
  setTestimonials: (data: any) => vedicCache.set('testimonials', 'current', data, 12 * 60 * 60 * 1000),
  getTestimonials: () => vedicCache.get('testimonials', 'current'),

  // Cache content master with 1-hour TTL (frequently updated)
  setContentMaster: (data: any) => vedicCache.set('content', 'master', data, 60 * 60 * 1000),
  getContentMaster: () => vedicCache.get('content', 'master'),

  // Cache metadata with 30-day TTL
  setMetadata: (key: string, data: any) => vedicCache.set('metadata', key, data, 30 * 24 * 60 * 60 * 1000),
  getMetadata: (key: string) => vedicCache.get('metadata', key),

  // Initialize and clean up expired entries
  initialize: async () => {
    await vedicCache.init();
    await vedicCache.cleanExpired();
  },

  // Get cache statistics
  getStats: () => vedicCache.getStats(),

  // Clear all cache
  clearAll: async () => {
    for (const store of ['content', 'offerings', 'testimonials', 'teacher', 'metadata']) {
      await vedicCache.clear(store);
    }
  }
};

// Hook for React components
import { useEffect, useState } from 'react';

export function useVedicCache<T>(
  store: string, 
  key: string, 
  fallbackData: T,
  refetchFunction?: () => Promise<T>
): [T, boolean, () => Promise<void>] {
  const [data, setData] = useState<T>(fallbackData);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = async () => {
    setIsLoading(true);
    try {
      // Try cache first
      const cached = await vedicCache.get<T>(store, key);
      if (cached) {
        setData(cached);
        setIsLoading(false);
        return;
      }

      // Fallback to refetch function if available
      if (refetchFunction) {
        const freshData = await refetchFunction();
        setData(freshData);
        // Cache the fresh data
        await vedicCache.set(store, key, freshData);
      } else {
        setData(fallbackData);
      }
    } catch (error) {
      console.error('Cache error:', error);
      setData(fallbackData);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [store, key]);

  return [data, isLoading, refresh];
}

// Performance monitoring
export const cacheMetrics = {
  hits: 0,
  misses: 0,
  errors: 0,
  
  recordHit: () => cacheMetrics.hits++,
  recordMiss: () => cacheMetrics.misses++,
  recordError: () => cacheMetrics.errors++,
  
  getHitRate: () => {
    const total = cacheMetrics.hits + cacheMetrics.misses;
    return total > 0 ? (cacheMetrics.hits / total) * 100 : 0;
  },
  
  reset: () => {
    cacheMetrics.hits = 0;
    cacheMetrics.misses = 0;
    cacheMetrics.errors = 0;
  }
};