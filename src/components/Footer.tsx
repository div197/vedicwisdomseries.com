import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  SimpleGrid,
  Heading,
  useColorModeValue,
  HStack,
  Icon,
  VStack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaHome,
  FaGraduationCap,
  FaBuilding,
  FaUserGraduate,
  FaNewspaper,
  FaImages,
  FaPhone,
  FaInfoCircle,
  FaChevronRight,
  FaCertificate,
  FaBook,
  FaOm,
} from 'react-icons/fa';
import { siteConfig } from '../siteConfig';
import { PremiumCard } from './premium/PremiumCard';

// Icon mapping for navigation links
const getNavIcon = (href: string) => {
  if (href === '/') return FaHome;
  if (href === '/about') return FaInfoCircle;
  if (href === '/teachings' || href === '/products') return FaGraduationCap;
  if (href === '/testimonials' || href === '/quality') return FaCertificate;
  if (href === '/contact') return FaPhone;
  if (href === '/categories') return FaUserGraduate;
  if (href === '/gallery') return FaImages;
  // Spiritual teaching category icons
  if (href.includes('teachings')) return FaGraduationCap;
  if (href.includes('discourses')) return FaBook;
  if (href.includes('chanting')) return FaOm;
  if (href.includes('teacher-training')) return FaUserGraduate;
  return FaGraduationCap; // Default for spiritual teachings
};

// Enhanced Social Media Icon Component with Official Brand Colors
const SocialMediaIcon = ({ platform, href, icon: IconComponent, color, hoverColor }: { 
  platform: string; 
  href: string; 
  icon: React.ComponentType<any>;
  color?: string;
  hoverColor?: string;
}) => {
  const footerConfig = siteConfig.layout.footer;
  const iconSize = useBreakpointValue({
    base: footerConfig.socialMedia.iconSize.mobile,
    md: footerConfig.socialMedia.iconSize.desktop
  });

  // Official Brand Colors - Clean and Professional
  const getBrandColors = (platformName: string) => {
    const colors = {
      'YouTube': { bg: '#FF0000', hover: '#CC0000' },
      'Instagram': { bg: '#E4405F', hover: '#C13584' },
      'Facebook': { bg: '#1877F2', hover: '#0F5DBE' },
      'WhatsApp': { bg: '#25D366', hover: '#1DA851' },
      'LinkedIn': { bg: '#0A66C2', hover: '#004182' },
      'Twitter': { bg: '#1DA1F2', hover: '#0C85D0' },
    };
    return colors[platformName as keyof typeof colors] || { bg: 'kd.primary', hover: 'kd.secondary' };
  };

  const brandColors = getBrandColors(platform);
  const finalBg = color || brandColors.bg;
  const finalHover = hoverColor || brandColors.hover;

  return (
    <Box
      as={Link}
      href={href}
      isExternal
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="44px"
      h="44px"
      borderRadius="10px"
      bg={finalBg}
      color="white"
      position="relative"
      overflow="hidden"
      boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
      border="1px solid"
      borderColor="kd.border"
      _hover={{ 
        bg: finalHover,
        transform: 'translateY(-2px)',
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        borderColor: 'kd.borderHover',
      }}
      transition="all 0.3s ease"
      aria-label={`Follow us on ${platform}`}
    >
      <Icon 
        as={IconComponent} 
        boxSize={iconSize} 
        color="white"
      />
    </Box>
  );
};

// Enhanced Navigation Link Component with Better Icons
const FooterNavLink = ({ to, children, icon }: { 
  to: string; 
  children: React.ReactNode; 
  icon?: React.ComponentType<any> 
}) => {
  const footerConfig = siteConfig.layout.footer;
  const fontSize = useBreakpointValue({
    base: footerConfig.typography.links.fontSize.mobile,
    md: footerConfig.typography.links.fontSize.desktop
  });
  
  return (
    <Flex 
      as={RouterLink}
      to={to}
      align="center" 
      w="full"
      p={3}
      borderRadius="12px"
      color="white"
      fontSize={fontSize}
      fontWeight={footerConfig.typography.links.fontWeight}
      lineHeight={footerConfig.typography.links.lineHeight}
      border="1px solid transparent"
      _hover={{ 
        bg: "rgba(230, 184, 0, 0.1)",
        borderColor: "kd.tertiary",
        color: "white",
        transform: 'translateX(6px)',
        boxShadow: "0 4px 12px rgba(230, 184, 0, 0.2)",
        '& .nav-icon-container': {
          bg: "kd.secondary",
          boxShadow: "0 4px 12px rgba(227, 87, 35, 0.4)",
          transform: 'scale(1.1)',
        },
        '& .nav-icon': {
          color: "white",
          transform: 'scale(1.1)',
        },
        '& .chevron-icon': {
          opacity: 1,
          transform: 'translateX(6px)',
          color: "kd.tertiary"
        }
      }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      role="group"
    >
      {icon && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          borderRadius="10px"
          bg="kd.tertiary"
          mr={3}
          className="nav-icon-container"
          transition="all 0.3s ease"
          boxShadow="0 2px 8px rgba(230, 184, 0, 0.3)"
        >
          <Icon 
            as={icon} 
            boxSize={5} 
            color="white"
            className="nav-icon"
            transition="all 0.3s ease"
          />
        </Box>
      )}
      <Text 
        flex={1}
        fontFamily="body"
        noOfLines={1}
        color="kd.text"
        fontWeight="medium"
      >
        {children}
      </Text>
      <Icon 
        as={FaChevronRight} 
        boxSize={3} 
        color="kd.textMuted"
        opacity={0}
        className="chevron-icon"
        transition="all 0.3s ease"
      />
    </Flex>
  );
};

const Footer: React.FC = () => {
  // Configuration-driven layout
  const footerConfig = siteConfig.layout.footer;
  const contactInfo = siteConfig.contact;

  // Responsive spacing from configuration
  const cardSpacing = useBreakpointValue({
    base: footerConfig.styling.cardSpacing.mobile,
    md: footerConfig.styling.cardSpacing.desktop
  });
  
  const cardPadding = useBreakpointValue({
    base: footerConfig.styling.cardPadding.mobile,
    md: footerConfig.styling.cardPadding.desktop
  });

  const socialSpacing = useBreakpointValue({
    base: footerConfig.socialMedia.spacing.mobile,
    md: footerConfig.socialMedia.spacing.desktop
  });

  const sectionPadding = useBreakpointValue({
    base: footerConfig.spacing.sectionPadding.mobile,
    md: footerConfig.spacing.sectionPadding.desktop
  });

  const bottomPadding = useBreakpointValue({
    base: footerConfig.spacing.bottomPadding.mobile,
    md: footerConfig.spacing.bottomPadding.desktop
  });

  // Typography from configuration
  const headingFontSize = useBreakpointValue({
    base: footerConfig.typography.headings.fontSize.mobile,
    md: footerConfig.typography.headings.fontSize.desktop
  });

  const bodyFontSize = useBreakpointValue({
    base: footerConfig.typography.body.fontSize.mobile,
    md: footerConfig.typography.body.fontSize.desktop
  });

  const copyrightFontSize = useBreakpointValue({
    base: footerConfig.typography.copyright.fontSize.mobile,
    md: footerConfig.typography.copyright.fontSize.desktop
  });

  // Filter enabled social links
  const enabledSocialLinks = contactInfo.socialLinks.filter(link => link.enabled);

  return (
    <Box
      position="relative"
      overflow="hidden"
      bg={useColorModeValue(
        siteConfig.theme.layout.footer.background.light,
        siteConfig.theme.layout.footer.background.dark
      )}
      color="kd.text"
      className="site-footer"
    >
      {/* Subtle Pattern Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={0.03}
        bgImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px)"
        bgSize="60px 60px"
      />
      
      <Container maxW="container.xl" py={sectionPadding} position="relative">
        <SimpleGrid 
          columns={{ 
            base: footerConfig.columns.mobile, 
            md: footerConfig.columns.tablet, 
            lg: footerConfig.columns.desktop 
          }} 
          spacing={cardSpacing}
        >
          {/* About Section */}
          {footerConfig.showAboutSection && (
            <PremiumCard
              variant="glass"
              premium={true}
              p={cardPadding}
            >
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h3" 
                  fontSize={headingFontSize}
                  color="kd.heading" 
                  fontWeight="bold"
                  lineHeight="1.25"
                  letterSpacing="-0.025em"
                  fontFamily="heading"
                >
                  About {siteConfig.siteName}
                </Heading>
                <Text 
                  fontSize={bodyFontSize}
                  color="kd.text" 
                  lineHeight="1.75"
                  letterSpacing="0"
                  fontWeight="normal"
                  fontFamily="body"
                >
                  {siteConfig.siteDescription}
                </Text>
                
                {/* Social Links with Official Colors */}
                {footerConfig.showSocialLinks && enabledSocialLinks.length > 0 && (
                  <Box w="full">
                    <Text 
                      fontSize="xs" 
                      fontWeight="bold" 
                      color="kd.heading" 
                      mb={4} 
                      textTransform="uppercase" 
                      letterSpacing="wider"
                      fontFamily="heading"
                    >
                      Follow Us
                    </Text>
                    <HStack spacing={socialSpacing} flexWrap="wrap" align="center">
                      {enabledSocialLinks.map((link) => (
                        <SocialMediaIcon
                          key={link.label}
                          platform={link.label}
                          href={link.href}
                          icon={link.icon}
                          color={link.color}
                          hoverColor={link.hoverColor}
                        />
                      ))}
                    </HStack>
                  </Box>
                )}
              </VStack>
            </PremiumCard>
          )}

          {/* Menu 1 - Configurable */}
          {footerConfig.menus.menu1.enabled && (
            <PremiumCard
              variant="glass"
              premium={true}
              p={cardPadding}
            >
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h3" 
                  fontSize={headingFontSize}
                  color="white" 
                  fontWeight="bold"
                  lineHeight="1.25"
                  letterSpacing="-0.025em"
                  fontFamily="heading"
                >
                  {footerConfig.menus.menu1.title}
                </Heading>
                <VStack spacing={1} align="start" w="full">
                  {footerConfig.menus.menu1.links.map((link) => (
                    <FooterNavLink 
                      key={link.label} 
                      to={link.href}
                      icon={getNavIcon(link.href)}
                    >
                      {link.label}
                    </FooterNavLink>
                  ))}
                </VStack>
              </VStack>
            </PremiumCard>
          )}

          {/* Menu 2 - Configurable */}
          {footerConfig.menus.menu2.enabled && (
            <PremiumCard
              variant="glass"
              premium={true}
              p={cardPadding}
            >
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h3" 
                  fontSize={headingFontSize}
                  color="white" 
                  fontWeight="bold"
                  lineHeight="1.25"
                  letterSpacing="-0.025em"
                  fontFamily="heading"
                >
                  {footerConfig.menus.menu2.title}
                </Heading>
                <VStack spacing={1} align="start" w="full">
                  {footerConfig.menus.menu2.links.map((link) => (
                    <FooterNavLink 
                      key={link.label} 
                      to={link.href}
                      icon={FaGraduationCap}
                    >
                      {link.label}
                    </FooterNavLink>
                  ))}
                </VStack>
              </VStack>
            </PremiumCard>
          )}

          {/* Contact Information Section */}
          {footerConfig.showContactInfo && (
            <PremiumCard
              variant="glass"
              premium={true}
              p={cardPadding}
            >
              <VStack align="start" spacing={6}>
                <Heading 
                  as="h3" 
                  fontSize={headingFontSize}
                  color="white" 
                  fontWeight="bold"
                  lineHeight="1.25"
                  letterSpacing="-0.025em"
                  fontFamily="heading"
                >
                  Contact Us
                </Heading>
                
                <VStack spacing={5} align="start" w="full">
                  {/* Address */}
                  <Flex align="start" w="full">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      w="40px"
                      h="40px"
                      borderRadius="10px"
                      bg="rgba(242, 219, 73, 0.15)"
                      border="1px solid rgba(242, 219, 73, 0.25)"
                      mr={4}
                      mt={1}
                      flexShrink={0}
                    >
                      <Icon 
                        as={FaMapMarkerAlt} 
                        boxSize={4} 
                        color="kd.tertiary"
                      />
                    </Box>
                    <VStack align="start" spacing={1} flex={1} minW={0}>
                      {contactInfo.address.split(/<br\s*\/?>/i).map((line, index) => (
                        <Text 
                          key={index} 
                          fontSize={bodyFontSize}
                          color="white" 
                          lineHeight="1.6"
                          fontWeight="normal"
                          wordBreak="break-word"
                          whiteSpace="normal"
                          fontFamily="body"
                        >
                          {line.trim()}
                        </Text>
                      ))}
                    </VStack>
                  </Flex>

                  {/* Phone Numbers */}
                  {contactInfo.phones && contactInfo.phones.length > 0 && (
                    <Flex align="start" w="full">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        borderRadius="10px"
                        bg="rgba(242, 219, 73, 0.15)"
                        border="1px solid rgba(242, 219, 73, 0.25)"
                        mr={4}
                        mt={1}
                        flexShrink={0}
                      >
                        <Icon 
                          as={FaPhoneAlt} 
                          boxSize={4} 
                          color="kd.tertiary"
                        />
                      </Box>
                      <VStack align="start" spacing={2} flex={1} minW={0}>
                        {contactInfo.phones.map((phoneEntry) => (
                          <Text 
                            key={phoneEntry.label} 
                            fontSize={bodyFontSize}
                            color="white" 
                            lineHeight="1.6"
                            fontWeight="normal"
                            wordBreak="break-word"
                            whiteSpace="normal"
                            fontFamily="body"
                          >
                            <Text as="span" fontWeight="semibold" color="white">
                              {phoneEntry.label}:
                            </Text>{' '}
                            {phoneEntry.number}
                          </Text>
                        ))}
                      </VStack>
                    </Flex>
                  )}

                  {/* Email */}
                  {contactInfo.email && (
                    <Flex align="center" w="full">
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="40px"
                        h="40px"
                        borderRadius="10px"
                        bg="rgba(242, 219, 73, 0.15)"
                        border="1px solid rgba(242, 219, 73, 0.25)"
                        mr={4}
                        flexShrink={0}
                      >
                        <Icon 
                          as={FaEnvelope} 
                          boxSize={4} 
                          color="kd.tertiary"
                        />
                      </Box>
                      <Link 
                        href={`mailto:${contactInfo.email}`}
                        fontSize={bodyFontSize}
                        color="white"
                        fontWeight="normal"
                        fontFamily="body"
                        _hover={{ 
                          color: "kd.tertiary",
                          textDecoration: 'underline'
                        }}
                        transition="color 0.3s ease"
                        flex={1}
                        minW={0}
                        wordBreak="break-word"
                        whiteSpace="normal"
                      >
                        {contactInfo.email}
                      </Link>
                    </Flex>
                  )}
                </VStack>
              </VStack>
            </PremiumCard>
          )}
        </SimpleGrid>
      </Container>

      {/* Premium Footer Bottom Section */}
      <Box
        borderTop="1px solid"
        borderColor="rgba(255, 153, 51, 0.2)"
        bg="linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)"
        backdropFilter="blur(20px) saturate(180%)"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          bg: 'linear-gradient(90deg, transparent, rgba(255,153,51,0.5), transparent)',
        }}
      >
        <Container
          maxW="container.xl"
          py={bottomPadding}
        >
          <VStack spacing={3}>
            <Text 
              fontSize={copyrightFontSize}
              color="white" 
              textAlign="center"
              fontWeight="500"
              fontFamily="body"
              textShadow="0 2px 4px rgba(0,0,0,0.3)"
            >
              {siteConfig.legal.copyrightText}
            </Text>
            <Text 
              fontSize="xs"
              color="rgba(255, 255, 255, 0.7)" 
              textAlign="center"
              fontWeight="400"
              fontFamily="body"
            >
              Crafted with 🕉️ by the Karpatri Dham Framework
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer; 
