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
import SchedulePage from './pages/SchedulePage'

function App() {
  return (
    <SimpleErrorBoundary>
      <AccessibilityProvider>
        <SkipLinks />
        <div className="App">
          <SimpleErrorBoundary>
            <Header id="main-navigation" />
          </SimpleErrorBoundary>
          <main id="main-content" role="main">
            <SimpleErrorBoundary>
                <Routes>
                  {/* Public Routes - Each wrapped in error boundary */}
                  <Route path="/" element={
                    <SimpleErrorBoundary>
                      <HomePage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/about" element={
                    <SimpleErrorBoundary>
                      <AboutPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/teachings" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/schedule" element={
                    <SimpleErrorBoundary>
                      <SchedulePage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/testimonials" element={
                    <SimpleErrorBoundary>
                      <TestimonialsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/contact" element={
                    <SimpleErrorBoundary>
                      <ContactPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/privacy-policy" element={
                    <SimpleErrorBoundary>
                      <PrivacyPolicyPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/terms-of-service" element={
                    <SimpleErrorBoundary>
                      <TermsOfServicePage />
                    </SimpleErrorBoundary>
                  } />
                  
                  {/* Teaching Categories */}
                  <Route path="/teachings/discourses" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/teachings/chanting" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/teachings/teacher-training" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/teachings/lifestyle" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  
                  {/* Legacy Product Routes - Redirect to Teachings */}
                  <Route path="/products" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/products/*" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/quality" element={
                    <SimpleErrorBoundary>
                      <AboutPage />
                    </SimpleErrorBoundary>
                  } />
                  <Route path="/knowledge-center" element={
                    <SimpleErrorBoundary>
                      <TeachingsPage />
                    </SimpleErrorBoundary>
                  } />

                  {/* Legacy Routes - Redirect to appropriate pages */}
                  <Route path="/exports" element={
                    <SimpleErrorBoundary>
                      <AboutPage />
                    </SimpleErrorBoundary>
                  } />
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
