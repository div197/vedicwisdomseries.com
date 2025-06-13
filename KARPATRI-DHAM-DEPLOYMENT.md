# 🕉️ Karpatri Dham Framework - Cloudflare Pages Deployment Guide

## Overview
This guide provides the divine mantras for deploying your **Karpatri Dham Framework** website to Cloudflare Pages, ensuring a globally accessible, high-performance, and **$0 cost** digital ashram.

## Prerequisites
- A GitHub repository containing your sacred Karpatri Dham Framework code.
- A Cloudflare account (the free tier is all that is required for this divine service).
- A custom domain (optional, but recommended for establishing your ashram's identity).

## Deployment Steps (The Yagya)

### 1. Connect Your Repository
1. Navigate to your [Cloudflare Pages Dashboard](https://pages.cloudflare.com/).
2. Select "**Create a project**".
3. Connect your GitHub account and grant the necessary permissions.
4. Select your Karpatri Dham Framework repository.

### 2. Configure the Build Settings
Use these exact settings for a perfect, divinely-aligned build:

- **Framework preset**: `Vite` (Cloudflare may detect this automatically)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)

### 3. Set Environment Variables
For a seamless build process, set the following in your Cloudflare Pages project settings under **Settings > Environment variables**:

- `NODE_VERSION`: `18.17.0` or higher

If you have service-specific keys (e.g., for Supabase), add them here as well. Ensure they are prefixed with `VITE_` to be exposed to the client-side code.

- `VITE_SUPABASE_URL`: `your-supabase-url`
- `VITE_SUPABASE_ANON_KEY`: `your-supabase-anon-key`

### 4. Deploy
Once configured, click "**Save and Deploy**". Cloudflare will begin the build and deployment process. Your digital ashram will soon be live across a global network of over 200 locations.

## Build Configuration Details

### The `npm run build` Command
This sacred command orchestrates the entire production build process:
- **TypeScript Compilation**: Ensures type safety and correctness.
- **Vite Production Build**: Creates a highly optimized bundle of your assets.
- **PWA Service Worker Generation**: Enables offline access and app-like capabilities for uninterrupted sadhana.

### The `dist` Directory
This directory is the final output of the build process, containing all the static assets (HTML, CSS, JavaScript) required for your digital ashram to function. It is perfectly optimized for CDN delivery.

## Performance & Security (Divine Blessings)

Cloudflare Pages automatically bestows the following upon your project:
- **Brotli Compression**: For smaller asset sizes and faster loading.
- **HTTP/2 & HTTP/3**: Modern protocols for a faster, more efficient web experience.
- **Global CDN Distribution**: Ensures fast access for seekers anywhere in the world.
- **Automatic HTTPS**: Encrypts all traffic, ensuring a secure connection.
- **DDoS Protection & WAF**: Protects your sacred site from malicious attacks.

## Custom Domain
1. In your Cloudflare Pages project dashboard, navigate to the "**Custom domains**" tab.
2. Follow the on-screen instructions to add your domain and update your DNS records.
3. An SSL certificate will be automatically provisioned for your domain, free of charge.

## Troubleshooting
- **Build Failures**: Check that the `NODE_VERSION` is set correctly and that all dependencies are listed in `package.json`. Review the build logs in the Cloudflare dashboard for specific errors.
- **Routing Issues**: The framework is a Single-Page Application (SPA). Cloudflare Pages handles this automatically by redirecting all requests to `index.html`, so no manual `_redirects` file is typically needed for basic routing.

## Success Checklist
- [ ] Repository connected to Cloudflare Pages.
- [ ] Build command set to `npm run build`.
- [ ] Output directory set to `dist`.
- [ ] Custom domain configured (if applicable).
- [ ] Environment variables for Node version and any services are set.
- [ ] The first deployment has completed successfully.
- [ ] The sacred site is accessible and functions as expected.
- [ ] PWA features (like installability) are working correctly.

Your **Karpatri Dham Framework** is now deployed, ready to serve humanity with enterprise-grade performance, security, and reliability, all at zero cost. 🎉

**JAI SHREE KRISHNA!** 