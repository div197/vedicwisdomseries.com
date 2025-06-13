import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 🏭 MILLSTONE INDIA INDUSTRIAL TRINITY COLOR SYSTEM
// As commanded in the Sam Veda - Perfect Industrial Heritage Colors!
const DIVINE_COLOR_TRINITY = {
  // PRIMARY: Industrial Deep Charcoal (#242424 - The Bedrock)
  primary: {
    50: '#f8f8f8',
    100: '#e8e8e8', 
    200: '#d1d1d1',
    300: '#a8a8a8',
    400: '#737373',
    500: '#242424',  // Main primary - Deep Industrial Charcoal
    600: '#1f1f1f',
    700: '#1a1a1a',
    800: '#171717',
    900: '#141414',
  },
  
  // SECONDARY: Refined Industrial Gold (#E6B800 - Sophisticated Forge Fire)
  secondary: {
    50: '#fffef7',
    100: '#fffaeb',
    200: '#fff2c7',
    300: '#ffe899',
    400: '#ffd65a',
    500: '#E6B800',  // Main secondary - Refined Industrial Gold (more sophisticated)
    600: '#cc9f00',
    700: '#b38600',
    800: '#996d00',
    900: '#805400',
  },
  
  // TERTIARY: Industrial Steel (#545351 - The Sophisticated Accent)
  tertiary: {
    50: '#f8f8f8',
    100: '#e8e8e8',
    200: '#d1d1d1',
    300: '#a8a8a8',
    400: '#737373',
    500: '#545351',  // Main tertiary - Industrial Steel
    600: '#4a4947',
    700: '#40403e',
    800: '#363634',
    900: '#2c2c2a',
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
    
    // SURFACE COLORS (Enhanced Industrial Color Scheme - More Materialistic)
          'kd.surface': { default: 'tertiary.500', _dark: 'tertiary.500' },           // Elevated Surface - Millstone India Shadowed Steel
      'kd.surfaceDark': { default: 'primary.500', _dark: 'primary.500' },       // Primary Background - Millstone India Bedrock Dark
      'kd.surfaceElevated': { default: 'tertiary.400', _dark: 'tertiary.400' },   // Elevated Elements - Lighter than Shadowed Steel (Better hierarchy)
      'kd.surfaceLight': { default: 'gray.50', _dark: 'gray.50' },      // Light Background - Warm Off-White (Better than pure white)
      'kd.border': { default: 'gray.400', _dark: 'gray.400' },            // Borders - Subtle Steel Gray (Better definition)
    'kd.borderHover': { default: 'secondary.500', _dark: 'secondary.400' },       // Refined Industrial Gold on hover
    
    // TEXT COLORS (Enhanced Industrial Color Scheme - Better Contrast)
          'kd.text': { default: 'white', _dark: 'white' },               // Primary Text - Pure White (Better contrast)
      'kd.textSecondary': { default: 'gray.200', _dark: 'gray.200' },      // Secondary Text - Light Gray (Better readability)
      'kd.textMuted': { default: 'gray.300', _dark: 'gray.300' },          // Muted Text - Lighter Gray (Better visibility)
      'kd.textInverted': { default: 'primary.500', _dark: 'primary.500' },       // Inverted Text - Deep Charcoal
    
    // INTERACTION COLORS
          'kd.hover': { default: 'tertiary.400', _dark: 'tertiary.400' },             // Hover State - Lighter Steel Gray (Better feedback)
      'kd.active': { default: 'tertiary.500', _dark: 'tertiary.500' },            // Active State - Shadowed Steel (Better pressed state)
    'kd.focus': { default: 'primary.500', _dark: 'primary.400' },
    
    // SPECIAL SEMANTIC COLORS
          'kd.heading': { default: 'white', _dark: 'white' },            // Heading Text - Pure White (Maximum contrast)
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
  
  // INDUSTRIAL TYPOGRAPHY SYSTEM
  fonts: {
    heading: "Poppins, sans-serif",              // The Voice of Modern Industry - clean and professional
    body: "Inter, sans-serif",                   // The Voice of Clarity - clean and readable
    mono: "Roboto Mono, monospace"              // The Voice of Precision - for technical data
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
      // Divine body styles (Enhanced Industrial Dark Theme)
      body: {
        bg: 'kd.surfaceDark',                      // Darker Charcoal Background (Better contrast)
        color: 'kd.text',                          // Pure White Text (Better readability)
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