import React from 'react'
import { Box, Container, VStack, HStack, Flex, useColorModeValue } from '@chakra-ui/react'
import { motion, HTMLMotionProps } from 'framer-motion'

// Premium Layout System - Centralized Chakra UI Architecture
// Highest Quality Standardized Layout Components

interface PremiumSectionProps {
  variant?: 'hero' | 'content' | 'feature' | 'testimonial' | 'cta'
  background?: 'gradient' | 'glass' | 'solid' | 'pattern' | 'image'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
  className?: string
  animate?: boolean
}

interface PremiumContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  center?: boolean
  children: React.ReactNode
}

interface PremiumGridProps {
  columns?: { base?: number; sm?: number; md?: number; lg?: number; xl?: number }
  spacing?: number | string
  children: React.ReactNode
  equalHeight?: boolean
}

// Advanced Background Variants
const getBackgroundStyles = (variant: string, colorMode: string) => {
  const backgrounds = {
    gradient: {
      light: 'linear-gradient(135deg, rgba(255,153,51,0.08) 0%, rgba(30,144,255,0.05) 35%, rgba(242,219,73,0.08) 100%)',
      dark: 'linear-gradient(135deg, rgba(255,153,51,0.1) 0%, rgba(30,144,255,0.08) 35%, rgba(242,219,73,0.1) 100%)'
    },
    glass: {
      light: 'rgba(255, 255, 255, 0.7)',
      dark: 'rgba(45, 55, 72, 0.7)'
    },
    solid: {
      light: 'white',
      dark: 'gray.800'
    },
    pattern: {
      light: `radial-gradient(circle at 25% 25%, rgba(255,153,51,0.05) 2px, transparent 2px)`,
      dark: `radial-gradient(circle at 25% 25%, rgba(255,153,51,0.1) 2px, transparent 2px)`
    },
    image: {
      light: 'url("/assets/images/premium-bg-light.svg")',
      dark: 'url("/assets/images/premium-bg-dark.svg")'
    }
  }
  
  return backgrounds[variant as keyof typeof backgrounds]?.[colorMode as keyof typeof backgrounds.gradient] || 'transparent'
}

// Premium Section Component - Ultimate Layout Foundation
export const PremiumSection: React.FC<PremiumSectionProps> = ({
  variant = 'content',
  background = 'gradient',
  padding = 'lg',
  children,
  className = '',
  animate = true
}) => {
  const colorMode = useColorModeValue('light', 'dark')
  const bgStyle = getBackgroundStyles(background, colorMode)
  
  const paddingMap = {
    none: 0,
    sm: { base: 4, md: 6 },
    md: { base: 6, md: 8 },
    lg: { base: 8, md: 12 },
    xl: { base: 12, md: 16 },
    '2xl': { base: 16, md: 20 }
  }

  const sectionStyles = {
    hero: {
      minH: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    content: {
      py: paddingMap[padding],
      position: 'relative' as const
    },
    feature: {
      py: paddingMap[padding],
      position: 'relative' as const,
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        bg: 'linear-gradient(90deg, transparent, rgba(255,153,51,0.3), transparent)'
      }
    },
    testimonial: {
      py: paddingMap[padding],
      bg: 'rgba(30,144,255,0.03)',
      position: 'relative' as const
    },
    cta: {
      py: paddingMap[padding],
      bg: 'linear-gradient(135deg, rgba(255,153,51,0.1), rgba(242,219,73,0.05))',
      position: 'relative' as const,
      _before: {
        content: '""',
        position: 'absolute',
        inset: 0,
        bg: 'radial-gradient(circle at center, rgba(255,153,51,0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }
    }
  }

  const MotionBox = motion(Box)

  const animationProps: HTMLMotionProps<"div"> = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, margin: "-100px" }
  } : {}

  return (
    <MotionBox
      as="section"
      bg={bgStyle}
      className={`premium-section premium-section--${variant} ${className}`}
      {...sectionStyles[variant]}
      {...animationProps}
    >
      {background === 'pattern' && (
        <Box
          position="absolute"
          inset={0}
          bgImage={bgStyle}
          bgSize="60px 60px"
          opacity={0.4}
          pointerEvents="none"
        />
      )}
      {children}
    </MotionBox>
  )
}

// Premium Container Component - Centralized Sizing
export const PremiumContainer: React.FC<PremiumContainerProps> = ({
  size = 'xl',
  center = true,
  children
}) => {
  const containerSizes = {
    sm: 'container.sm',
    md: 'container.md', 
    lg: 'container.lg',
    xl: 'container.xl',
    full: 'full'
  }

  return (
    <Container
      maxW={containerSizes[size]}
      mx={center ? 'auto' : undefined}
      px={{ base: 4, sm: 6, lg: 8 }}
      className="premium-container"
    >
      {children}
    </Container>
  )
}

// Premium Grid Component - Advanced Layout System
export const PremiumGrid: React.FC<PremiumGridProps> = ({
  columns = { base: 1, md: 2, lg: 3 },
  spacing = 8,
  children,
  equalHeight = false
}) => {
  return (
    <Flex
      direction="column"
      gap={spacing}
      className="premium-grid"
      sx={{
        '@media (min-width: 480px)': {
          display: 'grid',
          gridTemplateColumns: `repeat(${columns.sm || columns.base || 1}, 1fr)`,
          alignItems: equalHeight ? 'stretch' : 'start'
        },
        '@media (min-width: 768px)': {
          gridTemplateColumns: `repeat(${columns.md || columns.sm || columns.base || 2}, 1fr)`
        },
        '@media (min-width: 1024px)': {
          gridTemplateColumns: `repeat(${columns.lg || columns.md || 3}, 1fr)`
        },
        '@media (min-width: 1280px)': {
          gridTemplateColumns: `repeat(${columns.xl || columns.lg || columns.md || 3}, 1fr)`
        }
      }}
    >
      {children}
    </Flex>
  )
}

// Premium Stack Components - Centralized Spacing
interface PremiumStackProps {
  spacing?: number | string
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around'
  children: React.ReactNode
  className?: string
}

export const PremiumVStack: React.FC<PremiumStackProps> = ({
  spacing = 6,
  align = 'stretch',
  children,
  className = ''
}) => (
  <VStack spacing={spacing} align={align} className={`premium-vstack ${className}`}>
    {children}
  </VStack>
)

export const PremiumHStack: React.FC<PremiumStackProps> = ({
  spacing = 4,
  align = 'center',
  justify = 'start',
  children,
  className = ''
}) => (
  <HStack 
    spacing={spacing} 
    align={align} 
    justify={justify} 
    className={`premium-hstack ${className}`}
    flexWrap="wrap"
  >
    {children}
  </HStack>
)

// Premium Flex Component - Ultimate Flexibility
interface PremiumFlexProps {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly'
  gap?: number | string
  children: React.ReactNode
  className?: string
}

export const PremiumFlex: React.FC<PremiumFlexProps> = ({
  direction = 'row',
  wrap = 'wrap',
  align = 'center',
  justify = 'start',
  gap = 4,
  children,
  className = ''
}) => (
  <Flex
    direction={direction}
    wrap={wrap}
    align={align}
    justify={justify}
    gap={gap}
    className={`premium-flex ${className}`}
  >
    {children}
  </Flex>
)

// Export all components
export {
  PremiumSection as Section,
  PremiumContainer as Container,
  PremiumGrid as Grid,
  PremiumVStack as VStack,
  PremiumHStack as HStack,
  PremiumFlex as Flex
}