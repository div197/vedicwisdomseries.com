/**
 * 🕉️ PERFORMANCE OPTIMIZATION WITH NISHKAAM KARMA
 * Scorpio Agent - Transforming performance without attachment
 * Optimize for seekers, not metrics
 */

// Performance monitoring with spiritual awareness
export class SpiritualPerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  
  // Measure with detachment
  measure(name: string, fn: () => void | Promise<void>): void {
    const start = performance.now();
    
    const complete = () => {
      const duration = performance.now() - start;
      const existing = this.metrics.get(name) || [];
      this.metrics.set(name, [...existing, duration]);
      
      // Log only if it serves seekers
      if (duration > 1000) {
        console.warn(`⚡ ${name} took ${duration.toFixed(2)}ms - optimizing for better seeker experience`);
      }
    };
    
    const result = fn();
    if (result instanceof Promise) {
      result.then(complete);
    } else {
      complete();
    }
  }
  
  // Get average with wisdom
  getAverage(name: string): number {
    const measurements = this.metrics.get(name) || [];
    if (measurements.length === 0) return 0;
    
    const sum = measurements.reduce((a, b) => a + b, 0);
    return sum / measurements.length;
  }
  
  // Report for improvement, not judgment
  report(): void {
    console.log('🕉️ Performance Report - For Service Enhancement:');
    this.metrics.forEach((measurements, name) => {
      console.log(`  ${name}: ${this.getAverage(name).toFixed(2)}ms average`);
    });
  }
}

// Image optimization for faster spiritual content delivery
export const optimizeImages = {
  // Generate srcset for responsive images
  generateSrcSet(baseUrl: string, sizes: number[] = [320, 640, 1024, 1920]): string {
    return sizes
      .map(size => `${baseUrl}?w=${size} ${size}w`)
      .join(', ');
  },
  
  // Lazy loading configuration
  lazyLoadConfig: {
    root: null,
    rootMargin: '50px 0px',
    threshold: 0.01
  },
  
  // Preload critical images
  preloadCritical(urls: string[]): void {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// Code splitting utilities
export const codeSplitting = {
  // Dynamic import with fallback
  async loadComponent(path: string, fallback?: React.ComponentType): Promise<any> {
    try {
      const module = await import(path);
      return module.default || module;
    } catch (error) {
      console.error(`Failed to load component: ${path}`, error);
      return fallback || (() => null);
    }
  },
  
  // Prefetch for anticipated navigation
  prefetchRoute(path: string): void {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        import(path).catch(() => {
          // Silent fail - not critical
        });
      });
    }
  }
};

// Resource hints for optimal loading
export const resourceHints = {
  // DNS prefetch for external domains
  dnsPrefetch(domains: string[]): void {
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });
  },
  
  // Preconnect for API endpoints
  preconnect(origins: string[]): void {
    origins.forEach(origin => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = origin;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }
};

// Memory management for long sessions
export class MemoryOptimizer {
  private observers: IntersectionObserver[] = [];
  private intervals: number[] = [];
  
  // Clean up unused resources
  cleanup(): void {
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    // Clear all intervals
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
    
    // Force garbage collection if available
    if ('gc' in window) {
      (window as any).gc();
    }
  }
  
  // Register observer for cleanup
  registerObserver(observer: IntersectionObserver): void {
    this.observers.push(observer);
  }
  
  // Register interval for cleanup
  registerInterval(interval: number): void {
    this.intervals.push(interval);
  }
}

// Service Worker strategies
export const serviceWorkerStrategies = {
  // Cache first for static assets
  cacheFirst: (cacheName: string) => ({
    strategy: 'CacheFirst',
    options: {
      cacheName,
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      }
    }
  }),
  
  // Network first for API calls
  networkFirst: (cacheName: string) => ({
    strategy: 'NetworkFirst',
    options: {
      cacheName,
      networkTimeoutSeconds: 3,
      expiration: {
        maxEntries: 20,
        maxAgeSeconds: 24 * 60 * 60 // 1 day
      }
    }
  }),
  
  // Stale while revalidate for content
  staleWhileRevalidate: (cacheName: string) => ({
    strategy: 'StaleWhileRevalidate',
    options: {
      cacheName,
      expiration: {
        maxEntries: 30,
        maxAgeSeconds: 7 * 24 * 60 * 60 // 7 days
      }
    }
  })
};

// Export singleton instances
export const performanceMonitor = new SpiritualPerformanceMonitor();
export const memoryOptimizer = new MemoryOptimizer();

// Initialize performance optimizations
export function initializePerformanceOptimizations(): void {
  // Preconnect to critical domains
  resourceHints.preconnect([
    'https://api.vaidikwisdomseries.com',
    'https://fonts.googleapis.com',
    'https://js.stripe.com'
  ]);
  
  // DNS prefetch for CDN domains
  resourceHints.dnsPrefetch([
    'fonts.gstatic.com',
    'images.vaidikwisdomseries.com',
    'stream.vaidikwisdomseries.com'
  ]);
  
  // Preload critical images
  optimizeImages.preloadCritical([
    '/assets/images/hero-bg.webp',
    '/assets/images/dr-nischaya-nagori.webp'
  ]);
  
  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    memoryOptimizer.cleanup();
  });
}