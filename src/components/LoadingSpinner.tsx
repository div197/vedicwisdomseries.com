import React from 'react';
import { Box, Spinner, VStack, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMessage?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading...",
  size = 'lg',
  showMessage = true
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="200px"
      w="full"
    >
      <VStack spacing={4}>
        <Box
          animation={`${pulse} 2s ease-in-out infinite`}
        >
          <Spinner
            size={size}
            color="kd.primary"
            thickness="4px"
            speed="0.65s"
          />
        </Box>
        {showMessage && (
          <Text
            color="kd.text"
            fontSize="sm"
            fontWeight="medium"
            opacity={0.8}
          >
            {message}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export const PageLoadingSpinner: React.FC = () => (
  <LoadingSpinner
    message="Preparing your spiritual journey..."
    size="xl"
    showMessage={true}
  />
);

export const ComponentLoadingSpinner: React.FC = () => (
  <LoadingSpinner
    message="Loading content..."
    size="md"
    showMessage={false}
  />
);

export default LoadingSpinner;