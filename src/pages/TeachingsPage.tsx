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
  Stack
} from '@chakra-ui/react'
import { FaCheckCircle, FaArrowRight, FaOm, FaBook, FaGraduationCap, FaHeart } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import { siteConfig } from '../siteConfig'
import { vedicWisdomSeries, getOfferingColor } from '../data/vedicWisdomSeries'
import AnimatedSection from '../components/AnimatedSection'
import { useSlideAnimation, slideAnimationConfigs } from '../hooks/useSlideAnimations'

export default function TeachingsPage() {
  // Color scheme
  const bgGradient = useColorModeValue(
    'linear(to-br, orange.50, blue.50)',
    'linear(to-br, gray.900, gray.800)'
  )
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  const priceColor = useColorModeValue('green.600', 'green.400')
  const mutedText = useColorModeValue('gray.600', 'gray.400')
  
  // Animations
  const heroAnimation = useSlideAnimation(slideAnimationConfigs.heroTitle)
  const offeringsAnimation = useSlideAnimation(slideAnimationConfigs.fromBottom)
  
  return (
    <>
      <SEOHead 
        title={`Divine Teachings & Spiritual Offerings - ${siteConfig.siteName}`}
        description="Explore our transformative Vedic education programs: Weekend Discourses ($25), Chanting Classes ($30), Teacher Training ($100), and Lifestyle Experiences. Learn from Dr. Nischaya Nagori."
        keywords={['Vedic teachings', 'spiritual courses', 'Sanskrit chanting', 'weekend discourses', 'teacher training', 'Dr. Nischaya Nagori']}
        image={`${siteConfig.siteUrl}/assets/images/teachings-og.jpg`}
      />

      <Box bgGradient={bgGradient} minH="100vh">
        {/* Hero Section */}
        <Box 
          bg="kd.primary" 
          color="white" 
          py={{ base: 16, md: 24 }}
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            inset={0}
            opacity={0.1}
            bgImage="url('/assets/images/vedic-pattern.svg')"
            bgRepeat="repeat"
            bgSize="200px"
          />
          
          <Container maxW="7xl" position="relative">
            <VStack spacing={6} textAlign="center" ref={heroAnimation.ref} style={heroAnimation.style}>
              <Icon as={FaOm} boxSize={{ base: 12, md: 16 }} color="yellow.300" />
              <Heading 
                as="h1" 
                size={{ base: '2xl', md: '4xl' }}
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                Divine Spiritual Offerings
              </Heading>
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }} 
                maxW="3xl"
                opacity={0.95}
              >
                Transform your life through authentic Vedic education with Dr. Nischaya Nagori. 
                Choose from Weekend Discourses, Chanting Classes, Teacher Training, or 
                personalized Lifestyle Experiences.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                fontStyle="italic"
                opacity={0.9}
                color="yellow.200"
              >
                "Ancient Sound, Modern Awakening"
              </Text>
            </VStack>
          </Container>
        </Box>

        {/* Offerings Grid */}
        <Container maxW="7xl" py={{ base: 12, md: 20 }}>
          <Box ref={offeringsAnimation.ref} style={offeringsAnimation.style}>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, md: 8 }}>
              {vedicWisdomSeries.offerings.map((offering, index) => (
                <AnimatedSection key={offering.title} delay={index * 100}>
                  <Card
                    bg={cardBg}
                    borderWidth={2}
                    borderColor={borderColor}
                    borderRadius="xl"
                    overflow="hidden"
                    transition="all 0.3s"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: 'xl',
                      borderColor: `${getOfferingColor(offering.color)}.400`
                    }}
                    height="full"
                  >
                    <CardHeader bg={`${getOfferingColor(offering.color)}.50`} pb={4}>
                      <VStack spacing={3} align="start">
                        <Badge
                          colorScheme={getOfferingColor(offering.color)}
                          fontSize="sm"
                          px={3}
                          py={1}
                          borderRadius="full"
                        >
                          {offering.badge}
                        </Badge>
                        <Heading size="lg" color="kd.heading">
                          {offering.title}
                        </Heading>
                        <Text color={mutedText} fontSize="sm">
                          {offering.details}
                        </Text>
                      </VStack>
                    </CardHeader>

                    <CardBody>
                      <VStack spacing={4} align="stretch">
                        <Text color="kd.textSecondary">
                          {offering.description}
                        </Text>
                        
                        <Divider />
                        
                        <List spacing={2}>
                          {offering.features.map((feature, idx) => (
                            <ListItem key={idx} display="flex" alignItems="start">
                              <ListIcon 
                                as={FaCheckCircle} 
                                color={`${getOfferingColor(offering.color)}.500`}
                                mt={1}
                              />
                              <Text fontSize="sm" color="kd.text">
                                {feature}
                              </Text>
                            </ListItem>
                          ))}
                        </List>
                      </VStack>
                    </CardBody>

                    <CardFooter 
                      borderTopWidth={1} 
                      borderColor={borderColor}
                      bg={useColorModeValue('gray.50', 'gray.700')}
                    >
                      <Flex justify="space-between" align="center" w="full">
                        <VStack align="start" spacing={0}>
                          <HStack>
                            <Text fontSize="2xl" fontWeight="bold" color={priceColor}>
                              {offering.price}
                            </Text>
                            {offering.price !== "Custom Quote" && (
                              <Text fontSize="sm" color={mutedText}>
                                / {offering.duration}
                              </Text>
                            )}
                          </HStack>
                          {offering.price === "Custom Quote" && (
                            <Text fontSize="xs" color={mutedText}>
                              {offering.duration}
                            </Text>
                          )}
                        </VStack>
                        
                        <Button
                          as={RouterLink}
                          to={offering.link}
                          colorScheme={getOfferingColor(offering.color)}
                          rightIcon={<FaArrowRight />}
                          size="sm"
                        >
                          Learn More
                        </Button>
                      </Flex>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              ))}
            </SimpleGrid>
          </Box>

          {/* Important Note */}
          <AnimatedSection delay={400}>
            <Box 
              mt={12} 
              p={6} 
              bg={useColorModeValue('blue.50', 'blue.900')}
              borderRadius="lg"
              borderWidth={1}
              borderColor={useColorModeValue('blue.200', 'blue.700')}
            >
              <VStack spacing={3} textAlign="center">
                <Icon as={FaHeart} boxSize={8} color="blue.500" />
                <Heading size="md" color="kd.heading">
                  Join Our Global Community of Seekers
                </Heading>
                <Text color="kd.textSecondary" maxW="3xl">
                  All programs are conducted online, making authentic Vedic wisdom accessible to 
                  students worldwide. No prior Sanskrit knowledge required for chanting classes - 
                  our expert instructors guide learners from all backgrounds with patience and clarity.
                </Text>
                <Text fontSize="sm" color={mutedText} fontStyle="italic">
                  Note: Enrollment and payment gateway coming soon. For now, please contact us to reserve your spot.
                </Text>
              </VStack>
            </Box>
          </AnimatedSection>

          {/* Spiritual Quote */}
          <AnimatedSection delay={500}>
            <Box mt={16} textAlign="center">
              <Text 
                fontSize={{ base: 'xl', md: '2xl' }}
                color="kd.primary"
                fontWeight="medium"
                mb={2}
              >
                {vedicWisdomSeries.quotes[0].sanskrit}
              </Text>
              <Text 
                fontSize={{ base: 'md', md: 'lg' }}
                color="kd.textSecondary"
                fontStyle="italic"
              >
                "{vedicWisdomSeries.quotes[0].translation}"
              </Text>
              <Text fontSize="sm" color={mutedText} mt={2}>
                — {vedicWisdomSeries.quotes[0].source}
              </Text>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>
    </>
  )
}