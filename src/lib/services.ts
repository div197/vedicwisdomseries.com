import { siteConfig } from '../siteConfig';

// Define interface for service category data
interface ServiceCategoryData {
  label: string;
  href: string;
  description?: string;
  image?: string;
  classes?: string;
  gender?: string;
}

/**
 * Retrieves service category data based on its slug.
 * The slug is extracted from the href in siteConfig.navigation.footer.categories.
 * 
 * @param slug The service category slug (e.g., 'web-development')
 * @returns The service category data object or null if not found.
 */
export const getServiceCategoryBySlug = (slug: string): ServiceCategoryData | null => {
  if (!slug) {
    return null;
  }

  const category = siteConfig.navigation.footer.categories.find(c => {
    // Extract slug from the href
    try {
      const url = new URL(c.href, 'http://localhost');
      const pathParts = url.pathname.split('/');
      const hashParts = url.hash.split('#');
      
      // Check if slug matches path or hash
      return pathParts.includes(slug) || hashParts.includes(slug) || url.searchParams.get('category') === slug;
    } catch (e) {
      // Fallback for simple string matching
      return c.href.includes(slug);
    }
  });

  return category ? {
    label: category.label,
    href: category.href,
    description: category.description,
    image: category.image,
    classes: category.classes,
    gender: category.gender
  } : null;
};

/**
 * Retrieves all service category slugs.
 * 
 * @returns An array of service category slugs.
 */
export const getAllServiceCategorySlugs = (): string[] => {
  return siteConfig.navigation.footer.categories.map(c => {
    try {
      const url = new URL(c.href, 'http://localhost');
      const pathParts = url.pathname.split('/');
      const hashParts = url.hash.split('#');
      
      // Return the last meaningful part of the path or hash
      return hashParts[1] || pathParts[pathParts.length - 1] || '';
    } catch (e) {
      // Fallback extraction
      const parts = c.href.split(/[/#=]/);
      return parts[parts.length - 1] || '';
    }
  }).filter(slug => slug !== '');
};

/**
 * Get social media links for a specific service category
 * @param categorySlug - The slug of the service category (e.g., 'web-development')
 * @returns Array of social media links for the category
 */
export function getServiceCategorySocialLinks(categorySlug: string) {
  const category = siteConfig.navigation.footer.categories.find(
    cat => cat.href.includes(categorySlug)
  );
  return category?.socialLinks || [];
}

/**
 * Format slug to readable title
 * @param slug - The slug to format (e.g., 'web-development')
 * @returns Formatted title (e.g., 'Web Development')
 */
export function formatSlugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 