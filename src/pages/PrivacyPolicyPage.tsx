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

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title={`Privacy Policy - ${siteConfig.siteName}`}
        description={`Privacy Policy for ${siteConfig.siteName}. Learn how we protect and handle your personal information.`}
      />

      <Section variant="content" padding="xl">
        <Container size="md">
          <Animation variant="fadeIn">
            <VStack spacing={{ base: 8, md: 12 }} align="stretch">
              <VStack spacing={{ base: 4, md: 6 }} textAlign="center">
                <Heading variant="hero" level={1}>
                  Privacy Policy
                </Heading>
                <Text variant="lead" maxW="4xl">
                  Your privacy is important to us. This policy outlines how {siteConfig.siteName} collects, 
                  uses, and protects your personal information.
                </Text>
              </VStack>

              <VStack spacing={{ base: 6, md: 8 }} align="stretch" textAlign="left">
                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Information We Collect
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    We collect information you provide directly to us, such as when you create an account, 
                    contact us, or use our services. This may include your name, email address, phone number, 
                    and other contact information.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    How We Use Your Information
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    We use the information we collect to provide, maintain, and improve our services, 
                    communicate with you, and comply with legal obligations. We do not sell your personal 
                    information to third parties.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Data Security
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </Text>
                </VStack>

                <VStack spacing={{ base: 3, md: 4 }} align="start">
                  <Heading variant="section" level={2}>
                    Contact Us
                  </Heading>
                  <Text variant="body" lineHeight="tall">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
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

export default PrivacyPolicyPage; 