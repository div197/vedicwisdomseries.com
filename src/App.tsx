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
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/quality" element={<QualityPage />} />
                <Route path="/knowledge-center" element={<KnowledgeCenterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/news/:slug" element={<NewsArticlePage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                
                {/* Product Categories */}
                <Route path="/products/abrasives" element={<ProductsPage />} />
                <Route path="/products/minerals" element={<ProductsPage />} />
                <Route path="/products/machinery" element={<ProductsPage />} />
                <Route path="/products/hardware" element={<ProductsPage />} />

                {/* Content Management - Admin Only */}
                <Route path="/content-manager" element={<ContentManagerPage />} />
                <Route path="/admin" element={<ContentManagerPage />} />

                {/* Legacy Routes - Redirect to appropriate pages */}
                <Route path="/exports" element={<QualityPage />} />
          </Routes>
        </PageWrapper>
        <Footer />
        <PerformanceMonitor />
          </div>
    </AccessibilityProvider>
  )
}

export default App;
