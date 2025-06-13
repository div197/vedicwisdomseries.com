import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Badge,
  Progress,
  Tooltip,
  Collapse,
  IconButton,
  Divider,
} from '@chakra-ui/react';
import { FiActivity, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { usePerformance } from '../hooks/usePerformance';

interface PerformanceMonitorProps {
  isVisible?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  isVisible = import.meta.env.DEV,
  position = 'bottom-right'
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const { metrics, grades, isLoading, error, isSupported } = usePerformance();

  // Use Karpatri Dham semantic color tokens – these automatically map to the
  // correct value in both light and dark modes, so we no longer need to call
  // useColorModeValue here.
  const bgColor = 'kd.surface';
  const borderColor = 'kd.border';
  const textColor = 'kd.textSecondary';
  const hoverBg = 'kd.hover';

  // Don't render in production or if not supported
  if (!isVisible || !isSupported || import.meta.env.PROD) {
    return null;
  }

  const getPositionStyles = () => {
    const baseStyles = {
      position: 'fixed' as const,
      zIndex: 9999,
      maxWidth: '300px',
    };

    switch (position) {
      case 'top-left':
        return { ...baseStyles, top: 4, left: 4 };
      case 'top-right':
        return { ...baseStyles, top: 4, right: 4 };
      case 'bottom-left':
        return { ...baseStyles, bottom: 4, left: 4 };
      case 'bottom-right':
      default:
        return { ...baseStyles, bottom: 4, right: 4 };
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return 'green';
      case 'good':
        return 'green';
      case 'needs-improvement':
        return 'yellow';
      case 'poor':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getGradeEmoji = (grade: string) => {
    switch (grade) {
      case 'excellent':
        return '🚀';
      case 'good':
        return '🟢';
      case 'needs-improvement':
        return '🟡';
      case 'poor':
        return '🔴';
      default:
        return '⚪';
    }
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${value.toFixed(1)}${unit}`;
  };

  const getProgressValue = (value: number | null, threshold: { good: number; poor: number }) => {
    if (value === null) return 0;
    const maxValue = threshold.poor * 1.5; // Show progress up to 150% of poor threshold
    return Math.min((value / maxValue) * 100, 100);
  };

  const getProgressColor = (grade: string) => {
    switch (grade) {
      case 'good':
        return 'green';
      case 'needs-improvement':
        return 'yellow';
      case 'poor':
        return 'red';
      default:
        return 'gray';
    }
  };

  if (error) {
    return (
      <Box
        {...getPositionStyles()}
        bg={bgColor}
        border="1px solid"
        borderColor="kd.error"
        borderRadius="lg"
        p={3}
        boxShadow="lg"
      >
        <HStack>
          <FiActivity color="red" />
          <Text fontSize="sm" color="kd.error">
            Performance monitoring error
          </Text>
        </HStack>
      </Box>
    );
  }

  return (
    <Box
      {...getPositionStyles()}
      bg={bgColor}
      border="1px solid"
      borderColor={borderColor}
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
    >
      {/* Header */}
      <HStack
        p={3}
        cursor="pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        _hover={{ bg: hoverBg }}
        transition="background-color 0.2s"
      >
        <FiActivity />
        <Text fontSize="sm" fontWeight="semibold" color={textColor}>
          Performance
        </Text>
        <Badge colorScheme={getGradeColor(grades.overall)} size="sm">
          {getGradeEmoji(grades.overall)} {grades.overall}
        </Badge>
        <IconButton
          aria-label={isExpanded ? 'Collapse' : 'Expand'}
          icon={isExpanded ? <FiChevronUp /> : <FiChevronDown />}
          size="xs"
          variant="ghost"
          ml="auto"
        />
      </HStack>

      {/* Expanded Content */}
      <Collapse in={isExpanded}>
        <Box p={3} pt={0}>
          <VStack spacing={3} align="stretch">
            {/* Core Web Vitals */}
            <Box>
              <Text fontSize="xs" fontWeight="semibold" color={textColor} mb={2}>
                Core Web Vitals
              </Text>
              <VStack spacing={2} align="stretch">
                {/* LCP */}
                <Box>
                  <HStack justify="space-between" mb={1}>
                    <Tooltip label="Largest Contentful Paint - measures loading performance">
                      <Text fontSize="xs" color={textColor}>
                        LCP
                      </Text>
                    </Tooltip>
                    <HStack spacing={1}>
                      <Badge colorScheme={getGradeColor(grades.lcp)} size="xs">
                        {getGradeEmoji(grades.lcp)}
                      </Badge>
                      <Text fontSize="xs" color={textColor}>
                        {formatMetric(metrics.lcp)}
                      </Text>
                    </HStack>
                  </HStack>
                  <Progress
                    value={getProgressValue(metrics.lcp, { good: 2500, poor: 4000 })}
                    colorScheme={getProgressColor(grades.lcp)}
                    size="xs"
                    borderRadius="full"
                  />
                </Box>

                {/* FID */}
                <Box>
                  <HStack justify="space-between" mb={1}>
                    <Tooltip label="First Input Delay - measures interactivity">
                      <Text fontSize="xs" color={textColor}>
                        FID
                      </Text>
                    </Tooltip>
                    <HStack spacing={1}>
                      <Badge colorScheme={getGradeColor(grades.fid)} size="xs">
                        {getGradeEmoji(grades.fid)}
                      </Badge>
                      <Text fontSize="xs" color={textColor}>
                        {formatMetric(metrics.fid)}
                      </Text>
                    </HStack>
                  </HStack>
                  <Progress
                    value={getProgressValue(metrics.fid, { good: 100, poor: 300 })}
                    colorScheme={getProgressColor(grades.fid)}
                    size="xs"
                    borderRadius="full"
                  />
                </Box>

                {/* CLS */}
                <Box>
                  <HStack justify="space-between" mb={1}>
                    <Tooltip label="Cumulative Layout Shift - measures visual stability">
                      <Text fontSize="xs" color={textColor}>
                        CLS
                      </Text>
                    </Tooltip>
                    <HStack spacing={1}>
                      <Badge colorScheme={getGradeColor(grades.cls)} size="xs">
                        {getGradeEmoji(grades.cls)}
                      </Badge>
                      <Text fontSize="xs" color={textColor}>
                        {formatMetric(metrics.cls, '')}
                      </Text>
                    </HStack>
                  </HStack>
                  <Progress
                    value={getProgressValue(metrics.cls, { good: 0.1, poor: 0.25 })}
                    colorScheme={getProgressColor(grades.cls)}
                    size="xs"
                    borderRadius="full"
                  />
                </Box>
              </VStack>
            </Box>

            <Divider />

            {/* Additional Metrics */}
            <Box>
              <Text fontSize="xs" fontWeight="semibold" color={textColor} mb={2}>
                Additional Metrics
              </Text>
              <VStack spacing={1} align="stretch">
                <HStack justify="space-between">
                  <Tooltip label="Time to First Byte">
                    <Text fontSize="xs" color={textColor}>
                      TTFB
                    </Text>
                  </Tooltip>
                  <Text fontSize="xs" color={textColor}>
                    {formatMetric(metrics.ttfb)}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Tooltip label="First Contentful Paint">
                    <Text fontSize="xs" color={textColor}>
                      FCP
                    </Text>
                  </Tooltip>
                  <Text fontSize="xs" color={textColor}>
                    {formatMetric(metrics.fcp)}
                  </Text>
                </HStack>
                <HStack justify="space-between">
                  <Tooltip label="Time to Interactive">
                    <Text fontSize="xs" color={textColor}>
                      TTI
                    </Text>
                  </Tooltip>
                  <Text fontSize="xs" color={textColor}>
                    {formatMetric(metrics.tti)}
                  </Text>
                </HStack>
              </VStack>
            </Box>

            {/* Loading State */}
            {isLoading && (
              <Box>
                <Text fontSize="xs" color={textColor} textAlign="center">
                  Collecting metrics...
                </Text>
                <Progress size="xs" isIndeterminate colorScheme="primary" mt={1} />
              </Box>
            )}
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default PerformanceMonitor; 