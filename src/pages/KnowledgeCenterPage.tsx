import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaBook, FaOm, FaGraduationCap, FaUsers, FaCalendarCheck, FaPlay, FaEnvelope, FaGlobe, FaClock, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation } from '../hooks/useSlideAnimations';

const KnowledgeCenterPage: React.FC = () => {
  // Animation hooks
  const heroIconRef = useSlideAnimation({ direction: 'from-top', delay: 0 });
  const heroContentRef = useSlideAnimation({ direction: 'from-bottom', delay: 200 });
  const articlesRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const expertiseRef = useSlideAnimation({ direction: 'from-left', delay: 200 });
  const consultationRef = useSlideAnimation({ direction: 'from-right', delay: 400 });
  const newsletterRef = useSlideAnimation({ direction: 'from-bottom', delay: 600 });

  const bgGradient = useColorModeValue(
    'linear(to-br, kd.primary, kd.secondary)',
    'linear(to-br, kd.primary, kd.secondary)'
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('kd.primary', 'kd.primary');

  return (
    <PageWrapper hasHero={true}>
      <SEOHead
        title="Vedic Wisdom Library - Vedic Wisdom Series | Dr. Nischaya Nagori's Teachings"
        description="Access profound Vedic wisdom teachings and quantum-spiritual insights. Sacred texts, spiritual guides, and transformational content from MIT Scientist Dr. Nischaya Nagori."
        keywords={['Vedic Wisdom Library', 'Spiritual Teachings', 'Quantum Spirituality', 'Dr. Nischaya Nagori', 'Vedic Education', 'MIT Scientist']}
      />

      {/* 🕉️ HERO SECTION */}
      <HeroSectionWrapper bgGradient={bgGradient}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <GridItem>
              <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} pt={{ base: 2, md: 4 }}>
                {/* Hero Icon */}
                <Box ref={heroIconRef.ref} style={heroIconRef.style}>
                  <Icon as={FaBook} boxSize={16} color="kd.tertiary" />
                  <Text color="kd.textInverted" fontSize="lg" fontWeight="bold" mt={2}>
                    🕉️ VEDIC WISDOM LIBRARY EXCELLENCE 🕉️
                  </Text>
                </Box>

                {/* Hero Content */}
                <VStack spacing={6} ref={heroContentRef.ref} style={heroContentRef.style}>
                  <Heading 
                    as="h1" 
                    size="2xl" 
                    color="kd.textInverted" 
                    textAlign={{ base: "center", lg: "left" }}
                    lineHeight="shorter"
                  >
                    Vedic Wisdom{' '}
                    <Text as="span" color="kd.tertiary">
                      Library
                    </Text>
                  </Heading>
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="medium">
                    Ancient Knowledge, Modern Awakening
                  </Text>
                  <Text color="kd.textInverted" fontSize="lg" maxW="600px">
                    Sacred teachings, quantum-spiritual insights, and transformational wisdom from MIT Scientist Dr. Nischaya Nagori serving 1000+ global seekers.
                  </Text>
                </VStack>

                {/* Hero Actions */}
                <VStack spacing={4}>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Text color="kd.textInverted" fontSize="sm">Spiritual expertise from authentic Vedic lineage</Text>
                    <Text color="kd.textInverted" fontSize="sm">Comprehensive quantum-spiritual knowledge base</Text>
                  </HStack>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Button
                      as="a"
                      href="/contact"
                      size="lg"
                      bg="kd.tertiary"
                      color="white"
                      _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
                      leftIcon={<Icon as={FaCalendarCheck} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      🕉️ Request Spiritual Guidance
                    </Button>
                    <Button
                      as="a"
                      href="/teachings"
                      size="lg"
                      variant="outline"
                      borderColor="kd.tertiary"
                      color="kd.tertiary"
                      _hover={{ bg: "kd.tertiary", color: "white", transform: "translateY(-2px)" }}
                      leftIcon={<Icon as={FaBook} />}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      📖 Access Sacred Teachings
                    </Button>
                  </HStack>
                  <Text color="kd.textInverted" fontSize="sm" fontStyle="italic">
                    Spiritual Excellence Through Ancient Wisdom - Since Vedic Times
                  </Text>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem display={{ base: "none", lg: "block" }}>
              <AspectRatio ratio={4/3}>
                <Box
                  bg="rgba(255,255,255,0.1)"
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  p={8}
                >
                  <Icon as={FaBook} boxSize={20} color="kd.tertiary" mb={4} />
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="bold" textAlign="center">
                    Sacred Texts &
                  </Text>
                  <Text color="kd.textInverted" fontSize="md" textAlign="center">
                    Quantum Insights
                  </Text>
                </Box>
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </HeroSectionWrapper>

      {/* 🕉️ FEATURED SPIRITUAL TEACHINGS SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={articlesRef.ref} style={articlesRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Featured Teachings</Badge>
              <Heading size="xl" color={headingColor}>Sacred Wisdom Collection</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Profound teachings and quantum-spiritual insights from MIT Scientist Dr. Nischaya Nagori's authentic Vedic education programs.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                {
                  category: "Quantum Teaching",
                  readTime: "15 min experience",
                  title: "How Quantum Physics Proves Your Soul's Eternal Nature",
                  description: "Revolutionary insights connecting Einstein's discoveries with ancient Vedic wisdom, revealing the scientific foundation of spiritual consciousness.",
                  color: "blue"
                },
                {
                  category: "Sacred Practice",
                  readTime: "30 min practice", 
                  title: "The Complete Guide to Vedic Meditation & Consciousness",
                  description: "Authentic meditation techniques from ancient lineage combined with modern neuroscience for profound spiritual transformation.",
                  color: "green"
                },
                {
                  category: "Spiritual Science",
                  readTime: "20 min study",
                  title: "Understanding Karma: The Universal Law of Spiritual Physics",
                  description: "Detailed exploration of karmic principles through both Vedic scriptures and quantum mechanics, revealing the scientific nature of spiritual law.",
                  color: "purple"
                },
                {
                  category: "Consciousness Insights",
                  readTime: "25 min revelation",
                  title: "Consciousness Evolution: From Einstein to Enlightenment",
                  description: "Explore the revolutionary convergence of consciousness research and ancient spiritual wisdom in Dr. Nischaya's groundbreaking teachings.",
                  color: "orange"
                }
              ].map((teaching, index) => (
                <Card key={index} bg={cardBg} shadow="xl" borderRadius="xl" _hover={{ transform: "translateY(-8px)", shadow: "2xl" }} transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" overflow="hidden">
                  <Box h="4" bg={`${teaching.color}.400`} />
                  <CardBody p={6}>
                    <VStack spacing={4} align="start" h="full">
                      <HStack spacing={2} flexWrap="wrap">
                        <Badge colorScheme={teaching.color} fontSize="xs" px={2} py={1}>{teaching.category}</Badge>
                        <HStack spacing={1}>
                          <Icon as={FaClock} boxSize={3} color="gray.400" />
                          <Text fontSize="xs" color="gray.400">{teaching.readTime}</Text>
                        </HStack>
                      </HStack>
                      <Heading size="sm" color={headingColor} lineHeight="short">{teaching.title}</Heading>
                      <Text color={textColor} fontSize="sm" lineHeight="tall" flex="1">{teaching.description}</Text>
                      <Button 
                        as="a"
                        href="/teachings"
                        size="sm" 
                        colorScheme="orange" 
                        variant="outline" 
                        rightIcon={<Icon as={FaArrowRight} />}
                        _hover={{ bg: "orange.50", transform: "translateX(4px)" }}
                        transition="all 0.3s ease"
                        w="full"
                      >
                        Experience Teaching
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ SPIRITUAL EXPERTISE SECTION */}
      <SectionWrapper bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem ref={expertiseRef.ref} style={expertiseRef.style}>
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Our Expertise</Badge>
                  <Heading size="xl" color={headingColor}>Spiritual Authority Areas</Heading>
                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Ancient wisdom combined with modern science, backed by MIT credentials and authentic Vedic lineage serving global seekers.
                  </Text>
                </VStack>

                <VStack spacing={4} align="start" w="full">
                  {[
                    { icon: FaOm, text: "Quantum-Spiritual Convergence Studies" },
                    { icon: FaGraduationCap, text: "Vedic Text Interpretation & Teaching" },
                    { icon: FaUsers, text: "Consciousness Evolution & Transformation" },
                    { icon: FaBook, text: "Sacred Sanskrit & Mantra Science" },
                    { icon: FaGlobe, text: "Global Spiritual Community Building" },
                    { icon: FaOm, text: "Authentic Lineage Transmission" }
                  ].map((expertise, index) => (
                    <HStack key={index} spacing={4} w="full" p={4} borderRadius="lg" _hover={{ bg: "white", shadow: "md" }} transition="all 0.3s ease">
                      <Box p={2} borderRadius="full" bg="orange.50">
                        <Icon as={expertise.icon} color="kd.tertiary" boxSize={5} />
                      </Box>
                      <Text color={textColor} fontSize="md" fontWeight="medium">{expertise.text}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </GridItem>

            <GridItem ref={consultationRef.ref} style={consultationRef.style}>
              <Card bg={cardBg} shadow="2xl" borderRadius="2xl" overflow="hidden">
                <Box h="6" bg="linear-gradient(90deg, orange.400, yellow.400)" />
                <CardBody p={8}>
                  <VStack spacing={6}>
                    <VStack spacing={4} textAlign="center">
                      <Icon as={FaUsers} boxSize={12} color="kd.tertiary" />
                      <Heading size="lg" color={headingColor}>Need Spiritual Guidance?</Heading>
                      <Text color={textColor} fontSize="md" lineHeight="tall">
                        Dr. Nischaya Nagori is available to provide personalized spiritual guidance for your consciousness evolution journey.
                      </Text>
                    </VStack>

                    <VStack spacing={4} w="full">
                      {[
                        { icon: FaCalendarCheck, text: "Spiritual Consultations Available" },
                        { icon: FaEnvelope, text: "Email: contact@vedicwisdomseries.com" },
                        { icon: FaGlobe, text: "Serving 1000+ Students in 25+ Countries" }
                      ].map((contact, index) => (
                        <HStack key={index} spacing={4} w="full" p={3} borderRadius="md" bg="gray.50">
                          <Icon as={contact.icon} color="kd.tertiary" boxSize={4} />
                          <Text color={textColor} fontSize="sm" fontWeight="medium">{contact.text}</Text>
                        </HStack>
                      ))}
                    </VStack>

                    <Button 
                      as="a"
                      href="/contact"
                      size="lg" 
                      bg="kd.tertiary"
                      color="white"
                      _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
                      w="full"
                      leftIcon={<Icon as={FaCalendarCheck} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      Request Spiritual Guidance
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* 🕉️ SPIRITUAL COMMUNITY SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12} ref={newsletterRef.ref} style={newsletterRef.style}>
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Join Community</Badge>
              <Heading size="xl" color={headingColor}>Join Global Spiritual Community</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Connect with 1000+ fellow seekers for the latest spiritual insights, quantum wisdom updates, and transformational guidance from Dr. Nischaya Nagori.
              </Text>
            </VStack>

            <Card bg={cardBg} shadow="2xl" borderRadius="2xl" maxW="600px" w="full">
              <CardBody p={8}>
                <VStack spacing={6}>
                  <VStack spacing={4} textAlign="center">
                    <Icon as={FaEnvelope} boxSize={10} color="kd.tertiary" />
                    <Heading size="md" color={headingColor}>Spiritual Wisdom Updates</Heading>
                    <Text color={textColor} fontSize="sm">
                      Receive profound spiritual insights, quantum teachings, and consciousness evolution guidance.
                    </Text>
                  </VStack>

                  <VStack spacing={4} w="full">
                    <HStack w="full" spacing={4}>
                      <Box flex="1">
                        <Text fontSize="sm" color={textColor} mb={2}>Email Address</Text>
                        <Box h="12" bg="gray.50" borderRadius="md" border="1px" borderColor="gray.200" />
                      </Box>
                    </HStack>
                    <Button 
                      as="a"
                      href="/contact"
                      size="lg" 
                      bg="kd.tertiary"
                      color="white"
                      _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
                      w="full"
                      leftIcon={<Icon as={FaEnvelope} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      Join Spiritual Community
                    </Button>
                  </VStack>

                  <Text fontSize="xs" color="gray.400" textAlign="center">
                    Sacred wisdom shared with utmost respect. Transform at your own pace.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ CTA SECTION */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default KnowledgeCenterPage; 