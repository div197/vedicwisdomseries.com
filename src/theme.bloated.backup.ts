import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 🕉️ VEDIC WISDOM SERIES SPIRITUAL TRINITY COLOR SYSTEM
// Ancient Sound, Modern Awakening - Divine Color Harmony!
const DIVINE_COLOR_TRINITY = {
  // PRIMARY: Deep Saffron (#FF9933 - Knowledge & Wisdom)
  primary: {
    50: '#fff7ed',
    100: '#ffedd5', 
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#FF9933',  // Main primary - Deep Saffron
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  // SECONDARY: Serene Blue (#1E90FF - Divine Action & Flow)
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#1E90FF',  // Main secondary - Serene Blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  
  // TERTIARY: Sacred Gold (#F2DB49 - Spiritual Illumination)
  tertiary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#F2DB49',  // Main tertiary - Sacred Gold
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  }
}

// 📱 DIVINE MOBILE-FIRST BREAKPOINTS
const DIVINE_BREAKPOINTS = {
  base: '0px',      // Mobile first (Divine Order)
  sm: '480px',      // Small tablets
  md: '768px',      // Tablets
  lg: '992px',      // Laptops
  xl: '1280px',     // Desktops
  '2xl': '1536px'   // Large screens
}

// 📐 SACRED SPACING SYSTEM (4px Grid)
const DIVINE_SPACING = {
  0: '0',
  1: '0.25rem',    // 4px
  2: '0.5rem',     // 8px
  3: '0.75rem',    // 12px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  8: '2rem',       // 32px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  32: '8rem',      // 128px
  40: '10rem',     // 160px
  48: '12rem',     // 192px
  56: '14rem',     // 224px
  64: '16rem'      // 256px
}

// 🔤 DIVINE TYPOGRAPHY SCALE (Golden Ratio)
const DIVINE_FONT_SIZES = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  md: '1rem',        // 16px (base)
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem'      // 128px
}

// 🌈 DIVINE SEMANTIC TOKENS - The Only Colors AI Agents Should Use
const DIVINE_SEMANTIC_TOKENS = {
  colors: {
    // TRINITY COLORS (Main semantic tokens)
    'kd.primary': { default: 'primary.500', _dark: 'primary.400' },
    'kd.primaryLight': { default: 'primary.100', _dark: 'primary.200' },
    'kd.primaryDark': { default: 'primary.700', _dark: 'primary.600' },
    'kd.primaryContrast': { default: 'white', _dark: 'gray.900' },
    
    'kd.secondary': { default: 'secondary.500', _dark: 'secondary.400' },
    'kd.secondaryLight': { default: 'secondary.100', _dark: 'secondary.200' },
    'kd.secondaryDark': { default: 'secondary.700', _dark: 'secondary.600' },
    'kd.secondaryContrast': { default: 'white', _dark: 'gray.900' },
    
    'kd.tertiary': { default: 'tertiary.500', _dark: 'tertiary.400' },
    'kd.tertiaryLight': { default: 'tertiary.100', _dark: 'tertiary.200' },
    'kd.tertiaryDark': { default: 'tertiary.700', _dark: 'tertiary.600' },
    'kd.tertiaryContrast': { default: 'gray.900', _dark: 'white' },
    
    // SOFT & DARK VARIANTS (to replace former numeric palette references)
    'kd.primarySoft': { default: 'primary.200', _dark: 'primary.300' },
    'kd.secondarySoft': { default: 'secondary.200', _dark: 'secondary.300' },
    'kd.tertiarySoft': { default: 'tertiary.200', _dark: 'tertiary.300' },
    'kd.successDark': { default: 'green.600', _dark: 'green.500' },
    
    // SURFACE COLORS (Spiritual Enlightenment Theme)
    'kd.surface': { default: 'white', _dark: 'gray.800' },           // Clean surfaces
    'kd.surfaceDark': { default: 'gray.900', _dark: 'gray.900' },   // Dark surfaces
    'kd.surfaceElevated': { default: 'gray.50', _dark: 'gray.700' }, // Elevated elements
    'kd.surfaceLight': { default: '#fef6e4', _dark: 'gray.800' },   // Warm spiritual cream
    'kd.border': { default: 'gray.200', _dark: 'gray.600' },         // Subtle borders
    'kd.borderHover': { default: 'primary.400', _dark: 'primary.500' }, // Saffron on hover
    
    // TEXT COLORS (Spiritual Clarity)
    'kd.text': { default: 'gray.800', _dark: 'white' },              // Primary text
    'kd.textSecondary': { default: 'gray.600', _dark: 'gray.300' },  // Secondary text
    'kd.textMuted': { default: 'gray.500', _dark: 'gray.400' },      // Muted text
    'kd.textInverted': { default: 'white', _dark: 'gray.800' },      // Inverted text
    
    // INTERACTION COLORS
    'kd.hover': { default: 'gray.50', _dark: 'gray.700' },           // Hover state
    'kd.active': { default: 'gray.100', _dark: 'gray.600' },         // Active state
    'kd.focus': { default: 'primary.500', _dark: 'primary.400' },
    
    // SPECIAL SEMANTIC COLORS
    'kd.heading': { default: 'gray.900', _dark: 'white' },           // Heading text
    'kd.accent': { default: 'secondary.500', _dark: 'secondary.400' },
    'kd.success': { default: 'green.500', _dark: 'green.400' },
    'kd.warning': { default: 'yellow.500', _dark: 'yellow.400' },
    'kd.error': { default: 'red.500', _dark: 'red.400' },
    
    // BRAND SOCIAL COLORS
          'kd.facebook': { default: 'blue.500', _dark: 'blue.500' },
      'kd.instagram': { default: 'pink.500', _dark: 'pink.500' },
      'kd.whatsapp': { default: 'green.500', _dark: 'green.500' }
  }
}

// 📱 DIVINE MOBILE-FIRST COMPONENT STYLES
const DIVINE_COMPONENT_STYLES = {
  Button: {
    baseStyle: {
      fontWeight: 'semibold',
      borderRadius: { base: 'md', md: 'lg' },
      transition: 'all 0.2s ease',
      _focus: {
        outline: '2px solid',
        outlineColor: 'kd.focus',
        outlineOffset: '2px'
      }
    },
    sizes: {
      sm: {
        minH: '36px',
        px: 3,
        fontSize: 'sm'
      },
      md: {
        minH: { base: '44px', md: '48px' },  // Touch-friendly
        px: { base: 4, md: 6 },
        fontSize: { base: 'sm', md: 'md' }
      },
      lg: {
        minH: { base: '48px', md: '56px' },  // Touch-friendly
        px: { base: 6, md: 8 },
        fontSize: { base: 'md', md: 'lg' }
      }
    },
    variants: {
      solid: {
        bg: 'kd.primary',
        color: 'kd.primaryContrast',
        _hover: { bg: 'kd.primaryDark' },
        _active: { bg: 'kd.primaryDark', transform: 'scale(0.98)' }
      },
      outline: {
        border: '2px solid',
        borderColor: 'kd.primary',
        color: 'kd.primary',
        _hover: { bg: 'kd.primaryLight' }
      }
    }
  },
  
  Input: {
    baseStyle: {
      field: {
        minH: { base: '44px', md: '48px' },  // Touch-friendly
        fontSize: { base: 'sm', md: 'md' },
        borderColor: 'kd.border',
        _hover: { borderColor: 'kd.borderHover' },
        _focus: {
          borderColor: 'kd.primary',
          boxShadow: '0 0 0 1px var(--chakra-colors-kd-primary)'
        }
      }
    }
  },
  
  Card: {
    baseStyle: {
        container: {
        bg: 'kd.surface',
        borderColor: 'kd.border',
        borderRadius: { base: 'md', md: 'lg' },
        p: { base: 4, md: 6 },
        shadow: { base: 'sm', md: 'md' },
          _hover: {
          transform: 'translateY(-2px)',
          shadow: 'lg',
          borderColor: 'kd.borderHover'
        },
        transition: 'all 0.2s ease'
      }
    }
  }
}

// 🎨 DIVINE THEME CONFIGURATION
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  disableTransitionOnChange: false
}

// 🕉️ DIVINE THEME OBJECT - Perfect Mobile-First Framework
const divineTheme = extendTheme({
  config,
  
  // DIVINE BREAKPOINTS (Mobile-First)
  breakpoints: DIVINE_BREAKPOINTS,
  
  // DIVINE SPACING (4px Grid)
  space: DIVINE_SPACING,
  
  // DIVINE TYPOGRAPHY (Golden Ratio)
  fontSizes: DIVINE_FONT_SIZES,
  
  // SPIRITUAL TYPOGRAPHY SYSTEM
  fonts: {
    heading: "Poppins, sans-serif",              // Sacred heading font for spiritual clarity
    body: "Inter, sans-serif",                   // Clear reading font for wisdom transmission
    mono: "Roboto Mono, monospace"              // Precise font for mantras and sacred texts
  },
  
  // DIVINE COLORS (Trinity System)
  colors: {
    primary: DIVINE_COLOR_TRINITY.primary,
    secondary: DIVINE_COLOR_TRINITY.secondary,
    tertiary: DIVINE_COLOR_TRINITY.tertiary,
  },
  
  // DIVINE SEMANTIC TOKENS (AI Agent Friendly)
  semanticTokens: DIVINE_SEMANTIC_TOKENS,
  
  // DIVINE COMPONENT STYLES (Mobile-First)
  components: DIVINE_COMPONENT_STYLES,
  
  // DIVINE GLOBAL STYLES
  styles: {
    global: () => ({
      // Divine body styles (Spiritual Light Theme)
      body: {
        bg: 'kd.surfaceLight',                     // Warm spiritual cream background
        color: 'kd.text',                          // Clear readable text
        fontSize: { base: 'sm', md: 'md' },
        lineHeight: 'tall',
        fontFamily: 'body'                         // Inter font
      },
      
      // Divine heading styles
      'h1, h2, h3, h4, h5, h6': {
        color: 'kd.heading',
        fontWeight: 'bold',
        lineHeight: 'shorter'
      },
      
      // Divine link styles
      a: {
        color: 'kd.primary',
        _hover: { color: 'kd.primaryDark', textDecoration: 'underline' }
      },
      
      // Divine focus styles (accessibility)
      '*:focus': {
        outline: '2px solid',
        outlineColor: 'kd.focus',
        outlineOffset: '2px'
      }
    })
  }
})

// 📱 DIVINE MOBILE OPTIMIZATION UTILITIES
export const DIVINE_MOBILE_UTILS = {
  // Touch-friendly minimum sizes
  touchTarget: { minH: '44px', minW: '44px' },
  
  // Responsive text scaling
  responsiveText: (base: string, md?: string, lg?: string) => ({
    fontSize: { base, md: md || base, lg: lg || md || base }
  }),
  
  // Responsive spacing
  responsiveSpacing: (base: number, md?: number, lg?: number) => ({
    base, md: md || base, lg: lg || md || base
  }),
  
  // Mobile-first container
  mobileContainer: {
    maxW: { base: '100%', sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
    px: { base: 4, md: 6, lg: 8 },
    mx: 'auto'
  }
}

// 🎯 EXPORT DIVINE THEME
export default divineTheme

// 🕉️ EXPORT UTILITIES FOR AI AGENTS
export {
  DIVINE_COLOR_TRINITY,
  DIVINE_SEMANTIC_TOKENS,
  DIVINE_BREAKPOINTS,
  DIVINE_SPACING,
  DIVINE_FONT_SIZES,
  DIVINE_COMPONENT_STYLES
} 