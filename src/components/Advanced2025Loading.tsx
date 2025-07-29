import React, { useEffect, useState } from 'react';
import {
  Box,
  VStack,
  Text,
  Progress,
  keyframes,
  useColorModeValue,
  Flex,
  Circle,
  useBreakpointValue
} from '@chakra-ui/react';

// 2025 Advanced Loading States with Sacred Geometry
const sacredSpiral = keyframes`
  0% { 
    transform: rotate(0deg) scale(0.8);
    opacity: 0.3;
  }
  33% { 
    transform: rotate(120deg) scale(1.1);
    opacity: 0.8;
  }
  66% { 
    transform: rotate(240deg) scale(0.9);
    opacity: 0.6;
  }
  100% { 
    transform: rotate(360deg) scale(0.8);
    opacity: 0.3;
  }
`;

const quantumPulse = keyframes`
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    filter: hue-rotate(0deg);
  }
  25% { 
    transform: scale(1.2) rotate(90deg);
    filter: hue-rotate(90deg);
  }
  50% { 
    transform: scale(0.8) rotate(180deg);
    filter: hue-rotate(180deg);
  }
  75% { 
    transform: scale(1.1) rotate(270deg);
    filter: hue-rotate(270deg);
  }
`;

const consciousnessExpansion = keyframes`
  0% { 
    transform: scale(0.1);
    opacity: 0;
    border-radius: 50%;
  }
  50% { 
    transform: scale(1.5);
    opacity: 0.7;
    border-radius: 20%;
  }
  100% { 
    transform: scale(2);
    opacity: 0;
    border-radius: 0%;
  }
`;

interface Advanced2025LoadingProps {
  isLoading: boolean;
  loadingText?: string;
  progress?: number;
  variant?: 'quantum' | 'sacred' | 'consciousness';
  showProgress?: boolean;
  spiritual?: boolean;
}

export const Advanced2025Loading: React.FC<Advanced2025LoadingProps> = ({
  isLoading,
  loadingText = "Awakening Quantum Consciousness...",
  progress = 0,
  variant = 'quantum',
  showProgress = false,
  spiritual = true
}) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);
  
  const bgGradient = useColorModeValue(
    'linear(to-br, rgba(255,153,51,0.1), rgba(30,144,255,0.1), rgba(242,219,73,0.1))',
    'linear(to-br, rgba(255,153,51,0.2), rgba(30,144,255,0.2), rgba(242,219,73,0.2))'
  );
  
  const overlayBg = useColorModeValue(
    'rgba(255, 255, 255, 0.95)',
    'rgba(0, 0, 0, 0.95)'
  );

  const size = useBreakpointValue({ base: '80px', md: '120px' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  const spiritualMessages = [
    "Aligning with cosmic frequencies...",
    "Activating quantum spiritual pathways...", 
    "Connecting ancient wisdom networks...",
    "Harmonizing scientific consciousness...",
    "Manifesting digital dharma...",
    "Establishing sacred connections..."
  ];

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setCurrentProgress(prev => {
          if (showProgress && progress > 0) {
            return Math.min(progress, 100);
          }
          return prev < 90 ? prev + Math.random() * 10 : 90;
        });
        
        if (spiritual) {
          setLoadingPhase(prev => (prev + 1) % spiritualMessages.length);
        }
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isLoading, progress, showProgress, spiritual, spiritualMessages.length]);

  const getAnimationVariant = () => {
    switch (variant) {
      case 'sacred':
        return {
          animation: `${sacredSpiral} 3s ease-in-out infinite`,
          background: 'linear-gradient(45deg, #FF9933, #F2DB49, #1E90FF)',
          borderRadius: '50%'
        };
      case 'consciousness':
        return {
          animation: `${consciousnessExpansion} 2s ease-out infinite`,
          background: 'radial-gradient(circle, #F2DB49, #FF9933)',
          borderRadius: '50%'
        };
      default: // quantum
        return {
          animation: `${quantumPulse} 2.5s ease-in-out infinite`,
          background: 'conic-gradient(from 0deg, #FF9933, #1E90FF, #F2DB49, #FF9933)',
          borderRadius: '20%'
        };
    }
  };

  if (!isLoading) return null;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={overlayBg}
      backdropFilter="blur(10px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex={9999}
      transition="all 0.3s ease"
    >
      <Box
        position="absolute"
        inset={0}
        bgGradient={bgGradient}
        opacity={0.6}
      />
      
      <VStack spacing={8} textAlign="center" position="relative" zIndex={1}>
        {/* Sacred Loading Animation */}
        <Box position="relative">
          <Box
            width={size}
            height={size}
            {...getAnimationVariant()}
            boxShadow="0 0 40px rgba(255, 153, 51, 0.5)"
          />
          
          {/* Quantum Particles */}
          {variant === 'quantum' && (
            <>
              {[...Array(6)].map((_, i) => (
                <Circle
                  key={i}
                  size="8px"
                  bg="orange.400"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform={`translate(-50%, -50%) rotate(${i * 60}deg) translateY(-60px)`}
                  animation={`${quantumPulse} 2s ease-in-out infinite ${i * 0.3}s`}
                  boxShadow="0 0 10px currentColor"
                />
              ))}
            </>
          )}
        </Box>

        {/* Loading Text with Typing Effect */}
        <VStack spacing={4}>
          <Text
            fontSize={textSize}
            fontWeight="semibold"
            color="orange.500"
            letterSpacing="wider"
            textAlign="center"
          >
            {spiritual ? spiritualMessages[loadingPhase] : loadingText}
          </Text>
          
          {/* Progress Bar */}
          {showProgress && (
            <Box w="300px" maxW="80vw">
              <Progress
                value={currentProgress}
                colorScheme="orange"
                size="sm"
                borderRadius="full"
                bg="rgba(255,255,255,0.2)"
                sx={{
                  '& > div': {
                    background: 'linear-gradient(90deg, #FF9933, #F2DB49)',
                    transition: 'width 0.5s ease'
                  }
                }}
              />
              <Text
                fontSize="xs"
                color="gray.500"
                textAlign="center"
                mt={2}
              >
                {Math.round(currentProgress)}% Complete
              </Text>
            </Box>
          )}
          
          {/* Spiritual Quote */}
          {spiritual && (
            <Text
              fontSize="sm"
              color="gray.600"
              fontStyle="italic"
              maxW="400px"
              textAlign="center"
              opacity={0.8}
            >
              "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।"
            </Text>
          )}
        </VStack>

        {/* Floating Elements */}
        <Flex
          position="absolute"
          top="-100px"
          left="-100px"
          right="-100px"
          bottom="-100px"
          pointerEvents="none"
          overflow="hidden"
        >
          {[...Array(8)].map((_, i) => (
            <Box
              key={i}
              position="absolute"
              w="4px"
              h="4px"
              bg="blue.400"
              borderRadius="full"
              opacity={0.6}
              animation={`${consciousnessExpansion} ${3 + i * 0.5}s ease-in-out infinite ${i * 0.7}s`}
              top={`${Math.random() * 100}%`}
              left={`${Math.random() * 100}%`}
              boxShadow="0 0 8px currentColor"
            />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Advanced2025Loading;