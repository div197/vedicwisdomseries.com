import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaBook, FaLightbulb, FaGraduationCap, FaUsers, FaPhone, FaDownload, FaEnvelope, FaGlobe, FaClock, FaArrowRight } from 'react-icons/fa';
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
        title="Knowledge Center - Millstone India | Industrial Expertise & Insights"
        description="Expert insights on industrial materials, abrasives, and machinery. Technical guides, industry trends, and professional consultation from experienced craftsmen."
        keywords={['Knowledge Center', 'Industrial Expertise', 'Technical Guides', 'Industry Insights', 'Professional Consultation']}
      />

      {/* 🏭 HERO SECTION */}
      <HeroSectionWrapper bgGradient={bgGradient}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <GridItem>
              <VStack spacing={8} textAlign={{ base: "center", lg: "left" }} pt={{ base: 2, md: 4 }}>
                {/* Hero Icon */}
                <Box ref={heroIconRef.ref} style={heroIconRef.style}>
                  <Icon as={FaBook} boxSize={16} color="kd.tertiary" />
                  <Text color="kd.textInverted" fontSize="lg" fontWeight="bold" mt={2}>
                    🏭 KNOWLEDGE CENTER EXCELLENCE 🏭
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
                    Knowledge{' '}
                    <Text as="span" color="kd.tertiary">
                      Center
                    </Text>
                  </Heading>
                  <Text color="kd.textInverted" fontSize="xl" fontWeight="medium">
                    Expert Industrial Guidance
                  </Text>
                  <Text color="kd.textInverted" fontSize="lg" maxW="600px">
                    Expert guidance, technical articles, and industry knowledge from our team of certified industrial craftsmen serving global markets.
                  </Text>
                </VStack>

                {/* Hero Actions */}
                <VStack spacing={4}>
                  <HStack spacing={4} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
                    <Text color="kd.textInverted" fontSize="sm">Technical expertise from certified professionals</Text>
                    <Text color="kd.textInverted" fontSize="sm">Comprehensive industrial knowledge base</Text>
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
                      🏭 Request Expert Consultation
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
                      📊 Download Technical Guides
                    </Button>
                  </HStack>
                  <Text color="kd.textInverted" fontSize="sm" fontStyle="italic">
                    Industrial Excellence Through Knowledge - Since 1990
                  </Text>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem display={{ base: "none", lg: "block" }}>
              <AspectRatio ratio={4/3}>
                <Image
                  src="/assets/images/hero/knowledge-center.jpg"
                  alt="Knowledge Center Excellence"
                  borderRadius="xl"
                  objectFit="cover"
                  fallback={
                    <Box bg="rgba(255,255,255,0.1)" borderRadius="xl" display="flex" alignItems="center" justifyContent="center">
                      <Icon as={FaBook} boxSize={20} color="kd.tertiary" />
                    </Box>
                  }
                />
              </AspectRatio>
            </GridItem>
          </Grid>
        </Container>
      </HeroSectionWrapper>

      {/* 🏭 FEATURED TECHNICAL ARTICLES SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={articlesRef.ref} style={articlesRef.style}>
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Featured Articles</Badge>
              <Heading size="xl" color={headingColor}>Featured Technical Articles</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Comprehensive guides and expert insights from our team of certified industrial professionals.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                {
                  category: "Technical Guide",
                  readTime: "8 min read",
                  title: "How to Choose the Right Abrasive for Your Application",
                  description: "Comprehensive guide to selecting the optimal abrasive materials based on your specific industrial requirements and surface finishing needs.",
                  color: "blue"
                },
                {
                  category: "Maintenance",
                  readTime: "12 min read", 
                  title: "The Complete Guide to Millstone Maintenance & Dressing",
                  description: "Expert techniques for maintaining and dressing millstones to ensure optimal performance and longevity in flour milling operations.",
                  color: "green"
                },
                {
                  category: "Compliance",
                  readTime: "6 min read",
                  title: "Understanding HSN Codes: A Guide for Procurement Managers",
                  description: "Detailed explanation of HSN classification system for industrial materials, helping procurement teams navigate import/export requirements.",
                  color: "purple"
                },
                {
                  category: "Industry Insights",
                  readTime: "10 min read",
                  title: "Industrial Mineral Applications in Modern Manufacturing",
                  description: "Explore the diverse applications of industrial minerals like magnesite, dolomite, and bentonite in contemporary manufacturing processes.",
                  color: "orange"
                }
              ].map((article, index) => (
                <Card key={index} bg={cardBg} shadow="xl" borderRadius="xl" _hover={{ transform: "translateY(-8px)", shadow: "2xl" }} transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" overflow="hidden">
                  <Box h="4" bg={`${article.color}.400`} />
                  <CardBody p={6}>
                    <VStack spacing={4} align="start" h="full">
                      <HStack spacing={2} flexWrap="wrap">
                        <Badge colorScheme={article.color} fontSize="xs" px={2} py={1}>{article.category}</Badge>
                        <HStack spacing={1}>
                          <Icon as={FaClock} boxSize={3} color="gray.400" />
                          <Text fontSize="xs" color="gray.400">{article.readTime}</Text>
                        </HStack>
                      </HStack>
                      <Heading size="sm" color={headingColor} lineHeight="short">{article.title}</Heading>
                      <Text color={textColor} fontSize="sm" lineHeight="tall" flex="1">{article.description}</Text>
                      <Button 
                        size="sm" 
                        colorScheme="orange" 
                        variant="outline" 
                        rightIcon={<Icon as={FaArrowRight} />}
                        _hover={{ bg: "orange.50", transform: "translateX(4px)" }}
                        transition="all 0.3s ease"
                        w="full"
                      >
                        Read Article
                      </Button>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🏭 EXPERTISE AREAS SECTION */}
      <SectionWrapper bg="gray.50" py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={16} alignItems="center">
            <GridItem ref={expertiseRef.ref} style={expertiseRef.style}>
              <VStack spacing={8} align="start">
                <VStack spacing={4} align="start">
                  <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Our Expertise</Badge>
                  <Heading size="xl" color={headingColor}>Our Expertise Areas</Heading>
                  <Text color={textColor} fontSize="md" lineHeight="tall">
                    Decades of experience in industrial materials and machinery, backed by ISO 9001:2015 certification and global market presence.
                  </Text>
                </VStack>

                <VStack spacing={4} align="start" w="full">
                  {[
                    { icon: FaLightbulb, text: "Abrasive Selection & Application" },
                    { icon: FaGraduationCap, text: "Millstone Technology & Maintenance" },
                    { icon: FaUsers, text: "Industrial Mineral Processing" },
                    { icon: FaBook, text: "Quality Control & Testing" },
                    { icon: FaGlobe, text: "Export Documentation & Compliance" },
                    { icon: FaLightbulb, text: "Custom Solution Development" }
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
                      <Heading size="lg" color={headingColor}>Need Expert Consultation?</Heading>
                      <Text color={textColor} fontSize="md" lineHeight="tall">
                        Our technical experts are available to provide customized guidance for your specific industrial requirements.
                      </Text>
                    </VStack>

                    <VStack spacing={4} w="full">
                      {[
                        { icon: FaPhone, text: "Technical Support: +91 93586 55903" },
                        { icon: FaEnvelope, text: "Email: info@millstoneindia.com" },
                        { icon: FaGlobe, text: "Serving 20+ Countries Worldwide" }
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
                      leftIcon={<Icon as={FaPhone} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      Request Expert Consultation
                    </Button>
                  </VStack>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        </Container>
      </SectionWrapper>

      {/* 🏭 NEWSLETTER SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={12} ref={newsletterRef.ref} style={newsletterRef.style}>
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">Stay Updated</Badge>
              <Heading size="xl" color={headingColor}>Stay Updated with Industry Insights</Heading>
              <Text fontSize="lg" color={textColor} maxW="800px" lineHeight="tall">
                Subscribe to our technical newsletter for the latest industry trends, product updates, and expert guidance from Millstone India.
              </Text>
            </VStack>

            <Card bg={cardBg} shadow="2xl" borderRadius="2xl" maxW="600px" w="full">
              <CardBody p={8}>
                <VStack spacing={6}>
                  <VStack spacing={4} textAlign="center">
                    <Icon as={FaEnvelope} boxSize={10} color="kd.tertiary" />
                    <Heading size="md" color={headingColor}>Technical Newsletter</Heading>
                    <Text color={textColor} fontSize="sm">
                      Get expert insights, technical guides, and industry updates delivered to your inbox.
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
                      size="lg" 
                      bg="kd.tertiary"
                      color="white"
                      _hover={{ bg: "yellow.500", transform: "translateY(-2px)" }}
                      w="full"
                      leftIcon={<Icon as={FaEnvelope} />}
                      boxShadow="0 4px 15px rgba(230, 184, 0, 0.3)"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    >
                      Subscribe to Newsletter
                    </Button>
                  </VStack>

                  <Text fontSize="xs" color="gray.400" textAlign="center">
                    We respect your privacy. Unsubscribe at any time.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🏭 CTA SECTION */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default KnowledgeCenterPage; 