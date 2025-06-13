import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, VStack, HStack, Image, Button, Icon, 
  useColorModeValue, Flex, Badge, Card, CardBody, AspectRatio, Grid, GridItem, Stat, StatLabel, StatNumber
} from '@chakra-ui/react';
import { FaIndustry, FaCertificate, FaGlobe, FaUsers, FaAward, FaHandshake, FaPhone, FaDownload, FaShippingFast, FaTools, FaCog } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations';

const AboutPage: React.FC = () => {
  // DIVINE SLIDE ANIMATIONS - Following homepage patterns
  const heroIconAnimation = useSlideAnimation(slideAnimationConfigs.heroIcon);
  const heroTitleAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const heroSubtitleAnimation = useSlideAnimation(slideAnimationConfigs.heroSubtitle);
  const heroDescAnimation = useSlideAnimation(slideAnimationConfigs.heroDescription);
  const heroCTAAnimation = useSlideAnimation(slideAnimationConfigs.heroButtons);

  // Section animations with staggered delays
  const storyRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const journeyRef = useSlideAnimation({ direction: 'from-left', delay: 200 });
  const approachRef = useSlideAnimation({ direction: 'from-right', delay: 400 });
  const valuesRef = useSlideAnimation({ direction: 'from-bottom', delay: 0 });
  const achievementsRef = useSlideAnimation({ direction: 'from-bottom', delay: 200 });

  // DIVINE COLOR SYSTEM - Following KD Framework
  const textColor = 'kd.text'
  const headingColor = 'kd.heading'
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceElevated')

  return (
    <PageWrapper hasHero={true}>
      <SEOHead
        title="About Millstone India - Industrial Excellence Since 1990"
        description="Expert industrial craftsmen providing superior abrasives, minerals, machinery, and technical expertise. Government Recognized Export House serving 20+ countries with ISO 9001:2015 certified excellence."
        keywords={['About Millstone India', 'Industrial Materials', 'Export House', 'ISO Certified', 'GST 08CDZPM1573Q1ZD']}
      />

      {/* 🏭 HERO SECTION - Fixed header overlap with hasHero={true} */}
      <HeroSectionWrapper>
        <Box minH="80vh" bg="kd.surface">
          <Container maxW="7xl" py={{ base: 12, md: 20 }}>
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
              <GridItem>
                <VStack spacing={8} textAlign={{ base: "center", lg: "left" }}>
                  {/* Hero Icon - Following homepage pattern */}
                  <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                    <Icon as={FaIndustry} boxSize={16} color="kd.tertiary" />
                    <Text color={textColor} fontSize="lg" fontWeight="bold" mt={2}>
                      🏭 INDUSTRIAL EXCELLENCE SINCE 1990 🏭
                    </Text>
                  </Box>

                  {/* Hero Content - Staggered animations */}
                  <VStack spacing={6}>
                    <Heading 
                      as="h1" 
                      size={{ base: "xl", md: "2xl", lg: "3xl" }}
                      color={headingColor}
                      textAlign={{ base: "center", lg: "left" }}
                      lineHeight="shorter"
                      ref={heroTitleAnimation.ref}
                      style={heroTitleAnimation.style}
                    >
                      About{' '}
                      <Text as="span" color="kd.secondary">
                        Millstone India
                      </Text>
                    </Heading>
                    
                    <Text 
                      color={textColor} 
                      fontSize={{ base: "md", md: "lg" }}
                      maxW="600px"
                      lineHeight="tall"
                      ref={heroDescAnimation.ref}
                      style={heroDescAnimation.style}
                    >
                      Three decades of industrial expertise delivering superior abrasives, minerals, and machinery. 
                      Government Recognized Export House serving global manufacturing with ISO 9001:2015 excellence.
                    </Text>
                  </VStack>

                  {/* Hero Actions - Simplified */}
                  <Box ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                    <VStack spacing={4}>
                      <Button
                        as="a"
                        href="/contact"
                        size={{ base: "md", md: "lg" }}
                        bg="kd.secondary"
                        color="kd.secondaryContrast"
                        _hover={{ 
                          bg: "kd.secondaryDark", 
                          transform: "translateY(-2px)",
                          boxShadow: "xl"
                        }}
                        leftIcon={<Icon as={FaPhone} />}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      >
                        Request Expert Consultation
                      </Button>
                      <Text color={textColor} fontSize="sm" fontStyle="italic">
                        GST: 08CDZPM1573Q1ZD | J-1/74, RIICO Industrial Area, Sangariya, Jodhpur
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </GridItem>

              {/* Hero Image - Using real product image */}
              <GridItem display={{ base: "none", lg: "block" }}>
                <AspectRatio ratio={4/3}>
                  <Image
                    src="/assets/images/products/5.jpeg"
                    alt="Millstone India - Bulk Export Container with Industrial Materials"
                    borderRadius="xl"
                    objectFit="cover"
                    shadow="2xl"
                    _hover={{ transform: "scale(1.02)" }}
                    transition="all 0.3s ease"
                  />
                </AspectRatio>
              </GridItem>
            </Grid>
          </Container>
        </Box>
      </HeroSectionWrapper>

      {/* 🏭 OUR STORY SECTION - Enhanced content */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={storyRef.ref} style={storyRef.style}>
              <Badge bg="transparent" borderColor="kd.secondary" color="kd.secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Our Story
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                From Local Supplier to Global Export House
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} maxW="800px" lineHeight="tall">
                Founded in 1990, Millstone India began as Sharad Enterprises with a simple mission: deliver uncompromising quality in industrial materials. Today, we're a Government Recognized Export House serving manufacturers across six continents.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16}>
              <VStack spacing={8} align="start" ref={journeyRef.ref} style={journeyRef.style}>
                <Heading size="lg" color={headingColor}>The Millstone Journey</Heading>
                <Text color={textColor} fontSize="md" lineHeight="tall">
                  Our transformation from a regional supplier to an international export house reflects our unwavering commitment to quality and innovation. Each milestone represents years of dedication to serving our customers' evolving needs.
                </Text>
                <VStack spacing={4} align="start" w="full">
                  {[
                    { icon: FaIndustry, text: "1990: Founded as Sharad Enterprises in Jodhpur, Rajasthan" },
                    { icon: FaCertificate, text: "2010: Achieved ISO 9001:2015 certification for quality excellence" },
                    { icon: FaGlobe, text: "2015: Recognized as Government Export House" },
                    { icon: FaShippingFast, text: "2020: Expanded operations to serve 20+ countries globally" }
                  ].map((item, index) => (
                    <Card key={index} bg={cardBg} w="full" shadow="md" _hover={{ shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s ease">
                      <CardBody>
                        <HStack spacing={4}>
                          <Icon as={item.icon} color="kd.secondary" boxSize={6} />
                          <Text color={textColor} fontSize="md" fontWeight="medium">{item.text}</Text>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </VStack>

              <VStack spacing={8} align="start" ref={approachRef.ref} style={approachRef.style}>
                <Heading size="lg" color={headingColor}>Our Manufacturing Excellence</Heading>
                <Text color={textColor} fontSize="md" lineHeight="tall">
                  Located in RIICO Industrial Area, Sangariya, our state-of-the-art facility combines traditional craftsmanship with modern technology. Every product undergoes rigorous testing to ensure it meets international quality standards.
                </Text>
                <VStack spacing={4} align="start" w="full">
                  {[
                    { icon: FaTools, text: "Advanced quality control and testing laboratories" },
                    { icon: FaCog, text: "Technical consultation and customized solutions" },
                    { icon: FaShippingFast, text: "Efficient logistics and timely global delivery" },
                    { icon: FaHandshake, text: "Comprehensive technical support and after-sales service" }
                  ].map((item, index) => (
                    <Card key={index} bg={cardBg} w="full" shadow="md" _hover={{ shadow: "lg", transform: "translateY(-2px)" }} transition="all 0.3s ease">
                      <CardBody>
                        <HStack spacing={4}>
                          <Icon as={item.icon} color="kd.secondary" boxSize={6} />
                          <Text color={textColor} fontSize="md" fontWeight="medium">{item.text}</Text>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}
                </VStack>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </SectionWrapper>

      {/* 🏭 PROVEN INDUSTRIAL EXCELLENCE SECTION - Enhanced with homepage styling */}
      <SectionWrapper bg="kd.canvas" py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={achievementsRef.ref} style={achievementsRef.style}>
              <Badge bg="transparent" borderColor="kd.secondary" color="kd.secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Our Achievements
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Proven Industrial Excellence
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} maxW="800px" lineHeight="tall">
                Three decades of consistent growth, quality delivery, and customer satisfaction across global markets.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {[
                {
                  icon: FaIndustry,
                  number: "30+",
                  label: "Years Experience",
                  description: "Three decades of industrial expertise and craftsmanship",
                  delay: 0
                },
                {
                  icon: FaGlobe,
                  number: "20+",
                  label: "Countries Served",
                  description: "Global export reach with Government Recognition",
                  delay: 200
                },
                {
                  icon: FaCertificate,
                  number: "ISO",
                  label: "9001:2015",
                  description: "Quality Certified",
                  subtext: "International quality management standards",
                  delay: 400
                },
                {
                  icon: FaUsers,
                  number: "Expert",
                  label: "Craftsmen",
                  description: "Skilled professionals delivering industrial excellence",
                  delay: 600
                }
              ].map((stat, index) => {
                const cardAnimation = useSlideAnimation({
                  direction: 'from-bottom',
                  duration: 800,
                  delay: stat.delay,
                  distance: 50
                });
                
                return (
                  <Card 
                    key={index} 
                    bg="kd.primary" 
                    color="white"
                    shadow="xl" 
                    borderRadius="xl"
                    _hover={{ 
                      transform: 'translateY(-8px)', 
                      shadow: '2xl',
                      bg: "kd.primaryDark"
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody textAlign="center" p={8}>
                      <VStack spacing={4}>
                        <Box
                          bg="rgba(255, 255, 255, 0.1)"
                          p={4}
                          borderRadius="full"
                          _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                          transition="all 0.3s ease"
                        >
                          <Icon as={stat.icon} boxSize={8} color="kd.secondary" />
                        </Box>
                        <VStack spacing={1}>
                          <Text fontSize="3xl" fontWeight="bold" color="white">
                            {stat.number}
                          </Text>
                          <Text fontSize="lg" fontWeight="semibold" color="kd.secondary">
                            {stat.label}
                          </Text>
                          {stat.subtext && (
                            <Text fontSize="sm" color="white" opacity={0.9}>
                              {stat.subtext}
                            </Text>
                          )}
                        </VStack>
                        <Text fontSize="sm" color="white" opacity={0.8} textAlign="center" lineHeight="tall">
                          {stat.description}
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

      {/* 🏭 CORE VALUES SECTION */}
      <SectionWrapper py={{ base: 16, md: 20 }}>
        <Container maxW="7xl">
          <VStack spacing={16}>
            <VStack spacing={6} textAlign="center" ref={valuesRef.ref} style={valuesRef.style}>
              <Badge bg="transparent" borderColor="kd.secondary" color="kd.secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Core Values
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Industrial Excellence Principles
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {[
                {
                  icon: FaAward,
                  title: "Quality First",
                  description: "Every product undergoes rigorous testing to meet international standards. Our ISO 9001:2015 certification reflects our commitment to quality excellence.",
                  color: "kd.primary"
                },
                {
                  icon: FaHandshake,
                  title: "Customer Partnership",
                  description: "We build lasting relationships through technical expertise, customized solutions, and reliable support that helps our customers succeed.",
                  color: "kd.secondary"
                },
                {
                  icon: FaGlobe,
                  title: "Global Reach",
                  description: "As a Government Recognized Export House, we serve manufacturers worldwide while maintaining the highest standards of service and delivery.",
                  color: "kd.tertiary"
                }
              ].map((value, index) => {
                const cardAnimation = useSlideAnimation({
                  direction: 'from-bottom',
                  duration: 800,
                  delay: index * 200,
                  distance: 50
                });
                
                return (
                  <Card 
                    key={index} 
                    bg={cardBg} 
                    shadow="xl" 
                    borderRadius="xl"
                    _hover={{ 
                      transform: 'translateY(-8px)', 
                      shadow: '2xl' 
                    }}
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} textAlign="center">
                        <Box
                          bg={value.color}
                          p={4}
                          borderRadius="full"
                          _hover={{ transform: "scale(1.1)" }}
                          transition="all 0.3s ease"
                        >
                          <Icon as={value.icon} boxSize={8} color="white" />
                        </Box>
                        <Heading size="md" color={headingColor}>
                          {value.title}
                        </Heading>
                        <Text color={textColor} lineHeight="tall" textAlign="center">
                          {value.description}
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

      {/* Universal CTA */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default AboutPage; 
