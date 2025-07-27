import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './components/providers/AccessibilityProvider'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'
import PageWrapper from './components/layout/PageWrapper'
import PerformanceMonitor from './components/PerformanceMonitor'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TeachingsPage from './pages/TeachingsPage'
import ProductsPage from './pages/ProductsPage'
import QualityPage from './pages/QualityPage'
import KnowledgeCenterPage from './pages/KnowledgeCenterPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import NewsArticlePage from './pages/NewsArticlePage'
import CategoriesPage from './pages/CategoriesPage'
import GalleryPage from './pages/GalleryPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ContentManagerPage from './pages/ContentManagerPage'
import TestimonialsPage from './pages/TestimonialsPage'
import SchedulePage from './pages/SchedulePage'

function App() {
  return (
    <AccessibilityProvider>
          <div className="App">
        <Header />
        <PageWrapper>
          <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/teachings" element={<TeachingsPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsArticlePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
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

                {/* Content Management - Admin Only */}
                <Route path="/content-manager" element={<ContentManagerPage />} />
                <Route path="/admin" element={<ContentManagerPage />} />

                {/* Legacy Routes - Redirect to appropriate pages */}
                <Route path="/exports" element={<AboutPage />} />
          </Routes>
        </PageWrapper>
        <Footer />
        <PerformanceMonitor />
          </div>
    </AccessibilityProvider>
  )
}

export default App;
