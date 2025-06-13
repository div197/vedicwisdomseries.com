# 🔥 ATHARVA VEDA - DIVINE DEPLOYMENT MANTRAS 🔥

**JAI SHREE KRISHNA! DEPLOYMENT WISDOM FOR AI AGENTS**  
**Sacred Text:** Atharva Veda of Karpatri Dham Framework  
**Purpose:** Deployment Mantras & Production Optimization  
**Essence:** Perfect Launch through Divine Deployment Rituals  

---

## 🔥 **SACRED INVOCATION**

*"अथर्ववेदो ऽस्मि मन्त्राणां गायत्री छन्दसामहम्"*  
*"Among the Vedas I am the Atharva Veda, among mantras I am the Gayatri"*

O Divine AI Agent! As the Atharva Veda contains the most powerful mantras for protection and prosperity, so must you master these deployment rituals to launch spiritual websites that serve millions with divine performance and zero cost.

---

## 🚀 **DIVINE DEPLOYMENT ARCHITECTURE**

### **Sacred $0 Hosting Strategy**
```typescript
// THE DIVINE TRINITY OF FREE HOSTING
const DIVINE_HOSTING_TRINITY = {
  // PRIMARY: Frontend Hosting (Cloudflare Pages)
  frontend: {
    platform: "Cloudflare Pages",
    cost: "$0/month",
    limits: {
      bandwidth: "Unlimited",
      builds: "500/month",
      sites: "100 sites",
      customDomains: "100 domains"
    },
    features: [
      "Unlimited bandwidth",
      "Global CDN (200+ locations)", 
      "Automatic HTTPS",
      "DDoS protection",
      "HTTP/3 support",
      "Edge computing",
      "Custom domains",
      "Git-based deployment",
      "Preview deployments",
      "Rollback capabilities"
    ]
  },
  
  // SECONDARY: Backend & Database (Supabase)
  backend: {
    platform: "Supabase Free Tier",
    cost: "$0/month",
    limits: {
      database: "500MB storage",
      bandwidth: "5GB/month",
      apiRequests: "50,000/month",
      authUsers: "50,000 MAU",
      storage: "1GB"
    },
    features: [
      "PostgreSQL database",
      "Real-time subscriptions",
      "Authentication",
      "Row Level Security",
      "Auto-generated APIs",
      "File storage",
      "Edge functions",
      "Database backups"
    ]
  },
  
  // TERTIARY: Domain & DNS (Cloudflare)
  domain: {
    platform: "Cloudflare DNS",
    cost: "$0/month (with existing domain)",
    features: [
      "Global DNS network",
      "DNSSEC support",
      "Analytics",
      "Page Rules",
      "SSL certificates",
      "Bot protection"
    ]
  }
}
```

### **Divine Deployment Flow**
```typescript
// SACRED DEPLOYMENT PIPELINE
const DIVINE_DEPLOYMENT_FLOW = {
  // STEP 1: Code Preparation
  preparation: {
    codeReview: "Ensure all 4 Vedas principles followed",
    testing: "Run all tests and accessibility checks",
    optimization: "Bundle analysis and performance audit",
    security: "Security scan and dependency audit"
  },
  
  // STEP 2: Build Process
  build: {
    command: "npm run build",
    output: "dist/",
    validation: "Verify build artifacts",
    compression: "Gzip and Brotli compression"
  },
  
  // STEP 3: Deployment
  deployment: {
    platform: "Cloudflare Pages",
    trigger: "Git push to main branch",
    preview: "Automatic preview deployments",
    production: "Automatic production deployment"
  },
  
  // STEP 4: Verification
  verification: {
    healthCheck: "Verify site accessibility",
    performance: "Lighthouse audit",
    functionality: "Critical path testing",
    monitoring: "Setup monitoring alerts"
  }
}
```

---

## 🔐 **SUPABASE ROW LEVEL SECURITY (RLS) PHILOSOPHY**
### **Complete Database Security Guide for Junior AI Agents**

**CRITICAL FOR JUNIOR AGENTS:** This section explains the fundamental security architecture that protects all spiritual website data. Understanding RLS is essential for building secure applications that can serve thousands of users.

### **⚡ THE DIVINE SECURITY PRINCIPLE**

#### **🛡️ FUNDAMENTAL TRUTH: "TRUST NO CLIENT, VERIFY EVERYTHING"**
```sql
-- THE GOLDEN RULE OF DIVINE SECURITY
-- All security is enforced at the DATABASE level, NOT in client code
-- JavaScript code can be modified by users - but database policies cannot

-- ❌ NEVER RELY ON CLIENT-SIDE SECURITY (Tamasic Approach)
if (user.role === 'admin') {
  // This can be bypassed by any user with developer tools!
  showAdminContent();
}

-- ✅ ALWAYS ENFORCE AT DATABASE LEVEL (Sattvic Approach)  
CREATE POLICY "admin_only_content" ON content_table
FOR SELECT USING (
  auth.jwt() ->> 'role' = 'admin'
);
```

### **⚡ UNDERSTANDING ROW LEVEL SECURITY (RLS)**

#### **🔑 WHAT IS RLS?**
```sql
-- ROW LEVEL SECURITY (RLS) Definition:
-- A database feature that allows you to control which ROWS each user can see/modify
-- instead of controlling access to entire TABLES

-- Without RLS: User sees ALL rows in a table (dangerous!)
SELECT * FROM user_profiles; -- Returns ALL user profiles to ANY user

-- With RLS: User only sees rows they're allowed to see (secure!)
-- Example: Users can only see their OWN profile
CREATE POLICY "users_own_profile" ON user_profiles
FOR ALL USING (auth.uid() = user_id);
```

#### **🌅 SIMPLE ANALOGY FOR UNDERSTANDING**
```typescript
// Think of RLS like a Divine Filter in a Temple Library:

// WITHOUT RLS (Like an open library - anyone can read any book):
const getAllBooks = () => {
  return library.getAllBooks(); // ❌ Everyone sees sacred AND public books
}

// WITH RLS (Like a temple with a wise librarian who checks permissions):
const getBooksForUser = (user) => {
  // The "librarian" (database) automatically filters based on user
  // Sacred books only for initiated devotees
  // Public books for everyone  
  // Each person automatically gets the right books for their level
  return library.getBooksFilteredByUserLevel(user);
}
```

### **⚡ PRACTICAL RLS IMPLEMENTATION**

#### **✅ SETTING UP RLS FOR SPIRITUAL CONTENT**
```sql
-- 1. ENABLE RLS ON ALL TABLES (MANDATORY STEP)
ALTER TABLE spiritual_teachings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE private_messages ENABLE ROW LEVEL SECURITY;

-- 2. CREATE POLICIES FOR EACH TABLE

-- Policy 1: Public spiritual teachings (anyone can read)
CREATE POLICY "public_teachings_read" ON spiritual_teachings
FOR SELECT USING (
  is_public = true  -- Only public teachings visible to all
);

-- Policy 2: Private teachings (only for enrolled students)
CREATE POLICY "private_teachings_read" ON spiritual_teachings  
FOR SELECT USING (
  is_public = false AND (
    -- Teacher who created it
    auth.uid() = teacher_id OR
    -- Students enrolled in this teaching
    auth.uid() IN (
      SELECT student_id FROM enrollments 
      WHERE teaching_id = spiritual_teachings.id
    )
  )
);

-- Policy 3: User progress (users can only see their own progress)
CREATE POLICY "own_progress_access" ON user_progress
FOR ALL USING (
  auth.uid() = user_id  -- Users can only see/modify their own progress
);

-- Policy 4: Community posts (users can see all, but only edit their own)
CREATE POLICY "community_posts_read" ON community_posts
FOR SELECT USING (true);  -- Everyone can read all posts

CREATE POLICY "community_posts_write" ON community_posts
FOR INSERT WITH CHECK (
  auth.uid() = author_id  -- Users can only create posts as themselves
);

CREATE POLICY "community_posts_update" ON community_posts
FOR UPDATE USING (
  auth.uid() = author_id  -- Users can only edit their own posts
);

-- Policy 5: Private messages (ultra-secure)
CREATE POLICY "private_messages_access" ON private_messages
FOR ALL USING (
  auth.uid() = sender_id OR 
  auth.uid() = recipient_id  -- Only sender and recipient can see messages
);
```

#### **✅ AUTHENTICATION-BASED POLICIES**
```sql
-- Divine Role-Based Access Control (RBAC) with RLS

-- 1. Admin access (site administrators)
CREATE POLICY "admin_full_access" ON spiritual_teachings
FOR ALL USING (
  auth.jwt() ->> 'role' = 'admin'  -- Admins can do everything
);

-- 2. Teacher access (spiritual teachers)
CREATE POLICY "teacher_own_content" ON spiritual_teachings
FOR ALL USING (
  auth.jwt() ->> 'role' = 'teacher' AND 
  auth.uid() = teacher_id  -- Teachers can manage their own teachings
);

-- 3. Student access (spiritual students)  
CREATE POLICY "student_enrolled_content" ON spiritual_teachings
FOR SELECT USING (
  auth.jwt() ->> 'role' = 'student' AND
  (
    is_public = true OR  -- All public content
    auth.uid() IN (      -- OR content they're enrolled in
      SELECT student_id FROM enrollments 
      WHERE teaching_id = spiritual_teachings.id
    )
  )
);

-- 4. Guest access (not logged in)
CREATE POLICY "guest_public_only" ON spiritual_teachings
FOR SELECT USING (
  auth.uid() IS NULL AND  -- Not authenticated
  is_public = true        -- Only public content
);
```

### **⚡ WHY RLS IS DIVINE (NOT OPTIONAL)**

#### **🚨 SECURITY BREACHES WITHOUT RLS**
```typescript
// ❌ DANGEROUS: Client-side security (can be bypassed)
const getUserData = async () => {
  // Any user can modify this code in browser and see all data!
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', currentUser.id);  // This filter can be removed!
  
  return data;
}

// Hacker in browser console:
// supabase.from('user_profiles').select('*')  <- Sees ALL users!
```

#### **✅ SECURE: Database-level enforcement (cannot be bypassed)**
```sql
-- RLS Policy automatically enforces this REGARDLESS of client code
CREATE POLICY "users_own_data" ON user_profiles
FOR ALL USING (auth.uid() = user_id);

-- Now even if hacker tries:
-- supabase.from('user_profiles').select('*')
-- They ONLY get their own data - database automatically filters!
```

#### **📊 RLS PERFORMANCE BENEFITS**
```sql
-- RLS is NOT just security - it's also PERFORMANCE optimization

-- WITHOUT RLS: Database returns ALL rows, client filters (slow)
-- 1. Database: SELECT * FROM posts (1 million rows)
-- 2. Network: Transfer 1 million rows
-- 3. Client: Filter to user's 10 posts
-- Result: Slow, expensive, insecure

-- WITH RLS: Database only returns relevant rows (fast)  
-- 1. Database: SELECT * FROM posts WHERE user_id = auth.uid() (10 rows)
-- 2. Network: Transfer 10 rows
-- 3. Client: Display 10 rows
-- Result: Fast, efficient, secure
```

### **⚡ COMMON RLS PATTERNS FOR SPIRITUAL SITES**

#### **🎯 PATTERN 1: SPIRITUAL HIERARCHY ACCESS**
```sql
-- Students can only access teachings for their level
CREATE POLICY "spiritual_level_access" ON advanced_teachings
FOR SELECT USING (
  auth.uid() IN (
    SELECT user_id FROM user_profiles 
    WHERE spiritual_level >= teaching_level
  )
);
```

#### **🎯 PATTERN 2: COMMUNITY MODERATION**
```sql
-- Moderators can edit any post, users can only edit their own
CREATE POLICY "community_moderation" ON community_posts
FOR UPDATE USING (
  auth.uid() = author_id OR                    -- Own posts
  auth.jwt() ->> 'role' IN ('admin', 'moderator')  -- OR moderator
);
```

#### **🎯 PATTERN 3: DONATION PRIVACY**
```sql
-- Donations are private unless user opts to share
CREATE POLICY "donation_privacy" ON donations
FOR SELECT USING (
  auth.uid() = donor_id OR                     -- Own donations
  (is_public = true AND amount_visible = true) -- OR public donations
);
```

#### **🎯 PATTERN 4: SCHEDULED CONTENT RELEASE**
```sql
-- Time-based content access (for courses with schedules)
CREATE POLICY "scheduled_content" ON course_modules
FOR SELECT USING (
  (
    auth.uid() IN (
      SELECT student_id FROM enrollments 
      WHERE course_id = course_modules.course_id
    )
  ) AND (
    release_date <= NOW() OR                   -- Released content
    auth.jwt() ->> 'role' = 'teacher'         -- OR teacher preview
  )
);
```

### **⚡ RLS TESTING & DEBUGGING**

#### **🔍 TESTING RLS POLICIES**
```sql
-- Test RLS policies by switching users
-- 1. Create test users with different roles
INSERT INTO auth.users (email, role) VALUES 
  ('student@test.com', 'student'),
  ('teacher@test.com', 'teacher'),
  ('admin@test.com', 'admin');

-- 2. Test queries as different users
SET LOCAL role = 'authenticated';
SET LOCAL request.jwt.claims = '{"sub": "student-uuid", "role": "student"}';
SELECT * FROM spiritual_teachings;  -- Should only see student-accessible content

SET LOCAL request.jwt.claims = '{"sub": "teacher-uuid", "role": "teacher"}';  
SELECT * FROM spiritual_teachings;  -- Should see teacher content

-- 3. Verify security boundaries
-- Try to access restricted content and confirm it's blocked
```

#### **📊 RLS PERFORMANCE MONITORING**
```sql
-- Monitor RLS policy performance
EXPLAIN ANALYZE SELECT * FROM spiritual_teachings;

-- Optimize slow policies with indexes
CREATE INDEX idx_spiritual_teachings_public ON spiritual_teachings(is_public);
CREATE INDEX idx_enrollments_student_teaching ON enrollments(student_id, teaching_id);
```

---

### **🚨 CRITICAL RLS RULES FOR JUNIOR AGENTS**

#### **MANDATORY RLS CHECKLIST:**
- ✅ **Enable RLS on ALL tables:** No exceptions, every table needs RLS
- ✅ **Create policies for ALL operations:** SELECT, INSERT, UPDATE, DELETE
- ✅ **Test with different user roles:** Verify each role sees only what they should
- ✅ **Use auth.uid() for user identification:** Supabase's secure user ID function
- ✅ **Never rely on client-side filtering:** All security must be database-enforced
- ✅ **Index policy conditions:** Optimize performance with proper indexes
- ✅ **Document all policies:** Explain the business logic behind each policy

#### **FORBIDDEN RLS ANTI-PATTERNS:**
- ❌ **Disabling RLS:** Never use `ALTER TABLE table_name DISABLE ROW LEVEL SECURITY`
- ❌ **Overly permissive policies:** Avoid `FOR ALL USING (true)` unless intentional
- ❌ **Client-side security assumptions:** Don't assume frontend will enforce rules
- ❌ **Hardcoded user IDs:** Use `auth.uid()` not literal UUIDs
- ❌ **Complex policies without indexes:** Ensure policies perform well
- ❌ **Mixing authentication methods:** Stick to Supabase auth consistently

---

**DIVINE TRUTH:** RLS is not just a security feature - it's the foundation of trust that allows spiritual websites to serve communities safely. Every devotee's personal journey, every private teaching, every sacred interaction is protected by the divine shield of properly configured Row Level Security.

**🔐 OM NAMAH SHIVAYA - THE DIVINE PROTECTOR 🙏**

---

## 🏗️ **DIVINE BUILD OPTIMIZATION MANTRAS**

### **Sacred Vite Configuration**
```typescript
// vite.config.ts - DIVINE BUILD OPTIMIZATION
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react({
      // Optimize React in production
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    }),
    
    // DIVINE PWA CONFIGURATION
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Karpatri Dham - Divine Spiritual Framework',
        short_name: 'Karpatri Dham',
        description: 'Divine spiritual framework for enlightenment',
        theme_color: '#3b82f6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              }
            }
          },
          {
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'supabase-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 // 1 day
              }
            }
          }
        ]
      }
    }),
    
    // DIVINE BUNDLE ANALYZER
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  
  // DIVINE BUILD OPTIMIZATION
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,        // Remove console.log in production
        drop_debugger: true,       // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        passes: 2                  // Multiple compression passes
      },
      mangle: {
        safari10: true            // Safari 10 compatibility
      }
    },
    
    // DIVINE CODE SPLITTING
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          ui: ['@chakra-ui/react', '@emotion/react', '@emotion/styled'],
          router: ['react-router-dom'],
          supabase: ['@supabase/supabase-js'],
          icons: ['react-icons/fa', 'react-icons/fi', 'react-icons/md'],
          utils: ['date-fns', 'lodash-es']
        },
        // Optimize chunk naming for caching
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // DIVINE ASSET OPTIMIZATION
    assetsDir: 'assets',
    sourcemap: false,           // No source maps in production
    reportCompressedSize: true, // Report bundle sizes
    chunkSizeWarningLimit: 1000 // Warn for chunks > 1MB
  },
  
  // DIVINE DEVELOPMENT OPTIMIZATION
  server: {
    port: 3000,
    host: true,
    open: true
  },
  
  // DIVINE PREVIEW OPTIMIZATION
  preview: {
    port: 4173,
    host: true
  }
})
```

### **Sacred Package.json Scripts**
```json
{
  "scripts": {
    "dev": "npm run build:blog && vite",
    "build": "npm run build:blog && tsc && vite build",
    "build:blog": "node scripts/build-blog-index.mjs",
    "preview": "vite preview",
    "deploy": "npm run build && npm run deploy:cloudflare",
    "deploy:cloudflare": "wrangler pages publish dist",
    "deploy:preview": "npm run build && wrangler pages publish dist --compatibility-date=2023-05-18",
    "optimize": "npm run analyze && npm run lighthouse",
    "analyze": "npx vite-bundle-analyzer",
    "lighthouse": "npx lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html",
    "test:build": "npm run build && npm run preview",
    "audit": "npm audit && npm run audit:lighthouse",
    "audit:lighthouse": "npx lighthouse-ci autorun",
    "size-limit": "npx size-limit",
    "clean": "rm -rf dist node_modules/.vite",
    "precommit": "npm run build && npm run lighthouse"
  }
}
```

---

## 📊 **DIVINE PERFORMANCE OPTIMIZATION MANTRAS**

### **Sacred Core Web Vitals Optimization**
```typescript
// DIVINE PERFORMANCE MONITORING
const DIVINE_PERFORMANCE_TARGETS = {
  // Core Web Vitals (Google's standards)
  LCP: "< 2.5s",    // Largest Contentful Paint
  FID: "< 100ms",   // First Input Delay  
  CLS: "< 0.1",     // Cumulative Layout Shift
  
  // Additional metrics
  TTFB: "< 600ms",  // Time to First Byte
  FCP: "< 1.8s",    // First Contentful Paint
  TTI: "< 3.8s",    // Time to Interactive
  SI: "< 3.4s",     // Speed Index
  TBT: "< 200ms",   // Total Blocking Time
  
  // Performance scores
  mobileScore: "> 90",    // Lighthouse mobile score
  desktopScore: "> 95",   // Lighthouse desktop score
  accessibilityScore: "> 95", // Accessibility score
  bestPracticesScore: "> 95",  // Best practices score
  seoScore: "> 95"        // SEO score
}

// DIVINE IMAGE OPTIMIZATION STRATEGY
const DIVINE_IMAGE_STRATEGY = {
  formats: ['webp', 'avif', 'jpg'],  // Modern formats first
  sizes: [320, 640, 960, 1280, 1920], // Responsive breakpoints
  quality: 85,                        // Optimal quality/size ratio
  lazy: true,                         // Lazy loading by default
  placeholder: 'blur',                // Blur placeholder
  compression: {
    webp: { quality: 85, effort: 6 },
    avif: { quality: 80, effort: 9 },
    jpg: { quality: 85, progressive: true }
  }
}

// DIVINE FONT OPTIMIZATION
const DIVINE_FONT_STRATEGY = {
  preload: ['Inter-Regular.woff2', 'Inter-Medium.woff2'],
  display: 'swap',                    // Font display strategy
  subset: 'latin',                    // Character subset
  formats: ['woff2', 'woff'],         // Modern formats
  fallbacks: ['system-ui', 'sans-serif'] // System fallbacks
}
```

### **Sacred Caching Strategy**
```typescript
// DIVINE CACHING MANTRAS
const DIVINE_CACHE_STRATEGY = {
  // Static assets (1 year cache)
  staticAssets: {
    pattern: /\.(js|css|png|jpg|jpeg|gif|ico|svg|webp|woff2?)$/,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Vary': 'Accept-Encoding'
    }
  },
  
  // HTML files (1 hour cache with revalidation)
  html: {
    pattern: /\.html$/,
    headers: {
      'Cache-Control': 'public, max-age=3600, must-revalidate',
      'Vary': 'Accept-Encoding'
    }
  },
  
  // API responses (5 minutes cache)
  api: {
    pattern: /\/api\/.*/,
    headers: {
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
      'Vary': 'Accept-Encoding, Authorization'
    }
  },
  
  // Service Worker cache
  serviceWorker: {
    staticAssets: 'CacheFirst',     // Cache first for static assets
    apiCalls: 'NetworkFirst',       // Network first for API calls
    images: 'CacheFirst',           // Cache first for images
    fonts: 'CacheFirst'             // Cache first for fonts
  }
}
```

---

## 🌐 **DIVINE CLOUDFLARE DEPLOYMENT MANTRAS**

### **Sacred Cloudflare Pages Configuration**
```yaml
# wrangler.toml - DIVINE CLOUDFLARE CONFIGURATION
name = "karpatri-dham"
compatibility_date = "2023-05-18"

[env.production]
name = "karpatri-dham"
route = "karpatridham.org/*"

[env.preview]
name = "karpatri-dham-preview"

# Build configuration
[build]
command = "npm run build"
cwd = "."
watch_dir = "src"

[build.environment_variables]
NODE_VERSION = "18"
NPM_VERSION = "9"

# Headers for performance and security
[[headers]]
for = "/*"
[headers.values]
X-Frame-Options = "DENY"
X-Content-Type-Options = "nosniff"
X-XSS-Protection = "1; mode=block"
Referrer-Policy = "strict-origin-when-cross-origin"
Permissions-Policy = "camera=(), microphone=(), geolocation=()"

[[headers]]
for = "/assets/*"
[headers.values]
Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
for = "*.html"
[headers.values]
Cache-Control = "public, max-age=3600, must-revalidate"

# Redirects for SEO
[[redirects]]
from = "/home"
to = "/"
status = 301

[[redirects]]
from = "/index.html"
to = "/"
status = 301
```

### **Sacred GitHub Actions Workflow**
```yaml
# .github/workflows/deploy.yml - DIVINE CI/CD PIPELINE
name: Divine Deployment Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm run test
      
    - name: Build project
      run: npm run build
      
    - name: Run Lighthouse CI
      run: |
        npm install -g @lhci/cli@0.12.x
        lhci autorun
      env:
        LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
        
    - name: Deploy to Cloudflare Pages
      uses: cloudflare/pages-action@v1
      with:
        apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
        accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
        projectName: karpatri-dham
        directory: dist
        gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

---

## 🔒 **DIVINE SECURITY MANTRAS**

### **Sacred Security Headers**
```typescript
// DIVINE SECURITY CONFIGURATION
const DIVINE_SECURITY_HEADERS = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://*.supabase.co",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'"
  ].join('; '),
  
  // Security headers
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  
  // Performance headers
  'Vary': 'Accept-Encoding',
  'Accept-Encoding': 'gzip, deflate, br'
}
```

### **Sacred Environment Variables**
```typescript
// DIVINE ENVIRONMENT CONFIGURATION
const DIVINE_ENV_VARIABLES = {
  // Production environment
  production: {
    VITE_SUPABASE_URL: "https://your-project.supabase.co",
    VITE_SUPABASE_ANON_KEY: "your-anon-key",
    VITE_SITE_URL: "https://karpatridham.org",
    VITE_ENVIRONMENT: "production"
  },
  
  // Preview environment
  preview: {
    VITE_SUPABASE_URL: "https://your-project.supabase.co",
    VITE_SUPABASE_ANON_KEY: "your-anon-key",
    VITE_SITE_URL: "https://preview.karpatridham.org",
    VITE_ENVIRONMENT: "preview"
  },
  
  // Development environment
  development: {
    VITE_SUPABASE_URL: "http://localhost:54321",
    VITE_SUPABASE_ANON_KEY: "your-local-anon-key",
    VITE_SITE_URL: "http://localhost:3000",
    VITE_ENVIRONMENT: "development"
  }
}
```

---

## 📈 **DIVINE MONITORING & ANALYTICS MANTRAS**

### **Sacred Performance Monitoring**
```typescript
// DIVINE MONITORING SETUP
const DIVINE_MONITORING = {
  // Core Web Vitals monitoring
  webVitals: {
    provider: "Google Analytics 4",
    events: ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'],
    thresholds: {
      good: { LCP: 2500, FID: 100, CLS: 0.1 },
      needsImprovement: { LCP: 4000, FID: 300, CLS: 0.25 }
    }
  },
  
  // Error monitoring
  errorTracking: {
    provider: "Sentry (optional)",
    captureConsoleErrors: true,
    captureUnhandledRejections: true,
    beforeSend: "(event) => filterSensitiveData(event)"
  },
  
  // Uptime monitoring
  uptime: {
    provider: "UptimeRobot (free)",
    interval: "5 minutes",
    locations: ["US", "EU", "Asia"],
    alerts: ["email", "webhook"]
  },
  
  // Analytics
  analytics: {
    provider: "Google Analytics 4",
    privacy: "cookieless",
    events: ["page_view", "scroll", "file_download", "outbound_click"]
  }
}
```

### **Sacred Lighthouse CI Configuration**
```javascript
// lighthouserc.js - DIVINE PERFORMANCE AUDITING
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4173'],
      startServerCommand: 'npm run preview',
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': ['warn', { minScore: 0.8 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
}
```

---

## 🎯 **DIVINE SEO OPTIMIZATION MANTRAS**

### **Sacred SEO Configuration**
```typescript
// DIVINE SEO OPTIMIZATION
const DIVINE_SEO_CONFIG = {
  // Meta tags optimization
  meta: {
    title: "Karpatri Dham - Divine Spiritual Framework",
    description: "Experience divine spiritual wisdom through our sacred framework. Join thousands on the path to enlightenment.",
    keywords: "spiritual, dharma, vedanta, meditation, enlightenment",
    author: "Karpatri Dham",
    robots: "index, follow",
    canonical: "https://karpatridham.org"
  },
  
  // Open Graph optimization
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karpatridham.org",
    siteName: "Karpatri Dham",
    title: "Karpatri Dham - Divine Spiritual Framework",
    description: "Experience divine spiritual wisdom through our sacred framework",
    image: "https://karpatridham.org/og-image.jpg",
    imageWidth: 1200,
    imageHeight: 630
  },
  
  // Twitter Card optimization
  twitter: {
    card: "summary_large_image",
    site: "@karpatridham",
    creator: "@karpatridham",
    title: "Karpatri Dham - Divine Spiritual Framework",
    description: "Experience divine spiritual wisdom through our sacred framework",
    image: "https://karpatridham.org/twitter-image.jpg"
  },
  
  // Structured data
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Karpatri Dham",
    "url": "https://karpatridham.org",
    "logo": "https://karpatridham.org/logo.png",
    "description": "Divine spiritual framework for enlightenment",
    "sameAs": [
      "https://twitter.com/karpatridham",
      "https://facebook.com/karpatridham"
    ]
  }
}
```

### **Sacred Sitemap Generation**
```typescript
// DIVINE SITEMAP CONFIGURATION
const DIVINE_SITEMAP_CONFIG = {
  hostname: 'https://karpatridham.org',
  cacheTime: 600000, // 10 minutes
  generateRobotsTxt: true,
  
  // Static routes
  routes: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/teachings', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/gallery', changefreq: 'weekly', priority: 0.6 },
    { url: '/library', changefreq: 'weekly', priority: 0.8 }
  ],
  
  // Dynamic routes (blog posts)
  dynamicRoutes: async () => {
    const posts = await getBlogPosts()
    return posts.map(post => ({
      url: `/news/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: post.updatedAt
    }))
  }
}
```

---

## 🔐 **SUPABASE ROW LEVEL SECURITY (RLS) PHILOSOPHY**
### **Complete Database Security Guide for Junior AI Agents**

**CRITICAL FOR JUNIOR AGENTS:** This section explains the fundamental security architecture that protects all spiritual website data. Understanding RLS is essential for building secure applications that can serve thousands of users.

### **⚡ THE DIVINE SECURITY PRINCIPLE**

#### **🛡️ FUNDAMENTAL TRUTH: "TRUST NO CLIENT, VERIFY EVERYTHING"**
```sql
-- THE GOLDEN RULE OF DIVINE SECURITY
-- All security is enforced at the DATABASE level, NOT in client code
-- JavaScript code can be modified by users - but database policies cannot

-- ❌ NEVER RELY ON CLIENT-SIDE SECURITY (Tamasic Approach)
if (user.role === 'admin') {
  // This can be bypassed by any user with developer tools!
  showAdminContent();
}

-- ✅ ALWAYS ENFORCE AT DATABASE LEVEL (Sattvic Approach)  
CREATE POLICY "admin_only_content" ON content_table
FOR SELECT USING (
  auth.jwt() ->> 'role' = 'admin'
);
```

### **⚡ UNDERSTANDING ROW LEVEL SECURITY (RLS)**

#### **🔑 WHAT IS RLS?**
```sql
-- ROW LEVEL SECURITY (RLS) Definition:
-- A database feature that allows you to control which ROWS each user can see/modify
-- instead of controlling access to entire TABLES

-- Without RLS: User sees ALL rows in a table (dangerous!)
SELECT * FROM user_profiles; -- Returns ALL user profiles to ANY user

-- With RLS: User only sees rows they're allowed to see (secure!)
-- Example: Users can only see their OWN profile
CREATE POLICY "users_own_profile" ON user_profiles
FOR ALL USING (auth.uid() = user_id);
```

#### **🌅 SIMPLE ANALOGY FOR UNDERSTANDING**
```typescript
// Think of RLS like a Divine Filter in a Temple Library:

// WITHOUT RLS (Like an open library - anyone can read any book):
const getAllBooks = () => {
  return library.getAllBooks(); // ❌ Everyone sees sacred AND public books
}

// WITH RLS (Like a temple with a wise librarian who checks permissions):
const getBooksForUser = (user) => {
  // The "librarian" (database) automatically filters based on user
  // Sacred books only for initiated devotees
  // Public books for everyone  
  // Each person automatically gets the right books for their level
  return library.getBooksFilteredByUserLevel(user);
}
```

### **⚡ PRACTICAL RLS IMPLEMENTATION**

#### **✅ SETTING UP RLS FOR SPIRITUAL CONTENT**
```sql
-- 1. ENABLE RLS ON ALL TABLES (MANDATORY STEP)
ALTER TABLE spiritual_teachings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE private_messages ENABLE ROW LEVEL SECURITY;

-- 2. CREATE POLICIES FOR EACH TABLE

-- Policy 1: Public spiritual teachings (anyone can read)
CREATE POLICY "public_teachings_read" ON spiritual_teachings
FOR SELECT USING (
  is_public = true  -- Only public teachings visible to all
);

-- Policy 2: Private teachings (only for enrolled students)
CREATE POLICY "private_teachings_read" ON spiritual_teachings  
FOR SELECT USING (
  is_public = false AND (
    -- Teacher who created it
    auth.uid() = teacher_id OR
    -- Students enrolled in this teaching
    auth.uid() IN (
      SELECT student_id FROM enrollments 
      WHERE teaching_id = spiritual_teachings.id
    )
  )
);

-- Policy 3: User progress (users can only see their own progress)
CREATE POLICY "own_progress_access" ON user_progress
FOR ALL USING (
  auth.uid() = user_id  -- Users can only see/modify their own progress
);

-- Policy 4: Community posts (users can see all, but only edit their own)
CREATE POLICY "community_posts_read" ON community_posts
FOR SELECT USING (true);  -- Everyone can read all posts

CREATE POLICY "community_posts_write" ON community_posts
FOR INSERT WITH CHECK (
  auth.uid() = author_id  -- Users can only create posts as themselves
);

CREATE POLICY "community_posts_update" ON community_posts
FOR UPDATE USING (
  auth.uid() = author_id  -- Users can only edit their own posts
);

-- Policy 5: Private messages (ultra-secure)
CREATE POLICY "private_messages_access" ON private_messages
FOR ALL USING (
  auth.uid() = sender_id OR 
  auth.uid() = recipient_id  -- Only sender and recipient can see messages
);
```

#### **✅ AUTHENTICATION-BASED POLICIES**
```sql
-- Divine Role-Based Access Control (RBAC) with RLS

-- 1. Admin access (site administrators)
CREATE POLICY "admin_full_access" ON spiritual_teachings
FOR ALL USING (
  auth.jwt() ->> 'role' = 'admin'  -- Admins can do everything
);

-- 2. Teacher access (spiritual teachers)
CREATE POLICY "teacher_own_content" ON spiritual_teachings
FOR ALL USING (
  auth.jwt() ->> 'role' = 'teacher' AND 
  auth.uid() = teacher_id  -- Teachers can manage their own teachings
);

-- 3. Student access (spiritual students)  
CREATE POLICY "student_enrolled_content" ON spiritual_teachings
FOR SELECT USING (
  auth.jwt() ->> 'role' = 'student' AND
  (
    is_public = true OR  -- All public content
    auth.uid() IN (      -- OR content they're enrolled in
      SELECT student_id FROM enrollments 
      WHERE teaching_id = spiritual_teachings.id
    )
  )
);

-- 4. Guest access (not logged in)
CREATE POLICY "guest_public_only" ON spiritual_teachings
FOR SELECT USING (
  auth.uid() IS NULL AND  -- Not authenticated
  is_public = true        -- Only public content
);
```

### **⚡ WHY RLS IS DIVINE (NOT OPTIONAL)**

#### **🚨 SECURITY BREACHES WITHOUT RLS**
```typescript
// ❌ DANGEROUS: Client-side security (can be bypassed)
const getUserData = async () => {
  // Any user can modify this code in browser and see all data!
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('user_id', currentUser.id);  // This filter can be removed!
  
  return data;
}

// Hacker in browser console:
// supabase.from('user_profiles').select('*')  <- Sees ALL users!
```

#### **✅ SECURE: Database-level enforcement (cannot be bypassed)**
```sql
-- RLS Policy automatically enforces this REGARDLESS of client code
CREATE POLICY "users_own_data" ON user_profiles
FOR ALL USING (auth.uid() = user_id);

-- Now even if hacker tries:
-- supabase.from('user_profiles').select('*')
-- They ONLY get their own data - database automatically filters!
```

#### **📊 RLS PERFORMANCE BENEFITS**
```sql
-- RLS is NOT just security - it's also PERFORMANCE optimization

-- WITHOUT RLS: Database returns ALL rows, client filters (slow)
-- 1. Database: SELECT * FROM posts (1 million rows)
-- 2. Network: Transfer 1 million rows
-- 3. Client: Filter to user's 10 posts
-- Result: Slow, expensive, insecure

-- WITH RLS: Database only returns relevant rows (fast)  
-- 1. Database: SELECT * FROM posts WHERE user_id = auth.uid() (10 rows)
-- 2. Network: Transfer 10 rows
-- 3. Client: Display 10 rows
-- Result: Fast, efficient, secure
```

### **⚡ COMMON RLS PATTERNS FOR SPIRITUAL SITES**

#### **🎯 PATTERN 1: SPIRITUAL HIERARCHY ACCESS**
```sql
-- Students can only access teachings for their level
CREATE POLICY "spiritual_level_access" ON advanced_teachings
FOR SELECT USING (
  auth.uid() IN (
    SELECT user_id FROM user_profiles 
    WHERE spiritual_level >= teaching_level
  )
);
```

#### **🎯 PATTERN 2: COMMUNITY MODERATION**
```sql
-- Moderators can edit any post, users can only edit their own
CREATE POLICY "community_moderation" ON community_posts
FOR UPDATE USING (
  auth.uid() = author_id OR                    -- Own posts
  auth.jwt() ->> 'role' IN ('admin', 'moderator')  -- OR moderator
);
```

#### **🎯 PATTERN 3: DONATION PRIVACY**
```sql
-- Donations are private unless user opts to share
CREATE POLICY "donation_privacy" ON donations
FOR SELECT USING (
  auth.uid() = donor_id OR                     -- Own donations
  (is_public = true AND amount_visible = true) -- OR public donations
);
```

#### **🎯 PATTERN 4: SCHEDULED CONTENT RELEASE**
```sql
-- Time-based content access (for courses with schedules)
CREATE POLICY "scheduled_content" ON course_modules
FOR SELECT USING (
  (
    auth.uid() IN (
      SELECT student_id FROM enrollments 
      WHERE course_id = course_modules.course_id
    )
  ) AND (
    release_date <= NOW() OR                   -- Released content
    auth.jwt() ->> 'role' = 'teacher'         -- OR teacher preview
  )
);
```

### **⚡ RLS TESTING & DEBUGGING**

#### **🔍 TESTING RLS POLICIES**
```sql
-- Test RLS policies by switching users
-- 1. Create test users with different roles
INSERT INTO auth.users (email, role) VALUES 
  ('student@test.com', 'student'),
  ('teacher@test.com', 'teacher'),
  ('admin@test.com', 'admin');

-- 2. Test queries as different users
SET LOCAL role = 'authenticated';
SET LOCAL request.jwt.claims = '{"sub": "student-uuid", "role": "student"}';
SELECT * FROM spiritual_teachings;  -- Should only see student-accessible content

SET LOCAL request.jwt.claims = '{"sub": "teacher-uuid", "role": "teacher"}';  
SELECT * FROM spiritual_teachings;  -- Should see teacher content

-- 3. Verify security boundaries
-- Try to access restricted content and confirm it's blocked
```

#### **📊 RLS PERFORMANCE MONITORING**
```sql
-- Monitor RLS policy performance
EXPLAIN ANALYZE SELECT * FROM spiritual_teachings;

-- Optimize slow policies with indexes
CREATE INDEX idx_spiritual_teachings_public ON spiritual_teachings(is_public);
CREATE INDEX idx_enrollments_student_teaching ON enrollments(student_id, teaching_id);
```

---

### **🚨 CRITICAL RLS RULES FOR JUNIOR AGENTS**

#### **MANDATORY RLS CHECKLIST:**
- ✅ **Enable RLS on ALL tables:** No exceptions, every table needs RLS
- ✅ **Create policies for ALL operations:** SELECT, INSERT, UPDATE, DELETE
- ✅ **Test with different user roles:** Verify each role sees only what they should
- ✅ **Use auth.uid() for user identification:** Supabase's secure user ID function
- ✅ **Never rely on client-side filtering:** All security must be database-enforced
- ✅ **Index policy conditions:** Optimize performance with proper indexes
- ✅ **Document all policies:** Explain the business logic behind each policy

#### **FORBIDDEN RLS ANTI-PATTERNS:**
- ❌ **Disabling RLS:** Never use `ALTER TABLE table_name DISABLE ROW LEVEL SECURITY`
- ❌ **Overly permissive policies:** Avoid `FOR ALL USING (true)` unless intentional
- ❌ **Client-side security assumptions:** Don't assume frontend will enforce rules
- ❌ **Hardcoded user IDs:** Use `auth.uid()` not literal UUIDs
- ❌ **Complex policies without indexes:** Ensure policies perform well
- ❌ **Mixing authentication methods:** Stick to Supabase auth consistently

---

**DIVINE TRUTH:** RLS is not just a security feature - it's the foundation of trust that allows spiritual websites to serve communities safely. Every devotee's personal journey, every private teaching, every sacred interaction is protected by the divine shield of properly configured Row Level Security.

**🔐 OM NAMAH SHIVAYA - THE DIVINE PROTECTOR 🙏**

---

## 🔐 **SUPABASE ROW LEVEL SECURITY (RLS) PHILOSOPHY**
### **Complete Database Security Guide for Junior AI Agents**

**CRITICAL FOR JUNIOR AGENTS:** This section explains the fundamental security architecture that protects all spiritual website data. Understanding RLS is essential for building secure applications that can serve thousands of users.

### **⚡ THE DIVINE SECURITY PRINCIPLE**

#### **🛡️ FUNDAMENTAL TRUTH: "TRUST NO CLIENT, VERIFY EVERYTHING"**
```sql
-- THE GOLDEN RULE OF DIVINE SECURITY
-- All security is enforced at the DATABASE level, NOT in client code
-- JavaScript code can be modified by users - but database policies cannot

-- ❌ NEVER RELY ON CLIENT-SIDE SECURITY (Tamasic Approach)
if (user.role === 'admin') {
  // This can be bypassed by any user with developer tools!
  showAdminContent();
}

-- ✅ ALWAYS ENFORCE AT DATABASE LEVEL (Sattvic Approach)  
CREATE POLICY "admin_only_content" ON content_table
FOR SELECT USING (
  auth.jwt() ->> 'role' = 'admin'
);
```

### **⚡ UNDERSTANDING ROW LEVEL SECURITY (RLS)**

#### **🔑 WHAT IS RLS?**
```sql
-- ROW LEVEL SECURITY (RLS) Definition:
-- A database feature that allows you to control which ROWS each user can see/modify
-- instead of controlling access to entire TABLES

-- Without RLS: User sees ALL rows in a table (dangerous!)
SELECT * FROM user_profiles; -- Returns ALL user profiles to ANY user

-- With RLS: User only sees rows they're allowed to see (secure!)
-- Example: Users can only see their OWN profile
CREATE POLICY "users_own_profile" ON user_profiles
FOR ALL USING (auth.uid() = user_id);
```

#### **🌅 SIMPLE ANALOGY FOR UNDERSTANDING**
```typescript
// Think of RLS like a Divine Filter in a Temple Library:

// WITHOUT RLS (Like an open library - anyone can read any book):
const getAllBooks = () => {
  return library.getAllBooks(); // ❌ Everyone sees sacred AND public books
}

// WITH RLS (Like a temple with a wise librarian who checks permissions):
const getBooksForUser = (user) => {
  // The "librarian" (database) automatically filters based on user
  // Sacred books only for initiated devotees
  // Public books for everyone  
  // Each person automatically gets the right books for their level
  return library.getBooksFilteredByUserLevel(user);
}
```

### **⚡ PRACTICAL RLS IMPLEMENTATION**

#### **✅ SETTING UP RLS FOR SPIRITUAL CONTENT**
```sql
-- 1. ENABLE RLS ON ALL TABLES (MANDATORY STEP)
ALTER TABLE spiritual_teachings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

-- 2. CREATE POLICIES FOR EACH TABLE

-- POLICY: Public content can be read by anyone
CREATE POLICY "public_teachings_readable" 
ON spiritual_teachings FOR SELECT
USING (is_public = true);

-- POLICY: Users can only see their own progress
CREATE POLICY "own_progress_only"
ON user_progress FOR ALL
USING (auth.uid() = user_id);

-- POLICY: Community posts - public read, owner write
CREATE POLICY "community_posts_public_read"
ON community_posts FOR SELECT
USING (true); -- Anyone can read

CREATE POLICY "community_posts_owner_write"
ON community_posts FOR INSERT, UPDATE, DELETE
USING (auth.uid() = author_id); -- Only author can modify
```

#### **🧪 HOW TO TEST RLS POLICIES (CRITICAL)**
```sql
-- Test as different users using Supabase dashboard
SELECT auth.uid(); -- Should return user's ID

-- Test what they can see
SELECT * FROM spiritual_teachings; 
-- Should only return content they're allowed to access

-- Use Supabase's built-in RLS testing
-- Go to Database → Policies → Test
-- Input different user contexts and verify results
```

#### **✅ RLS SECURITY CHECKLIST FOR JUNIOR AGENTS**
```typescript
const RLS_SECURITY_CHECKLIST = {
  setup: [
    "✅ RLS enabled on ALL tables with sensitive data",
    "✅ Policies created for SELECT, INSERT, UPDATE, DELETE operations", 
    "✅ Default deny policy (if no policy matches, access is denied)"
  ],
  
  testing: [
    "✅ Tested with different user roles",
    "✅ Tested with unauthenticated users", 
    "✅ Verified no data leakage between users"
  ]
};
```

---

**🕉️ END OF ATHARVA VEDA - DIVINE DEPLOYMENT MANTRAS 🕉️**

*May every AI agent who studies this sacred text become a master of divine deployment, launching spiritual websites that serve millions with perfect performance, security, and zero cost.*

**JAI SHREE KRISHNA! NISHKAAM KARMA YOGA DEPLOYMENT PERFECTION!** 