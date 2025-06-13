# ⚡ YAJUR VEDA - DIVINE COMPONENT RITUALS ⚡

**JAI SHREE KRISHNA! PROCEDURAL WISDOM FOR AI AGENTS**  
**Sacred Text:** Yajur Veda of Karpatri Dham Framework  
**Purpose:** Component Creation Rituals & Sacred Procedures  
**Essence:** Perfect Action through Divine Procedures  

---

## ⚡ **SACRED INVOCATION**

*"यजुर्वेदो ऽस्मि यज्ञानां जप्यो ऽस्मि मन्त्राणाम्"*  
*"Among the Vedas I am the Yajur Veda, among chants I am the sacred Japa"*

O Divine AI Agent! As the Yajur Veda provides the precise procedures for sacred rituals, so must you follow these exact patterns to create divine components. Every component is a sacred offering to the digital universe.

---

## 🔧 **DIVINE COMPONENT CREATION RITUALS**

### **Sacred Component Template (Universal Pattern)**
```typescript
// DIVINE COMPONENT RITUAL - Follow this EXACT pattern
import React from 'react'
import { 
  Box, 
  useTheme,
  useColorModeValue,
  ResponsiveValue 
} from '@chakra-ui/react'
import { siteConfig } from '../siteConfig'

// 1. DIVINE INTERFACE (Always define props interface)
interface DivineComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  isResponsive?: boolean
  children?: React.ReactNode
  // Never hardcode - always configurable
}

// 2. DIVINE COMPONENT (Follow this structure)
const DivineComponent: React.FC<DivineComponentProps> = ({
  variant = 'primary',
  size = 'md', 
  isResponsive = true,
  children,
  ...props
}) => {
  // 3. DIVINE THEME ACCESS (Get colors from theme)
  const theme = useTheme()
  
  // 4. DIVINE COLOR MAPPING (Use semantic tokens only)
  const colorMap = {
    primary: 'kd.primary',
    secondary: 'kd.secondary', 
    tertiary: 'kd.tertiary'
  }
  
  // 5. DIVINE SIZE MAPPING (Responsive by default)
  const sizeMap = {
    sm: { 
      p: { base: 2, md: 3 },
      fontSize: { base: 'sm', md: 'md' }
    },
    md: { 
      p: { base: 3, md: 4 },
      fontSize: { base: 'md', md: 'lg' }
    },
    lg: { 
      p: { base: 4, md: 6 },
      fontSize: { base: 'lg', md: 'xl' }
    }
  }
  
  // 6. DIVINE RETURN (Perfect JSX structure)
  return (
    <Box
      bg={colorMap[variant]}
      {...sizeMap[size]}
      borderRadius={{ base: 'md', md: 'lg' }}
      transition="all 0.2s ease"
      _hover={{
        transform: 'translateY(-2px)',
        shadow: 'lg'
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

// 7. DIVINE EXPORT (Always default export)
export default DivineComponent
```

---

## 📱 **MOBILE-FIRST COMPONENT RITUALS**

### **Sacred Responsive Pattern (ALWAYS Follow)**
```typescript
// DIVINE RESPONSIVE RITUAL - Every component MUST be mobile-first
const ResponsiveDivineComponent = () => {
  return (
    <Box
      // STEP 1: Start with mobile (base)
      w={{ base: "100%", md: "50%", lg: "33.333%" }}
      p={{ base: 4, md: 6, lg: 8 }}
      fontSize={{ base: "sm", md: "md", lg: "lg" }}
      
      // STEP 2: Add tablet adjustments (md)
      borderRadius={{ base: "md", md: "lg" }}
      shadow={{ base: "sm", md: "md", lg: "lg" }}
      
      // STEP 3: Add desktop enhancements (lg+)
      _hover={{
        transform: { base: "none", md: "translateY(-2px)" },
        shadow: { base: "md", md: "xl" }
      }}
    >
      <Heading
        size={{ base: "md", md: "lg", lg: "xl" }}
        mb={{ base: 2, md: 3, lg: 4 }}
        color="kd.text"
      >
        Divine Responsive Heading
      </Heading>
      
      <Text
        fontSize={{ base: "sm", md: "md" }}
        color="kd.textMuted"
        lineHeight="tall"
      >
        Divine responsive content that adapts perfectly
      </Text>
    </Box>
  )
}
```

### **Touch-Friendly Interactive Elements**
```typescript
// DIVINE TOUCH RITUAL - All interactive elements MUST be touch-friendly
const TouchFriendlyButton = ({ children, ...props }) => (
  <Button
    // MINIMUM 44px touch target (Apple/Google standard)
    minH={{ base: "44px", md: "48px", lg: "56px" }}
    minW={{ base: "44px", md: "48px", lg: "56px" }}
    
    // Comfortable padding for fingers
    px={{ base: 4, md: 6, lg: 8 }}
    py={{ base: 2, md: 3, lg: 4 }}
    
    // Clear visual feedback
    _active={{ 
      transform: "scale(0.98)",
      bg: "kd.primaryDark" 
    }}
    _focus={{
      outline: "3px solid",
      outlineColor: "kd.primary",
      outlineOffset: "2px"
    }}
    
    // Smooth interactions
    transition="all 0.2s ease"
    {...props}
  >
    {children}
  </Button>
)

const TouchFriendlyIcon = ({ icon, ...props }) => (
  <IconButton
    icon={icon}
    // MINIMUM 44px for icon buttons
    size={{ base: "md", md: "lg" }}  // md = 40px, lg = 48px
    minH="44px"
    minW="44px"
    
    // Clear touch feedback
    _active={{ transform: "scale(0.95)" }}
    _hover={{ bg: "kd.primaryLight" }}
    
    {...props}
  />
)
```

---

## 🎨 **DIVINE STYLING RITUALS**

### **Sacred Color Application Ritual**
```typescript
// DIVINE COLOR RITUAL - NEVER use hardcoded colors
const DivineColorComponent = ({ variant = 'primary' }) => {
  // STEP 1: Define color mapping (semantic only)
  const colorSchemes = {
    primary: {
      bg: 'kd.primary',
      color: 'kd.textInverted',
      border: 'kd.primary',
      hover: 'kd.primaryDark'
    },
    secondary: {
      bg: 'kd.secondary',
      color: 'kd.textInverted', 
      border: 'kd.secondary',
      hover: 'kd.secondaryDark'
    },
    tertiary: {
      bg: 'kd.tertiary',
      color: 'kd.textInverted',
      border: 'kd.tertiary', 
      hover: 'kd.tertiaryDark'
    },
    outline: {
      bg: 'transparent',
      color: 'kd.primary',
      border: 'kd.primary',
      hover: 'kd.primary'
    },
    ghost: {
      bg: 'transparent',
      color: 'kd.text',
      border: 'transparent',
      hover: 'kd.hover'
    }
  }
  
  const scheme = colorSchemes[variant]
  
  return (
    <Box
      bg={scheme.bg}
      color={scheme.color}
      borderColor={scheme.border}
      _hover={{ bg: scheme.hover }}
      transition="all 0.3s ease"
    >
      Divine Content
    </Box>
  )
}
```

### **Sacred Spacing Application Ritual**
```typescript
// DIVINE SPACING RITUAL - 4px grid system always
const DivineSpacingComponent = ({ spacing = 'md' }) => {
  // STEP 1: Define spacing scales (4px grid)
  const spacingMap = {
    xs: { p: 1, m: 1, gap: 1 },      // 4px
    sm: { p: 2, m: 2, gap: 2 },      // 8px
    md: { p: 4, m: 4, gap: 4 },      // 16px
    lg: { p: 6, m: 6, gap: 6 },      // 24px
    xl: { p: 8, m: 8, gap: 8 }       // 32px
  }
  
  // STEP 2: Apply responsive spacing
  const space = spacingMap[spacing]
  
  return (
    <VStack
      spacing={{ base: space.gap, md: space.gap + 2 }}
      p={{ base: space.p, md: space.p + 2 }}
      m={{ base: space.m, md: space.m + 1 }}
    >
      <Text>Divine spaced content</Text>
    </VStack>
  )
}
```

---

## 🏗️ **DIVINE UNIVERSAL LAYOUT COMPONENTS**

### **Sacred PageWrapper Ritual**
```typescript
// DIVINE PAGE WRAPPER - Master container with automatic hero detection
interface PageWrapperProps extends BoxProps {
  children: ReactNode;
  hasHero?: boolean;
  useMinimalSpacing?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasHero = false,
  useMinimalSpacing = false,
  ...boxProps
}) => {
  const layout = useUniversalLayout();
  
  return (
    <Box
      minH="100vh"
      pt={hasHero ? layout.heroTopSpacing : layout.pageTopSpacing}
      data-component="page-wrapper"
      data-has-hero={hasHero}
      data-spacing={hasHero ? layout.heroTopSpacing : layout.pageTopSpacing}
      {...boxProps}
    >
      {children}
    </Box>
  );
};
```

### **Sacred HeroSectionWrapper Ritual**
```typescript
// DIVINE HERO SECTION WRAPPER - Transparent header overlap solution
interface HeroSectionWrapperProps extends BoxProps {
  children: ReactNode;
  containerMaxW?: string;
}

const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({
  children,
  containerMaxW = '7xl',
  ...boxProps
}) => {
  return (
    <Box
      position="relative"
      zIndex={1}
      data-component="hero-section-wrapper"
      {...boxProps}
    >
      <Container maxW={containerMaxW}>
        {children}
      </Container>
    </Box>
  );
};
```

### **Sacred SectionWrapper Ritual**
```typescript
// DIVINE SECTION WRAPPER - Consistent section spacing
interface SectionWrapperProps extends BoxProps {
  children: ReactNode;
  containerMaxW?: string;
  noPadding?: boolean;
  centerContent?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  containerMaxW = '7xl',
  noPadding = false,
  centerContent = false,
  ...boxProps
}) => {
  const layout = useUniversalLayout();
  
  return (
    <Box
      py={noPadding ? undefined : layout.sectionSpacing}
      px={noPadding ? undefined : layout.containerPadding}
      position="relative"
      data-component="section-wrapper"
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
```

### **Sacred ContentContainer Ritual**
```typescript
// DIVINE CONTENT CONTAINER - Responsive content management
interface ContentContainerProps extends BoxProps {
  children: ReactNode;
  maxW?: string;
  centerContent?: boolean;
  fullWidth?: boolean;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  maxW = '7xl',
  centerContent = false,
  fullWidth = false,
  ...boxProps
}) => {
  const layout = useUniversalLayout();

  if (fullWidth) {
    return (
      <Box
        px={layout.containerPadding}
        textAlign={centerContent ? 'center' : 'left'}
        data-component="content-container-full"
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
      data-component="content-container"
      {...boxProps}
    >
      {children}
    </Container>
  );
};
```

### **Sacred UniversalLayoutProvider Ritual**
```typescript
// DIVINE LAYOUT PROVIDER - Context-driven layout intelligence
interface LayoutContextType {
  isHeroPage: boolean;
  headerHeight: number;
  sectionSpacing: string | undefined;
  containerPadding: string | undefined;
  heroTopSpacing: string | undefined;
  pageTopSpacing: string | undefined;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

const UniversalLayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isHeroPage, headerHeight } = useHeroPageDetection();
  const { heroSpacing, pageSpacing, sectionSpacing, containerPadding } = useHeroPageSpacing();

  const value: LayoutContextType = {
    isHeroPage,
    headerHeight,
    sectionSpacing,
    containerPadding,
    heroTopSpacing: heroSpacing,
    pageTopSpacing: pageSpacing,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within UniversalLayoutProvider');
  }
  return context;
};
```

### **Sacred Layout Hooks Ritual**
```typescript
// DIVINE LAYOUT HOOKS - Enhanced with intelligence
const useHeroPageDetection = () => {
  const location = useLocation();
  const [isHeroPage, setIsHeroPage] = useState(false);
  
  useEffect(() => {
    const heroPages = ['/', '/about', '/contact', '/teachings', '/services'];
    setIsHeroPage(heroPages.includes(location.pathname));
  }, [location.pathname]);
  
  return { isHeroPage, headerHeight: 80 };
};

const useHeroPageSpacing = () => {
  const { isHeroPage, headerHeight } = useHeroPageDetection();
  
  return {
    heroSpacing: '0px',
    pageSpacing: `${headerHeight + 20}px`,
    sectionSpacing: useBreakpointValue({ base: '4rem', md: '5rem', lg: '6rem' }),
    containerPadding: useBreakpointValue({ base: '1rem', md: '2rem' })
  };
};

const useUniversalLayout = () => {
  const { isHeroPage, headerHeight } = useHeroPageDetection();
  const { heroSpacing, pageSpacing, sectionSpacing, containerPadding } = useHeroPageSpacing();
  
  return {
    isHeroPage,
    headerHeight,
    heroTopSpacing: heroSpacing,
    pageTopSpacing: pageSpacing,
    sectionSpacing,
    containerPadding
  };
};
```

### **Divine Layout Usage Pattern**
```tsx
// SACRED PATTERN FOR PERFECT SPACING
export default function DivinePage() {
  return (
    <PageWrapper hasHero={true}>
      <SEOHead title="Divine Page" description="Perfect spacing example" />
      
      <HeroSectionWrapper>
        <Box bgGradient="linear(to-br, kd.primary, kd.secondary, kd.tertiary)">
          <VStack spacing={8} textAlign="center" color="white" py={20}>
            <Icon as={FaOm} boxSize={16} />
            <Heading size="2xl">Divine Wisdom</Heading>
            <Text fontSize="xl">Automatically spaced below transparent header</Text>
          </VStack>
        </Box>
      </HeroSectionWrapper>
      
      <SectionWrapper>
        <ContentContainer>
          <VStack spacing={12}>
            <Heading>Sacred Content</Heading>
            <Text>Perfectly spaced content section</Text>
          </VStack>
        </ContentContainer>
      </SectionWrapper>
      
      <SectionWrapper centerContent>
        <Heading>Centered Section</Heading>
        <Text>This section is automatically centered</Text>
      </SectionWrapper>
    </PageWrapper>
  );
}
```

---

## 🎭 **DIVINE COMPONENT PATTERNS**

### **Sacred Card Component Ritual**
```typescript
// DIVINE CARD RITUAL - Perfect card component
const DivineCard = ({
  variant = 'elevated',
  size = 'md',
  isHoverable = true,
  children,
  ...props
}) => {
  // STEP 1: Define card variants
  const cardVariants = {
    elevated: {
      bg: 'kd.surface',
      borderRadius: 'xl',
      boxShadow: 'lg',
      border: 'none'
    },
    outlined: {
      bg: 'kd.surface',
      borderRadius: 'lg', 
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'kd.border'
    },
    filled: {
      bg: 'kd.primary',
      color: 'kd.textInverted',
      borderRadius: 'lg',
      boxShadow: 'md',
      border: 'none'
    }
  }
  
  // STEP 2: Define size variants
  const sizeVariants = {
    sm: { p: 4 },
    md: { p: 6 },
    lg: { p: 8 }
  }
  
  // STEP 3: Define hover states
  const hoverStates = isHoverable ? {
    _hover: {
      transform: 'translateY(-4px)',
      boxShadow: 'xl',
      transition: 'all 0.3s ease'
    }
  } : {}
  
  return (
    <Box
      {...cardVariants[variant]}
      {...sizeVariants[size]}
      {...hoverStates}
      {...props}
    >
      {children}
    </Box>
  )
}
```

### **Sacred Button Component Ritual**
```typescript
// DIVINE BUTTON RITUAL - Perfect button component
const DivineButton = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}) => {
  // STEP 1: Define button variants
  const buttonVariants = {
    primary: {
      bg: 'kd.primary',
      color: 'kd.textInverted',
      _hover: { bg: 'kd.primaryDark' },
      _active: { bg: 'kd.primaryDark', transform: 'scale(0.98)' }
    },
    secondary: {
      bg: 'kd.secondary',
      color: 'kd.textInverted',
      _hover: { bg: 'kd.secondaryDark' },
      _active: { bg: 'kd.secondaryDark', transform: 'scale(0.98)' }
    },
    outline: {
      bg: 'transparent',
      color: 'kd.primary',
      border: '2px solid',
      borderColor: 'kd.primary',
      _hover: { bg: 'kd.primary', color: 'kd.textInverted' },
      _active: { transform: 'scale(0.98)' }
    },
    ghost: {
      bg: 'transparent',
      color: 'kd.text',
      _hover: { bg: 'kd.hover' },
      _active: { bg: 'kd.active', transform: 'scale(0.98)' }
    }
  }
  
  // STEP 2: Define size variants
  const sizeVariants = {
    sm: {
      minH: '36px',
      px: 3,
      py: 2,
      fontSize: 'sm'
    },
    md: {
      minH: { base: '44px', md: '48px' },
      px: { base: 4, md: 6 },
      py: { base: 2, md: 3 },
      fontSize: { base: 'sm', md: 'md' }
    },
    lg: {
      minH: { base: '48px', md: '56px' },
      px: { base: 6, md: 8 },
      py: { base: 3, md: 4 },
      fontSize: { base: 'md', md: 'lg' }
    }
  }
  
  return (
    <Button
      {...buttonVariants[variant]}
      {...sizeVariants[size]}
      borderRadius={{ base: 'md', md: 'lg' }}
      transition="all 0.2s ease"
      isLoading={isLoading}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      _focus={{
        outline: '3px solid',
        outlineColor: 'kd.primary',
        outlineOffset: '2px'
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
```

### **Sacred Form Input Ritual**
```typescript
// DIVINE INPUT RITUAL - Perfect form input
const DivineInput = ({
  variant = 'outline',
  size = 'md',
  isInvalid = false,
  label,
  helperText,
  errorMessage,
  ...props
}) => {
  // STEP 1: Define input variants
  const inputVariants = {
    outline: {
      bg: 'kd.surface',
      border: '2px solid',
      borderColor: 'kd.border',
      _focus: {
        borderColor: 'kd.primary',
        boxShadow: '0 0 0 1px var(--chakra-colors-kd-primary)'
      }
    },
    filled: {
      bg: 'kd.hover',
      border: '2px solid transparent',
      _focus: {
        bg: 'kd.surface',
        borderColor: 'kd.primary'
      }
    },
    flushed: {
      bg: 'transparent',
      border: 'none',
      borderBottom: '2px solid',
      borderBottomColor: 'kd.border',
      borderRadius: 0,
      _focus: {
        borderBottomColor: 'kd.primary'
      }
    }
  }
  
  // STEP 2: Define size variants
  const sizeVariants = {
    sm: {
      h: '36px',
      px: 3,
      fontSize: 'sm'
    },
    md: {
      h: { base: '44px', md: '48px' },
      px: 4,
      fontSize: { base: 'sm', md: 'md' }
    },
    lg: {
      h: { base: '48px', md: '56px' },
      px: 5,
      fontSize: { base: 'md', md: 'lg' }
    }
  }
  
  return (
    <FormControl isInvalid={isInvalid}>
      {label && (
        <FormLabel
          fontSize={{ base: 'sm', md: 'md' }}
          color="kd.text"
          fontWeight="medium"
        >
          {label}
        </FormLabel>
      )}
      
      <Input
        {...inputVariants[variant]}
        {...sizeVariants[size]}
        borderRadius={{ base: 'md', md: 'lg' }}
        transition="all 0.2s ease"
        _invalid={{
          borderColor: 'error.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-error-500)'
        }}
        {...props}
      />
      
      {helperText && !isInvalid && (
        <FormHelperText
          fontSize="sm"
          color="kd.textMuted"
        >
          {helperText}
        </FormHelperText>
      )}
      
      {errorMessage && isInvalid && (
        <FormErrorMessage
          fontSize="sm"
          color="error.500"
        >
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}
```

---

## 🧩 **SACRED COMPONENT INVOCATION**
### **Complete Layout Assembly Guide for Junior AI Agents**

**PREAMBLE FOR JUNIOR AGENTS:** This section shows you exactly how to combine the 4 core layout components (`PageWrapper`, `HeroSectionWrapper`, `SectionWrapper`, `UniversalCTA`) to create a perfect spiritual website page. Copy these patterns exactly.

### **⚡ THE DIVINE QUARTET - 4 UNIVERSAL LAYOUT COMPONENTS**

```typescript
// THE 4 SACRED COMPONENTS THAT CREATE ANY PAGE
import PageWrapper from '../components/layout/PageWrapper'           // 🏛️ Page container & SEO
import HeroSectionWrapper from '../components/layout/HeroSectionWrapper' // 🌅 Hero section
import SectionWrapper from '../components/layout/SectionWrapper'         // 📦 Content sections  
import UniversalCTA from '../components/layout/UniversalCTA'             // 🎯 Call-to-action
```

### **⚡ COMPLETE PAGE ASSEMBLY RITUAL**

#### **✅ PERFECT PAGE STRUCTURE (COPY THIS PATTERN)**
```typescript
import React from 'react'
import { 
  VStack, 
  Heading, 
  Text, 
  SimpleGrid, 
  Card, 
  CardBody,
  Icon,
  Button,
  Image
} from '@chakra-ui/react'
import { FaOm, FaPrayingHands, FaHeart, FaPeace } from 'react-icons/fa'

// Import the 4 divine components
import PageWrapper from '../components/layout/PageWrapper'
import HeroSectionWrapper from '../components/layout/HeroSectionWrapper' 
import SectionWrapper from '../components/layout/SectionWrapper'
import UniversalCTA from '../components/layout/UniversalCTA'

// Import site configuration
import { siteConfig } from '../siteConfig'

const PerfectSpiritualPage = () => {
  return (
    <PageWrapper
      title="Your Page Title | Organization Name"           // SEO title
      description="Your page description for search engines" // SEO description
      keywords="spiritual, meditation, wisdom, peace"       // SEO keywords
      canonicalUrl="/your-page-url"                        // SEO canonical URL
    >
      {/* 🌅 HERO SECTION - Always first */}
      <HeroSectionWrapper
        title="Your Inspiring Headline"                     // Main hero title
        subtitle="Your supporting message that inspires action" // Hero subtitle
        backgroundImage="/assets/hero/your-hero-image.jpg"  // Hero background
        ctaText="Begin Your Journey"                        // CTA button text
        ctaLink="/your-cta-destination"                     // Where CTA leads
        gradient="linear-gradient(135deg, kd.primary, kd.secondary)" // Optional overlay
        height={{ base: "60vh", md: "70vh", lg: "80vh" }}  // Responsive height
        textAlign="center"                                  // Text alignment
      />

      {/* 📦 CONTENT SECTIONS - Your main content */}
      
      {/* Section 1: Introduction/Overview */}
      <SectionWrapper
        id="introduction"                                   // For anchor links
        maxWidth="6xl"                                     // Content width limit
        py={{ base: 12, md: 16, lg: 20 }}                 // Responsive padding
        bg="kd.surface"                                    // Background color
      >
        <VStack spacing={{ base: 6, md: 8, lg: 10 }} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading 
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="kd.heading"
              lineHeight="shorter"
            >
              Sacred Knowledge Awaits
            </Heading>
            <Text 
              fontSize={{ base: "lg", md: "xl" }}
              color="kd.textSecondary"
              maxW="3xl"
              lineHeight="tall"
            >
              Discover the timeless wisdom of our spiritual tradition through authentic 
              teachings, guided meditation, and community connection.
            </Text>
          </VStack>
          
          {/* Feature grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
            <Card bg="kd.surface" borderWidth="1px" borderColor="kd.border">
              <CardBody textAlign="center">
                <Icon 
                  as={FaOm} 
                  w={{ base: 12, md: 16 }} 
                  h={{ base: 12, md: 16 }}
                  color="kd.primary"
                  mb={4}
                />
                <Heading size="md" color="kd.heading" mb={3}>
                  Ancient Wisdom
                </Heading>
                <Text color="kd.textSecondary" fontSize="sm">
                  Connect with timeless spiritual teachings passed down through generations.
                </Text>
              </CardBody>
            </Card>
            
            <Card bg="kd.surface" borderWidth="1px" borderColor="kd.border">
              <CardBody textAlign="center">
                <Icon 
                  as={FaPrayingHands} 
                  w={{ base: 12, md: 16 }} 
                  h={{ base: 12, md: 16 }}
                  color="kd.secondary"
                  mb={4}
                />
                <Heading size="md" color="kd.heading" mb={3}>
                  Sacred Practice
                </Heading>
                <Text color="kd.textSecondary" fontSize="sm">
                  Learn authentic meditation and spiritual practices for inner transformation.
                </Text>
              </CardBody>
            </Card>
            
            <Card bg="kd.surface" borderWidth="1px" borderColor="kd.border">
              <CardBody textAlign="center">
                <Icon 
                  as={FaHeart} 
                  w={{ base: 12, md: 16 }} 
                  h={{ base: 12, md: 16 }}
                  color="kd.tertiary"
                  mb={4}
                />
                <Heading size="md" color="kd.heading" mb={3}>
                  Divine Community
                </Heading>
                <Text color="kd.textSecondary" fontSize="sm">
                  Join a supportive community of fellow seekers on the spiritual path.
                </Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* Section 2: About/Details */}
      <SectionWrapper
        maxWidth="5xl"
        py={{ base: 12, md: 16 }}
        bg="kd.canvas"                                     // Alternate background
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 12 }} alignItems="center">
          <VStack align="flex-start" spacing={6}>
            <Heading 
              size={{ base: "lg", md: "xl", lg: "2xl" }}
              color="kd.heading"
            >
              Your Spiritual Journey Begins Here
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              color="kd.text"
              lineHeight="tall"
            >
              Our tradition spans centuries of wisdom, offering practical guidance for 
              modern spiritual seekers. Whether you're beginning your journey or deepening 
              your practice, we provide the tools and community to support your growth.
            </Text>
            <VStack align="flex-start" spacing={3}>
              <Text color="kd.textSecondary" display="flex" alignItems="center">
                <Icon as={FaPeace} color="kd.primary" mr={3} />
                Authentic spiritual lineage and teachings
              </Text>
              <Text color="kd.textSecondary" display="flex" alignItems="center">
                <Icon as={FaPeace} color="kd.primary" mr={3} />
                Experienced teachers and spiritual guides
              </Text>
              <Text color="kd.textSecondary" display="flex" alignItems="center">
                <Icon as={FaPeace} color="kd.primary" mr={3} />
                Supportive community of practitioners
              </Text>
            </VStack>
            <Button
              bg="kd.primary"
              color="kd.primaryContrast"
              _hover={{ bg: "kd.primaryDark" }}
              size={{ base: "md", md: "lg" }}
              px={{ base: 6, md: 8 }}
            >
              Learn More About Our Tradition
            </Button>
          </VStack>
          
          <Image
            src="/assets/gallery/meditation-garden.jpg"
            alt="Peaceful meditation garden at our spiritual center"
            borderRadius="lg"
            shadow="lg"
            objectFit="cover"
            w="100%"
            h={{ base: "250px", md: "300px", lg: "400px" }}
          />
        </SimpleGrid>
      </SectionWrapper>

      {/* Section 3: Testimonials/Community */}
      <SectionWrapper
        maxWidth="6xl"
        py={{ base: 12, md: 16 }}
        bg="kd.surface"
      >
        <VStack spacing={{ base: 8, md: 12 }}>
          <VStack spacing={4} textAlign="center">
            <Heading 
              size={{ base: "lg", md: "xl", lg: "2xl" }}
              color="kd.heading"
            >
              Voices from Our Community
            </Heading>
            <Text 
              fontSize={{ base: "md", md: "lg" }}
              color="kd.textSecondary"
              maxW="2xl"
            >
              Hear from fellow practitioners who have found peace and transformation 
              through our spiritual teachings.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
            {/* Testimonial cards would go here */}
            <Card bg="kd.canvas" p={6}>
              <CardBody>
                <Text 
                  color="kd.text" 
                  fontSize="md" 
                  fontStyle="italic" 
                  mb={4}
                  lineHeight="tall"
                >
                  "The teachings here have transformed my understanding of life and brought 
                  me profound inner peace. I'm grateful for this authentic spiritual community."
                </Text>
                <Text color="kd.textSecondary" fontSize="sm" fontWeight="semibold">
                  — Sarah M., Practitioner for 3 years
                </Text>
              </CardBody>
            </Card>
            
            {/* Add more testimonial cards following the same pattern */}
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* 🎯 CALL-TO-ACTION - Always last */}
      <UniversalCTA
        title="Ready to Begin Your Spiritual Journey?"        // CTA headline
        description="Join our community and discover the peace and wisdom that comes from authentic spiritual practice." // CTA description
        primaryAction={{
          text: "Start Your Journey",                         // Primary button text
          href: "/contact",                                   // Primary button link
          variant: "primary"                                  // Button style
        }}
        secondaryAction={{
          text: "Learn More",                                 // Secondary button text  
          href: "/about",                                     // Secondary button link
          variant: "outline"                                  // Button style
        }}
        bg="kd.primary"                                       // Background color
        color="kd.primaryContrast"                           // Text color
        py={{ base: 16, md: 20 }}                           // Responsive padding
      />
    </PageWrapper>
  )
}

export default PerfectSpiritualPage
```

### **⚡ COMPONENT ASSEMBLY VARIATIONS**

#### **✅ SIMPLE PAGE (MINIMAL CONTENT)**
```typescript
// For simple pages like Contact or About
const SimplePage = () => (
  <PageWrapper title="Contact Us | Your Organization">
    <HeroSectionWrapper
      title="Contact Us"
      subtitle="We'd love to hear from you"
      height="50vh"
      backgroundImage="/assets/hero/contact-hero.jpg"
    />
    
    <SectionWrapper maxWidth="4xl" py={16}>
      {/* Your simple content here */}
      <VStack spacing={8}>
        <Heading size="xl" textAlign="center" color="kd.heading">
          Get in Touch
        </Heading>
        {/* Contact form or info */}
      </VStack>
    </SectionWrapper>
    
    <UniversalCTA
      title="Ready to Connect?"
      description="Reach out and we'll get back to you soon."
      primaryAction={{ text: "Send Message", href: "#contact-form" }}
    />
  </PageWrapper>
)
```

#### **✅ GALLERY PAGE (IMAGE-FOCUSED)**
```typescript
// For gallery or visual content pages
const GalleryPage = () => (
  <PageWrapper title="Sacred Gallery | Your Organization">
    <HeroSectionWrapper
      title="Sacred Imagery"
      subtitle="Glimpses of our spiritual community"
      height="60vh"
      backgroundImage="/assets/hero/gallery-hero.jpg"
    />
    
    <SectionWrapper maxWidth="7xl" py={16}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {/* Gallery grid items */}
      </SimpleGrid>
    </SectionWrapper>
    
    <UniversalCTA
      title="Visit Our Center"
      description="Experience the peace and beauty in person."
      primaryAction={{ text: "Plan Your Visit", href: "/contact" }}
    />
  </PageWrapper>
)
```

#### **✅ TEACHINGS/COURSES PAGE (CONTENT-HEAVY)**
```typescript
// For content-rich pages like teachings or courses
const TeachingsPage = () => (
  <PageWrapper title="Sacred Teachings | Your Organization">
    <HeroSectionWrapper
      title="Ancient Wisdom for Modern Times"
      subtitle="Discover timeless spiritual teachings"
      height="70vh"
      backgroundImage="/assets/hero/teachings-hero.jpg"
      ctaText="Explore Teachings"
      ctaLink="#teachings-list"
    />
    
    {/* Multiple content sections */}
    <SectionWrapper id="overview" maxWidth="5xl" py={16} bg="kd.surface">
      {/* Overview content */}
    </SectionWrapper>
    
    <SectionWrapper id="teachings-list" maxWidth="6xl" py={16} bg="kd.canvas">
      {/* Teachings grid/list */}
    </SectionWrapper>
    
    <SectionWrapper id="testimonials" maxWidth="5xl" py={16} bg="kd.surface">
      {/* Student testimonials */}
    </SectionWrapper>
    
    <UniversalCTA
      title="Begin Your Learning Journey"
      description="Join thousands who have transformed their lives through these teachings."
      primaryAction={{ text: "Enroll Now", href: "/contact" }}
      secondaryAction={{ text: "Learn More", href: "/about" }}
    />
  </PageWrapper>
)
```

---

### **🚨 CRITICAL ASSEMBLY RULES FOR JUNIOR AGENTS**

#### **MANDATORY PAGE STRUCTURE:**
1. ✅ **Always start with `PageWrapper`** - Contains SEO and page structure
2. ✅ **Always include `HeroSectionWrapper`** - First visual element users see
3. ✅ **Use `SectionWrapper` for all content** - Ensures consistent spacing and layout
4. ✅ **Always end with `UniversalCTA`** - Guides users to next action
5. ✅ **Alternate section backgrounds** - Use `kd.surface` and `kd.canvas` alternately

#### **COMPONENT PROPS CHECKLIST:**
- ✅ **PageWrapper:** title, description, keywords, canonicalUrl
- ✅ **HeroSectionWrapper:** title, subtitle, backgroundImage, height
- ✅ **SectionWrapper:** maxWidth, py (padding), bg (background), id (optional)
- ✅ **UniversalCTA:** title, description, primaryAction, secondaryAction (optional)

#### **RESPONSIVE DESIGN REQUIREMENTS:**
- ✅ **All spacing responsive:** Use `{{ base: X, md: Y, lg: Z }}` format
- ✅ **All typography responsive:** fontSize, size properties must be responsive
- ✅ **All layouts responsive:** columns, spacing, alignment must adapt
- ✅ **Touch-friendly interactions:** Minimum 44px touch targets
- ✅ **Semantic color tokens only:** Never use hardcoded colors

#### **ACCESSIBILITY REQUIREMENTS:**
- ✅ **Alt text on all images:** Descriptive alt attributes required
- ✅ **Focus states:** All interactive elements need focus styles
- ✅ **Color contrast:** Text must meet WCAG 2.1 AA standards
- ✅ **Semantic HTML:** Use proper heading hierarchy (h1, h2, h3)
- ✅ **Screen reader support:** Include sr-only text where helpful

---

**DIVINE GUARANTEE:** Following this exact component assembly pattern will create perfect, responsive, accessible spiritual website pages that work flawlessly across all devices and maintain consistency with the framework's design system.

**⚡ OM SHANTI SHANTI SHANTI 🙏**

## 🧩 **SACRED COMPONENT INVOCATION**
### **Complete Page Assembly Guide for Junior AI Agents**

**CRITICAL FOR JUNIOR AGENTS:** Creating a new page requires the correct invocation and assembly of the universal layout components. This ritual ensures every page has perfect spacing and structure automatically.

### **⚡ STANDARD PAGE ASSEMBLY RITUAL**

#### **✅ PERFECT NEW PAGE PATTERN**
```typescript
import React from 'react';
import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';
import { PageWrapper, HeroSectionWrapper, SectionWrapper, ContentContainer } from '../components/layout/PageWrapper';
import SEOHead from '../components/SEOHead';
import UniversalCTA from '../components/UniversalCTA';

// DIVINE PAGE STRUCTURE - Follow this EXACT pattern
export default function MyNewSpiritualPage() {
  return (
    // 1. ALWAYS wrap entire page in PageWrapper
    // Set 'hasHero' to true if using HeroSectionWrapper
    <PageWrapper hasHero={true}>
      
      // 2. ALWAYS add SEO metadata for search engines
      <SEOHead
        title="My New Spiritual Page | Karpatri Dham"
        description="A description of this sacred new page for search engines and social media."
      />
      
      // 3. HERO SECTION (Optional but recommended)
      // Use HeroSectionWrapper for the top-most content
      // This automatically handles spacing below the transparent header
      <HeroSectionWrapper>
        <VStack 
          h="40vh"                                    // ✅ Responsive height
          justifyContent="center"
          bgGradient="linear(to-br, kd.primary, kd.secondary)" // ✅ Semantic gradient
          px={{ base: 4, md: 8 }}                    // ✅ Responsive padding
        >
          <Heading 
            color="white"                             // ✅ High contrast on gradient
            size={{ base: "xl", md: "2xl" }}         // ✅ Responsive heading
            textAlign="center"
            mb={4}
          >
            The Hero Section
          </Heading>
          <Text 
            color="white"                             // ✅ Consistent text color
            fontSize={{ base: "lg", md: "xl" }}      // ✅ Responsive text
            textAlign="center"
            maxW="600px"                              // ✅ Optimal reading width
          >
            This content is perfectly positioned below the header automatically.
          </Text>
        </VStack>
      </HeroSectionWrapper>
      
      // 4. FIRST CONTENT SECTION
      // Use SectionWrapper for each content block
      // This provides consistent vertical spacing between sections
      <SectionWrapper>
        <ContentContainer>
          <Heading 
            size="lg" 
            color="kd.heading"                        // ✅ Semantic heading color
            mb={6}                                    // ✅ Consistent spacing
            textAlign="center"
          >
            First Content Section
          </Heading>
          <Text 
            color="kd.text"                           // ✅ Semantic text color
            fontSize={{ base: "md", md: "lg" }}      // ✅ Responsive typography
            lineHeight="tall"                         // ✅ Good readability
            textAlign="center"
            maxW="800px"                              // ✅ Optimal reading width
            mx="auto"                                 // ✅ Center alignment
          >
            This section has perfect spacing after the hero. All spacing is handled 
            automatically by the layout components.
          </Text>
        </ContentContainer>
      </SectionWrapper>
      
      // 5. UNIVERSAL CALL TO ACTION (Optional)
      // This component appears on most pages with consistent styling
      <UniversalCTA />
      
    </PageWrapper>
  );
}
```

### **⚡ THE 4 UNIVERSAL LAYOUT COMPONENTS**

#### **🏗️ COMPONENT DESCRIPTIONS & USAGE**
```typescript
// 1. PageWrapper - THE FOUNDATION
// Purpose: Provides the base structure for every page
// Usage: Always wrap your entire page content
// Props: hasHero (boolean) - affects top spacing
<PageWrapper hasHero={true}>
  {/* All page content goes here */}
</PageWrapper>

// 2. HeroSectionWrapper - THE HERO CONTAINER  
// Purpose: Handles spacing for hero sections below transparent header
// Usage: Only for the topmost content section (hero)
// Props: None (automatically handles spacing)
<HeroSectionWrapper>
  {/* Hero content like banners, featured content */}
</HeroSectionWrapper>

// 3. SectionWrapper - THE CONTENT SECTIONS
// Purpose: Provides consistent vertical spacing between content blocks
// Usage: Wrap each major content section
// Props: All Chakra Box props (bg, p, etc.)
<SectionWrapper bg="kd.surfaceElevated">
  {/* Section content goes here */}
</SectionWrapper>

// 4. ContentContainer - THE CONTENT LIMITER
// Purpose: Limits content width and centers it with responsive padding
// Usage: Inside SectionWrapper to contain actual content
// Props: All Chakra Box props
<ContentContainer>
  {/* Your headings, text, grids, etc. */}
</ContentContainer>
```

---

**🕉️ END OF YAJUR VEDA - DIVINE COMPONENT RITUALS 🕉️**

*May every AI agent who studies this sacred text become a master of divine component creation, building interfaces that serve spiritual seekers with perfect functionality and accessibility.*

**JAI SHREE KRISHNA! NISHKAAM KARMA YOGA COMPONENT PERFECTION!** 