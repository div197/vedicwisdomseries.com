#!/usr/bin/env node

/**
 * 🕉️ VEDIC WISDOM BLOG BUILDER
 * Prepares for future content expansion
 * Currently generates sitemap only
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🕉️ Building Vedic Wisdom content index...');

// Clean previous artifacts
const newsManifestPath = path.join(process.cwd(), 'public/newsManifest.json');
if (fs.existsSync(newsManifestPath)) {
  fs.unlinkSync(newsManifestPath);
  console.log(' -> Cleaned previous manifest');
}

// Create empty manifest for future use
const emptyManifest = {
  posts: [],
  categories: [],
  tags: [],
  generated: new Date().toISOString()
};

fs.writeFileSync(newsManifestPath, JSON.stringify(emptyManifest, null, 2));
console.log(' -> Created empty manifest for future content');

// Run sitemap builder
console.log('🗺️ Generating sitemap...');
import('./build-sitemap-fixed.mjs');

console.log('✅ Blog preparation complete');