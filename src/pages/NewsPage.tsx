/// <reference types="vite/client" />

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';

// News Page Component
const NewsPage: React.FC = () => {
  // Karpatri Dham theme colors
  const pageBg = useColorModeValue('kd.canvas', 'kd.surface');
  const headingColor = useColorModeValue('kd.text', 'kd.textInverted');
  const textColor = useColorModeValue('kd.textSecondary', 'kd.textMuted');
  const cardBg = useColorModeValue('kd.surface', 'kd.surfaceElevated');
  const yellowAccent = useColorModeValue('kd.secondary', 'kd.tertiary');

  return (
    <Box bg={pageBg} minH="100vh">
      <Helmet>
        <title>News & Updates - {siteConfig.siteName}</title>
        <meta name="description" content={`Stay updated with the latest news and updates from ${siteConfig.siteName}. Read about our latest developments, achievements, and industry insights.`} />
      </Helmet>

      <Container maxW="container.xl" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }}>
        <AnimatedSection>
          <VStack spacing={6} textAlign="center" mb={16}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl', lg: '3xl' }} color={headingColor}>
              News & Updates
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} maxW="4xl">
              Stay informed with the latest developments, achievements, and insights from Karpatri Dham.
              Discover how we're continuously evolving to serve spiritual seekers better.
            </Text>
          </VStack>
        </AnimatedSection>

        <AnimatedSection>
          <VStack spacing={8} textAlign="center" bg={cardBg} p={12} borderRadius="xl" boxShadow="lg">
            <Heading as="h2" size="lg" color={yellowAccent} mb={4}>
              🚀 Coming Soon
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="2xl" mb={6}>
              Our comprehensive news section is currently under development. We're working on bringing you the latest updates, 
                              spiritual insights, seeker transformation stories, and dharmic wisdom.
            </Text>
            <Text fontSize="md" color={textColor} fontWeight="medium" mb={4}>
              What to expect:
            </Text>
            <VStack spacing={3} textAlign="left" maxW="lg">
                              <Text color={textColor}><Text as="span" color={yellowAccent}>•</Text> Seeker Transformation Stories</Text>
              <Text color={textColor}><Text as="span" color={yellowAccent}>•</Text> Educational Innovation Updates</Text>
              <Text color={textColor}><Text as="span" color={yellowAccent}>•</Text> Industry Insights & Trends</Text>
              <Text color={textColor}><Text as="span" color={yellowAccent}>•</Text> Faculty Excellence Features</Text>
              <Text color={textColor}><Text as="span" color={yellowAccent}>•</Text> Technology & Learning Advancements</Text>
            </VStack>
            <Text fontSize="sm" color={textColor} mt={6}>
              📧 Subscribe to get notified when we launch: <Text as="span" color={headingColor} fontWeight="bold">news@karpatridham.org</Text>
            </Text>
          </VStack>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default NewsPage;
