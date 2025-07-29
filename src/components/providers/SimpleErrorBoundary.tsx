// 🕉️ MINIMAL SOPHISTICATED ERROR BOUNDARY
// TRUE sophistication = Simple, effective error handling
// FROM: 589 lines of enterprise over-engineering
// TO: ~30 lines of essential error handling

import React, { Component, ReactNode } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface SimpleErrorBoundaryProps {
  children: ReactNode;
}

export class SimpleErrorBoundary extends Component<SimpleErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: SimpleErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Simple console logging - no complex error tracking needed
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" p={6}>
          <VStack spacing={4} textAlign="center" maxW="md">
            <Text fontSize="xl" fontWeight="bold">Something went wrong</Text>
            <Text color="gray.600">We apologize for the inconvenience. Please try refreshing the page.</Text>
            <Button onClick={() => window.location.reload()} colorScheme="primary">
              Refresh Page
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default SimpleErrorBoundary;