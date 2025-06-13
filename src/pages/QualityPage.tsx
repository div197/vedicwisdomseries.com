import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaShieldAlt, FaCertificate, FaGlobe, FaCheckCircle, FaAward, FaIndustry, FaPhone, FaDownload } from 'react-icons/fa';
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
        title="Quality Assurance - Millstone India | ISO 9001:2015 Certified Excellence"
        description="ISO 9001:2015 certified quality management system ensuring superior industrial materials. Government Recognized Export House with rigorous quality control processes."
        keywords={['Quality Assurance', 'ISO 9001:2015', 'Quality Control', 'Export Quality', 'Industrial Standards']}
      />

      {/* 🏭 HERO SECTION */}
      <HeroSectionWrapper bgGradient={bgGradient}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <GridItem>
              <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} pt={{ base: 2, md: 4 }}>
                {/* Hero Icon */}
                <Box ref={heroIconRef.ref} style={heroIconRef.style}>
                  <Icon as={FaShieldAlt} boxSize={16} color="kd.tertiary" />
                  <Text color="kd.textInverted" fontSize="lg" fontWeight="bold" mt={2}>
                    🏭 QUALITY ASSURANCE EXCELLENCE 🏭
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
                    Quality{' '}
                    <Text as="span" color="kd.tertiary">
                      Assurance Excellence
                    </Text>
                  </Heading>
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="medium">
                    From Earth's Core to Your Factory Floor
                  </Text>
                  <Text color="kd.textInverted" fontSize="lg" maxW="600px">
                    Our commitment to quality is not a final checkpoint; it is our fundamental dharma. Every product meets the highest standards with ISO 9001:2015 certification and Government Recognition.
                  </Text>
                </VStack>

                {/* Hero Actions */}
                <VStack spacing={4}>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Text color="kd.textInverted" fontSize="sm">Internationally recognized quality management system</Text>
                    <Text color="kd.textInverted" fontSize="sm">Government Recognized Export House excellence</Text>
                  </HStack>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Button
                      as="a"
                      href="/contact"
                      size="lg"
                      bg="kd.tertiary"
                      color="white"
                      _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
                      leftIcon={<Icon as={FaPhone} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      🏭 Request Quality Consultation
                    </Button>
                    <Button
                      as="a"
                      href="/products"
                      size="lg"
                      variant="outline"
                      borderColor="kd.tertiary"
                      color="kd.tertiary"
                      _hover={{ bg: "kd.tertiary", color: "white", transform: "translateY(-2px)" }}
                      leftIcon={<Icon as={FaDownload} />}
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      📊 Download Quality Certificate
                    </Button>
                  </HStack>
                  <Text color="kd.textInverted" fontSize="sm" fontStyle="italic">
                    Zero Compromise Quality - Industrial Excellence Since 1990
                  </Text>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem display={{ base: "none", lg: "block" }}>
              <AspectRatio ratio={4/3}>
                <Image
                  src="/assets/images/hero/quality-assurance.jpg"
                  alt="Quality Assurance Excellence"
                  borderRadius="xl"
                  objectFit="cover"
                  fallback={
                    <Box bg="rgba(255,255,255,0.1)" borderRadius="xl" display="flex" alignItems="center" justifyContent="center">
                      <Icon as={FaShieldAlt} boxSize={20} color="kd.tertiary" />
                    </Box>
                  }
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </HeroSectionWrapper>

      {/* 🏭 QUALITY CERTIFICATIONS SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={certificationsRef.ref} style={certificationsRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Quality Certifications</Badge>
              <Heading size="xl" color={headingColor}>International Standards Excellence</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Our quality management system meets and exceeds international standards, ensuring consistent excellence in all processes and products.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {[
                {
                  icon: FaCertificate,
                  title: "ISO 9001:2015 Certified",
                  description: "Internationally recognized quality management system ensuring consistent excellence in all our processes and products."
                },
                {
                  icon: FaGlobe,
                  title: "Government Recognized Export House",
                  description: "Official recognition from the Government of India for our export excellence and contribution to international trade."
                },
                {
                  icon: FaAward,
                  title: "Global Quality Standards",
                  description: "Our products meet and exceed international quality standards, trusted by industries across 20+ countries."
                },
                {
                  icon: FaCheckCircle,
                  title: "End-to-End Quality Control",
                  description: "From raw material sourcing to final delivery, every step is monitored and tested for superior quality assurance."
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

      {/* 🏭 QUALITY PROMISE SECTION */}
      <SectionWrapper bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={promiseRef.ref} style={promiseRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Our Quality Promise</Badge>
              <Heading size="xl" color={headingColor}>The Foundation of Your Finish</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" fontStyle="italic" lineHeight="tall">
                "We guarantee that every product leaving our facility meets the exacting standards that have made us a trusted partner to industries worldwide."
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {[
                {
                  title: "Zero Compromise Quality",
                  description: "No shortcuts, no compromises - only the highest quality standards in every product we deliver.",
                  icon: FaShieldAlt
                },
                {
                  title: "Rigorous Testing",
                  description: "Multi-stage testing throughout the production process with continuous quality checks and expert supervision.",
                  icon: FaCheckCircle
                },
                {
                  title: "Global Standards",
                  description: "Meeting and exceeding international quality standards trusted by industries across 20+ countries.",
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

      {/* 🏭 QUALITY PROCESS SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem ref={processRef.ref} style={processRef.style}>
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Quality Process</Badge>
                  <Heading size="xl" color={headingColor}>Our Quality Management System</Heading>
                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Every step of our process is designed to ensure consistent quality, from raw material selection to final product delivery.
                  </Text>
                </VStack>

                <VStack spacing={4} align="start" w="full">
                  {[
                    "Raw Material Quality Assessment & Sourcing",
                    "In-Process Quality Control & Monitoring",
                    "Final Product Testing & Certification",
                    "Packaging & Delivery Quality Assurance"
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
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Quality Standards</Badge>
                  <Heading size="xl" color={headingColor}>International Compliance</Heading>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                  {[
                    {
                      icon: FaCertificate,
                      title: "ISO 9001:2015",
                      description: "Quality Management System"
                    },
                    {
                      icon: FaGlobe,
                      title: "Export House",
                      description: "Government Recognition"
                    },
                    {
                      icon: FaIndustry,
                      title: "Industrial Standards",
                      description: "International Compliance"
                    },
                    {
                      icon: FaAward,
                      title: "Quality Excellence",
                      description: "30+ Years Experience"
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

      {/* 🏭 CTA SECTION */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default QualityPage; 