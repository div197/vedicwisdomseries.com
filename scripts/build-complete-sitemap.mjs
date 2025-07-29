#!/usr/bin/env node

// 🕉️ COMPLETE SITEMAP GENERATOR
// WordPress-level sitemap generation that actually works
// Reads routes from App.tsx and siteConfig.ts for 100% accuracy

import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public');
const outputSitemapPath = path.join(outputDir, 'sitemap.xml');
const appRoutesPath = path.join(process.cwd(), 'src/App.tsx');
const siteConfigPath = path.join(process.cwd(), 'src/siteConfig.ts');

console.log('🗺️ Building COMPLETE sitemap from actual routes...');

// Extract siteUrl from siteConfig
const extractSiteUrl = () => {
  try {
    const siteConfigContent = fs.readFileSync(siteConfigPath, 'utf8');
    const siteUrlMatch = siteConfigContent.match(/siteUrl:\s*['"](.*?)['"]/);
    const siteUrl = siteUrlMatch ? siteUrlMatch[1] : 'https://vedicwisdomseries.com';
    return siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
  } catch (error) {
    console.warn('WARN: Could not read siteConfig.ts, using default URL');
    return 'https://vedicwisdomseries.com';
  }
};

// Extract routes from App.tsx - much more reliable than regex parsing
const extractRoutesFromApp = () => {
  try {
    const appContent = fs.readFileSync(appRoutesPath, 'utf8');
    const routes = new Set();
    
    // Match all route definitions: <Route path="..." element={...} />
    const routeRegex = /<Route\s+path=["']([^"']+)["']/g;
    let match;
    
    while ((match = routeRegex.exec(appContent)) !== null) {
      const route = match[1];
      
      // Skip dynamic routes with parameters
      if (!route.includes(':') && !route.includes('*')) {
        routes.add(route);
      }
    }
    
    return Array.from(routes).sort();
  } catch (error) {
    console.error('ERROR: Could not read App.tsx routes:', error);
    // Fallback to known routes
    return [
      '/',
      '/about',
      '/teachings',
      '/teachings/discourses',
      '/teachings/chanting', 
      '/teachings/teacher-training',
      '/teachings/lifestyle',
      '/schedule',
      '/testimonials',
      '/contact',
      '/gallery',
      '/news',
      '/privacy-policy',
      '/terms-of-service'
    ];
  }
};

// Generate SEO-optimized sitemap priorities
const getSitemapPriority = (path) => {
  if (path === '/') return 1.0;
  if (['/about', '/teachings', '/contact'].includes(path)) return 0.9;
  if (path.startsWith('/teachings/')) return 0.8;
  if (['/schedule', '/testimonials', '/gallery'].includes(path)) return 0.7;
  if (path === '/news') return 0.6;
  if (['/privacy-policy', '/terms-of-service'].includes(path)) return 0.3;
  return 0.5;
};

// Get change frequency for SEO optimization
const getChangeFreq = (path) => {
  if (path === '/') return 'daily';
  if (['/news', '/schedule'].includes(path)) return 'weekly';
  if (['/teachings', '/about', '/contact'].includes(path)) return 'monthly';
  if (path.startsWith('/teachings/')) return 'monthly';
  return 'yearly';
};

// Generate XML sitemap
const generateSitemap = (siteUrl, routes) => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const urlEntries = routes.map(route => {
    const fullUrl = `${siteUrl}${route}`;
    const priority = getSitemapPriority(route);
    const changefreq = getChangeFreq(route);
    
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Main execution
const main = () => {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const siteUrl = extractSiteUrl();
    const routes = extractRoutesFromApp();
    
    console.log(`📍 Site URL: ${siteUrl}`);
    console.log(`📄 Routes found: ${routes.length}`);
    console.log('🔗 Routes:', routes.join(', '));
    
    const sitemapXml = generateSitemap(siteUrl, routes);
    
    // Write sitemap
    fs.writeFileSync(outputSitemapPath, sitemapXml);
    
    console.log(`✅ Complete sitemap generated at: ${outputSitemapPath}`);
    console.log(`🎯 Total pages in sitemap: ${routes.length}`);
    
    // Verify sitemap was created
    if (fs.existsSync(outputSitemapPath)) {
      const fileSize = fs.statSync(outputSitemapPath).size;
      console.log(`📊 Sitemap file size: ${fileSize} bytes`);
    }
    
  } catch (error) {
    console.error('❌ CRITICAL ERROR generating sitemap:', error);
    process.exit(1);
  }
};

main();