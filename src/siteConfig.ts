// 🕉️ MINIMAL SOPHISTICATED SITE CONFIG
// TRUE sophistication = Maximum power with minimum complexity
// FROM: 1,127 lines of configuration bloat
// TO: ~65 lines of essential configuration ONLY

interface NavigationItem {
  label: string;
  href: string;
  hasHero?: boolean;
}

interface CategoryLink {
  label: string;
  href: string;
  image: string;
  description: string;
}

interface SiteConfig {
  // ESSENTIAL IDENTITY (only what actually changes)
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  
  // ESSENTIAL COLORS (only 3 needed - semantic tokens will handle the rest)
  colors: {
    primary: string;    // Deep Saffron
    secondary: string;  // Serene Blue
    tertiary: string;   // Sacred Gold
  };
  
  // ESSENTIAL NAVIGATION (configuration-driven hero detection)
  navigation: {
    main: NavigationItem[];
    footer: {
      categories: CategoryLink[]; // Only what's actually used by lib/services.ts
    };
  };
  
  // ESSENTIAL THEME (only what's used by PrivacyPolicyPage)
  theme: {
    layout: {
      page: {
        background: {
          light: string;
          dark: string;
        };
      };
    };
  };
  
  // ESSENTIAL CONTACT (only what matters)
  contact: {
    email: string;
    phone?: string;
  };
  
  // ESSENTIAL AUTHOR
  author: {
    name: string;
    title: string;
  };
  
  // UNIVERSAL CTA SYSTEM (for compatibility)
  content: {
    universalCTA: {
      global: {
        enabled: boolean;
      };
      primary: {
        text: string;
        href: string;
        colorScheme: string;
        size: string;
        icon: string;
        variant?: string;
        description?: string;
      };
      secondary: {
        text: string;
        href: string;
        colorScheme: string;
        variant: string;
        icon: string;
        description?: string;
      };
    };
  };
}

// THE ENTIRE CONFIGURATION
export const siteConfig: SiteConfig = {
  siteName: "Vedic Wisdom Series",
  siteDescription: "MIT Scientist Discovers Ancient Code That Proves Your Soul's Quantum Nature - Join Dr. Nischaya Nagori's Revolutionary Vedic Education Programs",
  siteUrl: "https://vedicwisdomseries.com",
  
  colors: {
    primary: "#FF9933",   // Deep Saffron - Knowledge & Wisdom
    secondary: "#1E90FF", // Serene Blue - Divine Action & Flow  
    tertiary: "#F2DB49"   // Sacred Gold - Spiritual Illumination
  },
  
  navigation: {
    main: [
      { label: 'Home', href: '/', hasHero: true },
      { label: 'About', href: '/about', hasHero: true },
      { label: 'Teachings', href: '/teachings', hasHero: true },
      { label: 'Schedule', href: '/schedule', hasHero: true },
      { label: 'Testimonials', href: '/testimonials', hasHero: true },
      { label: 'Contact', href: '/contact', hasHero: true }
    ],
    footer: {
      categories: [
        { label: 'Weekend Discourses', href: '/teachings/discourses', image: '/assets/images/discourses.jpg', description: 'Authentic Vedic interpretations with scientific parallels' },
        { label: 'Chanting Classes', href: '/teachings/chanting', image: '/assets/images/chanting.jpg', description: 'Sacred Sanskrit mantras and pronunciation' },
        { label: 'Teacher Training', href: '/teachings/teacher-training', image: '/assets/images/training.jpg', description: 'Certified Vedic teaching methodologies' },
        { label: 'Lifestyle Experiences', href: '/teachings/lifestyle', image: '/assets/images/lifestyle.jpg', description: 'Personalized spiritual retreats' }
      ]
    }
  },
  
  theme: {
    layout: {
      page: {
        background: {
          light: '#ffffff',
          dark: '#1a202c'
        }
      }
    }
  },
  
  contact: {
    email: "contact@vedicwisdomseries.com",
    phone: "+1 (555) 123-4567"
  },
  
  author: {
    name: "Dr. Nischaya Nagori",
    title: "Vedic Scholar & Spiritual Guide"
  },
  
  content: {
    universalCTA: {
      global: {
        enabled: true
      },
      primary: {
        text: "Claim Your Free Discovery Call",
        href: "/contact",
        colorScheme: "orange",
        size: "lg",
        icon: "FaCalendarCheck",
        variant: "solid",
        description: "Transform your life with personalized Vedic guidance"
      },
      secondary: {
        text: "Download Free Guide",
        href: "/contact",
        colorScheme: "blue",
        variant: "outline",
        icon: "FaBook",
        description: "Start your journey with our Vedic wisdom starter guide"
      }
    }
  }
};