// 🕉️ MINIMAL SOPHISTICATED LAYOUT
// TRUE sophistication = CSS Grid doing ALL the work
// FROM: 4 wrapper components with complex logic
// TO: 1 simple CSS Grid layout

import React from 'react';
import { Box, Container, BoxProps } from '@chakra-ui/react';
import { useHeaderHeight } from '../../hooks/useHeaderHeight';

interface SimpleLayoutProps extends BoxProps {
  children: React.ReactNode;
  hasHero?: boolean;
  maxW?: string;
}

/**
 * REVOLUTIONARY SINGLE LAYOUT COMPONENT
 * - CSS Grid handles all positioning
 * - Dynamic header height detection
 * - Mobile-first responsive design
 * - Zero wrapper explosion
 */
export const SimpleLayout: React.FC<SimpleLayoutProps> = ({ 
  children, 
  hasHero = false,
  maxW = '7xl',
  ...boxProps 
}) => {
  const { actualHeight } = useHeaderHeight();

  return (
    <Box
      as="main"
      role="main"
      minH="100vh"
      // CSS Grid magic - handles everything
      display="grid"
      gridTemplateRows="1fr"
      // Dynamic header spacing - no complex logic needed
      pt={hasHero ? 0 : `${actualHeight}px`}
      {...boxProps}
    >
      {/* Hero sections handle their own top spacing */}
      {hasHero ? (
        <Box mt={`${actualHeight}px`}>
          {children}
        </Box>
      ) : (
        <Container maxW={maxW} px={{ base: 4, md: 6, lg: 8 }}>
          {children}
        </Container>
      )}
    </Box>
  );
};

// HERO SECTION - Just a simple container, no complex wrapper needed
export const HeroSection: React.FC<BoxProps & { children: React.ReactNode }> = ({ 
  children, 
  ...boxProps 
}) => (
  <Box position="relative" {...boxProps}>
    {children}
  </Box>
);

// CONTENT SECTION - Simple container with consistent spacing
export const ContentSection: React.FC<BoxProps & { 
  children: React.ReactNode;
  maxW?: string;
}> = ({ 
  children, 
  maxW = '7xl',
  ...boxProps 
}) => (
  <Container maxW={maxW} px={{ base: 4, md: 6, lg: 8 }} py={{ base: 8, md: 12 }} {...boxProps}>
    {children}
  </Container>
);

export default SimpleLayout;