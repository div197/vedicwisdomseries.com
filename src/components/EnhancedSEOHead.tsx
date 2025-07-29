// 🕉️ ENHANCED SEO HEAD - WordPress Yoast-Level Capabilities
// Advanced SEO features that match and exceed WordPress standards

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';

interface EnhancedSEOProps {
  // Basic SEO
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  
  // Advanced Meta
  focusKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  
  // Open Graph
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'course' | 'event';
  ogUrl?: string;
  
  // Twitter Cards
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  
  // Article/Course specific
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
  
  // Structured Data
  structuredData?: object;
  breadcrumbs?: Array<{ name: string; url: string }>;
  
  // Advanced Settings
  language?: string;
  alternate?: Array<{ hreflang: string; href: string }>;
  robots?: string;
}

export const EnhancedSEOHead: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords = [],
  canonicalUrl,
  focusKeyword,
  metaTitle,
  metaDescription,
  noIndex = false,
  noFollow = false,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite = '@vedicwisdom',
  twitterCreator,
  twitterTitle,
  twitterDescription,
  twitterImage,
  publishedTime,
  modifiedTime,
  author,
  category,
  tags = [],
  structuredData,
  breadcrumbs,
  language = 'en',
  alternate = [],
  robots
}) => {
  // Generate optimized meta title
  const generateMetaTitle = () => {
    if (metaTitle) return metaTitle;
    if (title) {
      // WordPress-style title optimization
      return title.length > 60 ? `${title.substring(0, 57)}...` : title;
    }
    return siteConfig.siteName;
  };

  // Generate optimized meta description
  const generateMetaDescription = () => {
    if (metaDescription) return metaDescription;
    if (description) {
      // WordPress-style description optimization
      return description.length > 160 ? `${description.substring(0, 157)}...` : description;
    }
    return siteConfig.siteDescription;
  };

  // Generate robots meta
  const generateRobots = () => {
    if (robots) return robots;
    
    const robotsDirectives = [];
    
    if (noIndex) robotsDirectives.push('noindex');
    else robotsDirectives.push('index');
    
    if (noFollow) robotsDirectives.push('nofollow');
    else robotsDirectives.push('follow');
    
    // WordPress-style additional directives
    robotsDirectives.push('max-snippet:-1');
    robotsDirectives.push('max-image-preview:large');
    robotsDirectives.push('max-video-preview:-1');
    
    return robotsDirectives.join(', ');
  };

  // Generate structured data for breadcrumbs
  const generateBreadcrumbStructuredData = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  };

  // Generate course-specific structured data
  const generateCourseStructuredData = () => {
    if (ogType !== 'course') return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": ogTitle || generateMetaTitle(),
      "description": ogDescription || generateMetaDescription(),
      "provider": {
        "@type": "Organization",
        "name": siteConfig.author.name,
        "sameAs": siteConfig.siteUrl
      },
      "image": ogImage,
      "courseMode": "online",
      "educationalLevel": "beginner"
    };
  };

  // Combine all structured data
  const getAllStructuredData = () => {
    const allData = [];
    
    // Add custom structured data
    if (structuredData) {
      allData.push(structuredData);
    }
    
    // Add breadcrumbs
    const breadcrumbData = generateBreadcrumbStructuredData();
    if (breadcrumbData) {
      allData.push(breadcrumbData);
    }
    
    // Add course data
    const courseData = generateCourseStructuredData();
    if (courseData) {
      allData.push(courseData);
    }
    
    return allData;
  };

  const finalTitle = generateMetaTitle();
  const finalDescription = generateMetaDescription();
  const finalRobots = generateRobots();
  const allStructuredData = getAllStructuredData();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      
      {/* Keywords - WordPress style */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Focus keyword for SEO (hidden meta for tools) */}
      {focusKeyword && (
        <meta name="focus-keyword" content={focusKeyword} />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      <meta name="robots" content={finalRobots} />
      
      {/* Language */}
      <html lang={language} />
      
      {/* Alternate languages */}
      {alternate.map((alt, index) => (
        <link key={index} rel="alternate" hrefLang={alt.hreflang} href={alt.href} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta property="og:description" content={ogDescription || finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl || canonicalUrl || siteConfig.siteUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:alt" content={ogTitle || finalTitle} />}
      
      {/* Article/Course specific OG tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {category && <meta property="article:section" content={category} />}
      
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta name="twitter:title" content={twitterTitle || ogTitle || finalTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || finalDescription} />
      {(twitterImage || ogImage) && <meta name="twitter:image" content={twitterImage || ogImage} />}
      
      {/* Author Information */}
      {author && <meta name="author" content={author} />}
      
      {/* SEO Performance Tags */}
      <meta name="generator" content="Karpatri Dham Framework" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      
      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      
      {/* WordPress-style SEO enhancements */}
      <meta name="theme-color" content={siteConfig.colors.primary} />
      <meta name="msapplication-TileColor" content={siteConfig.colors.primary} />
      
      {/* Performance and Security */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Security Headers via Meta */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
};

export default EnhancedSEOHead;