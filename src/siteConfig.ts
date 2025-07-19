import { IconType } from 'react-icons';
import { FaInstagram, FaFacebookF, FaYoutube, FaGithub, FaEnvelope } from 'react-icons/fa';
import { ServiceSocialLink } from './types/services';

// Theme Configuration Interface
export interface ThemeConfig {
  // Brand Colors
  colors: {
    primary: string;      // Main brand color (Deep Blue)
    secondary: string;    // Secondary brand color (Crimson Red)
    tertiary: string;     // Accent color (Buttercup)
    success: string;      // Success states
    warning: string;      // Warning states
    error: string;        // Error states
  };
  
  // Layout Colors
  layout: {
    header: {
      background: {
        light: string;
        dark: string;
      };
      text: {
        light: string;
        dark: string;
      };
      logo: {
        height: {
          mobile: string;
          desktop: string;
        };
        filter?: string; // CSS filter for logo (e.g., for dark backgrounds)
      };
    };
    footer: {
      background: {
        light: string;
        dark: string;
      };
      text: {
        light: string;
        dark: string;
      };
      logo: {
        height: {
          mobile: string;
          desktop: string;
        };
        filter?: string;
      };
    };
    page: {
      background: {
        light: string;
        dark: string;
      };
    };
  };
  
  // Typography
  typography: {
    fonts: {
      heading: string;
      body: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeights: {
      tight: string;
      normal: string;
      relaxed: string;
    };
    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
    };
  };
  
  // Spacing & Layout
  spacing: {
    container: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    section: {
      mobile: string;
      desktop: string;
    };
  };
  
  // Border Radius
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  // Shadows
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

  // Layout Configuration Interface
export interface LayoutConfig {
  header: {
    sticky: boolean;
    height: {
      mobile: string;
      desktop: string;
    };
    showLogo: boolean;
    showNavigation: boolean;
    mobileBreakpoint: string;
    padding: {
      vertical: {
        mobile: string;
        desktop: string;
      };
      horizontal: {
        mobile: string;
        desktop: string;
      };
    };
    navigation: {
      spacing: {
        mobile: string;
        desktop: string;
      };
      fontSize: {
        mobile: string;
        desktop: string;
      };
      fontWeight: string;
      padding: {
        mobile: string;
        desktop: string;
      };
    };
    topBar: {
      enabled: boolean;
      background: string;
      textColor: string;
      height: {
        mobile: string;
        desktop: string;
      };
      padding: {
        mobile: string;
        desktop: string;
      };
      phoneNumbers: Array<{
        label: string;
        number: string;
        flagUrl: string;
        countryCode: string;
        displayBreakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl';
        enabled: boolean;
      }>;
      emailAddress: {
        label: string;
        address: string;
        enabled: boolean;
      };
      actionButtons: {
        primary: {
          text: string;
          icon: string;
          href: string;
          enabled: boolean;
          variant: 'solid' | 'outline' | 'ghost';
          size: 'xs' | 'sm' | 'md' | 'lg';
          colorScheme: string;
        };
        secondary: {
          text: string;
          icon: string;
          href: string;
          enabled: boolean;
          variant: 'solid' | 'outline' | 'ghost';
          size: 'xs' | 'sm' | 'md' | 'lg';
          colorScheme: string;
        };
      };
      styling: {
        phoneBoxBackground: string;
        phoneBoxHoverBackground: string;
        phoneBoxBorderColor: string;
        phoneBoxBorderRadius: string;
        phoneBoxMinHeight: string;
        buttonBorderRadius: string;
        buttonMinWidth: {
          mobile: string;
          desktop: string;
        };
        buttonHeight: string;
        buttonSpacing: {
          mobile: string;
          desktop: string;
        };
      };
    };
    mainHeader: {
      transparentOnHero: boolean;
      blurEffect: boolean;
      borderOnScroll: boolean;
      shadowOnScroll: boolean;
      logo: {
        height: {
          mobile: string;
          desktop: string;
        };
        hoverScale: number;
      };
      mobileMenu: {
        drawerSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
        headerText: string;
        headerIcon: string;
        showContactInfo: boolean;
        actionButtons: Array<{
          text: string;
          icon: string;
          href: string;
          variant: 'solid' | 'outline' | 'ghost';
          colorScheme: string;
          enabled: boolean;
        }>;
      };
    };
  };
      footer: {
      showLogo: boolean;
      showSocialLinks: boolean;
      showQuickLinks: boolean;
      showContactInfo: boolean;
      showAboutSection: boolean;
      columns: {
        mobile: number;
        tablet: number;
        desktop: number;
      };
      socialMedia: {
        showOfficialColors: boolean;
        iconSize: {
          mobile: string;
          desktop: string;
        };
        spacing: {
          mobile: string;
          desktop: string;
        };
      };
      menus: {
        menu1: {
          title: string;
          enabled: boolean;
          links: Array<{ label: string; href: string; icon?: string }>;
        };
        menu2: {
          title: string;
          enabled: boolean;
          links: Array<{ label: string; href: string; icon?: string }>;
        };
      };
      styling: {
        cardSpacing: {
          mobile: string;
          desktop: string;
        };
        cardPadding: {
          mobile: string;
          desktop: string;
        };
        borderRadius: string;
        backgroundOpacity: number;
      };
      typography: {
        headings: {
          fontSize: {
            mobile: string;
            desktop: string;
          };
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        body: {
          fontSize: {
            mobile: string;
            desktop: string;
          };
          fontWeight: string;
          lineHeight: string;
          letterSpacing: string;
        };
        links: {
          fontSize: {
            mobile: string;
            desktop: string;
          };
          fontWeight: string;
          lineHeight: string;
        };
        copyright: {
          fontSize: {
            mobile: string;
            desktop: string;
          };
          fontWeight: string;
        };
      };
      colors: {
        primary: string;
        secondary: string;
        accent: string;
        muted: string;
        border: string;
        cardBackground: string;
      };
      spacing: {
        sectionPadding: {
          mobile: string;
          desktop: string;
        };
        bottomPadding: {
          mobile: string;
          desktop: string;
        };
      };
    };
  navigation: {
    style: 'horizontal' | 'vertical' | 'dropdown';
    alignment: 'left' | 'center' | 'right';
    showIcons: boolean;
    scrollToTop: {
      enabled: boolean;
      threshold: number;
      size: 'sm' | 'md' | 'lg';
      position: {
        bottom: string;
        right: string;
      };
      showPulse: boolean;
      duration: number;
      easing: 'linear' | 'easeInOut' | 'easeOut';
    };
  };
}

// Universal CTA Configuration Interface - 0th Law of Thermodynamics
export interface UniversalCTAConfig {
  primary: {
    text: string;
    href: string;
    description: string;
    icon?: string;
    colorScheme: string;
    size: 'sm' | 'md' | 'lg';
    variant: 'solid' | 'outline' | 'ghost';
  };
  secondary?: {
    text: string;
    href: string;
    description: string;
    icon?: string;
    colorScheme: string;
    size: 'sm' | 'md' | 'lg';
    variant: 'solid' | 'outline' | 'ghost';
  };
  global: {
    enabled: boolean;
    showOnAllPages: boolean;
    position: 'header' | 'footer' | 'floating' | 'inline';
    priority: 'high' | 'medium' | 'low';
  };
}

// Content Configuration Interface
export interface ContentConfig {
  homepage: {
    showVideo: boolean;
    videoUrl?: string;
    showBanner: boolean;
    bannerImage?: string;
    showHeroSection: boolean;
    showServiceCategories: boolean;
    showFeatures: boolean;
    showGallery: boolean;
    showResults: boolean;
    showCTA: boolean;
  };
  gallery: {
    imagesPerPage: number;
    imageAspectRatio: string;
    showCategories: boolean;
  };
  contact: {
    showMap: boolean;
    showFAQ: boolean;
    showContactForm: boolean;
  };
  // Universal CTA System - Vasudevam Kutumbakam
  universalCTA: UniversalCTAConfig;
}

export interface SiteConfig {
  // Basic Site Information
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  defaultMetaDescription: string;
  defaultOgImage: string;
  
  // Branding Assets
  assets: {
    logo: {
      main: string;           // Primary logo
      header: string;         // Header logo (can be different)
      footer: string;         // Footer logo (can be different)
      favicon: string;        // Favicon
      ogImage: string;        // Open Graph image
    };
    images: {
      hero: string;
      banner: string;
      placeholder: string;
    };
  };
  
  // Theme Configuration
  theme: ThemeConfig;
  
  // Layout Configuration
  layout: LayoutConfig;
  
  // Content Configuration
  content: ContentConfig;
  
  // Contact Information
  contact: {
    address: string;
    phones: Array<{ label: string; number: string }>;
    email?: string;
    googleMapsLink?: string;
    socialLinks: Array<{ 
      label: string; 
      href: string; 
      icon: IconType; 
      enabled: boolean;
      color?: string;
      hoverColor?: string;
    }>;
  };
  
  // Navigation & Links
  navigation: {
    main: Array<{ label: string; href: string; icon?: IconType }>;
    footer: {
      quickLinks: Array<{ label: string; href: string }>;
      categories: Array<{ 
        label: string; 
        href: string; 
        image: string; 
        description: string; 
        classes: string; 
        gender: string; 
        socialLinks?: ServiceSocialLink[] 
      }>;
    };
  };
  
  // Content Settings
  blog: {
    title: string;
    description: string;
  };
  
  // Legal & Copyright
  legal: {
    copyrightText: string;
    footerDescription: string;
  };
  
  // Page Configurations
  pages: {
    categories: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
    };
  };
  
  // Author Information
  author: {
    name: string;
    image: string;
    fallbackImage: string;
  };

}

export const siteConfig: SiteConfig = {
  // --- Basic Site Information ---
  siteName: "Vedic Wisdom Series",
  siteDescription: "MIT Scientist Discovers Ancient Code That Proves Your Soul's Quantum Nature. Transform Your Reality in 30 Days with Dr. Nischaya Nagori's Revolutionary Vedic Teachings Where Einstein Meets the Rishis.",
  siteUrl: "https://vedicwisdomseries.com",
  defaultMetaDescription: "Experience authentic Vedic education with Dr. Nischaya Nagori. Weekend Discourses, Sanskrit Chanting Classes, Teacher Training Certification, and Spiritual Lifestyle Programs. Where quantum physics meets ancient wisdom.",
  defaultOgImage: "/assets/images/vedic-wisdom-og.jpg",
  
  // --- Branding Assets ---
  assets: {
    logo: {
      main: "/assets/logos/vedic-wisdom-logo.svg",         // Primary logo
      header: "/assets/logos/vedic-wisdom-logo.svg",       // Header logo
      footer: "/assets/logos/vedic-wisdom-logo.svg",       // Footer logo
      favicon: "/assets/logos/vedic-wisdom-favicon.png",   // Favicon
      ogImage: "/assets/images/vedic-wisdom-og.jpg",       // Open Graph image
    },
    images: {
      hero: "/assets/images/vedic-wisdom-hero.jpg",
      banner: "/assets/images/spiritual-banner.jpg",
      placeholder: "/assets/logos/vedic-wisdom-logo.svg",
    },
  },
  
  // --- Theme Configuration ---
  theme: {
    colors: {
      primary: "#FF9933",      // Deep Saffron - Knowledge & Wisdom
      secondary: "#1E90FF",    // Serene Blue - Divine Action & Flow
      tertiary: "#F2DB49",     // Sacred Gold - Spiritual Illumination
      success: "#10b981",      // Modern Success Green
      warning: "#f59e0b",      // Modern Warning Amber
      error: "#ef4444",        // Modern Error Red
    },
    layout: {
      header: {
        background: {
          light: "rgba(255, 255, 255, 0.95)",  // Translucent white for light mode
          dark: "rgba(26, 32, 44, 0.95)",       // Translucent dark for dark mode
        },
        text: {
          light: "#1a202c",      // Dark text for light mode
          dark: "#ffffff",       // White text for dark mode
        },
        logo: {
          height: {
            mobile: "40px",
            desktop: "48px",
          },
          filter: "none",
        },
      },
      footer: {
        background: {
          light: "#1a202c",      // Deep spiritual dark for footer
          dark: "#0d1117",       // Even deeper dark for dark mode
        },
        text: {
          light: "#ffffff",      // White text on dark footer
          dark: "#ffffff",       // White text on dark footer
        },
        logo: {
          height: {
            mobile: "40px",
            desktop: "50px",
          },
          filter: "none", // Logo designed for dark backgrounds
        },
      },
      page: {
        background: {
          light: "#fef6e4",      // Warm spiritual cream
          dark: "#1a202c",       // Deep spiritual dark
        },
      },
    },
    typography: {
      fonts: {
        heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",  // Sacred heading font
        body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",  // Clear reading font
      },
      fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
      fontWeights: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeights: {
        tight: "1.25",
        normal: "1.5",
        relaxed: "1.75",
      },
      letterSpacing: {
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
      },
    },
    spacing: {
      container: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      section: {
        mobile: "3rem",
        desktop: "5rem",
      },
    },
    borderRadius: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  },
  
  // --- Layout Configuration ---
  layout: {
    header: {
      sticky: true,
      height: {
        mobile: "auto",
        desktop: "auto",
      },
      showLogo: true,
      showNavigation: true,
      mobileBreakpoint: "md",
      padding: {
        vertical: {
          mobile: "1rem",
          desktop: "1.5rem",
        },
        horizontal: {
          mobile: "1rem",
          desktop: "2rem",
        },
      },
      navigation: {
        spacing: {
          mobile: "0.25rem",
          desktop: "0.5rem",
        },
        fontSize: {
          mobile: "0.875rem",
          desktop: "0.875rem",
        },
        fontWeight: "medium",
        padding: {
          mobile: "0.5rem 0.75rem",
          desktop: "0.5rem 1rem",
        },
      },
      topBar: {
        enabled: true,
        background: "linear-gradient(135deg, #FF9933 0%, #1E90FF 100%)",
        textColor: "#ffffff",
        height: {
          mobile: "auto",
          desktop: "auto",
        },
        padding: {
          mobile: "0.5rem",
          desktop: "0.5rem",
        },
        phoneNumbers: [
          {
            label: "Phone",
            number: "+91-961-000-1234",
            flagUrl: "",
            countryCode: "PHONE",
            displayBreakpoint: "base",
            enabled: true,
          },
        ],
        emailAddress: {
          label: "Email",
          address: "info@vedicwisdomseries.com",
          enabled: true,
        },
        actionButtons: {
          primary: {
            text: "",
            icon: "",
            href: "",
            enabled: false,
            variant: "solid",
            size: "sm",
            colorScheme: "yellow",
          },
          secondary: {
            text: "",
            icon: "",
            href: "",
            enabled: false,
            variant: "outline",
            size: "sm",
            colorScheme: "whiteAlpha",
          },
        },
        styling: {
          phoneBoxBackground: "rgba(255, 255, 255, 0.1)",
          phoneBoxHoverBackground: "kd.surfaceElevated",
          phoneBoxBorderColor: "kd.border",
          phoneBoxBorderRadius: "md",
          phoneBoxMinHeight: "36px",
          buttonBorderRadius: "full",
          buttonMinWidth: {
            mobile: "120px",
            desktop: "auto",
          },
          buttonHeight: "36px",
          buttonSpacing: {
            mobile: "0.5rem",
            desktop: "0.75rem",
          },
        },
      },
      mainHeader: {
        transparentOnHero: true,
        blurEffect: true,
        borderOnScroll: true,
        shadowOnScroll: true,
        logo: {
          height: {
            mobile: "40px",
            desktop: "48px",
          },
          hoverScale: 1.02,
        },
        mobileMenu: {
          drawerSize: "sm",
          headerText: "🕉️ Vedic Wisdom Series",
          headerIcon: "🕉️",
          showContactInfo: true,
          actionButtons: [
            {
              text: "Explore Teachings",
              icon: "🕉️",
              href: "/teachings",
              variant: "solid",
              colorScheme: "orange",
              enabled: true,
            },
            {
              text: "Join Discourse",
              icon: "📖",
              href: "/contact",
              variant: "outline",
              colorScheme: "blue",
              enabled: true,
            },
          ],
        },
      },
    },
    footer: {
      showLogo: false,
      showSocialLinks: true,
      showQuickLinks: true,
      showContactInfo: true,
      showAboutSection: true,
      columns: {
        mobile: 1,
        tablet: 2,
        desktop: 3,
      },
      socialMedia: {
        showOfficialColors: true,
        iconSize: {
          mobile: "20px",
          desktop: "22px",
        },
        spacing: {
          mobile: "12px",
          desktop: "16px",
        },
      },
      menus: {
        menu1: {
          title: "Divine Offerings",
          enabled: true,
          links: [
            { label: "Weekend Discourses", href: "/teachings/discourses" },
            { label: "Chanting Classes", href: "/teachings/chanting" },
            { label: "Teacher Training", href: "/teachings/teacher-training" },
            { label: "Lifestyle Experiences", href: "/teachings/lifestyle" },
            { label: "About Dr. Nischaya", href: "/about" },
          ],
        },
        menu2: {
          title: "",
          enabled: false,
          links: [],
        },
      },
      styling: {
        cardSpacing: {
          mobile: "24px",
          desktop: "32px",
        },
        cardPadding: {
          mobile: "24px",
          desktop: "32px",
        },
        borderRadius: "16px",
        backgroundOpacity: 0.08,
      },
      typography: {
        headings: {
          fontSize: {
            mobile: "1.25rem",
            desktop: "1.375rem",
          },
          fontWeight: "bold",
          lineHeight: "1.25",
          letterSpacing: "-0.025em",
        },
        body: {
          fontSize: {
            mobile: "1rem",
            desktop: "1rem",
          },
          fontWeight: "medium",
          lineHeight: "1.75",
          letterSpacing: "0",
        },
        links: {
          fontSize: {
            mobile: "1rem",
            desktop: "1rem",
          },
          fontWeight: "medium",
          lineHeight: "1.5",
        },
        copyright: {
          fontSize: {
            mobile: "0.75rem",
            desktop: "0.875rem",
          },
          fontWeight: "medium",
        },
      },
      colors: {
        primary: "#ffffff",     // Pure white for footer text
        secondary: "#e2e8f0",   // Light gray for secondary text
        accent: "#F2DB49",      // Sacred Gold for accents
        muted: "#a0aec0",       // Muted gray
        border: "rgba(255, 255, 255, 0.15)",  // Subtle white border
        cardBackground: "rgba(255, 255, 255, 0.05)",  // Subtle white background
      },
      spacing: {
        sectionPadding: {
          mobile: "4rem",
          desktop: "5rem",
        },
        bottomPadding: {
          mobile: "1.5rem",
          desktop: "2rem",
        },
      },
    },
    navigation: {
      style: "horizontal",
      alignment: "right",
      showIcons: false,
      scrollToTop: {
        enabled: true,
        threshold: 200,
        size: 'md',
        position: {
          bottom: '1rem',
          right: '1rem',
        },
        showPulse: true,
        duration: 500,
        easing: 'easeInOut',
      },
    },
  },
  
  // --- Content Configuration ---
  content: {
    homepage: {
      showVideo: true,
      videoUrl: "https://www.youtube.com/embed/vedic-wisdom-intro", // Dr. Nischaya Introduction
      showBanner: true,
      bannerImage: "/assets/images/spiritual-banner.jpg",
      showHeroSection: true,
      showServiceCategories: true,
      showFeatures: true,
      showGallery: true,
      showResults: true,
      showCTA: true,
    },
    gallery: {
      imagesPerPage: 12,
      imageAspectRatio: "4:3",  // Better for industrial product photography
      showCategories: true,
    },
    contact: {
      showMap: true,
      showFAQ: true,
      showContactForm: true,
    },
    // Universal CTA System - Global Spiritual Education
    universalCTA: {
      primary: {
        text: "🕉️ Explore Divine Offerings",
        href: "/teachings",
        description: "Discover our Weekend Discourses, Chanting Classes, Teacher Training, and Lifestyle Experiences",
        icon: "FaOm",
        colorScheme: "orange",
        size: "lg",
        variant: "solid"
      },
      secondary: {
        text: "📖 Begin Your Journey",
        href: "/contact",
        description: "Connect with Dr. Nischaya Nagori and start your spiritual transformation",
        icon: "FaBook",
        colorScheme: "blue",
        size: "md",
        variant: "outline"
      },
      global: {
        enabled: true,
        showOnAllPages: true,
        position: "inline",
        priority: "high"
      }
    }
  },
  
  // --- Contact Information ---
  contact: {
    address: "Vedic Wisdom Series<br>Ancient Sound, Modern Awakening<br>Dr. Nischaya Nagori<br>Global Spiritual Education Platform<br>Serving Seekers Worldwide<br>Email: info@vedicwisdomseries.com",
    phones: [
      { label: "Inquiries", number: "+91-961-000-1234" },
      { label: "Support", number: "+91-961-000-1234" }
    ],
    email: "info@vedicwisdomseries.com",
    googleMapsLink: "https://maps.google.com/?q=India", // Global reach
    socialLinks: [
      { 
        label: "Spiritual Discourses", 
        href: "https://youtube.com/@vedicwisdomseries", 
        icon: FaYoutube, 
        enabled: true,
        color: "#FF0000",
        hoverColor: "#E60000"
      },
      { 
        label: "Community",
        href: "https://facebook.com/vedicwisdomseries",
        icon: FaFacebookF,
        enabled: true,
        color: "#1877F2",
        hoverColor: "#166FE5"
      },
      { 
        label: "Daily Wisdom",
        href: "https://instagram.com/vedicwisdomseries",
        icon: FaInstagram,
        enabled: true,
        color: "#E4405F",
        hoverColor: "#d73647"
      },
      { 
        label: "Open Source",
        href: "https://github.com/div197/vedicwisdomseries",
        icon: FaGithub,
        enabled: true,
        color: "#333333",
        hoverColor: "#24292e"
      },
      { 
        label: "Contact Us",
        href: "mailto:info@vedicwisdomseries.com",
        icon: FaEnvelope,
        enabled: true,
        color: "#34495e",
        hoverColor: "#2c3e50"
      }
    ]
  },
  
  // --- Navigation & Links ---
  navigation: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Teachings', href: '/teachings' },
      { label: 'Schedule', href: '/schedule' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' }
    ],
    footer: {
      quickLinks: [
        { label: 'Weekend Discourses', href: '/teachings/discourses' },
        { label: 'Chanting Classes', href: '/teachings/chanting' },
        { label: 'Teacher Training', href: '/teachings/teacher-training' },
        { label: 'Lifestyle Experiences', href: '/teachings/lifestyle' },
        { label: 'Dr. Nischaya Nagori', href: '/about' },
        { label: 'Join Our Community', href: '/contact' }
      ],
      categories: [
        {
          label: 'Weekend Discourses', 
          href: '/teachings/discourses',
          image: '/assets/images/weekend-discourses.jpg',
          description: 'Deep Vedic philosophical discussions with Dr. Nischaya Nagori',
          classes: 'Saturday-Sunday Sessions',
          gender: 'Spiritual',
          socialLinks: []
        },
        {
          label: 'Chanting Classes', 
          href: '/teachings/chanting',
          image: '/assets/images/chanting-classes.jpg',
          description: 'Learn authentic Sanskrit pronunciation and sacred mantras',
          classes: 'Mon-Tue-Thu Classes',
          gender: 'Spiritual',
          socialLinks: []
        },
        {
          label: 'Teacher Training', 
          href: '/teachings/teacher-training',
          image: '/assets/images/teacher-training.jpg',
          description: 'Comprehensive certification for authentic Vedic transmission',
          classes: '15 Lecture Program',
          gender: 'Spiritual',
          socialLinks: []
        },
        { 
          label: 'Lifestyle Experiences', 
          href: '/teachings/lifestyle',
          image: '/assets/images/lifestyle-experiences.jpg',
          description: 'Customized spiritual retreats and holistic Vedic programs',
          classes: 'Personalized Programs',
          gender: 'Spiritual',
          socialLinks: []
        }
      ]
    }
  },
  
  // --- Content Settings ---
  blog: {
    title: "Spiritual Wisdom & Ancient Knowledge",
    description: "Explore profound Vedic teachings, spiritual insights, and transformative wisdom from Dr. Nischaya Nagori bridging ancient knowledge with modern understanding"
  },
  
  // --- Legal & Copyright ---
  legal: {
    copyrightText: "© 2025 Vedic Wisdom Series. All Rights Reserved.",
    footerDescription: "Ancient Sound, Modern Awakening. Revolutionary Vedic education with Dr. Nischaya Nagori. Weekend Discourses, Chanting Classes, Teacher Training, and Spiritual Lifestyle Programs for global seekers."
  },
  
  // --- Page Configurations ---
  pages: {
    categories: {
      title: "Divine Spiritual Offerings",
      description: "Explore our transformative Vedic education programs designed for modern seekers"
    },
    contact: {
      title: "Begin Your Spiritual Journey",
      description: "Connect with Dr. Nischaya Nagori and join our global community of spiritual seekers"
    }
  },
  
  // --- Author Information ---
  author: {
    name: "Dr. Nischaya Nagori",
    image: "/assets/images/dr-nischaya-nagori.jpg",
    fallbackImage: "/assets/images/vedic-wisdom-logo.jpg"
  }


}; 