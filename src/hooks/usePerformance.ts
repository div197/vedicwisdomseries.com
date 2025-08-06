import React, { useState, useEffect, useCallback } from 'react';

// Enhanced type definitions for Performance API
interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart?: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Removed unused interface

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fcp: number | null;
  tti: number | null;
  si: number | null;
  tbt: number | null;
}

interface PerformanceConfig {
  enableLCP: boolean;
  enableFID: boolean;
  enableCLS: boolean;
  enableTTFB: boolean;
  enableFCP: boolean;
  enableTTI: boolean;
  enableSI: boolean;
  enableTBT: boolean;
  reportingThreshold: number;
  enableConsoleLogging: boolean;
}

interface PerformanceGrade {
  overall: 'excellent' | 'good' | 'needs-improvement' | 'poor';
  lcp: 'good' | 'needs-improvement' | 'poor';
  fid: 'good' | 'needs-improvement' | 'poor';
  cls: 'good' | 'needs-improvement' | 'poor';
  ttfb: 'good' | 'needs-improvement' | 'poor';
}

const defaultConfig: PerformanceConfig = {
  enableLCP: true,
  enableFID: true,
  enableCLS: true,
  enableTTFB: true,
  enableFCP: true,
  enableTTI: true,
  enableSI: true,
  enableTBT: true,
  reportingThreshold: 100, // Report metrics after 100ms delay
  enableConsoleLogging: import.meta.env.DEV, // Only log in development
};

// Performance thresholds based on Core Web Vitals
const PERFORMANCE_THRESHOLDS = {
  lcp: { good: 2500, poor: 4000 },
  fid: { good: 100, poor: 300 },
  cls: { good: 0.1, poor: 0.25 },
  ttfb: { good: 600, poor: 1500 },
  fcp: { good: 1800, poor: 3000 },
  tti: { good: 3800, poor: 7300 },
  si: { good: 3400, poor: 5800 },
  tbt: { good: 200, poor: 600 },
};

const gradeMetric = (value: number | null, thresholds: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' => {
  if (value === null) return 'poor';
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

export const usePerformance = (config: Partial<PerformanceConfig> = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fcp: null,
    tti: null,
    si: null,
    tbt: null,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const finalConfig = React.useMemo(() => ({ ...defaultConfig, ...config }), [config]);

  // Calculate performance grades
  const getPerformanceGrade = useCallback((): PerformanceGrade => {
    const lcpGrade = gradeMetric(metrics.lcp, PERFORMANCE_THRESHOLDS.lcp);
    const fidGrade = gradeMetric(metrics.fid, PERFORMANCE_THRESHOLDS.fid);
    const clsGrade = gradeMetric(metrics.cls, PERFORMANCE_THRESHOLDS.cls);
    const ttfbGrade = gradeMetric(metrics.ttfb, PERFORMANCE_THRESHOLDS.ttfb);

    // Calculate overall grade based on Core Web Vitals
    const grades = [lcpGrade, fidGrade, clsGrade];
    const goodCount = grades.filter(g => g === 'good').length;
    const poorCount = grades.filter(g => g === 'poor').length;

    let overall: PerformanceGrade['overall'];
    if (goodCount === 3) overall = 'excellent';
    else if (goodCount >= 2 && poorCount === 0) overall = 'good';
    else if (poorCount === 0) overall = 'needs-improvement';
    else overall = 'poor';

    return {
      overall,
      lcp: lcpGrade,
      fid: fidGrade,
      cls: clsGrade,
      ttfb: ttfbGrade,
    };
  }, [metrics]);


  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      setError('Performance monitoring not supported in this browser');
      setIsLoading(false);
      return;
    }

    try {
      const observers: PerformanceObserver[] = [];

      // Largest Contentful Paint (LCP)
      if (finalConfig.enableLCP) {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          const lcpValue = lastEntry.startTime;
          setMetrics(prev => ({ ...prev, lcp: lcpValue }));
          if (finalConfig.enableConsoleLogging) {
            const grade = gradeMetric(lcpValue, PERFORMANCE_THRESHOLDS.lcp);
            const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
            console.log(`${emoji} LCP: ${lcpValue.toFixed(2)}ms (${grade})`);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        observers.push(lcpObserver);
      }

      // First Input Delay (FID)
      if (finalConfig.enableFID) {
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            const performanceEntry = entry as PerformanceEntryWithProcessing;
            const fid = (performanceEntry.processingStart || 0) - entry.startTime;
            setMetrics(prev => ({ ...prev, fid }));
            if (finalConfig.enableConsoleLogging) {
              const grade = gradeMetric(fid, PERFORMANCE_THRESHOLDS.fid);
              const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
              console.log(`${emoji} FID: ${fid.toFixed(2)}ms (${grade})`);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        observers.push(fidObserver);
      }

      // Cumulative Layout Shift (CLS)
      if (finalConfig.enableCLS) {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries() as LayoutShiftEntry[];
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
              if (finalConfig.enableConsoleLogging) {
                const grade = gradeMetric(clsValue, PERFORMANCE_THRESHOLDS.cls);
                const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
                console.log(`${emoji} CLS: ${clsValue.toFixed(3)} (${grade})`);
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        observers.push(clsObserver);
      }

      // Time to First Byte (TTFB)
      if (finalConfig.enableTTFB) {
        const navigationEntries = performance.getEntriesByType('navigation');
        if (navigationEntries.length > 0) {
          const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
          const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
          setMetrics(prev => ({ ...prev, ttfb }));
          if (finalConfig.enableConsoleLogging) {
            const grade = gradeMetric(ttfb, PERFORMANCE_THRESHOLDS.ttfb);
            const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
            console.log(`${emoji} TTFB: ${ttfb.toFixed(2)}ms (${grade})`);
          }
        }
      }

      // First Contentful Paint (FCP)
      if (finalConfig.enableFCP) {
        const fcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            const fcpValue = fcpEntry.startTime;
            setMetrics(prev => ({ ...prev, fcp: fcpValue }));
            if (finalConfig.enableConsoleLogging) {
              const grade = gradeMetric(fcpValue, PERFORMANCE_THRESHOLDS.fcp);
              const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
              console.log(`${emoji} FCP: ${fcpValue.toFixed(2)}ms (${grade})`);
            }
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        observers.push(fcpObserver);
      }

      // Time to Interactive (TTI) - Approximation
      if (finalConfig.enableTTI) {
        setTimeout(() => {
          const navigationEntries = performance.getEntriesByType('navigation');
          if (navigationEntries.length > 0) {
            const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
            const tti = navigationEntry.domInteractive;
            setMetrics(prev => ({ ...prev, tti }));
            if (finalConfig.enableConsoleLogging) {
              const grade = gradeMetric(tti, PERFORMANCE_THRESHOLDS.tti);
              const emoji = grade === 'good' ? '🟢' : grade === 'needs-improvement' ? '🟡' : '🔴';
              console.log(`${emoji} TTI: ${tti.toFixed(2)}ms (${grade})`);
            }
          }
        }, 1000);
      }

      setIsLoading(false);

      // Cleanup function
      return () => {
        observers.forEach(observer => observer.disconnect());
      };

    } catch (error) {
      setError(`Performance monitoring error: ${error}`);
      setIsLoading(false);
      if (finalConfig.enableConsoleLogging) {
        console.warn('Performance monitoring not supported:', error);
      }
    }
  }, [finalConfig]);

  const grades = React.useMemo(() => getPerformanceGrade(), [metrics]);

  return {
    metrics,
    grades,
    isLoading,
    error,
    isSupported: typeof window !== 'undefined' && 'PerformanceObserver' in window,
    config: finalConfig,
    thresholds: PERFORMANCE_THRESHOLDS,
  };
};

export default usePerformance; 