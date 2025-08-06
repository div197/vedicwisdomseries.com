import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccessibilityProvider, SkipLinks } from './components/providers/AccessibilityProvider'
import { SimpleErrorBoundary } from './components/providers/SimpleErrorBoundary'
import { PageLoadingSpinner } from './components/LoadingSpinner'

// Layout Components (Critical - keep synchronous)
import Header from './components/Header'
import Footer from './components/Footer'
import PageWrapper from './components/layout/PageWrapper'
import PerformanceMonitor from './components/PerformanceMonitor'

// Lazy-loaded Pages for optimal code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const TeachingsPage = React.lazy(() => import('./pages/TeachingsPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'))
const TestimonialsPage = React.lazy(() => import('./pages/TestimonialsPage'))
const SchedulePage = React.lazy(() => import('./pages/SchedulePage'))

function App() {
  return (
    <SimpleErrorBoundary>
      <AccessibilityProvider>
        <SkipLinks />
        <div className="App">
          <SimpleErrorBoundary>
            <Header id="main-navigation" />
          </SimpleErrorBoundary>
          <PageWrapper id="main-content">
            <SimpleErrorBoundary>
              <Suspense fallback={<PageLoadingSpinner />}>
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
              </Suspense>
            </SimpleErrorBoundary>
          </PageWrapper>
          <SimpleErrorBoundary>
            <Footer />
          </SimpleErrorBoundary>
          {/* <PerformanceMonitor /> */}
        </div>
      </AccessibilityProvider>
    </SimpleErrorBoundary>
  )
}

export default App;
