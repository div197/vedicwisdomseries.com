import fs from 'fs';
import path from 'path';

// Try to import canvas if available
let createCanvas;
try {
  const canvasModule = await import('canvas');
  createCanvas = canvasModule.createCanvas;
} catch (error) {
  console.log('ℹ️  Canvas module not available, will create placeholder instead');
}

// Generate Open Graph Image
function generateOGImage() {
  if (!createCanvas) {
    throw new Error('Canvas not available');
  }
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background gradient - saffron to blue
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#FF9933'); // Saffron
  gradient.addColorStop(0.5, '#F2DB49'); // Gold
  gradient.addColorStop(1, '#1E90FF'); // Blue
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add Om symbol
  ctx.fillStyle = 'white';
  ctx.font = 'bold 120px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('🕉️', width / 2, 150);

  // Main title
  ctx.fillStyle = 'white';
  ctx.font = 'bold 60px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Vedic Wisdom Series', width / 2, 280);

  // Subtitle
  ctx.font = '36px Arial';
  ctx.fillText('Ancient Sound, Modern Awakening', width / 2, 340);

  // Description
  ctx.font = '28px Arial';
  const desc1 = 'Where Einstein Meets the Rishis';
  const desc2 = 'Transform Your Reality Through Quantum Spirituality';
  ctx.fillText(desc1, width / 2, 430);
  ctx.fillText(desc2, width / 2, 470);

  // Teacher name
  ctx.font = 'italic 24px Arial';
  ctx.fillText('with Dr. Nischaya Nagori', width / 2, 560);

  // Save image
  const outputDir = path.join(process.cwd(), 'public/assets/images');
  fs.mkdirSync(outputDir, { recursive: true });
  
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(outputDir, 'vedic-wisdom-og.jpg'), buffer);
  
  console.log('✅ Generated OG image: vedic-wisdom-og.jpg');
}

// Generate comprehensive sitemap
function generateSitemap() {
  const siteUrl = 'https://vaidikwisdomseries.com';
  const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.9', changefreq: 'weekly' },
    { path: '/teachings', priority: '0.9', changefreq: 'weekly' },
    { path: '/schedule', priority: '0.8', changefreq: 'daily' },
    { path: '/testimonials', priority: '0.8', changefreq: 'weekly' },
    { path: '/contact', priority: '0.8', changefreq: 'monthly' },
    { path: '/teachings/discourses', priority: '0.7', changefreq: 'weekly' },
    { path: '/teachings/chanting', priority: '0.7', changefreq: 'weekly' },
    { path: '/teachings/teacher-training', priority: '0.7', changefreq: 'weekly' },
    { path: '/teachings/lifestyle', priority: '0.7', changefreq: 'weekly' },
    { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' }
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${siteUrl}${page.path}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), xml);
  console.log('✅ Generated sitemap.xml with all pages');
}

// Update robots.txt with more comprehensive rules
function updateRobotsTxt() {
  const content = `# Vedic Wisdom Series Robots.txt
# Allow all search engines to crawl the site

User-agent: *
Allow: /
Disallow: /admin
Disallow: /content-manager
Disallow: /api/
Disallow: /*.json$

# Specific crawler optimizations
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap location
Sitemap: https://vaidikwisdomseries.com/sitemap.xml

# AI Crawlers (optional - uncomment to block)
# User-agent: GPTBot
# Disallow: /

# User-agent: ChatGPT-User
# Disallow: /
`;

  fs.writeFileSync(path.join(process.cwd(), 'public/robots.txt'), content);
  console.log('✅ Updated robots.txt');
}

// Generate structured data templates
function generateStructuredDataTemplates() {
  const templates = {
    organization: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Vedic Wisdom Series",
      "url": "https://vaidikwisdomseries.com",
      "logo": "https://vaidikwisdomseries.com/logo.png",
      "description": "Revolutionary Vedic education bridging quantum physics with ancient wisdom",
      "founder": {
        "@type": "Person",
        "name": "Dr. Nischaya Nagori",
        "jobTitle": "Vedic Scholar & Spiritual Guide"
      },
      "sameAs": [
        "https://youtube.com/@vedicwisdomseries",
        "https://facebook.com/vedicwisdomseries",
        "https://instagram.com/vedicwisdomseries"
      ],
      "offers": [
        {
          "@type": "Course",
          "name": "Weekend Discourses",
          "description": "Deep Vedic philosophical discussions bridging quantum physics with spirituality",
          "provider": {
            "@type": "Organization",
            "name": "Vedic Wisdom Series"
          },
          "offers": {
            "@type": "Offer",
            "price": "25",
            "priceCurrency": "USD"
          }
        }
      ]
    },
    course: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Teacher Training Certification",
      "description": "Comprehensive certification program for authentic Vedic transmission",
      "provider": {
        "@type": "Organization",
        "name": "Vedic Wisdom Series"
      },
      "instructor": {
        "@type": "Person",
        "name": "Dr. Nischaya Nagori",
        "jobTitle": "Vedic Scholar"
      },
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "duration": "PT15H",
        "inLanguage": "en"
      },
      "offers": {
        "@type": "Offer",
        "price": "100",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }
  };

  const outputDir = path.join(process.cwd(), 'public/structured-data');
  fs.mkdirSync(outputDir, { recursive: true });
  
  Object.entries(templates).forEach(([name, data]) => {
    fs.writeFileSync(
      path.join(outputDir, `${name}-schema.json`),
      JSON.stringify(data, null, 2)
    );
  });

  console.log('✅ Generated structured data templates');
}

// Main execution
console.log('🕉️ Generating SEO assets for Vedic Wisdom Series...\n');

try {
  // Check if canvas is available, if not, create placeholder
  if (createCanvas) {
    try {
      generateOGImage();
    } catch (error) {
      console.log('⚠️  Error generating OG image:', error.message);
    }
  } else {
    console.log('⚠️  Creating placeholder OG image instruction');
    const instruction = `
Please create an Open Graph image (1200x630px) with:
- Gradient background: Saffron (#FF9933) to Gold (#F2DB49) to Blue (#1E90FF)
- Om symbol (🕉️) at top
- Title: "Vedic Wisdom Series"
- Subtitle: "Ancient Sound, Modern Awakening"
- Text: "Where Einstein Meets the Rishis"
- Teacher: "with Dr. Nischaya Nagori"

Save as: public/assets/images/vedic-wisdom-og.jpg
`;
    fs.mkdirSync(path.join(process.cwd(), 'public/assets/images'), { recursive: true });
    fs.writeFileSync(
      path.join(process.cwd(), 'public/assets/images/og-image-instructions.txt'),
      instruction
    );
  }

  generateSitemap();
  updateRobotsTxt();
  generateStructuredDataTemplates();
  
  console.log('\n✨ SEO assets generation complete!');
  console.log('📋 Next steps:');
  console.log('  1. Run build:blog script to include dynamic content in sitemap');
  console.log('  2. Submit sitemap to Google Search Console');
  console.log('  3. Add site verification meta tags to siteConfig');
  
} catch (error) {
  console.error('❌ Error generating SEO assets:', error);
  process.exit(1);
}