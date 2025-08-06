import React, { useState } from 'react'
import { 
  FaEnvelope, 
  FaGlobe,
  FaCalendarCheck,
  FaQuestionCircle,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaShieldAlt,
  FaUserTie,
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaAtom,
  FaInfinity
} from 'react-icons/fa'
import SEOHead from '../components/SEOHead'
import { vedicWisdomSeries } from '../data/vedicWisdomSeries'
import { contentMaster, getPageContent } from '../data/contentMaster'
import {
  // Premium Layout System
  Section,
  Container,
  Grid,
  VStack,
  HStack,
  
  // Premium Typography
  Heading,
  Text,
  Badge,
  Quote,
  
  // Premium Form System
  Form,
  Input,
  Textarea,
  Select,
  Submit,
  
  // Premium Animation System
  Animation,
  Stagger,
  Hover,
  
  // Premium Core Components
  PremiumCard as Card,
  PremiumButton as Button
} from '../components/premium'
import { 
  Box, 
  Icon, 
  SimpleGrid, 
  useBreakpointValue,
  FormControl,
  FormLabel,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Progress,
  useColorModeValue
} from '@chakra-ui/react'

// 🌍 INTERNATIONAL CONTACT PAGE - SOPHISTICATED SPIRITUAL AUTHORITY
// Global Student Acquisition for Dr. Nischaya Nagori's Leadership

const ContactPage: React.FC = () => {
  const pageContent = getPageContent('contact')
  const toast = useToast()
  
  // Sophisticated consultation form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    timezone: '',
    program: '',
    background: '',
    objectives: '',
    availability: '',
    consent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sophisticated international contact channels
  const authorityChannels = [
    {
      icon: FaCalendarCheck,
      title: "Private Consultation",
      description: "Direct strategic session with Dr. Nischaya Nagori",
      authority: "Personal guidance from international Vedic authority",
      value: "Schedule Consultation",
      href: "#consultation-form",
      color: "primary",
      exclusive: true,
      credentials: ["One-on-one guidance", "Personalized program design", "Strategic spiritual roadmap"]
    },
    {
      icon: FaEnvelope,
      title: "Executive Inquiry",
      description: "Comprehensive program information and strategic consultation",
      authority: "Direct communication with teaching authority",
      value: "Submit Inquiry",
      href: "mailto:info@vaidikwisdomseries.com",
      color: "secondary",
      credentials: ["Detailed program analysis", "International accessibility", "Priority response"]
    },
    {
      icon: FaGlobe,
      title: "Global Community",
      description: "Connect with international student network and mentors",
      authority: "Access worldwide spiritual community",
      value: "Join Community",
      href: "/testimonials",
      color: "tertiary",
      credentials: ["Global student network", "Peer mentorship", "Cultural integration support"]
    }
  ]

  // Sophisticated international authority FAQ
  const authorityFAQ = [
    {
      question: "What establishes Dr. Nischaya Nagori's international authority?",
      answer: "Dr. Nischaya bridges authentic Vedic lineage with quantum consciousness research, serving 1000+ international students across 25+ countries. His unique integration of ancient wisdom with modern science creates unparalleled spiritual education for global seekers.",
      category: "authority"
    },
    {
      question: "How does the international program structure serve global students?",
      answer: "Our programs are designed for international accessibility with multiple timezone options, cultural adaptation strategies, and English-language delivery while maintaining authentic Sanskrit traditions. Students receive the same transformative experience regardless of geographic location.",
      category: "international"
    },
    {
      question: "What makes this spiritual education scientifically validated?",
      answer: "Dr. Nischaya's revolutionary approach demonstrates quantum mechanics principles encoded in ancient Vedic texts, providing scientific validation for spiritual experiences. This integration makes esoteric concepts accessible to contemporary minds while preserving traditional authenticity.",
      category: "scientific"
    },
    {
      question: "How do I determine the most suitable program for my spiritual evolution?",
      answer: "During your private consultation, Dr. Nischaya conducts a comprehensive spiritual assessment considering your background, objectives, and cultural context. This personalized approach ensures optimal program selection for your unique transformation journey.",
      category: "guidance"
    },
    {
      question: "What ongoing support is provided for international students?",
      answer: "International students receive comprehensive support including cultural integration guidance, timezone-flexible sessions, global community access, and priority communication channels. Our commitment extends beyond program completion to ensure sustained spiritual growth.",
      category: "support"
    },
    {
      question: "How does this education establish India's Vishwaguru leadership?",
      answer: "Through authentic transmission of Vedic wisdom to international students, we demonstrate India's natural role as global spiritual teacher. Our programs showcase how ancient Indian knowledge provides solutions for contemporary spiritual and consciousness challenges worldwide.",
      category: "vishwaguru"
    }
  ]

  // Sophisticated form submission with international handling
  const handleConsultationSubmit = async (data: Record<string, any>) => {
    setIsSubmitting(true)
    
    // Simulate sophisticated form processing
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "🌍 International Consultation Scheduled",
        description: "Dr. Nischaya Nagori will personally contact you within 24 hours to confirm your strategic spiritual consultation.",
        status: "success",
        duration: 8000,
        isClosable: true,
      })
      
      // Reset form state
      setFormData({
        name: '', email: '', country: '', timezone: '', program: '', 
        background: '', objectives: '', availability: '', consent: false
      })
    }, 2500)
  }

  return (
    <>
      <SEOHead
        title="Connect with International Vedic Authority - Dr. Nischaya Nagori Consultation"
        description="Schedule private consultation with Dr. Nischaya Nagori, internationally recognized Vedic authority serving global students. Strategic spiritual guidance for international seekers."
        keywords={[
          'Dr. Nischaya Nagori Consultation', 'International Vedic Authority', 'Global Spiritual Guidance', 'Private Vedic Consultation',
          'Strategic Spiritual Coaching', 'International Spiritual Teacher', 'Vedic Wisdom Consultation', 'Global Guru Guidance',
          'Quantum Consciousness Consulting', 'International Spiritual Authority', 'Vishwaguru Consultation', 'Global Vedic Education'
        ]}
        image="/assets/images/contact-international-authority.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage", 
          "name": "International Consultation - Dr. Nischaya Nagori",
          "description": "Connect with internationally recognized Vedic authority for strategic spiritual guidance and program consultation.",
          "mainEntity": {
            "@type": "Person",
            "name": "Dr. Nischaya Nagori",
            "jobTitle": "International Vedic Authority & Quantum Consciousness Pioneer",
            "description": "Global spiritual teacher serving 1000+ international students across 25+ countries with authentic Vedic wisdom.",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@vaidikwisdomseries.com",
              "contactType": "Strategic Spiritual Consultation",
              "availableLanguage": "English",
              "serviceArea": "Worldwide"
            }
          }
        }}
      />

      {/* 🕉️ HERO SECTION - INTERNATIONAL SPIRITUAL AUTHORITY */}
      <Section variant="hero" background="gradient" animate>
        <Container size="xl">
          <Animation variant="fadeIn" duration={1.2}>
            <VStack spacing={10} textAlign="center">
              {/* International Authority Badge */}
              <Badge variant="glass" size="xl" icon={<FaUniversity />}>
                🌍 CONNECT WITH INTERNATIONAL VEDIC AUTHORITY
              </Badge>
              
              <VStack spacing={6}>
                <Heading variant="hero" level={1} color="white" maxW="6xl">
                  Strategic Consultation with Dr. Nischaya Nagori
                </Heading>
                
                <Heading variant="section" level={2} color="whiteAlpha.900" maxW="5xl">
                  Personal Guidance from Global Spiritual Authority
                </Heading>
                
                <Text variant="lead" color="whiteAlpha.800" maxW="4xl">
                  Schedule private consultation with internationally recognized Vedic scholar serving 
                  1000+ global students. Receive personalized program guidance, strategic spiritual 
                  roadmap, and direct access to authentic Vedic wisdom from India's premier authority.
                </Text>
              </VStack>

              {/* Authority Credentials */}
              <HStack spacing={12} justify="center" flexWrap="wrap">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="tertiary.300">1000+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">International Students</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="secondary.300">25+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Countries Served</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="primary.300">24hr</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Response Time</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="green.300">30min</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Private Session</Text>
                </VStack>
              </HStack>

              {/* Sophisticated CTAs */}
              <HStack spacing={6} flexWrap="wrap" justify="center">
                <Button 
                  variant="premium" 
                  size="xl" 
                  shimmer 
                  icon={FaCalendarCheck}
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Private Consultation
                </Button>
                <Button variant="glass" size="xl" icon={FaEnvelope}>
                  Submit Strategic Inquiry
                </Button>
              </HStack>

              {/* Authority Indicators */}
              <HStack spacing={8} justify="center" flexWrap="wrap" pt={4}>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🎓 International Authority</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🔬 Scientific Integration</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🌍 Global Accessibility</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">💯 Personalized Guidance</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🌟 SOPHISTICATED CONTACT CHANNELS */}
      <Section variant="feature" background="pattern" padding="xl">
        <Container size="lg">
          <VStack spacing={16}>
            <Animation variant="slideUp">
              <VStack spacing={6} textAlign="center">
                <Badge variant="gradient" colorScheme="secondary" size="xl" icon={<FaGlobe />}>
                  🎯 SOPHISTICATED CONNECTION CHANNELS
                </Badge>
                <Heading variant="section" level={2}>
                  Connect with International Authority
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Three sophisticated channels to connect with Dr. Nischaya Nagori and receive 
                  personalized guidance for your spiritual evolution from globally recognized authority.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.2}>
              <Grid columns={{ base: 1, md: 3 }} spacing={8} equalHeight>
                {authorityChannels.map((channel, index) => (
                  <Hover key={channel.title} variant="lift" intensity="normal">
                    <Card variant="elevated" premium h="full" position="relative">
                      {/* Exclusive Badge */}
                      {channel.exclusive && (
                        <Box
                          position="absolute"
                          top={-3}
                          right={6}
                          bg="primary.500"
                          color="white"
                          px={4}
                          py={2}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="bold"
                          zIndex={2}
                          boxShadow="lg"
                        >
                          🎯 EXCLUSIVE ACCESS
                        </Box>
                      )}

                      <VStack spacing={8} p={8} align="center" h="full" textAlign="center">
                        {/* Authority Icon */}
                        <Box
                          bg={`${channel.color}.100`}
                          p={6}
                          borderRadius="full"
                          border="3px solid"
                          borderColor={`${channel.color}.200`}
                        >
                          <Icon as={channel.icon} boxSize={12} color={`${channel.color}.500`} />
                        </Box>
                        
                        <VStack spacing={4} align="center">
                          <Heading variant="card" level={3}>
                            {channel.title}
                          </Heading>
                          
                          <Text variant="body" color="gray.600" fontSize="sm">
                            {channel.description}
                          </Text>
                          
                          <Text variant="caption" color={`${channel.color}.600`} fontWeight="bold" fontSize="xs">
                            {channel.authority}
                          </Text>
                        </VStack>

                        {/* Credentials */}
                        <VStack spacing={3} w="full">
                          {channel.credentials.map((credential, idx) => (
                            <HStack key={idx} spacing={3} w="full" justify="center">
                              <Icon as={FaCheckCircle} color={`${channel.color}.500`} boxSize={4} />
                              <Text fontSize="sm" color="gray.700" textAlign="center">
                                {credential}
                              </Text>
                            </HStack>
                          ))}
                        </VStack>

                        {/* Sophisticated CTA */}
                        <Button
                          variant="premium"
                          size="lg"
                          icon={channel.icon}
                          shimmer={channel.exclusive}
                          onClick={channel.href.startsWith('#') ? 
                            () => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }) : 
                            undefined}
                          as={channel.href.startsWith('#') ? 'button' : 'a'}
                          href={channel.href.startsWith('#') ? undefined : channel.href}
                          w="full"
                        >
                          {channel.value}
                        </Button>
                      </VStack>
                    </Card>
                  </Hover>
                ))}
              </Grid>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* 🎯 SOPHISTICATED CONSULTATION FORM */}
      <Section variant="content" padding="xl" id="consultation-form">
        <Container size="md">
          <Animation variant="scaleIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="primary" size="xl" icon={<FaUserTie />}>
                🎓 PRIVATE CONSULTATION REQUEST
              </Badge>
              
              <Heading variant="section" level={2}>
                Strategic Spiritual Consultation
              </Heading>
              
              <Text variant="lead" maxW="3xl">
                Complete this sophisticated consultation request to receive personalized guidance 
                from Dr. Nischaya Nagori, internationally recognized Vedic authority.
              </Text>
            </VStack>
          </Animation>

          <Animation variant="slideUp" delay={0.3}>
            <Form
              variant="premium"
              title="International Consultation Request"
              subtitle="Strategic guidance from global spiritual authority"
              onSubmit={handleConsultationSubmit}
              spacing={8}
              p={10}
            >
              <Grid columns={{ base: 1, md: 2 }} spacing={6}>
                <Input
                  name="name"
                  label="Full Name"
                  placeholder="Your complete name"
                  variant="premium"
                  icon={FaUserTie}
                  required
                />
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="your.email@domain.com"
                  variant="premium"
                  icon={FaEnvelope}
                  required
                />
              </Grid>

              <Grid columns={{ base: 1, md: 2 }} spacing={6}>
                <Input
                  name="country"
                  label="Country/Region"
                  placeholder="Your country of residence"
                  variant="premium"
                  icon={FaGlobe}
                  required
                />
                <Select
                  name="timezone"
                  label="Time Zone"
                  placeholder="Select your time zone"
                  variant="premium"
                  options={[
                    { value: 'PST', label: 'Pacific Time (PST/PDT)' },
                    { value: 'MST', label: 'Mountain Time (MST/MDT)' },
                    { value: 'CST', label: 'Central Time (CST/CDT)' },
                    { value: 'EST', label: 'Eastern Time (EST/EDT)' },
                    { value: 'GMT', label: 'GMT/UTC (London)' },
                    { value: 'CET', label: 'Central European Time' },
                    { value: 'IST', label: 'India Standard Time' },
                    { value: 'JST', label: 'Japan Standard Time' },
                    { value: 'AEST', label: 'Australian Eastern Time' },
                    { value: 'other', label: 'Other (specify in message)' }
                  ]}
                  required
                />
              </Grid>

              <Select
                name="program"
                label="Program of Interest"
                placeholder="Select your preferred program"
                variant="premium"
                options={[
                  { value: 'discourses', label: 'Weekend Discourses - Authentic Vedic Interpretation ($25)' },
                  { value: 'chanting', label: 'Chanting Classes - Sacred Sanskrit Sounds ($30)' },
                  { value: 'training', label: 'Teacher Training - Professional Certification ($100)' },
                  { value: 'lifestyle', label: 'Lifestyle Experiences - Personalized Journey (Custom)' },
                  { value: 'multiple', label: 'Multiple Programs - Comprehensive Approach' },
                  { value: 'consultation', label: 'Strategic Consultation - Personalized Guidance' }
                ]}
                required
              />

              <Select
                name="background"
                label="Spiritual Background"
                placeholder="Select your experience level"
                variant="premium"
                options={[
                  { value: 'beginner', label: 'Beginner - New to spiritual practices' },
                  { value: 'explorer', label: 'Explorer - Some spiritual interest and reading' },
                  { value: 'practitioner', label: 'Practitioner - Regular meditation/study practice' },
                  { value: 'advanced', label: 'Advanced - Deep spiritual practice and understanding' },
                  { value: 'teacher', label: 'Teacher/Leader - Sharing spiritual knowledge' }
                ]}
                required
              />

              <Textarea
                name="objectives"
                label="Spiritual Objectives & Goals"
                placeholder="Describe your primary spiritual goals, what draws you to Vedic wisdom, and how you hope this consultation will support your journey..."
                variant="premium"
                rows={4}
                required
              />

              <Select
                name="availability"
                label="Consultation Availability"
                placeholder="Select your preferred time"
                variant="premium"
                options={[
                  { value: 'morning', label: 'Morning (9 AM - 12 PM my timezone)' },
                  { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM my timezone)' },
                  { value: 'evening', label: 'Evening (5 PM - 8 PM my timezone)' },
                  { value: 'weekend', label: 'Weekends preferred' },
                  { value: 'flexible', label: 'Flexible - can accommodate any time' }
                ]}
                required
              />

              {/* Authority Commitment */}
              <Card variant="glass" p={6}>
                <VStack spacing={4} textAlign="center">
                  <Icon as={FaShieldAlt} boxSize={10} color="green.500" />
                  <Heading variant="card" level={4} color="green.700">
                    International Authority Commitment
                  </Heading>
                  <VStack spacing={2} fontSize="sm" color="gray.700">
                    <Text>🎓 30-minute private consultation with Dr. Nischaya Nagori</Text>
                    <Text>🌍 Personalized guidance for international students</Text>
                    <Text>🔬 Scientific-spiritual integration approach</Text>
                    <Text>💯 Strategic program recommendations</Text>
                    <Text>🕉️ No pressure, authentic spiritual guidance</Text>
                  </VStack>
                </VStack>
              </Card>

              <Submit
                variant="premium"
                size="xl"
                fullWidth
                loading={isSubmitting}
                icon={FaCalendarCheck}
                shimmer
              >
                Schedule Strategic Consultation
              </Submit>
            </Form>
          </Animation>
        </Container>
      </Section>

      {/* 🌍 SOPHISTICATED FAQ SECTION */}
      <Section variant="testimonial" background="glass" padding="xl">
        <Container size="lg">
          <VStack spacing={12}>
            <Animation variant="slideUp">
              <VStack spacing={6} textAlign="center">
                <Badge variant="solid" colorScheme="tertiary" size="xl" icon={<FaInfinity />}>
                  💡 INTERNATIONAL AUTHORITY INSIGHTS
                </Badge>
                <Heading variant="section" level={2}>
                  Sophisticated Guidance Questions
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Essential insights about connecting with international Vedic authority and 
                  accessing authentic spiritual education from India's global leadership.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.1}>
              <VStack spacing={6} w="full">
                {authorityFAQ.map((faq, index) => (
                  <Animation key={index} variant="slideUp" delay={index * 0.1}>
                    <Card variant="elevated" premium w="full">
                      <VStack spacing={4} p={8} align="start">
                        <HStack spacing={4} w="full">
                          <Icon as={FaQuestionCircle} color="primary.500" boxSize={6} />
                          <Heading variant="card" level={4} flex={1}>
                            {faq.question}
                          </Heading>
                        </HStack>
                        <Text variant="body" color="gray.700" lineHeight="tall" pl={10}>
                          {faq.answer}
                        </Text>
                      </VStack>
                    </Card>
                  </Animation>
                ))}
              </VStack>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* 🚀 FINAL AUTHORITY CTA */}
      <Section variant="cta" background="gradient" padding="xl">
        <Container size="lg">
          <Animation variant="bounceIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="tertiary" size="xl" icon={<FaAtom />}>
                🌟 CONNECT WITH GLOBAL AUTHORITY
              </Badge>
              
              <Heading variant="section" level={2} color="white">
                Ready for Strategic Spiritual Guidance?
              </Heading>
              
              <Text variant="lead" maxW="4xl" color="whiteAlpha.900">
                Join 1000+ international students receiving personalized guidance from Dr. Nischaya Nagori. 
                Experience the perfect synthesis of ancient Vedic wisdom and modern quantum consciousness 
                through sophisticated spiritual education designed for global transformation.
              </Text>
              
              <HStack spacing={6} flexWrap="wrap" justify="center">
                <Button 
                  variant="premium" 
                  size="xl" 
                  shimmer 
                  icon={FaCalendarCheck}
                  onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Private Consultation
                </Button>
                <Button variant="glass" size="xl" icon={FaGraduationCap}>
                  Explore All Programs
                </Button>
              </HStack>
              
              {/* Final Authority Indicators */}
              <HStack spacing={8} justify="center" flexWrap="wrap" pt={6}>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🎓 International Recognition</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🌍 Global Accessibility</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🔬 Scientific Validation</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">💯 Personalized Approach</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>
    </>
  )
}

export default ContactPage