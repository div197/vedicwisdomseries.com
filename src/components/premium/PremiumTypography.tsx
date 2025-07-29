import React from 'react'
import { 
  Heading, 
  Text, 
  Box, 
  useColorModeValue,
  HeadingProps,
  TextProps 
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Premium Typography System - Centralized Chakra UI Text Architecture
// Highest Quality Typography Components for Maximum Impact

interface PremiumHeadingProps extends Omit<HeadingProps, 'size'> {
  variant?: 'hero' | 'section' | 'subsection' | 'card' | 'display'
  gradient?: boolean
  glow?: boolean
  animate?: boolean
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

interface PremiumTextProps extends TextProps {
  variant?: 'body' | 'lead' | 'caption' | 'label' | 'subtitle' | 'overline'
  emphasis?: 'normal' | 'subtle' | 'strong' | 'accent'
  animate?: boolean
}

interface PremiumBadgeProps {
  variant?: 'solid' | 'outline' | 'glass' | 'gradient'
  colorScheme?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
}

// Advanced Typography Variants
const getHeadingStyles = (variant: string, gradient: boolean, glow: boolean) => {
  const baseStyles = {
    hero: {
      fontSize: { base: '3xl', sm: '4xl', md: '5xl', lg: '6xl', xl: '7xl' },
      fontWeight: '800',
      lineHeight: '1.1',
      letterSpacing: '-0.02em'
    },
    section: {
      fontSize: { base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' },
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.015em'
    },
    subsection: {
      fontSize: { base: 'xl', sm: '2xl', md: '3xl' },
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.01em'
    },
    card: {
      fontSize: { base: 'lg', sm: 'xl', md: '2xl' },
      fontWeight: '600',
      lineHeight: '1.3'
    },
    display: {
      fontSize: { base: '4xl', sm: '5xl', md: '6xl', lg: '7xl', xl: '8xl' },
      fontWeight: '900',
      lineHeight: '0.9',
      letterSpacing: '-0.03em'
    }
  }

  let styles = { ...baseStyles[variant as keyof typeof baseStyles] }

  if (gradient) {
    styles = {
      ...styles,
      bgGradient: 'linear(to-r, primary.500, secondary.500, tertiary.500)',
      bgClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }

  if (glow) {
    styles = {
      ...styles,
      textShadow: '0 0 20px rgba(255,153,51,0.4), 0 0 40px rgba(255,153,51,0.2)'
    }
  }

  return styles
}

const getTextStyles = (variant: string, emphasis: string) => {
  const variants = {
    body: {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: '1.7',
      fontWeight: '400'
    },
    lead: {
      fontSize: { base: 'lg', md: 'xl' },
      lineHeight: '1.6',
      fontWeight: '500'
    },
    caption: {
      fontSize: { base: 'sm', md: 'md' },
      lineHeight: '1.5',
      fontWeight: '400'
    },
    label: {
      fontSize: { base: 'xs', md: 'sm' },
      lineHeight: '1.4',
      fontWeight: '600',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.05em'
    },
    subtitle: {
      fontSize: { base: 'md', md: 'lg' },
      lineHeight: '1.5',
      fontWeight: '500'
    },
    overline: {
      fontSize: { base: 'xs', md: 'sm' },
      lineHeight: '1.2',
      fontWeight: '700',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em'
    }
  }

  const emphasisColors = {
    normal: useColorModeValue('gray.700', 'gray.200'),
    subtle: useColorModeValue('gray.600', 'gray.400'),
    strong: useColorModeValue('gray.900', 'white'),
    accent: useColorModeValue('primary.600', 'primary.300')
  }

  return {
    ...variants[variant as keyof typeof variants],
    color: emphasisColors[emphasis as keyof typeof emphasisColors]
  }
}

// Premium Heading Component
export const PremiumHeading: React.FC<PremiumHeadingProps> = ({
  variant = 'section',
  gradient = false,
  glow = false,
  animate = true,
  level = 2,
  children,
  ...props
}) => {
  const styles = getHeadingStyles(variant, gradient, glow)
  const MotionHeading = motion(Heading)

  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  } : {}

  return (
    <MotionHeading
      as={`h${level}` as any}
      className={`premium-heading premium-heading--${variant}`}
      {...styles}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionHeading>
  )
}

// Premium Text Component
export const PremiumText: React.FC<PremiumTextProps> = ({
  variant = 'body',
  emphasis = 'normal',
  animate = false,
  children,
  ...props
}) => {
  const styles = getTextStyles(variant, emphasis)
  const MotionText = motion(Text)

  const animationProps = animate ? {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    viewport: { once: true }
  } : {}

  return (
    <MotionText
      className={`premium-text premium-text--${variant} premium-text--${emphasis}`}
      {...styles}
      {...animationProps}
      {...props}
    >
      {children}
    </MotionText>
  )
}

// Premium Badge Component
export const PremiumBadge: React.FC<PremiumBadgeProps> = ({
  variant = 'solid',
  colorScheme = 'primary',
  size = 'md',
  children,
  icon
}) => {
  const colorMode = useColorModeValue('light', 'dark')
  
  const variantStyles = {
    solid: {
      bg: `${colorScheme}.500`,
      color: 'white',
      border: 'none'
    },
    outline: {
      bg: 'transparent',
      color: `${colorScheme}.500`,
      border: '2px solid',
      borderColor: `${colorScheme}.500`
    },
    glass: {
      bg: colorMode === 'light' 
        ? 'rgba(255, 255, 255, 0.8)' 
        : 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      color: `${colorScheme}.600`,
      border: '1px solid',
      borderColor: colorMode === 'light' 
        ? 'rgba(255, 255, 255, 0.3)' 
        : 'rgba(255, 255, 255, 0.1)'
    },
    gradient: {
      bg: `linear-gradient(135deg, ${colorScheme}.500 0%, ${colorScheme}.600 100%)`,
      color: 'white',
      border: 'none'
    }
  }

  const sizeStyles = {
    sm: {
      fontSize: 'xs',
      px: 2,
      py: 1,
      borderRadius: 'md'
    },
    md: {
      fontSize: 'sm',
      px: 3,
      py: 1.5,
      borderRadius: 'lg'
    },
    lg: {
      fontSize: 'md',
      px: 4,
      py: 2,
      borderRadius: 'xl'
    }
  }

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      gap={icon ? 2 : 0}
      className={`premium-badge premium-badge--${variant} premium-badge--${size}`}
      fontWeight="600"
      textTransform="uppercase"
      letterSpacing="0.05em"
      _hover={{
        transform: 'translateY(-1px)',
        boxShadow: 'sm'
      }}
      transition="all 0.2s ease"
      {...variantStyles[variant]}
      {...sizeStyles[size]}
    >
      {icon}
      {children}
    </Box>
  )
}

// Premium Quote Component
interface PremiumQuoteProps {
  author?: string
  title?: string
  children: React.ReactNode
  variant?: 'default' | 'testimonial' | 'highlight'
  size?: 'sm' | 'md' | 'lg'
}

export const PremiumQuote: React.FC<PremiumQuoteProps> = ({
  author,
  title,
  children,
  variant = 'default',
  size = 'md'
}) => {
  const sizeStyles = {
    sm: { fontSize: 'md', py: 4 },
    md: { fontSize: 'lg', py: 6 },
    lg: { fontSize: 'xl', py: 8 }
  }

  const variantStyles = {
    default: {
      borderLeft: '4px solid',
      borderColor: 'primary.500',
      pl: 6,
      bg: 'transparent'
    },
    testimonial: {
      bg: useColorModeValue('gray.50', 'gray.800'),
      p: 6,
      borderRadius: 'xl',
      border: '1px solid',
      borderColor: useColorModeValue('gray.200', 'gray.700')
    },
    highlight: {
      bg: 'linear-gradient(135deg, rgba(255,153,51,0.1), rgba(242,219,73,0.05))',
      p: 6,
      borderRadius: 'xl',
      border: '1px solid rgba(255,153,51,0.2)'
    }
  }

  return (
    <Box
      className={`premium-quote premium-quote--${variant}`}
      {...variantStyles[variant]}
      {...sizeStyles[size]}
    >
      <Text
        fontStyle="italic"
        lineHeight="1.6"
        mb={author || title ? 4 : 0}
        _before={{
          content: '"""',
          color: 'primary.500',
          fontSize: '2xl',
          fontWeight: 'bold',
          mr: 1
        }}
        _after={{
          content: '"""',
          color: 'primary.500',
          fontSize: '2xl',
          fontWeight: 'bold',
          ml: 1
        }}
      >
        {children}
      </Text>
      {(author || title) && (
        <Box>
          {author && (
            <Text fontWeight="600" color="gray.700">
              {author}
            </Text>
          )}
          {title && (
            <Text fontSize="sm" color="gray.500">
              {title}
            </Text>
          )}
        </Box>
      )}
    </Box>
  )
}

// Export all typography components
export {
  PremiumHeading as Heading,
  PremiumText as Text,
  PremiumBadge as Badge,
  PremiumQuote as Quote
}