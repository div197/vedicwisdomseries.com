export interface SocialLink {
  label: string;
  href: string;
  icon?: React.ElementType; // Optional icon component
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CategoryLink {
  label: string;
  href: string;
  image: string; // Image path for category card
  description: string; // Description for category card
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  headerLogoPath: string;
  footerLogoPath: string;
  faviconPath: string;
  defaultAuthor: string;
  defaultAuthorFallbackImagePath: string;
  blogTitle: string;
  blogDescription: string;
  categoriesPageTitle: string;
  categoriesPageDescription: string;
  contactPageTitle: string;
  contactPageDescription: string;
  contactEmail: string;
  contactPhone?: string; // Optional
  contactAddress?: string; // Optional
  navLinks: NavLink[];
  footerQuickLinks: NavLink[];
  footerMainCategories: CategoryLink[];
  socialLinks: SocialLink[];
  copyrightText?: string; // Optional override
  defaultOgImage: string; // Added for Open Graph
  logoPath: string; // Added generic logo path for schema
} 