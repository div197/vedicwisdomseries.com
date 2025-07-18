import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem, 
  Stat, StatLabel, StatNumber, List, ListItem, ListIcon, Divider, chakra
} from '@chakra-ui/react';
import { 
  FaOm, FaBook, FaGraduationCap, FaUsers, FaAward, FaHandsHelping, 
  FaPhone, FaQuoteLeft, FaHeart, FaGlobe, FaLightbulb, FaCheckCircle,
  FaYoutube, FaFacebookF, FaInstagram, FaEnvelope
} from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';
import { vedicWisdomSeries } from '../data/vedicWisdomSeries';

const AboutPage: React.FC = () => {
  // DIVINE SLIDE ANIMATIONS
  const heroIconAnimation = useSlideAnimation(slideAnimationConfigs.heroIcon);
  const heroTitleAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const heroSubtitleAnimation = useSlideAnimation(slideAnimationConfigs.heroSubtitle);
  const heroDescAnimation = useSlideAnimation(slideAnimationConfigs.heroDescription);
  const heroCTAAnimation = useSlideAnimation(slideAnimationConfigs.heroButtons);

  // Section animations with staggered delays
  const storyRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const journeyRef = useSlideAnimation({ direction: 'from-left', delay: 200 });
  const visionRef = useSlideAnimation({ direction: 'from-right', delay: 400 });
  const credentialsRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const approachRef = useSlideAnimation({ direction: 'from-bottom', delay: 200 });

  // DIVINE COLOR SYSTEM
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50, blue.50, yellow.50)',
    'linear(to-br, gray.900, gray.800, gray.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const mutedText = useColorModeValue('gray.600', 'gray.400');
  const accentBg = useColorModeValue('orange.50', 'orange.900');

  return (
    <PageWrapper hasHero={true}>
      <SEOHead
        title="About Dr. Nischaya Nagori - Vedic Scholar & Spiritual Guide"
        description="Meet Dr. Nischaya Nagori, revolutionary Vedic teacher bridging quantum physics with ancient wisdom. Authentic lineage holder offering Weekend Discourses, Chanting Classes, and Teacher Training."
        keywords={['Dr. Nischaya Nagori', 'Vedic Scholar', 'Spiritual Teacher', 'Quantum Physics Spirituality', 'Sanskrit Expert', 'Vedic Education']}
      />

      {/* 🕉️ HERO SECTION - Dr. Nischaya's Introduction */}
      <HeroSectionWrapper>
        <Box 
          minH="90vh" 
          bgGradient={bgGradient}
          position="relative"
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
          
          <Container maxW="7xl" py={{ base: 12, md: 20 }} position="relative">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
              <GridItem order={{ base: 2, lg: 1 }}>
                <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} align={{ base: "center", lg: "start" }}>
                  {/* Hero Icon */}
                  <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                    <Icon as={FaOm} boxSize={16} color="orange.500" />
                    <Text color="orange.600" fontSize="lg" fontWeight="bold" mt={2}>
                      🕉️ ANCIENT SOUND, MODERN AWAKENING 🕉️
                    </Text>
                  </Box>

                  {/* Hero Content */}
                  <VStack spacing={6} align={{ base: "center", lg: "start" }}>
                    <Heading 
                      as="h1" 
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color="gray.800"
                      lineHeight="shorter"
                      ref={heroTitleAnimation.ref}
                      style={heroTitleAnimation.style}
                    >
                      Meet{' '}
                      <Text as="span" color="orange.500">
                        Dr. Nischaya Nagori
                      </Text>
                    </Heading>
                    
                    <Text 
                      color="gray.700" 
                      fontSize={{ base: "lg", md: "xl" }}
                      fontWeight="medium"
                      ref={heroSubtitleAnimation.ref}
                      style={heroSubtitleAnimation.style}
                    >
                      Vedic Scholar, Spiritual Guide & Bridge Between Worlds
                    </Text>
                    
                    <Text 
                      color={mutedText}
                      fontSize={{ base: "md", md: "lg" }}
                      maxW="600px"
                      lineHeight="tall"
                      ref={heroDescAnimation.ref}
                      style={heroDescAnimation.style}
                    >
                      Revolutionary teacher connecting quantum physics with ancient Vedic wisdom. 
                      Authentic lineage holder making profound spiritual knowledge accessible to 
                      modern seekers worldwide through transformative online programs.
                    </Text>
                  </VStack>

                  {/* Hero Actions */}
                  <Box ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                    <VStack spacing={4} align={{ base: "center", lg: "start" }}>
                      <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "start" }}>
                        <Button
                          as="a"
                          href="/teachings"
                          size={{ base: "md", md: "lg" }}
                          colorScheme="orange"
                          leftIcon={<Icon as={FaBook} />}
                          _hover={{ 
                            transform: "translateY(-2px)",
                            boxShadow: "xl"
                          }}
                        >
                          Explore Teachings
                        </Button>
                        <Button
                          as="a"
                          href="/contact"
                          size={{ base: "md", md: "lg" }}
                          variant="outline"
                          colorScheme="blue"
                          leftIcon={<Icon as={FaHandsHelping} />}
                          _hover={{ 
                            transform: "translateY(-2px)",
                            boxShadow: "md"
                          }}
                        >
                          Connect with Dr. Nischaya
                        </Button>
                      </HStack>
                      
                      {/* Social Links */}
                      <HStack spacing={4} pt={2}>
                        <Text fontSize="sm" color={mutedText}>Follow:</Text>
                        {vedicWisdomSeries.teacher.socialLinks.map((link, idx) => {
                          const Icon = link.platform === 'YouTube' ? FaYoutube : 
                                      link.platform === 'Facebook' ? FaFacebookF : 
                                      FaInstagram;
                          return (
                            <IconButton
                              key={idx}
                              as="a"
                              href={link.url}
                              target="_blank"
                              aria-label={link.platform}
                              icon={<Icon />}
                              size="sm"
                              colorScheme="gray"
                              variant="ghost"
                            />
                          );
                        })}
                      </HStack>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>

              {/* Hero Image */}
              <GridItem order={{ base: 1, lg: 2 }}>
                <AspectRatio ratio={1}>
                  <Box position="relative">
                    <Image
                      src="/assets/images/dr-nischaya-nagori.jpg"
                      alt="Dr. Nischaya Nagori - Vedic Scholar and Spiritual Guide"
                      borderRadius="full"
                      objectFit="cover"
                      boxSize={{ base: "300px", md: "400px", lg: "500px" }}
                      mx="auto"
                      shadow="2xl"
                      border="8px solid"
                      borderColor="orange.200"
                      _hover={{ transform: "scale(1.02)" }}
                      transition="all 0.3s ease"
                    />
                    <Box
                      position="absolute"
                      bottom={4}
                      right={4}
                      bg="orange.500"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="bold"
                      shadow="lg"
                    >
                      Serving Seekers Globally
                    </Box>
                  </Box>
                </AspectRatio>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </HeroSectionWrapper>

      {/* 🕉️ SPIRITUAL JOURNEY SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={storyRef.ref} style={storyRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">
                The Journey
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                From Ancient Wisdom to Modern Understanding
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="800px" lineHeight="tall">
                Dr. Nischaya Nagori's unique journey bridges millennia-old Vedic knowledge with 
                cutting-edge scientific understanding, creating a revolutionary approach to spiritual education.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
              <VStack spacing={8} align="start" ref={journeyRef.ref} style={journeyRef.style}>
                <Box>
                  <Icon as={FaQuoteLeft} boxSize={8} color="orange.400" mb={4} />
                  <Text fontSize="lg" lineHeight="tall" color="gray.700" fontStyle="italic">
                    "My journey began in the traditional gurukuls of India, where I immersed myself 
                    in the study of Vedas, Puranas, and Sanskrit texts under enlightened masters. 
                    But it was the discovery of profound parallels between quantum physics and 
                    Vedantic philosophy that revolutionized my understanding and teaching approach."
                  </Text>
                  <Text mt={4} fontWeight="bold" color="orange.600">
                    — Dr. Nischaya Nagori
                  </Text>
                </Box>

                <VStack spacing={4} align="start" w="full">
                  <Heading size="md" color="gray.800">Traditional Foundation</Heading>
                  {[
                    "Deep study of Vedas, Upanishads, and Puranas",
                    "Mastery of Sanskrit and ancient texts",
                    "Authentic guru-disciple lineage transmission",
                    "Years of meditation and spiritual practice",
                    "Direct experiential realization (anubhava)"
                  ].map((item, index) => (
                    <HStack key={index} spacing={3} align="start">
                      <Icon as={FaCheckCircle} color="green.500" mt={1} />
                      <Text color="gray.700">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>

              <VStack spacing={8} align="start" ref={visionRef.ref} style={visionRef.style}>
                <Card bg={accentBg} shadow="xl">
                  <CardBody>
                    <VStack spacing={4} align="start">
                      <Icon as={FaLightbulb} boxSize={10} color="orange.500" />
                      <Heading size="md" color="gray.800">
                        The Revolutionary Discovery
                      </Heading>
                      <Text color="gray.700" lineHeight="tall">
                        While studying quantum mechanics, I experienced a profound realization: 
                        the principles described by modern physics were already encoded in our 
                        ancient texts. Quantum entanglement mirrors Krishna's teaching of 
                        interconnected souls, superposition reflects divine omnipresence, 
                        and consciousness as primary reality aligns perfectly with Vedantic truth.
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>

                <VStack spacing={4} align="start" w="full">
                  <Heading size="md" color="gray.800">Modern Integration</Heading>
                  {[
                    "Quantum physics parallels with Vedic metaphysics",
                    "Information theory and consciousness studies",
                    "Mathematical frameworks for spiritual concepts",
                    "Scientific validation of ancient practices",
                    "Global accessibility through technology"
                  ].map((item, index) => (
                    <HStack key={index} spacing={3} align="start">
                      <Icon as={FaCheckCircle} color="blue.500" mt={1} />
                      <Text color="gray.700">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ CREDENTIALS & EXPERTISE */}
      <SectionWrapper bg={useColorModeValue('gray.50', 'gray.900')} py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={credentialsRef.ref} style={credentialsRef.style}>
              <Badge colorScheme="blue" fontSize="md" px={4} py={2} borderRadius="full">
                Credentials & Expertise
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                A Bridge Between Ancient & Modern
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                {
                  icon: FaBook,
                  title: "Vedic Scholar",
                  description: "Deep expertise in Vedas, Puranas, Upanishads, and Sanskrit texts with traditional gurukul training",
                  color: "orange"
                },
                {
                  icon: FaGraduationCap,
                  title: "Authentic Lineage",
                  description: "Direct transmission in the guru-disciple tradition, preserving ancient teaching methodologies",
                  color: "blue"
                },
                {
                  icon: FaLightbulb,
                  title: "Scientific Integration",
                  description: "Pioneer in connecting quantum physics, consciousness studies, and Vedic philosophy",
                  color: "green"
                },
                {
                  icon: FaGlobe,
                  title: "Global Teacher",
                  description: "Serving thousands of students worldwide through accessible online spiritual education",
                  color: "purple"
                }
              ].map((credential, index) => {
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
                    borderTop="4px solid"
                    borderColor={`${credential.color}.500`}
                    _hover={{ 
                      transform: 'translateY(-8px)', 
                      shadow: '2xl'
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody textAlign="center" p={8}>
                      <VStack spacing={4}>
                        <Box
                          bg={`${credential.color}.100`}
                          p={4}
                          borderRadius="full"
                        >
                          <Icon as={credential.icon} boxSize={8} color={`${credential.color}.500`} />
                        </Box>
                        <Heading size="md" color="gray.800">
                          {credential.title}
                        </Heading>
                        <Text fontSize="sm" color={mutedText} lineHeight="tall">
                          {credential.description}
                        </Text>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ TEACHING APPROACH */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={approachRef.ref} style={approachRef.style}>
              <Badge colorScheme="green" fontSize="md" px={4} py={2} borderRadius="full">
                Teaching Philosophy
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                Making Ancient Wisdom Accessible
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="800px" lineHeight="tall">
                Dr. Nischaya's teaching approach combines traditional authenticity with modern accessibility, 
                ensuring profound spiritual knowledge reaches seekers at all levels.
              </Text>
            </VStack>

            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12}>
              <GridItem>
                <Card bg={cardBg} shadow="xl" height="full">
                  <CardBody p={8}>
                    <VStack spacing={6} align="start">
                      <Heading size="md" color="gray.800">
                        The Three Pillars of Truth
                      </Heading>
                      <List spacing={4}>
                        <ListItem>
                          <HStack align="start" spacing={3}>
                            <Box mt={1}>
                              <Icon as={FaHeart} color="orange.500" />
                            </Box>
                            <Box>
                              <Text fontWeight="bold" color="gray.800">Spiritual Truth</Text>
                              <Text fontSize="sm" color={mutedText}>
                                Direct experience (anubhava) and scriptural authority (shabda pramana)
                              </Text>
                            </Box>
                          </HStack>
                        </ListItem>
                        <ListItem>
                          <HStack align="start" spacing={3}>
                            <Box mt={1}>
                              <Icon as={FaLightbulb} color="blue.500" />
                            </Box>
                            <Box>
                              <Text fontWeight="bold" color="gray.800">Scientific Truth</Text>
                              <Text fontSize="sm" color={mutedText}>
                                Empirical observation, hypothesis testing, and mathematical modeling
                              </Text>
                            </Box>
                          </HStack>
                        </ListItem>
                        <ListItem>
                          <HStack align="start" spacing={3}>
                            <Box mt={1}>
                              <Icon as={FaBook} color="green.500" />
                            </Box>
                            <Box>
                              <Text fontWeight="bold" color="gray.800">Mathematical Proof</Text>
                              <Text fontSize="sm" color={mutedText}>
                                Logical certainty within axiomatic systems of understanding
                              </Text>
                            </Box>
                          </HStack>
                        </ListItem>
                      </List>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem>
                <Card bg="orange.50" shadow="xl" height="full">
                  <CardBody p={8}>
                    <VStack spacing={6} align="start">
                      <Heading size="md" color="gray.800">
                        Student Testimonial
                      </Heading>
                      <Box>
                        <Icon as={FaQuoteLeft} boxSize={6} color="orange.400" mb={2} />
                        <Text fontSize="lg" lineHeight="tall" color="gray.700" fontStyle="italic">
                          "Dr. Nischaya has a unique gift of making complex Vedic concepts crystal clear. 
                          His ability to connect ancient wisdom with quantum physics completely transformed 
                          my understanding of both science and spirituality. The weekend discourses are 
                          life-changing!"
                        </Text>
                        <HStack mt={4} spacing={2}>
                          <Divider orientation="horizontal" w="50px" borderColor="orange.400" />
                          <Text fontWeight="bold" color="orange.600">
                            Sarah M., Quantum Physicist
                          </Text>
                        </HStack>
                      </Box>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ GLOBAL IMPACT STATS */}
      <SectionWrapper bg="blue.600" color="white" py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={12}>
            <Heading size={{ base: "lg", md: "xl" }} textAlign="center">
              Transforming Lives Worldwide
            </Heading>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {[
                { number: "10,000+", label: "Students Globally" },
                { number: "25+", label: "Countries Reached" },
                { number: "500+", label: "Hours of Teachings" },
                { number: "50+", label: "Certified Teachers" }
              ].map((stat, index) => (
                <VStack key={index} spacing={2}>
                  <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" color="yellow.300">
                    {stat.number}
                  </Text>
                  <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
                    {stat.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* Universal CTA */}
      <Box py={12}>
        <UniversalCTA variant="hero" />
      </Box>
    </PageWrapper>
  );
};

// Helper component for icon buttons
const IconButton = chakra(Button);

export default AboutPage;