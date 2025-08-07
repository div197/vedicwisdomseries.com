import React from 'react';
import { Box, Container, Flex, Link, Image, Button, IconButton, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, VStack } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { siteConfig } from '../siteConfig';

const SimpleHeader: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  
  const navItems = siteConfig.navigation.main.filter(item => item.label !== 'Home');
  
  return (
    <Box 
      as="header" 
      bg="white" 
      borderBottom="1px solid" 
      borderColor="gray.200"
      position="sticky"
      top={0}
      zIndex={1000}
      boxShadow="sm"
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex h="70px" align="center" justify="space-between">
          {/* Logo */}
          <Link as={RouterLink} to="/" display="flex" alignItems="center" gap={2}>
            <Image 
              src="/assets/images/logo-header.svg" 
              alt="Vedic Wisdom Series"
              h="40px"
              fallbackSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 50'%3E%3Ctext x='10' y='35' font-size='30' fill='%23FF9933'%3E🕉️%3C/text%3E%3Ctext x='50' y='30' font-size='18' font-weight='bold' fill='%23FF9933'%3EVedic Wisdom Series%3C/text%3E%3C/svg%3E"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', md: 'flex' }} gap={8} align="center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                as={RouterLink}
                to={item.href}
                fontSize="md"
                fontWeight={location.pathname === item.href ? 'bold' : 'medium'}
                color={location.pathname === item.href ? 'primary.500' : 'gray.700'}
                _hover={{ color: 'primary.500' }}
              >
                {item.label}
              </Link>
            ))}
            <Button
              as={RouterLink}
              to="/contact"
              colorScheme="orange"
              size="md"
              px={6}
            >
              Get Started
            </Button>
          </Flex>
          
          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="ghost"
          />
        </Flex>
      </Container>
      
      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={12}>
            <VStack spacing={4} align="stretch">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  as={RouterLink}
                  to={item.href}
                  fontSize="lg"
                  fontWeight={location.pathname === item.href ? 'bold' : 'medium'}
                  color={location.pathname === item.href ? 'primary.500' : 'gray.700'}
                  onClick={onClose}
                  py={2}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="orange"
                size="lg"
                w="full"
                mt={4}
                onClick={onClose}
              >
                Get Started
              </Button>
              <Box pt={8} borderTop="1px solid" borderColor="gray.200">
                <Text fontSize="sm" color="gray.600" mb={2}>Contact Us:</Text>
                <Link href={`tel:${siteConfig.contact.phone}`} fontSize="md" color="primary.500">
                  {siteConfig.contact.phone}
                </Link>
                <Link href={`mailto:${siteConfig.contact.email}`} fontSize="md" color="primary.500" display="block" mt={2}>
                  {siteConfig.contact.email}
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SimpleHeader;