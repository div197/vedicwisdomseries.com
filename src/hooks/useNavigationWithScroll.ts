/**
 * useNavigationWithScroll Hook
 * Combines React Router navigation with smooth scroll to top functionality
 * Automatically scrolls to top when navigating to new pages
 */

import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

interface NavigationOptions {
  scrollToTop?: boolean;
  scrollDuration?: number;
  scrollEasing?: 'linear' | 'easeInOut' | 'easeOut';
  replace?: boolean;
}

interface NavigationWithScrollReturn {
  navigateWithScroll: (to: string, options?: NavigationOptions) => void;
  scrollToTop: (options?: { duration?: number; easing?: 'linear' | 'easeInOut' | 'easeOut' }) => void;
  currentPath: string;
}

export const useNavigationWithScroll = (): NavigationWithScrollReturn => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToTop } = useScrollToTop();

  const navigateWithScroll = useCallback((
    to: string, 
    options: NavigationOptions = {}
  ) => {
    const {
      scrollToTop: shouldScrollToTop = true,
      scrollDuration = 600,
      scrollEasing = 'easeInOut',
      replace = false
    } = options;

    // Navigate first
    navigate(to, { replace });

    // Then scroll to top if requested
    if (shouldScrollToTop) {
      // Small delay to ensure navigation has completed
      setTimeout(() => {
        scrollToTop({
          duration: scrollDuration,
          easing: scrollEasing,
          offset: 0
        });
      }, 50);
    }
  }, [navigate, scrollToTop]);

  return {
    navigateWithScroll,
    scrollToTop,
    currentPath: location.pathname
  };
};

export default useNavigationWithScroll; 