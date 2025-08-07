import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccessibilityProvider, SkipLinks } from './components/providers/AccessibilityProvider'
import { SimpleErrorBoundary } from './components/providers/SimpleErrorBoundary'

// Layout Components  
import Header from './components/Header'
import Footer from './components/Footer'

// Direct page imports (no lazy loading for production stability)
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeachingsPage from './pages/TeachingsPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import TestimonialsPage from './pages/TestimonialsPage'

function App() {
  return (
    <SimpleErrorBoundary>
      <AccessibilityProvider>
        <SkipLinks />
        <div className="App">
          <SimpleErrorBoundary>
            <Header />
          </SimpleErrorBoundary>
          <main id="main-content" role="main">
            <SimpleErrorBoundary>
                <Routes>
                  {/* Core Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/teachings" element={<TeachingsPage />} />
                  <Route path="/testimonials" element={<TestimonialsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  
                  {/* Teaching Sub-routes */}
                  <Route path="/teachings/:program" element={<TeachingsPage />} />
                  
                  {/* Legal Pages */}
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  
                  {/* Catch-all redirect to home */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
            </SimpleErrorBoundary>
          </main>
          <SimpleErrorBoundary>
            <Footer />
          </SimpleErrorBoundary>
        </div>
      </AccessibilityProvider>
    </SimpleErrorBoundary>
  )
}

export default App;
