import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  SimpleGrid, 
  Card,
  CardBody, 
  Icon, 
  Badge,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow
} from '@chakra-ui/react'
import { FaBook, FaPlay, FaHeart, FaLightbulb, FaOm, FaLeaf } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import UniversalCTA from '../components/UniversalCTA'
import { siteConfig } from '../siteConfig'
import { PageWrapper, HeroSectionWrapper, SectionWrapper, ContentContainer } from '../components/layout/PageWrapper'
import { millstoneIndia, getIconComponent } from '../data/millstoneIndia'
import { downloadIndustrialImages } from '../utils/imageManager'
import { enhancedImageDownloader } from '../utils/enhancedImageManager'
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations'

export default function HomePage() {
  const heroGradient = useColorModeValue(
    'kd.surface',
    'kd.canvas'
  )
  
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceElevated')
  // DIVINE COLOR SYSTEM - Following KD Framework Semantic Tokens Only
  const textColor = 'kd.text'                    // Pure white text for dark theme
  const headingColor = 'kd.heading'              // Pure white headings for maximum contrast
  const accentColor = 'kd.secondary'             // Industrial Gold (#FFC400) for accents
  const primaryColor = 'kd.primary'              // Deep Charcoal (#242424) for primary elements
  const tertiaryColor = 'kd.tertiary'            // Industrial Steel (#545351) for tertiary elements

  // Configuration-driven content from millstoneIndia data
  const homeConfig = millstoneIndia

  // DIVINE SLIDE ANIMATIONS - Modern entrance effects with improved timing
  const heroIconAnimation = useSlideAnimation(slideAnimationConfigs.heroIcon);
  const heroTitleAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle);
  const heroSubtitleAnimation = useSlideAnimation(slideAnimationConfigs.heroSubtitle);
  const heroDescAnimation = useSlideAnimation(slideAnimationConfigs.heroDescription);
  const heroCTAAnimation = useSlideAnimation(slideAnimationConfigs.heroButtons);
  const heroStatsAnimation = useSlideAnimation({...slideAnimationConfigs.fromBottom, delay: 1200});

  // Section animations
  const principlesSectionAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom);
  const productsSectionAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom);
  const statsSectionAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom);

  // Using the icon mapping from millstoneIndia data

  // Development helper - expose image download functions to console
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).downloadImages = downloadIndustrialImages;
      (window as any).enhancedDownloader = enhancedImageDownloader;
      console.log('🏭 Image download functions available:');
      console.log('Basic Downloader:');
      console.log('- downloadImages.industrial() - Download industrial facility images');
      console.log('- downloadImages.abrasives() - Download abrasive product images');
      console.log('- downloadImages.all() - Download all categories');
      console.log('');
      console.log('🤖 AI-Enhanced Downloader with Gemini Flash 2.0:');
      console.log('- enhancedDownloader.hero() - Download AI-analyzed hero images');
      console.log('- enhancedDownloader.abrasives() - Download AI-analyzed abrasive images');
      console.log('- enhancedDownloader.all() - Download all categories with AI analysis');
      console.log('- enhancedDownloader.analyzeImage(url) - Analyze single image with AI');
    }
  }, []);

  return (
    <>
      <SEOHead
        title={`${siteConfig.siteName} - ${homeConfig.hero.subtitle}`}
        description={homeConfig.hero.description}
        keywords={['Millstone India', 'Industrial Abrasives', 'Silicon Carbide', 'Flour Mill Machinery', 'Industrial Minerals', 'ISO 9001:2015', 'Export House', 'Jodhpur']}
        image={`${siteConfig.siteUrl}/assets/images/millstone-india-og.jpg`}
      />

      <PageWrapper hasHero={true}>
        {/* 🕉️ DIVINE HERO SECTION - Automatic spacing below transparent header */}
        <HeroSectionWrapper>
          <Box minH="100vh" bg={heroGradient}>
            <Container maxW="7xl" py={{ base: 12, md: 20 }}>
              <VStack spacing={8} textAlign="center" pt={{ base: 2, md: 4 }}>
                {/* Industrial Symbol - Animated from top */}
                <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                  <Icon as={getIconComponent("industry")} boxSize={16} color="kd.tertiary" mb={4} />
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="medium">
                    🏭 THE FOUNDATION OF YOUR FINISH 🏭
                  </Text>
                </Box>

                {/* Main Heading - Staggered animation from bottom */}
                <VStack spacing={4}>
                  <Heading 
                    as="h1" 
                    size={{ base: "xl", md: "2xl", lg: "3xl" }} 
                    color={headingColor}
                    textAlign="center"
                    lineHeight="shorter"
                    fontWeight="bold"
                    ref={heroTitleAnimation.ref}
                    style={heroTitleAnimation.style}
                  >
                    Welcome to{' '}
                    <Text as="span" color={accentColor}>{homeConfig.hero.title}</Text>
                  </Heading>
                  
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    color={textColor}
                    maxW="4xl"
                    lineHeight="tall"
                    ref={heroSubtitleAnimation.ref}
                    style={heroSubtitleAnimation.style}
                  >
                    {homeConfig.hero.subtitle}
                  </Text>
                      
                  <Text 
                    fontSize={{ base: "md", md: "lg" }} 
                    color={textColor}
                    maxW="3xl"
                    fontStyle="italic"
                    ref={heroDescAnimation.ref}
                    style={heroDescAnimation.style}
                  >
                    {homeConfig.hero.description}
                  </Text>
                </VStack>

                {/* Universal CTA - 0th Law of Thermodynamics */}
                <Box ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                  <UniversalCTA variant="hero" size="lg" />
                </Box>

                {/* Trust Indicators - Animated stats */}
                <HStack spacing={8} flexWrap="wrap" justify="center" pt={4} ref={heroStatsAnimation.ref} style={heroStatsAnimation.style}>
                  {homeConfig.stats.slice(0, 3).map((stat: any, index: number) => (
                    <VStack key={index} spacing={1}>
                      <Text fontSize="2xl" fontWeight="bold" color={index === 0 ? accentColor : index === 1 ? accentColor : accentColor}>
                        {stat.value}
                    </Text>
                    <Text fontSize="sm" color={textColor}>
                        {stat.label}
                    </Text>
                  </VStack>
                  ))}
                </HStack>
              </VStack>
            </Container>
          </Box>
        </HeroSectionWrapper>

        {/* 🏭 INDUSTRIAL EXCELLENCE PRINCIPLES SECTION - Automatic spacing after hero */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={principlesSectionAnimation.ref} style={principlesSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.secondary" color="kd.secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Core Values
              </Badge>
              <Heading size="xl" color={headingColor}>
                Industrial Excellence Foundation
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Three fundamental values that drive our commitment to superior quality and customer satisfaction in industrial solutions.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {homeConfig.principles.map((principle, index) => {
                // Staggered bottom animations with proper delays
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
                    shadow="md" 
                    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }} 
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <Icon as={getIconComponent(principle.icon)} boxSize={12} color="kd.tertiary" />
                        <VStack align="start" spacing={3}>
                          <Heading size="md" color={headingColor}>
                            {principle.title}
                          </Heading>
                          <Text color={textColor} lineHeight="tall">
                            {principle.description}
                          </Text>
                        </VStack>
                        <Button as={RouterLink} to={principle.link} variant="outline" borderColor="kd.primary" color="kd.primary" _hover={{ bg: "kd.primaryLight" }} size="sm">
                          Learn More
                        </Button>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🏭 INDUSTRIAL PRODUCT CATEGORIES SECTION - Automatic spacing */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={productsSectionAnimation.ref} style={productsSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.tertiary" color="kd.tertiary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Product Categories
              </Badge>
              <Heading size="xl" color={headingColor}>
                Industrial Excellence Portfolio
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Comprehensive range of high-quality industrial products and machinery for diverse manufacturing and processing applications.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {homeConfig.productCategories.map((category: any, index: number) => {
                // Alternating left/right slide animations with staggered delays
                const categoryAnimation = useSlideAnimation({
                  direction: index % 2 === 0 ? 'from-left' : 'from-right',
                  duration: 800,
                  delay: index * 150,
                  distance: 60
                });
                return (
                  <Card 
                    key={index} 
                    bg={cardBg} 
                    shadow="md" 
                    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                    ref={categoryAnimation.ref}
                    style={categoryAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <HStack justify="space-between" w="full">
                          <Badge bg="kd.secondary" color="kd.secondaryContrast" variant="solid" fontSize="sm">
                            {category.badge}
                          </Badge>
                          <Text fontSize="sm" color={textColor} fontWeight="medium">
                            {category.count}
                          </Text>
                        </HStack>
                        <VStack align="start" spacing={3}>
                          <Heading size="md" color={headingColor}>
                            {category.title}
                          </Heading>
                          <Text color={textColor} lineHeight="tall">
                            {category.description}
                          </Text>
                        </VStack>
                        <Button variant="outline" borderColor="kd.secondary" color="kd.secondary" _hover={{ bg: "kd.secondaryLight" }} size="sm" w="full">
                          Explore Category
                        </Button>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>

        {/* 🏭 INDUSTRIAL EXCELLENCE STATS SECTION - Automatic spacing */}
        <SectionWrapper>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={statsSectionAnimation.ref} style={statsSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.primary" color="kd.primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                Industrial Excellence
              </Badge>
              <Heading size="xl" color={headingColor}>
                Proven Track Record
              </Heading>
            </VStack>

            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {homeConfig.stats.map((stat, index) => {
                // Staggered bottom animations for stats with increasing delays
                const statAnimation = useSlideAnimation({
                  direction: 'from-bottom',
                  duration: 700,
                  delay: index * 100,
                  distance: 40
                });
                return (
                  <Card 
                    key={index} 
                    bg={cardBg} 
                    shadow="md" 
                    textAlign="center"
                    ref={statAnimation.ref}
                    style={statAnimation.style}
                  >
                    <CardBody p={6}>
                      <Stat>
                        <StatNumber fontSize="3xl" fontWeight="bold" color={accentColor}>
                          {stat.value}
                        </StatNumber>
                        <StatLabel fontSize="md" color={headingColor} fontWeight="medium">
                          {stat.label}
                        </StatLabel>
                        <StatHelpText fontSize="sm" color={textColor}>
                          <StatArrow type="increase" />
                          {stat.trend}
                        </StatHelpText>
                      </Stat>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </SectionWrapper>
      </PageWrapper>
    </>
  )
} 
