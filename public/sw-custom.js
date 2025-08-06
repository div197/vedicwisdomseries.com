// 🕉️ VEDIC WISDOM SERIES - ENHANCED SERVICE WORKER
// Production-grade offline capabilities with spiritual consciousness
// Implements advanced caching strategies for optimal performance

const CACHE_NAME = 'vedic-wisdom-v1.0.0';
const STATIC_CACHE = 'vedic-static-v1.0.0';
const DYNAMIC_CACHE = 'vedic-dynamic-v1.0.0';
const IMAGE_CACHE = 'vedic-images-v1.0.0';

// Critical resources to precache
const PRECACHE_URLS = [
  '/',
  '/manifest.json',
  '/assets/logos/android-chrome-192x192.png',
  '/assets/logos/android-chrome-512x512.png',
  '/offline.html'
];

// Cache strategies configuration
const CACHE_STRATEGIES = {
  // Static assets - Cache first for performance
  static: {
    pattern: /\.(js|css|woff|woff2|ttf|eot)$/,
    strategy: 'CacheFirst',
    cacheName: STATIC_CACHE,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    maxEntries: 50
  },
  
  // Images - Cache first with fallback
  images: {
    pattern: /\.(png|jpg|jpeg|svg|gif|webp)$/,
    strategy: 'CacheFirst',
    cacheName: IMAGE_CACHE,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    maxEntries: 100
  },
  
  // API calls - Network first with cache fallback
  api: {
    pattern: /\/api\//,
    strategy: 'NetworkFirst',
    cacheName: DYNAMIC_CACHE,
    maxAge: 5 * 60 * 1000, // 5 minutes
    maxEntries: 50
  },
  
  // Pages - Stale while revalidate for best UX
  pages: {
    pattern: /\/(?:about|teachings|contact|testimonials|schedule)/,
    strategy: 'StaleWhileRevalidate',
    cacheName: DYNAMIC_CACHE,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    maxEntries: 20
  }
};

// Install event - Precache critical resources
self.addEventListener('install', (event) => {
  console.log('🕉️ Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('🕉️ Service Worker: Precaching critical resources');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => {
        console.log('🕉️ Service Worker: Installation complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch((error) => {
        console.error('🕉️ Service Worker: Installation failed', error);
      })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('🕉️ Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && 
                cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== IMAGE_CACHE) {
              console.log('🕉️ Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('🕉️ Service Worker: Activation complete');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// Fetch event - Implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    handleRequest(request, url)
  );
});

// Main request handler with strategy selection
async function handleRequest(request, url) {
  try {
    // Determine cache strategy based on URL pattern
    const strategy = getCacheStrategy(url.pathname, request);
    
    switch (strategy.name) {
      case 'CacheFirst':
        return await cacheFirst(request, strategy);
      case 'NetworkFirst':
        return await networkFirst(request, strategy);
      case 'StaleWhileRevalidate':
        return await staleWhileRevalidate(request, strategy);
      default:
        return await networkOnly(request);
    }
  } catch (error) {
    console.error('🕉️ Service Worker: Request handling failed', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline.html');
    }
    
    // For other requests, try cache fallback
    return caches.match(request);
  }
}

// Determine appropriate cache strategy
function getCacheStrategy(pathname, request) {
  const url = request.url;
  
  // Check each strategy pattern
  for (const [name, config] of Object.entries(CACHE_STRATEGIES)) {
    if (config.pattern.test(url) || config.pattern.test(pathname)) {
      return { name: config.strategy, config, cacheName: config.cacheName };
    }
  }
  
  // Default strategy for unmatched requests
  return { 
    name: 'NetworkFirst', 
    config: CACHE_STRATEGIES.pages, 
    cacheName: DYNAMIC_CACHE 
  };
}

// Cache First Strategy - Ideal for static assets
async function cacheFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Check if cache is still fresh
    const cacheTime = await getCacheTimestamp(request, strategy.cacheName);
    if (cacheTime && (Date.now() - cacheTime < strategy.config.maxAge)) {
      return cachedResponse;
    }
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Cache the new response
      await cache.put(request, networkResponse.clone());
      await setCacheTimestamp(request, strategy.cacheName);
      
      // Clean up old entries if needed
      await cleanupCache(strategy.cacheName, strategy.config.maxEntries);
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || new Response('Offline - Content not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Network First Strategy - Ideal for API calls
async function networkFirst(request, strategy) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(strategy.cacheName);
      await cache.put(request, networkResponse.clone());
      await setCacheTimestamp(request, strategy.cacheName);
      await cleanupCache(strategy.cacheName, strategy.config.maxEntries);
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(strategy.cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Stale While Revalidate Strategy - Best UX for pages
async function staleWhileRevalidate(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always try to fetch fresh content in background
  const networkPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      await cache.put(request, networkResponse.clone());
      await setCacheTimestamp(request, strategy.cacheName);
      await cleanupCache(strategy.cacheName, strategy.config.maxEntries);
    }
    return networkResponse;
  }).catch(() => null);
  
  // Return cached response immediately if available
  if (cachedResponse) {
    // Background update (don't await)
    networkPromise.catch(() => {});
    return cachedResponse;
  }
  
  // If no cache, wait for network
  return await networkPromise || new Response('Offline - Content not available', {
    status: 503,
    statusText: 'Service Unavailable'
  });
}

// Network Only Strategy - For critical requests
async function networkOnly(request) {
  return await fetch(request);
}

// Cache timestamp management for freshness checking
async function setCacheTimestamp(request, cacheName) {
  const timestampCache = await caches.open(`${cacheName}-timestamps`);
  const timestamp = new Response(Date.now().toString());
  await timestampCache.put(request, timestamp);
}

async function getCacheTimestamp(request, cacheName) {
  try {
    const timestampCache = await caches.open(`${cacheName}-timestamps`);
    const timestampResponse = await timestampCache.match(request);
    if (timestampResponse) {
      const timestamp = await timestampResponse.text();
      return parseInt(timestamp);
    }
  } catch (error) {
    console.warn('🕉️ Service Worker: Timestamp retrieval failed', error);
  }
  return null;
}

// Cache cleanup to respect size limits
async function cleanupCache(cacheName, maxEntries) {
  if (!maxEntries) return;
  
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxEntries) {
    // Remove oldest entries (simple FIFO approach)
    const keysToDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(keysToDelete.map(key => cache.delete(key)));
    
    console.log(`🕉️ Service Worker: Cleaned up ${keysToDelete.length} entries from ${cacheName}`);
  }
}

// Background sync for future implementation
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('🕉️ Service Worker: Background sync triggered');
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  // Future implementation for offline form submissions, etc.
  console.log('🕉️ Service Worker: Performing background sync operations');
}

// Push notification handling for future implementation
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/assets/logos/android-chrome-192x192.png',
      badge: '/assets/logos/android-chrome-192x192.png',
      vibrate: [100, 50, 100],
      data: { url: '/' },
      actions: [
        {
          action: 'explore',
          title: '🕉️ Explore Teachings',
          icon: '/assets/logos/android-chrome-192x192.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('Vedic Wisdom Series', options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/teachings'));
  } else {
    event.waitUntil(clients.openWindow('/'));
  }
});

console.log('🕉️ Service Worker: Enhanced service worker loaded successfully');