/**
 * SEO Optimization Utilities for Karpatri Dham Framework
 * Implements comprehensive SEO best practices for spiritual content
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'book' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, unknown>;
  robots?: string;
  language?: string;
  alternateLanguages?: { lang: string; url: string }[];
}

export interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultAuthor: string;
  defaultImage: string;
  twitterHandle: string;
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
}

/**
 * Generate comprehensive meta tags for SEO
 */
export const generateMetaTags = (metadata: SEOMetadata, config: SEOConfig): string => {
  const tags: string[] = [];

  // Basic meta tags
  tags.push(`<title>${metadata.title}</title>`);
  tags.push(`<meta name="description" content="${metadata.description}" />`);
  
  if (metadata.keywords && metadata.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${metadata.keywords.join(', ')}" />`);
  }
  
  tags.push(`<meta name="author" content="${metadata.author || config.defaultAuthor}" />`);
  
  if (metadata.canonical) {
    tags.push(`<link rel="canonical" href="${metadata.canonical}" />`);
  }
  
  if (metadata.robots) {
    tags.push(`<meta name="robots" content="${metadata.robots}" />`);
  }
  
  if (metadata.language) {
    tags.push(`<meta name="language" content="${metadata.language}" />`);
  }

  // Open Graph tags
  tags.push(`<meta property="og:title" content="${metadata.ogTitle || metadata.title}" />`);
  tags.push(`<meta property="og:description" content="${metadata.ogDescription || metadata.description}" />`);
  tags.push(`<meta property="og:image" content="${metadata.ogImage || config.defaultImage}" />`);
  tags.push(`<meta property="og:type" content="${metadata.ogType || 'website'}" />`);
  tags.push(`<meta property="og:site_name" content="${config.siteName}" />`);
  
  if (metadata.canonical) {
    tags.push(`<meta property="og:url" content="${metadata.canonical}" />`);
  }

  // Twitter Card tags
  tags.push(`<meta name="twitter:card" content="${metadata.twitterCard || 'summary_large_image'}" />`);
  tags.push(`<meta name="twitter:site" content="${metadata.twitterSite || config.twitterHandle}" />`);
  tags.push(`<meta name="twitter:creator" content="${metadata.twitterCreator || config.twitterHandle}" />`);
  tags.push(`<meta name="twitter:title" content="${metadata.ogTitle || metadata.title}" />`);
  tags.push(`<meta name="twitter:description" content="${metadata.ogDescription || metadata.description}" />`);
  tags.push(`<meta name="twitter:image" content="${metadata.ogImage || config.defaultImage}" />`);

  // Site verification tags
  if (config.googleSiteVerification) {
    tags.push(`<meta name="google-site-verification" content="${config.googleSiteVerification}" />`);
  }
  
  if (config.bingSiteVerification) {
    tags.push(`<meta name="msvalidate.01" content="${config.bingSiteVerification}" />`);
  }
  
  if (config.yandexVerification) {
    tags.push(`<meta name="yandex-verification" content="${config.yandexVerification}" />`);
  }

  // Facebook App ID
  if (config.facebookAppId) {
    tags.push(`<meta property="fb:app_id" content="${config.facebookAppId}" />`);
  }

  // Alternate language tags
  if (metadata.alternateLanguages && metadata.alternateLanguages.length > 0) {
    metadata.alternateLanguages.forEach(alt => {
      tags.push(`<link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`);
    });
  }

  return tags.join('\n');
};

/**
 * Generate structured data (JSON-LD) for spiritual content
 */
export const generateStructuredData = (
  type: 'Organization' | 'Article' | 'Course' | 'Event' | 'Person' | 'WebSite',
  data: Record<string, unknown>,
  config: SEOConfig
): string => {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  let structuredData: Record<string, unknown> = { ...baseStructure };

  switch (type) {
    case 'Organization':
      structuredData = {
        ...structuredData,
        name: config.siteName,
        url: config.siteUrl,
        logo: config.defaultImage,
        description: data.description || 'Spiritual wisdom and dharmic teachings',
        foundingDate: data.foundingDate,
        founder: data.founder,
        address: data.address,
        contactPoint: data.contactPoint,
        sameAs: data.socialProfiles || [],
        ...data
      };
      break;

    case 'Article':
      structuredData = {
        ...structuredData,
        headline: data.title,
        description: data.description,
        image: data.image || config.defaultImage,
        author: {
          '@type': 'Person',
          name: data.author || config.defaultAuthor
        },
        publisher: {
          '@type': 'Organization',
          name: config.siteName,
          logo: {
            '@type': 'ImageObject',
            url: config.defaultImage
          }
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        mainEntityOfPage: data.url,
        ...data
      };
      break;

    case 'Course':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Organization',
          name: config.siteName,
          url: config.siteUrl
        },
        courseCode: data.courseCode,
        educationalLevel: data.educationalLevel || 'Beginner',
        teaches: data.teaches || [],
        timeRequired: data.timeRequired,
        coursePrerequisites: data.coursePrerequisites,
        ...data
      };
      break;

    case 'Event':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: data.location,
        organizer: {
          '@type': 'Organization',
          name: config.siteName,
          url: config.siteUrl
        },
        eventStatus: data.eventStatus || 'https://schema.org/EventScheduled',
        eventAttendanceMode: data.eventAttendanceMode || 'https://schema.org/OnlineEventAttendanceMode',
        ...data
      };
      break;

    case 'WebSite':
      structuredData = {
        ...structuredData,
        name: config.siteName,
        url: config.siteUrl,
        description: data.description,
        publisher: {
          '@type': 'Organization',
          name: config.siteName
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${config.siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        },
        ...data
      };
      break;

    case 'Person':
      structuredData = {
        ...structuredData,
        name: data.name,
        description: data.description,
        image: data.image,
        jobTitle: data.jobTitle,
        affiliation: {
          '@type': 'Organization',
          name: config.siteName
        },
        sameAs: data.socialProfiles || [],
        ...data
      };
      break;

    default:
      structuredData = { ...structuredData, ...data };
  }

  return JSON.stringify(structuredData, null, 2);
};

/**
 * Generate sitemap XML for spiritual content
 */
export const generateSitemap = (
  pages: Array<{
    url: string;
    lastModified?: string;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>,
  config: SEOConfig
): string => {
  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const sitemapFooter = `</urlset>`;

  const urlEntries = pages.map(page => {
    const url = page.url.startsWith('http') ? page.url : `${config.siteUrl}${page.url}`;
    const lastmod = page.lastModified || new Date().toISOString().split('T')[0];
    const changefreq = page.changeFrequency || 'weekly';
    const priority = page.priority !== undefined ? page.priority : 0.8;

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `${sitemapHeader}\n${urlEntries}\n${sitemapFooter}`;
};

/**
 * Generate robots.txt content
 */
export const generateRobotsTxt = (
  config: SEOConfig,
  options: {
    allowAll?: boolean;
    disallowPaths?: string[];
    allowPaths?: string[];
    crawlDelay?: number;
    sitemapUrl?: string;
  } = {}
): string => {
  const {
    allowAll = true,
    disallowPaths = [],
    allowPaths = [],
    crawlDelay,
    sitemapUrl
  } = options;

  let robotsTxt = 'User-agent: *\n';

  if (allowAll) {
    robotsTxt += 'Allow: /\n';
  }

  // Add disallow paths
  disallowPaths.forEach(path => {
    robotsTxt += `Disallow: ${path}\n`;
  });

  // Add allow paths
  allowPaths.forEach(path => {
    robotsTxt += `Allow: ${path}\n`;
  });

  // Add crawl delay if specified
  if (crawlDelay) {
    robotsTxt += `Crawl-delay: ${crawlDelay}\n`;
  }

  // Add sitemap URL
  const sitemap = sitemapUrl || `${config.siteUrl}/sitemap.xml`;
  robotsTxt += `\nSitemap: ${sitemap}\n`;

  return robotsTxt;
};

/**
 * Optimize content for SEO
 */
export const optimizeContent = (content: string, targetKeywords: string[]): {
  optimizedContent: string;
  suggestions: string[];
  keywordDensity: Record<string, number>;
} => {
  const suggestions: string[] = [];
  const keywordDensity: Record<string, number> = {};
  
  // Calculate word count
  const words = content.toLowerCase().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Calculate keyword density
  targetKeywords.forEach(keyword => {
    const keywordLower = keyword.toLowerCase();
    const occurrences = content.toLowerCase().split(keywordLower).length - 1;
    const density = (occurrences / wordCount) * 100;
    keywordDensity[keyword] = density;

    // Provide suggestions based on keyword density
    if (density < 0.5) {
      suggestions.push(`Consider adding more instances of "${keyword}" (current density: ${density.toFixed(2)}%)`);
    } else if (density > 3) {
      suggestions.push(`Keyword "${keyword}" may be over-optimized (current density: ${density.toFixed(2)}%)`);
    }
  });

  // Check content length
  if (wordCount < 300) {
    suggestions.push('Content is quite short. Consider expanding to at least 300 words for better SEO.');
  } else if (wordCount > 2000) {
    suggestions.push('Content is very long. Consider breaking it into multiple pages or sections.');
  }

  // Check for headings
  const headingMatches = content.match(/<h[1-6][^>]*>.*?<\/h[1-6]>/gi);
  if (!headingMatches || headingMatches.length === 0) {
    suggestions.push('Add headings (H1, H2, H3) to improve content structure and SEO.');
  }

  // Check for images with alt text
  const imageMatches = content.match(/<img[^>]*>/gi);
  if (imageMatches) {
    const imagesWithoutAlt = imageMatches.filter(img => !img.includes('alt='));
    if (imagesWithoutAlt.length > 0) {
      suggestions.push(`${imagesWithoutAlt.length} image(s) missing alt text. Add descriptive alt attributes.`);
    }
  }

  return {
    optimizedContent: content, // For now, return original content
    suggestions,
    keywordDensity
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbStructuredData = (
  breadcrumbs: Array<{ name: string; url: string }>,
  config: SEOConfig
): string => {
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${config.siteUrl}${crumb.url}`
    }))
  };

  return JSON.stringify(breadcrumbList, null, 2);
};

/**
 * Generate FAQ structured data for spiritual content
 */
export const generateFAQStructuredData = (
  faqs: Array<{ question: string; answer: string }>
): string => {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return JSON.stringify(faqStructuredData, null, 2);
};

/**
 * SEO audit function
 */
export const auditSEO = (
  metadata: SEOMetadata,
  content: string,
  _config: SEOConfig
): {
  score: number;
  issues: Array<{ type: 'error' | 'warning' | 'info'; message: string }>;
  recommendations: string[];
} => {
  const issues: Array<{ type: 'error' | 'warning' | 'info'; message: string }> = [];
  const recommendations: string[] = [];
  let score = 100;

  // Title checks
  if (!metadata.title) {
    issues.push({ type: 'error', message: 'Missing page title' });
    score -= 20;
  } else {
    if (metadata.title.length < 30) {
      issues.push({ type: 'warning', message: 'Title is too short (< 30 characters)' });
      score -= 5;
    }
    if (metadata.title.length > 60) {
      issues.push({ type: 'warning', message: 'Title is too long (> 60 characters)' });
      score -= 5;
    }
  }

  // Description checks
  if (!metadata.description) {
    issues.push({ type: 'error', message: 'Missing meta description' });
    score -= 15;
  } else {
    if (metadata.description.length < 120) {
      issues.push({ type: 'warning', message: 'Meta description is too short (< 120 characters)' });
      score -= 5;
    }
    if (metadata.description.length > 160) {
      issues.push({ type: 'warning', message: 'Meta description is too long (> 160 characters)' });
      score -= 5;
    }
  }

  // Content checks
  const wordCount = content.split(/\s+/).length;
  if (wordCount < 300) {
    issues.push({ type: 'warning', message: 'Content is too short for good SEO' });
    score -= 10;
  }

  // Image checks
  const imageMatches = content.match(/<img[^>]*>/gi);
  if (imageMatches) {
    const imagesWithoutAlt = imageMatches.filter(img => !img.includes('alt='));
    if (imagesWithoutAlt.length > 0) {
      issues.push({ type: 'warning', message: `${imagesWithoutAlt.length} images missing alt text` });
      score -= 5;
    }
  }

  // Heading structure checks
  const h1Matches = content.match(/<h1[^>]*>.*?<\/h1>/gi);
  if (!h1Matches || h1Matches.length === 0) {
    issues.push({ type: 'warning', message: 'Missing H1 heading' });
    score -= 10;
  } else if (h1Matches.length > 1) {
    issues.push({ type: 'warning', message: 'Multiple H1 headings found' });
    score -= 5;
  }

  // Generate recommendations
  if (score < 80) {
    recommendations.push('Focus on fixing critical SEO issues first');
  }
  if (!metadata.canonical) {
    recommendations.push('Add canonical URL to prevent duplicate content issues');
  }
  if (!metadata.keywords || metadata.keywords.length === 0) {
    recommendations.push('Add relevant keywords for better content targeting');
  }

  return {
    score: Math.max(0, score),
    issues,
    recommendations
  };
};

export default {
  generateMetaTags,
  generateStructuredData,
  generateSitemap,
  generateRobotsTxt,
  optimizeContent,
  generateBreadcrumbStructuredData,
  generateFAQStructuredData,
  auditSEO
}; 