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
import { PremiumCard } from '../components/premium/PremiumCard'
import { PremiumButton } from '../components/premium/PremiumButton'

export default function HomePage() {
  // Premium gradients for luxury feel
  const heroGradient = useColorModeValue(
    'linear(135deg, rgba(255,153,51,0.08) 0%, rgba(30,144,255,0.05) 35%, rgba(242,219,73,0.08) 100%)',
    'linear(135deg, rgba(255,153,51,0.1) 0%, rgba(30,144,255,0.08) 35%, rgba(242,219,73,0.1) 100%)'
  )
  
  // Premium glass morphism backgrounds
  const premiumCardBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')
  const glassOverlay = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(45, 55, 72, 0.7)')
  
  // Enhanced color system for premium feel
  const textColor = useColorModeValue('gray.700', 'gray.200')        // Softer, premium text
  const headingColor = useColorModeValue('gray.800', 'white')        // Strong but elegant headings  
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
            {/* Premium floating orbs background */}
            <Box
              position="absolute"
              top="10%"
              left="10%"
              w="300px"
              h="300px"
              bg="radial-gradient(circle, rgba(255,153,51,0.15) 0%, transparent 70%)"
              borderRadius="full"
              filter="blur(80px)"
              animate="float 6s ease-in-out infinite"
            />
            <Box
              position="absolute"
              top="60%"
              right="15%"
              w="200px"
              h="200px"
              bg="radial-gradient(circle, rgba(30,144,255,0.1) 0%, transparent 70%)"
              borderRadius="full"
              filter="blur(60px)"
              animate="float 8s ease-in-out infinite reverse"
            />
            {/* Subtle pattern overlay */}
            <Box
              position="absolute"
              inset={0}
              opacity={0.03}
              bgImage="url('/assets/images/vedic-pattern.svg')"
              bgRepeat="repeat"
              bgSize="150px"
            />
            <Container maxW="7xl" py={{ base: 12, md: 20 }}>
              <VStack spacing={8} textAlign="center" pt={{ base: 2, md: 4 }}>
                {/* Premium attention-grabbing Icon */}
                <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                  <Box 
                    position="relative"
                    display="inline-block"
                    p={6}
                    bg={glassOverlay}
                    backdropFilter="blur(20px)"
                    borderRadius="full"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    mb={6}
                    _before={{
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      p: '2px',
                      bg: 'linear-gradient(45deg, #FF9933, #1E90FF, #F2DB49)',
                      borderRadius: 'full',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'subtract'
                    }}
                  >
                    <Icon as={FaLightbulb} boxSize={16} color="kd.tertiary" filter="drop-shadow(0 0 20px rgba(242, 219, 73, 0.6))" />
                  </Box>
                  <Badge 
                    bg="linear-gradient(45deg, rgba(255,153,51,0.9), rgba(255,179,102,0.9))"
                    color="white"
                    fontSize="sm" 
                    px={6} 
                    py={3} 
                    borderRadius="full" 
                    mb={2}
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255,153,51,0.3)"
                    boxShadow="0 8px 32px rgba(255,153,51,0.2)"
                  >
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

                {/* Premium Conversion-Optimized CTAs */}
                <VStack spacing={6} ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                  <HStack spacing={6} flexWrap="wrap" justify="center">
                    <PremiumButton
                      as="a"
                      href={pageContent.primaryCtaData.href}
                      size="lg"
                      variant="premium"
                      icon={pageContent.primaryCtaData.icon}
                      shimmer={true}
                      px={10}
                      py={7}
                      fontSize="lg"
                      fontWeight="bold"
                      minW="200px"
                      h="56px"
                    >
                      {pageContent.primaryCtaData.text}
                    </PremiumButton>
                    <PremiumButton
                      as="a"
                      href={pageContent.secondaryCtaData.href}
                      size="lg"
                      variant="glass"
                      icon={pageContent.secondaryCtaData.icon}
                      px={10}
                      py={7}
                      fontSize="lg"
                      fontWeight="medium"
                      minW="200px"
                      h="56px"
                      bg={glassOverlay}
                      backdropFilter="blur(20px)"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      color="gray.700"
                      _hover={{
                        bg: 'whiteAlpha.800',
                        borderColor: 'whiteAlpha.400',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
                      }}
                    >
                      {pageContent.secondaryCtaData.text}
                    </PremiumButton>
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
                  <PremiumCard 
                    key={index} 
                    variant="glass"
                    premium={true}
                    ref={cardAnimation.ref}
                    style={cardAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <Box
                          p={4}
                          bg="linear-gradient(135deg, rgba(242,219,73,0.1), rgba(242,219,73,0.05))"
                          borderRadius="full"
                          display="inline-flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Icon as={getContentIcon(principle.icon)} boxSize={8} color="kd.tertiary" />
                        </Box>
                        <VStack align="start" spacing={3}>
                          <Heading size="md" color={headingColor} fontWeight="600">
                            {principle.title}
                          </Heading>
                          <Text color={textColor} lineHeight="tall" fontSize="md">
                            {principle.description}
                          </Text>
                        </VStack>
                        <PremiumButton 
                          as={RouterLink} 
                          to={principle.link} 
                          variant="glass"
                          size="sm"
                          bg="rgba(255,153,51,0.1)"
                          color="primary.600"
                          border="1px solid"
                          borderColor="primary.200"
                          _hover={{ 
                            bg: "rgba(255,153,51,0.15)",
                            borderColor: "primary.300",
                            transform: "translateY(-2px)"
                          }}
                        >
                          Learn More
                        </PremiumButton>
                      </VStack>
                    </CardBody>
                  </PremiumCard>
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
                  <PremiumCard 
                    key={index} 
                    variant="elevated"
                    premium={true}
                    ref={offeringAnimation.ref}
                    style={offeringAnimation.style}
                  >
                    <CardBody p={8}>
                      <VStack spacing={6} align="start">
                        <HStack justify="space-between" w="full">
                          <Badge 
                            bg="linear-gradient(45deg, rgba(30,144,255,0.9), rgba(30,144,255,0.7))"
                            color="white"
                            fontSize="sm"
                            px={4}
                            py={2}
                            borderRadius="full"
                            backdropFilter="blur(10px)"
                            border="1px solid rgba(30,144,255,0.3)"
                          >
                            {offering.badge}
                          </Badge>
                          <Box
                            bg="linear-gradient(135deg, rgba(242,219,73,0.1), rgba(242,219,73,0.05))"
                            px={4}
                            py={2}
                            borderRadius="full"
                            border="1px solid rgba(242,219,73,0.2)"
                          >
                            <Text fontSize="sm" color="primary.600" fontWeight="bold">
                              {offering.price}
                            </Text>
                          </Box>
                        </HStack>
                        <VStack align="start" spacing={4}>
                          <Heading size="md" color={headingColor} fontWeight="600">
                            {offering.title}
                          </Heading>
                          <Text color={textColor} lineHeight="tall" fontSize="md">
                            {offering.description}
                          </Text>
                        </VStack>
                        <PremiumButton 
                          as={RouterLink} 
                          to={offering.link || '/teachings'} 
                          variant="premium"
                          size="md" 
                          w="full"
                          h="48px"
                          shimmer={true}
                        >
                          Learn More →
                        </PremiumButton>
                      </VStack>
                    </CardBody>
                  </PremiumCard>
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
                  <PremiumCard 
                    key={index} 
                    variant="glass"
                    textAlign="center"
                    ref={statAnimation.ref}
                    style={statAnimation.style}
                  >
                    <CardBody p={6}>
                      <Stat>
                        <StatNumber 
                          fontSize="3xl" 
                          fontWeight="bold" 
                          color={accentColor}
                          textShadow="0 2px 4px rgba(0,0,0,0.1)"
                        >
                          {stat.value}
                        </StatNumber>
                        <StatLabel fontSize="md" color={headingColor} fontWeight="600" mt={2}>
                          {stat.label}
                        </StatLabel>
                        <StatHelpText fontSize="sm" color={textColor} mt={1}>
                          <StatArrow type="increase" color="green.400" />
                          {stat.trend}
                        </StatHelpText>
                      </Stat>
                    </CardBody>
                  </PremiumCard>
                );
              })}
            </SimpleGrid>
          </VStack>
        </ContentSection>
      </SimpleLayout>
    </>
  )
} 
