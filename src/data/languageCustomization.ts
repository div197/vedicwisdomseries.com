/**
 * 🕉️ LANGUAGE-SPECIFIC SANSKRIT CUSTOMIZATION
 * Dr. Nischaya Nagori's USP: Graded difficulty by native language
 * Making Sanskrit accessible through targeted phonetic training
 */

export interface LanguageProfile {
  code: string;
  name: string;
  difficultSounds: string[];
  retroflex: string[];
  nasalized: string[];
  specialConsonants: string[];
  practiceWords: string[];
  videoResourceUrl: string;
  customInstructions: string;
}

export const languageProfiles: Record<string, LanguageProfile> = {
  'fr': {
    code: 'fr',
    name: 'French',
    difficultSounds: ['ट', 'ठ', 'ड', 'ढ', 'ण', 'श', 'ष'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)', 'ण (ṇa)'],
    nasalized: ['अं (aṃ)', 'अँ (am̐)'],
    specialConsonants: ['श (śa)', 'ष (ṣa)', 'क्ष (kṣa)', 'ज्ञ (jña)'],
    practiceWords: [
      'गणेश (Gaṇeśa)',
      'कृष्ण (Kṛṣṇa)',
      'शिव (Śiva)',
      'विष्णु (Viṣṇu)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-french-speakers',
    customInstructions: 'Focus on retroflex sounds first. Practice tongue placement against the roof of mouth.'
  },
  
  'es': {
    code: 'es',
    name: 'Spanish',
    difficultSounds: ['ऋ', 'ॠ', 'ङ', 'ञ', 'ण'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)'],
    nasalized: ['ङ (ṅa)', 'ञ (ña)', 'ण (ṇa)'],
    specialConsonants: ['ऋ (ṛ)', 'ॠ (ṝ)', 'ळ (ḷa)'],
    practiceWords: [
      'ऋषि (Ṛṣi)',
      'धर्म (Dharma)',
      'कर्म (Karma)',
      'मन्त्र (Mantra)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-spanish-speakers',
    customInstructions: 'Spanish speakers excel at rolled sounds. Focus on aspirated consonants.'
  },
  
  'de': {
    code: 'de',
    name: 'German',
    difficultSounds: ['ण', 'ळ', 'ङ', 'ञ'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)', 'ण (ṇa)'],
    nasalized: ['अं (aṃ)', 'अः (aḥ)'],
    specialConsonants: ['ळ (ḷa)', 'क्ष (kṣa)', 'ज्ञ (jña)'],
    practiceWords: [
      'योग (Yoga)',
      'वेद (Veda)',
      'ब्रह्म (Brahma)',
      'आत्मा (Ātmā)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-german-speakers',
    customInstructions: 'German speakers handle compound consonants well. Focus on nasalization.'
  },
  
  'zh': {
    code: 'zh',
    name: 'Chinese',
    difficultSounds: ['र', 'ऋ', 'aspirated consonants'],
    retroflex: ['र (ra)', 'ऋ (ṛ)', 'ॠ (ṝ)'],
    nasalized: ['अं (aṃ)', 'अः (aḥ)'],
    specialConsonants: ['ख (kha)', 'घ (gha)', 'थ (tha)', 'ध (dha)', 'फ (pha)', 'भ (bha)'],
    practiceWords: [
      'राम (Rāma)',
      'धर्म (Dharma)',
      'भक्ति (Bhakti)',
      'प्राण (Prāṇa)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-chinese-speakers',
    customInstructions: 'Focus on aspirated vs non-aspirated distinction. Tonal background helps with pitch.'
  },
  
  'ja': {
    code: 'ja',
    name: 'Japanese',
    difficultSounds: ['व', 'ल', 'र/ल distinction'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)'],
    nasalized: ['अं (aṃ)', 'अँ (am̐)'],
    specialConsonants: ['व (va)', 'ल (la)', 'ळ (ḷa)'],
    practiceWords: [
      'वेद (Veda)',
      'लक्ष्मी (Lakṣmī)',
      'शान्ति (Śānti)',
      'मोक्ष (Mokṣa)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-japanese-speakers',
    customInstructions: 'Japanese speakers excel at syllabic clarity. Focus on v/w and r/l distinctions.'
  },
  
  'ar': {
    code: 'ar',
    name: 'Arabic',
    difficultSounds: ['प', 'aspirated sounds', 'compound consonants'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)'],
    nasalized: ['अं (aṃ)', 'अः (aḥ)'],
    specialConsonants: ['प (pa)', 'फ (pha)', 'क्ष (kṣa)', 'ज्ञ (jña)'],
    practiceWords: [
      'पुराण (Purāṇa)',
      'ज्ञान (Jñāna)',
      'भगवान् (Bhagavān)',
      'प्रकाश (Prakāśa)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-arabic-speakers',
    customInstructions: 'Arabic speakers handle gutturals well. Focus on aspirated consonants.'
  },
  
  'en': {
    code: 'en',
    name: 'English',
    difficultSounds: ['retroflex series', 'aspirated consonants', 'long vowels'],
    retroflex: ['ट (ṭa)', 'ठ (ṭha)', 'ड (ḍa)', 'ढ (ḍha)', 'ण (ṇa)'],
    nasalized: ['अं (aṃ)', 'अः (aḥ)', 'अँ (am̐)'],
    specialConsonants: ['All aspirated consonants'],
    practiceWords: [
      'नमस्ते (Namaste)',
      'गुरु (Guru)',
      'चक्र (Cakra)',
      'मन्त्र (Mantra)'
    ],
    videoResourceUrl: '/resources/sanskrit-for-english-speakers',
    customInstructions: 'Focus on aspirated vs non-aspirated pairs. Practice retroflex tongue position.'
  }
};

// Graded difficulty system
export const difficultyGrades = {
  beginner: {
    sounds: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'क', 'ग', 'त', 'द', 'प', 'ब', 'म', 'य', 'र', 'ल', 'व', 'स', 'ह'],
    mantras: ['ॐ', 'नमः शिवाय', 'ॐ गं गणपतये नमः'],
    focus: 'Basic vowels and consonants'
  },
  
  intermediate: {
    sounds: ['ए', 'ऐ', 'ओ', 'औ', 'ख', 'घ', 'च', 'छ', 'ज', 'झ', 'थ', 'ध', 'फ', 'भ', 'श', 'ष'],
    mantras: ['गायत्री मन्त्र', 'महामृत्युञ्जय मन्त्र'],
    focus: 'Aspirated consonants and compound vowels'
  },
  
  advanced: {
    sounds: ['ऋ', 'ॠ', 'ऌ', 'ॡ', 'ट', 'ठ', 'ड', 'ढ', 'ण', 'ङ', 'ञ', 'ळ', 'क्ष', 'ज्ञ'],
    mantras: ['श्री रुद्रम्', 'विष्णु सहस्रनाम'],
    focus: 'Retroflex series and special combinations'
  }
};

// Get customized learning path
export function getCustomizedLearningPath(nativeLanguage: string) {
  const profile = languageProfiles[nativeLanguage] || languageProfiles['en'];
  
  return {
    week1: {
      title: 'Foundation & Problem Sounds',
      focus: profile.difficultSounds,
      exercises: profile.practiceWords.slice(0, 2),
      videoUrl: `${profile.videoResourceUrl}/week1`
    },
    week2: {
      title: 'Retroflex Mastery',
      focus: profile.retroflex,
      exercises: profile.practiceWords.slice(2, 4),
      videoUrl: `${profile.videoResourceUrl}/week2`
    },
    week3: {
      title: 'Special Consonants',
      focus: profile.specialConsonants,
      exercises: ['Simple mantras with focus sounds'],
      videoUrl: `${profile.videoResourceUrl}/week3`
    },
    week4: {
      title: 'Nasalization & Flow',
      focus: profile.nasalized,
      exercises: ['Complete mantra practice'],
      videoUrl: `${profile.videoResourceUrl}/week4`
    },
    week5_6: {
      title: 'Integration & Fluency',
      focus: 'Complete chanting practice',
      exercises: ['Full mantras with proper pronunciation'],
      videoUrl: `${profile.videoResourceUrl}/week5-6`
    }
  };
}

// Assessment criteria for pronunciation
export const pronunciationAssessment = {
  criteria: [
    {
      name: 'Retroflex Accuracy',
      weight: 0.25,
      checkPoints: ['Tongue placement', 'Clear distinction from dentals']
    },
    {
      name: 'Aspiration Control',
      weight: 0.20,
      checkPoints: ['Breath release', 'Consistent aspiration']
    },
    {
      name: 'Vowel Length',
      weight: 0.15,
      checkPoints: ['Short vs long distinction', 'Proper duration']
    },
    {
      name: 'Nasalization',
      weight: 0.15,
      checkPoints: ['Anusvara clarity', 'Anunasika resonance']
    },
    {
      name: 'Flow & Rhythm',
      weight: 0.15,
      checkPoints: ['Natural flow', 'Proper pauses', 'Vedic meter']
    },
    {
      name: 'Special Sounds',
      weight: 0.10,
      checkPoints: ['ऋ pronunciation', 'Compound consonants']
    }
  ],
  
  passingScore: 80,
  excellenceScore: 95
};