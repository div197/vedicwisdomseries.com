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
  Image,
  useBreakpointValue,
  Card,
  CardBody,
  Badge,
  Button,
  Flex,
  useColorModeValue,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Select,
  Checkbox,
  Divider,
  AspectRatio,
  IconButton,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
  chakra
} from '@chakra-ui/react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock,
  FaUsers,
  FaGlobe,
  FaCalendarCheck,
  FaComments,
  FaHandshake,
  FaMapMarkerAlt,
  FaOm,
  FaHeart,
  FaQuestionCircle,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaCheckCircle,
  FaArrowRight,
  FaBook,
  FaGraduationCap,
  FaUserGraduate,
  FaMeditation,
  FaLightbulb,
  FaQuoteLeft,
  FaStar
} from 'react-icons/fa';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import SEOHead from '../components/SEOHead';
import UniversalCTA from '../components/UniversalCTA';
import { siteConfig } from '../siteConfig';
import { vedicWisdomSeries } from '../data/vedicWisdomSeries';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';

export default function ContactPage() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // DIVINE COLOR SYSTEM
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50, blue.50, yellow.50)',
    'linear(to-br, gray.900, gray.800, gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const accentBg = useColorModeValue('orange.50', 'orange.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  // DIVINE SLIDE ANIMATIONS
  const heroAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const methodsAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom);
  const formAnimation = useSlideAnimation({ ...slideAnimationConfigs.fromLeft, delay: 200 });
  const faqAnimation = useSlideAnimation({ ...slideAnimationConfigs.fromRight, delay: 400 });

  // Contact Methods - Spiritual Focus
  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Support",
      description: "Quick responses for spiritual inquiries",
      items: [
        {
          label: "Direct Message",
          value: "+91 XXXXX XXXXX",
          href: "https://wa.me/91XXXXXXXXXX",
          icon: FaWhatsapp,
          color: "green"
        }
      ]
    },
    {
      icon: FaEnvelope,
      title: "Email Guidance",
      description: "Detailed spiritual consultations",
      items: [
        {
          label: "Spiritual Inquiries",
          value: "info@vedicwisdomseries.com",
          href: "mailto:info@vedicwisdomseries.com",
          icon: FaEnvelope,
          color: "blue"
        }
      ]
    },
    {
      icon: FaCalendarCheck,
      title: "Schedule Consultation",
      description: "Book personal guidance session",
      items: [
        {
          label: "Book Session",
          value: "30-min Free Consultation",
          href: "#booking",
          icon: FaCalendarCheck,
          color: "purple"
        }
      ]
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "Do I need prior Sanskrit knowledge for chanting classes?",
      answer: "No prior Sanskrit knowledge is required! Our chanting classes are designed for global learners. Dr. Nischaya Nagori guides students from all backgrounds with patience and clarity, starting from basic pronunciation to advanced mantras."
    },
    {
      question: "How are the online sessions conducted?",
      answer: "All sessions are conducted via high-quality video conferencing with interactive features. You'll receive a link before each session. Sessions are recorded for later review, ensuring you never miss important teachings."
    },
    {
      question: "What makes Weekend Discourses unique?",
      answer: "Our Weekend Discourses bridge quantum physics with Vedic wisdom. Dr. Nischaya presents profound spiritual concepts through scientific parallels, making ancient wisdom accessible to modern seekers. Each 60-minute session includes interactive Q&A."
    },
    {
      question: "How long is the Teacher Training certification program?",
      answer: "The complete Teacher Training program consists of 15 one-hour lectures, plus bonus access to one week of chanting classes and one weekend discourse. You'll receive official certification upon completion to teach Vedic wisdom authentically."
    },
    {
      question: "Can I customize a Vedic Lifestyle Experience?",
      answer: "Absolutely! Our Vedic Lifestyle Experiences are fully customizable for individuals, families, or groups. Whether you seek personal spiritual retreats, family programs, or corporate wellness sessions, we create tailored experiences."
    },
    {
      question: "What payment methods are available?",
      answer: "Currently, we're setting up our payment gateway. For now, please contact us directly to reserve your spot. We'll provide payment instructions and confirm your enrollment personally."
    }
  ];

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Message Sent Successfully! 🕉️",
        description: "We'll respond within 24 hours with spiritual guidance.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <>
      <SEOHead
        title="Contact Dr. Nischaya Nagori - Vedic Wisdom Series"
        description="Connect with Dr. Nischaya Nagori for Weekend Discourses, Chanting Classes, Teacher Training, and personalized Vedic experiences. Transform your spiritual journey today."
        keywords={['Contact Vedic Wisdom Series', 'Dr. Nischaya Nagori', 'Spiritual Consultation', 'Vedic Education Contact', 'Sanskrit Classes Inquiry']}
        image={`${siteConfig.siteUrl}/assets/images/contact-vedic-wisdom.jpg`}
      />

      <PageWrapper hasHero={true}>
        {/* 🕉️ SPIRITUAL HERO SECTION */}
        <HeroSectionWrapper>
          <Box
            minH="80vh"
            bgGradient={bgGradient}
            position="relative"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            {/* Subtle pattern overlay */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.03}
              bgImage="url('/assets/images/vedic-pattern.svg')"
              bgRepeat="repeat"
              bgSize="150px"
            />

            <Container maxW="7xl" position="relative" zIndex={2}>
              <VStack spacing={8} textAlign="center" ref={heroAnimation.ref} style={heroAnimation.style}>
                <Icon as={FaOm} boxSize={16} color="orange.500" filter="drop-shadow(0 0 20px rgba(255, 153, 51, 0.5))" />
                
                <VStack spacing={4}>
                  <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} color={headingColor}>
                    Begin Your Spiritual Journey
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" color={textColor} lineHeight="tall">
                    Connect with Dr. Nischaya Nagori for authentic Vedic wisdom, transformative teachings, 
                    and personalized spiritual guidance. Your path to enlightenment starts with a single step.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" color="orange.600">
                    "Where questions meet ancient wisdom, transformation begins"
                  </Text>
                </VStack>

                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Button
                    size={{ base: "md", md: "lg" }}
                    colorScheme="orange"
                    leftIcon={<Icon as={FaCalendarCheck} />}
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Free Consultation
                  </Button>
                  <Button
                    size={{ base: "md", md: "lg" }}
                    variant="outline"
                    colorScheme="blue"
                    leftIcon={<Icon as={FaQuestionCircle} />}
                    onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View FAQs
                  </Button>
                </HStack>
              </VStack>
            </Container>
          </Box>
        </HeroSectionWrapper>

        {/* 🕉️ CONTACT METHODS SECTION */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={methodsAnimation.ref} style={methodsAnimation.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">
                Connect With Us
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Choose Your Preferred Way to Connect
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Whether you seek spiritual guidance, have questions about our programs, 
                or want to begin your Vedic journey, we're here to help.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {contactMethods.map((method, index) => {
                const cardAnimation = useSlideAnimation({
                  direction: 'from-bottom',
                  duration: 800,
                  delay: index * 150,
                  distance: 50
                });
                
                return (
                  <Card 
                    key={index} 
                    bg={cardBg} 
                    shadow="xl" 
                    borderRadius="xl"
                    _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }} 
                    transition="all 0.4s"
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="center" textAlign="center">
                        <Box
                          bg={`${method.items[0]?.color || 'orange'}.100`}
                          p={4}
                          borderRadius="full"
                        >
                          <Icon as={method.icon} boxSize={12} color={`${method.items[0]?.color || 'orange'}.500`} />
                        </Box>
                        <VStack spacing={3}>
                          <Heading size="md" color={headingColor}>
                            {method.title}
                          </Heading>
                          <Text color={mutedText} fontSize="sm">
                            {method.description}
                          </Text>
                        </VStack>
                        <VStack spacing={3} w="full">
                          {method.items.map((item, itemIndex) => (
                            <ChakraLink
                              key={itemIndex}
                              href={item.href}
                              _hover={{ textDecoration: 'none' }}
                              w="full"
                            >
                              <Button 
                                variant="solid" 
                                colorScheme={item.color}
                                size="md"
                                w="full"
                                leftIcon={<Icon as={item.icon} />}
                                _hover={{ transform: 'scale(1.05)' }}
                              >
                                {item.value}
                              </Button>
                            </ChakraLink>
                          ))}
                        </VStack>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ INQUIRY FORM SECTION */}
        <SectionWrapper bg={useColorModeValue('gray.50', 'gray.900')} id="contact-form">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={formAnimation.ref} style={formAnimation.style}>
              <Badge colorScheme="blue" fontSize="md" px={4} py={2} borderRadius="full">
                Start Your Journey
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Send Your Spiritual Inquiry
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Share your spiritual aspirations and let us guide you to the perfect program 
                for your transformative journey.
              </Text>
            </VStack>

            <Container maxW="3xl">
              <Card bg={cardBg} shadow="xl" borderRadius="xl">
                <CardBody p={{ base: 6, md: 8 }}>
                  <VStack spacing={6} as="form" onSubmit={handleSubmit}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl isRequired>
                        <FormLabel color={headingColor}>Full Name</FormLabel>
                        <Input 
                          placeholder="Your full name"
                          size="lg"
                          borderColor="gray.300"
                          _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
                        />
                      </FormControl>
                      <FormControl isRequired>
                        <FormLabel color={headingColor}>Email Address</FormLabel>
                        <Input 
                          type="email"
                          placeholder="your.email@example.com"
                          size="lg"
                          borderColor="gray.300"
                          _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
                        />
                      </FormControl>
                    </SimpleGrid>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                      <FormControl>
                        <FormLabel color={headingColor}>Phone Number</FormLabel>
                        <Input 
                          placeholder="+1 (555) 123-4567"
                          size="lg"
                          borderColor="gray.300"
                          _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel color={headingColor}>Time Zone</FormLabel>
                        <Select 
                          placeholder="Select your time zone"
                          size="lg"
                          borderColor="gray.300"
                          _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
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
                      <FormLabel color={headingColor}>Programs of Interest</FormLabel>
                      <Select 
                        placeholder="Select a program"
                        size="lg"
                        value={selectedProgram}
                        onChange={(e) => setSelectedProgram(e.target.value)}
                        borderColor="gray.300"
                        _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
                      >
                        <option value="discourses">Weekend Discourses ($25)</option>
                        <option value="chanting">Chanting Classes ($30)</option>
                        <option value="teacher">Teacher Training ($100)</option>
                        <option value="lifestyle">Vedic Lifestyle Experience (Custom)</option>
                        <option value="all">I'm interested in multiple programs</option>
                      </Select>
                    </FormControl>

                    <FormControl>
                      <FormLabel color={headingColor}>Your Spiritual Journey & Questions</FormLabel>
                      <Textarea 
                        placeholder="Tell us about your spiritual background, what draws you to Vedic wisdom, and any specific questions you have..."
                        rows={6}
                        size="lg"
                        borderColor="gray.300"
                        _focus={{ borderColor: "orange.400", boxShadow: "0 0 0 1px orange.400" }}
                      />
                    </FormControl>

                    <VStack spacing={4} w="full">
                      <Checkbox size="lg" colorScheme="orange" defaultChecked>
                        Send me spiritual insights and program updates
                      </Checkbox>
                      
                      <Button
                        type="submit"
                        colorScheme="orange"
                        size="lg"
                        w="full"
                        leftIcon={<Icon as={FaEnvelope} />}
                        isLoading={isLoading}
                        loadingText="Sending..."
                        _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                      >
                        Send Spiritual Inquiry
                      </Button>

                      <Text fontSize="sm" color={mutedText} textAlign="center">
                        We honor your spiritual journey and typically respond within 24 hours 
                        with personalized guidance.
                      </Text>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ FAQ SECTION */}
        <SectionWrapper id="faq-section">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={faqAnimation.ref} style={faqAnimation.style}>
              <Badge colorScheme="green" fontSize="md" px={4} py={2} borderRadius="full">
                Frequently Asked
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Common Spiritual Questions
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Find answers to common questions about our programs, teachings, and spiritual journey.
              </Text>
            </VStack>

            <Container maxW="4xl">
              <Accordion allowToggle>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} border="none" mb={4}>
                    <h2>
                      <AccordionButton
                        bg={cardBg}
                        _hover={{ bg: accentBg }}
                        borderRadius="lg"
                        p={6}
                        _expanded={{ bg: accentBg, borderColor: "orange.400" }}
                        borderWidth="2px"
                        borderColor="transparent"
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
                      <Text color={textColor} lineHeight="tall">
                        {faq.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ TESTIMONIAL HIGHLIGHT */}
        <SectionWrapper bg={accentBg}>
          <Container maxW="4xl">
            <VStack spacing={8}>
              <Icon as={FaQuoteLeft} boxSize={10} color="orange.400" />
              <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center" color={textColor} lineHeight="tall">
                "Dr. Nischaya's teachings have transformed my understanding of both science and spirituality. 
                The way he connects quantum physics with Vedic wisdom is revolutionary. I started with 
                weekend discourses and now I'm completing teacher training!"
              </Text>
              <VStack spacing={2}>
                <HStack>
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} as={FaStar} color="yellow.400" />
                  ))}
                </HStack>
                <Text fontWeight="bold" color="orange.600">
                  — Jennifer K., Quantum Researcher & Student
                </Text>
              </VStack>
            </VStack>
          </Container>
        </SectionWrapper>

        {/* 🕉️ SPIRITUAL QUOTE */}
        <SectionWrapper>
          <Container maxW="4xl" textAlign="center">
            <VStack spacing={4}>
              <Text fontSize={{ base: "xl", md: "2xl" }} color="orange.500" fontWeight="medium">
                {vedicWisdomSeries.quotes[1].sanskrit}
              </Text>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} fontStyle="italic">
                "{vedicWisdomSeries.quotes[1].translation}"
              </Text>
              <Text fontSize="sm" color={mutedText}>
                — {vedicWisdomSeries.quotes[1].source}
              </Text>
            </VStack>
          </Container>
        </SectionWrapper>

        {/* Universal CTA */}
        <Box py={8}>
          <UniversalCTA variant="hero" />
        </Box>
      </PageWrapper>
    </>
  );
}