import fs from 'fs';
import path from 'path';

// --- EMERGENCY SITEMAP FIX ---
// This script generates a complete sitemap with ALL pages from the Vedic Wisdom Series site
// Fixes the broken regex and missing page detection

const siteConfigPath = path.join(process.cwd(), 'src/siteConfig.ts');
const appTsxPath = path.join(process.cwd(), 'src/App.tsx');
const outputSitemapPath = path.join(process.cwd(), 'public/sitemap.xml');

console.log('🚀 EMERGENCY SITEMAP FIX - Generating complete sitemap...');

// --- CORRECTED siteConfig parsing ---
function getSiteConfigValues() {
  try {
    const configContent = fs.readFileSync(siteConfigPath, 'utf8');
    
    // Extract siteUrl
    const urlMatch = configContent.match(/siteUrl:\s*"([^"]*?)"/);
    const siteUrl = urlMatch ? urlMatch[1] : "https://vedicwisdomseries.com";
    
    // CORRECTED REGEX - matches actual siteConfig format with double quotes
    const navLinksMatch = configContent.match(/navigation:\s*{[\s\S]*?main:\s*(\[[\s\S]*?])/);
    let staticPages = [];
    
    if (navLinksMatch && navLinksMatch[1]) {
      try {
        // FIXED: Use double quotes and handle hasHero property
        const linkRegex = /{\s*label:\s*[^,]+,\s*href:\s*'([^']+)'(?:,\s*hasHero:\s*(?:true|false))?[^}]*}/g;
        let match;
        while ((match = linkRegex.exec(navLinksMatch[1])) !== null) {
          staticPages.push(match[1]);
        }
      } catch (parseError) {
        console.warn('WARN: Could not parse navigation from siteConfig.ts:', parseError);
      }
    }
    
    // ENHANCED: Extract teaching categories from footer
    const footerMatch = configContent.match(/footer:\s*{[\s\S]*?categories:\s*(\[[\s\S]*?])/);
    if (footerMatch && footerMatch[1]) {
      try {
        const categoryRegex = /href:\s*'([^']+)'/g;
        let match;
        while ((match = categoryRegex.exec(footerMatch[1])) !== null) {
          staticPages.push(match[1]);
        }
      } catch (parseError) {
        console.warn('WARN: Could not parse footer categories:', parseError);
      }
    }
    
    return { 
      siteUrl: siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl, 
      staticPages: [...new Set(staticPages)] // Remove duplicates
    };
  } catch (error) {
    console.warn('WARN: Could not read siteConfig.ts. Using defaults.', error);
    return { 
      siteUrl: 'https://vedicwisdomseries.com', 
      staticPages: []
    };
  }
}

// --- ENHANCED page discovery from App.tsx ---
function getRoutesFromApp() {
  try {
    const appContent = fs.readFileSync(appTsxPath, 'utf8');
    const routes = [];
    
    // Extract all Route path attributes
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      const path = match[1];
      // Exclude dynamic routes and root
      if (!path.includes(':') && !path.includes('*') && path !== '/') {
        routes.push(path);
      }
    }
    
    console.log(`📍 Discovered ${routes.length} routes from App.tsx`);
    return routes;
  } catch (error) {
    console.warn('WARN: Could not read App.tsx for route discovery.', error);
    return [];
  }
}

// --- COMPLETE static page list ---
function getAllStaticPages() {
  const configPages = getSiteConfigValues().staticPages;
  const routePages = getRoutesFromApp();
  
  // MANUAL FALLBACK - ensure all known pages are included
  const knownPages = [
    '/',
    '/about',
    '/teachings', 
    '/schedule',
    '/testimonials',
    '/contact',
    '/news',
    '/categories',
    '/gallery',
    '/privacy-policy',
    '/terms-of-service',
    '/teachings/discourses',
    '/teachings/chanting',
    '/teachings/teacher-training', 
    '/teachings/lifestyle'
  ];
  
  const allPages = [...new Set([...configPages, ...routePages, ...knownPages])];
  
  console.log(`🎯 Total pages for sitemap: ${allPages.length}`);
  console.log('📝 Pages:', allPages.sort());
  
  return allPages;
}

// --- ENHANCED sitemap generation ---
function generateCompleteSitemap() {
  const { siteUrl } = getSiteConfigValues();
  const allPages = getAllStaticPages();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add all pages with appropriate priorities
  allPages.forEach(pagePath => {
    if (pagePath && typeof pagePath === 'string') {
      const cleanPath = pagePath === '/' ? '' : pagePath;
      const priority = getPriorityForPage(pagePath);
      const changefreq = getChangefreqForPage(pagePath);
      
      xml += '  <url>\n';
      xml += `    <loc>${siteUrl}${cleanPath}</loc>\n`;
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    }
  });
  
  xml += '</urlset>';
  
  try {
    fs.writeFileSync(outputSitemapPath, xml);
    console.log(`✅ COMPLETE SITEMAP generated at ${outputSitemapPath}`);
    console.log(`📊 Included ${allPages.length} pages total`);
  } catch (error) {
    console.error('❌ Error writing sitemap file:', error);
  }
}

// --- SEO priority and frequency helpers ---
function getPriorityForPage(path) {
  if (path === '/') return '1.0';
  if (path === '/about' || path === '/teachings' || path === '/contact') return '0.9';
  if (path.startsWith('/teachings/')) return '0.8';
  if (path === '/schedule' || path === '/testimonials') return '0.7';
  if (path === '/news' || path === '/gallery') return '0.6';
  return '0.5';
}

function getChangefreqForPage(path) {
  if (path === '/') return 'daily';
  if (path === '/news' || path === '/schedule') return 'daily';
  if (path === '/teachings' || path.startsWith('/teachings/')) return 'weekly';
  if (path === '/testimonials' || path === '/gallery') return 'weekly';
  return 'monthly';
}

// --- Execute the fix ---
generateCompleteSitemap();