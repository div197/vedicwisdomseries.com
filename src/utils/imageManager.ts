// 🏭 MILLSTONE INDIA IMAGE MANAGEMENT SYSTEM
// Ultra-Premium Industrial Image Fetching & Management

interface GoogleImageSearchResult {
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  image: {
    contextLink: string;
    height: number;
    width: number;
    byteSize: number;
    thumbnailLink: string;
    thumbnailHeight: number;
    thumbnailWidth: number;
  };
}

interface ImageSearchConfig {
  searchEngineId: string;
  apiKey: string;
  geminiApiKey: string;
}

// Configuration for Google Custom Search API
const IMAGE_CONFIG: ImageSearchConfig = {
  searchEngineId: "d0941023f630c4bf2",
  apiKey: "AIzaSyBl5h5a9MqsMAh4vrXNUZwxfnHENZhHtsk",
  geminiApiKey: "AIzaSyDpAZZs2agYa77ElQ1y9sqys8LtcBAG1_U"
};

// Industrial image categories and search terms
export const INDUSTRIAL_IMAGE_CATEGORIES = {
  abrasives: [
    "silicon carbide abrasive industrial",
    "emery grain abrasive powder",
    "aluminum oxide abrasive wheel",
    "grinding wheel industrial abrasive",
    "abrasive blasting media industrial"
  ],
  minerals: [
    "caustic calcined magnesite industrial",
    "dolomite mineral industrial grade",
    "bentonite clay industrial mineral",
    "china clay kaolin industrial",
    "industrial minerals processing"
  ],
  machinery: [
    "flour mill machinery industrial",
    "aata chakki flour mill machine",
    "grain processing equipment industrial",
    "millstone grinding equipment",
    "industrial milling machinery"
  ],
  hardware: [
    "industrial bolts nuts fasteners",
    "cast iron flanges industrial",
    "MS strips industrial hardware",
    "industrial assembly components",
    "heavy duty industrial hardware"
  ],
  industrial: [
    "industrial manufacturing facility",
    "heavy industry production line",
    "industrial equipment machinery",
    "manufacturing plant industrial",
    "industrial processing facility"
  ]
};

// Image quality and size preferences
const IMAGE_PREFERENCES = {
  minWidth: 800,
  minHeight: 600,
  preferredAspectRatio: "16:9",
  maxFileSize: 2 * 1024 * 1024, // 2MB
  allowedFormats: ["jpg", "jpeg", "png", "webp"]
};

/**
 * Fetch high-quality industrial images using Google Custom Search API
 */
export async function fetchIndustrialImages(
  category: keyof typeof INDUSTRIAL_IMAGE_CATEGORIES,
  count: number = 10
): Promise<GoogleImageSearchResult[]> {
  const searchTerms = INDUSTRIAL_IMAGE_CATEGORIES[category];
  const allResults: GoogleImageSearchResult[] = [];

  try {
    for (const searchTerm of searchTerms.slice(0, Math.ceil(count / searchTerms.length))) {
      const url = `https://www.googleapis.com/customsearch/v1?key=${IMAGE_CONFIG.apiKey}&cx=${IMAGE_CONFIG.searchEngineId}&q=${encodeURIComponent(searchTerm)}&searchType=image&num=10&imgSize=large&imgType=photo&safe=active&rights=cc_publicdomain,cc_attribute,cc_sharealike,cc_noncommercial,cc_nonderived`;

      const response = await fetch(url);
      
      if (!response.ok) {
        console.warn(`Failed to fetch images for "${searchTerm}":`, response.statusText);
        continue;
      }

      const data = await response.json();
      
      if (data.items) {
        const filteredResults = data.items
          .filter((item: any) => {
            const img = item.image;
            return (
              img.width >= IMAGE_PREFERENCES.minWidth &&
              img.height >= IMAGE_PREFERENCES.minHeight &&
              img.byteSize <= IMAGE_PREFERENCES.maxFileSize
            );
          })
          .map((item: any) => ({
            title: item.title,
            link: item.link,
            displayLink: item.displayLink,
            snippet: item.snippet,
            image: item.image
          }));

        allResults.push(...filteredResults);
      }

      // Respect API rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return allResults.slice(0, count);
  } catch (error) {
    console.error('Error fetching industrial images:', error);
    return [];
  }
}

/**
 * Download and save image to local assets folder
 */
export async function downloadAndSaveImage(
  imageUrl: string,
  filename: string,
  category: string
): Promise<boolean> {
  try {
    const response = await fetch(imageUrl);
    
    if (!response.ok) {
      console.warn(`Failed to download image: ${response.statusText}`);
      return false;
    }

    const blob = await response.blob();
    
    // Create download link (for browser environment)
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${category}-${filename}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    console.log(`Successfully downloaded: ${category}-${filename}`);
    return true;
  } catch (error) {
    console.error('Error downloading image:', error);
    return false;
  }
}

/**
 * Generate optimized image metadata for SEO and performance
 */
export function generateImageMetadata(
  result: GoogleImageSearchResult,
  category: string,
  index: number
) {
  const cleanTitle = result.title
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
    .substring(0, 50);

  return {
    filename: `${category}-${index + 1}-${cleanTitle}`,
    alt: `${category} - ${result.title}`,
    title: result.title,
    description: result.snippet,
    source: result.displayLink,
    originalUrl: result.link,
    thumbnailUrl: result.image.thumbnailLink,
    dimensions: {
      width: result.image.width,
      height: result.image.height
    },
    category: category
  };
}

/**
 * Batch download images for a specific category
 */
export async function batchDownloadCategoryImages(
  category: keyof typeof INDUSTRIAL_IMAGE_CATEGORIES,
  count: number = 10
): Promise<void> {
  console.log(`🏭 Fetching ${count} high-quality ${category} images...`);
  
  const images = await fetchIndustrialImages(category, count);
  
  if (images.length === 0) {
    console.warn(`No images found for category: ${category}`);
    return;
  }

  console.log(`📸 Found ${images.length} images. Starting download...`);

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const metadata = generateImageMetadata(image, category, i);
    
    console.log(`Downloading ${i + 1}/${images.length}: ${metadata.filename}`);
    
    await downloadAndSaveImage(
      image.link,
      metadata.filename,
      category
    );

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log(`✅ Completed downloading ${category} images!`);
}

/**
 * Get placeholder image for category while real images load
 */
export function getPlaceholderImage(category: string): string {
  const placeholders = {
    abrasives: "/assets/images/placeholder-abrasives.jpg",
    minerals: "/assets/images/placeholder-minerals.jpg", 
    machinery: "/assets/images/placeholder-machinery.jpg",
    hardware: "/assets/images/placeholder-hardware.jpg",
    industrial: "/assets/images/placeholder-industrial.jpg"
  };

  return placeholders[category as keyof typeof placeholders] || "/assets/images/placeholder-industrial.jpg";
}

/**
 * Utility to trigger image downloads from browser console
 */
export const downloadIndustrialImages = {
  abrasives: () => batchDownloadCategoryImages('abrasives', 10),
  minerals: () => batchDownloadCategoryImages('minerals', 10),
  machinery: () => batchDownloadCategoryImages('machinery', 10),
  hardware: () => batchDownloadCategoryImages('hardware', 10),
  industrial: () => batchDownloadCategoryImages('industrial', 15),
  all: async () => {
    await batchDownloadCategoryImages('industrial', 15);
    await batchDownloadCategoryImages('abrasives', 10);
    await batchDownloadCategoryImages('minerals', 10);
    await batchDownloadCategoryImages('machinery', 10);
    await batchDownloadCategoryImages('hardware', 10);
  }
};

// Make available globally for console access
if (typeof window !== 'undefined') {
  (window as any).downloadIndustrialImages = downloadIndustrialImages;
} 