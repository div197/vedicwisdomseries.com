import React, { createContext, useContext, ReactNode } from 'react';
import { Box, BoxProps, Container, VStack } from '@chakra-ui/react';
import { useUniversalLayout } from '../../hooks/useHeaderHeight';

/**
 * 🕉️ KARPATRI DHAM FRAMEWORK - DIVINE UNIVERSAL LAYOUT PROVIDER
 * 
 * This component provides the ultimate solution for ALL layout edge cases
 * in the framework, ensuring perfect spacing and positioning for infinite
 * website replication following Nishkaam Karma Yoga principles.
 * 
 * DIVINE FEATURES:
 * - Automatic transparent header spacing
 * - Hero vs non-hero page detection
 * - Mobile-first responsive design
 * - Edge case prevention system
 * - Configuration-driven layout
 * - Zero manual spacing required
 * 
 * SOLVES CRITICAL EDGE CASES:
 * 1. Content overlapping with transparent headers
 * 2. Inconsistent spacing between pages
 * 3. Mobile layout issues
 * 4. Hero section positioning
 * 5. Section spacing inconsistencies
 * 
 * Usage for 108 Agentic Tasks:
 * 
 * // Wrap your entire app
 * <UniversalLayoutProvider>
 *   <YourApp />
 * </UniversalLayoutProvider>
 * 
 * // Use layout components anywhere
 * <AutoLayoutPage>
 *   <AutoLayoutHero>Hero Content</AutoLayoutHero>
 *   <AutoLayoutSection>Section Content</AutoLayoutSection>
 * </AutoLayoutPage>
 */

interface LayoutContextType {
  isHeroPage: boolean;
  headerHeight: number;
  sectionSpacing: string | undefined;
  containerPadding: string | undefined;
  heroTopSpacing: string | undefined;
  pageTopSpacing: string | undefined;
}

const LayoutContext = createContext<LayoutContextType | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within UniversalLayoutProvider');
  }
  return context;
};

interface UniversalLayoutProviderProps {
  children: ReactNode;
}

export const UniversalLayoutProvider: React.FC<UniversalLayoutProviderProps> = ({ children }) => {
  const universalLayout = useUniversalLayout();

  const contextValue: LayoutContextType = {
    isHeroPage: universalLayout.isHeroPage,
    headerHeight: universalLayout.headerHeight,
    sectionSpacing: universalLayout.sectionSpacing,
    containerPadding: universalLayout.containerPadding,
    heroTopSpacing: universalLayout.heroTopSpacing,
    pageTopSpacing: universalLayout.pageTopSpacing,
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      {children}
    </LayoutContext.Provider>
  );
};

/**
 * 🕉️ AUTO LAYOUT PAGE COMPONENT
 * 
 * Automatically applies correct spacing based on page type.
 * SOLVES: Content overlapping with fixed/transparent headers
 */
interface AutoLayoutPageProps extends BoxProps {
  children: ReactNode;
  isHero?: boolean;
  useMinimalSpacing?: boolean;
}

export const AutoLayoutPage: React.FC<AutoLayoutPageProps> = ({
  children,
  isHero,
  useMinimalSpacing = false,
  ...boxProps
}) => {
  const layout = useLayoutContext();
  
  // Determine spacing based on page type
  const getTopSpacing = () => {
    if (isHero !== undefined ? isHero : layout.isHeroPage) {
      return undefined; // Hero pages handle their own spacing
    }
    
    if (useMinimalSpacing && layout.pageTopSpacing) {
      // Reduce spacing for minimal layouts
      const spacing = parseInt(layout.pageTopSpacing);
      return `${spacing - 16}px`;
    }
    
    return layout.pageTopSpacing;
  };

  return (
    <Box
      as="main"
      role="main"
      minH="100vh"
      pt={getTopSpacing()}
      position="relative"
      // Debug attributes for development
      data-layout-type={isHero !== undefined ? isHero : layout.isHeroPage ? 'hero' : 'standard'}
      data-top-spacing={getTopSpacing()}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

/**
 * 🕉️ AUTO LAYOUT HERO COMPONENT
 * 
 * Automatically positions hero content below transparent header.
 * SOLVES: Hero content overlapping with transparent header
 */
interface AutoLayoutHeroProps extends BoxProps {
  children: ReactNode;
  containerMaxW?: string;
}

export const AutoLayoutHero: React.FC<AutoLayoutHeroProps> = ({
  children,
  containerMaxW = '7xl',
  ...boxProps
}) => {
  const layout = useLayoutContext();

  return (
    <Box
      mt={layout.heroTopSpacing}
      position="relative"
      zIndex={1}
      // Debug attributes
      data-component="auto-layout-hero"
      data-spacing={layout.heroTopSpacing}
      {...boxProps}
    >
      <Container maxW={containerMaxW}>
        {children}
      </Container>
    </Box>
  );
};

/**
 * 🕉️ AUTO LAYOUT SECTION COMPONENT
 * 
 * Automatically applies consistent section spacing.
 * SOLVES: Inconsistent spacing between sections
 */
interface AutoLayoutSectionProps extends BoxProps {
  children: ReactNode;
  containerMaxW?: string;
  noPadding?: boolean;
  isAfterHero?: boolean;
  centerContent?: boolean;
}

export const AutoLayoutSection: React.FC<AutoLayoutSectionProps> = ({
  children,
  containerMaxW = '7xl',
  noPadding = false,
  isAfterHero = false,
  centerContent = false,
  ...boxProps
}) => {
  const layout = useLayoutContext();

  const getPadding = () => {
    if (noPadding) return undefined;
    if (isAfterHero) return '3rem'; // Reduced spacing after hero
    return layout.sectionSpacing;
  };

  return (
    <Box
      py={getPadding()}
      px={noPadding ? undefined : layout.containerPadding}
      position="relative"
      {...boxProps}
    >
      <Container maxW={containerMaxW}>
        <VStack spacing={8} align={centerContent ? 'center' : 'stretch'}>
          {children}
        </VStack>
      </Container>
    </Box>
  );
};

/**
 * 🕉️ AUTO LAYOUT CONTAINER COMPONENT
 * 
 * Smart container with automatic responsive spacing.
 * SOLVES: Manual container management
 */
interface AutoLayoutContainerProps extends BoxProps {
  children: ReactNode;
  maxW?: string;
  centerContent?: boolean;
  fullWidth?: boolean;
}

export const AutoLayoutContainer: React.FC<AutoLayoutContainerProps> = ({
  children,
  maxW = '7xl',
  centerContent = false,
  fullWidth = false,
  ...boxProps
}) => {
  const layout = useLayoutContext();

  if (fullWidth) {
    return (
      <Box
        px={layout.containerPadding}
        textAlign={centerContent ? 'center' : 'left'}
        {...boxProps}
      >
        {children}
      </Box>
    );
  }

  return (
    <Container
      maxW={maxW}
      px={layout.containerPadding}
      textAlign={centerContent ? 'center' : 'left'}
      {...boxProps}
    >
      {children}
    </Container>
  );
};

/**
 * 🕉️ DIVINE LAYOUT DEBUGGING COMPONENT
 * 
 * Shows layout information in development mode.
 * Helps AI agents understand spacing decisions.
 */
export const LayoutDebugInfo: React.FC = () => {
  const layout = useLayoutContext();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Box
      position="fixed"
      top={4}
      right={4}
      bg="rgba(0,0,0,0.8)"
      color="white"
      p={3}
      borderRadius="md"
      fontSize="xs"
      zIndex={9999}
      fontFamily="mono"
    >
      <VStack align="start" spacing={1}>
        <Box>Page Type: {layout.isHeroPage ? 'Hero' : 'Standard'}</Box>
        <Box>Header Height: {layout.headerHeight}px</Box>
        <Box>Hero Spacing: {layout.heroTopSpacing}</Box>
        <Box>Page Spacing: {layout.pageTopSpacing}</Box>
        <Box>Section Spacing: {layout.sectionSpacing}</Box>
      </VStack>
    </Box>
  );
};

/**
 * 🕉️ COMPLETE LAYOUT SOLUTION EXAMPLE
 * 
 * This demonstrates the complete solution for any page type.
 * Copy this pattern for all 108 agentic tasks.
 */
export const CompleteLayoutExample: React.FC = () => {
  return (
    <UniversalLayoutProvider>
      <AutoLayoutPage>
        {/* Hero Section - Automatically positioned below header */}
        <AutoLayoutHero>
          <VStack spacing={6} textAlign="center" color="white">
            <Box>Hero Content Here</Box>
          </VStack>
        </AutoLayoutHero>

        {/* Content Sections - Automatically spaced */}
        <AutoLayoutSection isAfterHero>
          <Box>First section after hero</Box>
        </AutoLayoutSection>

        <AutoLayoutSection>
          <Box>Regular section with standard spacing</Box>
        </AutoLayoutSection>

        <AutoLayoutSection centerContent>
          <Box>Centered content section</Box>
        </AutoLayoutSection>
      </AutoLayoutPage>

      {/* Debug info for development */}
      <LayoutDebugInfo />
    </UniversalLayoutProvider>
  );
}; 