import React from 'react';
import { Box, Container, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';

const TermsOfServicePage: React.FC = () => {
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
        <title>Terms of Service - {siteConfig.siteName}</title>
        <meta name="description" content={`Terms of Service for ${siteConfig.siteName}. Read our terms and conditions for using our services.`} />
      </Helmet>

      <Container maxW="container.lg" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }}>
        <AnimatedSection>
        <VStack spacing={8} align="stretch">
            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color={headingColor}>
            Terms of Service
          </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} maxW="4xl">
                These terms and conditions outline the rules and regulations for the use of {siteConfig.siteName}'s services.
          </Text>
            </VStack>

            <VStack spacing={8} align="stretch" textAlign="left" mt={12}>
              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Acceptance of Terms
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  By accessing and using our services, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Use License
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  Permission is granted to temporarily download one copy of the materials on {siteConfig.siteName} 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Disclaimer
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  The materials on {siteConfig.siteName} are provided on an 'as is' basis. {siteConfig.siteName} 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness for a 
                  particular purpose, or non-infringement of intellectual property or other violation of rights.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Limitations
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  In no event shall {siteConfig.siteName} or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) arising 
                  out of the use or inability to use the materials on {siteConfig.siteName}, even if {siteConfig.siteName} 
                  or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" color={headingColor} mb={4}>
                  Contact Information
                </Heading>
                <Text fontSize="md" color={textColor} lineHeight="tall">
                  If you have any questions about these Terms of Service, please contact us at{' '}
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

export default TermsOfServicePage; 