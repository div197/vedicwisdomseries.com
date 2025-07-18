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
  siteName: "Millstone India",
  siteDescription: "The Foundation of Your Finish - Expert industrial craftsmen providing superior abrasives, minerals, machinery, and technical expertise. A unit of Sharad Enterprises, serving global industries with ISO 9001:2015 certified excellence.",
  siteUrl: "https://millstoneindia.com",
  defaultMetaDescription: "Premium industrial materials, abrasives, and machinery from Millstone India - The Foundation of Your Finish. ISO 9001:2015 certified expert craftsmen serving 20+ countries with superior quality and technical precision.",
  defaultOgImage: "/assets/images/millstone-india-og.jpg",
  
  // --- Branding Assets ---
  assets: {
    logo: {
          main: "/assets/logos/millstone-logo.webp",         // Primary logo
    header: "/assets/logos/millstone-logo.webp",       // Header logo (can be different)
    footer: "/assets/logos/millstone-logo.webp",       // Footer logo (can be different)
      favicon: "/assets/logos/millstone-logo.webp",        // Favicon (same as logo)
      ogImage: "/assets/images/millstone-india-og.jpg",    // Open Graph image
    },
    images: {
      hero: "/assets/images/industrial-hero.jpg",
      banner: "/assets/images/industrial-hero.jpg",
      placeholder: "/assets/logos/millstone-logo.webp",
    },
  },
  
  // --- Theme Configuration ---
  theme: {
    colors: {
      primary: "#242424",      // Millstone India Bedrock Dark (Primary Background)
      secondary: "#555353",    // Millstone India Shadowed Steel (Secondary Surface)
      tertiary: "#E6B800",     // Refined Industrial Gold (Action Color)
      success: "#10b981",      // Modern Success Green
      warning: "#f59e0b",      // Modern Warning Amber
      error: "#ef4444",        // Modern Error Red
    },
    layout: {
      header: {
        background: {
          light: "#f7f0f2",      // Millstone India Refined Powder (Light Background)
          dark: "#242424",       // Millstone India Bedrock Dark
        },
        text: {
          light: "#242424",      // Millstone India Bedrock Dark for text
          dark: "#f7f0f2",       // Millstone India Refined Powder for dark mode
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
          light: "#242424",      // Millstone India Bedrock Dark for footer
          dark: "#242424",
        },
        text: {
          light: "#f7f0f2",      // Millstone India Refined Powder text
          dark: "#f7f0f2",
        },
        logo: {
          height: {
            mobile: "40px",
            desktop: "50px",
          },
          filter: "brightness(0) invert(1)", // Make logo white for dark footer
        },
      },
      page: {
        background: {
          light: "#f7f0f2",      // Millstone India Refined Powder
          dark: "#242424",       // Millstone India Bedrock Dark
        },
      },
    },
    typography: {
      fonts: {
        heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",  // The Voice of Modern Industry
        body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",  // The Voice of Clarity
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
        background: "#242424",
        textColor: "#f7f0f2",
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
            number: "+91 93586 55903",
            flagUrl: "",
            countryCode: "PHONE",
            displayBreakpoint: "base",
            enabled: true,
          },
        ],
        emailAddress: {
          label: "Email",
          address: "info@millstoneindia.com",
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
          phoneBoxBackground: "black",
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
          headerText: "🏭 Millstone India",
          headerIcon: "🏭",
          showContactInfo: true,
          actionButtons: [
            {
              text: "Product Catalog",
              icon: "📊",
              href: "/products",
              variant: "solid",
              colorScheme: "yellow",
              enabled: true,
            },
            {
              text: "Request Quote",
              icon: "💼",
              href: "/contact",
              variant: "outline",
              colorScheme: "gray",
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
          title: "Expert Domains",
          enabled: true,
          links: [
            { label: "Abrasives & Binders", href: "/products/abrasives" },
            { label: "Industrial Minerals", href: "/products/minerals" },
            { label: "Flour Mill Machinery", href: "/products/machinery" },
            { label: "Hardware & Components", href: "/products/hardware" },
            { label: "Technical Guides", href: "/knowledge-center" },
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
        primary: "#f7f0ee",     // Millstone India Light Background
        secondary: "#f7f0ee",   // Millstone India Light Background
        accent: "#E6B800",      // Refined Industrial Gold for footer accents
        muted: "#545351",       // Millstone India Industrial Steel
        border: "rgba(247, 240, 238, 0.25)",  // Light Background with transparency
        cardBackground: "rgba(247, 240, 238, 0.08)",  // Light Background with transparency
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
      videoUrl: "https://www.youtube.com/embed/industrial-process-video", // Industrial Manufacturing Excellence
      showBanner: true,
      bannerImage: "/assets/images/industrial-hero.jpg",
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
    // Universal CTA System - Global Industrial Excellence
    universalCTA: {
      primary: {
        text: "🏭 Request Expert Consultation",
        href: "/contact",
        description: "Speak with our technical experts for customized industrial solutions",
        icon: "FaIndustry",
        colorScheme: "yellow",
        size: "lg",
        variant: "solid"
      },
      secondary: {
        text: "📊 Download Product Catalog",
        href: "/products",
        description: "Explore our comprehensive range of industrial materials and machinery",
        icon: "FaDownload",
        colorScheme: "gray",
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
    address: "Millstone India<br>A Unit of Sharad Enterprises<br>J-1/74, RIICO Industrial Area<br>Sangariya, Jodhpur, Rajasthan - 342001<br>Government Recognized Export House<br>ISO 9001:2015 Certified<br>GST: 08CDZPM1573Q1ZD",
    phones: [
      { label: "Export Inquiries", number: "+91 93586 55903" },
      { label: "Technical Support", number: "+91 93586 55903" }
  ],
    email: "info@millstoneindia.com",
    googleMapsLink: "https://maps.google.com/?q=Jodhpur+Rajasthan+India", // Industrial facility location
    socialLinks: [
      { 
        label: "Industrial Processes", 
        href: "https://youtube.com/@millstoneindia", 
        icon: FaYoutube, 
        enabled: true,
        color: "#FF0000",
        hoverColor: "#E60000"
      },
      { 
        label: "Industry Network",
        href: "https://facebook.com/millstoneindia",
        icon: FaFacebookF,
        enabled: true,
        color: "#1877F2",
        hoverColor: "#166FE5"
      },
      { 
        label: "Product Showcase",
        href: "https://instagram.com/millstoneindia",
        icon: FaInstagram,
        enabled: true,
        color: "#E4405F",
        hoverColor: "#d73647"
      },
      { 
        label: "Technical Repository",
        href: "https://github.com/div197/millstoneindia",
        icon: FaGithub,
        enabled: true,
        color: "#333333",
        hoverColor: "#24292e"
      },
      { 
        label: "Business Correspondence",
        href: "mailto:info@millstoneindia.com",
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
      { label: 'Products', href: '/products' },
      { label: 'Quality', href: '/quality' },
      { label: 'Knowledge Center', href: '/knowledge-center' },
      { label: 'Contact', href: '/contact' }
  ],
    footer: {
      quickLinks: [
        { label: 'Product Catalog', href: '/products' },
        { label: 'Technical Expertise', href: '/knowledge-center' },
        { label: 'Quality Assurance', href: '/quality' },
        { label: 'Global Exports', href: '/exports' },
        { label: 'ISO Certification', href: '/quality' },
        { label: 'Expert Consultation', href: '/contact' }
  ],
      categories: [
    {
          label: 'Abrasives & Binders', 
          href: '/products/abrasives',
          image: '/assets/images/abrasives.jpg',
          description: 'Silicon Carbide, Emery Grain, Oxychloride Binder, Carbon Black Oxide',
          classes: 'The Agents of Transformation',
          gender: 'Industrial',
          socialLinks: []
    },
    {
          label: 'Industrial Minerals', 
          href: '/products/minerals',
          image: '/assets/images/minerals.jpg',
          description: 'Caustic Calcined Magnesite, Dolomite Powder, Bentonite, China Clay',
          classes: 'The Essence of the Earth',
          gender: 'Industrial',
          socialLinks: []
    },
    {
          label: 'Flour Mill Machinery', 
          href: '/products/machinery',
          image: '/assets/images/machinery.jpg',
          description: 'Aata Chakki, Flour Mill Stones, precision grinding equipment',
          classes: 'The Engines of Industry',
          gender: 'Industrial',
          socialLinks: []
        },
        { 
          label: 'Hardware & Components', 
          href: '/products/hardware',
          image: '/assets/images/hardware.jpg',
          description: 'Bolts, Nuts, Cast Iron Flanges, M.S. Strip industrial components',
          classes: 'The Unseen Strength',
          gender: 'Industrial',
          socialLinks: []
        }
      ]
    }
  },
  
  // --- Content Settings ---
  blog: {
    title: "Industrial Insights & Technical Excellence",
    description: "Expert guidance, technical articles, and industry knowledge from ISO 9001:2015 certified industrial craftsmen serving global markets"
  },
  
  // --- Legal & Copyright ---
  legal: {
    copyrightText: "© 2025 Millstone India (A unit of Sharad Enterprises). All Rights Reserved.",
    footerDescription: "Expert industrial craftsmen providing superior abrasives, minerals, machinery, and technical expertise. Government Recognized Export House serving 20+ countries with ISO 9001:2015 certified excellence."
  },
  
  // --- Page Configurations ---
  pages: {
    categories: {
      title: "Industrial Product Categories",
      description: "Explore our comprehensive range of industrial materials, machinery, and expert technical solutions"
    },
    contact: {
      title: "Connect with Industrial Experts",
      description: "Reach out for technical consultation, product inquiries, or partnership opportunities"
    }
  },
  
  // --- Author Information ---
  author: {
    name: "Millstone India Expert Team",
    image: "/assets/images/industrial-team.jpg",
    fallbackImage: "/assets/images/millstone-logo.jpg"
  }


}; 