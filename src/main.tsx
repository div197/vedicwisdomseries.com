import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { HelmetProvider } from 'react-helmet-async'
import theme from './theme'
import App from './App'
// SOTA Error Boundary System
import { ErrorBoundarySota } from './components/providers/ErrorBoundary-sota'

// Import global CSS reset
// import './index.css' // Already imported above

// Import desired fonts globally
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/700.css'; // Bold (if needed elsewhere)

import '@fontsource/geist-sans/300.css'; // Light
import '@fontsource/geist-sans/400.css'; // Regular

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundarySota 
      maxRetries={3}
      isolateErrors={true}
      onError={(error, errorInfo) => {
        // Production error logging would go here
        console.group('🚨 Karpatri Dham Application Error')
        console.error('Error:', error)
        console.log('Error Info:', errorInfo)
        console.groupEnd()
      }}
    >
      <HelmetProvider>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </ErrorBoundarySota>
  </React.StrictMode>
)
