import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { VitePWA } from 'vite-plugin-pwa'
import { pwaConfiguration } from './src/utils/pwaOptimization'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(pwaConfiguration),
    visualizer({
      template: 'treemap',
      open: false,
      gzipSize: true,
      brotliSize: true,
      filename: 'bundle-analysis.html'
    })
  ],
  build: {
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove all console statements in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Optimize vendor chunks
          'react-core': ['react', 'react-dom', 'react-router-dom'],
          'chakra-ui': ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          'animations': ['framer-motion'],
          'icons': ['react-icons/fa', 'react-icons/ai', 'react-icons/bi'],
        },
        // Optimize chunk loading
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk'
          return `assets/js/${facadeModuleId}-[hash].js`
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          } else {
            return `assets/[name]-[hash][extname]`
          }
        }
      }
    },
    // Performance optimizations
    cssCodeSplit: true,
    sourcemap: false, // Disable sourcemaps in production
    reportCompressedSize: false, // Faster builds
    chunkSizeWarningLimit: 1000 // 1MB warning threshold
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@chakra-ui/react', 'framer-motion']
  },
  server: {
    port: 5173,
    host: true
  },
  preview: {
    port: 5173,
    host: true
  }
})