import React from 'react';
import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPolicyPage: React.FC = () => {
  // Configuration-driven styling
  const pageBg = useColorModeValue(
    siteConfig.theme.layout.page.background.light,
    siteConfig.theme.layout.page.background.dark
  );
  const headingColor = useColorModeValue('heading.primary', 'heading.primary');
  const textColor = useColorModeValue('text.primary', 'text.primary');

  return (
    <Box bg={pageBg} minH="100vh">
      <Helmet>
        <title>Privacy Policy - {siteConfig.siteName}</title>
        <meta name="description" content={`Privacy Policy for ${siteConfig.siteName}. Learn how we protect and handle your personal information.`} />
      </Helmet>

      <Container maxW="container.lg" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }}>
        <AnimatedSection>
        <VStack spacing={8} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color={headingColor}>
            Privacy Policy
          </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} maxW="4xl">
                Your privacy is important to us. This policy outlines how {siteConfig.siteName} collects, 
                uses, and protects your personal information.
          </Text>
            </VStack>

            <VStack spacing={8} align="stretch" textAlign="left" mt={12}>
              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Information We Collect
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and other contact information.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  How We Use Your Information
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations. We do not sell your personal 
                  information to third parties.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Data Security
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Contact Us
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  {siteConfig.contact.email || 'contact@example.com'}.
            </Text>
          </Box>
        </VStack>
          </VStack>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default PrivacyPolicyPage; 