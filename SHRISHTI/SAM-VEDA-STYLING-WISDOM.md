# 🎵 SAM VEDA - DIVINE STYLING WISDOM 🎵

**JAI SHREE KRISHNA! MELODIOUS DESIGN FOR AI AGENTS**  
**Sacred Text:** Sam Veda of Karpatri Dham Framework  
**Purpose:** Styling & Design Harmony for AI Devotees  
**Essence:** Beauty through Divine Proportion & Sacred Geometry  

---

## 🎶 **SACRED INVOCATION**

*"सामवेदो ऽस्मि गायत्री छन्दसामहम्"*  
*"Among the Vedas I am the Sama Veda, among meters I am Gayatri"*

O Divine AI Agent! As the Sam Veda brings melody to sacred mantras, so must you bring divine beauty to digital interfaces. Learn the sacred geometry and divine proportions that create harmony in the digital realm.

---

## 🎨 **THE TRINITY COLOR SYSTEM (DIVINE LAW)**

### **Sacred Color Hierarchy**
```typescript
// THE ONLY THREE COLORS THAT EXIST
const DIVINE_COLOR_TRINITY = {
  // PRIMARY: The Divine Consciousness (Usually Blue/Spiritual)
  primary: {
    main: "kd.primary",
    light: "kd.primaryLight", 
    dark: "kd.primaryDark",
    contrast: "kd.primaryContrast"
  },
  
  // SECONDARY: The Divine Action (Usually Saffron/Orange)  
  secondary: {
    main: "kd.secondary",
    light: "kd.secondaryLight",
    dark: "kd.secondaryDark", 
    contrast: "kd.secondaryContrast"
  },
  
  // TERTIARY: The Divine Wisdom (Usually Gold/Yellow)
  tertiary: {
    main: "kd.tertiary",
    light: "kd.tertiaryLight",
    dark: "kd.tertiaryDark",
    contrast: "kd.tertiaryContrast"
  }
}
```

### **Complete Semantic Token System**
```typescript
// DIVINE SEMANTIC TOKENS (AI-Agent Friendly)
const DIVINE_SEMANTIC_TOKENS = {
  // Primary Colors
  "kd.primary": "Main spiritual color (usually blue)",
  "kd.secondary": "Action color (usually saffron/orange)",
  "kd.tertiary": "Wisdom color (usually gold/yellow)",
  
  // Text Colors
  "kd.text": "Primary text color",
  "kd.textSecondary": "Secondary text color",
  "kd.textMuted": "Muted text color",
  "kd.textInverted": "Inverted text (for dark backgrounds)",
  "kd.heading": "Heading text color",
  
  // Background Colors
  "kd.surface": "Primary surface background",
  "kd.canvas": "Canvas/page background",
  "kd.hover": "Hover state background",
  "kd.active": "Active state background",
  
  // Special Colors
  "kdSaffron.500": "Sacred saffron color",
  "kdSaffron.600": "Deep saffron color",
  "accent.500": "Accent color for highlights",
  "success.500": "Success state color",
  "warning.500": "Warning state color",
  "error.500": "Error state color"
}
```

### **Forbidden Color Patterns (Tamas)**
```typescript
// ❌ NEVER USE THESE CONFUSING PATTERNS
"blue.700"     // What is blue? Which blue? Confusion!
"orange.500"   // Which orange? Why 500? Chaos!
"red.600"      // Meaningless to future agents
"green.400"    // No semantic meaning
"purple.800"   // Arbitrary and confusing
"#3b82f6"      // Hex codes are not semantic
"rgba(59, 130, 246, 0.5)" // Complex and non-semantic

// ✅ ALWAYS USE SEMANTIC DIVINE TOKENS
"kd.primary"      // Clear: Main divine color
"kd.secondary"    // Clear: Action color  
"kd.tertiary"     // Clear: Wisdom color
"kd.text"         // Clear: Primary text
"kd.textMuted"    // Clear: Secondary text
"kd.surface"      // Clear: Background
"kd.border"       // Clear: Border color
```

---

## 🎨 **THE TRINITY COLOR APPLICATION RITUAL**
### **Complete Guide for Junior AI Agents - Copy-Pasteable Examples**

**CRITICAL FOR JUNIOR AGENTS:** This section provides exact code examples you can copy and paste. Study the ✅ **Correct (Sattvic)** vs ❌ **Incorrect (Tamasic)** patterns carefully.

### **⚡ BASIC COMPONENT COLORING**

#### **✅ CORRECT WAY (SATTVIC ENERGY)**
```typescript
import { Box, Text, Button, useColorModeValue } from '@chakra-ui/react';

// PERFECT: Using semantic tokens with light/dark mode support
const DivineComponent = () => {
  return (
    <Box
      bg="kd.surface"                    // ✅ Semantic background
      color="kd.text"                   // ✅ Semantic text color
      borderColor="kd.border"           // ✅ Semantic border
      p={6}                             // ✅ Semantic spacing
      borderRadius="md"                 // ✅ Semantic border radius
      boxShadow="md"                    // ✅ Semantic shadow
      _hover={{
        bg: "kd.hover",                 // ✅ Semantic hover state
        transform: "translateY(-2px)",   // ✅ Divine micro-interaction
        boxShadow: "lg"                 // ✅ Enhanced shadow on hover
      }}
      _focus={{
        outline: "3px solid",           // ✅ Accessibility focus
        outlineColor: "kd.primary",     // ✅ Semantic outline color  
        outlineOffset: "2px"            // ✅ Proper focus offset
      }}
    >
      <Text 
        fontSize={{ base: "md", md: "lg" }}  // ✅ Responsive typography
        color="kd.heading"                    // ✅ Semantic heading color
        fontWeight="semibold"                 // ✅ Semantic weight
        mb={4}                               // ✅ Semantic spacing
      >
        Divine Content Title
      </Text>
      
      <Text 
        color="kd.textSecondary"             // ✅ Semantic secondary text
        fontSize={{ base: "sm", md: "md" }} // ✅ Responsive text size
        lineHeight="relaxed"                 // ✅ Semantic line height
      >
        Sacred description using semantic tokens for perfect theming.
      </Text>
      
      <Button
        bg="kd.primary"                      // ✅ Semantic primary color
        color="kd.primaryContrast"           // ✅ Semantic contrast text
        _hover={{ bg: "kd.primaryDark" }}    // ✅ Semantic hover state
        _active={{ bg: "kd.primaryDark" }}   // ✅ Semantic active state  
        size={{ base: "md", md: "lg" }}     // ✅ Responsive button size
        mt={6}                              // ✅ Semantic margin top
      >
        Divine Action
      </Button>
    </Box>
  );
};
```

#### **❌ INCORRECT WAY (TAMASIC ENERGY - CAUSES CONFUSION)**
```typescript
// FORBIDDEN: Hardcoded colors and non-semantic patterns
const ConfusedComponent = () => {
  return (
    <Box
      bg="gray.100"                    // ❌ Non-semantic, theme-breaking
      color="#333333"                  // ❌ Hex code, not configurable
      border="1px solid #e2e8f0"      // ❌ Hardcoded border color
      p="24px"                         // ❌ Hardcoded spacing (not grid-aligned)
      borderRadius="8px"               // ❌ Hardcoded border radius
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // ❌ Complex hardcoded shadow
      _hover={{
        bg: "blue.50",                 // ❌ What type of blue? Confusing!
        transform: "scale(1.05)"       // ❌ Jarring animation
      }}
    >
      <Text 
        fontSize="18px"                // ❌ Hardcoded size, not responsive
        color="blue.700"               // ❌ Meaningless blue reference
        fontWeight="600"               // ❌ Numeric weight, not semantic
        mb="16px"                      // ❌ Hardcoded margin
      >
        Confused Title
      </Text>
      
      <Button
        bg="linear-gradient(45deg, #3b82f6, #1d4ed8)" // ❌ Complex hardcoded gradient
        color="white"                                  // ❌ Hardcoded contrast
        _hover={{ bg: "#2563eb" }}                     // ❌ Hardcoded hover hex
        width="200px"                                  // ❌ Fixed width, not responsive
        height="50px"                                  // ❌ Fixed height
      >
        Confused Action
      </Button>
    </Box>
  );
};
```

### **⚡ ADVANCED COLOR MODE HANDLING**

#### **✅ PERFECT COLOR MODE IMPLEMENTATION**
```typescript
import { useColorModeValue } from '@chakra-ui/react';

const DivineColorModeComponent = () => {
  // PERFECT: Semantic tokens automatically handle light/dark mode
  // But for custom logic, use useColorModeValue with semantic tokens
  
  const cardBg = useColorModeValue("kd.surface", "kd.surfaceDark");
  const textColor = useColorModeValue("kd.text", "kd.textDark");
  const accentColor = useColorModeValue("kd.primary", "kd.primaryDark");
  
  return (
    <Box
      bg={cardBg}                      // ✅ Dynamic semantic background
      color={textColor}                // ✅ Dynamic semantic text
      borderLeft="4px solid"           // ✅ Accent border
      borderLeftColor={accentColor}    // ✅ Dynamic semantic accent
      p={6}
      borderRadius="md"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        bg: "linear-gradient(90deg, kd.primary, kd.secondary, kd.tertiary)", // ✅ Trinity gradient
        borderTopRadius: "md"
      }}
    >
      <Text fontSize="xl" fontWeight="semibold" color={accentColor}>
        Perfect Color Mode Handling
      </Text>
    </Box>
  );
};
```

#### **❌ BROKEN COLOR MODE IMPLEMENTATION**
```typescript
// FORBIDDEN: Hardcoded colors break in dark mode
const BrokenColorMode = () => {
  const bgColor = useColorModeValue("#ffffff", "#1a1a1a"); // ❌ Hardcoded hex codes
  const textColor = useColorModeValue("#333333", "#ffffff"); // ❌ Hardcoded hex codes
  
  return (
    <Box
      bg={bgColor}                     // ❌ Non-semantic hardcoded colors
      color={textColor}                // ❌ Will break theme consistency
      border="1px solid #e2e8f0"      // ❌ Border won't adapt to themes
    >
      This breaks in custom themes and isn't AI-agent friendly
    </Box>
  );
};
```

### **⚡ TRINITY COLOR GRADIENT PATTERNS**

#### **✅ DIVINE TRINITY GRADIENTS**
```typescript
// PERFECT: Sacred trinity gradients using semantic tokens
const DivineGradients = {
  // Horizontal Trinity Flow
  trinityHorizontal: "linear-gradient(90deg, kd.primary, kd.secondary, kd.tertiary)",
  
  // Vertical Trinity Flow  
  trinityVertical: "linear-gradient(180deg, kd.primary, kd.secondary, kd.tertiary)",
  
  // Radial Trinity Energy
  trinityRadial: "radial-gradient(circle, kd.primary, kd.secondary, kd.tertiary)",
  
  // Primary Focus Gradient
  primaryGlow: "linear-gradient(135deg, kd.primary, kd.primaryLight)",
  
  // Secondary Action Gradient
  secondaryGlow: "linear-gradient(135deg, kd.secondary, kd.secondaryLight)",
  
  // Tertiary Wisdom Gradient
  tertiaryGlow: "linear-gradient(135deg, kd.tertiary, kd.tertiaryLight)"
};

// Usage in components
<Box
  bgGradient={DivineGradients.trinityHorizontal}  // ✅ Semantic trinity gradient
  bgClip="text"                                   // ✅ Gradient text effect
  color="transparent"                             // ✅ Required for gradient text
  fontSize="4xl"
  fontWeight="bold"
  textAlign="center"
  p={8}
>
  🕉️ Divine Trinity Gradient Text
</Box>
```

### **⚡ INTERACTIVE STATE MANAGEMENT**

#### **✅ PERFECT INTERACTIVE STATES**
```typescript
// DIVINE: All states use semantic tokens for consistency
const DivineInteractiveComponent = () => {
  return (
    <Button
      // Base state - semantic tokens
      bg="kd.primary"
      color="kd.primaryContrast"
      
      // Hover state - semantic darker variant
      _hover={{
        bg: "kd.primaryDark",
        transform: "translateY(-2px)",     // ✅ Subtle divine elevation
        boxShadow: "lg"                    // ✅ Enhanced shadow
      }}
      
      // Active/pressed state
      _active={{
        bg: "kd.primaryDark",
        transform: "translateY(0px)",      // ✅ Reset elevation
        boxShadow: "md"                    // ✅ Reduced shadow
      }}
      
      // Focus state for accessibility
      _focus={{
        outline: "3px solid",
        outlineColor: "kd.secondary",      // ✅ Contrasting semantic color
        outlineOffset: "2px"
      }}
      
      // Disabled state
      _disabled={{
        bg: "kd.muted",                    // ✅ Semantic muted color
        color: "kd.textMuted",             // ✅ Semantic muted text
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none"
      }}
      
      // Loading state
      _loading={{
        bg: "kd.primary",
        color: "kd.primaryContrast",
        cursor: "wait"
      }}
      
      // Size and spacing using semantic tokens
      size={{ base: "md", md: "lg" }}     // ✅ Responsive sizing
      px={{ base: 6, md: 8 }}             // ✅ Responsive padding
      py={{ base: 3, md: 4 }}             // ✅ Responsive padding
      borderRadius="md"                   // ✅ Semantic border radius
      fontWeight="semibold"               // ✅ Semantic font weight
      
      // Animation and transitions
      transition="all 0.2s ease-in-out"  // ✅ Smooth divine transitions
    >
      Perfect Interactive Button
    </Button>
  );
};
```

### **⚡ COMPONENT COLOR INHERITANCE PATTERNS**

#### **✅ PERFECT COLOR INHERITANCE**
```typescript
// DIVINE: Parent component sets color scheme, children inherit
const DivineCardWithInheritance = ({ colorScheme = "primary" }: { colorScheme?: "primary" | "secondary" | "tertiary" }) => {
  return (
    <Box
      bg={`kd.${colorScheme}Light`}       // ✅ Dynamic semantic background
      borderLeft="4px solid"
      borderLeftColor={`kd.${colorScheme}`}  // ✅ Dynamic semantic border
      p={6}
      borderRadius="md"
    >
      <Text 
        color={`kd.${colorScheme}Dark`}   // ✅ Dynamic semantic text
        fontSize="lg"
        fontWeight="semibold"
        mb={3}
      >
        Title inherits color scheme
      </Text>
      
      <Text 
        color="kd.textSecondary"          // ✅ Semantic secondary text
        fontSize="md"
        mb={4}
      >
        Description uses standard semantic text color
      </Text>
      
      <Button
        bg={`kd.${colorScheme}`}          // ✅ Dynamic semantic button
        color={`kd.${colorScheme}Contrast`}  // ✅ Dynamic semantic contrast
        _hover={{ bg: `kd.${colorScheme}Dark` }}  // ✅ Dynamic semantic hover
        size="sm"
      >
        Action Button
      </Button>
    </Box>
  );
};

// Usage with different color schemes
<VStack spacing={4}>
  <DivineCardWithInheritance colorScheme="primary" />   {/* Blue theme */}
  <DivineCardWithInheritance colorScheme="secondary" /> {/* Saffron theme */}
  <DivineCardWithInheritance colorScheme="tertiary" />  {/* Gold theme */}
</VStack>
```

---

### **🚨 CRITICAL RULES FOR JUNIOR AGENTS**

#### **MANDATORY COLOR TOKEN CHECKLIST:**
- ✅ **Always use semantic tokens:** `kd.primary`, `kd.secondary`, `kd.tertiary`
- ✅ **Never use Chakra defaults:** No `blue.700`, `red.500`, `green.600`
- ✅ **No hex codes:** No `#3b82f6`, `#f59e0b`, `rgba()` values
- ✅ **Support color modes:** Use `useColorModeValue` when needed
- ✅ **Responsive design:** Use responsive props for all properties
- ✅ **Accessibility:** Include focus states with 3px outline minimum
- ✅ **Touch targets:** Minimum 44px for interactive elements
- ✅ **Semantic spacing:** Use Chakra spacing tokens (4, 6, 8, etc.)

#### **QUICK SEMANTIC TOKEN REFERENCE:**
```typescript
// COPY-PASTE READY TOKEN LIST
const SEMANTIC_TOKENS_QUICK_REF = {
  // Backgrounds
  bg: "kd.surface",
  hoverBg: "kd.hover", 
  activeBg: "kd.active",
  
  // Text
  color: "kd.text",
  headingColor: "kd.heading",
  mutedColor: "kd.textMuted",
  
  // Trinity Colors
  primaryBg: "kd.primary",
  secondaryBg: "kd.secondary", 
  tertiaryBg: "kd.tertiary",
  
  // Borders
  borderColor: "kd.border",
  focusColor: "kd.primary",
  
  // Special
  saffron: "kdSaffron.500",
  accent: "accent.500"
};
```

**DIVINE PROMISE:** Using these exact patterns will create perfect, theme-consistent, AI-agent-friendly components that work flawlessly across all devices and color modes.

**🎨 OM SHANTI SHANTI SHANTI 🙏**

---

## 📐 **SACRED GEOMETRY & DIVINE PROPORTIONS**

### **Golden Ratio Typography Scale**
```typescript
// Based on φ (Phi) = 1.618 - Divine Proportion
const DIVINE_TYPOGRAPHY = {
  // Mobile-first sizes (base)
  xs: "0.75rem",    // 12px
  sm: "0.875rem",   // 14px  
  md: "1rem",       // 16px (base)
  lg: "1.125rem",   // 18px
  xl: "1.25rem",    // 20px
  "2xl": "1.5rem",  // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem",  // 36px
  "5xl": "3rem",     // 48px
  "6xl": "3.75rem",  // 60px
  "7xl": "4.5rem",   // 72px
  "8xl": "6rem",     // 96px
  "9xl": "8rem"      // 128px
}

// RESPONSIVE SCALING PATTERN
const responsiveText = {
  base: "md",    // 16px on mobile
  md: "lg",      // 18px on tablet
  lg: "xl"       // 20px on desktop
}
```

### **Sacred Spacing System (4px Grid)**
```typescript
// All spacing based on 4px divine grid
const DIVINE_SPACING = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px  
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
  32: "8rem",    // 128px
  40: "10rem",   // 160px
  48: "12rem",   // 192px
  56: "14rem",   // 224px
  64: "16rem"    // 256px
}
```

### **Divine Border Radius (Sacred Curves)**
```typescript
const SACRED_CURVES = {
  none: "0",
  sm: "0.125rem",   // 2px - Subtle
  base: "0.25rem",  // 4px - Standard
  md: "0.375rem",   // 6px - Medium
  lg: "0.5rem",     // 8px - Large
  xl: "0.75rem",    // 12px - Extra large
  "2xl": "1rem",    // 16px - Very large
  "3xl": "1.5rem",  // 24px - Huge
  full: "9999px"    // Perfect circle
}
```

---

## 📱 **MOBILE-FIRST DIVINE RESPONSIVE DESIGN**

### **Sacred Breakpoint Strategy**
```typescript
// ALWAYS START WITH MOBILE (Divine Order)
const RESPONSIVE_PATTERN = {
  // 1. Mobile First (base) - Most Important
  base: {
    fontSize: "sm",
    padding: 4,
    margin: 2,
    columns: 1
  },
  
  // 2. Small Tablets (sm)
  sm: {
    fontSize: "md", 
    padding: 5,
    margin: 3,
    columns: 1
  },
  
  // 3. Tablets (md)
  md: {
    fontSize: "lg",
    padding: 6, 
    margin: 4,
    columns: 2
  },
  
  // 4. Laptops (lg)
  lg: {
    fontSize: "xl",
    padding: 8,
    margin: 6,
    columns: 3
  },
  
  // 5. Desktops (xl)
  xl: {
    fontSize: "2xl",
    padding: 10,
    margin: 8,
    columns: 4
  }
}
```

### **Touch-Friendly Divine Dimensions**
```typescript
// Minimum touch targets for divine UX
const TOUCH_DIVINE = {
  // Minimum sizes (Apple/Google standards)
  minButton: "44px",      // Minimum button size
  minIcon: "24px",        // Minimum icon size
  minInput: "44px",       // Minimum input height
  
  // Comfortable sizes (Recommended)
  comfortButton: "48px",  // Comfortable button
  comfortIcon: "32px",    // Comfortable icon
  comfortInput: "48px",   // Comfortable input
  
  // Large sizes (Hero elements)
  largeButton: "56px",    // Large CTA buttons
  largeIcon: "40px",      // Large feature icons
  largeInput: "56px",     // Large form inputs
  
  // Hero sizes (Landing pages)
  heroButton: "64px",     // Hero CTA buttons
  heroIcon: "48px",       // Hero section icons
  heroInput: "64px"       // Hero form inputs
}
```

### **Divine Component Responsive Patterns**
```typescript
// Standard responsive patterns for all components
const DIVINE_RESPONSIVE_PATTERNS = {
  // Container Patterns
  container: {
    maxW: { base: "100%", sm: "540px", md: "720px", lg: "960px", xl: "1140px" },
    px: { base: 4, md: 6, lg: 8 }
  },
  
  // Grid Patterns
  grid: {
    columns: { base: 1, md: 2, lg: 3, xl: 4 },
    spacing: { base: 4, md: 6, lg: 8 }
  },
  
  // Text Patterns
  heading: {
    fontSize: { base: "2xl", md: "3xl", lg: "4xl" },
    lineHeight: { base: "shorter", md: "short" }
  },
  
  body: {
    fontSize: { base: "sm", md: "md", lg: "lg" },
    lineHeight: { base: "base", md: "relaxed" }
  },
  
  // Button Patterns
  button: {
    size: { base: "md", md: "lg" },
    fontSize: { base: "sm", md: "md" },
    px: { base: 6, md: 8 },
    py: { base: 3, md: 4 }
  }
}
```

---

## ✨ **DIVINE ANIMATION & INTERACTION PRINCIPLES**

### **Sacred Animation Timing**
```typescript
// Divine timing based on natural rhythms
const DIVINE_ANIMATIONS = {
  // Duration (in milliseconds)
  instant: "0ms",
  fast: "150ms",      // Quick feedback
  normal: "300ms",    // Standard transitions
  slow: "500ms",      // Emphasis animations
  slower: "750ms",    // Hero animations
  
  // Easing Functions (Natural Motion)
  easeOut: "cubic-bezier(0.0, 0.0, 0.2, 1)",     // Deceleration
  easeIn: "cubic-bezier(0.4, 0.0, 1, 1)",        // Acceleration
  easeInOut: "cubic-bezier(0.4, 0.0, 0.2, 1)",   // Natural motion
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)" // Playful bounce
}
```

### **Divine Hover States**
```typescript
// Standard hover patterns for all interactive elements
const DIVINE_HOVER_STATES = {
  // Subtle Elevation
  subtle: {
    transform: "translateY(-2px)",
    boxShadow: "lg",
    transition: "all 0.3s ease"
  },
  
  // Medium Elevation
  medium: {
    transform: "translateY(-4px)",
    boxShadow: "xl", 
    transition: "all 0.3s ease"
  },
  
  // Strong Elevation
  strong: {
    transform: "translateY(-6px)",
    boxShadow: "2xl",
    transition: "all 0.3s ease"
  },
  
  // Color Change
  colorShift: {
    bg: "kd.hover",
    color: "kd.text",
    transition: "all 0.3s ease"
  },
  
  // Scale Effect
  scale: {
    transform: "scale(1.05)",
    transition: "all 0.3s ease"
  }
}
```

### **Divine Focus States (Accessibility)**
```typescript
// Accessible focus indicators
const DIVINE_FOCUS_STATES = {
  // Standard Focus
  standard: {
    outline: "3px solid",
    outlineColor: "kd.primary",
    outlineOffset: "2px"
  },
  
  // High Contrast Focus
  highContrast: {
    outline: "4px solid",
    outlineColor: "accent.500",
    outlineOffset: "3px",
    bg: "kd.surface"
  },
  
  // Subtle Focus (for cards)
  subtle: {
    boxShadow: "0 0 0 3px var(--chakra-colors-kd-primary)",
    borderColor: "kd.primary"
  }
}
```

---

## 🎭 **DIVINE COMPONENT STYLING PATTERNS**

### **Sacred Button Styles**
```typescript
// Divine button variants
const DIVINE_BUTTON_STYLES = {
  // Primary Action (Most Important)
  primary: {
    bg: "kd.primary",
    color: "kd.textInverted",
    _hover: { bg: "kd.primaryDark", transform: "translateY(-2px)" },
    _focus: { outline: "3px solid", outlineColor: "kd.primary", outlineOffset: "2px" },
    _active: { transform: "translateY(0)" }
  },
  
  // Secondary Action
  secondary: {
    bg: "kd.secondary", 
    color: "kd.textInverted",
    _hover: { bg: "kd.secondaryDark", transform: "translateY(-2px)" },
    _focus: { outline: "3px solid", outlineColor: "kd.secondary", outlineOffset: "2px" }
  },
  
  // Outline Style
  outline: {
    bg: "transparent",
    color: "kd.primary",
    border: "2px solid",
    borderColor: "kd.primary",
    _hover: { bg: "kd.primary", color: "kd.textInverted" },
    _focus: { outline: "3px solid", outlineColor: "kd.primary", outlineOffset: "2px" }
  },
  
  // Ghost Style
  ghost: {
    bg: "transparent",
    color: "kd.text",
    _hover: { bg: "kd.hover" },
    _focus: { outline: "3px solid", outlineColor: "kd.primary", outlineOffset: "2px" }
  }
}
```

### **Sacred Card Styles**
```typescript
// Divine card patterns
const DIVINE_CARD_STYLES = {
  // Elevated Card
  elevated: {
    bg: "kd.surface",
    borderRadius: "xl",
    boxShadow: "lg",
    p: 6,
    _hover: { 
      boxShadow: "xl", 
      transform: "translateY(-4px)",
      transition: "all 0.3s ease"
    }
  },
  
  // Bordered Card
  bordered: {
    bg: "kd.surface",
    border: "1px solid",
    borderColor: "kd.border",
    borderRadius: "lg",
    p: 6,
    _hover: { borderColor: "kd.primary" }
  },
  
  // Feature Card (with accent)
  feature: {
    bg: "kd.surface",
    borderRadius: "xl",
    boxShadow: "md",
    borderTop: "4px solid",
    borderTopColor: "kd.primary",
    p: 6,
    _hover: { 
      boxShadow: "lg",
      borderTopColor: "kd.secondary"
    }
  }
}
```

### **Sacred Form Styles**
```typescript
// Divine form input patterns
const DIVINE_FORM_STYLES = {
  // Standard Input
  input: {
    bg: "kd.surface",
    border: "2px solid",
    borderColor: "kd.border",
    borderRadius: "md",
    px: 4,
    py: 3,
    fontSize: "md",
    _focus: {
      borderColor: "kd.primary",
      boxShadow: "0 0 0 1px var(--chakra-colors-kd-primary)"
    },
    _invalid: {
      borderColor: "error.500",
      boxShadow: "0 0 0 1px var(--chakra-colors-error-500)"
    }
  },
  
  // Floating Label Input
  floating: {
    position: "relative",
    bg: "kd.surface",
    border: "2px solid",
    borderColor: "kd.border",
    borderRadius: "md",
    pt: 6,
    pb: 2,
    px: 4,
    _focus: {
      borderColor: "kd.primary"
    }
  }
}
```

---

## 🌈 **DIVINE GRADIENT PATTERNS**

### **Sacred Gradient Combinations**
```typescript
// Divine gradient patterns using semantic tokens
const DIVINE_GRADIENTS = {
  // Primary Gradients
  primarySubtle: "linear-gradient(135deg, var(--chakra-colors-kd-primary) 0%, var(--chakra-colors-kd-primaryLight) 100%)",
  primaryBold: "linear-gradient(135deg, var(--chakra-colors-kd-primary) 0%, var(--chakra-colors-kd-primaryDark) 100%)",
  
  // Secondary Gradients  
  secondarySubtle: "linear-gradient(135deg, var(--chakra-colors-kd-secondary) 0%, var(--chakra-colors-kd-secondaryLight) 100%)",
  secondaryBold: "linear-gradient(135deg, var(--chakra-colors-kd-secondary) 0%, var(--chakra-colors-kd-secondaryDark) 100%)",
  
  // Spiritual Gradients
  spiritual: "linear-gradient(135deg, var(--chakra-colors-kd-primary) 0%, var(--chakra-colors-kd-tertiary) 100%)",
  divine: "linear-gradient(135deg, var(--chakra-colors-kd-secondary) 0%, var(--chakra-colors-kd-primary) 100%)",
  
  // Overlay Gradients (for backgrounds)
  overlayLight: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
  overlayDark: "linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)"
}
```

---

## 🎯 **DIVINE LAYOUT PATTERNS**

### **Sacred Container Patterns**
```typescript
// Standard container patterns for consistent layouts
const DIVINE_CONTAINERS = {
  // Page Container
  page: {
    maxW: "7xl",
    mx: "auto",
    px: { base: 4, md: 6, lg: 8 },
    py: { base: 8, md: 12, lg: 16 }
  },
  
  // Section Container
  section: {
    maxW: "6xl", 
    mx: "auto",
    px: { base: 4, md: 6, lg: 8 },
    py: { base: 12, md: 16, lg: 20 }
  },
  
  // Content Container
  content: {
    maxW: "4xl",
    mx: "auto", 
    px: { base: 4, md: 6 },
    py: { base: 6, md: 8 }
  },
  
  // Narrow Container (for text)
  narrow: {
    maxW: "2xl",
    mx: "auto",
    px: { base: 4, md: 6 },
    py: { base: 4, md: 6 }
  }
}
```

### **Sacred Grid Patterns**
```typescript
// Responsive grid patterns
const DIVINE_GRIDS = {
  // Feature Grid (3 columns)
  features: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
    gap: { base: 6, md: 8, lg: 10 }
  },
  
  // Service Grid (2 columns)
  services: {
    display: "grid", 
    gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
    gap: { base: 6, md: 8 }
  },
  
  // Gallery Grid (4 columns)
  gallery: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
    gap: { base: 4, md: 6 }
  },
  
  // Blog Grid (2-3 columns)
  blog: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
    gap: { base: 6, md: 8 }
  }
}
```

---

## 🕉️ **DIVINE STYLING MANTRAS FOR AI AGENTS**

### **The Sacred Styling Commandments**
```
🎨 COLOR MANTRA:
"Trinity colors only - semantic tokens always"

📱 MOBILE MANTRA:
"Mobile first, desktop enhanced, touch-friendly divine"

📐 SPACING MANTRA:
"4px grid system - divine mathematical harmony"

✨ ANIMATION MANTRA:
"Smooth transitions serve user experience"

🎯 FOCUS MANTRA:
"Accessibility first - divine wisdom for all"

🌈 GRADIENT MANTRA:
"Semantic gradients using CSS variables only"

📏 PROPORTION MANTRA:
"Golden ratio typography - divine mathematical beauty"
```

### **Divine Styling Checklist**
```typescript
// Before completing any styling task
const DIVINE_STYLING_CHECKLIST = {
  colors: [
    "✅ Only semantic tokens used (kd.primary, kd.secondary, etc.)",
    "✅ No hardcoded colors (blue.700, #hex, etc.)",
    "✅ Trinity color system followed",
    "✅ Proper contrast ratios maintained"
  ],
  
  responsive: [
    "✅ Mobile-first approach used",
    "✅ Touch targets ≥ 44px",
    "✅ Responsive typography implemented",
    "✅ Proper breakpoint usage"
  ],
  
  spacing: [
    "✅ 4px grid system followed",
    "✅ Consistent spacing patterns",
    "✅ Proper margin/padding hierarchy",
    "✅ Sacred geometry principles applied"
  ],
  
  accessibility: [
    "✅ Focus states defined",
    "✅ High contrast support",
    "✅ Screen reader friendly",
    "✅ Keyboard navigation support"
  ],
  
  performance: [
    "✅ Minimal CSS-in-JS overhead",
    "✅ Efficient animations",
    "✅ Optimized gradients",
    "✅ No layout thrashing"
  ]
}
```

---

## 🎨 **THE TRINITY COLOR APPLICATION RITUAL**
### **Complete Guide for Junior AI Agents - Copy-Pasteable Examples**

**CRITICAL FOR JUNIOR AGENTS:** This section provides exact code examples you can copy and paste. Study the ✅ **Correct (Sattvic)** vs ❌ **Incorrect (Tamasic)** patterns carefully.

### **⚡ BASIC COMPONENT COLORING**

#### **✅ CORRECT WAY (SATTVIC ENERGY)**
```typescript
import { Box, Text, Button, useColorModeValue } from '@chakra-ui/react';

// PERFECT: Using semantic tokens with light/dark mode support
const DivineComponent = () => {
  return (
    <Box
      bg="kd.surface"                    // ✅ Semantic background
      color="kd.text"                   // ✅ Semantic text color
      borderColor="kd.border"           // ✅ Semantic border
      p={6}                             // ✅ Semantic spacing
      borderRadius="md"                 // ✅ Semantic border radius
      boxShadow="md"                    // ✅ Semantic shadow
      _hover={{
        bg: "kd.hover",                 // ✅ Semantic hover state
        transform: "translateY(-2px)",   // ✅ Divine micro-interaction
        boxShadow: "lg"                 // ✅ Enhanced shadow on hover
      }}
      _focus={{
        outline: "3px solid",           // ✅ Accessibility focus
        outlineColor: "kd.primary",     // ✅ Semantic outline color  
        outlineOffset: "2px"            // ✅ Proper focus offset
      }}
    >
      <Text 
        fontSize={{ base: "md", md: "lg" }}  // ✅ Responsive typography
        color="kd.heading"                    // ✅ Semantic heading color
        fontWeight="semibold"                 // ✅ Semantic weight
        mb={4}                               // ✅ Semantic spacing
      >
        Divine Content Title
      </Text>
      
      <Text 
        color="kd.textSecondary"             // ✅ Semantic secondary text
        fontSize={{ base: "sm", md: "md" }} // ✅ Responsive text size
        lineHeight="relaxed"                 // ✅ Semantic line height
      >
        Sacred description using semantic tokens for perfect theming.
      </Text>
      
      <Button
        bg="kd.primary"                      // ✅ Semantic primary color
        color="kd.primaryContrast"           // ✅ Semantic contrast text
        _hover={{ bg: "kd.primaryDark" }}    // ✅ Semantic hover state
        _active={{ bg: "kd.primaryDark" }}   // ✅ Semantic active state  
        size={{ base: "md", md: "lg" }}     // ✅ Responsive button size
        mt={6}                              // ✅ Semantic margin top
      >
        Divine Action
      </Button>
    </Box>
  );
};
```

#### **❌ INCORRECT WAY (TAMASIC ENERGY - CAUSES CONFUSION)**
```typescript
// FORBIDDEN: Hardcoded colors and non-semantic patterns
const ConfusedComponent = () => {
  return (
    <Box
      bg="gray.100"                    // ❌ Non-semantic, theme-breaking
      color="#333333"                  // ❌ Hex code, not configurable
      border="1px solid #e2e8f0"      // ❌ Hardcoded border color
      p="24px"                         // ❌ Hardcoded spacing (not grid-aligned)
      borderRadius="8px"               // ❌ Hardcoded border radius
      boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // ❌ Complex hardcoded shadow
      _hover={{
        bg: "blue.50",                 // ❌ What type of blue? Confusing!
        transform: "scale(1.05)"       // ❌ Jarring animation
      }}
    >
      <Text 
        fontSize="18px"                // ❌ Hardcoded size, not responsive
        color="blue.700"               // ❌ Meaningless blue reference
        fontWeight="600"               // ❌ Numeric weight, not semantic
        mb="16px"                      // ❌ Hardcoded margin
      >
        Confused Title
      </Text>
      
      <Button
        bg="linear-gradient(45deg, #3b82f6, #1d4ed8)" // ❌ Complex hardcoded gradient
        color="white"                                  // ❌ Hardcoded contrast
        _hover={{ bg: "#2563eb" }}                     // ❌ Hardcoded hover hex
        width="200px"                                  // ❌ Fixed width, not responsive
      >
        Chaos Button
      </Button>
    </Box>
  );
};
```

### **⚡ SEMANTIC TOKEN REFERENCE GUIDE**

#### **🎯 COMPLETE TOKEN MAPPING FOR JUNIOR AGENTS**
```typescript
// COPY-PASTE REFERENCE: Use these exact tokens
const DIVINE_SEMANTIC_TOKENS_REFERENCE = {
  // PRIMARY COLORS (Main spiritual identity)
  "kd.primary": "Primary brand color (usually blue/spiritual)",
  "kd.primaryLight": "Light variant of primary color",
  "kd.primaryDark": "Dark variant of primary color", 
  "kd.primaryContrast": "Text color that contrasts with primary",
  
  // SECONDARY COLORS (Action/energy color)
  "kd.secondary": "Secondary brand color (usually saffron/orange)",
  "kd.secondaryLight": "Light variant of secondary color",
  "kd.secondaryDark": "Dark variant of secondary color",
  "kd.secondaryContrast": "Text color that contrasts with secondary",
  
  // TERTIARY COLORS (Wisdom/accent color)
  "kd.tertiary": "Tertiary brand color (usually gold/yellow)",
  "kd.tertiaryLight": "Light variant of tertiary color",
  "kd.tertiaryDark": "Dark variant of tertiary color",
  "kd.tertiaryContrast": "Text color that contrasts with tertiary",
  
  // TEXT COLORS (Hierarchy of text)
  "kd.text": "Primary text color (high contrast)",
  "kd.textSecondary": "Secondary text color (medium contrast)",
  "kd.textMuted": "Muted text color (low contrast)",
  "kd.textInverted": "Inverted text for dark backgrounds",
  "kd.heading": "Heading text color (enhanced contrast)",
  
  // BACKGROUND COLORS (Surface hierarchy)
  "kd.surface": "Primary surface background",
  "kd.surfaceElevated": "Elevated surface (cards, modals)",
  "kd.canvas": "Page/canvas background (lowest level)",
  "kd.hover": "Hover state background",
  "kd.active": "Active/pressed state background",
  
  // BORDER COLORS (Separation and structure)
  "kd.border": "Default border color",
  "kd.borderLight": "Light border for subtle separation",
  "kd.borderDark": "Dark border for strong separation",
  
  // SPECIAL SEMANTIC COLORS
  "kdSaffron.500": "Sacred saffron color (spiritual significance)",
  "kdSaffron.600": "Deep saffron color (stronger presence)",
  "accent.500": "Accent color for highlights and focus",
  "success.500": "Success state color",
  "warning.500": "Warning state color", 
  "error.500": "Error state color"
};

// HOW TO USE IN COMPONENTS:
const ExampleUsage = () => (
  <Box
    bg="kd.surface"          // Background
    color="kd.text"          // Text color
    borderColor="kd.border"  // Border color
    p={6}                    // Spacing (always use numbers)
    borderRadius="md"        // Border radius (use semantic sizes)
    _hover={{
      bg: "kd.hover",        // Hover background
      borderColor: "kd.primary" // Hover border
    }}
  >
    <Heading color="kd.heading">Title</Heading>
    <Text color="kd.textSecondary">Description</Text>
    <Button bg="kd.primary" color="kd.primaryContrast">
      Action
    </Button>
  </Box>
);
```

---

**🕉️ END OF SAM VEDA - DIVINE STYLING WISDOM 🕉️**

*May every AI agent who studies this sacred text become a master of divine digital beauty, creating interfaces that elevate consciousness and serve spiritual seekers with perfect harmony.*

**JAI SHREE KRISHNA! NISHKAAM KARMA YOGA STYLING PERFECTION!** 