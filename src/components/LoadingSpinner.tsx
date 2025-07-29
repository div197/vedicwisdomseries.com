// 🕉️ SOPHISTICATED LOADING COMPONENTS
// State-of-the-art loading experience with spiritual aesthetics

import React from 'react';
import { Box, Spinner, VStack, Center } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { siteConfig } from '../siteConfig';

// Sacred geometry loading animation
const sacredPulse = keyframes`
  0% { 
    transform: scale(0.8) rotate(0deg);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.1) rotate(180deg);
    opacity: 1;
  }
  100% { 
    transform: scale(0.8) rotate(360deg);
    opacity: 0.6;
  }
`;

const divineGlow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px ${siteConfig.colors.primary}40;
  }
  50% { 
    box-shadow: 0 0 40px ${siteConfig.colors.primary}80, 0 0 60px ${siteConfig.colors.secondary}40;
  }
`;

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  message?: string;
  fullPage?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'lg',
  message = 'Loading spiritual wisdom...',
  fullPage = false
}) => {
  const sizeMap = {
    sm: '32px',
    md: '48px', 
    lg: '64px',
    xl: '96px'
  };

  const content = (
    <VStack spacing={6}>
      <Box
        width={sizeMap[size]}
        height={sizeMap[size]}
        borderRadius="50%"
        bg={`linear-gradient(45deg, ${siteConfig.colors.primary}, ${siteConfig.colors.secondary})`}
        animation={`${sacredPulse} 2s ease-in-out infinite, ${divineGlow} 3s ease-in-out infinite`}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner
          thickness="3px"
          speed="0.8s"
          emptyColor="whiteAlpha.300"
          color="white"
          size={size}
        />
      </Box>
      {message && (
        <Box
          fontSize="sm"
          color="gray.600"
          fontWeight="medium"
          textAlign="center"
          opacity={0.8}
        >
          {message}
        </Box>
      )}
    </VStack>
  );

  if (fullPage) {
    return (
      <Center
        minH="100vh"
        bg="linear-gradient(135deg, orange.50 0%, blue.50 50%, yellow.50 100%)"
      >
        {content}
      </Center>
    );
  }

  return (
    <Center py={8}>
      {content}
    </Center>
  );
};

// Specialized page loading spinner for route transitions
export const PageLoadingSpinner = () => (
  <LoadingSpinner 
    size="lg"
    message="🕉️ Preparing divine content..."
    fullPage
  />
);

// Minimal loading spinner for components
export const CompactLoadingSpinner = () => (
  <LoadingSpinner 
    size="sm"
    message=""
  />
);

export default LoadingSpinner;