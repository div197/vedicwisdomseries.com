import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaOm, FaGraduationCap, FaGlobe, FaCheckCircle, FaAward, FaBook, FaCalendarCheck, FaUsers } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation } from '../hooks/useSlideAnimations';

const QualityPage: React.FC = () => {
  // Animation hooks
  const heroIconRef = useSlideAnimation({ direction: 'from-top', delay: 0 });
  const heroContentRef = useSlideAnimation({ direction: 'from-bottom', delay: 200 });
  const certificationsRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const promiseRef = useSlideAnimation({ direction: 'from-bottom', delay: 200 });
  const processRef = useSlideAnimation({ direction: 'from-left', delay: 0 });
  const standardsRef = useSlideAnimation({ direction: 'from-right', delay: 200 });

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
        title="Spiritual Authority - Vedic Wisdom Series | Dr. Nischaya Nagori's Credentials"
        description="MIT Scientist Dr. Nischaya Nagori's spiritual authority establishing India's Vishwaguru leadership. Authentic Vedic lineage, quantum-spiritual convergence, serving 1000+ global students across 25+ countries."
        keywords={['Spiritual Authority', 'MIT Scientist', 'Vedic Scholar', 'Dr. Nischaya Nagori', 'Vishwaguru Leadership', 'Quantum Spirituality']}
      />

      {/* 🕉️ HERO SECTION */}
      <HeroSectionWrapper bgGradient={bgGradient}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <GridItem>
              <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} pt={{ base: 2, md: 4 }}>
                {/* Hero Icon */}
                <Box ref={heroIconRef.ref} style={heroIconRef.style}>
                  <Icon as={FaOm} boxSize={16} color="kd.tertiary" />
                  <Text color="kd.textInverted" fontSize="lg" fontWeight="bold" mt={2}>
                    🕉️ SPIRITUAL AUTHORITY EXCELLENCE 🕉️
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
                    Spiritual{' '}
                    <Text as="span" color="kd.tertiary">
                      Authority Excellence
                    </Text>
                  </Heading>
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="medium">
                    From Ancient Wisdom to Modern Awakening
                  </Text>
                  <Text color="kd.textInverted" fontSize="lg" maxW="600px">
                    Our commitment to authentic spiritual transmission is not just teaching; it is our sacred dharma. Every program meets the highest standards of Vedic lineage with MIT scientific credibility.
                  </Text>
                </VStack>

                {/* Hero Actions */}
                <VStack spacing={4}>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Text color="kd.textInverted" fontSize="sm">MIT Scientist establishing spiritual authority globally</Text>
                    <Text color="kd.textInverted" fontSize="sm">Authentic Vedic lineage with quantum-spiritual insights</Text>
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
                      📖 Explore Divine Programs
                    </Button>
                  </HStack>
                  <Text color="kd.textInverted" fontSize="sm" fontStyle="italic">
                    Zero Compromise Authenticity - Vishwaguru Leadership Since Ancient Times
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
                  <Icon as={FaOm} boxSize={20} color="kd.tertiary" mb={4} />
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="bold" textAlign="center">
                    Dr. Nischaya Nagori
                  </Text>
                  <Text color="kd.textInverted" fontSize="md" textAlign="center">
                    MIT Scientist & Vedic Scholar
                  </Text>
                </Box>
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </HeroSectionWrapper>

      {/* 🕉️ SPIRITUAL CREDENTIALS SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={certificationsRef.ref} style={certificationsRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Spiritual Credentials</Badge>
              <Heading size="xl" color={headingColor}>International Authority Excellence</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Our spiritual authority system establishes and exceeds international Vishwaguru standards, ensuring consistent excellence in all teachings and spiritual transmissions.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {[
                {
                  icon: FaGraduationCap,
                  title: "MIT Scientist Credentials",
                  description: "Internationally recognized scientific credentials establishing modern credibility for ancient spiritual wisdom and quantum-consciousness research."
                },
                {
                  icon: FaGlobe,
                  title: "Global Vishwaguru Authority",
                  description: "Establishing India's spiritual leadership globally through authentic Vedic education serving seekers across 25+ countries worldwide."
                },
                {
                  icon: FaAward,
                  title: "Global Spiritual Standards",
                  description: "Our teachings meet and exceed international spiritual education standards, trusted by 1000+ students across 25+ countries."
                },
                {
                  icon: FaCheckCircle,
                  title: "End-to-End Authenticity",
                  description: "From ancient lineage transmission to modern delivery, every teaching is monitored for authentic spiritual transmission and student transformation."
                }
              ].map((cert, index) => (
                <Card key={index} bg={cardBg} shadow="xl" borderRadius="xl" _hover={{ transform: "translateY(-8px)", shadow: "2xl" }} transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)">
                  <CardBody p={8} textAlign="center">
                    <VStack spacing={6}>
                      <Box p={4} borderRadius="full" bg="orange.50">
                        <Icon as={cert.icon} boxSize={12} color="kd.tertiary" />
                      </Box>
                      <VStack spacing={3}>
                        <Heading size="sm" color={headingColor}>{cert.title}</Heading>
                        <Text color={textColor} fontSize="sm" lineHeight="tall">{cert.description}</Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ SPIRITUAL PROMISE SECTION */}
      <SectionWrapper bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={promiseRef.ref} style={promiseRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Our Spiritual Promise</Badge>
              <Heading size="xl" color={headingColor}>The Foundation of Your Awakening</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" fontStyle="italic" lineHeight="tall">
                "We guarantee that every teaching leaving our sacred space meets the exacting standards that have made us a trusted guide to spiritual seekers worldwide."
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {[
                {
                  title: "Zero Compromise Authenticity",
                  description: "No shortcuts, no compromises - only the highest authenticity standards in every spiritual transmission we deliver.",
                  icon: FaOm
                },
                {
                  title: "Rigorous Lineage Testing",
                  description: "Multi-stage verification throughout the teaching process with continuous authenticity checks and lineage supervision.",
                  icon: FaCheckCircle
                },
                {
                  title: "Global Spiritual Standards",
                  description: "Meeting and exceeding international Vishwaguru standards trusted by spiritual seekers across 25+ countries.",
                  icon: FaGlobe
                }
              ].map((promise, index) => (
                <Card key={index} bg={cardBg} shadow="xl" borderRadius="xl" _hover={{ transform: "translateY(-8px)", shadow: "2xl" }} transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)">
                  <CardBody p={8} textAlign="center">
                    <VStack spacing={6}>
                      <Box p={4} borderRadius="full" bg="orange.50">
                        <Icon as={promise.icon} boxSize={12} color="kd.tertiary" />
                      </Box>
                      <VStack spacing={3}>
                        <Heading size="md" color={headingColor}>{promise.title}</Heading>
                        <Text color={textColor} fontSize="sm" lineHeight="tall">{promise.description}</Text>
                      </VStack>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🕉️ SPIRITUAL PROCESS SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem ref={processRef.ref} style={processRef.style}>
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Spiritual Process</Badge>
                  <Heading size="xl" color={headingColor}>Our Authority Establishment System</Heading>
                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Every step of our spiritual process is designed to ensure consistent authenticity, from ancient lineage verification to modern global delivery.
                  </Text>
                </VStack>

                <VStack spacing={4} align="start" w="full">
                  {[
                    "Ancient Lineage Verification & Transmission",
                    "Modern Scientific Integration & Validation",
                    "Global Student Testing & Transformation",
                    "International Authority & Recognition Assurance"
                  ].map((step, index) => (
                    <HStack key={index} spacing={4} w="full" p={4} borderRadius="md" _hover={{ bg: "gray.50" }} transition="all 0.3s ease">
                      <Box minW="8" h="8" borderRadius="full" bg="kd.tertiary" color="white" display="flex" alignItems="center" justifyContent="center" fontSize="sm" fontWeight="bold">
                        {index + 1}
                      </Box>
                      <Text color={textColor} fontSize="md">{step}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </GridItem>

            <GridItem ref={standardsRef.ref} style={standardsRef.style}>
              <VStack spacing={8}>
                <VStack spacing={4} textAlign="center">
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Authority Standards</Badge>
                  <Heading size="xl" color={headingColor}>International Compliance</Heading>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  {[
                    {
                      icon: FaGraduationCap,
                      title: "MIT Credentials",
                      description: "Scientific Authority System"
                    },
                    {
                      icon: FaGlobe,
                      title: "Vishwaguru Leadership",
                      description: "Global Recognition"
                    },
                    {
                      icon: FaBook,
                      title: "Vedic Standards",
                      description: "International Compliance"
                    },
                    {
                      icon: FaAward,
                      title: "Spiritual Excellence",
                      description: "Ancient Lineage + Modern Authority"
                    }
                  ].map((standard, index) => (
                    <Card key={index} bg={cardBg} shadow="lg" borderRadius="lg" _hover={{ transform: "translateY(-4px)", shadow: "xl" }} transition="all 0.3s ease">
                      <CardBody p={6} textAlign="center">
                        <VStack spacing={4}>
                          <Icon as={standard.icon} boxSize={8} color="kd.tertiary" />
                          <VStack spacing={1}>
                            <Text fontWeight="bold" color={headingColor} fontSize="sm">{standard.title}</Text>
                            <Text color={textColor} fontSize="xs">{standard.description}</Text>
                          </VStack>
                        </VStack>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </VStack>
            </GridItem>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* 🕉️ CTA SECTION */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default QualityPage; 