import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  console.log('🕉️ KARPATRI DHAM BUILD MODE:', mode)

    return {
    base: '/', // Base path for deployment
  plugins: [
    react({
      // Optimize JSX runtime
      jsxRuntime: 'automatic',
    }),
    ViteRestart({
      restart: [
        'vite.config.ts',
        'src/siteConfig.ts',
        'src/theme.ts'
      ]
    }),
    // Progressive Web App configuration
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          }
        ]
      },
      manifest: {
          name: 'Karpatri Dham - Universal Educational Framework',
          short_name: 'Karpatri Dham',
          description: 'Open-source educational knowledge repository inspired by Dharmasamrat Swami Karpatri\'s vision of universal knowledge access',
        theme_color: '#1e40af',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        lang: 'en',
        dir: 'ltr',
          categories: ['education', 'knowledge', 'spiritual', 'learning'],
        screenshots: [
          {
              src: '/assets/karpatri-banner.svg',
            sizes: '1200x630',
            type: 'image/svg+xml',
            form_factor: 'wide',
              label: 'Karpatri Dham Educational Platform'
          }
        ],
        icons: [
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '72x72',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '96x96',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '128x128',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '144x144',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '152x152',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '384x384',
            type: 'image/svg+xml',
            purpose: 'any'
          },
          {
              src: '/assets/karpatri-logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
              name: 'Courses',
              short_name: 'Courses',
              description: 'Browse educational courses',
              url: '/courses',
              icons: [{ src: '/assets/karpatri-logo.svg', sizes: '96x96' }]
          },
          {
              name: 'Knowledge',
              short_name: 'Knowledge',
              description: 'Access knowledge repository',
              url: '/services',
              icons: [{ src: '/assets/karpatri-logo.svg', sizes: '96x96' }]
          }
        ]
      }
    }),
    // Bundle analyzer for performance optimization
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    })
  ],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.md'],
    // Optimized dependencies for educational platform
  optimizeDeps: {
    include: [
      'react-markdown', 
      'remark-gfm',
      '@chakra-ui/react',
      '@chakra-ui/icons',
      'framer-motion',
      'react-router-dom',
      'react-helmet-async'
      ]
  },
  build: {
    // Advanced build optimizations
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
            vendor: ['react', 'react-dom'],
            ui: ['@chakra-ui/react', '@emotion/react'],
            router: ['react-router-dom'],
            markdown: ['react-markdown', 'remark-gfm']
          }
        }
        },
      // Optimize chunk size
    chunkSizeWarningLimit: 1000,
      // Source maps for debugging
      sourcemap: false
  },
  server: {
      port: 5173,
    host: true, 
      open: true
  },
  preview: {
    port: 4173,
      host: true
  }
  }
})
