// Minimal PWA configuration for Vite PWA plugin
export const pwaConfiguration = {
  registerType: 'autoUpdate' as const,
  manifest: {
    name: 'Vedic Wisdom Series',
    short_name: 'VWS',
    description: 'Ancient Vedic wisdom meets modern quantum science',
    theme_color: '#FF9933',
    background_color: '#ffffff',
    display: 'standalone' as const,
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml'
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon'
      }
    ]
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst' as const,
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
          }
        }
      }
    ]
  }
}