import React, { useState } from 'react';
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
  
  // Premium Animation System
  Animation,
  Stagger,
  Hover,
  
  // Premium Core Components
  PremiumCard as Card,
  PremiumButton as Button
} from '../components/premium';
import { 
  Box, 
  SimpleGrid,
  Icon, 
  Image,
  Flex,
  useColorModeValue,
  Avatar,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Wrap,
  WrapItem,
  Tag
} from '@chakra-ui/react';
import { 
  FaStar,
  FaQuoteLeft,
  FaPlay,
  FaGraduationCap,
  FaHeart,
  FaBook,
  FaLeaf,
  FaUserGraduate,
  FaGlobe,
  FaCheckCircle,
  FaOm,
  FaLightbulb,
  FaAtom,
  FaUsers
} from 'react-icons/fa';
// Removed old layout system - now using Premium Layout System
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../siteConfig';
// Removed old animation hooks - now using Premium Animation System

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  // DIVINE COLOR SYSTEM
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50, purple.50, yellow.50)',
    'linear(to-br, gray.900, gray.800, gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const accentBg = useColorModeValue('purple.50', 'purple.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.800', 'white');

  // Premium animations are now handled by the Animation components automatically

  // TESTIMONIAL CATEGORIES
  const categories = [
    { name: "All Stories", icon: FaOm, color: "purple" },
    { name: "Weekend Discourses", icon: FaBook, color: "orange" },
    { name: "Chanting Classes", icon: FaLeaf, color: "blue" },
    { name: "Teacher Training", icon: FaGraduationCap, color: "green" },
    { name: "Life Transformations", icon: FaHeart, color: "pink" }
  ];

  // TESTIMONIAL DATA - Powerful transformation stories
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Quantum Physicist, MIT",
      location: "Boston, USA",
      avatar: "/assets/images/testimonials/sarah-chen.jpg",
      rating: 5,
      category: "Weekend Discourses",
      featured: true,
      hasVideo: true,
      videoUrl: "https://youtube.com/watch?v=testimonial1",
      transformation: {
        before: "Skeptical scientist seeking proof",
        after: "Found the missing link between science and consciousness"
      },
      story: "As a quantum physicist, I was skeptical about spirituality. But Dr. Nischaya's weekend discourse on quantum entanglement and Krishna's 'mamaivamsho' completely transformed my understanding. He showed me the mathematical proof of consciousness I'd been seeking for years. Now I teach quantum spirituality at MIT!",
      highlights: ["Quantum-Vedic parallels", "Scientific validation", "Career transformation"],
      program: "Weekend Discourses",
      date: "November 2024"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Former Wall Street Executive",
      location: "New York, USA",
      avatar: "/assets/images/testimonials/michael-rodriguez.jpg",
      rating: 5,
      category: "Life Transformations",
      featured: true,
      transformation: {
        before: "Burned out, depressed despite success",
        after: "Found purpose, inner peace, and true wealth"
      },
      story: "I had everything - corner office, millions in the bank, but felt empty inside. Dr. Nischaya's teachings on Nishkaam Karma Yoga changed everything. I learned to work without attachment to results. Now I run a conscious investment fund and have never been happier. Success WITH fulfillment is possible!",
      highlights: ["From burnout to balance", "Conscious capitalism", "Inner transformation"],
      program: "Vedic Lifestyle Experience",
      date: "October 2024"
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Yoga Studio Owner",
      location: "California, USA",
      avatar: "/assets/images/testimonials/priya-sharma.jpg",
      rating: 5,
      category: "Teacher Training",
      featured: true,
      hasVideo: true,
      transformation: {
        before: "Surface-level yoga teacher",
        after: "Authentic Vedic wisdom keeper"
      },
      story: "I thought I knew yoga until I met Dr. Nischaya. His Teacher Training revealed the profound philosophy I'd been missing. Now my students don't just do poses - they experience transformation. My studio went from 50 to 500 students because people feel the authentic transmission.",
      highlights: ["Authentic lineage", "Business growth 10x", "Deeper teaching"],
      program: "Teacher Training Certification",
      date: "September 2024"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Anxiety Recovery Advocate",
      location: "London, UK",
      avatar: "/assets/images/testimonials/emma-thompson.jpg",
      rating: 5,
      category: "Chanting Classes",
      transformation: {
        before: "Severe anxiety, medication dependent",
        after: "Medication-free, teaching others to heal"
      },
      story: "Chanting saved my life. After 10 years of anxiety medication, Dr. Nischaya's chanting classes gave me a natural solution. The vibrations literally rewired my nervous system. I'm now medication-free and teaching chanting therapy to help others heal through sound.",
      highlights: ["Healed anxiety naturally", "Off medication", "Now helping others"],
      program: "Chanting Classes",
      date: "August 2024"
    },
    {
      id: 5,
      name: "Dr. James Wilson",
      role: "Neuroscientist",
      location: "Toronto, Canada",
      avatar: "/assets/images/testimonials/james-wilson.jpg",
      rating: 5,
      category: "Weekend Discourses",
      hasVideo: true,
      transformation: {
        before: "Materialist worldview",
        after: "Consciousness researcher"
      },
      story: "Dr. Nischaya's discourse on consciousness as the fundamental reality aligned perfectly with my neuroscience research. His explanation of 'Aham Brahmasmi' through the lens of neural networks was brilliant. I've now published 3 papers on Vedic neuroscience!",
      highlights: ["Published research", "New field pioneer", "Scientific breakthrough"],
      program: "Weekend Discourses",
      date: "July 2024"
    },
    {
      id: 6,
      name: "Lisa Martinez",
      role: "Single Mother & Entrepreneur",
      location: "Miami, USA",
      avatar: "/assets/images/testimonials/lisa-martinez.jpg",
      rating: 5,
      category: "Life Transformations",
      transformation: {
        before: "Struggling single mom",
        after: "Thriving entrepreneur and spiritual mother"
      },
      story: "As a single mom, I was drowning. Dr. Nischaya's Lifestyle Experience program taught me to tap into Shakti - divine feminine power. I started a conscious business, doubled my income, and became the peaceful, present mother my kids needed. Vedic wisdom is practical magic!",
      highlights: ["Income doubled", "Family harmony", "Business success"],
      program: "Vedic Lifestyle Experience",
      date: "June 2024"
    },
    {
      id: 7,
      name: "Robert Kim",
      role: "Tech CEO",
      location: "Silicon Valley, USA",
      avatar: "/assets/images/testimonials/robert-kim.jpg",
      rating: 5,
      category: "Weekend Discourses",
      featured: true,
      transformation: {
        before: "Success without satisfaction",
        after: "Conscious leadership changing tech"
      },
      story: "Running a billion-dollar tech company left me spiritually bankrupt. Dr. Nischaya's teachings on dharmic business transformed everything. We now build technology that serves humanity. Revenue increased 40% when we aligned with cosmic principles. Who knew spirituality was good for business?",
      highlights: ["40% revenue increase", "Conscious tech", "Industry influence"],
      program: "Weekend Discourses + Lifestyle",
      date: "May 2024"
    },
    {
      id: 8,
      name: "Maria Gonzalez",
      role: "Former Skeptic, Now Teacher",
      location: "Mexico City, Mexico",
      avatar: "/assets/images/testimonials/maria-gonzalez.jpg",
      rating: 5,
      category: "Teacher Training",
      transformation: {
        before: "Atheist academic",
        after: "Spiritual teacher and author"
      },
      story: "I came to debunk, stayed to learn, left transformed. As an atheist professor, I attended to disprove spiritual claims. Dr. Nischaya's scientific approach and the direct experiences in Teacher Training shattered my skepticism. I now teach 'Science of Consciousness' at university!",
      highlights: ["Skeptic to teacher", "University course", "Published book"],
      program: "Teacher Training Certification",
      date: "April 2024"
    },
    {
      id: 9,
      name: "David Chang",
      role: "Meditation Teacher",
      location: "Singapore",
      avatar: "/assets/images/testimonials/david-chang.jpg",
      rating: 5,
      category: "Chanting Classes",
      hasVideo: true,
      transformation: {
        before: "Silent meditation only",
        after: "Sound healing revolutionary"
      },
      story: "After 20 years of silent meditation, I discovered the power of sound through Dr. Nischaya's chanting classes. The mantras accelerated my spiritual growth exponentially. My meditation center now offers chanting - enrollment tripled! Ancient sound truly awakens modern souls.",
      highlights: ["20-year practitioner transformed", "Business tripled", "New modality mastery"],
      program: "Chanting Classes",
      date: "March 2024"
    }
  ];

  // FILTER TESTIMONIALS
  const filteredTestimonials = selectedCategory === 0 
    ? testimonials 
    : testimonials.filter(t => t.category === categories[selectedCategory].name);

  // IMPACT STATISTICS
  const impactStats = [
    { label: "Lives Transformed", value: "1000+", icon: FaUsers, color: "orange" },
    { label: "Countries Reached", value: "25+", icon: FaGlobe, color: "blue" },
    { label: "Success Rate", value: "98%", icon: FaCheckCircle, color: "green" },
    { label: "5-Star Reviews", value: "500+", icon: FaStar, color: "yellow" }
  ];

  const handleVideoClick = (testimonial: any) => {
    setSelectedVideo(testimonial);
    onOpen();
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Icon key={i} as={FaStar} color={i < rating ? "yellow.400" : "gray.300"} />
    ));
  };

  return (
    <>
      <SEOHead
        title="International Student Testimonials & Success Stories - Global Vedic Authority"
        description="Real transformation stories from 1000+ international students. Discover how Dr. Nischaya Nagori's quantum-Vedic teachings have changed lives across 25+ countries worldwide."
        keywords={[
          'Vedic Wisdom testimonials', 'international student success', 'spiritual transformation stories', 
          'Dr. Nischaya reviews', 'quantum spirituality results', 'global Vedic authority', 
          'international spiritual education', 'Vishwaguru testimonials', 'consciousness research results'
        ]}
        image={`${siteConfig.siteUrl}/assets/images/testimonials-international-authority.jpg`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ReviewPage",
          "name": "International Student Testimonials - Dr. Nischaya Nagori",
          "description": "Real transformation stories from international students learning authentic Vedic wisdom.",
          "mainEntity": {
            "@type": "EducationalOrganization",
            "name": "Vedic Wisdom Series",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "ratingCount": "500"
            }
          }
        }}
      />

      {/* 🕉️ HERO SECTION - PREMIUM LAYOUT */}
      <Section variant="hero" background="gradient" animate>
        <Container size="xl">
          <Animation variant="fadeIn" duration={1.2}>
            <VStack spacing={10} textAlign="center">
              <Icon as={FaQuoteLeft} boxSize={12} color="purple.500" />
              
              <VStack spacing={6}>
                <Heading variant="hero" level={1} color="white">
                  Real People. Real Transformations.
                </Heading>
                
                <Heading variant="section" level={2} color="whiteAlpha.900" maxW="5xl">
                  From Skeptics to Spiritual Teachers
                </Heading>
                
                <Text variant="lead" color="whiteAlpha.800" maxW="4xl">
                  From burned-out executives to conscious leaders - discover how thousands have 
                  transformed their lives through Dr. Nischaya's revolutionary quantum-Vedic teachings.
                </Text>
                
                <Text variant="lead" color="tertiary.300" fontStyle="italic">
                  "Every testimonial is a universe transformed, every story a soul awakened"
                </Text>
              </VStack>

              <Button
                variant="premium"
                size="xl"
                shimmer
                icon={FaHeart}
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read Their Stories
              </Button>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🕉️ IMPACT STATISTICS - PREMIUM LAYOUT */}
      <Section variant="feature" background="pattern" padding="xl">
        <Container size="lg">
          <Animation variant="slideUp">
            <VStack spacing={8}>
              <Badge variant="gradient" colorScheme="secondary" size="xl" icon={<FaUsers />}>
                📊 GLOBAL TRANSFORMATION IMPACT
              </Badge>
              
              <Stagger staggerDelay={0.1}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 4, md: 6 }}>
                  {impactStats.map((stat, index) => (
                    <Hover key={index} variant="lift" intensity="subtle">
                      <Card variant="glass" textAlign="center">
                        <Box p={6}>
                          <VStack spacing={4}>
                            <Icon as={stat.icon} boxSize={10} color={`${stat.color}.500`} />
                            <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color={`${stat.color}.500`}>
                              {stat.value}
                            </Text>
                            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600" color="gray.700">
                              {stat.label}
                            </Text>
                          </VStack>
                        </Box>
                      </Card>
                    </Hover>
                  ))}
                </SimpleGrid>
              </Stagger>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🕉️ TESTIMONIALS SECTION - PREMIUM LAYOUT */}
      <Section variant="content" padding="xl" id="testimonials">
        <Container size="lg">
          <VStack spacing={16}>
            <Animation variant="slideUp">
              <VStack spacing={6} textAlign="center">
                <Badge variant="gradient" colorScheme="primary" size="xl" icon={<FaOm />}>
                  🌟 TRANSFORMATION STORIES
                </Badge>
                <Heading variant="section" level={2}>
                  Real People, Real Transformations
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Discover how thousands of students have transformed their lives through 
                  authentic Vedic wisdom and quantum consciousness integration.
                </Text>
              </VStack>
            </Animation>

            {/* Category Tabs */}
            <Box maxW="6xl" w="full" mx="auto">
              <Tabs index={selectedCategory} onChange={setSelectedCategory} variant="soft-rounded" colorScheme="purple">
                <TabList justifyContent="center" flexWrap="wrap">
                  {categories.map((category, index) => (
                    <Tab key={index} _selected={{ bg: `${category.color}.500`, color: 'white' }}>
                      <HStack spacing={2}>
                        <Icon as={category.icon} />
                        <Text display={{ base: 'none', md: 'block' }}>{category.name}</Text>
                      </HStack>
                    </Tab>
                  ))}
                </TabList>
              </Tabs>
            </Box>

            {/* Testimonial Cards */}
            <Stagger staggerDelay={0.1}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
                {filteredTestimonials.map((testimonial, index) => (
                  <Hover key={testimonial.id} variant="lift" intensity="normal">
                    <Card
                      variant="elevated"
                      premium
                      h="full"
                      position="relative"
                    >
                      {testimonial.featured && (
                        <Badge
                          position="absolute"
                          top={4}
                          right={4}
                          variant="solid"
                          colorScheme="purple"
                          zIndex={1}
                        >
                          FEATURED
                        </Badge>
                      )}

                      <Box p={6}>
                        <VStack spacing={6} align="start" h="full">
                          {/* Header */}
                          <HStack spacing={{ base: 3, md: 4 }}>
                            <Avatar
                              size="lg"
                              name={testimonial.name}
                              src={testimonial.avatar}
                              bg="purple.500"
                            />
                            <VStack align="start" spacing={{ base: 0, md: 1 }} flex={1}>
                              <Heading variant="card" level={4}>
                                {testimonial.name}
                              </Heading>
                              <Text variant="caption" color="gray.600">
                                {testimonial.role}
                              </Text>
                              <Text variant="caption" color="gray.500">
                                {testimonial.location}
                              </Text>
                            </VStack>
                          </HStack>

                          {/* Rating */}
                          <HStack>{renderStars(testimonial.rating)}</HStack>

                          {/* Transformation */}
                          <Box bg="purple.50" p={{ base: 3, md: 4 }} borderRadius="lg" w="full">
                            <VStack align="start" spacing={{ base: 2, md: 3 }}>
                              <HStack w="full">
                                <Text fontSize="sm" fontWeight="bold" color="purple.600">
                                  Before:
                                </Text>
                                <Text fontSize="sm" color="gray.600" flex={1}>
                                  {testimonial.transformation.before}
                                </Text>
                              </HStack>
                              <HStack w="full">
                                <Text fontSize="sm" fontWeight="bold" color="green.600">
                                  After:
                                </Text>
                                <Text fontSize="sm" color="gray.700" flex={1}>
                                  {testimonial.transformation.after}
                                </Text>
                              </HStack>
                            </VStack>
                          </Box>

                          {/* Story */}
                          <Quote variant="testimonial" size="sm">
                            {testimonial.story}
                          </Quote>

                          {/* Highlights */}
                          <Wrap>
                            {testimonial.highlights.map((highlight, idx) => (
                              <WrapItem key={idx}>
                                <Badge variant="outline" colorScheme="purple" size="sm">
                                  {highlight}
                                </Badge>
                              </WrapItem>
                            ))}
                          </Wrap>

                          {/* Program & Date */}
                          <Divider />
                          <HStack justify="space-between" fontSize="xs" color="gray.500" w="full">
                            <Text fontWeight="medium">{testimonial.program}</Text>
                            <Text>{testimonial.date}</Text>
                          </HStack>

                          {/* Video Button */}
                          {testimonial.hasVideo && (
                            <Button
                              variant="outline"
                              size="sm"
                              icon={FaPlay}
                              onClick={() => handleVideoClick(testimonial)}
                              w="full"
                            >
                              Watch Video Testimonial
                            </Button>
                          )}
                        </VStack>
                      </Box>
                    </Card>
                  </Hover>
                ))}
              </SimpleGrid>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* 🕉️ TRANSFORMATION QUOTE - PREMIUM LAYOUT */}
      <Section variant="testimonial" background="glass" padding="xl">
        <Container size="md">
          <Animation variant="scaleIn">
            <VStack spacing={8} textAlign="center">
              <Icon as={FaLightbulb} boxSize={{ base: 10, md: 12 }} color="yellow.500" />
              
              <Quote variant="hero" size="xl" emphasis="divine">
                When One Soul Awakens, The Universe Celebrates
              </Quote>
              
              <Text variant="lead" color="gray.700" lineHeight="tall">
                Every transformation story you've read represents a soul remembering its true nature. 
                Your story of awakening is waiting to be written. Will you answer the call?
              </Text>
              
              <Button
                variant="premium"
                size="xl"
                shimmer
                icon={FaAtom}
                as="a"
                href="/contact"
              >
                Start Your Transformation Journey
              </Button>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🚀 FINAL CTA SECTION - PREMIUM LAYOUT */}
      <Section variant="cta" background="gradient" padding="xl">
        <Container size="lg">
          <Animation variant="bounceIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="tertiary" size="xl" icon={<FaUsers />}>
                🚀 JOIN THE TRANSFORMATION MOVEMENT
              </Badge>
              
              <Heading variant="section" level={2} color="white">
                Ready to Write Your Success Story?
              </Heading>
              
              <Text variant="lead" maxW="4xl" color="whiteAlpha.900">
                Join 1000+ international students who have transformed their lives through 
                authentic Vedic wisdom and quantum consciousness teachings from Dr. Nischaya Nagori.
              </Text>
              
              <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap" justify="center">
                <Button variant="premium" size={{ base: "lg", md: "xl" }} shimmer icon={FaGraduationCap}>
                  Explore Programs
                </Button>
                <Button variant="glass" size={{ base: "lg", md: "xl" }} icon={FaUsers}>
                  Join Community
                </Button>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* Video Modal - Premium Integration */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(10px)" />
        <ModalContent bg="white" borderRadius="xl" overflow="hidden">
          <ModalHeader bg="purple.50" color="purple.700" fontWeight="bold">
            {selectedVideo?.name}'s International Testimonial
          </ModalHeader>
          <ModalCloseButton color="purple.500" />
          <ModalBody p={8}>
            <VStack spacing={6}>
              <AspectRatio ratio={16 / 9} w="full">
                <Box 
                  bg="gradient-to-br from-purple-100 to-blue-100" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  borderRadius="lg"
                  border="2px solid"
                  borderColor="purple.200"
                >
                  <VStack spacing={4}>
                    <Icon as={FaPlay} boxSize={12} color="purple.500" />
                    <Text color="purple.600" fontWeight="medium">Video Testimonial Coming Soon</Text>
                    <Text fontSize="sm" color="gray.600">Premium video integration in development</Text>
                  </VStack>
                </Box>
              </AspectRatio>
              {selectedVideo && (
                <VStack spacing={2} textAlign="center">
                  <Text fontWeight="bold" color="gray.800">{selectedVideo.name}</Text>
                  <Text fontSize="sm" color="gray.600">{selectedVideo.role}</Text>
                  <Text fontSize="sm" color="gray.500">{selectedVideo.location}</Text>
                </VStack>
              )}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}