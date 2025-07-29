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
import { SimpleLayout, HeroSection, ContentSection } from '../components/layout/SimpleLayout'
import { contentMaster, getCTAData, getPageContent, getContentIcon } from '../data/contentMaster'
import { vedicWisdomSeries } from '../data/vedicWisdomSeries'
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations'

export default function HomePage() {
  const heroGradient = useColorModeValue(
    'linear(to-br, orange.50 via blue.50 to yellow.50)',
    'linear(to-br, gray.900 via gray.800 to gray.900)'
  )
  
  const cardBg = useColorModeValue('white', 'gray.800')
  // SOPHISTICATED DIRECT COLORS - Using Chakra UI's excellent semantic system
  const textColor = useColorModeValue('gray.800', 'white')           // Clear readable text
  const headingColor = useColorModeValue('gray.900', 'white')        // Strong headings  
  const accentColor = 'secondary.500'                               // Serene Blue accents
  const primaryColor = 'primary.500'                                // Deep Saffron for primary
  const tertiaryColor = 'tertiary.500'                              // Sacred Gold for highlights

  // Optimized content from contentMaster for conversion
  const pageContent = getPageContent('homepage')
  // Vedic wisdom data for content and structure
  const homeConfig = vedicWisdomSeries

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

  // Using the icon mapping from vedicWisdomSeries data

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Vedic Wisdom Series",
    "url": siteConfig.siteUrl,
    "logo": `${siteConfig.siteUrl}/logo.png`,
    "description": homeConfig.hero.description,
    "founder": {
      "@type": "Person",
      "name": "Dr. Nischaya Nagori",
      "jobTitle": "Vedic Scholar & Spiritual Guide",
      "description": "Pioneer in bridging quantum physics with Vedic wisdom"
    },
    "sameAs": [
      "https://youtube.com/@vedicwisdomseries",
      "https://facebook.com/vedicwisdomseries",
      "https://instagram.com/vedicwisdomseries"
    ],
    "offers": homeConfig.offerings.map(offering => ({
      "@type": "Course",
      "name": offering.title,
      "description": offering.description,
      "provider": {
        "@type": "Organization",
        "name": "Vedic Wisdom Series"
      },
      "instructor": {
        "@type": "Person",
        "name": "Dr. Nischaya Nagori"
      },
      "offers": {
        "@type": "Offer",
        "price": offering.price.replace('$', ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  return (
    <>
      <SEOHead
        title={`${pageContent.headline} - ${siteConfig.siteName}`}
        description={pageContent.description}
        keywords={['MIT Discovery', 'Soul Science', 'Quantum Spirituality', 'Dr. Nischaya Nagori', 'Vedic Physics', 'Ancient Wisdom Proof', 'Spiritual Transformation', 'Scientific Mysticism']}
        image={`${siteConfig.siteUrl}/assets/images/vedic-wisdom-og.svg`}
        structuredData={structuredData}
      />

      <SimpleLayout hasHero={true}>
        {/* 🕉️ DIVINE HERO SECTION - CSS Grid handles spacing automatically */}
        <HeroSection>
          <Box 
            minH="100vh" 
            bgGradient={heroGradient}
            position="relative"
            overflow="hidden"
          >
            {/* Subtle pattern overlay */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.05}
              bgImage="url('/assets/images/vedic-pattern.svg')"
              bgRepeat="repeat"
              bgSize="150px"
            />
            <Container maxW="7xl" py={{ base: 12, md: 20 }}>
              <VStack spacing={8} textAlign="center" pt={{ base: 2, md: 4 }}>
                {/* Attention-grabbing Icon */}
                <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                  <Icon as={FaLightbulb} boxSize={20} color="kd.tertiary" mb={4} filter="drop-shadow(0 0 25px rgba(242, 219, 73, 0.7))" />
                  <Badge colorScheme="orange" fontSize="sm" px={4} py={2} borderRadius="full" mb={2}>
                    🔬 SCIENTIFIC BREAKTHROUGH
                  </Badge>
                </Box>

                {/* Conversion-Optimized Headline */}
                <VStack spacing={6}>
                  <Heading 
                    as="h1" 
                    size={{ base: "2xl", md: "3xl", lg: "4xl" }} 
                    color={headingColor}
                    textAlign="center"
                    lineHeight="shorter"
                    fontWeight="bold"
                    ref={heroTitleAnimation.ref}
                    style={heroTitleAnimation.style}
                    maxW="5xl"
                  >
                    {pageContent.headline}
                  </Heading>
                  
                  <Text 
                    fontSize={{ base: "xl", md: "2xl" }} 
                    color={textColor}
                    maxW="4xl"
                    lineHeight="tall"
                    fontWeight="medium"
                    ref={heroSubtitleAnimation.ref}
                    style={heroSubtitleAnimation.style}
                  >
                    {pageContent.subheading}
                  </Text>
                      
                  <Text 
                    fontSize={{ base: "lg", md: "xl" }} 
                    color={textColor}
                    maxW="3xl"
                    lineHeight="tall"
                    ref={heroDescAnimation.ref}
                    style={heroDescAnimation.style}
                  >
                    {pageContent.description}
                  </Text>
                  
                  {/* Social Proof */}
                  <Badge colorScheme="blue" fontSize="md" px={6} py={2} borderRadius="full">
                    ⭐ {pageContent.socialProof}
                  </Badge>
                </VStack>

                {/* Conversion-Optimized CTAs */}
                <VStack spacing={4} ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                  <HStack spacing={4} flexWrap="wrap" justify="center">
                    <Button
                      as="a"
                      href={pageContent.primaryCtaData.href}
                      size="lg"
                      colorScheme={pageContent.primaryCtaData.colorScheme}
                      variant={pageContent.primaryCtaData.variant}
                      leftIcon={<Icon as={pageContent.primaryCtaData.icon} />}
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'xl'
                      }}
                      transition="all 0.3s"
                    >
                      {pageContent.primaryCtaData.text}
                    </Button>
                    <Button
                      as="a"
                      href={pageContent.secondaryCtaData.href}
                      size="lg"
                      colorScheme={pageContent.secondaryCtaData.colorScheme}
                      variant={pageContent.secondaryCtaData.variant}
                      leftIcon={<Icon as={pageContent.secondaryCtaData.icon} />}
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="medium"
                      _hover={{
                        transform: 'translateY(-3px)',
                        boxShadow: 'lg'
                      }}
                      transition="all 0.3s"
                    >
                      {pageContent.secondaryCtaData.text}
                    </Button>
                  </HStack>
                  
                  {/* Urgency Trigger */}
                  <Text fontSize="sm" color="red.500" fontWeight="medium" textAlign="center">
                    ⏰ {pageContent.urgency}
                  </Text>
                </VStack>

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
        </HeroSection>

        {/* 🕉️ SPIRITUAL WISDOM PRINCIPLES SECTION - Simple content section */}
        <ContentSection>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={principlesSectionAnimation.ref} style={principlesSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.primary" color="kd.primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                🔬 The Science is In
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                3 Pillars of Quantum-Spiritual Truth
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Experience the revolutionary integration that's transforming how thousands understand reality itself.
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
                        <Icon as={getContentIcon(principle.icon)} boxSize={12} color="kd.tertiary" />
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
        </ContentSection>

        {/* 🕉️ DIVINE OFFERINGS SECTION - Simple content section */}
        <ContentSection>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={productsSectionAnimation.ref} style={productsSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.tertiary" color="kd.tertiary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                ⚡ Choose Your Transformation
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                4 Paths to Quantum Awakening
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                From weekend wisdom to teacher mastery - find your perfect path to scientific spiritual awakening.
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {homeConfig.offerings.map((offering: any, index: number) => {
                // Alternating left/right slide animations with staggered delays
                const offeringAnimation = useSlideAnimation({
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
                    ref={offeringAnimation.ref}
                    style={offeringAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <HStack justify="space-between" w="full">
                          <Badge bg="kd.secondary" color="kd.secondaryContrast" variant="solid" fontSize="sm">
                            {offering.badge}
                          </Badge>
                          <Text fontSize="sm" color={textColor} fontWeight="medium">
                            {offering.price}
                          </Text>
                        </HStack>
                        <VStack align="start" spacing={3}>
                          <Heading size="md" color={headingColor}>
                            {offering.title}
                          </Heading>
                          <Text color={textColor} lineHeight="tall">
                            {offering.description}
                          </Text>
                        </VStack>
                        <Button 
                          as={RouterLink} 
                          to={offering.link || '/teachings'} 
                          variant="solid" 
                          colorScheme={offering.color} 
                          size="sm" 
                          w="full"
                        >
                          Learn More →
                        </Button>
                      </VStack>
                    </CardBody>
                  </Card>
                );
              })}
            </SimpleGrid>
          </VStack>
        </ContentSection>

        {/* 🕉️ SPIRITUAL IMPACT STATS SECTION - Simple content section */}
        <ContentSection>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={statsSectionAnimation.ref} style={statsSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.primary" color="kd.primary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                📊 Proven Results
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color={headingColor}>
                Real Transformations, Measurable Impact
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
        </ContentSection>
      </SimpleLayout>
    </>
  )
} 
