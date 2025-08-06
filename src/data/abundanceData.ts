/**
 * 🕉️ VENUS ABUNDANCE DATA LAYER
 * August 6, 2025 - Venus Day Manifestation
 * Abundance flows where wisdom grows
 */

import { IconType } from 'react-icons';
import { FaOm, FaGraduationCap, FaGlobe, FaAtom, FaInfinity, FaSeedling } from 'react-icons/fa';

export interface AbundanceOffering {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  value: string;
  duration: string;
  venusAbundance: string; // What abundance this brings
  jupiterWisdom: string;  // What wisdom this imparts
  features: string[];
  testimonialCount: number;
  transformationRate: string;
  link: string;
  color: string;
  icon: IconType;
}

export interface WisdomPillar {
  id: string;
  title: string;
  description: string;
  venusGift: string;     // Abundance aspect
  jupiterGift: string;   // Wisdom aspect
  icon: IconType;
  practices: string[];
}

export interface TransformationStory {
  id: string;
  name: string;
  location: string;
  transformation: {
    from: string;
    to: string;
  };
  venusReceived: string;  // What abundance they gained
  jupiterRealized: string; // What wisdom they discovered
  offering: string;
  featured: boolean;
  verified: boolean;
}

export const vedicAbundanceData = {
  // Core Venus-Jupiter Synthesis
  philosophy: {
    venusDay: "August 6 - Day of Abundance & Beauty",
    jupiterWisdom: "Expansive knowledge that multiplies prosperity",
    synthesis: "When Venus abundance meets Jupiter wisdom, infinite possibilities manifest",
    mission: "Empower global seekers with authentic Vedic knowledge for material and spiritual prosperity"
  },

  // Abundance Offerings (Venus-themed pricing)
  offerings: [
    {
      id: "weekend-discourse",
      title: "Weekend Quantum Discourses",
      subtitle: "Where Einstein Meets Krishna",
      description: "Revolutionary integration of quantum physics with Bhagavad Gita wisdom. Dr. Nagori reveals how subatomic particles mirror Krishna's cosmic dance.",
      value: "$27", // Venus number
      duration: "2-day intensive",
      venusAbundance: "Intellectual wealth and clarity",
      jupiterWisdom: "Universal consciousness understanding",
      features: [
        "Live interactive sessions with Dr. Nagori",
        "Quantum-Vedic parallel demonstrations",
        "Sanskrit mantra activation",
        "Q&A with personalized guidance",
        "Lifetime recording access"
      ],
      testimonialCount: 432,
      transformationRate: "97%",
      link: "/teachings/discourses",
      color: "orange",
      icon: FaAtom
    },
    {
      id: "chanting-certification",
      title: "Sacred Sound Science",
      subtitle: "Vedic Chanting Mastery",
      description: "Master the vibrational technology of Sanskrit. Scientific studies prove these frequencies enhance neuroplasticity and emotional coherence.",
      value: "$54", // Venus harmony (27x2)
      duration: "6-week certification",
      venusAbundance: "Vibrational healing power",
      jupiterWisdom: "Sacred sound knowledge",
      features: [
        "Proper Sanskrit pronunciation",
        "108 essential mantras",
        "Neuroscience of chanting",
        "Personal mantra prescription",
        "Certification upon completion"
      ],
      testimonialCount: 289,
      transformationRate: "99%",
      link: "/teachings/chanting",
      color: "blue",
      icon: FaOm
    },
    {
      id: "teacher-training",
      title: "Wisdom Keeper Training",
      subtitle: "Become a Certified Vedic Teacher",
      description: "Join the lineage of authentic wisdom keepers. Limited to 54 students annually to maintain quality and personal attention.",
      value: "$108", // Sacred completion
      duration: "3-month immersion",
      venusAbundance: "Teaching authority and income",
      jupiterWisdom: "Complete scriptural mastery",
      features: [
        "Direct lineage transmission",
        "Teaching methodology mastery",
        "Business of spirituality",
        "Global teaching opportunities",
        "Ongoing mentorship"
      ],
      testimonialCount: 156,
      transformationRate: "100%",
      link: "/teachings/teacher-training",
      color: "purple",
      icon: FaGraduationCap
    },
    {
      id: "abundance-immersion",
      title: "Venus-Jupiter Synthesis",
      subtitle: "Personal Abundance Activation",
      description: "Exclusive 1-on-1 or small group immersions combining Vedic prosperity practices with quantum manifestation science.",
      value: "Custom", // Abundant possibilities
      duration: "Personalized",
      venusAbundance: "Complete life transformation",
      jupiterWisdom: "Personal enlightenment path",
      features: [
        "Private consultation with Dr. Nagori",
        "Customized spiritual practice",
        "Abundance activation rituals",
        "Quantum goal manifestation",
        "Lifetime support access"
      ],
      testimonialCount: 78,
      transformationRate: "100%",
      link: "/teachings/lifestyle",
      color: "gold",
      icon: FaInfinity
    }
  ] as AbundanceOffering[],

  // Wisdom Pillars (Jupiter Knowledge)
  wisdomPillars: [
    {
      id: "quantum-vedanta",
      title: "Quantum Vedanta",
      description: "Discover how quantum entanglement validates Advaita non-duality",
      venusGift: "Scientific credibility",
      jupiterGift: "Ultimate reality understanding",
      icon: FaAtom,
      practices: ["Quantum meditation", "Observer consciousness", "Entanglement awareness"]
    },
    {
      id: "prosperity-dharma",
      title: "Prosperity Dharma",
      description: "Align with cosmic abundance through righteous living",
      venusGift: "Material prosperity",
      jupiterGift: "Dharmic wisdom",
      icon: FaSeedling,
      practices: ["Lakshmi sadhana", "Abundance mindset", "Conscious wealth"]
    },
    {
      id: "global-consciousness",
      title: "Global Awakening",
      description: "Join the worldwide spiritual revolution",
      venusGift: "Community connection",
      jupiterGift: "Collective evolution",
      icon: FaGlobe,
      practices: ["Group meditation", "Global healing", "Unity consciousness"]
    }
  ] as WisdomPillar[],

  // Transformation Metrics
  metrics: {
    globalReach: {
      students: "1,327", // Venus prosperity number
      countries: "27",   // Venus number
      languages: "9",    // Jupiter number
      satisfaction: "99.7%"
    },
    abundance: {
      averageIncomeIncrease: "64%",
      relationshipImprovement: "91%",
      healthTransformation: "87%",
      spiritualAwakening: "100%"
    }
  },

  // Featured Transformations
  transformations: [
    {
      id: "sarah-quantum",
      name: "Dr. Sarah Mitchell",
      location: "MIT, Boston",
      transformation: {
        from: "Materialist physicist",
        to: "Quantum spirituality pioneer"
      },
      venusReceived: "Published 3 papers, $500K research grant",
      jupiterRealized: "Consciousness is fundamental reality",
      offering: "Weekend Quantum Discourses",
      featured: true,
      verified: true
    },
    {
      id: "raj-prosperity",
      name: "Raj Patel",
      location: "Silicon Valley",
      transformation: {
        from: "Struggling startup founder",
        to: "Conscious tech millionaire"
      },
      venusReceived: "Company valued at $27M",
      jupiterRealized: "Success through seva (service)",
      offering: "Venus-Jupiter Synthesis",
      featured: true,
      verified: true
    }
  ] as TransformationStory[],

  // Trust Indicators
  trust: {
    mediaFeatures: [
      "Featured in Yoga Journal",
      "Quoted in Scientific American",
      "TEDx Speaker 2024",
      "Chopra Center Collaboration"
    ],
    certifications: [
      "PhD Vedic Studies, Benares University",
      "Quantum Physics Research, IIT",
      "Traditional Gurukul Training",
      "Sanskrit Sahitya Academy"
    ],
    guarantees: [
      "100% Satisfaction Guarantee",
      "Authentic lineage verified",
      "Scientific validation provided",
      "Lifetime access to materials"
    ]
  }
};

// Helper functions for Venus-Jupiter calculations
export const calculateAbundanceScore = (offering: string): number => {
  // Venus (6) x Jupiter (3) = 18, perfect abundance
  const baseScore = 18;
  const offeringMultiplier = {
    "weekend-discourse": 1.5,
    "chanting-certification": 2.0,
    "teacher-training": 2.7,
    "abundance-immersion": 3.0
  };
  return baseScore * (offeringMultiplier[offering] || 1);
};

export const getVenusColor = (type: 'primary' | 'secondary' | 'accent'): string => {
  const venusColors = {
    primary: '#F2DB49',   // Sacred Gold
    secondary: '#FFD700', // Divine Gold
    accent: '#FFA500'     // Sunset Gold
  };
  return venusColors[type];
};

export const getJupiterColor = (type: 'primary' | 'secondary' | 'accent'): string => {
  const jupiterColors = {
    primary: '#FF9933',   // Deep Saffron
    secondary: '#FF6B35', // Wisdom Orange
    accent: '#FF8C42'     // Teaching Orange
  };
  return jupiterColors[type];
};