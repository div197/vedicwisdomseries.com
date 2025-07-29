import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Icon, 
  Link as ChakraLink, 
  SimpleGrid, 
  useBreakpointValue,
  Card,
  CardBody,
  Badge,
  Button,
  useColorModeValue,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Divider,
  IconButton,
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
  Circle,
  Flex,
  Grid,
  GridItem
} from '@chakra-ui/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock,
  FaUsers,
  FaGlobe,
  FaCalendarCheck,
  FaOm,
  FaQuestionCircle,
  FaCheckCircle,
  FaArrowRight,
  FaBook,
  FaGraduationCap,
  FaLightbulb,
  FaQuoteLeft,
  FaStar,
  FaShieldAlt,
  FaUserTie,
  FaGift,
  FaCertificate,
  FaVideo,
  FaFire,
  FaCrown,
  FaRocket,
  FaHeart
} from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../siteConfig';
import { vedicWisdomSeries } from '../data/vedicWisdomSeries';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';
import { contentMaster, getPageContent } from '../data/contentMaster';
import { OptimizedCTA } from '../components/OptimizedCTA';

export default function ContactPage() {
  // Enhanced content from contentMaster
  const pageContent = getPageContent('contact');
  
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timezone: '',
    program: '',
    experience: '',
    goals: '',
    urgency: '',
    availability: '',
    consent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Stepper configuration for multi-step form
  const steps = [
    { title: 'About You', description: 'Basic information' },
    { title: 'Your Goals', description: 'Spiritual aspirations' },
    { title: 'Consultation', description: 'Schedule your call' }
  ];
  
  const { activeStep } = useSteps({
    index: currentStep,
    count: steps.length,
  });

  // Advanced color scheme with conversion psychology
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50 via blue.50 to yellow.50)',
    'linear(to-br, gray.900 via gray.800 to gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const accentBg = useColorModeValue('orange.50', 'orange.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');
  const urgentColor = useColorModeValue('red.500', 'red.400');
  const successColor = useColorModeValue('green.500', 'green.400');

  // Advanced animations
  const heroIconAnimation = useSlideAnimation(slideAnimationConfigs.heroIcon);
  const heroTitleAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const heroSubtitleAnimation = useSlideAnimation(slideAnimationConfigs.heroSubtitle);
  const heroDescAnimation = useSlideAnimation(slideAnimationConfigs.heroDescription);
  const heroCTAAnimation = useSlideAnimation(slideAnimationConfigs.heroButtons);
  const methodsAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom);
  const formAnimation = useSlideAnimation({ ...slideAnimationConfigs.fromLeft, delay: 200 });

  // Enhanced contact methods with conversion optimization
  const contactMethods = [
    {
      icon: FaCalendarCheck,
      title: "Free Discovery Call",
      description: "30-min personal consultation with Dr. Nischaya",
      urgency: "🔥 Only 5 spots left this month",
      value: "Book Your Session",
      href: "#consultation-form",
      color: "orange",
      popular: true,
      benefits: ["Personal guidance", "Program recommendations", "No commitment required"]
    },
    {
      icon: FaWhatsapp,
      title: "Instant WhatsApp",
      description: "Quick responses for urgent spiritual inquiries",
      urgency: "⚡ Usually responds within 1 hour",
      value: "Message Dr. Nischaya",
      href: "https://wa.me/919876543210",
      color: "green",
      benefits: ["Immediate response", "Direct connection", "Available 6 days/week"]
    },
    {
      icon: FaEnvelope,
      title: "Email Support", 
      description: "Detailed spiritual consultations and program info",
      urgency: "📧 Guaranteed 24hr response",
      value: "Send Email Inquiry",
      href: "mailto:info@vedicwisdomseries.com",
      color: "blue",
      benefits: ["Detailed answers", "Program comparisons", "Attachment support"]
    }
  ];

  // Enhanced FAQ with conversion psychology
  const faqs = [
    {
      question: "What makes your free discovery call different?",
      answer: "Dr. Nischaya personally conducts every discovery call to understand your unique spiritual path. You'll receive personalized program recommendations, answers to all your questions, and a clear roadmap for your quantum-spiritual journey - with zero pressure or commitment.",
      category: "consultation"
    },
    {
      question: "How quickly can I start my spiritual transformation?",
      answer: "Most students begin their chosen program within 48 hours of consultation. Weekend Discourses start every Saturday, Chanting Classes have rolling enrollment, and Teacher Training cohorts begin monthly. Your transformation journey can start this week!",
      category: "enrollment"
    },
    {
      question: "Do I need any prior spiritual or Sanskrit knowledge?",
      answer: "Absolutely not! 80% of our students start with zero spiritual background. Dr. Nischaya's revolutionary teaching method makes ancient wisdom accessible to complete beginners while providing depth for advanced practitioners.",
      category: "prerequisites"
    },
    {
      question: "What if I'm not satisfied with my program?",
      answer: "We offer a 7-day money-back guarantee on all programs. If you're not completely satisfied after your first week, we'll provide a full refund - no questions asked. Your spiritual journey should feel aligned and transformative from day one.",
      category: "guarantee"
    },
    {
      question: "How do online sessions compare to in-person teaching?",
      answer: "Our online format actually enhances the learning experience! You get recorded sessions for review, interactive Q&A, global community connection, and the comfort of learning from home. Many students report deeper focus and better retention than traditional classroom settings.",
      category: "format"
    },
    {
      question: "Can I upgrade or switch programs later?",
      answer: "Yes! Many students start with Weekend Discourses and upgrade to Teacher Training. We offer flexible transitions with credit for previous programs. Your spiritual evolution is unique, and our programs adapt to your growing needs.",
      category: "flexibility"
    }
  ];

  // Advanced form validation and progression
  const validateStep = (step: number) => {
    switch (step) {
      case 0:
        return formData.name && formData.email;
      case 1:
        return formData.program && formData.goals;
      case 2:
        return formData.urgency && formData.availability;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Enhanced form submission with conversion tracking
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission with analytics
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "🕉️ Consultation Request Received!",
        description: "Dr. Nischaya will personally reach out within 24 hours to schedule your free discovery call.",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      
      // Reset form after successful submission
      setCurrentStep(0);
      setFormData({
        name: '', email: '', phone: '', timezone: '', program: '', 
        experience: '', goals: '', urgency: '', availability: '', consent: false
      });
    }, 2000);
  };

  return (
    <>
      <SEOHead
        title={`${pageContent.headline} - ${siteConfig.siteName}`}
        description={pageContent.description}
        keywords={['Spiritual Consultation', 'Dr. Nischaya Nagori Contact', 'Quantum Spirituality Guidance', 'Vedic Wisdom Consultation', 'Free Discovery Call', 'Ancient Wisdom Teacher']}
        image={`${siteConfig.siteUrl}/assets/images/contact-quantum-consultation.jpg`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage", 
          "name": "Contact Vedic Wisdom Series",
          "description": pageContent.description,
          "url": `${siteConfig.siteUrl}/contact`,
          "mainEntity": {
            "@type": "Person",
            "name": "Dr. Nischaya Nagori",
            "jobTitle": "Vedic Scholar & Quantum Spirituality Teacher",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919876543210",
              "email": "info@vedicwisdomseries.com",
              "contactType": "Spiritual Consultation"
            }
          }
        }}
      />

      <Box bgGradient={bgGradient} minH="100vh">
        {/* 🚀 CONVERSION-OPTIMIZED HERO SECTION */}
        <Box 
          bgGradient="linear(135deg, #FF9933 0%, #1E90FF 50%, #F2DB49 100%)"
          color="white" 
          py={{ base: 16, md: 24 }}
          position="relative"
          overflow="hidden"
        >
          {/* Quantum animation overlay */}
          <Box
            position="absolute"
            inset={0}
            opacity={0.1}
            bgImage="url('/assets/images/quantum-consciousness.svg')"
            bgRepeat="repeat"
            bgSize="400px"
            animation="float 8s ease-in-out infinite"
          />
          
          <Container maxW="7xl" position="relative">
            <VStack spacing={8} textAlign="center">
              {/* Attention-grabbing icon with urgency */}
              <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                <Circle size="120px" bg="rgba(255,255,255,0.2)" backdropFilter="blur(10px)">
                  <Icon as={FaRocket} boxSize={16} color="yellow.300" filter="drop-shadow(0 0 20px rgba(242, 219, 73, 0.8))" />
                </Circle>
                <Badge colorScheme="red" fontSize="sm" px={4} py={2} borderRadius="full" mt={4}>
                  🔥 FREE CONSULTATIONS LIMITED
                </Badge>
              </Box>

              {/* Conversion-focused headlines */}
              <VStack spacing={6}>
                <Heading 
                  as="h1" 
                  size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                  ref={heroTitleAnimation.ref}
                  style={heroTitleAnimation.style}
                  maxW="5xl"
                  lineHeight="shorter"
                >
                  {pageContent.headline}
                </Heading>
                
                <Text 
                  fontSize={{ base: 'xl', md: '2xl' }} 
                  maxW="4xl"
                  fontWeight="medium"
                  ref={heroSubtitleAnimation.ref}
                  style={heroSubtitleAnimation.style}
                >
                  {pageContent.subheading}
                </Text>
                
                <Text 
                  fontSize={{ base: 'lg', md: 'xl' }} 
                  maxW="3xl"
                  opacity={0.95}
                  ref={heroDescAnimation.ref}
                  style={heroDescAnimation.style}
                >
                  {pageContent.description}
                </Text>
                
                {/* Social proof badge */}
                <Badge colorScheme="green" fontSize="md" px={6} py={2} borderRadius="full">
                  ⭐ {pageContent.socialProof}
                </Badge>
              </VStack>

              {/* Enhanced CTAs with urgency */}
              <VStack spacing={4} ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Button
                    size="lg"
                    colorScheme="yellow"
                    color="black"
                    variant="solid"
                    leftIcon={<Icon as={pageContent.primaryCtaData.icon} />}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="bold"
                    boxShadow="xl"
                    onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    _hover={{
                      transform: 'translateY(-3px)',
                      boxShadow: '2xl',
                      bg: 'yellow.400'
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    {pageContent.primaryCtaData.text}
                  </Button>
                  <Button
                    as="a"
                    href={pageContent.secondaryCtaData.href}
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    leftIcon={<Icon as={pageContent.secondaryCtaData.icon} />}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{
                      transform: 'translateY(-3px)',
                      bg: 'whiteAlpha.200',
                      borderColor: 'whiteAlpha.800'
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    {pageContent.secondaryCtaData.text}
                  </Button>
                </HStack>
                
                {/* Urgency trigger */}
                <Text fontSize="sm" color="yellow.200" fontWeight="medium" textAlign="center">
                  ⏰ {pageContent.urgency}
                </Text>
                
                {/* Trust indicators */}
                <HStack spacing={6} fontSize="sm" opacity={0.9} flexWrap="wrap" justify="center">
                  <Text>✓ 24hr Response</Text>
                  <Text>✓ Zero Pressure</Text>
                  <Text>✓ Personal Guidance</Text>
                </HStack>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* 🎯 ADVANCED CONTACT METHODS SECTION */}
        <Container maxW="7xl" py={{ base: 12, md: 20 }}>
          <VStack spacing={12} ref={methodsAnimation.ref} style={methodsAnimation.style}>
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">
                🌟 CHOOSE YOUR CONNECTION METHOD
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Start Your Transformation Journey Today
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="3xl" lineHeight="tall">
                Three powerful ways to connect with Dr. Nischaya and begin your quantum-spiritual awakening.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="full">
              {contactMethods.map((method, index) => {
                const cardAnimation = useSlideAnimation({
                  direction: 'from-bottom',
                  duration: 800,
                  delay: index * 150,
                  distance: 60
                });
                
                return (
                  <Card 
                    key={index} 
                    bg={cardBg}
                    borderWidth={method.popular ? 3 : 2}
                    borderColor={method.popular ? `${method.color}.400` : 'gray.200'}
                    borderRadius="xl"
                    overflow="hidden"
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ 
                      transform: 'translateY(-8px)', 
                      shadow: '2xl',
                      borderColor: `${method.color}.500`
                    }}
                    position="relative"
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    {/* Popular badge */}
                    {method.popular && (
                      <Badge
                        position="absolute"
                        top={-2}
                        right={4}
                        colorScheme="red"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        zIndex={2}
                      >
                        🔥 MOST POPULAR
                      </Badge>
                    )}

                    <CardBody p={8}>
                      <VStack spacing={6} textAlign="center">
                        <Box
                          bg={`${method.color}.100`}
                          p={4}
                          borderRadius="full"
                          position="relative"
                        >
                          <Icon as={method.icon} boxSize={12} color={`${method.color}.500`} />
                        </Box>
                        
                        <VStack spacing={3}>
                          <Heading size="md" color={headingColor}>
                            {method.title}
                          </Heading>
                          <Text color={mutedText} fontSize="sm" lineHeight="tall">
                            {method.description}
                          </Text>
                          <Badge colorScheme={method.color} variant="outline" fontSize="xs" px={2} py={1}>
                            {method.urgency}
                          </Badge>
                        </VStack>

                        {/* Benefits list */}
                        <VStack spacing={2} w="full">
                          {method.benefits.map((benefit, idx) => (
                            <HStack key={idx} spacing={2} w="full" justify="start">
                              <Icon as={FaCheckCircle} color={`${method.color}.500`} fontSize="sm" />
                              <Text fontSize="xs" color="gray.600">{benefit}</Text>
                            </HStack>
                          ))}
                        </VStack>

                        <Button
                          as={method.href.startsWith('#') ? 'button' : 'a'}
                          href={method.href.startsWith('#') ? undefined : method.href}
                          onClick={method.href.startsWith('#') ? 
                            () => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' }) : 
                            undefined}
                          colorScheme={method.color}
                          size="md"
                          w="full"
                          fontWeight="bold"
                          leftIcon={<Icon as={method.icon} />}
                          boxShadow="md"
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                          }}
                          transition="all 0.3s"
                        >
                          {method.value}
                        </Button>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>

          {/* 🎯 MULTI-STEP CONSULTATION FORM */}
          <VStack spacing={12} mt={20} id="consultation-form">
            <VStack spacing={6} textAlign="center" ref={formAnimation.ref} style={formAnimation.style}>
              <Badge colorScheme="purple" fontSize="md" px={4} py={2} borderRadius="full">
                🚀 BOOK YOUR FREE DISCOVERY CALL
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                3-Step Consultation Process
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="3xl" lineHeight="tall">
                Complete our intelligent consultation form and Dr. Nischaya will personally design your optimal spiritual growth path.
              </Text>
              
              {/* Progress indicator */}
              <Box w="full" maxW="500px">
                <HStack justify="space-between" mb={4}>
                  <Text fontSize="sm" color="gray.600">Progress</Text>
                  <Text fontSize="sm" color="purple.600" fontWeight="bold">
                    {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
                  </Text>
                </HStack>
                <Progress 
                  value={((currentStep + 1) / steps.length) * 100} 
                  colorScheme="purple" 
                  size="md" 
                  borderRadius="full" 
                />
              </Box>
            </VStack>

            <Container maxW="4xl">
              <Card bg={cardBg} shadow="2xl" borderRadius="xl" borderWidth={2} borderColor="purple.200">
                <CardBody p={{ base: 6, md: 10 }}>
                  {/* Stepper */}
                  <Stepper index={activeStep} orientation="horizontal" mb={8}>
                    {steps.map((step, index) => (
                      <Step key={index}>
                        <StepIndicator>
                          <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                          />
                        </StepIndicator>

                        <Box flexShrink="0">
                          <StepTitle>{step.title}</StepTitle>
                          <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                      </Step>
                    ))}
                  </Stepper>

                  {/* Multi-step form */}
                  <Box as="form" onSubmit={handleSubmit}>
                    {currentStep === 0 && (
                      <VStack spacing={6}>
                        <Heading size="md" color={headingColor} textAlign="center">
                          Tell Us About Yourself
                        </Heading>
                        
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                          <FormControl isRequired>
                            <FormLabel color={headingColor}>Full Name</FormLabel>
                            <Input 
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              size="lg"
                              borderColor="gray.300"
                              _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                            />
                          </FormControl>
                          <FormControl isRequired>
                            <FormLabel color={headingColor}>Email Address</FormLabel>
                            <Input 
                              type="email"
                              placeholder="your.email@example.com"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              size="lg"
                              borderColor="gray.300"
                              _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                            />
                          </FormControl>
                        </SimpleGrid>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                          <FormControl>
                            <FormLabel color={headingColor}>Phone Number</FormLabel>
                            <Input 
                              placeholder="+1 (555) 123-4567"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              size="lg"
                              borderColor="gray.300"
                              _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                            />
                          </FormControl>
                          <FormControl>
                            <FormLabel color={headingColor}>Time Zone</FormLabel>
                            <Select 
                              placeholder="Select your time zone"
                              value={formData.timezone}
                              onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                              size="lg"
                              borderColor="gray.300"
                              _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                            >
                              <option value="PST">Pacific Time (PST/PDT)</option>
                              <option value="MST">Mountain Time (MST/MDT)</option>
                              <option value="CST">Central Time (CST/CDT)</option>
                              <option value="EST">Eastern Time (EST/EDT)</option>
                              <option value="GMT">GMT/UTC</option>
                              <option value="IST">India Standard Time (IST)</option>
                              <option value="other">Other</option>
                            </Select>
                          </FormControl>
                        </SimpleGrid>

                        <FormControl>
                          <FormLabel color={headingColor}>Spiritual Experience Level</FormLabel>
                          <Select 
                            placeholder="Select your experience level"
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          >
                            <option value="beginner">Complete beginner - New to spirituality</option>
                            <option value="curious">Curious explorer - Some spiritual interest</option>
                            <option value="practitioner">Active practitioner - Regular meditation/study</option>
                            <option value="advanced">Advanced seeker - Deep spiritual practice</option>
                            <option value="teacher">Teacher/Guide - Sharing spiritual knowledge</option>
                          </Select>
                        </FormControl>
                      </VStack>
                    )}

                    {currentStep === 1 && (
                      <VStack spacing={6}>
                        <Heading size="md" color={headingColor} textAlign="center">
                          Your Spiritual Goals & Interests
                        </Heading>

                        <FormControl isRequired>
                          <FormLabel color={headingColor}>Primary Program of Interest</FormLabel>
                          <Select 
                            placeholder="Select your preferred program"
                            value={formData.program}
                            onChange={(e) => setFormData({...formData, program: e.target.value})}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          >
                            <option value="discourses">Weekend Discourses - Ancient Wisdom Made Modern ($25)</option>
                            <option value="chanting">Chanting Classes - Sacred Sanskrit Sounds ($30)</option>
                            <option value="teacher">Teacher Training - Become a Certified Guide ($100)</option>
                            <option value="lifestyle">Vedic Lifestyle Experience - Personalized Journey (Custom)</option>
                            <option value="multiple">I'm interested in multiple programs</option>
                            <option value="unsure">I'm not sure - help me choose</option>
                          </Select>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color={headingColor}>What are your main spiritual goals?</FormLabel>
                          <Textarea 
                            placeholder="Share what you hope to achieve through Vedic wisdom. For example: inner peace, spiritual understanding, career guidance, relationship harmony, etc."
                            value={formData.goals}
                            onChange={(e) => setFormData({...formData, goals: e.target.value})}
                            rows={4}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          />
                        </FormControl>

                        <FormControl>
                          <FormLabel color={headingColor}>What draws you to Vedic wisdom specifically?</FormLabel>
                          <Textarea 
                            placeholder="Tell us what sparked your interest in ancient spiritual knowledge, quantum consciousness, or Dr. Nischaya's teachings..."
                            rows={3}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          />
                        </FormControl>
                      </VStack>
                    )}

                    {currentStep === 2 && (
                      <VStack spacing={6}>
                        <Heading size="md" color={headingColor} textAlign="center">
                          Schedule Your Free Discovery Call
                        </Heading>

                        <FormControl isRequired>
                          <FormLabel color={headingColor}>How soon would you like to begin?</FormLabel>
                          <Select 
                            placeholder="Select your preferred timeline"
                            value={formData.urgency}
                            onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          >
                            <option value="immediately">Immediately - I'm ready to start this week</option>
                            <option value="soon">Within 2 weeks - Very interested</option>
                            <option value="month">Within a month - Planning ahead</option>
                            <option value="exploring">Just exploring - No rush</option>
                          </Select>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel color={headingColor}>Best times for your consultation call</FormLabel>
                          <Select 
                            placeholder="Select your availability"
                            value={formData.availability}
                            onChange={(e) => setFormData({...formData, availability: e.target.value})}
                            size="lg"
                            borderColor="gray.300"
                            _focus={{ borderColor: "purple.400", boxShadow: "0 0 0 1px purple.400" }}
                          >
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                            <option value="evening">Evening (5 PM - 8 PM)</option>
                            <option value="weekend">Weekends only</option>
                            <option value="flexible">Flexible - any time works</option>
                          </Select>
                        </FormControl>

                        <Box w="full" p={6} bg="green.50" borderRadius="lg" borderColor="green.200" borderWidth={1}>
                          <VStack spacing={3}>
                            <Icon as={FaShieldAlt} boxSize={8} color="green.500" />
                            <Heading size="sm" color="green.800">Our Commitment to You</Heading>
                            <VStack spacing={2} fontSize="sm" color="green.700">
                              <Text>✓ 30-minute personal consultation with Dr. Nischaya</Text>
                              <Text>✓ Personalized program recommendations</Text>
                              <Text>✓ No pressure, no hard selling</Text>
                              <Text>✓ Spiritual guidance and question answers</Text>
                              <Text>✓ Clear next steps for your journey</Text>
                            </VStack>
                          </VStack>
                        </Box>

                        <Checkbox 
                          size="lg" 
                          colorScheme="purple"
                          isChecked={formData.consent}
                          onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                        >
                          <Text fontSize="sm" color={mutedText}>
                            I consent to receive spiritual insights, program updates, and consultation scheduling via email and phone. 
                            I understand I can unsubscribe anytime.
                          </Text>
                        </Checkbox>
                      </VStack>
                    )}

                    {/* Navigation buttons */}
                    <HStack spacing={4} justify="space-between" mt={8}>
                      <Button
                        onClick={prevStep}
                        variant="outline"
                        colorScheme="gray"
                        isDisabled={currentStep === 0}
                        leftIcon={<Icon as={FaArrowRight} transform="rotate(180deg)" />}
                      >
                        Previous
                      </Button>
                      
                      <Text fontSize="sm" color="gray.500">
                        Step {currentStep + 1} of {steps.length}
                      </Text>

                      {currentStep < steps.length - 1 ? (
                        <Button
                          onClick={nextStep}
                          colorScheme="purple"
                          isDisabled={!validateStep(currentStep)}
                          rightIcon={<Icon as={FaArrowRight} />}
                        >
                          Next Step
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          colorScheme="purple"
                          size="lg"
                          leftIcon={<Icon as={FaCalendarCheck} />}
                          isLoading={isLoading}
                          loadingText="Scheduling..."
                          isDisabled={!validateStep(currentStep) || !formData.consent}
                          _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                        >
                          Schedule My Free Call
                        </Button>
                      )}
                    </HStack>
                  </Box>
                </CardBody>
              </Card>
            </Container>
          </VStack>

          {/* 🎯 ENHANCED FAQ SECTION */}
          <VStack spacing={12} mt={20}>
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="blue" fontSize="md" px={4} py={2} borderRadius="full">
                💡 FREQUENTLY ASKED QUESTIONS
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Everything You Need to Know
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="3xl" lineHeight="tall">
                Quick answers to help you make the best decision for your spiritual journey.
              </Text>
            </VStack>

            <Container maxW="5xl">
              <Accordion allowToggle allowMultiple>
                {faqs.map((faq, index) => {
                  const faqAnimation = useSlideAnimation({
                    direction: 'from-bottom',
                    duration: 600,
                    delay: index * 100,
                    distance: 30
                  });
                  
                  return (
                    <AccordionItem 
                      key={index} 
                      border="none" 
                      mb={4}
                      ref={faqAnimation.ref}
                      style={faqAnimation.style}
                    >
                      <h2>
                        <AccordionButton
                          bg={cardBg}
                          _hover={{ bg: accentBg }}
                          borderRadius="lg"
                          p={6}
                          _expanded={{ bg: accentBg, borderColor: "orange.400" }}
                          borderWidth="2px"
                          borderColor="transparent"
                          transition="all 0.3s"
                        >
                          <Box flex="1" textAlign="left">
                            <HStack spacing={3}>
                              <Icon as={FaQuestionCircle} color="orange.500" />
                              <Text fontWeight="semibold" fontSize={{ base: "md", md: "lg" }} color={headingColor}>
                                {faq.question}
                              </Text>
                            </HStack>
                          </Box>
                          <AccordionIcon color="orange.500" />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4} px={6}>
                        <Text color={textColor} lineHeight="tall" fontSize="md">
                          {faq.answer}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Container>
          </VStack>

          {/* 🌟 TESTIMONIAL & FINAL CTA */}
          <VStack spacing={12} mt={20}>
            <Box 
              p={8} 
              bg={accentBg}
              borderRadius="xl"
              borderWidth={2}
              borderColor="orange.200"
              w="full"
              maxW="4xl"
            >
              <VStack spacing={6} textAlign="center">
                <Icon as={FaQuoteLeft} boxSize={10} color="orange.400" />
                <Text fontSize={{ base: "lg", md: "xl" }} color={textColor} lineHeight="tall" fontStyle="italic">
                  "The free discovery call with Dr. Nischaya changed my life. He understood exactly where I was on my spiritual path and recommended the perfect program. Three months later, I feel more connected to my true self than ever before."
                </Text>
                <VStack spacing={2}>
                  <HStack>
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} as={FaStar} color="yellow.400" />
                    ))}
                  </HStack>
                  <Text fontWeight="bold" color="orange.600">
                    — Maria S., Teacher Training Graduate
                  </Text>
                </VStack>
              </VStack>
            </Box>

            {/* Final conversion CTA */}
            <OptimizedCTA 
              variant="hero" 
              ctaType="emergency" 
              showSecondary={true}
              showUrgency={true}
              customMessage="Ready to start your quantum-spiritual transformation today?"
            />
          </VStack>
        </Container>
      </Box>
    </>
  );
}