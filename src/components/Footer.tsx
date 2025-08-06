import React from 'react'
import {
  Box,
  Container,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Heading,
  HStack,
  VStack,
  Flex,
  Icon,
  useBreakpointValue,
  Badge,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaBookOpen,
  FaUser,
  FaStar,
  FaOm,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaHeart,
  FaArrowUp,
  FaGlobe,
  FaCertificate,
} from 'react-icons/fa'
import { siteConfig } from '../siteConfig'
import { PremiumCard, PremiumButton } from './premium'

// 🕉️ STATE-OF-THE-ART FOOTER COMPONENT 2025
// Premium glassmorphism design with comprehensive sections

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

// Navigation icon mapping for premium visual hierarchy
const getNavIcon = (href: string) => {
  const iconMap: { [key: string]: React.ComponentType } = {
    '/': FaHome,
    '/teachings': FaBookOpen,
    '/about': FaUser,
    '/testimonials': FaStar,
    '/contact': FaEnvelope,
  }
  return iconMap[href] || FaOm
}

// Premium Social Media Icon with authentic brand colors
const SocialMediaIcon = ({ 
  platform, 
  href, 
  icon: IconComponent 
}: { 
  platform: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  // Authentic brand colors for major platforms
  const getBrandColors = (platformName: string) => {
    const colors = {
      'Instagram': { bg: 'linear-gradient(45deg, #E4405F, #C13584)', shadow: 'rgba(196, 53, 132, 0.4)' },
      'YouTube': { bg: 'linear-gradient(45deg, #FF0000, #CC0000)', shadow: 'rgba(255, 0, 0, 0.4)' },
      'Facebook': { bg: 'linear-gradient(45deg, #1877F2, #0F5DBE)', shadow: 'rgba(24, 119, 242, 0.4)' },
      'Twitter': { bg: 'linear-gradient(45deg, #1DA1F2, #0C85D0)', shadow: 'rgba(29, 161, 242, 0.4)' },
    }
    return colors[platformName as keyof typeof colors] || { 
      bg: 'linear-gradient(45deg, #FF9933, #FFB366)', 
      shadow: 'rgba(255, 153, 51, 0.4)' 
    }
  }

  const brandColors = getBrandColors(platform)

  return (
    <MotionBox
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        y: -4
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        as={ChakraLink}
        href={href}
        isExternal
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="50px"
        h="50px"
        borderRadius="16px"
        bg={brandColors.bg}
        color="white"
        position="relative"
        overflow="hidden"
        boxShadow={`0 4px 20px ${brandColors.shadow}`}
        border="1px solid rgba(255,255,255,0.1)"
        _hover={{
          boxShadow: `0 8px 30px ${brandColors.shadow}`,
          transform: 'translateY(-2px)',
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        aria-label={`Follow us on ${platform}`}
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transition: 'left 0.5s',
        }}
        _groupHover={{
          _before: {
            left: '100%'
          }
        }}
      >
        <Icon as={IconComponent} boxSize={6} />
      </Box>
    </MotionBox>
  )
}

// Premium Footer Navigation Link
const FooterNavLink = ({ 
  to, 
  children, 
  icon 
}: { 
  to: string
  children: React.ReactNode
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) => {
  const IconComponent = icon || getNavIcon(to)
  
  return (
    <MotionBox
      whileHover={{ x: 8 }}
      whileTap={{ scale: 0.98 }}
      w="full"
    >
      <Flex
        as={RouterLink}
        to={to}
        align="center"
        p={3}
        borderRadius="12px"
        color="rgba(255,255,255,0.8)"
        fontSize="sm"
        fontWeight="500"
        border="1px solid transparent"
        _hover={{
          bg: "rgba(255,153,51,0.1)",
          borderColor: "rgba(255,153,51,0.3)",
          color: "white",
          textDecoration: "none",
          '& .nav-icon': {
            color: "kd.primary",
            transform: 'scale(1.1)',
          }
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <Flex
          align="center"
          justify="center"
          w="32px"
          h="32px"
          borderRadius="8px"
          bg="rgba(255,255,255,0.1)"
          mr={3}
        >
          <Icon 
            as={IconComponent} 
            boxSize={4} 
            color="rgba(255,255,255,0.7)"
            className="nav-icon"
            transition="all 0.3s ease"
          />
        </Flex>
        <Text flex={1} noOfLines={1}>
          {children}
        </Text>
      </Flex>
    </MotionBox>
  )
}

// Premium Contact Item
const ContactItem = ({ 
  icon, 
  children, 
  href, 
  type = 'text' 
}: { 
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
  href?: string
  type?: 'text' | 'link'
}) => {
  const content = (
    <Flex align="start" w="full">
      <Flex
        align="center"
        justify="center"
        w="44px"
        h="44px"
        borderRadius="12px"
        bg="linear-gradient(135deg, rgba(255,153,51,0.2), rgba(30,144,255,0.1))"
        border="1px solid rgba(255,153,51,0.3)"
        mr={4}
        flexShrink={0}
        boxShadow="0 4px 12px rgba(255,153,51,0.2)"
      >
        <Icon as={icon} boxSize={5} color="kd.primary" />
      </Flex>
      <Box flex={1} pt={2}>
        <Text
          fontSize="sm"
          color="rgba(255,255,255,0.9)"
          lineHeight="1.6"
          fontWeight="500"
        >
          {children}
        </Text>
      </Box>
    </Flex>
  )

  if (type === 'link' && href) {
    return (
      <MotionBox
        whileHover={{ scale: 1.02 }}
        w="full"
      >
        <ChakraLink
          href={href}
          isExternal={href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')}
          _hover={{ textDecoration: 'none' }}
        >
          {content}
        </ChakraLink>
      </MotionBox>
    )
  }

  return (
    <MotionBox w="full">
      {content}
    </MotionBox>
  )
}

// Scroll to Top Button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <MotionBox
      position="fixed"
      bottom={8}
      right={8}
      zIndex={1000}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <PremiumButton
        variant="premium"
        size="lg"
        borderRadius="full"
        w="56px"
        h="56px"
        minW="unset"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        boxShadow="0 8px 25px rgba(255,153,51,0.4)"
      >
        <Icon as={FaArrowUp} boxSize={5} />
      </PremiumButton>
    </MotionBox>
  )
}

// Main Footer Component
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  // Responsive values
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 4 })
  const sectionPadding = useBreakpointValue({ base: 12, md: 16 })
  const bottomPadding = useBreakpointValue({ base: 6, md: 8 })

  // Social media links with proper icons
  const socialLinks = [
    {
      platform: 'Instagram',
      href: 'https://instagram.com/vedicwisdomseries',
      icon: FaInstagram
    },
    {
      platform: 'YouTube',
      href: 'https://youtube.com/@vedicwisdomseries',
      icon: FaYoutube
    },
    {
      platform: 'Facebook', 
      href: 'https://facebook.com/vedicwisdomseries',
      icon: FaFacebookF
    },
    {
      platform: 'Twitter',
      href: 'https://twitter.com/vedicwisdom',
      icon: FaTwitter
    }
  ]

  // Quick links for navigation
  const quickLinks = siteConfig.navigation.main

  return (
    <>
      <Box
        as="footer"
        position="relative"
        overflow="hidden"
        bg="linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)"
        color="white"
        role="contentinfo"
      >
        {/* Decorative background elements */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.05}
          bgImage="radial-gradient(circle at 25% 25%, #FF9933 2px, transparent 2px)"
          bgSize="60px 60px"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          h="1px"
          bg="linear-gradient(90deg, transparent, rgba(255,153,51,0.5), transparent)"
        />

        <Container maxW="container.xl" py={sectionPadding} position="relative">
          <SimpleGrid columns={gridColumns} spacing={8}>
            {/* About Section */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <PremiumCard variant="glass" p={6} h="full">
                <VStack align="start" spacing={6}>
                  <Flex align="center">
                    <Icon as={FaOm} color="kd.primary" boxSize={8} mr={3} />
                    <Box>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        color="white"
                        fontWeight="700"
                        lineHeight="1.2"
                      >
                        {siteConfig.siteName}
                      </Heading>
                      <Text fontSize="xs" color="kd.primary" fontWeight="600">
                        Ancient Wisdom • Modern Science
                      </Text>
                    </Box>
                  </Flex>
                  
                  <Text 
                    fontSize="sm"
                    color="rgba(255,255,255,0.8)"
                    lineHeight="1.7"
                  >
                    Discover the quantum nature of your soul through Dr. Nischaya Nagori's 
                    revolutionary teachings where Einstein meets the Rishis.
                  </Text>

                  {/* Achievement badges */}
                  <HStack spacing={2} flexWrap="wrap">
                    <Badge colorScheme="orange" variant="subtle" borderRadius="full" px={3}>
                      1000+ Students
                    </Badge>
                    <Badge colorScheme="blue" variant="subtle" borderRadius="full" px={3}>
                      25+ Countries
                    </Badge>
                    <Badge colorScheme="yellow" variant="subtle" borderRadius="full" px={3}>
                      MIT Scientist
                    </Badge>
                  </HStack>

                  {/* Social Media Links */}
                  <Box>
                    <Text
                      fontSize="xs"
                      fontWeight="600"
                      color="rgba(255,255,255,0.7)"
                      mb={4}
                      textTransform="uppercase"
                      letterSpacing="wider"
                    >
                      Connect With Us
                    </Text>
                    <HStack spacing={3} role="group">
                      {socialLinks.map((link) => (
                        <SocialMediaIcon
                          key={link.platform}
                          platform={link.platform}
                          href={link.href}
                          icon={link.icon}
                        />
                      ))}
                    </HStack>
                  </Box>
                </VStack>
              </PremiumCard>
            </MotionBox>

            {/* Quick Links */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard variant="glass" p={6} h="full">
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    color="white"
                    fontWeight="700"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon as={FaGlobe} color="kd.secondary" mr={3} />
                    Quick Links
                  </Heading>
                  <VStack spacing={2} align="start" w="full">
                    {quickLinks.map((link) => (
                      <FooterNavLink key={link.href} to={link.href}>
                        {link.label}
                      </FooterNavLink>
                    ))}
                  </VStack>
                </VStack>
              </PremiumCard>
            </MotionBox>

            {/* Teachings */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard variant="glass" p={6} h="full">
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    color="white"
                    fontWeight="700"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon as={FaCertificate} color="kd.tertiary" mr={3} />
                    Our Offerings
                  </Heading>
                  <VStack spacing={2} align="start" w="full">
                    <FooterNavLink to="/teachings/discourses">
                      Weekend Discourses
                    </FooterNavLink>
                    <FooterNavLink to="/teachings/chanting">
                      Chanting Classes
                    </FooterNavLink>
                    <FooterNavLink to="/teachings/teacher-training">
                      Teacher Training
                    </FooterNavLink>
                    <FooterNavLink to="/teachings/lifestyle">
                      Lifestyle Experiences
                    </FooterNavLink>
                  </VStack>
                </VStack>
              </PremiumCard>
            </MotionBox>

            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <PremiumCard variant="glass" p={6} h="full">
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    color="white"
                    fontWeight="700"
                    display="flex"
                    alignItems="center"
                  >
                    <Icon as={FaEnvelope} color="kd.primary" mr={3} />
                    Get in Touch
                  </Heading>
                  
                  <VStack spacing={4} align="start" w="full">
                    {/* Address */}
                    <ContactItem icon={FaMapMarkerAlt}>
                      Dr. Nischaya Nagori<br />
                      Spiritual Guide & Vedic Scholar<br />
                      Global Online Platform
                    </ContactItem>

                    {/* Email */}
                    <ContactItem 
                      icon={FaEnvelope} 
                      href="mailto:contact@vedicwisdomseries.com"
                      type="link"
                    >
                      contact@vedicwisdomseries.com
                    </ContactItem>

                    {/* Phone */}
                    <ContactItem 
                      icon={FaPhoneAlt}
                      href="tel:+1-555-WISDOM"
                      type="link"
                    >
                      +1 (555) WISDOM (947-366)
                    </ContactItem>
                  </VStack>
                </VStack>
              </PremiumCard>
            </MotionBox>
          </SimpleGrid>
        </Container>

        {/* Premium Footer Bottom */}
        <Box
          borderTop="1px solid"
          borderColor="rgba(255,153,51,0.2)"
          bg="linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)"
          backdropFilter="blur(20px) saturate(180%)"
          position="relative"
        >
          {/* Decorative top line */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            h="1px"
            bg="linear-gradient(90deg, transparent, rgba(255,153,51,0.6), transparent)"
          />
          
          <Container maxW="container.xl" py={bottomPadding}>
            <MotionFlex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              gap={4}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize="sm"
                color="rgba(255,255,255,0.8)"
                fontWeight="500"
                textAlign={{ base: 'center', md: 'left' }}
              >
                © {currentYear} Vedic Wisdom Series. All rights reserved.
              </Text>
              
              <Flex
                align="center"
                gap={4}
                fontSize="sm"
                color="rgba(255,255,255,0.6)"
              >
                <Text>Made with</Text>
                <Icon as={FaHeart} color="red.400" />
                <Text>by the Karpatri Dham Framework</Text>
              </Flex>
            </MotionFlex>
          </Container>
        </Box>
      </Box>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </>
  )
}

export default Footer 
