import React from 'react'
import {
  Box,
  Flex,
  Link as ChakraLink,
  HStack,
  VStack,
  Container,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useBreakpointValue,
  Text,
  Icon,
  Divider,
  Badge,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import {
  FaHome,
  FaBookOpen,
  FaUser,
  FaStar,
  FaEnvelope,
  FaPhone,
  FaOm,
  FaArrowRight,
} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../siteConfig'
import useNavigationWithScroll from '../hooks/useNavigationWithScroll'
import { useHeroPageDetection } from '../hooks/useHeaderHeight'
import { PremiumButton, PremiumCard } from './premium'

// 🕉️ STATE-OF-THE-ART HEADER COMPONENT 2025
// Premium glassmorphism design with mobile-first approach

const MotionBox = motion(Box)

// Custom hook for advanced scroll detection with performance optimization
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0)
  
  React.useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          setScrollY(scrollTop)
          setIsScrolled(scrollTop > 80)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return { isScrolled, scrollY }
}

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

// Premium Navigation Link with advanced glassmorphism
const NavLink = ({ 
  to, 
  children, 
  onClick, 
  isMobile = false 
}: { 
  to: string
  children: React.ReactNode
  onClick?: () => void
  isMobile?: boolean
}) => {
  const location = useLocation()
  const { navigateWithScroll } = useNavigationWithScroll()
  const { isScrolled } = useScrollDetection()
  const hasHero = useHeroPageDetection()
  const isActive = location.pathname === to
  const IconComponent = getNavIcon(to)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) onClick()
    
    navigateWithScroll(to, {
      scrollToTop: true,
      scrollDuration: 600,
      scrollEasing: 'easeInOut'
    })
  }

  if (isMobile) {
    return (
      <MotionBox
        whileHover={{ x: 8 }}
        whileTap={{ scale: 0.98 }}
        w="full"
      >
        <Flex
          as={ChakraLink}
          href={to}
          onClick={handleClick}
          align="center"
          p={4}
          borderRadius="16px"
          bg={isActive 
            ? "linear-gradient(135deg, rgba(255,153,51,0.2), rgba(255,153,51,0.1))"
            : "rgba(255,255,255,0.05)"
          }
          backdropFilter="blur(20px)"
          border="1px solid"
          borderColor={isActive ? "rgba(255,153,51,0.3)" : "rgba(255,255,255,0.1)"}
          _hover={{
            bg: "linear-gradient(135deg, rgba(255,153,51,0.15), rgba(30,144,255,0.1))",
            borderColor: "rgba(255,153,51,0.4)",
            textDecoration: "none",
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        >
          <Flex
            align="center"
            justify="center"
            w="40px"
            h="40px"
            borderRadius="12px"
            bg={isActive ? "kd.primary" : "rgba(255,255,255,0.1)"}
            color={isActive ? "white" : "kd.primary"}
            mr={3}
          >
            <Icon as={IconComponent} boxSize={5} />
          </Flex>
          <Text
            color={isActive ? "kd.primary" : "white"}
            fontSize="md"
            fontWeight={isActive ? "600" : "500"}
            letterSpacing="0.5px"
          >
            {children}
          </Text>
          {isActive && (
            <Badge
              ml="auto"
              colorScheme="orange"
              variant="solid"
              borderRadius="full"
              px={2}
              py={1}
              fontSize="xs"
            >
              Active
            </Badge>
          )}
        </Flex>
      </MotionBox>
    )
  }

  // Desktop Navigation Link
  const textColor = hasHero 
    ? (isScrolled ? 'gray.700' : 'white')
    : 'gray.700'

  return (
    <MotionBox
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <ChakraLink
        href={to}
        onClick={handleClick}
        px={{ base: 4, md: 6 }}
        py={3}
        fontSize="sm"
        fontWeight={isActive ? "600" : "500"}
        textTransform="uppercase"
        letterSpacing="1px"
        color={isActive ? "kd.primary" : textColor}
        borderRadius="full"
        position="relative"
        bg={isActive 
          ? "linear-gradient(135deg, rgba(255,153,51,0.15), rgba(255,153,51,0.05))"
          : "transparent"
        }
        backdropFilter={isActive ? "blur(20px)" : "none"}
        border="1px solid"
        borderColor={isActive ? "rgba(255,153,51,0.3)" : "transparent"}
        _hover={{
          textDecoration: 'none',
          color: "kd.primary",
          bg: "linear-gradient(135deg, rgba(255,153,51,0.1), rgba(30,144,255,0.05))",
          backdropFilter: "blur(20px)",
          borderColor: "rgba(255,153,51,0.2)",
          boxShadow: "0 8px 32px rgba(255,153,51,0.2)"
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {children}
        {isActive && (
          <Box
            position="absolute"
            bottom="-2px"
            left="50%"
            transform="translateX(-50%)"
            w="80%"
            h="2px"
            bg="linear-gradient(90deg, transparent, kd.primary, transparent)"
            borderRadius="full"
          />
        )}
      </ChakraLink>
    </MotionBox>
  )
}

// Premium Mobile Menu Component
const MobileMenu = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean
  onClose: () => void 
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(8px)" />
      <DrawerContent
        bg="linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 100%)"
        backdropFilter="blur(40px) saturate(180%)"
        borderLeft="1px solid rgba(255,153,51,0.2)"
      >
        <DrawerHeader
          borderBottomWidth="1px"
          borderBottomColor="rgba(255,153,51,0.2)"
          bg="linear-gradient(135deg, rgba(255,153,51,0.1), rgba(30,144,255,0.05))"
          position="relative"
          overflow="hidden"
        >
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Icon as={FaOm} color="kd.primary" boxSize={6} mr={3} />
              <Text color="white" fontSize="lg" fontWeight="600">
                {siteConfig.siteName}
              </Text>
            </Flex>
            <IconButton
              aria-label="Close menu"
              icon={<CloseIcon />}
              variant="ghost"
              color="white"
              size="md"
              onClick={onClose}
              borderRadius="full"
              _hover={{
                bg: "rgba(255,153,51,0.2)",
                transform: "scale(1.1)"
              }}
            />
          </Flex>
          {/* Decorative gradient line */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            h="1px"
            bg="linear-gradient(90deg, transparent, kd.primary, transparent)"
          />
        </DrawerHeader>

        <DrawerBody py={6} px={4}>
          <VStack spacing={3} align="stretch">
            {siteConfig.navigation.main.map((item, index) => (
              <MotionBox
                key={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink to={item.href} onClick={onClose} isMobile>
                  {item.label}
                </NavLink>
              </MotionBox>
            ))}
          </VStack>

          <Divider 
            my={8} 
            borderColor="rgba(255,153,51,0.3)" 
            opacity={0.6}
          />

          {/* Premium CTA Button */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <PremiumButton
              variant="premium"
              size="lg"
              w="full"
              rightIcon={<FaArrowRight />}
              onClick={() => {
                onClose()
                window.location.href = siteConfig.content.universalCTA.primary.href
              }}
            >
              {siteConfig.content.universalCTA.primary.text}
            </PremiumButton>
          </MotionBox>

          {/* Contact Info Card */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            mt={6}
          >
            <PremiumCard variant="glass" p={4}>
              <VStack spacing={3} align="start">
                <Text color="white" fontSize="sm" fontWeight="600" opacity={0.9}>
                  Quick Contact
                </Text>
                {siteConfig.contact.email && (
                  <Flex align="center">
                    <Icon as={FaEnvelope} color="kd.primary" mr={3} />
                    <ChakraLink
                      href={`mailto:${siteConfig.contact.email}`}
                      color="white"
                      fontSize="sm"
                      _hover={{ color: "kd.primary" }}
                    >
                      {siteConfig.contact.email}
                    </ChakraLink>
                  </Flex>
                )}
                {siteConfig.contact.phone && (
                  <Flex align="center">
                    <Icon as={FaPhone} color="kd.primary" mr={3} />
                    <ChakraLink
                      href={`tel:${siteConfig.contact.phone}`}
                      color="white"
                      fontSize="sm"
                      _hover={{ color: "kd.primary" }}
                    >
                      {siteConfig.contact.phone}
                    </ChakraLink>
                  </Flex>
                )}
              </VStack>
            </PremiumCard>
          </MotionBox>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

// Main Header Component
const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { navigateWithScroll } = useNavigationWithScroll()
  const { isScrolled } = useScrollDetection()
  const hasHero = useHeroPageDetection()
  
  const containerMaxW = useBreakpointValue({ 
    base: 'full', 
    sm: 'container.xl' 
  })

  // Dynamic header styling based on scroll and page type
  const headerBg = hasHero
    ? (isScrolled 
        ? "rgba(255, 255, 255, 0.95)"
        : "transparent")
    : "rgba(255, 255, 255, 0.95)"

  const headerBlur = hasHero
    ? (isScrolled ? "blur(20px) saturate(180%)" : "none")
    : "blur(20px) saturate(180%)"

  const headerShadow = isScrolled || !hasHero
    ? "0 8px 32px rgba(0,0,0,0.08)"
    : "none"

  const headerBorder = isScrolled || !hasHero
    ? "1px solid rgba(255,153,51,0.15)"
    : "none"

  return (
    <MotionBox
      as="header"
      role="banner"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={headerBg}
      backdropFilter={headerBlur}
      borderBottom={headerBorder}
      boxShadow={headerShadow}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      py={isScrolled ? { base: 2, md: 3 } : { base: 3, md: 4 }}
    >
      <Container maxW={containerMaxW}>
        <Flex align="center" justify="space-between">
          {/* Logo Section */}
          <MotionBox
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChakraLink
              href="/"
              onClick={(e) => {
                e.preventDefault()
                navigateWithScroll('/', {
                  scrollToTop: true,
                  scrollDuration: 600,
                  scrollEasing: 'easeInOut'
                })
              }}
              _hover={{ textDecoration: 'none' }}
            >
              <Flex align="center">
                <Icon
                  as={FaOm}
                  color="kd.primary"
                  boxSize={{ base: 8, md: 10 }}
                  mr={3}
                  filter="drop-shadow(0 2px 8px rgba(255,153,51,0.3))"
                />
                <Box>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight="700"
                    color={hasHero && !isScrolled ? "white" : "gray.800"}
                    lineHeight="1"
                    textShadow={hasHero && !isScrolled 
                      ? "2px 2px 4px rgba(0,0,0,0.3)" 
                      : "none"
                    }
                  >
                    Vedic Wisdom
                  </Text>
                  <Text
                    fontSize="xs"
                    color={hasHero && !isScrolled ? "rgba(255,255,255,0.8)" : "gray.600"}
                    fontWeight="500"
                    letterSpacing="2px"
                    textTransform="uppercase"
                  >
                    Series
                  </Text>
                </Box>
              </Flex>
            </ChakraLink>
          </MotionBox>

          {/* Desktop Navigation */}
          <HStack
            as="nav"
            spacing={2}
            display={{ base: 'none', lg: 'flex' }}
            align="center"
          >
            {siteConfig.navigation.main.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </HStack>

          {/* Desktop CTA Button */}
          <Box display={{ base: 'none', lg: 'block' }}>
            <PremiumButton
              variant="premium"
              size="md"
              rightIcon={<FaArrowRight />}
              onClick={() => {
                window.location.href = siteConfig.content.universalCTA.primary.href
              }}
            >
              Explore Teachings
            </PremiumButton>
          </Box>

          {/* Mobile Menu Button */}
          <MotionBox
            display={{ base: 'block', lg: 'none' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <IconButton
              onClick={onOpen}
              variant="ghost"
              aria-label="Open navigation menu"
              icon={<HamburgerIcon boxSize={6} />}
              size="lg"
              minW="48px"
              minH="48px"
              borderRadius="full"
              color={hasHero && !isScrolled ? "white" : "gray.700"}
              bg={hasHero && !isScrolled 
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,153,51,0.1)"
              }
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor={hasHero && !isScrolled 
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,153,51,0.2)"
              }
              _hover={{
                bg: hasHero && !isScrolled 
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(255,153,51,0.15)",
                borderColor: "rgba(255,153,51,0.4)",
                boxShadow: "0 8px 25px rgba(255,153,51,0.3)"
              }}
              _active={{
                transform: "scale(0.95)"
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            />
          </MotionBox>
        </Flex>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </MotionBox>
  )
}

export default Header 
