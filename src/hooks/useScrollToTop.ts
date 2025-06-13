/**
 * useScrollToTop Hook
 * Provides smooth scroll to top functionality with accessibility support
 * Respects user's motion preferences and provides fallback for reduced motion
 */

import { useCallback, useEffect, useState, useMemo } from 'react';

interface ScrollToTopOptions {
  duration?: number;
  easing?: 'linear' | 'easeInOut' | 'easeOut';
  offset?: number;
}

interface ScrollToTopReturn {
  scrollToTop: (options?: ScrollToTopOptions) => void;
  isScrolling: boolean;
  showScrollButton: boolean;
}

export const useScrollToTop = (threshold: number = 300): ScrollToTopReturn => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
           document.documentElement.classList.contains('reduced-motion');
  }, []);

  // Easing functions - memoized to avoid dependency issues
  const easingFunctions = useMemo(() => ({
    linear: (t: number) => t,
    easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeOut: (t: number) => 1 - Math.pow(1 - t, 3)
  }), []);

  // Smooth scroll implementation
  const smoothScrollTo = useCallback((
    targetPosition: number,
    duration: number = 800,
    easing: keyof typeof easingFunctions = 'easeInOut'
  ) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    setIsScrolling(true);
    window.requestAnimationFrame(animateScroll);
  }, [easingFunctions]);

  // Main scroll to top function
  const scrollToTop = useCallback((options: ScrollToTopOptions = {}) => {
    const {
      duration = 800,
      easing = 'easeInOut',
      offset = 0
    } = options;

    // If user prefers reduced motion, use instant scroll
    if (prefersReducedMotion()) {
      window.scrollTo(0, offset);
      return;
    }

    // Use smooth scroll
    smoothScrollTo(offset, duration, easing);
  }, [smoothScrollTo, prefersReducedMotion]);

  // Monitor scroll position for show/hide scroll button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > threshold);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [threshold]);

  return {
    scrollToTop,
    isScrolling,
    showScrollButton
  };
};

export default useScrollToTop; 