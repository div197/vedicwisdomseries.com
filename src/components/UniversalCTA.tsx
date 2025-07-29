import React from 'react';
import {
  Button,
  VStack,
  Text,
  Icon,
  useBreakpointValue,
  Box,
  Flex
} from '@chakra-ui/react';
import { FaBook, FaOm, FaHeart, FaCalendarCheck } from 'react-icons/fa';
import { siteConfig } from '../siteConfig';

interface UniversalCTAProps {
  variant?: 'inline' | 'hero' | 'footer' | 'floating';
  showSecondary?: boolean;
  size?: 'sm' | 'md' | 'lg';
  direction?: 'row' | 'column';
  spacing?: number;
  centered?: boolean;
}

/**
 * Universal CTA Component - 0th Law of Thermodynamics for Spiritual Websites
 * 
 * This component implements the single, universal call-to-action focused on
 * Vedic books access for global welfare (Vasudevam Kutumbakam).
 * 
 * From this foundation, all other spiritual websites can be derived.
 */
export const UniversalCTA: React.FC<UniversalCTAProps> = ({
  variant = 'inline',
  showSecondary = true,
  size,
  direction,
  spacing = 4,
  centered = true
}) => {
  const { universalCTA } = siteConfig.content;
  
  // Responsive sizing - moved hooks to top level to avoid conditional calls
  const responsiveButtonSize = useBreakpointValue({ 
    base: universalCTA.primary.size === 'lg' ? 'md' : universalCTA.primary.size,
    md: universalCTA.primary.size 
  });
  
  const responsiveDirection = useBreakpointValue({ 
    base: 'column' as const, 
    md: 'row' as const 
  });
  
  // Use provided props or responsive defaults
  const buttonSize = size || responsiveButtonSize;
  const buttonDirection = direction || responsiveDirection;
  
  // Icon mapping
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'FaBook': return FaBook;
      case 'FaOm': return FaOm;
      case 'FaHeart': return FaHeart;
      case 'FaCalendarCheck': return FaCalendarCheck;
      default: return FaBook;
    }
  };
  
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
      case 'footer':
        return {
          py: 6,
          px: 4,
          bg: 'kd.surface',
          borderRadius: 'lg',
          border: '1px solid',
          borderColor: 'kd.border'
        };
      case 'floating':
        return {
          position: 'fixed' as const,
          bottom: 4,
          right: 4,
          zIndex: 1000,
          bg: 'white',
          boxShadow: 'xl',
          borderRadius: 'full',
          p: 3
        };
      default:
        return {
          py: 4,
          px: 0
        };
    }
  };
  
  const variantStyles = getVariantStyles();
  
  if (!universalCTA.global.enabled) {
    return null;
  }
  
  const CTAContent = () => (
    <Flex
      direction={buttonDirection}
      gap={spacing}
      align="center"
      justify={centered ? "center" : "flex-start"}
      w="full"
    >
      {/* Primary CTA - Sacred Vedic Library */}
      <Button
        as="a"
        href={universalCTA.primary.href}
        size={buttonSize}
        colorScheme={universalCTA.primary.colorScheme}
        variant={universalCTA.primary.variant || "solid"}
        leftIcon={<Icon as={getIcon(universalCTA.primary.icon)} />}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg'
        }}
        transition="all 0.2s"
        fontWeight="semibold"
      >
        {universalCTA.primary.text}
      </Button>
      
      {/* Secondary CTA - Begin Journey */}
      {showSecondary && universalCTA.secondary && (
        <Button
          as="a"
          href={universalCTA.secondary.href}
          size={buttonSize}
          colorScheme={universalCTA.secondary.colorScheme}
          variant={universalCTA.secondary.variant}
          leftIcon={<Icon as={getIcon(universalCTA.secondary.icon)} />}
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'md'
          }}
          transition="all 0.2s"
          fontWeight="medium"
        >
          {universalCTA.secondary.text}
        </Button>
      )}
    </Flex>
  );
  
  // Floating variant has special rendering
  if (variant === 'floating') {
    return (
      <Box {...variantStyles}>
        <Button
          as="a"
          href={universalCTA.primary.href}
          size="sm"
          colorScheme={universalCTA.primary.colorScheme}
          variant="solid"
          borderRadius="full"
          leftIcon={<Icon as={getIcon(universalCTA.primary.icon)} />}
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: 'xl'
          }}
          transition="all 0.2s"
        >
          Sacred Library
        </Button>
      </Box>
    );
  }
  
  return (
    <Box {...variantStyles}>
      <VStack spacing={spacing} textAlign={centered ? "center" : "left"}>
        {/* CTA Description for hero/footer variants */}
        {(variant === 'hero' || variant === 'footer') && (
          <VStack spacing={2} textAlign="center">
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="semibold"
              color="kd.heading"
            >
              {universalCTA.primary.description}
            </Text>
            {universalCTA.secondary && (
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="kd.textSecondary"
              >
                {universalCTA.secondary.description}
              </Text>
            )}
          </VStack>
        )}
        
        <CTAContent />
        
        {/* Industrial Excellence Message */}
        {variant === 'hero' && (
          <Text
            fontSize="sm"
            color="kd.textMuted"
            fontStyle="italic"
            textAlign="center"
          >
            The Foundation of Your Finish - Industrial Excellence Since 1990
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default UniversalCTA; 