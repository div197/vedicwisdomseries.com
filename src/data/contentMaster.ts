import { FaOm, FaBook, FaGraduationCap, FaHeart, FaGlobe, FaHandsHelping, FaLightbulb, FaUsers, FaStar, FaPhone, FaEnvelope, FaCalendarCheck } from 'react-icons/fa'

// 🕉️ CONTENT MASTER - SINGLE SOURCE OF TRUTH
// Centralized content management for conversion optimization
// Following the "Scientific Mystic" voice established in the analysis

export const contentMaster = {
  // CORE VALUE PROPOSITIONS - Hierarchy from primary to support
  valuePropositions: {
    primary: "The MIT Discovery That Proves Your Soul Is Real",
    secondary: "Join 1000+ Seekers Who've Found Scientific Proof of Ancient Wisdom", 
    tertiary: "Master Ancient Practices with Modern Understanding",
    support: "Receive Personal Guidance from Authentic Lineage"
  },

  // UNIFIED VOICE & TONE GUIDELINES
  voice: {
    core: "Scientific Mystic",
    characteristics: ["Authority of science", "Wisdom of ancients", "Practical", "Profound", "Accessible", "Authentic", "Transformational", "Trustworthy"],
    toneAttributes: {
      formal: 7, // 1-10 scale (7 = professional but approachable)
      enthusiastic: 8, // High enthusiasm for transformation
      supportive: 9, // Very supportive and nurturing
      authoritative: 8, // Strong expertise positioning
      conversational: 6 // Moderately conversational
    }
  },

  // STANDARDIZED CALL-TO-ACTIONS
  ctas: {
    primary: {
      text: "Claim Your Free Discovery Call",
      description: "30-min personal consultation with Dr. Nischaya",
      href: "/contact",
      colorScheme: "orange",
      variant: "solid",
      icon: "FaCalendarCheck",
      urgency: "Limited spots available this month"
    },
    secondary: {
      text: "Download Free Ancient Code Report",
      description: "7-page guide revealing quantum-spiritual connections",
      href: "/contact",
      colorScheme: "blue", 
      variant: "outline",
      icon: "FaBook",
      urgency: "Get instant access"
    },
    tertiary: {
      text: "Join 1000+ Awakened Souls",
      description: "Connect with our global spiritual community",
      href: "/testimonials",
      colorScheme: "purple",
      variant: "ghost", 
      icon: "FaUsers",
      urgency: "New members welcomed daily"
    },
    emergency: {
      text: "Speak With Dr. Nischaya Today",
      description: "Direct access for urgent spiritual guidance",
      href: "/contact",
      colorScheme: "red",
      variant: "solid",
      icon: "FaPhone",
      urgency: "Available for serious seekers only"
    }
  },

  // HERO SECTIONS - Optimized for each page's conversion goal
  heroes: {
    homepage: {
      headline: "The MIT Discovery That Proves Your Soul Is Real",
      subheading: "Join 1000+ Seekers Who've Found Scientific Proof of Ancient Wisdom",
      description: "What if quantum physics could validate what ancient sages knew all along? Dr. Nischaya Nagori bridges 5000-year-old Vedic wisdom with cutting-edge science.",
      primaryCta: "primary",
      secondaryCta: "secondary",
      socialProof: "1000+ students • 25+ countries • 98% transformation rate",
      urgency: "Free discovery calls filling fast"
    },
    about: {
      headline: "Meet Your Guide Between Two Worlds", 
      subheading: "Dr. Nischaya Nagori: Where Ancient Lineage Meets Modern Science",
      description: "From traditional gurukuls to quantum laboratories - discover how one scholar's journey bridges the gap between mystical wisdom and scientific proof.",
      primaryCta: "primary",
      secondaryCta: "tertiary",
      socialProof: "500+ hours of teachings • 50+ certified students",
      urgency: "Personal mentorship opportunities limited"
    },
    teachings: {
      headline: "Choose Your Path to Quantum Awakening",
      subheading: "4 Transformative Programs That Bridge Science & Spirituality", 
      description: "From weekend wisdom to teacher certification - find the perfect program to awaken your quantum-spiritual potential.",
      primaryCta: "primary",
      secondaryCta: "secondary", 
      socialProof: "98% completion rate • 95% satisfaction score",
      urgency: "Enrollment closes soon"
    },
    contact: {
      headline: "Your Spiritual Breakthrough Starts Here",
      subheading: "Connect Directly with Dr. Nischaya for Personal Guidance",
      description: "Ready to experience the quantum-soul connection for yourself? Schedule your personal consultation and begin your transformation journey.",
      primaryCta: "emergency",
      secondaryCta: "secondary",
      socialProof: "24-hour response guarantee",
      urgency: "Free consultations limited to 10 per month"
    },
    testimonials: {
      headline: "Real People. Quantum Transformations.",
      subheading: "From Skeptics to Spiritual Scientists - Their Awakening Stories",
      description: "Discover how thousands have transformed their lives through the revolutionary fusion of quantum physics and ancient wisdom.",
      primaryCta: "primary", 
      secondaryCta: "tertiary",
      socialProof: "500+ transformation stories • 98% recommend to friends",
      urgency: "Join the next wave of awakened souls"
    }
  },

  // BENEFIT STATEMENTS - Conversion-focused benefits
  benefits: {
    primary: [
      "Discover scientific proof your soul exists beyond your physical body",
      "Master 5000-year-old practices validated by quantum mechanics", 
      "Join a global community of spiritually awakened scientists and seekers",
      "Receive authentic teachings from verified traditional lineage"
    ],
    emotional: [
      "Finally find the missing link between science and spirituality",
      "Experience profound inner peace through quantum understanding",
      "Transform from spiritual seeker to confident practitioner",
      "Connect with like-minded souls on the same awakening journey"
    ],
    practical: [
      "Learn Sanskrit chanting without prior language knowledge",
      "Apply Vedic principles to modern career and relationships", 
      "Develop authentic spiritual teaching capabilities",
      "Create personalized spiritual practice routines"
    ]
  },

  // SOCIAL PROOF ELEMENTS
  socialProof: {
    statistics: [
      { label: "Global Students", value: "1000+", trend: "Growing Monthly", color: "orange" },
      { label: "Countries Reached", value: "25+", trend: "Worldwide Impact", color: "blue" },
      { label: "Success Rate", value: "98%", trend: "Proven Results", color: "green" },
      { label: "5-Star Reviews", value: "500+", trend: "Satisfied Souls", color: "yellow" }
    ],
    trustIndicators: [
      "Authentic traditional lineage verified",
      "PhD-level scientific integration", 
      "15+ years teaching experience",
      "Published researcher in consciousness studies",
      "Featured in spiritual and scientific publications"
    ],
    urgencyTriggers: [
      "Only 10 free consultations available this month",
      "Next teacher training cohort starts in 30 days",
      "Limited enrollment to maintain teaching quality",
      "Personal mentorship spots filling quickly"
    ]
  },

  // TRANSFORMATION JOURNEY STAGES
  journey: {
    stage1: {
      name: "Curiosity",
      emotion: "Wonder",
      goal: "Generate interest in quantum-spiritual connection",
      content: "Scientific validation of ancient wisdom",
      cta: "secondary" // Download free report
    },
    stage2: {
      name: "Understanding", 
      emotion: "Recognition",
      goal: "Establish Dr. Nischaya as trusted guide",
      content: "Teacher credentials and methodology",
      cta: "primary" // Book discovery call
    },
    stage3: {
      name: "Decision",
      emotion: "Desire", 
      goal: "Present transformation pathways",
      content: "Program benefits and outcomes",
      cta: "primary" // Claim discovery call
    },
    stage4: {
      name: "Action",
      emotion: "Trust",
      goal: "Facilitate first connection",
      content: "Personal consultation opportunity", 
      cta: "emergency" // Speak with Dr. Nischaya
    },
    stage5: {
      name: "Community",
      emotion: "Belonging",
      goal: "Show social proof and belonging",
      content: "Student transformation stories",
      cta: "tertiary" // Join community
    }
  },

  // OBJECTION HANDLING
  objections: {
    skeptical: {
      concern: "This sounds too good to be true",
      response: "Dr. Nischaya provides scientific frameworks for every spiritual concept",
      proof: "Published research and peer review available"
    },
    religious: {
      concern: "Will this conflict with my existing beliefs?", 
      response: "Vedic wisdom complements all sincere spiritual paths",
      proof: "Students from 15+ different faith backgrounds"
    },
    practical: {
      concern: "I don't have time for lengthy spiritual practices",
      response: "Programs designed for busy modern lifestyles",
      proof: "Average time commitment: 20-30 minutes daily"
    },
    financial: {
      concern: "Spiritual education should be free",
      response: "Free content available, premium programs support global outreach",
      proof: "Scholarship programs available for sincere seekers"
    },
    qualification: {
      concern: "I'm not advanced enough for this",
      response: "All programs welcome complete beginners",
      proof: "80% of students started with zero spiritual background"
    }
  },

  // CONTENT FORMATTING GUIDELINES
  formatting: {
    headlines: {
      maxWords: 8,
      emotional: true,
      specific: true,
      benefit: true,
      curiosity: true
    },
    subheadings: {
      maxWords: 12,
      supportHeadline: true,
      socialProof: true,
      clarification: true
    },
    bulletPoints: {
      maxPerSection: 5,
      startWithAction: true,
      includeResult: true,
      emotional: true
    },
    paragraphs: {
      maxSentences: 3,
      oneIdeaPer: true,
      transitionWords: true,
      activeTense: true
    }
  },

  // VISUAL HIERARCHY STANDARDS
  visualHierarchy: {
    attention: {
      primary: "Hero headline + Primary CTA",
      secondary: "Key benefits + Social proof", 
      tertiary: "Supporting content + Secondary CTAs"
    },
    colors: {
      attention: "#FF9933", // Deep Saffron for primary focus
      trust: "#1E90FF",     // Serene Blue for credibility  
      success: "#F2DB49",   // Sacred Gold for achievement
      urgency: "#FF6B6B"    // Soft red for urgency without alarm
    },
    spacing: {
      heroSection: "Extra generous white space",
      contentSections: "Comfortable breathing room",
      ctaButtons: "Isolated with surrounding space",
      testimonials: "Clean separation between stories"
    }
  }
}

// ICON MAPPING FUNCTION
export const getContentIcon = (iconName: string) => {
  const iconMap = {
    'FaOm': FaOm,
    'FaBook': FaBook,
    'FaGraduationCap': FaGraduationCap,
    'FaHeart': FaHeart,
    'FaGlobe': FaGlobe,
    'FaHandsHelping': FaHandsHelping,
    'FaLightbulb': FaLightbulb,
    'FaUsers': FaUsers,
    'FaStar': FaStar,
    'FaPhone': FaPhone,
    'FaEnvelope': FaEnvelope,
    'FaCalendarCheck': FaCalendarCheck
  }
  return iconMap[iconName as keyof typeof iconMap] || FaOm
}

// CTA COMPONENT DATA GENERATOR
export const getCTAData = (ctaKey: keyof typeof contentMaster.ctas) => {
  const cta = contentMaster.ctas[ctaKey]
  return {
    ...cta,
    icon: getContentIcon(cta.icon)
  }
}

// PAGE-SPECIFIC CONTENT - Extended for comprehensive optimization
export const pageSpecificContent = {
  about: {
    journeyTitle: "From Ancient Wisdom to Quantum Understanding", 
    journeyDescription: "Dr. Nischaya Nagori's revolutionary journey bridges millennia-old Vedic knowledge with cutting-edge scientific validation, creating the ultimate synthesis for modern seekers.",
    credentialsTitle: "Proven Expertise",
    credentialsHeadline: "Where Traditional Mastery Meets Scientific Rigor",
    philosophyBadge: "Teaching Excellence",
    philosophyTitle: "Making Profound Wisdom Accessible",
    philosophyDescription: "Dr. Nischaya's unique approach combines authentic traditional transmission with modern pedagogical excellence, ensuring every student can access and apply ancient wisdom in their daily life."
  },
  teachings: {
    programsTitle: "4 Paths to Transformation",
    programsDescription: "Each program is carefully designed to meet you where you are while guiding you toward quantum-spiritual mastery."
  },
  contact: {
    consultationTitle: "Personal Guidance Available",
    consultationDescription: "Dr. Nischaya personally reviews every consultation request to ensure the perfect match for your spiritual journey."
  },
  testimonials: {
    storiesTitle: "Transformation Stories",
    storiesDescription: "Real people sharing their journey from spiritual seeking to quantum understanding."
  }
}

// PAGE-SPECIFIC CONTENT GENERATOR
export const getPageContent = (page: keyof typeof contentMaster.heroes) => {
  const hero = contentMaster.heroes[page]
  const specific = pageSpecificContent[page as keyof typeof pageSpecificContent] || {}
  return {
    ...hero,
    ...specific,
    primaryCtaData: getCTAData(hero.primaryCta as keyof typeof contentMaster.ctas),
    secondaryCtaData: getCTAData(hero.secondaryCta as keyof typeof contentMaster.ctas)
  }
}