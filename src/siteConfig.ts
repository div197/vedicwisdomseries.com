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

interface SocialLink {
  label: string;
  href: string;
  icon: any;
  enabled: boolean;
  color?: string;
  hoverColor?: string;
}

interface PhoneEntry {
  label: string;
  number: string;
  flagUrl: string;
  countryCode: string;
  displayBreakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl';
  enabled: boolean;
}

interface EmailAddress {
  label: string;
  address: string;
  enabled: boolean;
}

interface MenuLink {
  label: string;
  href: string;
}

interface FooterMenu {
  enabled: boolean;
  title: string;
  links: MenuLink[];
}

interface SiteConfig {
  // ESSENTIAL IDENTITY (only what actually changes)
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  defaultOgImage: string;
  
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
    colors: {
      primary: string;
    };
    layout: {
      page: {
        background: {
          light: string;
          dark: string;
        };
      };
      footer: {
        background: {
          light: string;
          dark: string;
        };
      };
    };
  };
  
  // ESSENTIAL CONTACT (enhanced for Footer needs)
  contact: {
    email: string;
    phone?: string;
    address: string;
    phones: PhoneEntry[];
    socialLinks: SocialLink[];
  };
  
  // ESSENTIAL AUTHOR
  author: {
    name: string;
    title: string;
  };
  
  // ASSETS for Header and SEO
  assets: {
    logo: {
      header: string;
      main: string;
      favicon: string;
    };
  };
  
  // LEGAL for Footer
  legal: {
    copyrightText: string;
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
  
  // Layout configuration for Footer and Header components
  layout: {
    header: {
      sticky: boolean;
      showLogo: boolean;
      showNavigation: boolean;
      mobileBreakpoint: string;
      padding: {
        vertical: { base: number; md: number };
      };
      topBar: {
        enabled: boolean;
        background: string;
        textColor: string;
        padding: number;
        phoneNumbers: PhoneEntry[];
        emailAddress: EmailAddress;
        styling: {
          phoneBoxMinHeight: string;
          buttonHeight: string;
          buttonBorderRadius: string;
          buttonMinWidth: string;
        };
      };
      mainHeader: {
        transparentOnHero: boolean;
        blurEffect: boolean;
        borderOnScroll: boolean;
        shadowOnScroll: boolean;
        logo: {
          height: { base: string; md: string };
          hoverScale: number;
        };
        mobileMenu: {
          drawerSize: string;
          headerText: string;
          showContactInfo: boolean;
          actionButtons: any[];
        };
      };
      navigation: {
        spacing: number;
        fontSize: string;
      };
    };
    footer: {
      showAboutSection: boolean;
      showSocialLinks: boolean;
      showContactInfo: boolean;
      columns: {
        mobile: number;
        tablet: number;
        desktop: number;
      };
      menus: {
        menu1: FooterMenu;
        menu2: FooterMenu;
      };
      socialMedia: {
        iconSize: { mobile: string; desktop: string };
        spacing: { mobile: number; desktop: number };
      };
      typography: {
        links: {
          fontSize: { mobile: string; desktop: string };
          fontWeight: string;
          lineHeight: string;
        };
        headings: {
          fontSize: { mobile: string; desktop: string };
        };
        body: {
          fontSize: { mobile: string; desktop: string };
        };
        copyright: {
          fontSize: { mobile: string; desktop: string };
        };
      };
      styling: {
        cardSpacing: { mobile: number; desktop: number };
        cardPadding: { mobile: number; desktop: number };
      };
      spacing: {
        sectionPadding: { mobile: number; desktop: number };
        bottomPadding: { mobile: number; desktop: number };
      };
    };
  };
}

// THE ENTIRE CONFIGURATION
export const siteConfig: SiteConfig = {
  siteName: import.meta.env.VITE_APP_NAME || "Vedic Wisdom Series",
  siteDescription: "MIT Scientist Discovers Ancient Code That Proves Your Soul's Quantum Nature - Join Dr. Nischaya Nagori's Revolutionary Vedic Education Programs",
  siteUrl: import.meta.env.VITE_SITE_URL || "https://vaidikwisdomseries.com",
  defaultOgImage: "/assets/images/vedic-wisdom-og.svg",
  
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
    colors: {
      primary: "#FF9933"
    },
    layout: {
      page: {
        background: {
          light: '#ffffff',
          dark: '#1a202c'
        }
      },
      footer: {
        background: {
          light: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 32, 44, 0.95) 100%)',
          dark: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 32, 44, 0.95) 100%)'
        }
      }
    }
  },
  
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "contact@vaidikwisdomseries.com",
    phone: import.meta.env.VITE_PHONE_NUMBER || "+91-961-000-1234",
    address: "Vedic Wisdom Series<br>Divine Knowledge Center<br>India - Vishwaguru to the World",
    phones: [
      {
        label: "Main",
        number: "+91-961-000-1234",
        flagUrl: "/assets/images/flags/in.png",
        countryCode: "IN",
        displayBreakpoint: "md" as const,
        enabled: true
      }
    ],
    socialLinks: [
      {
        label: "YouTube",
        href: "https://youtube.com/@vedicwisdomseries",
        icon: null,
        enabled: true,
        color: "#FF0000",
        hoverColor: "#CC0000"
      },
      {
        label: "Facebook",
        href: "https://facebook.com/vedicwisdomseries",
        icon: null,
        enabled: true,
        color: "#1877F2",
        hoverColor: "#0F5DBE"
      },
      {
        label: "Instagram",
        href: "https://instagram.com/vedicwisdomseries",
        icon: null,
        enabled: true,
        color: "#E4405F",
        hoverColor: "#C13584"
      }
    ]
  },
  
  author: {
    name: "Dr. Nischaya Nagori",
    title: "Vedic Scholar & Spiritual Guide"
  },
  
  assets: {
    logo: {
      header: "/assets/images/logo-header.svg",
      main: "/assets/images/logo-main.svg",
      favicon: "/assets/images/favicon.ico"
    }
  },
  
  legal: {
    copyrightText: "© 2025 Vedic Wisdom Series. All rights reserved."
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
  },

  // Complete layout configuration for Header and Footer
  layout: {
    header: {
      sticky: true,
      showLogo: true,
      showNavigation: true,
      mobileBreakpoint: "lg",
      padding: {
        vertical: { base: 4, md: 6 }
      },
      topBar: {
        enabled: true,
        background: "linear-gradient(135deg, rgba(255,153,51,0.9), rgba(30,144,255,0.9))",
        textColor: "white",
        padding: 3,
        phoneNumbers: [
          {
            label: "Main",
            number: "+91-961-000-1234",
            flagUrl: "/assets/images/flags/in.png",
            countryCode: "IN",
            displayBreakpoint: "md" as const,
            enabled: true
          }
        ],
        emailAddress: {
          label: "Email",
          address: "contact@vaidikwisdomseries.com",
          enabled: true
        },
        styling: {
          phoneBoxMinHeight: "40px",
          buttonHeight: "40px",
          buttonBorderRadius: "20px",
          buttonMinWidth: "120px"
        }
      },
      mainHeader: {
        transparentOnHero: true,
        blurEffect: true,
        borderOnScroll: true,
        shadowOnScroll: true,
        logo: {
          height: { base: "40px", md: "50px" },
          hoverScale: 1.05
        },
        mobileMenu: {
          drawerSize: "sm",
          headerText: "Navigation Menu",
          showContactInfo: true,
          actionButtons: []
        }
      },
      navigation: {
        spacing: 8,
        fontSize: "sm"
      }
    },
    footer: {
      showAboutSection: true,
      showSocialLinks: true,
      showContactInfo: true,
      columns: {
        mobile: 1,
        tablet: 2,
        desktop: 4
      },
      menus: {
        menu1: {
          enabled: true,
          title: "Quick Links",
          links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Teachings", href: "/teachings" },
            { label: "Contact", href: "/contact" }
          ]
        },
        menu2: {
          enabled: true,
          title: "Programs",
          links: [
            { label: "Weekend Discourses", href: "/teachings/discourses" },
            { label: "Chanting Classes", href: "/teachings/chanting" },
            { label: "Teacher Training", href: "/teachings/teacher-training" },
            { label: "Lifestyle Experiences", href: "/teachings/lifestyle" }
          ]
        }
      },
      socialMedia: {
        iconSize: { mobile: "20px", desktop: "24px" },
        spacing: { mobile: 4, desktop: 6 }
      },
      typography: {
        links: {
          fontSize: { mobile: "sm", desktop: "md" },
          fontWeight: "medium",
          lineHeight: "1.5"
        },
        headings: {
          fontSize: { mobile: "lg", desktop: "xl" }
        },
        body: {
          fontSize: { mobile: "sm", desktop: "md" }
        },
        copyright: {
          fontSize: { mobile: "xs", desktop: "sm" }
        }
      },
      styling: {
        cardSpacing: { mobile: 4, desktop: 6 },
        cardPadding: { mobile: 6, desktop: 8 }
      },
      spacing: {
        sectionPadding: { mobile: 8, desktop: 12 },
        bottomPadding: { mobile: 4, desktop: 6 }
      }
    }
  }
};