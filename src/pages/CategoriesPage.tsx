import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Container, 
  VStack, 
  Image, 
  useColorModeValue, 
  Card, 
  CardBody, 
  Divider, 
  Button, 
  List, 
  ListItem, 
  ListIcon, 
  HStack, 
  Tag, 
  Avatar, 
  SimpleGrid, 
  Icon
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';
import { MdCheckCircle, MdMenuBook, MdSelfImprovement, MdCastForEducation, MdGroups, MdVolunteerActivism, MdLibraryBooks, MdPsychology } from 'react-icons/md';
import { FaOm, FaPrayingHands, FaHeart, FaPeace } from 'react-icons/fa';

export default function SacredServicesPage() {
  // Configuration-driven styling
  const headingColor = useColorModeValue('kd.heading', 'kd.heading');
  const textColor = useColorModeValue('kd.text', 'kd.text');
  const cardBg = useColorModeValue('kd.surface', 'kd.surface');
  const borderColor = useColorModeValue('kd.border', 'kd.border');
  const hoverBorderColor = useColorModeValue('kd.primary', 'kd.secondary');
  const alternateBg = useColorModeValue('kd.canvas', 'kd.surfaceElevated');
  const cardBusinessBg = useColorModeValue('kd.surface', 'kd.surfaceElevated');
  const serviceSubtitleColor = useColorModeValue('kd.primaryDark', 'kd.secondary');
  const iconColor = useColorModeValue('kd.primary', 'kd.secondary');
  
  // Fix for React Hooks rules - move these outside the map function
  const tagBg = useColorModeValue('kd.hover', 'kd.active');
  const tagColor = useColorModeValue('kd.primary', 'kd.secondary');

  // Sacred seva categories - completely dharmic and spiritual
  const sacredSevaCategories = [
    {
      id: 'vedic-studies',
      title: 'Vedic Studies',
      subtitle: 'Ancient Wisdom Transmission',
      category: 'Sacred Learning',
      type: 'Education',
      delivery: 'Guru-Shishya Parampara',
      pricing: 'Free for All Seekers',
      icon: MdMenuBook,
      description: 'Deep study of Vedas, Upanishads, and Sanskrit texts under the guidance of experienced Acharyas. Preserving and transmitting the sacred knowledge of our ancient rishis.',
      features: ['Rig Veda Study', 'Upanishad Teachings', 'Sanskrit Grammar', 'Chanting Techniques', 'Scriptural Commentary'],
      image: '/assets/services/vedic-studies.jpg'
    },
    {
      id: 'meditation-sadhana',
      title: 'Meditation & Sadhana',
      subtitle: 'Inner Transformation',
      category: 'Spiritual Practice',
      type: 'Sadhana',
      delivery: 'Daily Practice',
      pricing: 'Dana (Donation) Based',
      icon: FaPeace,
      description: 'Guided meditation sessions and spiritual practices for inner purification and self-realization. Various meditation techniques from different spiritual traditions.',
      features: ['Dhyana Meditation', 'Pranayama Breathing', 'Mantra Japa', 'Mindfulness Practice', 'Silent Retreats'],
      image: '/assets/services/meditation-sadhana.jpg'
    },
    {
      id: 'dharmic-counseling',
      title: 'Dharmic Counseling',
      subtitle: 'Spiritual Guidance',
      category: 'Spiritual Guidance',
      type: 'Counseling',
      delivery: 'Personal Sessions',
      pricing: 'Seva-Based Offering',
      icon: MdPsychology,
      description: 'Spiritual counseling based on dharmic principles to help seekers navigate life challenges with wisdom and inner strength. Guidance rooted in ancient scriptures.',
      features: ['Life Purpose Guidance', 'Karma Understanding', 'Dharmic Decision Making', 'Spiritual Crisis Support', 'Family Harmony'],
      image: '/assets/services/dharmic-counseling.jpg'
    },
    {
      id: 'sanskrit-learning',
      title: 'Sanskrit Learning',
      subtitle: 'Sacred Language Mastery',
      category: 'Language Study',
      type: 'Education',
      delivery: 'Progressive Learning',
      pricing: 'Community Funded',
      icon: MdCastForEducation,
      description: 'Comprehensive Sanskrit learning program from Devanagari script to advanced text reading. Unlock the direct understanding of sacred scriptures.',
      features: ['Devanagari Script', 'Grammar Rules', 'Shloka Recitation', 'Text Translation', 'Pronunciation Guide'],
      image: '/assets/services/sanskrit-learning.jpg'
    },
    {
      id: 'community-satsang',
      title: 'Community Satsang',
      subtitle: 'Spiritual Fellowship',
      category: 'Community',
      type: 'Gathering',
      delivery: 'Regular Meetings',
      pricing: 'Open for All',
      icon: MdGroups,
      description: 'Regular spiritual gatherings for collective learning, chanting, and dharmic discussions. Building a supportive community of spiritual seekers.',
      features: ['Group Chanting', 'Spiritual Discussions', 'Festival Celebrations', 'Service Projects', 'Youth Programs'],
      image: '/assets/services/community-satsang.jpg'
    },
    {
      id: 'seva-opportunities',
      title: 'Seva Opportunities',
      subtitle: 'Selfless Service',
      category: 'Karma Yoga',
      type: 'Service',
      delivery: 'Continuous Engagement',
      pricing: 'Volunteer Based',
      icon: MdVolunteerActivism,
      description: 'Various opportunities for selfless service (seva) to purify the heart and serve humanity. Engage in meaningful work for spiritual growth.',
      features: ['Teaching Assistance', 'Event Organization', 'Content Creation', 'Digital Seva', 'Community Outreach'],
      image: '/assets/services/seva-opportunities.jpg'
    }
  ];

  return (
    <Box>
      <Helmet>
        <title>Sacred Services - {siteConfig.siteName}</title>
        <meta name="description" content={`Explore our sacred services (seva) designed for spiritual growth and community welfare. ${siteConfig.siteDescription}`} />
      </Helmet>

      {/* Hero Section */}
      <Box bg={alternateBg} py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={6} textAlign="center">
            <AnimatedSection>
              <Heading as="h1" size="2xl" color={headingColor} mb={4}>
                Sacred Services for Spiritual Awakening
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} maxW="container.md" mx="auto" color={textColor}>
                {siteConfig.siteName} offers comprehensive spiritual services (seva) designed to support your spiritual journey. 
                From Vedic studies to meditation guidance, we provide sacred knowledge and practices for universal welfare and self-realization.
              </Text>
              <Box pt={4}>
                <Card bg={cardBusinessBg} p={6} borderRadius="lg" maxW="container.md" mx="auto">
                  <VStack spacing={3}>
                    <Heading as="h3" size="md" color={headingColor}>🕉️ Sarve Bhavantu Sukhinah</Heading>
                    <Text fontSize="sm" color={textColor} textAlign="center">
                      • Universal knowledge for all seekers<br/>
                      • Traditional Guru-Shishya lineage<br/>
                      • Completely free spiritual education<br/>
                      • Dharmic community support
                    </Text>
                  </VStack>
                </Card>
              </Box>
            </AnimatedSection>
          </VStack>
        </Container>
      </Box>

      {/* Sacred Services Grid Section */}
      <Container maxW="container.xl" py={{ base: 12, md: 20 }}>
        <VStack spacing={{ base: 10, md: 16 }}>
          <AnimatedSection>
            <Heading as="h2" size="xl" color={headingColor} textAlign="center" mb={8}>
              Our Sacred Service Categories
            </Heading>
          </AnimatedSection>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {sacredSevaCategories.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card 
                  bg={cardBg}
                  borderColor={borderColor}
                  borderRadius="lg"
                  boxShadow="lg"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'xl',
                    transform: 'translateY(-5px)',
                    borderColor: hoverBorderColor
                  }}
                  h="full"
                  display="flex"
                  flexDirection="column"
                >
                  <Box position="relative" overflow="hidden" borderTopRadius="lg">
                    <Image
                      src={service.image}
                      fallbackSrc='/assets/sacred-lotus.jpg'
                      alt={service.title}
                      h="200px"
                      w="full"
                      objectFit="cover"
                    />
                    <Box position="absolute" top={4} left={4}>
                      <Tag bg={tagBg} color={tagColor} size="md" fontWeight="bold">
                        {service.category}
                      </Tag>
                    </Box>
                  </Box>

                  <CardBody p={6} flex="1" display="flex" flexDirection="column">
                    <VStack align="start" spacing={4} flex="1">
                      <Box w="full">
                        <HStack justify="space-between" align="start" mb={2}>
                          <Icon as={service.icon} boxSize={8} color={iconColor} />
                          <Tag size="sm" bg={tagBg} color={tagColor}>
                            {service.pricing}
                          </Tag>
                        </HStack>
                        
                        <Heading as="h3" size="md" color={headingColor} mb={1}>
                          {service.title}
                        </Heading>
                        
                        <Text fontSize="sm" color={serviceSubtitleColor} fontWeight="semibold" mb={3}>
                          {service.subtitle}
                        </Text>
                      </Box>

                      <Text fontSize="sm" color={textColor} lineHeight="tall" flex="1">
                        {service.description}
                      </Text>

                      <Box w="full">
                        <Text fontSize="xs" color={headingColor} fontWeight="bold" mb={2}>
                          Sacred Offerings:
                        </Text>
                        <List spacing={1}>
                          {service.features.map((feature, featureIndex) => (
                            <ListItem key={featureIndex} fontSize="xs" color={textColor}>
                              <ListIcon as={MdCheckCircle} color={iconColor} />
                              {feature}
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      <Divider />
                      
                      <HStack justify="space-between" w="full" pt={2}>
                        <VStack align="start" spacing={0}>
                          <Text fontSize="xs" color={textColor} fontWeight="medium">
                            {service.type} • {service.delivery}
                          </Text>
                        </VStack>
                        
                        <Button
                          as={RouterLink}
                          to="/contact"
                          size="sm"
                          colorScheme="blue"
                          bg="kd.primary"
                          _hover={{ bg: "kd.primaryDark" }}
                          minH="44px"
                        >
                          Join Seva
                        </Button>
                      </HStack>
                    </VStack>
                  </CardBody>
                </Card>
              </AnimatedSection>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Call to Action Section */}
      <Box bg={alternateBg} py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <AnimatedSection>
            <VStack spacing={8} textAlign="center">
              <Heading as="h2" size="xl" color={headingColor}>
                Begin Your Spiritual Journey Today
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} maxW="container.md" mx="auto" color={textColor}>
                Join thousands of seekers worldwide in this sacred journey of self-discovery and spiritual awakening. 
                All services are offered freely as per the ancient tradition of universal knowledge sharing.
              </Text>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  bg="kd.primary"
                  color="white"
                  _hover={{ bg: "kd.primaryDark" }}
                  minH="44px"
                  leftIcon={<FaOm />}
                >
                  Start Your Journey
                </Button>
                <Button
                  as={RouterLink}
                  to="/teachings"
                  size="lg"
                  variant="outline"
                  borderColor="kd.primary"
                  color="kd.primary"
                  _hover={{ bg: "kd.primarySoft" }}
                  minH="44px"
                  leftIcon={<FaPrayingHands />}
                >
                  Explore Teachings
                </Button>
              </HStack>
            </VStack>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
} 