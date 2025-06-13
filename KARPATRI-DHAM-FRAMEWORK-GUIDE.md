# 🕉️ Karpatri Dham Framework v1.0
## The Ultimate Open-Source Framework for Sacred Digital Ashrams & Knowledge Repositories

**Inspired by the timeless wisdom of Dharmasamrat Swami Karpatri Ji Maharaj.**
**Copyright © 2025 Karpatri Dham Sacred Technology Labs - For the benefit of all humanity.**

---

## 🚀 **FRAMEWORK VISION & PURPOSE**

### **🔥 Core Principles - A Framework for Dharma:**
1.  **⚡ Universal Access to Knowledge**: To provide a platform for sharing sacred and educational content freely with the world.
2.  **♿ WCAG 2.1 AAA Accessibility**: Ensuring knowledge is accessible to all, regardless of ability.
3.  **🧘 Nishkaam Karma Digital Yoga**: Built with a spirit of selfless service, detached from commercial outcomes.
4.  **📱 Progressive Web App**: Providing a seamless, app-like experience for continuous learning, even offline.
5.  **✨ Spiritual & Aesthetic Purity**: A clean, calming, and spiritually aligned design system.
6.  **🛠️ Open Source & Community Driven**: A framework that can be adopted and extended by any educational or spiritual institution.
7.  **🔒 Secure & Private**: Built with respect for user privacy and data security.
8.  **🌐 Infinitely Adaptable**: A universal template system that can serve any form of knowledge dissemination.

---

## 🎯 **Framework Mission & Philosophy**

The **Karpatri Dham Framework** represents the pinnacle of spiritual and educational technology. Following the principles of **"Nishkaam Karma Digital Yoga"**, this framework provides a foundation for creating digital sanctuaries of knowledge.

- ⚡ **Performance & Serenity** - A fast, responsive experience that promotes calm and focus.
- ♿ **Universal Accessibility** - WCAG 2.1 AAA compliance ensures no seeker is left behind.
- 🧘 **Spiritual Focus** - Every component is designed to support a spiritual and educational mission.
- 📱 **PWA for Sadhana** - An installable, offline-capable app for uninterrupted spiritual practice and study.
- 🎨 **Sacred Design System** - A theme built on sacred geometry and a calming, spiritually significant color palette.
- 🛠️ **For Developers & Seekers** - Easy for developers to adopt, and a joy for end-users to interact with.
- 🔒 **A Sanctuary of Trust** - A secure platform for communities to learn and grow.
- 🌐 **Universal Knowledge Template** - Adaptable for any educational institution, from ashrams to universities.

### **Core Philosophy: "Nishkaam Karma Digital Yoga"**
- **Detached Excellence**: The framework transcends individual preferences, focusing on universal principles of design and usability.
- **Configuration-Driven**: Zero hardcoded values. All aspects of the institution's identity flow from a central configuration file.
- **AI-Native**: Built specifically for AI agents to assist in maintenance, content creation, and expansion.
- **Infinite Adaptability**: The framework can be configured to represent any educational or spiritual tradition.
- **Divine Precision**: Every component is crafted to the highest standards of quality and aesthetics.

---

## 🚀 **Quick Start for AI Agents & Developers**

### **Step 1: Understanding the Sacred Architecture**
```
karpatri-dham-framework/
├── src/
│   ├── siteConfig.ts       # 🕉️ MASTER CONFIGURATION (The Heart of the Ashram)
│   ├── theme.ts            # 🎨 DIVINE THEME & SEMANTIC TOKENS
│   ├── components/
│   │   ├── Header.tsx      # 🙏 Sacred Header Component
│   │   └── layout/
│   │       └── Footer.tsx  # 🙏 Sacred Footer Component
│   ├── pages/              # All page components (Teachings, Library, etc.)
│   └── types/              # TypeScript interfaces for data structures
├── public/
│   └── assets/             # Sacred assets (images, logos, etc.)
├── scripts/                # Build automation for sacred tasks
└── KARPATRI-DHAM-FRAMEWORK-GUIDE.md  # This comprehensive guide
```

### **Step 2: Core Features Overview**

#### **🧘 Performance & Core Web Vitals**
```typescript
// Real-time Core Web Vitals monitoring for a serene user experience
import { usePerformance } from './hooks/usePerformance';

const { metrics, score, isLoading } = usePerformance();
// Tracks FCP, LCP, FID, CLS, TTFB automatically
```

#### **♿ Accessibility Provider System**
```typescript
// WCAG 2.1 AAA compliance ensures knowledge is for everyone
import { AccessibilityProvider, useAccessibility } from './components/providers/AccessibilityProvider';

const { settings, updateSetting } = useAccessibility();
// High contrast, reduced motion, font scaling, screen reader optimization
```

#### **🎨 Divine Theme System (via `theme.ts`)**
The theme is built upon a **Divine Trinity Color System** and **Semantic Tokens**. Agents and developers **must** use semantic tokens (`kd.*`) instead of raw color values to maintain spiritual and aesthetic integrity.

**Example Usage:**
```jsx
import { Box, Text, Button } from '@chakra-ui/react';

// Use semantic tokens for all styling
<Box bg="kd.surface" p={4} borderColor="kd.border" borderWidth={1}>
    <Text color="kd.text">Jai Shree Krishna</Text>
    <Button bg="kd.primary" color="kd.primaryContrast">Seva</Button>
</Box>
```

### **Step 3: The Sacred Configuration System (`siteConfig.ts`)**

The `siteConfig.ts` file is the single source of truth for the entire digital ashram's identity.

```typescript
export const siteConfig: SiteConfig = {
  // Basic Ashram Information
  siteName: "Karpatri Dham",
  siteUrl: "https://karpatridham.org",
  description: "A sacred digital ashram for the dissemination of Vedic wisdom.",
  
  // Contact & Seva Information
  contact: {
    address: "Vrindavan<br>Uttar Pradesh, India",
    phones: [
      { label: "Helpline", number: "+91-9999-KARPATRI" },
    ],
    email: "seva@karpatridham.org",
    socialLinks: [
      {
        label: "YouTube",
        href: "https://youtube.com/@karpatridham",
        icon: FaYoutube,
        enabled: true,
        color: "#FF0000",
        hoverColor: "#E60000"
      }
      // ... more social platforms
    ]
  },
  
  // Divine Theme Configuration
  theme: {
    colors: {
      primary: "#1e40af",     // The primary color of the ashram
      secondary: "#dc2626",   // The secondary color
      tertiary: "#F2DB49",    // An accent color
    },
    layout: {
      page: {
        background: { light: "#ffffff", dark: "#1a202c" },
      },
      header: {
        background: { light: "rgba(255, 255, 255, 0.95)", dark: "#2d3748" },
        text: { light: "#2d3748", dark: "#f7fafc" },
      },
      footer: {
        background: { light: "#1e3a8a", dark: "#1a202c" },
        text: { light: "#ffffff", dark: "#f7fafc" },
      }
    },
    typography: {
      fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif"
      },
    }
  },
  
  // Ashram Layout Configuration
  layout: {
    header: {
      height: { mobile: "70px", desktop: "80px" },
      showLogo: true,
      logoText: "Karpatri Dham",
    },
    footer: {
      showLogo: true,
      copyrightText: "© 2025 Karpatri Dham. Serving humanity through Dharmic technology."
    }
  },
  
  // Navigation Links
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "Teachings", href: "/teachings" },
      { label: "Library", href: "/library" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
  }
};
```

This guide provides the foundational knowledge to work with the Karpatri Dham framework. By adhering to these principles, we can collectively build and maintain a digital space that is a true reflection of Dharmic values.

**JAI SHREE KRISHNA!**