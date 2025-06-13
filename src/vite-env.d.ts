/// <reference types="vite/client" />

// DOM API type definitions for better type safety
declare global {
  interface Window {
    // Add any custom window properties here if needed
  }
  
  // Node.js globals for build-time usage
  namespace NodeJS {
    interface ProcessEnv {
      readonly VITE_SITE_URL?: string;
      readonly NODE_ENV: 'development' | 'production' | 'test';
    }
  }

  // Web APIs that might not be available in all environments
  const URLSearchParams: {
    new(init?: string | string[][] | Record<string, string> | URLSearchParams): URLSearchParams;
    prototype: URLSearchParams;
  };

  const btoa: (data: string) => string;
  const atob: (data: string) => string;

  // Performance API types
  interface PerformanceEntry {
    readonly duration: number;
    readonly entryType: string;
    readonly name: string;
    readonly startTime: number;
    toJSON(): Record<string, unknown>;
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {
    readonly connectEnd: number;
    readonly connectStart: number;
    readonly domComplete: number;
    readonly domContentLoadedEventEnd: number;
    readonly domContentLoadedEventStart: number;
    readonly domInteractive: number;
    readonly domainLookupEnd: number;
    readonly domainLookupStart: number;
    readonly fetchStart: number;
    readonly loadEventEnd: number;
    readonly loadEventStart: number;
    readonly redirectEnd: number;
    readonly redirectStart: number;
    readonly requestStart: number;
    readonly responseEnd: number;
    readonly responseStart: number;
    readonly secureConnectionStart: number;
    readonly unloadEventEnd: number;
    readonly unloadEventStart: number;
  }

  interface PerformanceObserver {
    observe(options: PerformanceObserverInit): void;
    disconnect(): void;
    takeRecords(): PerformanceEntryList;
  }

  interface PerformanceObserverInit {
    entryTypes?: string[];
    type?: string;
    buffered?: boolean;
  }

  type PerformanceEntryList = PerformanceEntry[];
  type PerformanceObserverCallback = (list: PerformanceObserverEntryList, observer: PerformanceObserver) => void;

  interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList;
    getEntriesByType(type: string): PerformanceEntryList;
    getEntriesByName(name: string, type?: string): PerformanceEntryList;
  }

  const PerformanceObserver: {
    new(callback: PerformanceObserverCallback): PerformanceObserver;
    prototype: PerformanceObserver;
    supportedEntryTypes?: ReadonlyArray<string>;
  };

  // Intersection Observer API
  interface IntersectionObserverEntry {
    readonly boundingClientRect: DOMRectReadOnly;
    readonly intersectionRatio: number;
    readonly intersectionRect: DOMRectReadOnly;
    readonly isIntersecting: boolean;
    readonly rootBounds: DOMRectReadOnly | null;
    readonly target: Element;
    readonly time: number;
  }

  interface IntersectionObserver {
    readonly root: Element | null;
    readonly rootMargin: string;
    readonly thresholds: ReadonlyArray<number>;
    disconnect(): void;
    observe(target: Element): void;
    takeRecords(): IntersectionObserverEntry[];
    unobserve(target: Element): void;
  }

  type IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;

  interface IntersectionObserverInit {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
  }

  const IntersectionObserver: {
    new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver;
    prototype: IntersectionObserver;
  };
}

// Vite environment variables
interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export {};
