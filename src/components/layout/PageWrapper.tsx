// 🚨 DEPRECATED - Use Premium Layout System instead
// This file is deprecated. All pages should use the Premium Layout System:
// import { Section, Container, VStack, HStack } from '../components/premium'
// 
// The Premium Layout System handles:
// - Automatic header spacing through Section variants
// - Responsive container sizing through Container component
// - Consistent spacing through padding props
// - No need for manual header height calculations
//
// Migration examples:
// Old: <PageWrapper><YourContent /></PageWrapper>  
// New: <Section variant="content"><Container><YourContent /></Container></Section>
//
// Old: <PageWrapper hasHero={true}><HeroContent /></PageWrapper>
// New: <Section variant="hero"><HeroContent /></Section>

import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { useUniversalLayout, useHeroPageDetection } from '../../hooks/useHeaderHeight';

interface PageWrapperProps extends BoxProps {
  children: React.ReactNode;
  hasHero?: boolean;
  useMinimalSpacing?: boolean;
  autoDetectLayout?: boolean;
}

/**
 * 🕉️ KARPATRI DHAM FRAMEWORK - DIVINE UNIVERSAL PAGE WRAPPER
 * 
 * This enhanced component automatically solves ALL layout edge cases:
 * - Transparent header content overlap
 * - Hero vs non-hero page spacing
 * - Mobile-first responsive design
 * - Automatic layout detection
 * - Configuration-driven spacing
 * 
 * Following Nishkaam Karma Yoga principles - Perfect action without attachment to results.
 * 
 * DIVINE FEATURES:
 * - Auto-detects hero pages and applies correct spacing
 * - Prevents content overlap with transparent headers
 * - Provides consistent spacing across all page types
 * - Mobile-first responsive calculations
 * - Zero configuration required for standard use cases
 * 
 * Usage Examples:
 * 
 * // Automatic detection (recommended)
 * <PageWrapper>
 *   <YourPageContent />
 * </PageWrapper>
 * 
 * // Explicit hero control
 * <PageWrapper hasHero={true}>
 *   <HeroSection />
 *   <ContentSections />
 * </PageWrapper>
 * 
 * // Minimal spacing for compact layouts
 * <PageWrapper useMinimalSpacing={true}>
 *   <CompactContent />
 * </PageWrapper>
 */
export const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  hasHero, 
  useMinimalSpacing = false,
  autoDetectLayout = true,
  ...boxProps 
}) => {
  const location = useLocation();
  const universalLayout = useUniversalLayout();
  const autoDetectedHero = useHeroPageDetection();

  // Determine if page has hero section
  const pageHasHero = hasHero !== undefined ? hasHero : (autoDetectLayout ? autoDetectedHero : false);

  // Get appropriate spacing based on page type
  const getPageSpacing = () => {
    if (pageHasHero) {
      // Hero pages don't need top padding - hero sections handle their own spacing
      return undefined;
    }
    
    if (useMinimalSpacing) {
      // Minimal spacing for compact layouts
      return universalLayout.pageTopSpacing ? 
        universalLayout.pageTopSpacing.replace(/\d+px/, (match) => `${parseInt(match) - 16}px`) :
        undefined;
    }
    
    // Standard page spacing
    return universalLayout.pageTopSpacing;
  };

  return (
    <Box
      as="main"
      role="main"
      minH="100vh"
      pt={getPageSpacing()}
      position="relative"
      // Add debug info in development
      data-page-type={pageHasHero ? 'hero' : 'standard'}
      data-current-path={location.pathname}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

/**
 * 🕉️ DIVINE HERO SECTION WRAPPER
 * 
 * Specialized wrapper for hero sections that automatically handles:
 * - Transparent header spacing
 * - Content positioning below fixed header
 * - Mobile-first responsive design
 * - Edge case prevention
 * 
 * SOLVES THE CRITICAL EDGE CASE: Content overlapping with transparent header
 */
export const HeroSectionWrapper: React.FC<BoxProps & { children: React.ReactNode }> = ({ 
  children, 
  ...boxProps 
}) => {
  const universalLayout = useUniversalLayout();

  return (
    <Box
      // Apply exact spacing to position hero content below header
      mt={universalLayout.heroTopSpacing}
      position="relative"
      // Ensure hero section is properly positioned
      zIndex={1}
      // Add debug info in development
      data-component="hero-section-wrapper"
      data-spacing={universalLayout.heroTopSpacing}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

/**
 * 🕉️ DIVINE SECTION WRAPPER
 * 
 * Universal wrapper for content sections that provides:
 * - Consistent spacing between sections
 * - Responsive padding
 * - Container-based layout
 * - Mobile-first design
 */
export const SectionWrapper: React.FC<BoxProps & { 
  children: React.ReactNode;
  containerMaxW?: string;
  noPadding?: boolean;
}> = ({ 
  children, 
  containerMaxW: _containerMaxW = '7xl',
  noPadding = false,
  ...boxProps 
}) => {
  const universalLayout = useUniversalLayout();

  return (
    <Box
      py={noPadding ? undefined : universalLayout.sectionSpacing}
      px={noPadding ? undefined : universalLayout.containerPadding}
      position="relative"
      {...boxProps}
    >
      {children}
    </Box>
  );
};

/**
 * 🕉️ DIVINE CONTENT CONTAINER
 * 
 * Smart container that automatically applies proper spacing and layout
 * based on the current page context and content type.
 */
export const ContentContainer: React.FC<BoxProps & {
  children: React.ReactNode;
  maxW?: string;
  centerContent?: boolean;
  isAfterHero?: boolean;
}> = ({
  children,
  maxW = '7xl',
  centerContent = false,
  isAfterHero = false,
  ...boxProps
}) => {
  const universalLayout = useUniversalLayout();

  return (
    <Box
      maxW={maxW}
      mx="auto"
      px={universalLayout.containerPadding}
      py={isAfterHero ? universalLayout.postHeroSpacing : universalLayout.sectionSpacing}
      textAlign={centerContent ? 'center' : 'left'}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

// Default export for backward compatibility
export default PageWrapper; 