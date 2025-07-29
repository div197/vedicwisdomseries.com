import React from 'react';
import {
  Button,
  VStack,
  HStack,
  Text,
  Icon,
  useBreakpointValue,
  Box,
  Badge
} from '@chakra-ui/react';
import { contentMaster, getCTAData } from '../data/contentMaster';

interface OptimizedCTAProps {
  variant?: 'hero' | 'inline' | 'sidebar' | 'footer';
  ctaType?: 'primary' | 'secondary' | 'tertiary' | 'emergency';
  showSecondary?: boolean;
  showUrgency?: boolean;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  spacing?: number;
  centered?: boolean;
  customMessage?: string;
}

/**
 * Optimized CTA Component - Conversion-focused call-to-action system
 * 
 * This component implements standardized, high-converting CTAs based on
 * the contentMaster system for consistent messaging and optimal performance.
 */
export const OptimizedCTA: React.FC<OptimizedCTAProps> = ({
  variant = 'inline',
  ctaType = 'primary',
  showSecondary = true,
  showUrgency = false,
  size,
  direction,
  spacing = 4,
  centered = true,
  customMessage
}) => {
  // Get CTA data from contentMaster
  const primaryCTA = getCTAData(ctaType);
  const secondaryCTA = getCTAData('secondary');
  
  // Responsive sizing
  const responsiveButtonSize = useBreakpointValue({ 
    base: size === 'lg' ? 'md' : size || 'md',
    md: size || 'lg'
  });
  
  const responsiveDirection = useBreakpointValue({ 
    base: 'column' as const, 
    md: direction || 'row' as const 
  });
  
  // Variant-specific styling
  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          py: 8,
          px: 6,
          bg: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 'xl',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        };
      case 'sidebar':
        return {
          py: 6,
          px: 4,
          bg: 'orange.50',
          borderRadius: 'lg',
          border: '2px solid',
          borderColor: 'orange.200'
        };
      case 'footer':
        return {
          py: 6,
          px: 4,
          bg: 'gray.900',
          borderRadius: 'lg',
          border: '1px solid',
          borderColor: 'gray.600'
        };
      default:
        return {
          py: 4,
          px: 0
        };
    }
  };
  
  const variantStyles = getVariantStyles();
  
  // Enhanced button styling for conversion optimization
  const getButtonProps = (cta: any, isPrimary: boolean = false) => ({
    as: 'a' as const,
    href: cta.href,
    size: responsiveButtonSize,
    colorScheme: cta.colorScheme,
    variant: isPrimary ? 'solid' : cta.variant,
    leftIcon: <Icon as={cta.icon} />,
    px: { base: 6, md: 8 },
    py: { base: 3, md: 4 },
    fontSize: { base: 'md', md: 'lg' },
    fontWeight: isPrimary ? 'bold' : 'semibold',
    _hover: {
      transform: 'translateY(-3px)',
      boxShadow: isPrimary ? 'xl' : 'lg',
      ...(isPrimary && { bg: `${cta.colorScheme}.600` })
    },
    _active: {
      transform: 'translateY(-1px)'
    },
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...(isPrimary && {
      boxShadow: 'lg',
      borderWidth: '2px',
      borderColor: 'transparent'
    })
  });
  
  return (
    <Box {...variantStyles}>
      <VStack spacing={spacing} textAlign={centered ? "center" : "left"}>
        {/* CTA Description for hero/sidebar variants */}
        {(variant === 'hero' || variant === 'sidebar') && (
          <VStack spacing={2} textAlign="center">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="semibold"
              color={variant === 'hero' ? 'white' : 'gray.800'}
            >
              {customMessage || primaryCTA.description}
            </Text>
            {showSecondary && (
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color={variant === 'hero' ? 'whiteAlpha.900' : 'gray.600'}
              >
                {secondaryCTA.description}
              </Text>
            )}
          </VStack>
        )}
        
        {/* CTA Buttons */}
        <Box
          display="flex"
          flexDirection={responsiveDirection}
          gap={spacing}
          alignItems="center"
          justifyContent={centered ? "center" : "flex-start"}
          w="full"
          flexWrap="wrap"
        >
          {/* Primary CTA */}
          <Button {...getButtonProps(primaryCTA, true)}>
            {primaryCTA.text}
          </Button>
          
          {/* Secondary CTA */}
          {showSecondary && (
            <Button {...getButtonProps(secondaryCTA)}>
              {secondaryCTA.text}
            </Button>
          )}
        </Box>
        
        {/* Urgency/Scarcity Trigger */}
        {showUrgency && (
          <VStack spacing={2}>
            <Badge colorScheme="red" fontSize="sm" px={3} py={1} borderRadius="full">
              ⏰ {primaryCTA.urgency}
            </Badge>
            <Text
              fontSize="xs"
              color={variant === 'hero' ? 'whiteAlpha.800' : 'gray.500'}
              fontStyle="italic"
            >
              *Offer subject to availability
            </Text>
          </VStack>
        )}
        
        {/* Trust Indicators for hero variant */}
        {variant === 'hero' && (
          <HStack spacing={4} fontSize="sm" color="whiteAlpha.900" flexWrap="wrap" justify="center">
            <Text>✓ 1000+ Students</Text>
            <Text>✓ 98% Success Rate</Text>
            <Text>✓ 24hr Response</Text>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default OptimizedCTA;