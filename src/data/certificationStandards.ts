/**
 * 🕉️ CERTIFICATION STANDARDS - DR. NISCHAYA NAGORI
 * Two-tier certification system for Teacher Training Program
 */

export interface CertificationTier {
  id: string;
  name: string;
  requirements: string[];
  assessment: AssessmentCriteria;
  certificateDesign: CertificateTemplate;
}

export interface AssessmentCriteria {
  type: 'completion' | 'excellence';
  components: AssessmentComponent[];
  passingScore?: number;
  evaluators: string[];
}

export interface AssessmentComponent {
  name: string;
  weight: number;
  method: 'automatic' | 'oral' | 'practical' | 'written';
  description: string;
}

export interface CertificateTemplate {
  title: string;
  subtitle: string;
  signatories: string[];
  validityPeriod?: string;
  privileges: string[];
}

export const certificationTiers = {
  completion: {
    id: 'ttp-completion',
    name: 'Certificate of Completion - Teacher Training Program',
    requirements: [
      'Complete all 15 lectures (1 hour each)',
      'Submit practice recordings for each module',
      'Participate in all Q&A sessions',
      'Complete assigned readings and homework',
      'Maintain 90% attendance'
    ],
    assessment: {
      type: 'completion' as const,
      components: [
        {
          name: 'Attendance',
          weight: 0.30,
          method: 'automatic',
          description: 'Automated tracking of session participation'
        },
        {
          name: 'Assignment Submission',
          weight: 0.30,
          method: 'automatic',
          description: 'Timely submission of all assignments'
        },
        {
          name: 'Practice Recordings',
          weight: 0.40,
          method: 'practical',
          description: 'Weekly recording submissions'
        }
      ],
      evaluators: ['System Automated']
    },
    certificateDesign: {
      title: 'Certificate of Completion',
      subtitle: 'Teacher Training Program in Vedic Chanting',
      signatories: ['Dr. Nischaya Nagori'],
      privileges: [
        'Recognition as TTP graduate',
        'Access to alumni resources',
        'Eligibility for Excellence assessment',
        'Community teaching opportunities'
      ]
    }
  },
  
  excellence: {
    id: 'ttp-excellence',
    name: 'Certificate of EXCELLENCE - Certified Vedic Teacher',
    requirements: [
      'Complete Teacher Training Program first',
      'Pass oral examination by expert panel',
      'Demonstrate accurate pronunciation (95%+ accuracy)',
      'Show teaching capability in mock session',
      'Submit teaching philosophy statement',
      'Complete advanced Sanskrit module'
    ],
    assessment: {
      type: 'excellence' as const,
      components: [
        {
          name: 'Oral Examination',
          weight: 0.40,
          method: 'oral',
          description: 'Live chanting assessment by expert panel'
        },
        {
          name: 'Pronunciation Accuracy',
          weight: 0.30,
          method: 'oral',
          description: 'Technical accuracy of Sanskrit sounds'
        },
        {
          name: 'Teaching Demonstration',
          weight: 0.20,
          method: 'practical',
          description: 'Mock teaching session with feedback'
        },
        {
          name: 'Philosophy & Understanding',
          weight: 0.10,
          method: 'written',
          description: 'Written submission on Vedic philosophy'
        }
      ],
      passingScore: 95,
      evaluators: [
        'Dr. Nischaya Nagori',
        'Senior Sanskrit Scholars',
        'External Vedic Experts'
      ]
    },
    certificateDesign: {
      title: 'Certificate of EXCELLENCE',
      subtitle: 'Certified Vedic Wisdom Teacher',
      signatories: [
        'Dr. Nischaya Nagori',
        'Guest Expert Evaluator',
        'Program Director'
      ],
      validityPeriod: '3 years (renewable)',
      privileges: [
        'Authorized to teach Vedic chanting globally',
        'Use of "Certified by Dr. Nischaya Nagori" credential',
        'Priority access to advanced workshops',
        'Listing on official teacher directory',
        'Referral opportunities from main platform',
        'Annual continuing education credits'
      ]
    }
  }
};

// Oral examination rubric
export const oralExaminationRubric = {
  sections: [
    {
      name: 'Basic Mantras',
      mantras: ['गायत्री मन्त्र', 'महामृत्युञ्जय मन्त्र', 'गणेश मन्त्र'],
      points: 30
    },
    {
      name: 'Vedic Hymns',
      mantras: ['पुरुष सूक्तम् (opening)', 'श्री सूक्तम् (opening)', 'रुद्रम् (selection)'],
      points: 40
    },
    {
      name: 'Complex Passages',
      mantras: ['Selected verses from Bhagavad Gita', 'Upanishadic mantras'],
      points: 30
    }
  ],
  
  evaluationCriteria: {
    pronunciation: {
      weight: 0.40,
      aspects: ['Retroflex accuracy', 'Aspiration', 'Vowel length', 'Special sounds']
    },
    rhythm: {
      weight: 0.25,
      aspects: ['Vedic meter', 'Proper pauses', 'Flow consistency']
    },
    clarity: {
      weight: 0.20,
      aspects: ['Voice projection', 'Distinct syllables', 'No mumbling']
    },
    understanding: {
      weight: 0.15,
      aspects: ['Meaning awareness', 'Proper emphasis', 'Spiritual connection']
    }
  }
};

// Certificate verification system
export const certificateVerification = {
  generateCertificateId: (type: 'completion' | 'excellence', year: number, sequence: number) => {
    const prefix = type === 'excellence' ? 'VWS-EX' : 'VWS-TC';
    return `${prefix}-${year}-${String(sequence).padStart(4, '0')}`;
  },
  
  verificationUrl: 'https://vaidikwisdomseries.com/verify/',
  
  verificationData: {
    certificateId: '',
    recipientName: '',
    issueDate: '',
    type: '',
    validUntil: '',
    achievements: [],
    verifiedBy: []
  }
};