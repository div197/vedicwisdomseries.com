import React from 'react';
import { 
  Box, Container, Heading, Text, SimpleGrid, Card, CardBody, Badge, VStack, HStack, 
  Image, Button, Icon, Stat, StatLabel, StatNumber, StatHelpText, Flex, Divider,
  useColorModeValue, AspectRatio, Grid, GridItem
} from '@chakra-ui/react';
import { FaOm, FaBook, FaGraduationCap, FaHeart, FaGlobe, FaCalendarCheck, FaPlay, FaUsers } from 'react-icons/fa';
import SEOHead from '../components/SEOHead';
import { PageWrapper, HeroSectionWrapper, SectionWrapper } from '../components/layout/PageWrapper';
import UniversalCTA from '../components/UniversalCTA';
import { useSlideAnimation } from '../hooks/useSlideAnimations';
import { siteConfig } from '../siteConfig';
import { vedicWisdomSeries } from '../data/vedicWisdomSeries';

const ProductsPage: React.FC = () => {
  // Color scheme
  const headingColor = useColorModeValue('kd.heading', 'kd.headingDark');
  const textColor = useColorModeValue('kd.text', 'kd.textDark');
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceDark');
  const accentColor = useColorModeValue('kd.tertiary', 'kd.tertiaryDark');
  const heroGradient = "linear(to-br, kd.primary, kd.secondary, kd.tertiary)";

  // Animations
  const heroAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 800, delay: 200 });
  const statsAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 700, delay: 400 });
  const offeringsAnimation = useSlideAnimation({ direction: 'from-bottom', duration: 800, delay: 300 });

  // Spiritual offerings with premium positioning
  const spiritualOfferings = vedicWisdomSeries.offerings || [];

  // Spiritual authority statistics
  const spiritualStats = [
    { label: "Global Students", value: "1000+", trend: "Growing Community" },
    { label: "Countries Reached", value: "25+", trend: "Worldwide Impact" },
    { label: "Spiritual Programs", value: "4", trend: "Comprehensive Path" },
    { label: "Teacher Authority", value: "MIT Scientist", trend: "Vedic Scholar" }
  ];

  return (
    <PageWrapper hasHero={true}>
      <SEOHead
        title="Spiritual Programs - Vedic Wisdom Series | Dr. Nischaya Nagori's Teachings"
        description="Transform your life with authentic Vedic education programs. MIT Scientist Dr. Nischaya Nagori reveals quantum-spiritual convergence through Weekend Discourses, Chanting Classes, Teacher Training & Lifestyle Experiences."
        keywords={['Vedic Wisdom', 'Spiritual Programs', 'Dr. Nischaya Nagori', 'Vedic Education', 'Quantum Spirituality', 'MIT Scientist']}
      />
      
      {/* 🕉️ SPIRITUAL HERO SECTION */}
      <HeroSectionWrapper>
        <Box
          minH="70vh"
          bgGradient={heroGradient}
          position="relative"
          display="flex"
          alignItems="center"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'blackAlpha.300',
            zIndex: 1
          }}
        >
          <Container maxW="7xl" position="relative" zIndex={2}>
            <VStack spacing={8} textAlign="center" color="white" ref={heroAnimation.ref} style={heroAnimation.style}>
              <Icon as={FaOm} boxSize={16} />
              
              <VStack spacing={4}>
                <Heading as="h1" size="2xl" fontWeight="bold">
                  Divine Spiritual Programs
                </Heading>
                <Text fontSize="xl" maxW="4xl" lineHeight="tall">
                  Where Your Quantum Mind Meets Your Eternal Soul - Authentic Vedic education programs 
                  from MIT Scientist Dr. Nischaya Nagori serving 1000+ global seekers across 25+ countries.
                </Text>
                <Text fontSize="lg" fontStyle="italic" opacity={0.9}>
                  "Ancient Wisdom • Modern Science • Global Authority"
                </Text>
              </VStack>

              <UniversalCTA variant="hero" size="lg" />
            </VStack>
          </Container>
        </Box>
      </HeroSectionWrapper>

      {/* 🕉️ SPIRITUAL AUTHORITY STATISTICS SECTION */}
      <SectionWrapper>
        <VStack spacing={8}>
          <Heading size="xl" color={headingColor} textAlign="center">
            Global Spiritual Impact by Numbers
          </Heading>
          
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full" ref={statsAnimation.ref} style={statsAnimation.style}>
            {spiritualStats.map((stat, index) => (
              <Card key={index} bg={cardBg} textAlign="center" shadow="md">
                <CardBody>
                  <Stat>
                    <StatNumber fontSize="2xl" fontWeight="bold" color={accentColor}>
                      {stat.value}
                    </StatNumber>
                    <StatLabel fontSize="sm" color={headingColor} fontWeight="medium">
                      {stat.label}
                    </StatLabel>
                    <StatHelpText fontSize="xs" color={textColor}>
                      {stat.trend}
                    </StatHelpText>
                  </Stat>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* 🕉️ SPIRITUAL OFFERINGS SECTION */}
      <SectionWrapper>
        <VStack spacing={12} ref={offeringsAnimation.ref} style={offeringsAnimation.style}>
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
              Divine Offerings
            </Badge>
            <Heading size="xl" color={headingColor}>
              Transformative Spiritual Programs
            </Heading>
            <Text color={textColor} maxW="4xl" fontSize="lg" lineHeight="tall">
              Four sacred pathways to spiritual awakening, each designed with precision 
              and backed by authentic Vedic wisdom serving global seekers across 25+ countries.
            </Text>
          </VStack>

          <VStack spacing={16} w="full">
            {spiritualOfferings.map((offering, index) => {
              const isEven = index % 2 === 0;
              const iconMap = {
                'Weekend': FaCalendarCheck,
                'Chanting': FaOm,
                'Certification': FaGraduationCap,
                'Lifestyle': FaHeart
              };
              const OfferingIcon = iconMap[offering.badge] || FaBook;
              
              return (
                <Card key={offering.badge} bg={cardBg} shadow="lg" w="full" overflow="hidden">
                  <CardBody p={0}>
                    <Grid templateColumns={{ base: "1fr", lg: isEven ? "1fr 1fr" : "1fr 1fr" }} gap={0}>
                      {/* Image Section */}
                      <GridItem order={{ base: 1, lg: isEven ? 1 : 2 }}>
                        <AspectRatio ratio={4/3}>
                          <Box 
                            bg={`${offering.color}.50`}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            p={8}
                          >
                            <Icon as={OfferingIcon} boxSize={20} color={`${offering.color}.500`} mb={4} />
                            <Text fontSize="2xl" fontWeight="bold" color={`${offering.color}.600`}>
                              {offering.price}
                            </Text>
                            <Text fontSize="sm" color={`${offering.color}.500`}>
                              {offering.duration}
                            </Text>
                          </Box>
                        </AspectRatio>
                      </GridItem>

                      {/* Content Section */}
                      <GridItem order={{ base: 2, lg: isEven ? 2 : 1 }} p={8}>
                        <VStack align="start" spacing={6} h="full" justify="center">
                          <VStack align="start" spacing={3}>
                            <HStack>
                              <Icon as={OfferingIcon} boxSize={6} color={`${offering.color}.500`} />
                              <Badge bg={`${offering.color}.500`} color="white" px={3} py={1}>
                                {offering.badge}
                              </Badge>
                            </HStack>
                            
                            <Heading size="lg" color={headingColor}>
                              {offering.title}
                            </Heading>
                            
                            <Text color={textColor} lineHeight="tall">
                              {offering.description}
                            </Text>
                            
                            <Text fontSize="sm" color={textColor} fontStyle="italic">
                              Duration: {offering.details}
                            </Text>
                          </VStack>

                          <VStack align="start" spacing={3} w="full">
                            <Text fontWeight="bold" color={headingColor} fontSize="sm">
                              What You'll Experience:
                            </Text>
                            <VStack align="start" spacing={1} w="full">
                              {offering.features.slice(0, 4).map((feature, featureIndex) => (
                                <HStack key={featureIndex} spacing={2}>
                                  <Icon as={FaPlay} boxSize={2} color={`${offering.color}.500`} />
                                  <Text fontSize="xs" color={textColor}>
                                    {feature}
                                  </Text>
                                </HStack>
                              ))}
                            </VStack>
                          </VStack>

                          <HStack spacing={4}>
                            <Button 
                              as="a"
                              href={offering.link}
                              variant="solid" 
                              bg={`${offering.color}.500`} 
                              color="white"
                              _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                              leftIcon={<Icon as={FaCalendarCheck} />}
                              size="sm"
                            >
                              Join Program
                            </Button>
                            <Button 
                              as="a"
                              href="/contact"
                              variant="outline" 
                              borderColor={`${offering.color}.500`}
                              color={`${offering.color}.500`}
                              _hover={{ bg: `${offering.color}.500`, color: 'white' }}
                              leftIcon={<Icon as={FaUsers} />}
                              size="sm"
                            >
                              Learn More
                            </Button>
                          </HStack>

                          <HStack spacing={3}>
                            <HStack spacing={1}>
                              <Icon as={FaUsers} boxSize={3} color="green.500" />
                              <Text fontSize="xs" color={textColor}>1000+ Global Students</Text>
                            </HStack>
                            <HStack spacing={1}>
                              <Icon as={FaGlobe} boxSize={3} color="green.500" />
                              <Text fontSize="xs" color={textColor}>25+ Countries</Text>
                            </HStack>
                          </HStack>
                        </VStack>
                      </GridItem>
                    </Grid>
                  </CardBody>
                </Card>
              );
            })}
          </VStack>
        </VStack>
      </SectionWrapper>

      {/* 🕉️ GLOBAL AUTHORITY SECTION */}
      <SectionWrapper bg={cardBg}>
        <VStack spacing={8}>
          <VStack spacing={4} textAlign="center">
            <Badge colorScheme="tertiary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
              Global Authority
            </Badge>
            <Heading size="xl" color={headingColor}>
              International Vishwaguru Leadership
            </Heading>
            <Text color={textColor} maxW="3xl" fontSize="lg" lineHeight="tall">
              MIT Scientist Dr. Nischaya Nagori establishes India's spiritual authority globally, 
              serving seekers across 25+ countries with authentic Vedic wisdom and quantum-spiritual insights.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaGlobe} boxSize={12} color="kd.primary" />
                  <Heading size="md" color={headingColor}>Global Reach</Heading>
                  <Text color={textColor} fontSize="sm">
                    Serving 1000+ students across 25+ countries with authentic Vedic education and spiritual guidance.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaGraduationCap} boxSize={12} color="kd.secondary" />
                  <Heading size="md" color={headingColor}>MIT Authority</Heading>
                  <Text color={textColor} fontSize="sm">
                    MIT Scientist credentials establishing scientific credibility for ancient spiritual wisdom.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Card bg="white" shadow="md" textAlign="center">
              <CardBody>
                <VStack spacing={4}>
                  <Icon as={FaOm} boxSize={12} color="kd.tertiary" />
                  <Heading size="md" color={headingColor}>Vedic Lineage</Heading>
                  <Text color={textColor} fontSize="sm">
                    Authentic lineage-based transmission preserving ancient Guru-Shishya tradition with modern accessibility.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </VStack>
      </SectionWrapper>

      {/* 🕉️ UNIVERSAL CTA */}
      <UniversalCTA />
    </PageWrapper>
  );
};

export default ProductsPage; 