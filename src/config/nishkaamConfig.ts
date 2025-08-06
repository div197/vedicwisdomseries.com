/**
 * 🕉️ NISHKAAM KARMA CONFIGURATION
 * True selfless service architecture - serves without attachment
 * Venus (6) Abundance + Jupiter Wisdom Theme
 */

export interface NishkaamConfig {
  // Core Identity (Eternal)
  framework: {
    name: string;
    version: string;
    philosophy: string;
    principles: string[];
  };
  
  // Manifestation (Temporal)
  manifestation: {
    name: string;
    domain: string;
    author: string;
    purpose: string;
    audience: string;
  };
  
  // Abundance Theme (Venus Day 6)
  abundance: {
    colors: {
      prosperity: string;    // Venus gold
      wisdom: string;       // Jupiter saffron
      flow: string;         // Divine blue
    };
    principles: string[];
    offerings: string[];
  };
  
  // Trust & Professionalism
  trust: {
    credentials: string[];
    testimonials: number;
    countries: number;
    successRate: string;
  };
}

export const nishkaamConfig: NishkaamConfig = {
  framework: {
    name: "Karpatri Dham Framework",
    version: "0.1.0",
    philosophy: "Nishkaam Karma Yoga - Action without attachment to results",
    principles: [
      "Serve infinite manifestations",
      "Zero hardcoding architecture", 
      "Configuration-driven transformation",
      "Universal spiritual-technical synthesis"
    ]
  },
  
  manifestation: {
    name: "Vedic Wisdom Series",
    domain: "vaidikwisdomseries.com",
    author: "Dr. Nischaya Nagori",
    purpose: "Bridge ancient Vedic wisdom with modern quantum understanding",
    audience: "Global seekers of authentic spiritual knowledge"
  },
  
  abundance: {
    colors: {
      prosperity: "#F2DB49",  // Venus Sacred Gold
      wisdom: "#FF9933",      // Jupiter Deep Saffron  
      flow: "#1E90FF"         // Divine Serene Blue
    },
    principles: [
      "Abundance flows where wisdom grows",
      "Prosperity through spiritual alignment",
      "Jupiter's wisdom manifests Venus's abundance",
      "Share knowledge freely, receive infinitely"
    ],
    offerings: [
      "Weekend Discourses - Quantum meets Krishna",
      "Chanting Classes - Sacred sound science",
      "Teacher Training - Authentic lineage transmission",
      "Lifestyle Experiences - Personalized transformation"
    ]
  },
  
  trust: {
    credentials: [
      "Authentic Vedic lineage",
      "Scientific validation approach",
      "15+ years teaching experience",
      "Published consciousness researcher"
    ],
    testimonials: 1000,
    countries: 25,
    successRate: "98%"
  }
};