import React from 'react'
import { FaOm, FaGraduationCap, FaGlobe, FaUsers, FaStar, FaClock, FaCheckCircle, FaArrowRight, FaRocket, FaInfinity, FaAtom, FaLightbulb, FaCertificate, FaFire, FaGift, FaHeart, FaUniversity, FaBookOpen, FaDollarSign, FaCalendarAlt } from 'react-icons/fa'
import SEOHead from '../components/SEOHead'
import { vedicWisdomSeries } from '../data/vedicWisdomSeries'
import { contentMaster, getPageContent } from '../data/contentMaster'
import {
  // Premium Layout System
  Section,
  Container,
  Grid,
  VStack,
  HStack,
  
  // Premium Typography
  Heading,
  Text,
  Badge,
  Quote,
  
  // Premium Animation System
  Animation,
  Stagger,
  Hover,
  
  // Premium Core Components
  PremiumCard as Card,
  PremiumButton as Button
} from '../components/premium'
import { Box, Image, AspectRatio, Icon, List, ListItem, Divider, SimpleGrid, Stat, StatNumber, StatLabel, StatHelpText, useColorModeValue, Progress } from '@chakra-ui/react'

// 🌍 INTERNATIONAL VISHWAGURU TEACHINGS PAGE - ULTRA-AGENTIC TRANSFORMATION
// Global Premium Program Showcase for International Spiritual Education

const TeachingsPage: React.FC = () => {
  const pageContent = getPageContent('teachings')
  
  // International program data with global appeal
  const globalPrograms = vedicWisdomSeries.offerings.map((offering, index) => ({
    ...offering,
    globalAppeal: index === 0 ? "🌍 Most Popular Worldwide" : 
                  index === 1 ? "🕉️ Perfect for International Beginners" :
                  index === 2 ? "🎓 Global Teacher Certification" : "💎 Personalized International Experience",
    internationalBenefits: index === 0 ? [
      "Live sessions across all time zones",
      "Recordings accessible globally",
      "International community forum",
      "Multilingual support available"
    ] : index === 1 ? [
      "No Sanskrit background required",
      "Cultural context explanations",
      "International pronunciation guide",
      "Global practice community"
    ] : index === 2 ? [
      "Internationally recognized certification",
      "Teaching methodology for all cultures",
      "Global teacher network access",
      "Worldwide mentorship support"
    ] : [
      "Direct access to Dr. Nischaya Nagori",
      "Customized for your cultural context",
      "Personal spiritual guidance",
      "One-on-one international sessions"
    ],
    globalStats: index === 0 ? "500+ students from 25+ countries" :
                 index === 1 ? "Perfect for global beginners" :
                 index === 2 ? "Training teachers worldwide" : "100% personalized approach"
  }))
  
  return (
    <>
      <SEOHead
        title="Global Vedic Programs - International Spiritual Education by Dr. Nischaya Nagori"
        description="Join 1000+ international students learning authentic Vedic wisdom from India's Vishwaguru. Scientific spirituality programs for global seekers across 25+ countries."
        keywords={[
          'International Vedic Programs', 'Global Spiritual Education', 'Dr. Nischaya Nagori Courses', 'Vishwaguru Teachings',
          'Scientific Spirituality Training', 'Quantum Consciousness Programs', 'Authentic Vedic Learning',
          'International Meditation Teacher', 'Global Sanskrit Training', 'Worldwide Spiritual Community',
          'India Spiritual Authority', 'International Guru Training', 'Global Vedic Certification'
        ]}
        image="/assets/images/teachings-global-vishwaguru.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Vedic Wisdom Series - International Programs",
          "description": "Global spiritual education programs serving international students with authentic Vedic wisdom from India's spiritual authority.",
          "provider": {
            "@type": "Person",
            "name": "Dr. Nischaya Nagori",
            "jobTitle": "International Vedic Authority & Quantum Consciousness Pioneer"
          },
          "offers": globalPrograms.map(program => ({
            "@type": "Course",
            "name": program.title,
            "description": program.description,
            "price": program.price.replace('$', ''),
            "priceCurrency": "USD",
            "audience": "International Students",
            "availableLanguage": "English"
          }))
        }}
      />

      {/* 🕉️ HERO SECTION - INTERNATIONAL VISHWAGURU AUTHORITY */}
      <Section variant="hero" background="gradient" animate>
        <Container size="xl">
          <Animation variant="fadeIn" duration={1.2}>
            <VStack spacing={10} textAlign="center">
              {/* Global Authority Badge */}
              <Badge variant="glass" size="xl" icon={<FaGlobe />}>
                🌍 INDIA AS VISHWAGURU - GLOBAL SPIRITUAL EDUCATION
              </Badge>
              
              <VStack spacing={6}>
                <Heading variant="hero" level={1} color="white" maxW="6xl">
                  Authentic Vedic Programs for International Students
                </Heading>
                
                <Heading variant="section" level={2} color="whiteAlpha.900" maxW="5xl">
                  Ancient Wisdom. Modern Science. Global Community.
                </Heading>
                
                <Text variant="lead" color="whiteAlpha.800" maxW="4xl">
                  Join 1000+ students from 25+ countries learning authentic Vedic wisdom through 
                  scientifically validated spiritual practices. Dr. Nischaya Nagori bridges 
                  5000-year-old traditions with quantum consciousness research for global transformation.
                </Text>
              </VStack>

              {/* Global Statistics */}
              <HStack spacing={12} justify="center" flexWrap="wrap">
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="tertiary.300">1000+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">International Students</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="secondary.300">25+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Countries Served</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="primary.300">500+</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Hours of Wisdom</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="3xl" fontWeight="bold" color="green.300">95%</Text>
                  <Text fontSize="sm" color="whiteAlpha.700">Satisfaction Rate</Text>
                </VStack>
              </HStack>

              {/* International CTAs */}
              <HStack spacing={6} flexWrap="wrap" justify="center">
                <Button variant="premium" size="xl" shimmer icon={FaRocket}>
                  Explore Global Programs
                </Button>
                <Button variant="glass" size="xl" icon={FaGlobe}>
                  Join International Community
                </Button>
              </HStack>

              {/* Trust Indicators */}
              <HStack spacing={8} justify="center" flexWrap="wrap" pt={4}>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🌍 All Time Zones</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🕉️ Authentic Lineage</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🔬 Scientific Validation</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">💯 Beginner Friendly</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🌟 GLOBAL PROGRAMS SECTION - INTERNATIONAL SHOWCASE */}
      <Section variant="feature" background="pattern" padding="xl">
        <Container size="lg">
          <VStack spacing={16}>
            <Animation variant="slideUp">
              <VStack spacing={6} textAlign="center">
                <Badge variant="gradient" colorScheme="primary" size="xl" icon={<FaUniversity />}>
                  🎓 INTERNATIONAL SPIRITUAL EDUCATION PROGRAMS
                </Badge>
                <Heading variant="section" level={2}>
                  Choose Your Global Transformation Path
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Four scientifically designed programs serving international students with authentic 
                  Vedic wisdom. Each path is crafted for global accessibility while maintaining 
                  traditional spiritual authenticity from India's eternal Vishwaguru lineage.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.2}>
              <Grid columns={{ base: 1, lg: 2 }} spacing={10} equalHeight>
                {globalPrograms.map((program, index) => (
                  <Hover key={program.title} variant="lift" intensity="normal">
                    <Card variant="elevated" premium h="full" position="relative">
                      {/* Most Popular Badge */}
                      {index === 0 && (
                        <Box
                          position="absolute"
                          top={-3}
                          right={6}
                          bg="red.500"
                          color="white"
                          px={4}
                          py={2}
                          borderRadius="full"
                          fontSize="xs"
                          fontWeight="bold"
                          zIndex={2}
                          boxShadow="lg"
                        >
                          🔥 MOST POPULAR WORLDWIDE
                        </Box>
                      )}

                      <VStack spacing={8} p={8} align="start" h="full">
                        {/* Program Header */}
                        <VStack spacing={4} align="start" w="full">
                          <HStack justify="space-between" w="full">
                            <Badge 
                              variant="gradient" 
                              colorScheme={index === 0 ? 'orange' : index === 1 ? 'blue' : index === 2 ? 'purple' : 'green'} 
                              size="lg"
                              icon={index === 0 ? <FaFire /> : index === 1 ? <FaOm /> : index === 2 ? <FaCertificate /> : <FaHeart />}
                            >
                              {program.badge}
                            </Badge>
                            <Badge variant="outline" colorScheme="gray" size="sm">
                              {program.globalAppeal}
                            </Badge>
                          </HStack>
                          
                          <Heading variant="card" level={3}>
                            {program.title}
                          </Heading>
                          
                          <Text variant="body" color="gray.600" fontWeight="medium">
                            {program.globalStats}
                          </Text>
                          
                          <Text variant="body" color="gray.700" lineHeight="tall">
                            {program.description}
                          </Text>
                        </VStack>

                        <Divider borderColor="gray.200" />

                        {/* Core Features */}
                        <VStack spacing={4} align="start" w="full">
                          <Text fontSize="sm" fontWeight="bold" color="gray.800" textTransform="uppercase" letterSpacing="wide">
                            ✨ Core Program Features:
                          </Text>
                          <List spacing={3} w="full">
                            {program.features.map((feature, idx) => (
                              <ListItem key={idx}>
                                <HStack spacing={3} align="start">
                                  <Icon 
                                    as={FaCheckCircle} 
                                    color={index === 0 ? 'orange.500' : index === 1 ? 'blue.500' : index === 2 ? 'purple.500' : 'green.500'}
                                    mt={1}
                                    boxSize={4}
                                  />
                                  <Text fontSize="sm" color="gray.700" lineHeight="tall">
                                    {feature}
                                  </Text>
                                </HStack>
                              </ListItem>
                            ))}
                          </List>
                        </VStack>

                        {/* International Benefits */}
                        <VStack spacing={4} align="start" w="full">
                          <Text fontSize="sm" fontWeight="bold" color="green.600" textTransform="uppercase" letterSpacing="wide">
                            🌍 International Benefits:
                          </Text>
                          <List spacing={3} w="full">
                            {program.internationalBenefits.map((benefit, idx) => (
                              <ListItem key={idx}>
                                <HStack spacing={3} align="start">
                                  <Icon as={FaGlobe} color="green.500" mt={1} boxSize={4} />
                                  <Text fontSize="sm" color="gray.600" fontStyle="italic">
                                    {benefit}
                                  </Text>
                                </HStack>
                              </ListItem>
                            ))}
                          </List>
                        </VStack>

                        {/* Program Pricing & CTA */}
                        <VStack spacing={4} w="full" pt={4} borderTop="2px solid" borderColor="gray.100">
                          <HStack justify="space-between" w="full" align="center">
                            <VStack align="start" spacing={1}>
                              <HStack>
                                <Text fontSize="3xl" fontWeight="bold" color="green.600">
                                  {program.price}
                                </Text>
                                {program.price !== "Custom Quote" && (
                                  <VStack align="start" spacing={0}>
                                    <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                                      ${Math.round(parseInt(program.price.replace('$', '')) * 1.4)}
                                    </Text>
                                    <Text fontSize="xs" color="red.500" fontWeight="bold">
                                      EARLY BIRD
                                    </Text>
                                  </VStack>
                                )}
                              </HStack>
                              <Text fontSize="xs" color="gray.500">
                                {program.duration} • International Access
                              </Text>
                            </VStack>
                            
                            <Button
                              variant="premium"
                              size="lg"
                              icon={FaRocket}
                              shimmer={index === 0}
                            >
                              {index === 0 ? 'Join Now' : 
                               index === 1 ? 'Start Learning' :
                               index === 2 ? 'Get Certified' : 'Customize'}
                            </Button>
                          </HStack>
                          
                          <Text fontSize="xs" color="gray.500" textAlign="center" w="full">
                            🔒 Secure International Payment • 💯 30-Day Guarantee • 🌍 All Time Zones
                          </Text>

                          {/* Enrollment Status for Popular Program */}
                          {index === 0 && (
                            <VStack spacing={2} w="full">
                              <HStack justify="space-between" w="full">
                                <Text fontSize="xs" color="gray.600">Global Enrollment</Text>
                                <Text fontSize="xs" color="red.500" fontWeight="bold">87% Full</Text>
                              </HStack>
                              <Progress value={87} colorScheme="red" size="sm" w="full" borderRadius="full" />
                            </VStack>
                          )}
                        </VStack>
                      </VStack>
                    </Card>
                  </Hover>
                ))}
              </Grid>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* 🌍 GLOBAL COMMUNITY STATISTICS - VISHWAGURU AUTHORITY */}
      <Section variant="testimonial" background="glass" padding="xl">
        <Container size="lg">
          <VStack spacing={12}>
            <Animation variant="slideUp">
              <VStack spacing={6} textAlign="center">
                <Badge variant="solid" colorScheme="secondary" size="xl" icon={<FaGlobe />}>
                  🌍 GLOBAL SPIRITUAL COMMUNITY
                </Badge>
                <Heading variant="section" level={2}>
                  International Students Worldwide
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Join a thriving global community of seekers learning authentic Vedic wisdom from 
                  India's spiritual authority. Our international programs serve students across 
                  continents with culturally adapted yet traditional spiritual education.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.1}>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
                {[
                  {
                    number: "1000+",
                    label: "International Students",
                    sublabel: "Active Global Learners",
                    color: "primary",
                    icon: FaUsers
                  },
                  {
                    number: "25+",
                    label: "Countries Served", 
                    sublabel: "Worldwide Reach",
                    color: "secondary",
                    icon: FaGlobe
                  },
                  {
                    number: "500+",
                    label: "Teaching Hours",
                    sublabel: "Authentic Content",
                    color: "tertiary",
                    icon: FaClock
                  },
                  {
                    number: "95%",
                    label: "Satisfaction Rate",
                    sublabel: "Global Testimonials",
                    color: "green",
                    icon: FaStar
                  }
                ].map((stat, index) => (
                  <Hover key={index} variant="lift" intensity="subtle">
                    <Card variant="glass" textAlign="center">
                      <VStack spacing={4} p={6}>
                        <Icon as={stat.icon} boxSize={10} color={`${stat.color}.500`} />
                        <Text fontSize="4xl" fontWeight="bold" color={`${stat.color}.500`}>
                          {stat.number}
                        </Text>
                        <VStack spacing={1}>
                          <Text fontWeight="600" color="gray.800" fontSize="sm">
                            {stat.label}
                          </Text>
                          <Text fontSize="xs" color="gray.600">
                            {stat.sublabel}
                          </Text>
                        </VStack>
                      </VStack>
                    </Card>
                  </Hover>
                ))}
              </SimpleGrid>
            </Stagger>

            {/* Global Benefits */}
            <Animation variant="slideUp" delay={0.4}>
              <Card variant="elevated" premium p={8} textAlign="center">
                <VStack spacing={6}>
                  <Heading variant="card" level={3}>
                    Why Students Choose Our International Programs
                  </Heading>
                  <HStack spacing={8} justify="center" flexWrap="wrap">
                    <Badge variant="outline" colorScheme="primary" size="lg">🌍 All Time Zones Supported</Badge>
                    <Badge variant="outline" colorScheme="secondary" size="lg">🕉️ Authentic Vedic Lineage</Badge>
                    <Badge variant="outline" colorScheme="tertiary" size="lg">🔬 Scientific Integration</Badge>
                    <Badge variant="outline" colorScheme="green" size="lg">💯 Beginner Friendly</Badge>
                  </HStack>
                </VStack>
              </Card>
            </Animation>
          </VStack>
        </Container>
      </Section>

      {/* 🎯 QUANTUM-VEDIC WISDOM QUOTE SECTION */}
      <Section variant="content" padding="xl">
        <Container size="lg">
          <Animation variant="scaleIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="gradient" colorScheme="primary" size="lg" icon={<FaOm />}>
                🕉️ ANCIENT WISDOM FOR MODERN MINDS
              </Badge>
              
              <Quote variant="hero" size="xl" author="Bhagavad Gita 7.7" emphasis="divine">
                {vedicWisdomSeries.quotes[0].sanskrit}
              </Quote>
              
              <Text variant="lead" maxW="4xl" color="gray.700" fontStyle="italic">
                "{vedicWisdomSeries.quotes[0].translation}"
              </Text>
              
              <Text fontSize="md" color="gray.600" fontWeight="medium">
                — {vedicWisdomSeries.quotes[0].source}
              </Text>
            </VStack>
          </Animation>
        </Container>
      </Section>

      {/* 🚀 FINAL INTERNATIONAL CTA SECTION */}
      <Section variant="cta" background="gradient" padding="xl">
        <Container size="lg">
          <Animation variant="bounceIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="tertiary" size="xl" icon={<FaRocket />}>
                🚀 BEGIN YOUR GLOBAL TRANSFORMATION
              </Badge>
              
              <Heading variant="section" level={2} color="white">
                Ready to Join the International Spiritual Community?
              </Heading>
              
              <Text variant="lead" maxW="4xl" color="whiteAlpha.900">
                Experience authentic Vedic wisdom through scientifically validated programs designed 
                for international students. Join 1000+ global seekers in their transformation journey 
                guided by India's spiritual authority, Dr. Nischaya Nagori.
              </Text>
              
              <HStack spacing={6} flexWrap="wrap" justify="center">
                <Button variant="premium" size="xl" shimmer icon={FaGraduationCap}>
                  Explore All Programs
                </Button>
                <Button variant="glass" size="xl" icon={FaGlobe}>
                  Join Global Community
                </Button>
              </HStack>
              
              {/* Final Trust Indicators */}
              <HStack spacing={8} justify="center" flexWrap="wrap" pt={6}>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🔒 Secure International Payment</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">💯 30-Day Money-Back Guarantee</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🌍 Lifetime Global Access</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">🎓 Internationally Recognized</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>
    </>
  )
}

export default TeachingsPage