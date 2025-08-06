import React from 'react';
import {
  // Premium Layout System
  Section,
  Container,
  VStack,
  
  // Premium Typography
  Heading,
  Text,
  
  // Premium Animation System
  Animation
} from '../components/premium';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../siteConfig';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title={`Terms of Service - ${siteConfig.siteName}`}
        description={`Terms of Service for ${siteConfig.siteName}. Read our terms and conditions for using our services.`}
      />

      <Section variant="content" padding="xl">
        <Container size="md">
          <Animation variant="fadeIn">
            <VStack spacing={{ base: 8, md: 12 }} align="stretch">
              <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
                <Heading variant="hero" level={1}>
                  Terms of Service
                </Heading>
                <Text variant="lead" maxW="4xl">
                  These terms and conditions outline the rules and regulations for the use of {siteConfig.siteName}'s services.
                </Text>
              </VStack>

              <VStack spacing={{ base: 6, md: 8 }} align="stretch" textAlign="left">
                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Acceptance of Terms
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    By accessing and using our services, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Use License
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    Permission is granted to temporarily download one copy of the materials on {siteConfig.siteName} 
                    for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Disclaimer
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    The materials on {siteConfig.siteName} are provided on an 'as is' basis. {siteConfig.siteName} 
                    makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                    including without limitation, implied warranties or conditions of merchantability, fitness for a 
                    particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Limitations
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    In no event shall {siteConfig.siteName} or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) arising 
                    out of the use or inability to use the materials on {siteConfig.siteName}, even if {siteConfig.siteName} 
                    or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Contact Information
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    If you have any questions about these Terms of Service, please contact us at{' '}
                    {siteConfig.contact.email || 'contact@example.com'}.
                  </Text>
                </VStack>
              </VStack>
            </VStack>
          </Animation>
        </Container>
      </Section>
    </>
  );
};

export default TermsOfServicePage; 