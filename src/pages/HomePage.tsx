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
import { vedicWisdomSeries, getVedicIcon } from '../data/vedicWisdomSeries'
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

  // Configuration-driven content from vedicWisdomSeries data
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
        title={`${siteConfig.siteName} - ${homeConfig.hero.subtitle}`}
        description={homeConfig.hero.description}
        keywords={['Vedic Wisdom Series', 'Dr. Nischaya Nagori', 'Weekend Discourses', 'Chanting Classes', 'Teacher Training', 'Spiritual Education', 'Ancient Wisdom', 'Quantum Spirituality']}
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
                {/* Spiritual Symbol - Animated from top */}
                <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                  <Icon as={FaOm} boxSize={16} color="kd.tertiary" mb={4} filter="drop-shadow(0 0 20px rgba(242, 219, 73, 0.5))" />
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} fontWeight="medium">
                    🕉️ ANCIENT SOUND, MODERN AWAKENING 🕉️
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
        </HeroSection>

        {/* 🕉️ SPIRITUAL WISDOM PRINCIPLES SECTION - Simple content section */}
        <ContentSection>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center" ref={principlesSectionAnimation.ref} style={principlesSectionAnimation.style}>
              <Badge bg="transparent" borderColor="kd.secondary" color="kd.secondary" variant="outline" fontSize="md" px={4} py={2} borderRadius="full">
                The Quantum Revolution Begins
              </Badge>
              <Heading size="xl" color={headingColor}>
                Your Scientific Proof of the Divine Awaits
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Finally understand why Einstein would have been a devoted student of the Vedas. Join 1000+ seekers discovering the quantum code hidden in ancient texts.
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
                        <Icon as={getVedicIcon(principle.icon)} boxSize={12} color="kd.tertiary" />
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
                Limited Seats Available
              </Badge>
              <Heading size="xl" color={headingColor}>
                Choose Your Sacred Journey to Spiritual Mastery
              </Heading>
              <Text color={textColor} maxW="3xl" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Four transformative paths await. Each one scientifically designed to activate your dormant spiritual DNA. Which calls to your soul?
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
                Join The Movement
              </Badge>
              <Heading size="xl" color={headingColor}>
                The Numbers Speak: Consciousness Is Rising
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
