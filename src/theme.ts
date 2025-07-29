// 🕉️ PREMIUM LUXURY SPIRITUAL THEME 2025
// Inspired by Headspace, Calm, MasterClass premium design standards
// Advanced glassmorphism, sophisticated animations, luxury typography

import { extendTheme } from '@chakra-ui/react'
import { siteConfig } from './siteConfig'

const premiumTheme = extendTheme({
  // PREMIUM COLOR SYSTEM - Sophisticated luxury palette
  colors: {
    primary: {
      50: '#fff8f1',
      100: '#feede2', 
      200: '#fcd9c4',
      300: '#fab896',
      400: '#f68d66',
      500: siteConfig.colors.primary,    // #FF9933 - Deep Saffron
      600: '#e17017',
      700: '#b55a0f',
      800: '#924611',
      900: '#763912',
    },
    secondary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc', 
      400: '#38bdf8',
      500: siteConfig.colors.secondary,  // #1E90FF - Serene Blue
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e',
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
    },
    // SOPHISTICATED GRAYS for premium feel
    gray: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    }
  },

  // PREMIUM TYPOGRAPHY SYSTEM
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    accent: "'Playfair Display', serif", // For spiritual quotes
  },

  fontSizes: {
    'display': { base: '48px', md: '64px', lg: '72px' },  // Hero statements
    'hero': { base: '32px', md: '40px', lg: '48px' },     // Main headlines  
    'title': { base: '24px', md: '28px', lg: '32px' },    // Section titles
    'subtitle': { base: '18px', md: '20px', lg: '24px' }, // Subheadings
    'body': '16px',     // Body text
    'caption': '14px'   // Metadata
  },

  // PREMIUM SEMANTIC TOKENS
  semanticTokens: {
    colors: {
      'kd.primary': { default: 'primary.500', _dark: 'primary.400' },
      'kd.secondary': { default: 'secondary.500', _dark: 'secondary.400' },
      'kd.tertiary': { default: 'tertiary.500', _dark: 'tertiary.400' },
      'kd.text': { default: 'gray.800', _dark: 'white' },
      'kd.textSecondary': { default: 'gray.600', _dark: 'gray.300' },
      'kd.textMuted': { default: 'gray.500', _dark: 'gray.400' },
      'kd.textInverted': { default: 'white', _dark: 'gray.900' },
      'kd.heading': { default: 'gray.900', _dark: 'white' },
      'kd.surface': { default: 'white', _dark: 'gray.800' },
      'kd.surfaceSecondary': { default: 'gray.50', _dark: 'gray.700' },
      'kd.border': { default: 'gray.200', _dark: 'gray.600' },
      'kd.borderSubtle': { default: 'gray.100', _dark: 'gray.700' },
      'kd.accent': { default: 'primary.500', _dark: 'primary.400' },
      'kd.success': { default: 'green.500', _dark: 'green.400' },
      'kd.warning': { default: 'yellow.500', _dark: 'yellow.400' },
      'kd.error': { default: 'red.500', _dark: 'red.400' },
      'kd.info': { default: 'blue.500', _dark: 'blue.400' },
    }
  },

  // PREMIUM COMPONENT SYSTEM
  components: {
    Button: {
      variants: {
        // PREMIUM LUXURY BUTTON
        premium: {
          bg: 'linear-gradient(45deg, #FF9933 0%, #FFB366 100%)',
          color: 'white',
          fontWeight: '600',
          borderRadius: '12px',
          letterSpacing: '0.025em',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            transition: 'left 0.5s',
          },
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 12px 40px rgba(255, 153, 51, 0.4)',
            _before: {
              left: '100%'
            }
          },
          _active: {
            transform: 'translateY(0px)',
          }
        },
        // GLASSMORPHISM BUTTON
        glass: {
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          borderRadius: '12px',
          color: 'gray.800',
          fontWeight: '600',
          _hover: {
            background: 'rgba(255, 255, 255, 0.35)',
            transform: 'translateY(-2px)',
          }
        }
      },
      sizes: {
        luxury: {
          h: { base: '48px', md: '56px' },
          px: { base: '24px', md: '32px' },
          fontSize: '16px'
        }
      },
      defaultProps: {
        size: { base: 'md', md: 'md' }
      },
      baseStyle: {
        borderRadius: '8px',
        fontWeight: 'semibold',
        minH: { base: '44px', md: '48px' }, // Touch-friendly
        transition: 'all 0.2s ease',
      },
    },
    
    Card: {
      variants: {
        // PREMIUM GLASS CARD
        glass: {
          container: {
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _hover: {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
              background: 'rgba(255, 255, 255, 0.9)'
            }
          }
        },
        // ELEVATED LUXURY CARD
        elevated: {
          container: {
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            _hover: {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)'
            }
          }
        }
      },
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'xl',
          overflow: 'hidden',
        },
      },
    },

    Heading: {
      baseStyle: {
        color: 'kd.heading',
        lineHeight: 'shorter',
        letterSpacing: 'tight',
        fontWeight: '700',
      },
    },

    Text: {
      baseStyle: {
        color: 'kd.text',
        lineHeight: 'relaxed',
      },
    },

    Container: {
      baseStyle: {
        px: { base: 4, md: 6, lg: 8 }
      }
    }
  },

  // PREMIUM SPACING SYSTEM
  space: {
    '0.5': '2px',
    '1.5': '6px',
    '2.5': '10px',
    '3.5': '14px',
    '4.5': '18px',
    '5.5': '22px',
    '6.5': '26px',
    '7.5': '30px',
    '8.5': '34px',
    '9.5': '38px',
  },

  // PREMIUM GLOBAL STYLES
  styles: {
    global: {
      // SMOOTH PREMIUM FOCUS
      '*:focus': {
        boxShadow: '0 0 0 3px rgba(255, 153, 51, 0.6) !important',
        outline: 'none',
      },
      // PREMIUM SCROLL BEHAVIOR
      html: {
        scrollBehavior: 'smooth',
        fontSize: '16px',
      },
      body: {
        bg: 'gray.50',
        color: 'gray.800',
        fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      // PREMIUM SELECTION
      '::selection': {
        bg: 'primary.100',
        color: 'primary.900',
      },
    },
  },

  // CUSTOM CSS ANIMATIONS
  keyframes: {
    shimmer: {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' }
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-20px)' }
    },
    glow: {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 }
    }
  }
})

export default premiumTheme