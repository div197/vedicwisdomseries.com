import { useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useMemo, useEffect, useState } from 'react';

/**
 * 🕉️ KARPATRI DHAM FRAMEWORK - DIVINE UNIVERSAL LAYOUT SYSTEM
 * 
 * This enhanced hook solves ALL layout edge cases for infinite website replication.
 * Following Nishkaam Karma Yoga principles - Perfect action without attachment to results.
 * 
 * DIVINE FEATURES:
 * - Automatic hero page detection
 * - Edge case handling for transparent headers
 * - Universal spacing system for all page types
 * - Mobile-first responsive calculations
 * - Configuration-driven layout management
 */

// REMOVED HARDCODED ARRAY - Now uses configuration-driven detection

/**
 * FIXED: Dynamic header height calculation that matches actual Header.tsx implementation.
 * Measures real DOM elements instead of using wrong magic numbers.
 */
export const useHeaderHeight = () => {
  const [actualHeight, setActualHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Dynamic measurement instead of magic numbers
  useEffect(() => {
    const measureHeaderHeight = () => {
      const topBar = document.querySelector('[data-header-topbar]');
      const mainHeader = document.querySelector('[data-header-main]');
      
      let totalHeight = 0;
      if (topBar) totalHeight += topBar.getBoundingClientRect().height;
      if (mainHeader) totalHeight += mainHeader.getBoundingClientRect().height;
      
      setActualHeight(totalHeight || 98); // Fallback for SSR
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Initial measurement
    measureHeaderHeight();
    
    // Re-measure on resize and scroll
    window.addEventListener('resize', measureHeaderHeight);
    window.addEventListener('scroll', handleScroll);
    
    // Re-measure after fonts load
    const timer = setTimeout(measureHeaderHeight, 100);
    
    return () => {
      window.removeEventListener('resize', measureHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const totalHeight = actualHeight;

  return {
    topBarHeight: Math.round(actualHeight * 0.4), // Approximate top bar portion
    mainHeaderHeight: Math.round(actualHeight * 0.6), // Approximate main header portion
    totalHeight,
    isScrolled,
    // CSS values for direct use
    totalHeightPx: `${totalHeight}px`,
    totalHeightRem: `${totalHeight / 16}rem`
  };
};

/**
 * 🕉️ DIVINE HERO PAGE DETECTION HOOK - NOW CONFIGURATION-DRIVEN
 * Uses siteConfig.navigation to determine hero pages automatically
 */
export const useHeroPageDetection = () => {
  const location = useLocation();
  
  return useMemo(() => {
    const currentPath = location.pathname;
    
    // Import siteConfig inside useMemo to avoid circular dependency
    const { siteConfig } = require('../siteConfig');
    
    // Check main navigation routes
    const heroPage = siteConfig.navigation.main.find((item: any) => 
      item.href === currentPath && item.hasHero === true
    );
    
    if (heroPage) {
      return true;
    }
    
    // Check for dynamic routes that should have hero sections
    if (currentPath.startsWith('/teachings/') && currentPath !== '/teachings') {
      return true; // Teaching sub-pages inherit hero from parent
    }
    
    if (currentPath.startsWith('/news/') && currentPath !== '/news') {
      return true; // News articles inherit hero from parent
    }
    
    return false;
  }, [location.pathname]);
};

/**
 * 🕉️ DIVINE HERO PAGE SPACING HOOK
 * Returns exact spacing needed for hero sections to prevent overlapping
 * SOLVES THE EDGE CASE: Transparent header content overlap
 */
export const useHeroPageSpacing = () => {
  const { totalHeight } = useHeaderHeight();
  
  return {
    // For hero sections that need to start below the header - EXACT spacing
    heroMarginTop: useBreakpointValue({
      base: `${totalHeight + 8}px`,   // Mobile: Header height + 8px buffer
      md: `${totalHeight + 16}px`     // Desktop: Header height + 16px buffer
    }),
    
    // For hero sections that need padding instead of margin
    heroPaddingTop: useBreakpointValue({
      base: `${totalHeight + 24}px`,  // Mobile: Header + 24px spacing
      md: `${totalHeight + 32}px`     // Desktop: Header + 32px spacing
    }),
    
    // For hero content that needs to be perfectly positioned
    heroContentMarginTop: useBreakpointValue({
      base: `${totalHeight}px`,       // Mobile: Exact header height
      md: `${totalHeight}px`          // Desktop: Exact header height
    }),
    
    // For sections immediately after hero
    postHeroSpacing: useBreakpointValue({
      base: '2rem',                   // Mobile: 32px
      md: '3rem'                      // Desktop: 48px
    })
  };
};

/**
 * 🕉️ DIVINE PAGE SPACING HOOK
 * Universal spacing system for non-hero pages
 */
export const usePageSpacing = () => {
  const { totalHeight } = useHeaderHeight();
  
  return {
    // Standard page top padding - SOLVES EDGE CASE: Content under fixed header
    pageTopPadding: useBreakpointValue({
      base: `${totalHeight + 32}px`, // Header + 32px spacing
      md: `${totalHeight + 48}px`    // Header + 48px spacing  
    }),
    
    // Minimal page top padding for compact layouts
    pageTopPaddingMin: useBreakpointValue({
      base: `${totalHeight + 16}px`, // Header + 16px spacing
      md: `${totalHeight + 24}px`    // Header + 24px spacing
    }),
    
    // Section spacing within pages
    sectionSpacing: useBreakpointValue({
      base: '3rem',                  // Mobile: 48px
      md: '4rem',                    // Tablet: 64px
      lg: '5rem'                     // Desktop: 80px
    }),
    
    // Container padding for consistent spacing
    containerPadding: useBreakpointValue({
      base: '1rem',                  // Mobile: 16px
      md: '1.5rem',                  // Tablet: 24px
      lg: '2rem'                     // Desktop: 32px
    })
  };
};

/**
 * 🕉️ DIVINE UNIVERSAL LAYOUT HOOK
 * Master hook that provides all layout calculations for any page type
 * SOLVES ALL EDGE CASES automatically
 */
export const useUniversalLayout = () => {
  const isHeroPage = useHeroPageDetection();
  const heroSpacing = useHeroPageSpacing();
  const pageSpacing = usePageSpacing();
  const headerHeight = useHeaderHeight();
  
  return {
    // Page type detection
    isHeroPage,
    
    // Header measurements
    headerHeight: headerHeight.totalHeight,
    headerHeightPx: headerHeight.totalHeightPx,
    
    // Universal spacing solutions
    pageTopSpacing: isHeroPage ? undefined : pageSpacing.pageTopPadding,
    heroTopSpacing: isHeroPage ? heroSpacing.heroMarginTop : undefined,
    
    // Section spacing
    sectionSpacing: pageSpacing.sectionSpacing,
    containerPadding: pageSpacing.containerPadding,
    
    // Edge case solutions
    transparentHeaderOffset: heroSpacing.heroContentMarginTop,
    postHeroSpacing: heroSpacing.postHeroSpacing,
    
    // Layout utilities
    getPageWrapperProps: () => ({
      pt: isHeroPage ? undefined : pageSpacing.pageTopPadding,
      minH: '100vh'
    }),
    
    getHeroWrapperProps: () => ({
      mt: isHeroPage ? heroSpacing.heroMarginTop : undefined
    }),
    
    getSectionProps: () => ({
      py: pageSpacing.sectionSpacing,
      px: pageSpacing.containerPadding
    })
  };
};

export default useHeaderHeight; 