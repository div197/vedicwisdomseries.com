// 🕉️ ARCHITECTURE MONITORING HOOK
// Production-grade monitoring for Vedic Wisdom Series
// Implements advanced performance and error tracking

import { useState, useCallback, useEffect } from 'react';

interface ArchitectureMetrics {
  // Performance metrics
  bundleSize: number | null;
  loadTime: number | null;
  renderTime: number | null;
  memoryUsage: number | null;
  
  // Error tracking
  errorCount: number;
  lastError: Error | null;
  errorRate: number;
  
  // User experience metrics
  interactionCount: number;
  avgInteractionDelay: number;
  
  // Architecture health
  componentCount: number;
  rerenderCount: number;
  hookCount: number;
  
  // Network metrics
  networkRequests: number;
  failedRequests: number;
  avgResponseTime: number;
}

interface ArchitectureHealth {
  overall: 'excellent' | 'good' | 'warning' | 'critical';
  performance: 'excellent' | 'good' | 'warning' | 'critical';
  stability: 'excellent' | 'good' | 'warning' | 'critical';
  scalability: 'excellent' | 'good' | 'warning' | 'critical';
  maintainability: 'excellent' | 'good' | 'warning' | 'critical';
}

interface ArchitectureRecommendations {
  performance: string[];
  stability: string[];
  scalability: string[];
  maintainability: string[];
}

export const useArchitectureMonitor = () => {
  const [metrics, setMetrics] = useState<ArchitectureMetrics>({
    bundleSize: null,
    loadTime: null,
    renderTime: null,
    memoryUsage: null,
    errorCount: 0,
    lastError: null,
    errorRate: 0,
    interactionCount: 0,
    avgInteractionDelay: 0,
    componentCount: 0,
    rerenderCount: 0,
    hookCount: 0,
    networkRequests: 0,
    failedRequests: 0,
    avgResponseTime: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const [startTime] = useState(Date.now());

  // Calculate architecture health based on metrics
  const calculateHealth = useCallback((): ArchitectureHealth => {
    const { errorRate, loadTime, memoryUsage, rerenderCount, avgResponseTime } = metrics;

    // Performance assessment
    let performance: ArchitectureHealth['performance'] = 'excellent';
    if (loadTime && loadTime > 3000) performance = 'warning';
    if (loadTime && loadTime > 5000) performance = 'critical';
    if (avgResponseTime > 1000) performance = 'warning';
    if (avgResponseTime > 2000) performance = 'critical';

    // Stability assessment
    let stability: ArchitectureHealth['stability'] = 'excellent';
    if (errorRate > 0.01) stability = 'warning'; // 1% error rate
    if (errorRate > 0.05) stability = 'critical'; // 5% error rate

    // Scalability assessment
    let scalability: ArchitectureHealth['scalability'] = 'excellent';
    if (memoryUsage && memoryUsage > 50 * 1024 * 1024) scalability = 'warning'; // 50MB
    if (memoryUsage && memoryUsage > 100 * 1024 * 1024) scalability = 'critical'; // 100MB
    if (rerenderCount > 100) scalability = 'warning';
    if (rerenderCount > 200) scalability = 'critical';

    // Maintainability assessment (based on complexity indicators)
    let maintainability: ArchitectureHealth['maintainability'] = 'excellent';
    if (metrics.componentCount > 50) maintainability = 'good';
    if (metrics.componentCount > 100) maintainability = 'warning';
    if (metrics.hookCount > 20) maintainability = 'warning';

    // Overall health (worst of all categories)
    const healthLevels: ArchitectureHealth['overall'][] = ['excellent', 'good', 'warning', 'critical'];
    const worstLevel = Math.max(
      healthLevels.indexOf(performance),
      healthLevels.indexOf(stability),
      healthLevels.indexOf(scalability),
      healthLevels.indexOf(maintainability)
    );

    return {
      overall: healthLevels[worstLevel],
      performance,
      stability,
      scalability,
      maintainability
    };
  }, [metrics]);

  // Generate recommendations based on current metrics
  const generateRecommendations = useCallback((): ArchitectureRecommendations => {
    const recommendations: ArchitectureRecommendations = {
      performance: [],
      stability: [],
      scalability: [],
      maintainability: []
    };

    // Performance recommendations
    if (metrics.loadTime && metrics.loadTime > 3000) {
      recommendations.performance.push('Consider code splitting to reduce initial bundle size');
      recommendations.performance.push('Implement lazy loading for non-critical components');
    }
    
    if (metrics.bundleSize && metrics.bundleSize > 1024 * 1024) { // 1MB
      recommendations.performance.push('Bundle size is large - consider tree shaking optimization');
    }

    if (metrics.avgResponseTime > 1000) {
      recommendations.performance.push('Network responses are slow - implement caching strategies');
    }

    // Stability recommendations
    if (metrics.errorRate > 0.01) {
      recommendations.stability.push('Error rate is elevated - review error boundaries and handling');
      recommendations.stability.push('Implement comprehensive error logging and monitoring');
    }

    if (metrics.failedRequests > 5) {
      recommendations.stability.push('Multiple network failures detected - implement retry logic');
    }

    // Scalability recommendations
    if (metrics.memoryUsage && metrics.memoryUsage > 50 * 1024 * 1024) {
      recommendations.scalability.push('Memory usage is high - check for memory leaks');
      recommendations.scalability.push('Consider implementing component memoization');
    }

    if (metrics.rerenderCount > 100) {
      recommendations.scalability.push('High rerender count - optimize state management');
      recommendations.scalability.push('Use React.memo and useMemo for expensive computations');
    }

    // Maintainability recommendations
    if (metrics.componentCount > 50) {
      recommendations.maintainability.push('Component count is high - consider component composition');
      recommendations.maintainability.push('Implement design system with reusable components');
    }

    if (metrics.hookCount > 20) {
      recommendations.maintainability.push('Many custom hooks - ensure proper separation of concerns');
    }

    return recommendations;
  }, [metrics]);

  // Track component renders
  const trackRender = useCallback(() => {
    setMetrics(prev => ({
      ...prev,
      rerenderCount: prev.rerenderCount + 1,
      renderTime: performance.now()
    }));
  }, []);

  // Track errors
  const trackError = useCallback((error: Error) => {
    setMetrics(prev => {
      const newErrorCount = prev.errorCount + 1;
      const timeElapsed = (Date.now() - startTime) / 1000; // seconds
      const errorRate = newErrorCount / Math.max(timeElapsed, 1);

      return {
        ...prev,
        errorCount: newErrorCount,
        lastError: error,
        errorRate
      };
    });
  }, [startTime]);

  // Track interactions
  const trackInteraction = useCallback((delay: number) => {
    setMetrics(prev => {
      const newCount = prev.interactionCount + 1;
      const avgDelay = ((prev.avgInteractionDelay * prev.interactionCount) + delay) / newCount;

      return {
        ...prev,
        interactionCount: newCount,
        avgInteractionDelay: avgDelay
      };
    });
  }, []);

  // Track network requests
  const trackNetworkRequest = useCallback((responseTime: number, failed: boolean = false) => {
    setMetrics(prev => {
      const newRequestCount = prev.networkRequests + 1;
      const newFailedCount = prev.failedRequests + (failed ? 1 : 0);
      const avgResponseTime = ((prev.avgResponseTime * prev.networkRequests) + responseTime) / newRequestCount;

      return {
        ...prev,
        networkRequests: newRequestCount,
        failedRequests: newFailedCount,
        avgResponseTime
      };
    });
  }, []);

  // Initialize monitoring
  useEffect(() => {
    if (!isMonitoring && typeof window !== 'undefined') {
      setIsMonitoring(true);

      // Measure bundle size and load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      setMetrics(prev => ({ ...prev, loadTime }));

      // Monitor memory usage
      const updateMemoryUsage = () => {
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          setMetrics(prev => ({ ...prev, memoryUsage: memory.usedJSHeapSize }));
        }
      };

      updateMemoryUsage();
      const memoryInterval = setInterval(updateMemoryUsage, 30000); // Every 30 seconds

      // Monitor resource loading
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            const responseTime = entry.responseEnd - entry.responseStart;
            const failed = entry.transferSize === 0 && entry.decodedBodySize === 0;
            trackNetworkRequest(responseTime, failed);
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });

      // Global error tracking
      const errorHandler = (event: ErrorEvent) => {
        trackError(new Error(event.message));
      };

      const unhandledRejectionHandler = (event: PromiseRejectionEvent) => {
        trackError(new Error(event.reason));
      };

      window.addEventListener('error', errorHandler);
      window.addEventListener('unhandledrejection', unhandledRejectionHandler);

      // Cleanup
      return () => {
        clearInterval(memoryInterval);
        observer.disconnect();
        window.removeEventListener('error', errorHandler);
        window.removeEventListener('unhandledrejection', unhandledRejectionHandler);
      };
    }
  }, [isMonitoring, trackError, trackNetworkRequest]);

  const health = calculateHealth();
  const recommendations = generateRecommendations();

  return {
    metrics,
    health,
    recommendations,
    trackRender,
    trackError,
    trackInteraction,
    trackNetworkRequest,
    isMonitoring
  };
};

export default useArchitectureMonitor;