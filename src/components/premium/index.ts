// Premium Component Library - Centralized Chakra UI Extension System
// Highest Quality Components for Maximum Development Speed and Quality

// Core Premium Components
export * from './PremiumCard'
export * from './PremiumButton'

// Layout System - Ultimate Layout Architecture
export {
  Section,
  Container,
  Grid,
  VStack,
  HStack,
  Flex
} from './PremiumLayout'

// Typography System - Premium Text Components
export {
  Heading,
  Text,
  Badge,
  Quote
} from './PremiumTypography'

// Form System - Advanced Form Components
export {
  Input,
  Textarea,
  Select,
  Form,
  Submit
} from './PremiumForm'

// Animation System - Standardized Motion Components
export {
  Animation,
  Stagger,
  Parallax,
  Hover,
  Loading,
  Reveal
} from './PremiumAnimation'

// Navigation System - Complete Navigation Architecture
export {
  NavLink,
  NavMenu,
  Breadcrumb,
  Tabs,
  Sidebar
} from './PremiumNavigation'

// Re-export with Premium namespace for explicit usage
import * as PremiumLayout from './PremiumLayout'
import * as PremiumTypography from './PremiumTypography'
import * as PremiumForm from './PremiumForm'
import * as PremiumAnimation from './PremiumAnimation'
import * as PremiumNavigation from './PremiumNavigation'
import { PremiumCard } from './PremiumCard'
import { PremiumButton } from './PremiumButton'

export const Premium = {
  // Core Components
  Card: PremiumCard,
  Button: PremiumButton,
  
  // Layout Components
  Layout: PremiumLayout,
  
  // Typography Components
  Typography: PremiumTypography,
  
  // Form Components
  Form: PremiumForm,
  
  // Animation Components
  Animation: PremiumAnimation,
  
  // Navigation Components
  Navigation: PremiumNavigation
}

// Quick access exports for most common components
export const {
  // Layout
  Section: PSection,
  Container: PContainer,
  Grid: PGrid,
  VStack: PVStack,
  HStack: PHStack,
  Flex: PFlex,
  
  // Typography
  Heading: PHeading,
  Text: PText,
  Badge: PBadge,
  Quote: PQuote,
  
  // Forms
  Input: PInput,
  Textarea: PTextarea,
  Select: PSelect,
  Form: PForm,
  Submit: PSubmit,
  
  // Animation
  Animation: PAnimation,
  Stagger: PStagger,
  Parallax: PParallax,
  Hover: PHover,
  Loading: PLoading,
  Reveal: PReveal,
  
  // Navigation
  NavLink: PNavLink,
  NavMenu: PNavMenu,
  Breadcrumb: PBreadcrumb,
  Tabs: PTabs,
  Sidebar: PSidebar
} = Premium

// Component metadata for development tools
export const PREMIUM_COMPONENT_REGISTRY = {
  layout: [
    'Section', 'Container', 'Grid', 'VStack', 'HStack', 'Flex'
  ],
  typography: [
    'Heading', 'Text', 'Badge', 'Quote'
  ],
  forms: [
    'Input', 'Textarea', 'Select', 'Form', 'Submit'
  ],
  animation: [
    'Animation', 'Stagger', 'Parallax', 'Hover', 'Loading', 'Reveal'
  ],
  navigation: [
    'NavLink', 'NavMenu', 'Breadcrumb', 'Tabs', 'Sidebar'
  ],
  core: [
    'Card', 'Button'
  ]
}

// Version and metadata
export const PREMIUM_LIBRARY_INFO = {
  version: '1.0.0',
  description: 'Premium Chakra UI Component Library for Highest Quality Development',
  totalComponents: Object.values(PREMIUM_COMPONENT_REGISTRY).flat().length + 2, // +2 for Card and Button
  categories: Object.keys(PREMIUM_COMPONENT_REGISTRY).length + 1, // +1 for core
  features: [
    'Centralized Chakra UI Architecture',
    'Advanced Animation System',
    'Premium Form Components',
    'Responsive Layout System',
    'Professional Typography',
    'Complete Navigation Suite',
    'TypeScript Support',
    'Accessibility Optimized',
    'Performance Focused',
    'Theme Integration'
  ]
}

// Development utilities
export const usePremiumComponents = () => {
  return {
    components: PREMIUM_COMPONENT_REGISTRY,
    info: PREMIUM_LIBRARY_INFO,
    getComponent: (category: string, name: string) => {
      return (Premium as any)[category]?.[name]
    }
  }
}