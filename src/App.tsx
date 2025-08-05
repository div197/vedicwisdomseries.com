import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccessibilityProvider, SkipLinks } from './components/providers/AccessibilityProvider'
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
    <AccessibilityProvider>
      <SkipLinks />
      <div className="App">
        <Header id="main-navigation" />
        <PageWrapper id="main-content">
          <Suspense fallback={<PageLoadingSpinner />}>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/teachings" element={<TeachingsPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              
              {/* Teaching Categories */}
              <Route path="/teachings/discourses" element={<TeachingsPage />} />
              <Route path="/teachings/chanting" element={<TeachingsPage />} />
              <Route path="/teachings/teacher-training" element={<TeachingsPage />} />
              <Route path="/teachings/lifestyle" element={<TeachingsPage />} />
              
              {/* Legacy Product Routes - Redirect to Teachings */}
              <Route path="/products" element={<TeachingsPage />} />
              <Route path="/products/*" element={<TeachingsPage />} />
              <Route path="/quality" element={<AboutPage />} />
              <Route path="/knowledge-center" element={<TeachingsPage />} />


              {/* Legacy Routes - Redirect to appropriate pages */}
              <Route path="/exports" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </PageWrapper>
        <Footer />
        <PerformanceMonitor />
      </div>
    </AccessibilityProvider>
  )
}

export default App;
