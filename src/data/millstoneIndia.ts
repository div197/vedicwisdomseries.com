import { FaCog, FaIndustry, FaTools, FaAward, FaGlobe, FaHandshake } from 'react-icons/fa'

// 🏭 MILLSTONE INDIA CONFIGURATION-DRIVEN CONTENT
// Following the Configuration-Driven Divinity Law
export const millstoneIndia = {
  // HERO SECTION CONFIGURATION
  hero: {
    title: "Millstone India",
    subtitle: "The Foundation of Your Finish",
    description: "Expert industrial craftsmen providing superior abrasives, minerals, machinery, and technical expertise. Government Recognized Export House serving 20+ countries with ISO 9001:2015 certified excellence.",
    primaryAction: { text: "🏭 Request Expert Consultation", link: "/contact" },
    secondaryAction: { text: "📊 Download Product Catalog", link: "/products" }
  },

  // CORE PRINCIPLES/FEATURES
  principles: [
    {
      icon: "industry",
      title: "Industrial Excellence",
      description: "Three decades of expertise in providing superior abrasives, minerals, and machinery to industries worldwide with unwavering quality standards.",
      link: "/about"
    },
    {
      icon: "globe", 
      title: "Global Export Excellence",
      description: "Government Recognized Export House serving 20+ countries with reliable supply chains and international quality certifications.",
      link: "/quality"
    },
    {
      icon: "handshake",
      title: "Expert Partnership", 
      description: "From consultation to delivery - we provide end-to-end technical support and customized solutions for your industrial requirements.",
      link: "/knowledge-center"
    }
  ],

  // PRODUCT CATEGORIES
  productCategories: [
    {
      badge: "Abrasives",
      title: "Abrasives & Binders",
      description: "Premium Silicon Carbide, Emery Grain, Aluminium Oxide, and specialized binding agents for superior grinding and finishing applications.",
      count: "15+ Products",
      color: "primary",
      link: "/products/abrasives"
    },
    {
      badge: "Minerals", 
      title: "Industrial Minerals",
      description: "High-grade Caustic Calcined Magnesite, Dolomite, Bentonite, and China Clay for diverse industrial manufacturing processes.",
      count: "12+ Varieties",
      color: "secondary",
      link: "/products/minerals"
    },
    {
      badge: "Machinery",
      title: "Flour Mill Equipment", 
      description: "Traditional and modern flour mill machinery including Aata Chakki and precision-engineered millstones for grain processing.",
      count: "8+ Systems",
      color: "tertiary",
      link: "/products/machinery"
    },
    {
      badge: "Hardware",
      title: "Industrial Hardware",
      description: "Essential components including bolts, nuts, cast iron flanges, and MS strips for industrial assembly and construction.",
      count: "20+ Components", 
      color: "secondary",
      link: "/products/hardware"
    }
  ],

  // TRUST INDICATORS/STATS
  stats: [
    { label: "Product Categories", value: "50+", trend: "Comprehensive Range", color: "primary" },
    { label: "Countries Served", value: "20+", trend: "Global Reach", color: "secondary" },
    { label: "Years Experience", value: "30+", trend: "Proven Excellence", color: "tertiary" },
    { label: "Quality Certified", value: "ISO 9001:2015", trend: "International Standards", color: "primary" }
  ],

  // EXPERTISE AREAS
  expertiseAreas: [
    {
      title: "Precision Grinding Solutions",
      description: "Advanced abrasive technologies for metal finishing, surface preparation, and precision manufacturing applications.",
      icon: "cog"
    },
    {
      title: "Mineral Processing Excellence", 
      description: "High-purity industrial minerals for refractory, ceramic, paint, and construction industry applications.",
      icon: "industry"
    },
    {
      title: "Flour Milling Technology",
      description: "Traditional and modern grain processing equipment for efficient flour production and food processing.",
      icon: "tools"
    },
    {
      title: "Quality Assurance Systems",
      description: "Comprehensive testing and certification processes ensuring consistent product quality and international compliance.",
      icon: "award"
    }
  ]
}

// ICON MAPPING FUNCTION
export const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'industry': return FaIndustry
    case 'globe': return FaGlobe  
    case 'handshake': return FaHandshake
    case 'cog': return FaCog
    case 'tools': return FaTools
    case 'award': return FaAward
    default: return FaIndustry
  }
} 