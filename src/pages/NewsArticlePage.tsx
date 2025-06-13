import React from 'react';
import { Box, Container, Heading, Text, VStack, useColorModeValue, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../siteConfig';
import AnimatedSection from '../components/AnimatedSection';

const NewsArticlePage: React.FC = () => {
  const navigate = useNavigate();
  
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
        <title>News Article - {siteConfig.siteName}</title>
        <meta name="description" content={`Read the latest news article from ${siteConfig.siteName}.`} />
      </Helmet>

      <Container maxW="container.lg" py={{ base: 12, md: 20 }} px={{ base: 4, md: 6 }}>
        <AnimatedSection>
        <VStack spacing={8} align="stretch">
          {/* Back Button */}
          <Button 
            leftIcon={<ChevronLeftIcon />} 
            onClick={() => navigate('/news')}
            variant="ghost"
            alignSelf="flex-start"
            size="sm"
            mb={4}
          >
            Back to News
          </Button>

            <VStack spacing={6} textAlign="center">
              <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color={headingColor}>
                News Article
            </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color={textColor} maxW="4xl">
                Individual news articles will be displayed here once the news system is fully implemented.
              </Text>
          </VStack>

            <VStack spacing={8} textAlign="center" mt={12}>
              <Heading as="h2" size="lg" color={headingColor}>
                Coming Soon
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl">
                Our news article system is currently under development. We're working on bringing you detailed 
                articles with rich content, images, and interactive features.
              </Text>
            </VStack>
          </VStack>
                  </AnimatedSection>
      </Container>
    </Box>
  );
};

export default NewsArticlePage; 