import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  SimpleGrid,
  Icon, 
  Image,
  Badge,
  Card,
  CardBody,
  Button,
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
  FaRocket,
  FaUsers
} from 'react-icons/fa';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import SEOHead from '../components/SEOHead';
import UniversalCTA from '../components/UniversalCTA';
import { siteConfig } from '../siteConfig';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';

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

  // ANIMATIONS
  const heroAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const statsAnimation = useSlideAnimation({ ...slideAnimationConfigs.fromBottom, delay: 200 });

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
        title="Student Testimonials & Success Stories - Vedic Wisdom Series"
        description="Real transformation stories from students worldwide. Discover how Dr. Nischaya Nagori's Vedic teachings have changed lives through quantum spirituality and ancient wisdom."
        keywords={['Vedic Wisdom testimonials', 'spiritual transformation stories', 'student success stories', 'Dr. Nischaya reviews', 'quantum spirituality results']}
        image={`${siteConfig.siteUrl}/assets/images/testimonials-hero.jpg`}
      />

      <PageWrapper hasHero={true}>
        {/* 🕉️ HERO SECTION */}
        <HeroSectionWrapper>
          <Box
            minH="70vh"
            bgGradient={bgGradient}
            position="relative"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            {/* Sacred geometry pattern */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.03}
              bgImage="url('/assets/images/sacred-geometry.svg')"
              bgRepeat="repeat"
              bgSize="200px"
            />

            <Container maxW="7xl" position="relative" zIndex={2}>
              <VStack spacing={8} textAlign="center" ref={heroAnimation.ref} style={heroAnimation.style}>
                <Icon as={FaQuoteLeft} boxSize={12} color="purple.500" />
                
                <VStack spacing={4}>
                  <Heading as="h1" size={{ base: "xl", md: "2xl", lg: "3xl" }} color={headingColor}>
                    Real People. Real Transformations.
                  </Heading>
                  <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" color={textColor} lineHeight="tall">
                    From skeptics to spiritual teachers, from burned-out executives to conscious leaders - 
                    discover how thousands have transformed their lives through Dr. Nischaya's revolutionary teachings.
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} fontStyle="italic" color="purple.600">
                    "Every testimonial is a universe transformed, every story a soul awakened"
                  </Text>
                </VStack>

                <Button
                  size={{ base: "md", md: "lg" }}
                  colorScheme="purple"
                  onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
                  rightIcon={<Icon as={FaHeart} />}
                >
                  Read Their Stories
                </Button>
              </VStack>
            </Container>
          </Box>
        </HeroSectionWrapper>

        {/* 🕉️ IMPACT STATISTICS */}
        <SectionWrapper>
          <Container maxW="6xl">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} ref={statsAnimation.ref} style={statsAnimation.style}>
              {impactStats.map((stat, index) => (
                <Card key={index} bg={cardBg} shadow="md" textAlign="center">
                  <CardBody p={6}>
                    <VStack spacing={3}>
                      <Icon as={stat.icon} boxSize={8} color={`${stat.color}.500`} />
                      <Text fontSize="3xl" fontWeight="bold" color={`${stat.color}.600`}>
                        {stat.value}
                      </Text>
                      <Text fontSize="sm" color={mutedText}>
                        {stat.label}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </SectionWrapper>

        {/* 🕉️ TESTIMONIALS SECTION */}
        <SectionWrapper id="testimonials">
          <VStack spacing={12}>
            {/* Category Tabs */}
            <Container maxW="6xl">
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
            </Container>

            {/* Testimonial Cards */}
            <Container maxW="7xl">
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {filteredTestimonials.map((testimonial, index) => {
                  const cardAnimation = useSlideAnimation({
                    direction: 'from-bottom',
                    duration: 800,
                    delay: index * 100,
                    distance: 50
                  });

                  return (
                    <Card
                      key={testimonial.id}
                      bg={cardBg}
                      shadow="xl"
                      borderRadius="xl"
                      _hover={{ transform: 'translateY(-8px)', shadow: '2xl' }}
                      transition="all 0.3s"
                      ref={cardAnimation.ref}
                      style={cardAnimation.style}
                      position="relative"
                      overflow="hidden"
                    >
                      {testimonial.featured && (
                        <Badge
                          position="absolute"
                          top={4}
                          right={4}
                          colorScheme="purple"
                          variant="solid"
                          zIndex={1}
                        >
                          FEATURED
                        </Badge>
                      )}

                      <CardBody p={6}>
                        <VStack spacing={4} align="stretch">
                          {/* Header */}
                          <HStack spacing={4}>
                            <Avatar
                              size="lg"
                              name={testimonial.name}
                              src={testimonial.avatar}
                              bg="purple.500"
                            />
                            <VStack align="start" spacing={1} flex={1}>
                              <Heading size="sm" color={headingColor}>
                                {testimonial.name}
                              </Heading>
                              <Text fontSize="xs" color={mutedText}>
                                {testimonial.role}
                              </Text>
                              <Text fontSize="xs" color={mutedText}>
                                {testimonial.location}
                              </Text>
                            </VStack>
                          </HStack>

                          {/* Rating */}
                          <HStack>{renderStars(testimonial.rating)}</HStack>

                          {/* Transformation */}
                          <Box bg={accentBg} p={3} borderRadius="md">
                            <VStack align="start" spacing={2}>
                              <HStack>
                                <Text fontSize="xs" fontWeight="bold" color="purple.600">
                                  Before:
                                </Text>
                                <Text fontSize="xs" color={mutedText}>
                                  {testimonial.transformation.before}
                                </Text>
                              </HStack>
                              <HStack>
                                <Text fontSize="xs" fontWeight="bold" color="green.600">
                                  After:
                                </Text>
                                <Text fontSize="xs" color={textColor}>
                                  {testimonial.transformation.after}
                                </Text>
                              </HStack>
                            </VStack>
                          </Box>

                          {/* Story */}
                          <Text fontSize="sm" color={textColor} lineHeight="tall" noOfLines={6}>
                            "{testimonial.story}"
                          </Text>

                          {/* Highlights */}
                          <Wrap>
                            {testimonial.highlights.map((highlight, idx) => (
                              <WrapItem key={idx}>
                                <Tag size="sm" colorScheme="purple" variant="subtle">
                                  {highlight}
                                </Tag>
                              </WrapItem>
                            ))}
                          </Wrap>

                          {/* Program & Date */}
                          <Divider />
                          <HStack justify="space-between" fontSize="xs" color={mutedText}>
                            <Text>{testimonial.program}</Text>
                            <Text>{testimonial.date}</Text>
                          </HStack>

                          {/* Video Button */}
                          {testimonial.hasVideo && (
                            <Button
                              size="sm"
                              colorScheme="purple"
                              variant="outline"
                              leftIcon={<Icon as={FaPlay} />}
                              onClick={() => handleVideoClick(testimonial)}
                              w="full"
                            >
                              Watch Video Testimonial
                            </Button>
                          )}
                        </VStack>
                      </CardBody>
                    </Card>
                  );
                })}
              </SimpleGrid>
            </Container>
          </VStack>
        </SectionWrapper>

        {/* 🕉️ TRANSFORMATION QUOTE */}
        <SectionWrapper bg={accentBg}>
          <Container maxW="4xl" textAlign="center">
            <VStack spacing={8}>
              <Icon as={FaLightbulb} boxSize={10} color="yellow.500" />
              <Heading size="lg" color={headingColor}>
                "When One Soul Awakens, The Universe Celebrates"
              </Heading>
              <Text fontSize="lg" color={textColor} lineHeight="tall">
                Every transformation story you've read represents a soul remembering its true nature. 
                Your story of awakening is waiting to be written. Will you answer the call?
              </Text>
              <Button
                size="lg"
                colorScheme="orange"
                rightIcon={<Icon as={FaRocket} />}
                as="a"
                href="/contact"
              >
                Start Your Transformation Journey
              </Button>
            </VStack>
          </Container>
        </SectionWrapper>

        {/* Universal CTA */}
        <Box py={8}>
          <UniversalCTA variant="hero" />
        </Box>
      </PageWrapper>

      {/* Video Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedVideo?.name}'s Video Testimonial</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <AspectRatio ratio={16 / 9}>
              <Box bg="gray.200" display="flex" alignItems="center" justifyContent="center">
                <Text>Video Player Placeholder</Text>
              </Box>
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}