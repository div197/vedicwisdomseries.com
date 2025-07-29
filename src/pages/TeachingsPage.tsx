import React from 'react'
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  VStack, 
  HStack,
  Card, 
  CardBody,
  CardHeader,
  CardFooter,
  Badge,
  Button,
  Icon,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  Progress,
  Circle
} from '@chakra-ui/react'
import { 
  FaCheckCircle, 
  FaArrowRight, 
  FaOm, 
  FaBook, 
  FaGraduationCap, 
  FaHeart, 
  FaClock,
  FaUsers,
  FaStar,
  FaGift,
  FaFire,
  FaGlobe,
  FaLightbulb
} from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { siteConfig } from '../siteConfig'
import { vedicWisdomSeries, getOfferingColor } from '../data/vedicWisdomSeries'
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations'
import { contentMaster, getPageContent } from '../data/contentMaster'
import { OptimizedCTA } from '../components/OptimizedCTA'

export default function TeachingsPage() {
  // Enhanced content from contentMaster for 2025 conversion optimization
  const pageContent = getPageContent('teachings')
  
  // Modern color scheme with conversion psychology
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50 via blue.50 to yellow.50)',
    'linear(to-br, gray.900 via gray.800 to gray.900)'
  )
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const priceColor = useColorModeValue('green.600', 'green.400')
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  const urgentColor = useColorModeValue('red.500', 'red.400')
  const successColor = useColorModeValue('green.500', 'green.400')
  
  // Advanced animations for conversion focus
  const heroIconAnimation = useSlideAnimation(slideAnimationConfigs.heroIcon)
  const heroTitleAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle)
  const heroSubtitleAnimation = useSlideAnimation(slideAnimationConfigs.heroSubtitle)
  const heroDescAnimation = useSlideAnimation(slideAnimationConfigs.heroDescription)
  const heroCTAAnimation = useSlideAnimation(slideAnimationConfigs.heroButtons)
  const offeringsAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom)
  
  // Enhanced offering data with conversion psychology
  const enhancedOfferings = vedicWisdomSeries.offerings.map((offering, index) => ({
    ...offering,
    urgency: index === 0 ? "🔥 Most Popular Choice" : 
             index === 1 ? "⚡ Quick Start Option" :
             index === 2 ? "🎓 Professional Certification" : "💎 Exclusive Experience",
    socialProof: index === 0 ? "500+ students enrolled" :
                 index === 1 ? "Perfect for beginners" :
                 index === 2 ? "25+ certified teachers" : "100% personalized",
    conversionBenefits: index === 0 ? ["Immediate access to recordings", "7-day money-back guarantee"] :
                        index === 1 ? ["Learn in 30 days or less", "No Sanskrit knowledge required"] :
                        index === 2 ? ["Lifetime certification", "Teaching support included"] :
                                     ["Direct access to Dr. Nischaya", "Fully customized program"]
  }))
  
  return (
    <>
      <SEOHead 
        title={`${pageContent.headline} - ${siteConfig.siteName}`}
        description={pageContent.description}
        keywords={['Quantum Awakening Programs', 'Scientific Spirituality Courses', 'Dr. Nischaya Nagori Training', 'Vedic Science Integration', 'Consciousness Transformation', 'Authentic Spiritual Education']}
        image={`${siteConfig.siteUrl}/assets/images/teachings-quantum-og.jpg`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Vedic Wisdom Series Teachings",
          "description": pageContent.description,
          "offers": enhancedOfferings.map(offering => ({
            "@type": "Course",
            "name": offering.title,
            "description": offering.description,
            "price": offering.price.replace('$', ''),
            "priceCurrency": "USD"
          }))
        }}
      />

      <Box bgGradient={bgGradient} minH="100vh">
        {/* 🚀 CONVERSION-OPTIMIZED HERO SECTION */}
        <Box 
          bgGradient="linear(45deg, #FF9933 0%, #1E90FF 50%, #F2DB49 100%)"
          color="white" 
          py={{ base: 16, md: 24 }}
          position="relative"
          overflow="hidden"
        >
          {/* Quantum animation overlay */}
          <Box
            position="absolute"
            inset={0}
            opacity={0.1}
            bgImage="url('/assets/images/quantum-pattern.svg')"
            bgRepeat="repeat"
            bgSize="300px"
            animation="float 6s ease-in-out infinite"
          />
          
          <Container maxW="7xl" position="relative">
            <VStack spacing={8} textAlign="center">
              {/* Attention-grabbing icon with urgency */}
              <Box ref={heroIconAnimation.ref} style={heroIconAnimation.style}>
                <Circle size="120px" bg="rgba(255,255,255,0.2)" backdropFilter="blur(10px)">
                  <Icon as={FaGraduationCap} boxSize={16} color="yellow.300" filter="drop-shadow(0 0 20px rgba(242, 219, 73, 0.8))" />
                </Circle>
                <Badge colorScheme="red" fontSize="sm" px={4} py={2} borderRadius="full" mt={4}>
                  🔥 ENROLLMENT CLOSING SOON
                </Badge>
              </Box>

              {/* Conversion-focused headlines */}
              <VStack spacing={6}>
                <Heading 
                  as="h1" 
                  size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                  ref={heroTitleAnimation.ref}
                  style={heroTitleAnimation.style}
                  maxW="5xl"
                  lineHeight="shorter"
                >
                  {pageContent.headline}
                </Heading>
                
                <Text 
                  fontSize={{ base: 'xl', md: '2xl' }} 
                  maxW="4xl"
                  fontWeight="medium"
                  ref={heroSubtitleAnimation.ref}
                  style={heroSubtitleAnimation.style}
                >
                  {pageContent.subheading}
                </Text>
                
                <Text 
                  fontSize={{ base: 'lg', md: 'xl' }} 
                  maxW="3xl"
                  opacity={0.95}
                  ref={heroDescAnimation.ref}
                  style={heroDescAnimation.style}
                >
                  {pageContent.description}
                </Text>
                
                {/* Social proof badge */}
                <Badge colorScheme="green" fontSize="md" px={6} py={2} borderRadius="full">
                  ⭐ {pageContent.socialProof}
                </Badge>
              </VStack>

              {/* Conversion CTAs with urgency */}
              <VStack spacing={4} ref={heroCTAAnimation.ref} style={heroCTAAnimation.style}>
                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Button
                    as="a"
                    href={pageContent.primaryCtaData.href}
                    size="lg"
                    colorScheme="yellow"
                    color="black"
                    variant="solid"
                    leftIcon={<Icon as={pageContent.primaryCtaData.icon} />}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="bold"
                    boxShadow="xl"
                    _hover={{
                      transform: 'translateY(-3px)',
                      boxShadow: '2xl',
                      bg: 'yellow.400'
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    {pageContent.primaryCtaData.text}
                  </Button>
                  <Button
                    as="a"
                    href={pageContent.secondaryCtaData.href}
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    leftIcon={<Icon as={pageContent.secondaryCtaData.icon} />}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="medium"
                    _hover={{
                      transform: 'translateY(-3px)',
                      bg: 'whiteAlpha.200',
                      borderColor: 'whiteAlpha.800'
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  >
                    {pageContent.secondaryCtaData.text}
                  </Button>
                </HStack>
                
                {/* Urgency trigger */}
                <Text fontSize="sm" color="yellow.200" fontWeight="medium" textAlign="center">
                  ⏰ {pageContent.urgency}
                </Text>
                
                {/* Trust indicators */}
                <HStack spacing={6} fontSize="sm" opacity={0.9} flexWrap="wrap" justify="center">
                  <Text>✓ 98% Completion Rate</Text>
                  <Text>✓ 500+ Success Stories</Text>
                  <Text>✓ 24hr Support</Text>
                </HStack>
              </VStack>
            </VStack>
          </Container>
        </Box>

        {/* 🎯 CONVERSION-OPTIMIZED OFFERINGS SECTION */}
        <Container maxW="7xl" py={{ base: 12, md: 20 }}>
          {/* Section intro with conversion focus */}
          <VStack spacing={12} ref={offeringsAnimation.ref} style={offeringsAnimation.style}>
            <VStack spacing={6} textAlign="center">
              <Badge colorScheme="orange" fontSize="md" px={4} py={2} borderRadius="full">
                🎯 CHOOSE YOUR TRANSFORMATION PATH
              </Badge>
              <Heading size={{ base: "lg", md: "xl" }} color="gray.800">
                {pageContent.programsTitle || "4 Proven Programs for Quantum Awakening"}
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={mutedText} maxW="3xl" lineHeight="tall">
                {pageContent.programsDescription || "Each program is scientifically designed to meet you exactly where you are while accelerating your spiritual evolution through authentic Vedic practices."}
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 8 }} w="full">
              {enhancedOfferings.map((offering, index) => {
                // Staggered animations for each offering
                const offeringAnimation = useSlideAnimation({
                  direction: index % 2 === 0 ? 'from-left' : 'from-right',
                  duration: 800,
                  delay: index * 150,
                  distance: 60
                })
                
                return (
                <Box key={offering.title} ref={offeringAnimation.ref} style={offeringAnimation.style}>
                  <Card
                    bg={cardBg}
                    borderWidth={3}
                    borderColor={index === 0 ? `${getOfferingColor(offering.color)}.400` : borderColor}
                    borderRadius="xl"
                    overflow="hidden"
                    transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                      transform: 'translateY(-8px)',
                      shadow: '2xl',
                      borderColor: `${getOfferingColor(offering.color)}.500`
                    }}
                    height="full"
                    position="relative"
                    {...(index === 0 && {
                      borderGradient: 'linear(45deg, orange.400, yellow.400)',
                      boxShadow: 'lg'
                    })}
                  >
                    {/* Popular choice badge */}
                    {index === 0 && (
                      <Badge
                        position="absolute"
                        top={-2}
                        right={4}
                        colorScheme="red"
                        fontSize="xs"
                        px={3}
                        py={1}
                        borderRadius="full"
                        zIndex={2}
                        bg="red.500"
                        color="white"
                      >
                        🔥 MOST POPULAR
                      </Badge>
                    )}

                    <CardHeader 
                      bg={`${getOfferingColor(offering.color)}.50`} 
                      pb={4}
                      bgGradient={index === 0 ? `linear(135deg, ${getOfferingColor(offering.color)}.50, ${getOfferingColor(offering.color)}.100)` : undefined}
                    >
                      <VStack spacing={3} align="start">
                        <HStack justify="space-between" w="full">
                          <Badge
                            colorScheme={getOfferingColor(offering.color)}
                            fontSize="sm"
                            px={3}
                            py={1}
                            borderRadius="full"
                          >
                            {offering.badge}
                          </Badge>
                          <Badge
                            colorScheme="purple"
                            fontSize="xs"
                            px={2}
                            py={1}
                            borderRadius="full"
                            variant="outline"
                          >
                            {offering.urgency}
                          </Badge>
                        </HStack>
                        
                        <Heading size="lg" color="gray.800">
                          {offering.title}
                        </Heading>
                        
                        <Text color="gray.600" fontSize="sm" fontWeight="medium">
                          {offering.socialProof}
                        </Text>
                        
                        <Text color={mutedText} fontSize="sm">
                          {offering.details}
                        </Text>
                      </VStack>
                    </CardHeader>

                    <CardBody>
                      <VStack spacing={5} align="stretch">
                        <Text color="gray.700" lineHeight="tall" fontWeight="medium">
                          {offering.description}
                        </Text>
                        
                        <Divider borderColor={`${getOfferingColor(offering.color)}.200`} />
                        
                        {/* What's included - enhanced presentation */}
                        <VStack spacing={3} align="start">
                          <Text fontSize="sm" fontWeight="bold" color="gray.800" textTransform="uppercase" letterSpacing="wide">
                            ✨ What's Included:
                          </Text>
                          <List spacing={3}>
                            {offering.features.map((feature, idx) => (
                              <ListItem key={idx} display="flex" alignItems="start">
                                <ListIcon 
                                  as={FaCheckCircle} 
                                  color={`${getOfferingColor(offering.color)}.500`}
                                  mt={1}
                                  fontSize="lg"
                                />
                                <Text fontSize="sm" color="gray.700" lineHeight="tall">
                                  {feature}
                                </Text>
                              </ListItem>
                            ))}
                          </List>
                        </VStack>
                        
                        {/* Conversion benefits */}
                        <VStack spacing={3} align="start">
                          <Text fontSize="sm" fontWeight="bold" color={successColor} textTransform="uppercase" letterSpacing="wide">
                            🎁 Bonus Benefits:
                          </Text>
                          <List spacing={2}>
                            {offering.conversionBenefits.map((benefit, idx) => (
                              <ListItem key={idx} display="flex" alignItems="start">
                                <ListIcon 
                                  as={FaGift} 
                                  color={successColor}
                                  mt={1}
                                />
                                <Text fontSize="sm" color="gray.600" fontStyle="italic">
                                  {benefit}
                                </Text>
                              </ListItem>
                            ))}
                          </List>
                        </VStack>
                      </VStack>
                    </CardBody>

                    <CardFooter 
                      borderTopWidth={2} 
                      borderColor={`${getOfferingColor(offering.color)}.200`}
                      bg={useColorModeValue(`${getOfferingColor(offering.color)}.25`, 'gray.700')}
                      bgGradient={index === 0 ? `linear(180deg, ${getOfferingColor(offering.color)}.50, white)` : undefined}
                    >
                      <VStack spacing={4} w="full">
                        {/* Pricing with urgency */}
                        <Flex justify="space-between" align="center" w="full">
                          <VStack align="start" spacing={1}>
                            <HStack>
                              <Text fontSize="3xl" fontWeight="bold" color={priceColor}>
                                {offering.price}
                              </Text>
                              {offering.price !== "Custom Quote" && (
                                <VStack align="start" spacing={0}>
                                  <Text fontSize="sm" color={mutedText} textDecoration="line-through">
                                    ${parseInt(offering.price.replace('$', '')) * 1.5}
                                  </Text>
                                  <Text fontSize="xs" color={urgentColor} fontWeight="bold">
                                    LIMITED TIME
                                  </Text>
                                </VStack>
                              )}
                            </HStack>
                            <Text fontSize="xs" color={mutedText}>
                              {offering.duration} • No hidden fees
                            </Text>
                          </VStack>
                          
                          {/* Enhanced CTA button */}
                          <VStack spacing={2}>
                            <Button
                              as="a"
                              href={offering.link || '/contact'}
                              colorScheme={getOfferingColor(offering.color)}
                              rightIcon={<FaArrowRight />}
                              size="md"
                              fontWeight="bold"
                              px={6}
                              py={3}
                              boxShadow="md"
                              _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg'
                              }}
                              transition="all 0.3s"
                            >
                              {index === 0 ? 'Start Today' : 
                               index === 1 ? 'Begin Learning' :
                               index === 2 ? 'Get Certified' : 'Customize Now'}
                            </Button>
                            <Text fontSize="xs" color={mutedText} textAlign="center">
                              💳 Secure Payment • 🔒 Money-Back Guarantee
                            </Text>
                          </VStack>
                        </Flex>
                        
                        {/* Progress indicator for popular choice */}
                        {index === 0 && (
                          <VStack spacing={2} w="full">
                            <HStack justify="space-between" w="full">
                              <Text fontSize="xs" color="gray.600">Enrollment Progress</Text>
                              <Text fontSize="xs" color={urgentColor} fontWeight="bold">85% Full</Text>
                            </HStack>
                            <Progress value={85} colorScheme="red" size="sm" w="full" borderRadius="full" />
                          </VStack>
                        )}
                      </VStack>
                    </CardFooter>
                  </Card>
                </Box>
                );
              })}
            </SimpleGrid>
          </VStack>

          {/* Enhanced Social Proof & Trust Section */}
          <VStack spacing={8} mt={16}>
            {/* Global community stats */}
            <Box 
              p={8} 
              bg={useColorModeValue('blue.50', 'blue.900')}
              borderRadius="xl"
              borderWidth={2}
              borderColor={useColorModeValue('blue.200', 'blue.700')}
              w="full"
            >
              <VStack spacing={6} textAlign="center">
                <Icon as={FaGlobe} boxSize={12} color="blue.500" />
                <Heading size="lg" color="gray.800">
                  Join 1000+ Awakened Souls Worldwide
                </Heading>
                
                {/* Stats grid */}
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6} w="full">
                  {[
                    { number: "1000+", label: "Active Students", icon: FaUsers },
                    { number: "25+", label: "Countries", icon: FaGlobe },
                    { number: "98%", label: "Satisfaction", icon: FaStar },
                    { number: "24hr", label: "Support", icon: FaClock }
                  ].map((stat, index) => (
                    <VStack key={index} spacing={2}>
                      <Icon as={stat.icon} boxSize={8} color="blue.500" />
                      <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                        {stat.number}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {stat.label}
                      </Text>
                    </VStack>
                  ))}
                </SimpleGrid>
                
                <Text color="gray.700" maxW="4xl" fontSize="lg" lineHeight="tall">
                  🌟 All programs conducted online with live interaction • No Sanskrit background required • 
                  Expert guidance from authentic lineage • Complete beginner friendly • Global community support
                </Text>
                
                {/* Immediate CTA */}
                <OptimizedCTA 
                  variant="inline" 
                  ctaType="primary" 
                  showSecondary={true}
                  showUrgency={true}
                  customMessage="Ready to begin your quantum-spiritual transformation?"
                />
              </VStack>
            </Box>
          </VStack>

          {/* Inspiring Quantum-Spiritual Quote */}
          <Box mt={16} textAlign="center">
            <VStack spacing={4}>
              <Text 
                fontSize={{ base: 'xl', md: '2xl' }}
                color="orange.500"
                fontWeight="bold"
                mb={2}
              >
                {vedicWisdomSeries.quotes[0].sanskrit}
              </Text>
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.700"
                fontStyle="italic"
                maxW="4xl"
                lineHeight="tall"
              >
                "{vedicWisdomSeries.quotes[0].translation}"
              </Text>
              <Text fontSize="md" color="gray.600" fontWeight="medium">
                — {vedicWisdomSeries.quotes[0].source}
              </Text>
              
              {/* Final conversion opportunity */}
              <Box mt={8}>
                <Text fontSize="lg" color="gray.800" fontWeight="bold" mb={4}>
                  Ready to experience this ancient wisdom yourself?
                </Text>
                <OptimizedCTA 
                  variant="inline" 
                  ctaType="emergency" 
                  showSecondary={false}
                  showUrgency={true}
                  customMessage="Start your transformation journey today"
                />
              </Box>
            </VStack>
          </Box>
        </Container>
      </Box>
    </>
  )
}