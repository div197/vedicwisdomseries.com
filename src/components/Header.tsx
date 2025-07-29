import React from 'react';
import { 
  Box, 
  Flex, 
  Image, 
  Link as ChakraLink, 
  HStack, 
  Container, 
  IconButton, 
  useDisclosure, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  DrawerHeader, 
  DrawerBody, 
  VStack,
  useBreakpointValue,
  Button,
  Text,
  Icon,
  Divider,
  useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { 
  FaChevronDown,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../siteConfig';
import useNavigationWithScroll from '../hooks/useNavigationWithScroll';
import { useHeroPageDetection } from '../hooks/useHeaderHeight';
import { PremiumButton } from './premium/PremiumButton';

// 🕉️ DIVINE CONFIGURATION-DRIVEN HEADER COMPONENT
// Following Nishkaam Karma Yoga principles - Zero hardcoding, infinite adaptability

// Custom hook for scroll detection
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return isScrolled;
};

// 🕉️ PREMIUM PHONE NUMBER COMPONENT - Configuration-driven with glassmorphism
const PhoneNumberBox: React.FC<{
  phone: {
    label: string;
    number: string;
    flagUrl: string;
    countryCode: string;
    displayBreakpoint: 'base' | 'sm' | 'md' | 'lg' | 'xl';
    enabled: boolean;
  };
}> = ({ phone }) => {
  const { topBar } = siteConfig.layout.header;
  
  if (!phone.enabled) return null;
  
  return (
    <Box
      bg="rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(10px)"
      color="white"
      px={{ base: 3, md: 4 }}
      py={{ base: 2, md: 2.5 }}
      borderRadius="full"
      display={{ base: phone.displayBreakpoint === 'base' ? 'flex' : 'none', [phone.displayBreakpoint]: 'flex' }}
      _hover={{ 
        bg: "rgba(255, 255, 255, 0.25)",
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255,255,255,0.15)'
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      minH={topBar.styling.phoneBoxMinHeight}
      alignItems="center"
    >
      <HStack spacing={3}>
        <Icon 
          as={FaPhone}
          color="kd.secondary"
          boxSize={{ base: "14px", md: "16px" }}
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
        <ChakraLink 
          href={`tel:${phone.number}`}
          _hover={{ color: "rgba(242,219,73,1)" }}
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "md" }}
          color="white"
          textShadow="0 1px 2px rgba(0,0,0,0.3)"
        >
          {phone.number}
        </ChakraLink>
      </HStack>
    </Box>
  );
};

// 🕉️ PREMIUM EMAIL COMPONENT - Configuration-driven with glassmorphism
const EmailBox: React.FC<{
  email: {
    label: string;
    address: string;
    enabled: boolean;
  };
}> = ({ email }) => {
  const { topBar } = siteConfig.layout.header;
  
  if (!email.enabled) return null;
  
  return (
    <Box
      bg="rgba(255, 255, 255, 0.15)"
      backdropFilter="blur(10px)"
      color="white"
      px={{ base: 3, md: 4 }}
      py={{ base: 2, md: 2.5 }}
      borderRadius="full"
      display="flex"
      _hover={{ 
        bg: "rgba(255, 255, 255, 0.25)",
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255,255,255,0.15)'
      }}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      minH={topBar.styling.phoneBoxMinHeight}
      alignItems="center"
    >
      <HStack spacing={3}>
        <Icon 
          as={FaEnvelope}
          color="kd.secondary"
          boxSize={{ base: "14px", md: "16px" }}
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
        />
        <ChakraLink 
          href={`mailto:${email.address}`}
          _hover={{ color: "rgba(242,219,73,1)" }}
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "md" }}
          color="white"
          textShadow="0 1px 2px rgba(0,0,0,0.3)"
        >
          {email.address}
        </ChakraLink>
      </HStack>
    </Box>
  );
};

// 🕉️ DIVINE ACTION BUTTON COMPONENT - Configuration-driven
const ActionButton: React.FC<{
  button: {
    text: string;
    icon: string;
    href: string;
    enabled: boolean;
    variant: 'solid' | 'outline' | 'ghost';
    size: 'xs' | 'sm' | 'md' | 'lg';
    colorScheme: string;
  };
  isPrimary?: boolean;
}> = ({ button, isPrimary = false }) => {
  const { navigateWithScroll } = useNavigationWithScroll();
  const { topBar } = siteConfig.layout.header;
  
  if (!button.enabled) return null;
  
  const handleClick = () => {
    navigateWithScroll(button.href);
  };
  
  if (isPrimary) {
    return (
      <Button
        size={button.size}
        bg="kd.text"
        color="kd.primary"
        _hover={{ 
          bg: "kd.secondary",
          color: "kd.secondaryContrast",
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
        }}
        _active={{ transform: 'translateY(0)' }}
        fontSize={{ base: "xs", md: "xs" }}
        fontWeight="bold"
        px={{ base: 3, md: 6 }}
        height={topBar.styling.buttonHeight}
        borderRadius={topBar.styling.buttonBorderRadius}
        border="2px solid"
        borderColor="kd.border"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        boxShadow="0 4px 15px rgba(0,0,0,0.1)"
        letterSpacing="0.5px"
        minW={topBar.styling.buttonMinWidth}
        onClick={handleClick}
      >
        {button.text}
      </Button>
    );
  }
  
  return (
    <Button
      size={button.size}
      variant={button.variant}
      borderColor="kd.border"
      borderWidth="2px"
      color="kd.text"
              bg="kd.hover"
      backdropFilter="blur(10px)"
      _hover={{ 
          bg: 'kd.text', 
          color: "kd.primary",
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(255,255,255,0.2)',
          borderColor: 'kd.border'
      }}
      _active={{ transform: 'translateY(0)' }}
      fontSize={{ base: "xs", md: "xs" }}
      fontWeight="bold"
      px={{ base: 3, md: 6 }}
      height={topBar.styling.buttonHeight}
      borderRadius={topBar.styling.buttonBorderRadius}
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      letterSpacing="0.5px"
      minW={topBar.styling.buttonMinWidth}
      onClick={handleClick}
    >
      {button.text}
    </Button>
  );
};

// 🕉️ PREMIUM NAVIGATION LINK COMPONENT - Configuration-driven with luxury styling
const NavLink = ({ to, children, onClick, hasDropdown = false }: { 
  to: string; 
  children: React.ReactNode; 
  onClick?: () => void;
  hasDropdown?: boolean;
}) => {
  const location = useLocation();
  const { navigateWithScroll } = useNavigationWithScroll();
  const isScrolled = useScrollDetection();
  const hasHero = useHeroPageDetection();
  const isActive = (path: string) => location.pathname === path;
  const { navigation } = siteConfig.layout.header;

  // PREMIUM COLOR SYSTEM - Enhanced with luxury gradients and glass effects
  const baseTextColor = hasHero 
    ? (isScrolled ? 'gray.700' : 'rgba(255, 255, 255, 0.95)')   // Hero page: bright white for visibility
    : 'gray.700';                                               // Non-hero page: professional dark
    
  const textColor = isActive(to) ? '#FF9933' : baseTextColor;  // Active items use primary orange
  const activeColor = '#FF9933';                               // Primary orange for active state
  const hoverColor = '#FFB366';                                 // Lighter orange for hover state

  const paddingX = useBreakpointValue({ base: 4, md: 5 });
  const paddingY = useBreakpointValue({ base: 2.5, md: 3 });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    
    navigateWithScroll(to, {
      scrollToTop: true,
      scrollDuration: 600,
      scrollEasing: 'easeInOut'
    });
  };

  return (
    <Flex align="center" position="relative">
      <ChakraLink
        href={to}
        onClick={handleClick}
        px={paddingX}
        py={paddingY}
        fontSize={navigation.fontSize}
        fontWeight={isActive(to) ? "600" : "500"}
        textTransform="uppercase"
        letterSpacing="0.75px"
        color={textColor}
        textShadow={hasHero && !isScrolled ? "2px 2px 8px rgba(0,0,0,0.6)" : "none"}
        borderRadius="full"
        position="relative"
        bg={isActive(to) 
          ? "linear-gradient(135deg, rgba(255,153,51,0.15), rgba(255,153,51,0.05))" 
          : "transparent"
        }
        backdropFilter={isActive(to) ? "blur(10px)" : "none"}
        border={isActive(to) 
          ? "1px solid rgba(255,153,51,0.3)" 
          : "1px solid transparent"
        }
        _hover={{
          textDecoration: 'none',
          color: hoverColor,
          transform: 'translateY(-2px)',
          bg: "linear-gradient(135deg, rgba(255,179,102,0.15), rgba(255,179,102,0.05))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,179,102,0.3)",
          boxShadow: "0 4px 20px rgba(255,153,51,0.15)"
        }}
        _after={isActive(to) ? {
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "3px",
          bg: "linear-gradient(90deg, #FF9933, #FFB366)",
          borderRadius: "full",
          boxShadow: "0 2px 8px rgba(255,153,51,0.4)"
        } : {}}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {children}
      </ChakraLink>
      {hasDropdown && (
        <Icon 
          as={FaChevronDown} 
          ml={2} 
          boxSize={3} 
          color={textColor}
          filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))"
          transition="all 0.3s ease"
        />
      )}
    </Flex>
  );
};

// 🕉️ DIVINE MOBILE ACTION BUTTON COMPONENT - Configuration-driven
const MobileActionButton: React.FC<{
  button: {
    text: string;
    icon: string;
    href: string;
    variant: 'solid' | 'outline' | 'ghost';
    colorScheme: string;
    enabled: boolean;
  };
  onClose: () => void;
}> = ({ button, onClose }) => {
  const { navigateWithScroll } = useNavigationWithScroll();
  
  if (!button.enabled) return null;
  
  const handleClick = () => {
    onClose();
    navigateWithScroll(button.href);
  };
  
  const isPrimary = button.variant === 'solid';
  
  return (
    <Button
      bg={isPrimary ? "kd.secondary" : "transparent"}
      color={isPrimary ? "white" : "kd.secondary"}
      variant={button.variant}
      borderColor={isPrimary ? "transparent" : "kd.secondary"}
      borderWidth="2px"
      _hover={{ 
        bg: isPrimary ? 'kd.secondaryDark' : 'kd.secondary', 
        color: isPrimary ? 'white' : 'white',
        transform: 'translateY(-2px)',
        boxShadow: 'lg'
      }}
      _active={{ transform: 'translateY(0)' }}
      size="md"
      mb={2}
      borderRadius="full"
      px={6}
      height="44px"
      fontWeight="bold"
      letterSpacing="0.5px"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      leftIcon={<Text>{button.icon}</Text>}
      onClick={handleClick}
    >
      {button.text}
    </Button>
  );
};

// 🕉️ MAIN DIVINE HEADER COMPONENT - Fully Configuration-Driven
const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { navigateWithScroll } = useNavigationWithScroll();
  const isScrolled = useScrollDetection();
  const hasHero = useHeroPageDetection();
  
  const { header } = siteConfig.layout;
  const { topBar, mainHeader } = header;
  const containerMaxW = useBreakpointValue({ base: 'full', sm: 'container.xl' });

  return (
    <Box
      as="header"
      role="banner"
      className="karpatridham-header"
      position={header.sticky ? "fixed" : "static"}
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.3s ease-in-out"
      pt="5px"
    >
      {/* 🕉️ DIVINE TOP CONTACT BAR - Configuration-driven */}
      {topBar.enabled && !isScrolled && (
        <Box 
          data-header-topbar
          bg={topBar.background}
          color={topBar.textColor}
          py={topBar.padding}
          fontSize="sm"
          fontWeight="medium"
        >
          <Container maxW={containerMaxW}>
            <Flex 
              justify="center" 
              align="center" 
              flexWrap="wrap"
              gap={{ base: 1, md: 0 }}
            >
              {/* Contact Information - Configuration-driven */}
              <HStack spacing={{ base: 4, md: 6 }} fontSize="xs" flexWrap="wrap" justify="center">
                {topBar.phoneNumbers.map((phone, index) => (
                  <PhoneNumberBox key={index} phone={phone} />
                ))}
                <EmailBox email={topBar.emailAddress} />
              </HStack>
            </Flex>
          </Container>
        </Box>
      )}

      {/* 🕉️ PREMIUM MAIN HEADER - Configuration-driven with glassmorphism */}
      <Box
        data-header-main
        bg={hasHero && mainHeader.transparentOnHero
          ? (isScrolled 
            ? "rgba(255, 255, 255, 0.95)" 
            : "transparent")
          : "rgba(255, 255, 255, 0.95)"
        }
        backdropFilter={mainHeader.blurEffect 
          ? (hasHero 
            ? (isScrolled ? "blur(20px) saturate(180%)" : "none")
            : "blur(20px) saturate(180%)")
          : "none"
        }
        borderBottom={mainHeader.borderOnScroll 
          ? (hasHero 
            ? (isScrolled ? "1px solid rgba(255,153,51,0.15)" : "none")
            : "1px solid rgba(255,153,51,0.15)")
          : "none"
        }
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        py={isScrolled ? { base: 2, md: 3 } : header.padding.vertical}
        boxShadow={mainHeader.shadowOnScroll 
          ? (hasHero 
            ? (isScrolled ? "0 8px 32px rgba(0,0,0,0.08)" : "none")
            : "0 8px 32px rgba(0,0,0,0.08)")
          : "none"
        }
      >
        <Container maxW={containerMaxW}>
          <Flex align="center" justify="space-between">
            {/* 🕉️ DIVINE LOGO - Configuration-driven */}
            {header.showLogo && (
              <ChakraLink 
                href="/" 
                onClick={(e) => {
                  e.preventDefault();
                  navigateWithScroll('/', {
                    scrollToTop: true,
                    scrollDuration: 600,
                    scrollEasing: 'easeInOut'
                  });
                }}
                _hover={{ 
                  textDecoration: 'none', 
                  transform: `scale(${mainHeader.logo.hoverScale})` 
                }}
                transition="transform 0.2s ease"
              >
                <Image
                  src={siteConfig.assets.logo.header}
                  alt={`${siteConfig.siteName} Logo`}
                  height={mainHeader.logo.height}
                  maxWidth={{ base: "85px", md: "95px" }}
                  width="auto"
                  objectFit="contain"
                  loading="eager"
                  fallback={
                    <Box
                      height={mainHeader.logo.height}
                      width="180px"
                      bg="kd.secondary"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      {siteConfig.siteName}
                    </Box>
                  }
                />
              </ChakraLink>
            )}

            {/* 🕉️ DIVINE DESKTOP NAVIGATION - Configuration-driven */}
            {header.showNavigation && (
              <HStack 
                as="nav"
                spacing={header.navigation.spacing}
                display={{ base: 'none', [header.mobileBreakpoint]: 'flex' }}
                align="center"
              >
                {siteConfig.navigation.main.map((item) => (
                  <NavLink key={item.href} to={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </HStack>
            )}

            {/* 🕉️ PREMIUM MOBILE MENU BUTTON - Configuration-driven with glass effect */}
            <IconButton
              display={{ base: 'flex', [header.mobileBreakpoint]: 'none' }}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open navigation menu"
              icon={<HamburgerIcon boxSize={5} />}
              size="lg"
              minW="48px"
              minH="48px"
              borderRadius="full"
              color={hasHero 
                ? (isScrolled ? "gray.700" : "white")
                : "gray.700"
              }
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
                color: hasHero && !isScrolled ? "white" : "primary.600",
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            />
          </Flex>
        </Container>
      </Box>

      {/* 🕉️ PREMIUM MOBILE DRAWER - Configuration-driven with luxury design */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={mainHeader.mobileMenu.drawerSize}>
        <DrawerOverlay bg="blackAlpha.600" backdropFilter="blur(8px)" />
        <DrawerContent 
          bg="rgba(255, 255, 255, 0.95)"
          backdropFilter="blur(20px) saturate(180%)"
          borderLeft="1px solid rgba(255,153,51,0.15)"
        >
          <DrawerCloseButton 
            color="gray.600" 
            size="lg"
            borderRadius="full"
            _hover={{
              bg: "rgba(255,153,51,0.1)",
              color: "primary.600",
              transform: "scale(1.1)"
            }}
            transition="all 0.2s ease"
          />
          <DrawerHeader 
            borderBottomWidth="1px" 
            borderBottomColor="rgba(255,153,51,0.15)"
            bg="linear-gradient(135deg, rgba(255,153,51,0.05), rgba(30,144,255,0.03))"
            backdropFilter="blur(10px)"
          >
            <Text fontWeight="600" fontSize="lg" color="gray.700">
              {mainHeader.mobileMenu.headerText}
            </Text>
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack spacing={3} align="stretch">
              {siteConfig.navigation.main.map((item) => (
                <Box 
                  key={item.href} 
                  py={3} 
                  px={4} 
                  borderRadius="xl" 
                  bg="rgba(255,255,255,0.5)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255,153,51,0.1)"
                  _hover={{ 
                    bg: "rgba(255,153,51,0.1)",
                    borderColor: "rgba(255,153,51,0.2)",
                    transform: "translateX(4px)"
                  }} 
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                >
                  <NavLink to={item.href} onClick={onClose}>
                    <HStack spacing={3}>
                      <Text fontSize="lg">🕉️</Text>
                      <Text fontWeight="500" color="gray.700">{item.label}</Text>
                    </HStack>
                  </NavLink>
                </Box>
              ))}
            </VStack>
              
            <Divider my={6} borderColor="rgba(255,153,51,0.2)" />
            
            {/* Configuration-driven mobile action buttons */}
            {mainHeader.mobileMenu.actionButtons.map((button, index) => (
              <MobileActionButton key={index} button={button} onClose={onClose} />
            ))}
            
            {/* Premium contact info */}
            {mainHeader.mobileMenu.showContactInfo && (
              <Box 
                mt={6} 
                p={4} 
                bg="linear-gradient(135deg, rgba(255,153,51,0.08), rgba(30,144,255,0.05))"
                backdropFilter="blur(10px)"
                borderRadius="xl" 
                border="1px solid rgba(255,153,51,0.15)"
              >
                <Text fontSize="sm" fontWeight="600" mb={3} color="gray.700">
                  📞 Quick Contact
                </Text>
                <VStack spacing={3} align="stretch">
                  {topBar.phoneNumbers.filter(phone => phone.enabled).map((phone, index) => (
                    <ChakraLink 
                      key={index}
                      href={`tel:${phone.number}`} 
                      fontSize="sm" 
                      color="primary.600" 
                      display="flex" 
                      alignItems="center" 
                      gap={3}
                      p={2}
                      borderRadius="lg"
                      _hover={{
                        bg: "rgba(255,153,51,0.1)",
                        transform: "translateX(2px)"
                      }}
                      transition="all 0.2s ease"
                    >
                      <Image src={phone.flagUrl} alt={`${phone.countryCode} Flag`} width="20px" height="15px" borderRadius="4px" />
                      <Text fontWeight="500">{phone.label}: {phone.number}</Text>
                    </ChakraLink>
                  ))}
                  {siteConfig.contact.email && (
                    <ChakraLink 
                      href={`mailto:${siteConfig.contact.email}`} 
                      fontSize="sm" 
                      color="primary.600"
                      p={2}
                      borderRadius="lg"
                      _hover={{
                        bg: "rgba(255,153,51,0.1)",
                        transform: "translateX(2px)"
                      }}
                      transition="all 0.2s ease"
                    >
                      <HStack spacing={2}>
                        <Text fontSize="md">✉️</Text>
                        <Text fontWeight="500">{siteConfig.contact.email}</Text>
                      </HStack>
                    </ChakraLink>
                  )}
                </VStack>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header; 
