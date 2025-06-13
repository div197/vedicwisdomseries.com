import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';

export interface ArticleData {
  author: string;
  publishedTime: string;
  modifiedTime?: string;
  tags: string[];
  section?: string;
}

export interface OrganizationData {
  name: string;
  url: string;
  logo: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export interface SEOHeadProps {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  image?: string;
  url?: string;
  article?: ArticleData;
  organization?: OrganizationData;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, unknown> | null;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  type = 'website',
  image,
  url,
  article,
  organization,
  keywords = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
}) => {
  // Construct full URLs
  const fullUrl = url ? `${siteConfig.siteUrl}${url}` : siteConfig.siteUrl;
  const fullImage = image ? 
    (image.startsWith('http') ? image : `${siteConfig.siteUrl}${image}`) : 
    `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`;
  const canonicalUrl = canonical ? `${siteConfig.siteUrl}${canonical}` : fullUrl;

  // Generate structured data
  const generateStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'website' ? 'WebSite' : 'WebPage',
      name: title,
      description,
      url: fullUrl,
      image: fullImage,
      publisher: {
        '@type': 'Organization',
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.siteUrl}${siteConfig.assets.logo.main}`,
        },
      },
    };

    // Add article-specific data
    if (type === 'article' && article) {
      return {
        ...baseData,
        '@type': 'Article',
        headline: title,
        author: {
          '@type': 'Person',
          name: article.author,
        },
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        keywords: article.tags.join(', '),
        articleSection: article.section,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': fullUrl,
        },
      };
    }

    // Add organization data
    if (organization) {
      return {
        ...baseData,
        '@type': 'Organization',
        name: organization.name,
        url: organization.url,
        logo: {
          '@type': 'ImageObject',
          url: organization.logo,
        },
        contactPoint: organization.contactPoint ? {
          '@type': 'ContactPoint',
          telephone: organization.contactPoint.telephone,
          contactType: organization.contactPoint.contactType,
        } : undefined,
        address: organization.address ? {
          '@type': 'PostalAddress',
          streetAddress: organization.address.streetAddress,
          addressLocality: organization.address.addressLocality,
          addressRegion: organization.address.addressRegion,
          postalCode: organization.address.postalCode,
          addressCountry: organization.address.addressCountry,
        } : undefined,
        sameAs: organization.sameAs,
      };
    }

    // Use custom structured data if provided
    if (structuredData) {
      return {
        ...baseData,
        ...structuredData,
      };
    }

    return baseData;
  };

  const structuredDataJson = JSON.stringify(generateStructuredData());

  // Generate robots meta content
  const robotsContent = () => {
    const robots = [];
    if (noindex) robots.push('noindex');
    if (nofollow) robots.push('nofollow');
    if (robots.length === 0) robots.push('index', 'follow');
    return robots.join(', ');
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent()} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific Open Graph */}
      {type === 'article' && article && (
        <>
          <meta property="article:author" content={article.author} />
          <meta property="article:published_time" content={article.publishedTime} />
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@karpatridham" />
      <meta name="twitter:creator" content="@karpatridham" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content={siteConfig.theme.colors.primary} />
      <meta name="msapplication-TileColor" content={siteConfig.theme.colors.primary} />
      <meta name="application-name" content={siteConfig.siteName} />
      <meta name="apple-mobile-web-app-title" content={siteConfig.siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href={siteConfig.assets.logo.favicon} />
      <link rel="apple-touch-icon" href={siteConfig.assets.logo.main} />
      <link rel="mask-icon" href={siteConfig.assets.logo.main} color={siteConfig.theme.colors.primary} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {structuredDataJson}
      </script>
      
      {/* Additional structured data for website */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.siteName,
            url: siteConfig.siteUrl,
            description: siteConfig.defaultMetaDescription,
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`,
              },
              'query-input': 'required name=search_term_string',
            },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.siteName,
              url: siteConfig.siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.siteUrl}${siteConfig.assets.logo.main}`,
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: siteConfig.contact.phones[0]?.number,
                contactType: 'customer service',
                email: siteConfig.contact.email,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.contact.address.split('<br>')[0],
                addressLocality: siteConfig.contact.address.split('<br>')[1]?.split(',')[0],
                addressRegion: siteConfig.contact.address.split('<br>')[1]?.split(',')[1]?.trim().split(' ')[0],
                postalCode: siteConfig.contact.address.split('<br>')[1]?.split(',')[1]?.trim().split(' ')[1],
                addressCountry: 'US',
              },
              sameAs: siteConfig.contact.socialLinks
                .filter(link => link.enabled)
                .map(link => link.href),
            },
          })}
        </script>
      )}
      
      {/* Breadcrumb structured data for articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteConfig.siteUrl,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'News',
                item: `${siteConfig.siteUrl}/news`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: fullUrl,
              },
            ],
          })}
        </script>
      )}
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Viewport and responsive design */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      
      {/* Language and locale */}
      <meta httpEquiv="Content-Language" content="en" />
      <html lang="en" />
    </Helmet>
  );
};

export default SEOHead; 
