/**
 * ScrollToTopButton Component
 * Beautiful, accessible scroll to top button with smooth animations
 * Integrates with useScrollToTop hook and respects accessibility preferences
 */

import React from 'react';
import {
  IconButton,
  useColorModeValue,
  Tooltip,
  Box
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaChevronUp } from 'react-icons/fa';
import { siteConfig } from '../siteConfig';
import useScrollToTop from '../hooks/useScrollToTop';

// Animation keyframes
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const fadeOutDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
`;

interface ScrollToTopButtonProps {
  threshold?: number;
  size?: 'sm' | 'md' | 'lg';
  position?: {
    bottom: string;
    right: string;
  };
  showPulse?: boolean;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  threshold = 300,
  size = 'lg',
  position = { bottom: '2rem', right: '2rem' },
  showPulse = true
}) => {
  const { scrollToTop, isScrolling, showScrollButton } = useScrollToTop(threshold);

  // Theme-based colors - moved to top to fix React Hooks rules
  const buttonBg = useColorModeValue(
    siteConfig.theme.colors.primary,
    siteConfig.theme.colors.primary
  );
  
  const buttonHoverBg = useColorModeValue(
    siteConfig.theme.colors.secondary,
    siteConfig.theme.colors.secondary
  );
  
  const iconColor = useColorModeValue('white', 'white');
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.15)',
    'rgba(0, 0, 0, 0.3)'
  );

  const borderColorHover = useColorModeValue('white', 'kd.border');
  const focusOutlineColor = useColorModeValue('kd.primary', 'kd.primaryLight');

  // Handle click with custom options
  const handleClick = () => {
    scrollToTop({
      duration: 800,
      easing: 'easeInOut',
      offset: 0
    });
  };

  if (!showScrollButton) {
    return null;
  }

  return (
    <Box
      position="fixed"
      bottom={position.bottom}
      right={position.right}
      zIndex={1000}
      animation={showScrollButton ? `${fadeInUp} 0.3s ease-out` : `${fadeOutDown} 0.3s ease-out`}
    >
      <Tooltip
        label="Scroll to top"
        placement="left"
        hasArrow
        bg={buttonBg}
        color="white"
        fontSize="sm"
        px={3}
        py={2}
        borderRadius="md"
      >
        <IconButton
          aria-label="Scroll to top"
          icon={<FaChevronUp />}
          size={size}
          bg={buttonBg}
          color={iconColor}
          borderRadius="full"
          boxShadow={`0 4px 20px ${shadowColor}`}
          border="2px solid"
          borderColor="transparent"
          isLoading={isScrolling}
          onClick={handleClick}
          _hover={{
            bg: buttonHoverBg,
            transform: 'translateY(-2px) scale(1.05)',
            boxShadow: `0 8px 25px ${shadowColor}`,
            borderColor: borderColorHover,
          }}
          _active={{
            transform: 'translateY(0) scale(0.95)',
            boxShadow: `0 2px 10px ${shadowColor}`,
          }}
          _focus={{
            outline: '3px solid',
            outlineColor: focusOutlineColor,
            outlineOffset: '2px',
          }}
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          sx={{
            // Add pulse animation if enabled
            ...(showPulse && {
              animation: `${pulse} 2s infinite`,
            }),
            // Ensure proper sizing
            minW: size === 'sm' ? '40px' : size === 'md' ? '48px' : '56px',
            minH: size === 'sm' ? '40px' : size === 'md' ? '48px' : '56px',
            // Smooth icon rotation on hover
            '& svg': {
              transition: 'transform 0.3s ease',
            },
            '&:hover svg': {
              transform: 'translateY(-1px)',
            },
            // Accessibility improvements
            '@media (prefers-reduced-motion: reduce)': {
              animation: 'none',
              transition: 'none',
              '&:hover': {
                transform: 'none',
              },
              '&:active': {
                transform: 'none',
              },
            },
          }}
        />
      </Tooltip>
    </Box>
  );
};

export default ScrollToTopButton; 
