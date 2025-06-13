// Image optimization utility functions
export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  quality?: number;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

/**
 * Optimizes image URL with specified parameters
 * This is a placeholder implementation - in production, you would integrate
 * with services like Cloudinary, ImageKit, or implement your own optimization
 */
export const optimizeImageUrl = (src: string, options: ImageOptimizationOptions = {}): string => {
  // Return original URL if no optimization needed
  if (!src || src.startsWith('data:')) {
    return src;
  }

  // For external URLs, return as-is (could be enhanced with proxy service)
  if (src.startsWith('http')) {
    return src;
  }

  // For local images, you could implement optimization here
  // This is a basic implementation - enhance based on your needs
  const params = new URLSearchParams();
  
  if (options.width) params.append('w', options.width.toString());
  if (options.height) params.append('h', options.height.toString());
  if (options.quality) params.append('q', options.quality.toString());
  if (options.format) params.append('f', options.format);
  if (options.fit) params.append('fit', options.fit);

  const queryString = params.toString();
  return queryString ? `${src}?${queryString}` : src;
};

/**
 * Generates responsive image srcset
 */
export const generateSrcSet = (baseSrc: string, widths: number[] = [320, 640, 768, 1024, 1280, 1536, 1920]): string => {
  if (!baseSrc || baseSrc.startsWith('data:')) return '';
  
  const srcSet = widths.map(width => {
    const optimizedSrc = optimizeImageUrl(baseSrc, { width });
    return `${optimizedSrc} ${width}w`;
  }).join(', ');
  
  return srcSet;
};

/**
 * Generates a blur placeholder SVG
 */
export const generateBlurPlaceholder = (width = 100, height = 100): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:lightgray;stop-opacity:1" />
          <stop offset="100%" style="stop-color:gainsboro;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

/**
 * Performance tracking for images
 */
export interface ImagePerformanceMetrics {
  loadTime: number;
  size: number;
  format: string;
  url: string;
}

export const trackImagePerformance = (src: string, loadTime: number): void => {
  // Only track in development
  if (import.meta.env.DEV) {
    console.log(`Image Performance: ${src} loaded in ${loadTime.toFixed(2)}ms`);
  }
  
  // In production, you could send this data to analytics
  // analytics.track('image_load', { src, loadTime });
}; 