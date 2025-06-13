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
  Divider
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

// 🕉️ DIVINE PHONE NUMBER COMPONENT - Configuration-driven
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
      bg={topBar.styling.phoneBoxBackground}
      color="white"
      px={{ base: 2, md: 3 }}
      py={{ base: 1.5, md: 2 }}
      borderRadius={topBar.styling.phoneBoxBorderRadius}
      display={{ base: phone.displayBreakpoint === 'base' ? 'flex' : 'none', [phone.displayBreakpoint]: 'flex' }}
      _hover={{ 
        bg: topBar.styling.phoneBoxHoverBackground,
        transform: 'translateY(-1px)',
        boxShadow: 'md'
      }}
      transition="all 0.2s ease"
      border="1px solid"
      borderColor={topBar.styling.phoneBoxBorderColor}
      minH={topBar.styling.phoneBoxMinHeight}
      alignItems="center"
    >
      <HStack spacing={3}>
        <Icon 
          as={FaPhone}
          color="kd.secondary"
          boxSize={{ base: "14px", md: "16px" }}
        />
        <ChakraLink 
          href={`tel:${phone.number}`}
          _hover={{ color: "kd.secondary" }}
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "md" }}
          color="white"
        >
          {phone.number}
        </ChakraLink>
      </HStack>
    </Box>
  );
};

// 🕉️ DIVINE EMAIL COMPONENT - Configuration-driven
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
      bg={topBar.styling.phoneBoxBackground}
      color="white"
      px={{ base: 2, md: 3 }}
      py={{ base: 1.5, md: 2 }}
      borderRadius={topBar.styling.phoneBoxBorderRadius}
      display="flex"
      _hover={{ 
        bg: topBar.styling.phoneBoxHoverBackground,
        transform: 'translateY(-1px)',
        boxShadow: 'md'
      }}
      transition="all 0.2s ease"
      border="1px solid"
      borderColor={topBar.styling.phoneBoxBorderColor}
      minH={topBar.styling.phoneBoxMinHeight}
      alignItems="center"
    >
      <HStack spacing={3}>
        <Icon 
          as={FaEnvelope}
          color="kd.secondary"
          boxSize={{ base: "14px", md: "16px" }}
        />
        <ChakraLink 
          href={`mailto:${email.address}`}
          _hover={{ color: "kd.secondary" }}
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "md" }}
          color="white"
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

// 🕉️ DIVINE NAVIGATION LINK COMPONENT - Configuration-driven
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

  // DIVINE COLOR SYSTEM - Enhanced with Footer-inspired professional styling
  // Following the sophisticated approach from Footer component
  const baseTextColor = hasHero 
    ? (isScrolled ? 'kd.text' : 'rgba(255, 255, 255, 0.95)')   // Hero page: bright white for visibility
    : 'kd.text';                                               // Non-hero page: always kd.text
    
  const textColor = isActive(to) ? '#FFD700' : baseTextColor;  // Active items use bright golden color
  const activeColor = '#FFD700';                               // Bright golden for active state
  const hoverColor = '#FFC107';                                // Slightly different golden for hover state

  const paddingX = useBreakpointValue({ base: 3, md: 4 });
  const paddingY = useBreakpointValue({ base: 2, md: 3 });

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
        fontWeight={isActive(to) ? "bold" : navigation.fontWeight}
        textTransform="uppercase"
        letterSpacing="0.5px"
        color={textColor}
        textShadow={hasHero && !isScrolled ? "2px 2px 4px rgba(0,0,0,0.8)" : "none"}
        borderRadius="md"
        position="relative"
        bg={isActive(to) ? "rgba(255, 215, 0, 0.15)" : "transparent"}
        border={isActive(to) ? "1px solid rgba(255, 215, 0, 0.3)" : "1px solid transparent"}
        _hover={{
          textDecoration: 'none',
          color: hoverColor,
          transform: 'translateY(-2px)',
          bg: "rgba(255, 193, 7, 0.1)",
          border: "1px solid rgba(255, 193, 7, 0.2)"
        }}
        _after={isActive(to) ? {
          content: '""',
          position: "absolute",
          bottom: "-2px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "3px",
          bg: "#FFD700",
          borderRadius: "full",
          boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)"
        } : {}}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {children}
      </ChakraLink>
      {hasDropdown && (
        <Icon 
          as={FaChevronDown} 
          ml={1} 
          boxSize={3} 
          color={textColor}
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

      {/* 🕉️ DIVINE MAIN HEADER - Configuration-driven transparent/opaque design */}
      <Box
        bg={hasHero && mainHeader.transparentOnHero
          ? "transparent"
          : "kd.surface"
        }
        backdropFilter={mainHeader.blurEffect 
          ? (hasHero 
            ? (isScrolled ? "blur(20px)" : "none")
            : "blur(20px)")
          : "none"
        }
        borderBottom={mainHeader.borderOnScroll 
          ? (hasHero 
            ? (isScrolled ? "1px solid rgba(227, 87, 35, 0.1)" : "none")
            : "1px solid rgba(227, 87, 35, 0.1)")
          : "none"
        }
        transition="all 0.3s ease-in-out"
        py={isScrolled ? { base: 2, md: 3 } : header.padding.vertical}
        boxShadow={mainHeader.shadowOnScroll 
          ? (hasHero 
            ? (isScrolled ? "0 2px 20px rgba(227, 87, 35, 0.08)" : "none")
            : "0 2px 20px rgba(227, 87, 35, 0.08)")
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

            {/* 🕉️ DIVINE MOBILE MENU BUTTON - Configuration-driven touch target */}
            <IconButton
              display={{ base: 'flex', [header.mobileBreakpoint]: 'none' }}
              onClick={onOpen}
              variant="ghost"
              aria-label="Open navigation menu"
              icon={<HamburgerIcon />}
              size="lg"
              minW="44px"
              minH="44px"
              color={hasHero 
                ? (isScrolled ? "kd.text" : "kd.textInverted")
                : "kd.text"
              }
              _hover={{
                bg: 'rgba(227, 87, 35, 0.1)',
                color: "kd.secondary",
                transform: 'scale(1.1)'
              }}
              transition="all 0.2s ease"
            />
          </Flex>
        </Container>
      </Box>

      {/* 🕉️ DIVINE MOBILE DRAWER - Configuration-driven */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={mainHeader.mobileMenu.drawerSize}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton color="kd.text" />
          <DrawerHeader 
            borderBottomWidth="1px" 
            borderBottomColor="kd.border"
            bg={topBar.background}
            color={topBar.textColor}
          >
            <Text fontWeight="bold" fontSize="lg">
              {mainHeader.mobileMenu.headerText}
            </Text>
          </DrawerHeader>

          <DrawerBody py={6}>
            <VStack spacing={4} align="stretch">
              {siteConfig.navigation.main.map((item) => (
                <Box key={item.href} py={2} px={3} borderRadius="lg" _hover={{ bg: "kd.hover" }} transition="all 0.2s ease">
                  <NavLink to={item.href} onClick={onClose}>
                    🕉️ {item.label}
                  </NavLink>
                </Box>
              ))}
            </VStack>
              
            <Divider my={4} />
            
            {/* Configuration-driven mobile action buttons */}
            {mainHeader.mobileMenu.actionButtons.map((button, index) => (
              <MobileActionButton key={index} button={button} onClose={onClose} />
            ))}
            
            {/* Configuration-driven contact info */}
            {mainHeader.mobileMenu.showContactInfo && (
              <Box mt={6} p={4} bg="kd.surfaceElevated" borderRadius="md">
                <Text fontSize="sm" fontWeight="semibold" mb={2} color="kd.text">
                  📞 Quick Contact
                </Text>
                <VStack spacing={2} align="stretch">
                  {topBar.phoneNumbers.filter(phone => phone.enabled).map((phone, index) => (
                    <ChakraLink 
                      key={index}
                      href={`tel:${phone.number}`} 
                      fontSize="xs" 
                      color="kd.secondary" 
                      display="flex" 
                      alignItems="center" 
                      gap={2}
                    >
                      <Image src={phone.flagUrl} alt={`${phone.countryCode} Flag`} width="20px" height="15px" borderRadius="2px" />
                      {phone.label}: {phone.number}
                    </ChakraLink>
                  ))}
                  {siteConfig.contact.email && (
                    <ChakraLink href={`mailto:${siteConfig.contact.email}`} fontSize="xs" color="kd.secondary">
                      ✉️ {siteConfig.contact.email}
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
