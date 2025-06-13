// 🏭 ENHANCED MILLSTONE INDIA IMAGE MANAGEMENT SYSTEM
// Ultra-Premium Industrial Image Fetching & AI Analysis with Gemini Flash 2.0

interface GeminiImageAnalysis {
  isIndustrial: boolean;
  quality: 'high' | 'medium' | 'low';
  aspectRatio: string;
  suitability: number; // 0-100 score
  description: string;
  keywords: string[];
  recommendation: 'download' | 'skip' | 'review';
}

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

interface EnhancedImageConfig {
  searchEngineId: string;
  searchApiKey: string;
  geminiApiKey: string;
  downloadPath: string;
}

// Configuration for Enhanced Image Management
const ENHANCED_CONFIG: EnhancedImageConfig = {
  searchEngineId: "d0941023f630c4bf2",
  searchApiKey: "AIzaSyBl5h5a9MqsMAh4vrXNUZwxfnHENZhHtsk",
  geminiApiKey: "AIzaSyDpAZZs2agYa77ElQ1y9sqys8LtcBAG1_U",
  downloadPath: "/assets/images"
};

// Industrial image search queries optimized for Millstone India
const INDUSTRIAL_SEARCH_QUERIES = {
  hero: [
    "industrial manufacturing facility modern",
    "steel production plant machinery",
    "industrial grinding equipment operation",
    "modern factory production line",
    "industrial materials processing plant"
  ],
  abrasives: [
    "silicon carbide abrasive materials",
    "industrial grinding wheels production",
    "abrasive materials manufacturing",
    "emery grain industrial abrasives",
    "aluminum oxide abrasive products"
  ],
  minerals: [
    "industrial minerals processing",
    "magnesite mining operation",
    "dolomite industrial materials",
    "bentonite clay industrial use",
    "china clay kaolin processing"
  ],
  machinery: [
    "flour mill machinery industrial",
    "grain processing equipment",
    "industrial milling machines",
    "aata chakki flour mill",
    "millstone grinding equipment"
  ],
  hardware: [
    "industrial bolts nuts manufacturing",
    "cast iron flanges industrial",
    "steel strips industrial materials",
    "industrial hardware components",
    "metal fabrication products"
  ],
  facilities: [
    "modern industrial warehouse",
    "quality control laboratory",
    "industrial packaging facility",
    "export shipping containers",
    "ISO certified manufacturing"
  ]
};

// Gemini AI Analysis Function
async function analyzeImageWithGemini(imageUrl: string): Promise<GeminiImageAnalysis> {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${ENHANCED_CONFIG.geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            {
              text: `Analyze this image for industrial website use. Evaluate:
1. Is this suitable for an industrial manufacturing website?
2. Image quality (high/medium/low)
3. Aspect ratio
4. Professional appearance score (0-100)
5. Relevant keywords
6. Recommendation (download/skip/review)

Focus on: industrial equipment, manufacturing, materials, professional appearance, commercial use suitability.`
            },
            {
              inline_data: {
                mime_type: "image/jpeg",
                data: await getImageBase64(imageUrl)
              }
            }
          ]
        }],
        generationConfig: {
          temperature: 0.1,
          topK: 32,
          topP: 1,
          maxOutputTokens: 1024,
        }
      })
    });

    const result = await response.json();
    const analysis = result.candidates[0].content.parts[0].text;
    
    // Parse Gemini response into structured data
    return parseGeminiAnalysis(analysis, imageUrl);
    
  } catch (error) {
    console.error('Gemini analysis failed:', error);
    return {
      isIndustrial: false,
      quality: 'low',
      aspectRatio: 'unknown',
      suitability: 0,
      description: 'Analysis failed',
      keywords: [],
      recommendation: 'skip'
    };
  }
}

// Helper function to get image as base64
async function getImageBase64(imageUrl: string): Promise<string> {
  try {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    return base64;
  } catch (error) {
    throw new Error(`Failed to fetch image: ${error}`);
  }
}

// Parse Gemini analysis response
function parseGeminiAnalysis(analysis: string, imageUrl: string): GeminiImageAnalysis {
  // Extract information from Gemini's text response
  const isIndustrial = analysis.toLowerCase().includes('suitable') || analysis.toLowerCase().includes('industrial');
  const quality = analysis.toLowerCase().includes('high quality') ? 'high' : 
                 analysis.toLowerCase().includes('medium quality') ? 'medium' : 'low';
  
  // Extract score (look for numbers 0-100)
  const scoreMatch = analysis.match(/(\d{1,3})(?:\s*(?:\/100|%|score))/i);
  const suitability = scoreMatch ? Math.min(100, parseInt(scoreMatch[1])) : 50;
  
  // Extract aspect ratio
  const aspectMatch = analysis.match(/(\d+:\d+|\d+\.\d+:\d+)/);
  const aspectRatio = aspectMatch ? aspectMatch[1] : 'unknown';
  
  // Extract keywords
  const keywords = extractKeywords(analysis);
  
  // Determine recommendation
  const recommendation = suitability >= 70 ? 'download' : 
                        suitability >= 40 ? 'review' : 'skip';
  
  return {
    isIndustrial,
    quality,
    aspectRatio,
    suitability,
    description: analysis.substring(0, 200) + '...',
    keywords,
    recommendation
  };
}

// Extract keywords from analysis
function extractKeywords(text: string): string[] {
  const industrialKeywords = [
    'industrial', 'manufacturing', 'machinery', 'equipment', 'factory',
    'production', 'processing', 'materials', 'steel', 'metal', 'grinding',
    'abrasive', 'mineral', 'quality', 'professional', 'commercial'
  ];
  
  return industrialKeywords.filter(keyword => 
    text.toLowerCase().includes(keyword)
  );
}

// Enhanced Google Custom Search with AI Analysis
async function searchIndustrialImages(query: string, count: number = 10): Promise<GoogleImageSearchResult[]> {
  try {
    const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${ENHANCED_CONFIG.searchApiKey}&cx=${ENHANCED_CONFIG.searchEngineId}&q=${encodeURIComponent(query)}&searchType=image&num=${count}&imgSize=large&imgType=photo&safe=active&rights=cc_publicdomain,cc_attribute,cc_sharealike,cc_noncommercial,cc_nonderived`;
    
    const response = await fetch(searchUrl);
    const data = await response.json();
    
    if (data.items) {
      return data.items;
    } else {
      console.warn('No images found for query:', query);
      return [];
    }
  } catch (error) {
    console.error('Image search failed:', error);
    return [];
  }
}

// Download and analyze images with AI
async function downloadAnalyzedImages(category: string, maxImages: number = 5): Promise<void> {
  console.log(`🏭 Starting AI-enhanced image download for category: ${category}`);
  
  const queries = INDUSTRIAL_SEARCH_QUERIES[category as keyof typeof INDUSTRIAL_SEARCH_QUERIES] || [];
  let downloadedCount = 0;
  
  for (const query of queries) {
    if (downloadedCount >= maxImages) break;
    
    console.log(`🔍 Searching: ${query}`);
    const images = await searchIndustrialImages(query, 10);
    
    for (const image of images) {
      if (downloadedCount >= maxImages) break;
      
      console.log(`🤖 Analyzing image with Gemini AI...`);
      const analysis = await analyzeImageWithGemini(image.link);
      
      console.log(`📊 Analysis Result:`, {
        url: image.link,
        suitability: analysis.suitability,
        quality: analysis.quality,
        recommendation: analysis.recommendation,
        keywords: analysis.keywords
      });
      
      if (analysis.recommendation === 'download' && analysis.suitability >= 70) {
        try {
          await downloadImage(image.link, category, downloadedCount);
          downloadedCount++;
          console.log(`✅ Downloaded high-quality image ${downloadedCount}/${maxImages}`);
        } catch (error) {
          console.error(`❌ Failed to download image:`, error);
        }
      } else {
        console.log(`⏭️ Skipped image (Score: ${analysis.suitability}, Reason: ${analysis.recommendation})`);
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`🎉 Completed! Downloaded ${downloadedCount} AI-analyzed images for ${category}`);
}

// Download image to local storage
async function downloadImage(imageUrl: string, category: string, index: number): Promise<void> {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Create download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${category}-${index + 1}-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    console.log(`📥 Downloaded: ${link.download}`);
  } catch (error) {
    throw new Error(`Download failed: ${error}`);
  }
}

// Enhanced download functions for each category
export const enhancedImageDownloader = {
  // Download hero section images
  hero: () => downloadAnalyzedImages('hero', 3),
  
  // Download product category images
  abrasives: () => downloadAnalyzedImages('abrasives', 5),
  minerals: () => downloadAnalyzedImages('minerals', 5),
  machinery: () => downloadAnalyzedImages('machinery', 5),
  hardware: () => downloadAnalyzedImages('hardware', 5),
  
  // Download facility images
  facilities: () => downloadAnalyzedImages('facilities', 4),
  
  // Download all categories
  all: async () => {
    console.log('🚀 Starting comprehensive AI-enhanced image download...');
    await enhancedImageDownloader.hero();
    await enhancedImageDownloader.abrasives();
    await enhancedImageDownloader.minerals();
    await enhancedImageDownloader.machinery();
    await enhancedImageDownloader.hardware();
    await enhancedImageDownloader.facilities();
    console.log('🎊 All categories completed!');
  },
  
  // Analyze single image
  analyzeImage: async (imageUrl: string) => {
    console.log('🤖 Analyzing single image with Gemini AI...');
    const analysis = await analyzeImageWithGemini(imageUrl);
    console.log('📊 Analysis Result:', analysis);
    return analysis;
  }
};

// Export for global access
if (typeof window !== 'undefined') {
  (window as any).enhancedImageDownloader = enhancedImageDownloader;
  console.log('🏭 Enhanced Image Downloader with Gemini AI available globally!');
  console.log('Usage:');
  console.log('- enhancedImageDownloader.hero() - Download AI-analyzed hero images');
  console.log('- enhancedImageDownloader.abrasives() - Download abrasive product images');
  console.log('- enhancedImageDownloader.all() - Download all categories with AI analysis');
  console.log('- enhancedImageDownloader.analyzeImage(url) - Analyze single image');
} 