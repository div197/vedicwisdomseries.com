import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// --- Configuration ---
const contentDirName = 'news'; // Changed from 'blog'
const outputDataDirName = 'newsData'; // Changed from 'blogData'
const outputIndexDirName = 'newsIndex'; // Changed from 'blogIndex'
const outputManifestFileName = 'newsManifest.json'; // Updated to match hook
const postsDirectory = path.join(process.cwd(), `src/content/${contentDirName}`);
const outputDir = path.join(process.cwd(), 'public');
const outputPostsDir = path.join(outputDir, outputDataDirName);
const outputIndexDir = path.join(outputDir, outputIndexDirName);
const outputManifestPath = path.join(outputDir, outputManifestFileName);
const outputSitemapPath = path.join(outputDir, 'sitemap.xml');
const siteConfigPath = path.join(process.cwd(), 'src/siteConfig.ts');

const POSTS_PER_INDEX_CHUNK = 50;

console.log(`Building scalable ${contentDirName} index, post data, and sitemap...`);

// Robust slugify function (ensure consistency)
const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // Handle accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

// Helper function to write JSON files
const writeJsonFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
  }
};

// Helper function to sort posts by date (descending)
const sortByDateDesc = (a, b) => {
    const dateA = new Date(a?.date || 0);
    const dateB = new Date(b?.date || 0);
    return dateB.getTime() - dateA.getTime();
};

// Helper function to chunk an array
const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

// --- Function to generate and write index chunks --- 
const generateIndexChunks = (prefix, posts) => {
    if (!posts || posts.length === 0) return { totalPosts: 0, totalPages: 0 };

    posts.sort(sortByDateDesc); // Sort posts within the chunk group
    const chunks = chunkArray(posts, POSTS_PER_INDEX_CHUNK);
    const chunkInfo = { totalPosts: posts.length, totalPages: chunks.length || 1 };

    chunks.forEach((chunk, i) => {
        const filePath = path.join(outputIndexDir, `${prefix}_p${i + 1}.json`);
        writeJsonFile(filePath, chunk);
    });
    
    console.log(` -> ${prefix}: ${chunkInfo.totalPosts} posts, ${chunkInfo.totalPages} chunks.`);
    return chunkInfo;
};

// --- Helper function to extract site config values --- 
function getSiteConfigValues() {
  try {
    const configContent = fs.readFileSync(siteConfigPath, 'utf8');
    // Handle dynamic siteUrl configuration
    const urlMatch = configContent.match(/siteUrl:\s*(?:"([^"]*?)"|typeof window[^,]*?,\s*)/);
    let siteUrl = null;
    
    if (urlMatch && urlMatch[1]) {
      siteUrl = urlMatch[1];
    } else {
      // If dynamic configuration, use environment variable or default
      siteUrl = process.env.VITE_SITE_URL || "https://localhost:5173";
    }
    
    // Extract default author from config
    const authorMatch = configContent.match(/name:\s*"(.*?)"/);
    const defaultAuthor = authorMatch ? authorMatch[1] : 'Content Team';
    // Updated to match current siteConfig structure
    const navLinksMatch = configContent.match(/navigation:\s*{[\s\S]*?main:\s*(\[[\s\S]*?])/);
    let staticPages = [];
    if (navLinksMatch && navLinksMatch[1]) {
      try {
        const linkRegex = /{\s*label:\s*.*?,\s*href:\s*'([^']+)'}/g;
        let match;
        while ((match = linkRegex.exec(navLinksMatch[1])) !== null) {
            // Exclude the news/blog link itself from static pages in sitemap
            if (match[1] !== `/${contentDirName}`) {
            staticPages.push(match[1]);
            }
        }
      } catch (parseError) {
        console.warn(`WARN: Could not parse navLinks from siteConfig.ts for sitemap.`, parseError);
      }
    }
    if (!siteUrl) {
      console.warn("WARN: Could not extract siteUrl from siteConfig.ts for sitemap generation.");
      return { siteUrl: 'https://your-default-url.com', staticPages: [], defaultAuthor: 'Content Team' };
    }
    return { 
      siteUrl: siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl, 
      staticPages,
      defaultAuthor: defaultAuthor || 'Content Team'
    };
  } catch (error) {
    console.warn(`WARN: Could not read siteConfig.ts (${siteConfigPath}). Using defaults for sitemap.`, error);
    return { siteUrl: 'https://your-default-url.com', staticPages: [], defaultAuthor: 'Content Team' };
  }
}

// --- Helper to format date for sitemap --- 
const formatDateForSitemap = (dateString) => {
    try {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    } catch (e) {
        console.warn(`WARN: Could not parse date '${dateString}' for sitemap. Using current date.`);
        return new Date().toISOString().split('T')[0];
    }
};

// --- Main Processing Function --- 
function buildContentData() {
  const allPostsForIndex = [];
  const allPostsForSitemap = [];
  const postsByCategory = {};
  const postsByAuthor = {};
  const postsByTag = {};
  const postsByService = {}; // Added for service filtering

  const { siteUrl, staticPages, defaultAuthor } = getSiteConfigValues();

  try {
    // Clean previous build artifacts
    console.log('Cleaning previous build artifacts...');
    if (fs.existsSync(outputIndexDir)) {
      fs.rmSync(outputIndexDir, { recursive: true, force: true });
      console.log(` -> Removed directory: ${outputIndexDir}`);
    }
    if (fs.existsSync(outputPostsDir)) { // Also clean the individual post data dir
        fs.rmSync(outputPostsDir, { recursive: true, force: true });
        console.log(` -> Removed directory: ${outputPostsDir}`);
    }
    if (fs.existsSync(outputManifestPath)) {
      fs.unlinkSync(outputManifestPath);
      console.log(` -> Removed file: ${outputManifestPath}`);
    }
    if (fs.existsSync(outputSitemapPath)) {
      fs.unlinkSync(outputSitemapPath);
      console.log(` -> Removed file: ${outputSitemapPath}`);
    }

    // Ensure output directories exist
    fs.mkdirSync(outputPostsDir, { recursive: true });
    fs.mkdirSync(outputIndexDir, { recursive: true });

    // Check if content directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`WARN: Content directory not found: ${postsDirectory}. Skipping content processing.`);
      // Write empty manifest and sitemap to avoid build errors downstream
      writeJsonFile(outputManifestPath, {
          postsPerChunk: POSTS_PER_INDEX_CHUNK,
          totalPosts: 0,
          totalPages: 0,
          categories: {},
          authors: {},
          tags: {},
          services: {}
      });
      generateSitemap([], siteUrl, staticPages); // Generate sitemap with only static pages
      return; // Exit the function
    }

    const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
    console.log(`Found ${fileNames.length} markdown files in ${postsDirectory}`);
    
    for (const fileName of fileNames) {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data: frontmatter, content } = matter(fileContents);

      // --- Validation ---
      if (!frontmatter.title || !frontmatter.slug || !frontmatter.date) {
        console.warn(`WARN: Skipping ${fileName}: Missing required frontmatter (title, slug, date).`);
        continue;
      }
      const categorySlug = frontmatter.category ? slugify(frontmatter.category) : 'general'; // Default category if none provided

      // --- Data Preparation ---
      const authorName = frontmatter.author || defaultAuthor || null;
      const authorSlugValue = authorName ? slugify(authorName) : null;
      const tags = frontmatter.tags ? (Array.isArray(frontmatter.tags) ? frontmatter.tags : [frontmatter.tags]) : [];
      const tagSlugs = tags.map(tag => slugify(tag)).filter(Boolean);
      
          // Handle 'services' field (can be 'all', a single string, or an array)
    let serviceSlugs = [];
    if (frontmatter.services) {
      if (frontmatter.services === 'all') {
        serviceSlugs = ['all']; // Keep 'all' as a special marker if needed, or expand later
      } else if (Array.isArray(frontmatter.services)) {
        serviceSlugs = frontmatter.services.map(service => slugify(service)).filter(Boolean);
      } else if (typeof frontmatter.services === 'string') {
        serviceSlugs = [slugify(frontmatter.services)].filter(Boolean);
      }
    } else {
      serviceSlugs = ['general']; // Assign to a default 'general' service category if not specified
    }

      // --- Collect data for Sitemap --- 
      allPostsForSitemap.push({
          slug: frontmatter.slug,
          date: formatDateForSitemap(frontmatter.dateModified || frontmatter.date),
          pathPrefix: `/${contentDirName}` // Add path prefix for news articles
      });

      // Data needed for index files
      const indexEntry = {
        title: frontmatter.title,
        slug: frontmatter.slug,
        date: frontmatter.date,
        category: categorySlug,
        services: serviceSlugs, // Store processed service slugs
        tags: tagSlugs,
        excerpt: frontmatter.excerpt || null,
        featuredImage: frontmatter.featuredImage || null,
        author: authorName,
        authorSlug: authorSlugValue,
      };
      allPostsForIndex.push(indexEntry);

      // Group by category
      if (!postsByCategory[categorySlug]) postsByCategory[categorySlug] = [];
      postsByCategory[categorySlug].push(indexEntry);

      // Group by author
      if (authorSlugValue) {
        if (!postsByAuthor[authorSlugValue]) postsByAuthor[authorSlugValue] = [];
        postsByAuthor[authorSlugValue].push(indexEntry);
      }

      // Group by tag
      tagSlugs.forEach(tagSlug => {
        if (!postsByTag[tagSlug]) postsByTag[tagSlug] = [];
        postsByTag[tagSlug].push(indexEntry);
      });

      // Group by service
      serviceSlugs.forEach(serviceSlug => {
          if (!postsByService[serviceSlug]) postsByService[serviceSlug] = [];
          postsByService[serviceSlug].push(indexEntry);
      });

      // Data for individual post file
      const fullPostEntry = {
        ...frontmatter,
        authorSlug: authorSlugValue,
        category: categorySlug,
        services: serviceSlugs, // Store processed service slugs
        tags: tagSlugs,
        content: content.trim(),
      };
      const outputPostPath = path.join(outputPostsDir, `${frontmatter.slug}.json`);
      writeJsonFile(outputPostPath, fullPostEntry);
    }

    // --- Generate Index Chunks ---
    const allChunkInfo = generateIndexChunks('all', allPostsForIndex);

    // Generate index chunks for each category
    const categoryInfo = Object.entries(postsByCategory).reduce((acc, [slug, posts]) => {
        acc[slug] = generateIndexChunks(`cat_${slug}`, posts);
        return acc;
    }, {});

    // Generate index chunks for each author
    const authorInfo = Object.entries(postsByAuthor).reduce((acc, [slug, posts]) => {
        acc[slug] = generateIndexChunks(`author_${slug}`, posts);
        return acc;
    }, {});

    // Generate index chunks for each tag
    const tagInfo = Object.entries(postsByTag).reduce((acc, [slug, posts]) => {
        acc[slug] = generateIndexChunks(`tag_${slug}`, posts);
        return acc;
    }, {});
    
    // Generate index chunks for each service
    const serviceInfo = Object.entries(postsByService).reduce((acc, [slug, posts]) => {
        acc[slug] = generateIndexChunks(`service_${slug}`, posts);
        return acc;
    }, {});

    // --- Generate Manifest File ---
    const manifestData = {
        postsPerChunk: POSTS_PER_INDEX_CHUNK,
      totalPosts: allChunkInfo.totalPosts,
      totalPages: allChunkInfo.totalPages,
      categories: categoryInfo,
      authors: authorInfo,
      tags: tagInfo,
      services: serviceInfo, // Use the generated serviceInfo
    };
    writeJsonFile(outputManifestPath, manifestData);
    console.log(`Manifest file generated successfully at ${outputManifestPath}`);
    console.log(`Total posts processed for index: ${allPostsForIndex.length}`);

    // --- Generate Sitemap --- 
    console.log('Generating sitemap...');
    generateSitemap(allPostsForSitemap, siteUrl, staticPages);

  } catch (error) {
    console.error(`Error building ${contentDirName} data:`, error);
    process.exit(1); // Exit if critical error during build
  }
}

// --- Sitemap Generation Function --- 
function generateSitemap(posts, siteUrl, staticPages) {
  console.log('Generating sitemap...');
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add home page
  xml += '  <url>\n';
  xml += `    <loc>${siteUrl}</loc>\n`;
  xml += `    <changefreq>daily</changefreq>\n`;
  xml += `    <priority>1.0</priority>\n`;
  xml += '  </url>\n';

  // Add static pages
  staticPages.forEach(pagePath => {
    // Basic validation for path format
    if (pagePath && pagePath.startsWith('/')) {
        xml += '  <url>\n';
        xml += `    <loc>${siteUrl}${pagePath}</loc>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.8</priority>\n`;
        xml += '  </url>\n';
    }
  });

  // Add dynamic content pages (news articles)
  posts.forEach(post => {
    if (post.slug && post.date && post.pathPrefix) {
      xml += '  <url>\n';
      xml += `    <loc>${siteUrl}${post.pathPrefix}/${post.slug}</loc>\n`;
      xml += `    <lastmod>${post.date}</lastmod>\n`;
      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';

    try {
    fs.writeFileSync(outputSitemapPath, xml);
      console.log(`Sitemap generated successfully at ${outputSitemapPath}`);
    console.log(` -> Included ${staticPages.length} static pages and ${posts.length} dynamic posts.`);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }
}

// --- Execute Build ---
buildContentData(); 