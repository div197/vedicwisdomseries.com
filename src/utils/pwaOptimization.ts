/**
 * PWA Optimization Utilities for Karpatri Dham Framework
 * Implements advanced Progressive Web App features for spiritual content
 */

export interface PWAConfig {
  name: string;
  shortName: string;
  description: string;
  themeColor: string;
  backgroundColor: string;
  display: 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser';
  orientation: 'portrait' | 'landscape' | 'any';
  startUrl: string;
  scope: string;
  icons: PWAIcon[];
  categories: string[];
  lang: string;
  dir: 'ltr' | 'rtl' | 'auto';
}

export interface PWAIcon {
  src: string;
  sizes: string;
  type: string;
  purpose?: 'any' | 'maskable' | 'monochrome';
}

export interface CacheStrategy {
  name: string;
  pattern: RegExp;
  strategy: 'CacheFirst' | 'NetworkFirst' | 'StaleWhileRevalidate' | 'NetworkOnly' | 'CacheOnly';
  options?: {
    cacheName?: string;
    expiration?: {
      maxEntries?: number;
      maxAgeSeconds?: number;
    };
  };
}

/**
 * Generate PWA manifest.json
 */
export const generatePWAManifest = (config: PWAConfig): string => {
  const manifest = {
    name: config.name,
    short_name: config.shortName,
    description: config.description,
    start_url: config.startUrl,
    scope: config.scope,
    display: config.display,
    orientation: config.orientation,
    theme_color: config.themeColor,
    background_color: config.backgroundColor,
    lang: config.lang,
    dir: config.dir,
    categories: config.categories,
    icons: config.icons,
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Sacred Teachings',
        short_name: 'Teachings',
        description: 'Access spiritual teachings and wisdom',
        url: '/teachings',
        icons: [{ src: '/icons/teachings-96x96.png', sizes: '96x96' }]
      },
      {
        name: 'Sacred Library',
        short_name: 'Library',
        description: 'Browse sacred texts and scriptures',
        url: '/library',
        icons: [{ src: '/icons/library-96x96.png', sizes: '96x96' }]
      },
      {
        name: 'Contact Guru',
        short_name: 'Contact',
        description: 'Connect with spiritual guidance',
        url: '/contact',
        icons: [{ src: '/icons/contact-96x96.png', sizes: '96x96' }]
      }
    ]
  };

  return JSON.stringify(manifest, null, 2);
};

/**
 * Generate service worker registration code
 */
export const generateServiceWorkerRegistration = (): string => {
  return `
// Service Worker Registration for Karpatri Dham Framework
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      
      console.log('🕉️ Service Worker registered successfully:', registration.scope);
      
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  });
}
`;
};

/**
 * Generate advanced service worker with caching strategies
 */
export const generateServiceWorker = (cacheStrategies: CacheStrategy[]): string => {
  return `
// Advanced Service Worker for Karpatri Dham Framework
// Implements spiritual content caching and offline functionality

import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

// Precache all static assets
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// Cache strategies for different content types
${cacheStrategies.map(strategy => `
// ${strategy.name}
registerRoute(
  ${strategy.pattern.toString()},
  new ${strategy.strategy}({
    cacheName: '${strategy.options?.cacheName || strategy.name.toLowerCase()}',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      ${strategy.options?.expiration ? `
      new ExpirationPlugin({
        maxEntries: ${strategy.options.expiration.maxEntries || 50},
        maxAgeSeconds: ${strategy.options.expiration.maxAgeSeconds || 30 * 24 * 60 * 60}, // 30 days
      }),` : ''}
    ],
  })
);`).join('\n')}

// Install event
self.addEventListener('install', (event) => {
  console.log('🕉️ Service Worker installing...');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('🕉️ Service Worker activated');
  event.waitUntil(clients.claim());
});
`;
};

/**
 * Check PWA installation status
 */
export const checkPWAInstallation = (): {
  isInstallable: boolean;
  isInstalled: boolean;
  platform: string;
} => {
  if (typeof window === 'undefined') {
    return { isInstallable: false, isInstalled: false, platform: 'server' };
  }

  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  
  let platform = 'desktop';
  if (isIOS) platform = 'ios';
  else if (isAndroid) platform = 'android';
  
  return {
    isInstallable: 'beforeinstallprompt' in window,
    isInstalled: isStandalone,
    platform
  };
};

/**
 * Generate offline page HTML
 */
export const generateOfflinePage = (config: PWAConfig): string => {
  return `
<!DOCTYPE html>
<html lang="${config.lang}" dir="${config.dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline - ${config.name}</title>
  <meta name="theme-color" content="${config.themeColor}">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, ${config.backgroundColor}, ${config.themeColor});
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
    .container {
      max-width: 400px;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
    }
    .icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1rem;
      background: ${config.themeColor};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
    h1 {
      margin: 0 0 1rem;
      color: ${config.themeColor};
      font-size: 1.5rem;
    }
    p {
      margin: 0 0 2rem;
      line-height: 1.6;
      color: #666;
    }
    .retry-btn {
      background: ${config.themeColor};
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .retry-btn:hover {
      transform: translateY(-2px);
    }
    .spiritual-quote {
      margin-top: 2rem;
      font-style: italic;
      color: #888;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">🕉️</div>
    <h1>You're Offline</h1>
    <p>It seems you've lost your connection to the digital realm. But remember, true wisdom comes from within.</p>
    <button class="retry-btn" onclick="window.location.reload()">
      Try Again
    </button>
    <div class="spiritual-quote">
      "The mind is everything. What you think you become." - Buddha
    </div>
  </div>
  
  <script>
    // Auto-retry when online
    window.addEventListener('online', () => {
      window.location.reload();
    });
    
    // Show connection status
    window.addEventListener('offline', () => {
      document.title = 'Offline - ${config.name}';
    });
    
    window.addEventListener('online', () => {
      document.title = '${config.name}';
    });
  </script>
</body>
</html>
`;
};

export default {
  generatePWAManifest,
  generateServiceWorkerRegistration,
  generateServiceWorker,
  checkPWAInstallation,
  generateOfflinePage
}; 