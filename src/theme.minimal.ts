// 🕉️ MINIMAL SOPHISTICATED THEME
// TRUE sophistication = Direct color usage with Chakra UI defaults
// FROM: 50+ semantic tokens (overkill)
// TO: Just 3 main colors + Chakra UI's built-in semantic system

import { extendTheme } from '@chakra-ui/react'
import { siteConfig } from './siteConfig'

// DIRECT COLOR USAGE - No semantic token abstraction needed
// Chakra UI already provides excellent semantic system
const theme = extendTheme({
  colors: {
    // Just add our 3 brand colors to Chakra's existing palette
    primary: {
      50: '#fff7ed',
      100: '#ffedd5', 
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: siteConfig.colors.primary,    // #FF9933 - Deep Saffron
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    secondary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: siteConfig.colors.secondary,  // #1E90FF - Serene Blue
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    tertiary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: siteConfig.colors.tertiary,   // #F2DB49 - Sacred Gold
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    }
  },
  
  // MOBILE-FIRST COMPONENT DEFAULTS
  components: {
    Button: {
      defaultProps: {
        size: { base: 'md', md: 'md' }  // Touch-friendly
      },
      sizes: {
        md: {
          minH: { base: '44px', md: '48px' }, // Touch-friendly
          px: { base: 4, md: 6 },
        },
        lg: {
          minH: { base: '48px', md: '56px' },
          px: { base: 6, md: 8 },
        }
      }
    },
    Container: {
      baseStyle: {
        px: { base: 4, md: 6, lg: 8 }  // Mobile-first padding
      }
    }
  },
  
  // ACCESSIBILITY DEFAULTS
  styles: {
    global: {
      '*:focus': {
        outline: '2px solid',
        outlineColor: 'primary.500',
        outlineOffset: '2px'
      }
    }
  }
})

export default theme