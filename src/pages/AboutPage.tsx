import React from 'react'
import { FaOm, FaGraduationCap, FaUsers, FaAward, FaGlobe, FaLightbulb, FaCheckCircle, FaStar, FaInfinity, FaUniversity, FaCertificate, FaHandsHelping, FaHeart, FaQuoteLeft, FaBrain, FaAtom, FaEye, FaRocket } from 'react-icons/fa'
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
import { Box, Image, AspectRatio, Icon, List, ListItem, Divider, SimpleGrid, Stat, StatNumber, StatLabel, StatHelpText, useColorModeValue } from '@chakra-ui/react'

// 🌍 INTERNATIONAL VISHWAGURU ABOUT PAGE - ULTRA-AGENTIC TRANSFORMATION
// Establishing India as Global Spiritual Authority for International Audience

const AboutPage: React.FC = () => {
  const pageContent = getPageContent('about')
  const teacher = vedicWisdomSeries.teacher
  
  return (
    <>
      <SEOHead
        title="About Dr. Nischaya Nagori - International Vedic Authority & Quantum Consciousness Pioneer"
        description="Meet Dr. Nischaya Nagori, internationally recognized Vedic scholar bridging ancient wisdom with quantum science. Serving 1000+ global students across 25+ countries with authentic spiritual education."
        keywords={[
          'Dr. Nischaya Nagori', 'International Vedic Scholar', 'Quantum Consciousness', 'MIT Scientist', 
          'Global Spiritual Teacher', 'Vedic Authority', 'Ancient Wisdom Expert', 'Scientific Spirituality',
          'India Vishwaguru', 'Global Guru', 'International Meditation Teacher', 'Quantum Physics Vedanta',
          'Authentic Lineage', 'Global Education', 'Spiritual Scientist', 'Consciousness Research'
        ]}
        image="/assets/images/dr-nischaya-og.jpg"
      />

      {/* 🕉️ HERO SECTION - INTERNATIONAL AUTHORITY ESTABLISHMENT */}
      <Section variant="hero" background="gradient" animate>
        <Container size="xl">
          <Animation variant="fadeIn" duration={1.2}>
            <Grid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }} alignItems="center">
              {/* Hero Content */}
              <VStack spacing={8} align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }}>
                <Badge variant="gradient" size="lg" icon={<FaOm />}>
                  🌍 INTERNATIONAL VEDIC AUTHORITY
                </Badge>
                
                <VStack spacing={6} align={{ base: "center", lg: "start" }}>
                  <Heading variant="hero" level={1} maxW="4xl">
                    Dr. Nischaya Nagori
                  </Heading>
                  
                  <Heading variant="section" level={2} color="secondary.500" maxW="3xl">
                    Global Pioneer in Quantum-Vedic Integration
                  </Heading>
                  
                  <Text variant="lead" maxW="3xl" color="gray.600">
                    Internationally recognized scholar bridging 5000-year-old Vedic wisdom with cutting-edge 
                    quantum consciousness research. Serving authentic spiritual education to seekers across 
                    25+ countries from India - the eternal Vishwaguru of the world.
                  </Text>
                </VStack>

                <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap" justify={{ base: "center", lg: "start" }}>
                  <Button variant="premium" size={{ base: "md", md: "lg" }} shimmer icon={FaRocket}>
                    Join Global Community
                  </Button>
                  <Button variant="glass" size={{ base: "md", md: "lg" }} icon={FaEye}>
                    Watch Introduction
                  </Button>
                </HStack>

                {/* Global Authority Indicators */}
                <HStack spacing={{ base: 4, sm: 6, md: 8 }} justify={{ base: "center", lg: "start" }} flexWrap="wrap">
                  <VStack spacing={1}>
                    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="primary.500">1000+</Text>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Global Students</Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="secondary.500">25+</Text>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Countries</Text>
                  </VStack>
                  <VStack spacing={1}>
                    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="tertiary.500">500+</Text>
                    <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600">Teaching Hours</Text>
                  </VStack>
                </HStack>
              </VStack>

              {/* Premium Hero Image */}
              <Animation variant="scaleIn" delay={0.5}>
                <Hover variant="float" intensity="subtle">
                  <Box position="relative">
                    <AspectRatio ratio={1} maxW="500px" mx="auto">
                      <Box
                        bg="linear-gradient(135deg, rgba(255,153,51,0.1), rgba(30,144,255,0.05))"
                        borderRadius="full"
                        border="6px solid"
                        borderColor="primary.200"
                        boxShadow="0 20px 60px rgba(0,0,0,0.15)"
                        position="relative"
                        overflow="hidden"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          bg: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                          transform: 'translateX(-100%)',
                          animation: 'shimmer 3s infinite'
                        }}
                      >
                        <Image
                          src="/assets/images/dr-nischaya-nagori.jpg"
                          alt="Dr. Nischaya Nagori - International Vedic Authority"
                          objectFit="cover"
                          borderRadius="full"
                        />
                      </Box>
                    </AspectRatio>
                    
                    {/* Premium Authority Badge */}
                    <Box
                      position="absolute"
                      bottom={4}
                      right={4}
                      bg="linear-gradient(135deg, #FF9933, #FFB366)"
                      color="white"
                      px={4}
                      py={2}
                      borderRadius="full"
                      fontSize="sm"
                      fontWeight="bold"
                      boxShadow="0 8px 25px rgba(255,153,51,0.3)"
                      border="2px solid rgba(255,255,255,0.2)"
                    >
                      🌍 Global Authority
                    </Box>
                  </Box>
                </Hover>
              </Animation>
            </Grid>
          </Animation>
        </Container>
      </Section>

      {/* 🎯 INTERNATIONAL CREDENTIALS - VISHWAGURU AUTHORITY */}
      <Section variant="feature" background="pattern" padding="xl">
        <Container size="lg">
          <VStack spacing={16}>
            <Animation variant="slideUp">
              <VStack spacing={4} textAlign="center">
                <Badge variant="solid" colorScheme="primary" size="lg">
                  🏛️ INTERNATIONAL RECOGNITION
                </Badge>
                <Heading variant="section" level={2}>
                  Global Authority in Vedic Sciences
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Internationally acclaimed for bridging ancient Indian wisdom with modern scientific understanding, 
                  establishing India's rightful position as Vishwaguru for global spiritual education.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.15}>
              <Grid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} equalHeight>
                {[
                  {
                    icon: FaUniversity,
                    title: "Traditional Mastery",
                    description: "Authentic gurukul training in Vedas, Upanishads, Puranas, and Sanskrit with direct lineage transmission",
                    color: "orange",
                    badge: "Authentic"
                  },
                  {
                    icon: FaAtom,
                    title: "Quantum Integration",
                    description: "Pioneer in connecting quantum consciousness, information theory, and Vedic metaphysics",
                    color: "blue", 
                    badge: "Revolutionary"
                  },
                  {
                    icon: FaGlobe,
                    title: "Global Reach",
                    description: "Teaching authentic Vedic wisdom to international students across 25+ countries worldwide",
                    color: "green",
                    badge: "International"
                  },
                  {
                    icon: FaCertificate,
                    title: "Academic Excellence",
                    description: "Recognized scholar with deep expertise in both traditional scriptures and modern scientific methods",
                    color: "purple",
                    badge: "Scholarly"
                  }
                ].map((credential, index) => (
                  <Hover key={index} variant="lift" intensity="normal">
                    <Card variant="glass" premium h="full">
                      <VStack spacing={{ base: 4, md: 6 }} p={{ base: 6, md: 8 }} align="start" h="full">
                        <HStack justify="space-between" w="full">
                          <Box
                            bg={`${credential.color}.100`}
                            p={{ base: 3, md: 4 }}
                            borderRadius="full"
                            border="2px solid"
                            borderColor={`${credential.color}.200`}
                          >
                            <Icon as={credential.icon} boxSize={{ base: 6, md: 8 }} color={`${credential.color}.500`} />
                          </Box>
                          <Badge variant="outline" colorScheme={credential.color} size="sm">
                            {credential.badge}
                          </Badge>
                        </HStack>
                        
                        <VStack align="start" spacing={{ base: 2, md: 3 }} flex={1}>
                          <Heading variant="card" level={3}>
                            {credential.title}
                          </Heading>
                          <Text variant="body" fontSize="sm">
                            {credential.description}
                          </Text>
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

      {/* 🧠 REVOLUTIONARY DISCOVERY - QUANTUM-VEDIC BRIDGE */}
      <Section variant="content" padding="xl">
        <Container size="lg">
          <Grid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            <Animation variant="slideLeft">
              <VStack spacing={{ base: 6, md: 8 }} align="start">
                <Badge variant="gradient" colorScheme="secondary" size="lg" icon={<FaBrain />}>
                  🔬 BREAKTHROUGH DISCOVERY
                </Badge>
                
                <Heading variant="section" level={2}>
                  The Quantum-Vedic Revolution
                </Heading>
                
                <Text variant="body" color="gray.600" lineHeight="tall">
                  Dr. Nischaya's groundbreaking work demonstrates that principles of quantum mechanics - 
                  entanglement, superposition, observer effect - were already encoded in our ancient 
                  Vedic texts thousands of years ago. This revolutionary integration provides scientific 
                  validation for spiritual experiences and makes ancient wisdom accessible to modern minds.
                </Text>

                <VStack spacing={{ base: 3, md: 4 }} align="start" w="full">
                  {[
                    {
                      vedic: "Quantum Entanglement",
                      ancient: "Krishna's teaching of interconnected souls (Gita 7.7)",
                      icon: FaInfinity
                    },
                    {
                      vedic: "Superposition States", 
                      ancient: "Divine omnipresence in Upanishads",
                      icon: FaAtom
                    },
                    {
                      vedic: "Observer Effect",
                      ancient: "Consciousness as primary reality (Vedanta)",
                      icon: FaEye
                    }
                  ].map((parallel, index) => (
                    <HStack key={index} spacing={{ base: 3, md: 4 }} p={{ base: 3, md: 4 }} bg="gray.50" borderRadius="lg" w="full">
                      <Icon as={parallel.icon} color="primary.500" boxSize={{ base: 4, md: 5 }} />
                      <VStack align="start" spacing={{ base: 0, md: 1 }} flex={1}>
                        <Text fontWeight="600" fontSize="sm" color="gray.800">
                          {parallel.vedic}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          {parallel.ancient}
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>

                <Button variant="outline" size={{ base: "sm", md: "md" }} icon={FaLightbulb}>
                  Explore The Integration
                </Button>
              </VStack>
            </Animation>

            <Animation variant="slideRight" delay={0.3}>
              <Card variant="elevated" premium>
                <VStack spacing={6} p={8}>
                  <Quote variant="highlight" size="md">
                    While studying quantum mechanics, I experienced a profound realization: the principles 
                    described by modern physics were already encoded in our ancient texts. This discovery 
                    revolutionized my understanding and teaching approach, allowing me to serve global 
                    seekers with scientifically validated spiritual wisdom.
                  </Quote>
                  
                  <HStack spacing={3}>
                    <Divider w="50px" borderColor="primary.400" />
                    <Text fontWeight="bold" color="primary.600" fontSize="sm">
                      Dr. Nischaya Nagori
                    </Text>
                  </HStack>
                </VStack>
              </Card>
            </Animation>
          </Grid>
        </Container>
      </Section>

      {/* 🌟 GLOBAL IMPACT STATISTICS */}
      <Section variant="testimonial" background="glass" padding="xl">
        <Container size="lg">
          <VStack spacing={12}>
            <Animation variant="slideUp">
              <VStack spacing={4} textAlign="center">
                <Badge variant="solid" colorScheme="secondary" size="lg">
                  🌍 GLOBAL TRANSFORMATION
                </Badge>
                <Heading variant="section" level={2}>
                  Serving International Community
                </Heading>
                <Text variant="lead" maxW="3xl">
                  Through authentic Vedic education and scientific integration, we're establishing 
                  India's role as Vishwaguru, serving spiritual seekers across the globe.
                </Text>
              </VStack>
            </Animation>

            <Stagger staggerDelay={0.1}>
              <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={{ base: 4, md: 8 }} w="full">
                {[
                  {
                    number: "1000+",
                    label: "Global Students",
                    sublabel: "Across 6 Continents",
                    color: "primary"
                  },
                  {
                    number: "25+",
                    label: "Countries Reached", 
                    sublabel: "Worldwide Impact",
                    color: "secondary"
                  },
                  {
                    number: "500+",
                    label: "Teaching Hours",
                    sublabel: "Authentic Content",
                    color: "tertiary"
                  },
                  {
                    number: "95%",
                    label: "Satisfaction Rate",
                    sublabel: "Student Feedback",
                    color: "green"
                  }
                ].map((stat, index) => (
                  <Hover key={index} variant="lift" intensity="subtle">
                    <Card variant="glass" textAlign="center">
                      <VStack spacing={{ base: 2, md: 3 }} p={{ base: 4, md: 6 }}>
                        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color={`${stat.color}.500`}>
                          {stat.number}
                        </Text>
                        <Text fontWeight="600" color="gray.800">
                          {stat.label}
                        </Text>
                        <Text fontSize="xs" color="gray.600">
                          {stat.sublabel}
                        </Text>
                      </VStack>
                    </Card>
                  </Hover>
                ))}
              </SimpleGrid>
            </Stagger>
          </VStack>
        </Container>
      </Section>

      {/* 🎓 TEACHING METHODOLOGY - INTERNATIONAL APPROACH */}
      <Section variant="content" padding="xl">
        <Container size="lg">
          <VStack spacing={16}>
            <Animation variant="slideUp">
              <VStack spacing={4} textAlign="center">
                <Badge variant="outline" colorScheme="green" size="lg">
                  📚 TEACHING EXCELLENCE
                </Badge>
                <Heading variant="section" level={2}>
                  Revolutionary Teaching Methodology
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Combining traditional guru-disciple transmission with modern pedagogical techniques 
                  to make authentic Vedic wisdom accessible to international students worldwide.
                </Text>
              </VStack>
            </Animation>

            <Grid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }}>
              {[
                {
                  title: "Authentic Transmission",
                  description: "Traditional gurukul methods preserving the original essence of Vedic teachings",
                  features: [
                    "Direct lineage transmission",
                    "Sanskrit pronunciation training", 
                    "Scriptural authority validation",
                    "Experiential realization guidance"
                  ],
                  icon: FaOm,
                  color: "orange"
                },
                {
                  title: "Scientific Integration",
                  description: "Modern scientific parallels making ancient wisdom comprehensible to contemporary minds",
                  features: [
                    "Quantum physics correlations",
                    "Consciousness research insights",
                    "Mathematical framework explanations",
                    "Empirical validation methods"
                  ],
                  icon: FaAtom,
                  color: "blue"
                },
                {
                  title: "Global Accessibility",
                  description: "International delivery methods ensuring authentic wisdom reaches seekers worldwide",
                  features: [
                    "Multi-timezone live sessions",
                    "Cultural adaptation strategies",
                    "Language-accessible explanations",
                    "Technology-enabled learning"
                  ],
                  icon: FaGlobe,
                  color: "green"
                }
              ].map((method, index) => (
                <Animation key={index} variant="slideUp" delay={index * 0.2}>
                  <Card variant="elevated" premium h="full">
                    <VStack spacing={{ base: 4, md: 6 }} p={{ base: 6, md: 8 }} align="start" h="full">
                      <HStack>
                        <Box
                          bg={`${method.color}.100`}
                          p={{ base: 2, md: 3 }}
                          borderRadius="lg"
                          border="2px solid"
                          borderColor={`${method.color}.200`}
                        >
                          <Icon as={method.icon} boxSize={{ base: 5, md: 6 }} color={`${method.color}.500`} />
                        </Box>
                      </HStack>
                      
                      <VStack align="start" spacing={{ base: 3, md: 4 }} flex={1}>
                        <Heading variant="card" level={3}>
                          {method.title}
                        </Heading>
                        <Text variant="body" color="gray.600" fontSize="sm">
                          {method.description}
                        </Text>
                        
                        <List spacing={{ base: 1, md: 2 }} w="full">
                          {method.features.map((feature, idx) => (
                            <ListItem key={idx}>
                              <HStack spacing={{ base: 1, md: 2 }} align="start">
                                <Icon as={FaCheckCircle} color={`${method.color}.500`} mt={0.5} boxSize={3} />
                                <Text fontSize="xs" color="gray.700">{feature}</Text>
                              </HStack>
                            </ListItem>
                          ))}
                        </List>
                      </VStack>
                    </VStack>
                  </Card>
                </Animation>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Section>

      {/* 🌍 VISHWAGURU MISSION - INDIA'S GLOBAL LEADERSHIP */}
      <Section variant="cta" background="gradient" padding="xl">
        <Container size="lg">
          <Animation variant="bounceIn">
            <VStack spacing={8} textAlign="center">
              <Badge variant="solid" colorScheme="tertiary" size="lg" icon={<FaOm />}>
                🕉️ VISHWAGURU MISSION
              </Badge>
              
              <Heading variant="section" level={2} color="white">
                India Leading Global Spiritual Renaissance
              </Heading>
              
              <Text variant="lead" maxW="4xl" color="whiteAlpha.900">
                Join the global movement where India reclaims its position as Vishwaguru - the world's 
                spiritual teacher. Through authentic Vedic education and scientific integration, we're 
                serving international seekers and establishing timeless wisdom for modern transformation.
              </Text>
              
              <HStack spacing={{ base: 4, md: 6 }} flexWrap="wrap" justify="center">
                <Button variant="premium" size={{ base: "md", md: "lg" }} shimmer icon={FaGlobe}>
                  Join Global Community
                </Button>
                <Button variant="glass" size={{ base: "md", md: "lg" }} icon={FaStar}>
                  Explore Programs
                </Button>
              </HStack>
              
              <HStack spacing={{ base: 4, md: 8 }} justify="center" flexWrap="wrap" pt={4}>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">International Authority</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">Authentic Lineage</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">Scientific Integration</Badge>
                <Badge variant="outline" colorScheme="whiteAlpha" size="md">Global Community</Badge>
              </HStack>
            </VStack>
          </Animation>
        </Container>
      </Section>
    </>
  )
}

export default AboutPage