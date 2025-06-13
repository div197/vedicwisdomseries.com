import { useBreakpointValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

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

// Pages that have hero sections and should use transparent headers
const PAGES_WITH_HERO = [
  '/',                    // HomePage - HeroSlider component
  '/about',              // AboutPage - Hero section with bgImage  
  '/contact',            // ContactPage - Hero section with bgImage
  '/teachings',          // TeachingsPage - Hero section
  '/library',            // LibraryPage - Hero section (newly added)
  '/services'            // CategoriesPage (aliased as services) - Hero section
];

/**
 * Enhanced hook that calculates exact header height for proper page spacing.
 * Accounts for both the top contact bar and main header sections.
 */
export const useHeaderHeight = () => {
  // Top contact bar height calculation
  const topBarHeight = useBreakpointValue({ 
    base: 52,  // Mobile: py={2} + content height + mobile stacking
    md: 44     // Desktop: py={2} + single line content
  });

  // Main header height calculation  
  const mainHeaderHeight = useBreakpointValue({
    base: 66,  // Mobile: py={3} + logo height (54px) + padding
    md: 78     // Desktop: py={3} + logo height (66px) + padding
  });

  // Total header height
  const totalHeight = (topBarHeight || 52) + (mainHeaderHeight || 66);

  return {
    topBarHeight: topBarHeight || 52,
    mainHeaderHeight: mainHeaderHeight || 66,
    totalHeight,
    // CSS values for direct use
    totalHeightPx: `${totalHeight}px`,
    totalHeightRem: `${totalHeight / 16}rem`
  };
};

/**
 * 🕉️ DIVINE HERO PAGE DETECTION HOOK
 * Automatically detects if current page should have hero layout
 */
export const useHeroPageDetection = () => {
  const location = useLocation();
  
  return useMemo(() => {
    const currentPath = location.pathname;
    
    // Check exact matches
    if (PAGES_WITH_HERO.includes(currentPath)) {
      return true;
    }
    
    // Check for dynamic routes that should have hero sections
    if (currentPath.startsWith('/teachings/') && currentPath !== '/teachings') {
      return true;
    }
    
    if (currentPath.startsWith('/news/') && currentPath !== '/news') {
      return true;
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