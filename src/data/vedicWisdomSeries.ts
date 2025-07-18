import { FaOm, FaBook, FaGraduationCap, FaHeart, FaGlobe, FaHandsHelping } from 'react-icons/fa'

// 🕉️ VEDIC WISDOM SERIES CONFIGURATION-DRIVEN CONTENT
// Ancient Sound, Modern Awakening - Dr. Nischaya Nagori
export const vedicWisdomSeries = {
  // HERO SECTION CONFIGURATION
  hero: {
    title: "Vedic Wisdom Series",
    subtitle: "Ancient Sound, Modern Awakening",
    description: "Revolutionary Vedic education bridging quantum physics with ancient wisdom. Learn authentic Vedic knowledge through Weekend Discourses, Chanting Classes, Teacher Training, and Lifestyle Experiences with Dr. Nischaya Nagori.",
    primaryAction: { text: "🕉️ Explore Divine Offerings", link: "/teachings" },
    secondaryAction: { text: "📖 Meet Dr. Nischaya", link: "/about" }
  },

  // CORE PRINCIPLES/FEATURES
  principles: [
    {
      icon: "om",
      title: "Authentic Vedic Transmission",
      description: "Direct lineage-based spiritual education preserving the ancient Guru-Shishya tradition with modern accessibility for global seekers.",
      link: "/about"
    },
    {
      icon: "globe", 
      title: "Scientific-Spiritual Convergence",
      description: "Groundbreaking insights connecting quantum physics with Vedic metaphysics - where Einstein meets the Rishis.",
      link: "/teachings"
    },
    {
      icon: "heart",
      title: "Experiential Learning", 
      description: "Move beyond theory to direct spiritual experience (anubhava) through practical sadhana and transformative practices.",
      link: "/teachings"
    }
  ],

  // DIVINE OFFERINGS (Note: Prices shown but no payment gateway yet)
  offerings: [
    {
      badge: "Weekend",
      title: "Weekend Discourses",
      description: "Deep Vedic philosophical discussions and spiritual insights. Interactive Q&A sessions with Dr. Nischaya Nagori every Saturday-Sunday.",
      price: "$25",
      duration: "per discourse ticket",
      details: "60 minutes each day (2 days)",
      color: "orange",
      link: "/teachings/discourses",
      features: [
        "Authentic Vedic text interpretation",
        "Scientific parallels to spiritual concepts",
        "Interactive Q&A sessions",
        "Community connection with seekers",
        "Recorded sessions for review"
      ]
    },
    {
      badge: "Chanting", 
      title: "Chanting Classes",
      description: "Learn authentic Vedic chanting techniques and Sanskrit pronunciation. No prior Sanskrit knowledge required - perfect for global learners.",
      price: "$30",
      duration: "ONE COMPLETE COURSE",
      details: "Monday, Tuesday, Thursday (60 min each)",
      color: "blue",
      link: "/teachings/chanting",
      features: [
        "Proper Sanskrit pronunciation",
        "Sacred mantras and meanings",
        "Breath control techniques",
        "Traditional methodologies",
        "Personal practice development"
      ]
    },
    {
      badge: "Certification",
      title: "Teacher Training",
      description: "Comprehensive certification program for authentic Vedic transmission. Includes bonus chanting classes and weekend discourse access.",
      price: "$100",
      duration: "complete certification",
      details: "15 lectures × 1 hour each",
      color: "green",
      link: "/teachings/teacher-training",
      features: [
        "Traditional teaching methodologies",
        "Scriptural interpretation skills",
        "Student guidance techniques",
        "Lineage-based transmission",
        "Official certification",
        "BONUS: 1 week chanting + 1 discourse"
      ]
    },
    {
      badge: "Lifestyle",
      title: "Vedic Lifestyle Experiences",
      description: "Customized immersive experiences for individuals, families, or groups. Personal spiritual retreats and holistic Vedic living programs.",
      price: "Custom Quote",
      duration: "based on requirements",
      details: "Share preferences for planning",
      color: "purple",
      link: "/teachings/lifestyle",
      features: [
        "Personalized spiritual retreats",
        "Group meditation intensives",
        "Family Vedic programs",
        "Corporate wellness sessions",
        "Custom spiritual journeys"
      ]
    }
  ],

  // TRANSFORMATION METRICS
  stats: [
    { label: "Global Students", value: "1000+", trend: "Growing Community", color: "orange" },
    { label: "Countries Reached", value: "25+", trend: "Worldwide Impact", color: "blue" },
    { label: "Hours of Wisdom", value: "500+", trend: "Recorded Sessions", color: "green" },
    { label: "Certified Teachers", value: "50+", trend: "Spreading Knowledge", color: "purple" }
  ],

  // SPIRITUAL WISDOM AREAS
  wisdomAreas: [
    {
      title: "Quantum Physics & Vedanta",
      description: "Discover how quantum entanglement mirrors Krishna's mamaivamsho and superposition reflects divine omnipresence.",
      icon: "book"
    },
    {
      title: "Sanskrit & Sacred Sound", 
      description: "Master the vibrational science of Sanskrit mantras and experience the transformative power of sacred sound.",
      icon: "om"
    },
    {
      title: "Meditation & Consciousness",
      description: "Explore advanced meditation techniques and consciousness studies bridging ancient wisdom with neuroscience.",
      icon: "heart"
    },
    {
      title: "Dharmic Living",
      description: "Apply timeless Vedic principles to modern life for harmony, prosperity, and spiritual evolution.",
      icon: "handsHelping"
    }
  ],

  // TEACHER PROFILE
  teacher: {
    name: "Dr. Nischaya Nagori",
    title: "Vedic Scholar & Spiritual Guide",
    image: "/assets/images/dr-nischaya-nagori.jpg",
    credentials: [
      "Deep expertise in Vedas, Puranas, and Sanskrit texts",
      "Authentic lineage in guru-disciple tradition",
      "Pioneer in scientific-spiritual integration",
      "Global teacher serving seekers worldwide"
    ],
    vision: "Bridging ancient Vedic wisdom with modern understanding through authentic transmission and scientific correlation.",
    socialLinks: [
      { platform: "YouTube", url: "https://youtube.com/@drnischayanagori" },
      { platform: "Facebook", url: "https://facebook.com/vedicwisdomseries" },
      { platform: "Instagram", url: "https://instagram.com/vedicwisdomseries" }
    ]
  },

  // TESTIMONIALS
  testimonials: [
    {
      name: "Sarah M.",
      role: "Quantum Physicist & Student",
      text: "Dr. Nischaya Nagori's approach to connecting quantum physics with Vedic wisdom has completely transformed my understanding of both science and spirituality. The weekend discourses are profound and practical.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Meditation Practitioner",
      text: "The chanting classes have brought such peace and clarity to my daily life. The authentic pronunciation guidance is invaluable for proper practice.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Certified Vedic Teacher",
      text: "The teacher training certification gave me the confidence and knowledge to share Vedic wisdom in my community. The lineage-based approach ensures authenticity.",
      rating: 5
    }
  ],

  // SPIRITUAL QUOTES
  quotes: [
    {
      sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
      translation: "Where there is Krishna, the Lord of Yoga, and where there is Arjuna, the wielder of the bow, there will surely be prosperity, victory, happiness, and righteousness.",
      source: "Bhagavad Gita 18.78"
    },
    {
      sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
      translation: "May all beings be happy, may all beings be healthy. May all beings experience prosperity, may none suffer.",
      source: "Ancient Vedic Prayer"
    }
  ]
}

// ICON MAPPING FUNCTION
export const getVedicIcon = (iconName: string) => {
  switch(iconName) {
    case 'om': return FaOm
    case 'globe': return FaGlobe  
    case 'heart': return FaHeart
    case 'book': return FaBook
    case 'graduationCap': return FaGraduationCap
    case 'handsHelping': return FaHandsHelping
    default: return FaOm
  }
}

// OFFERING COLOR MAPPING
export const getOfferingColor = (color: string) => {
  switch(color) {
    case 'orange': return 'orange'
    case 'blue': return 'blue'
    case 'green': return 'green'
    case 'purple': return 'purple'
    default: return 'yellow'
  }
}