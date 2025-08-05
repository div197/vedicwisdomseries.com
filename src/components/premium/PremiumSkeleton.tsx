import React from 'react'
import { Box, Skeleton, SkeletonText, SkeletonCircle, Stack, keyframes } from '@chakra-ui/react'

/**
 * 🕉️ PREMIUM SKELETON LOADER
 * Sophisticated loading states matching actual content layout
 */

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

interface PremiumSkeletonProps {
  variant?: 'card' | 'text' | 'hero' | 'testimonial' | 'offering'
  count?: number
  animation?: 'pulse' | 'shimmer' | 'wave'
}

export const PremiumSkeleton: React.FC<PremiumSkeletonProps> = ({
  variant = 'card',
  count = 1,
  animation = 'shimmer'
}) => {
  const getAnimation = () => {
    switch (animation) {
      case 'shimmer':
        return `${shimmer} 2s linear infinite`
      case 'wave':
        return `${shimmer} 1.5s ease-in-out infinite`
      default:
        return undefined
    }
  }

  const renderSkeleton = () => {
    switch (variant) {
      case 'hero':
        return (
          <Box
            bg="kd.surface"
            borderRadius="2xl"
            p={8}
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: getAnimation()
            }}
          >
            <Skeleton height="60px" mb={4} borderRadius="lg" />
            <SkeletonText mt={4} noOfLines={3} spacing={4} skeletonHeight={3} />
            <Stack direction="row" spacing={4} mt={6}>
              <Skeleton height="50px" width="200px" borderRadius="full" />
              <Skeleton height="50px" width="200px" borderRadius="full" />
            </Stack>
          </Box>
        )

      case 'offering':
        return (
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            boxShadow="sm"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,153,51,0.05), transparent)',
              animation: getAnimation()
            }}
          >
            <Skeleton height="30px" width="100px" mb={3} borderRadius="full" />
            <Skeleton height="40px" mb={4} />
            <SkeletonText mt={4} noOfLines={2} spacing={3} />
            <Skeleton height="50px" mt={4} borderRadius="lg" />
            <Stack mt={4} spacing={2}>
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} height="20px" />
              ))}
            </Stack>
          </Box>
        )

      case 'testimonial':
        return (
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.05), transparent)',
              animation: getAnimation()
            }}
          >
            <Stack direction="row" align="center" mb={4}>
              <SkeletonCircle size="12" />
              <Box flex={1}>
                <Skeleton height="20px" width="150px" mb={2} />
                <Skeleton height="16px" width="100px" />
              </Box>
            </Stack>
            <SkeletonText noOfLines={3} spacing={3} />
          </Box>
        )

      case 'text':
        return (
          <Box>
            <Skeleton height="30px" width="200px" mb={4} />
            <SkeletonText noOfLines={4} spacing={3} />
          </Box>
        )

      default:
        return (
          <Box
            bg="white"
            borderRadius="lg"
            p={6}
            boxShadow="sm"
            position="relative"
            overflow="hidden"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: getAnimation()
            }}
          >
            <Skeleton height="200px" mb={4} borderRadius="md" />
            <Skeleton height="24px" mb={3} />
            <SkeletonText noOfLines={2} spacing={3} />
            <Skeleton height="40px" mt={4} borderRadius="md" />
          </Box>
        )
    }
  }

  return (
    <Stack spacing={6}>
      {Array.from({ length: count }).map((_, index) => (
        <Box key={index}>{renderSkeleton()}</Box>
      ))}
    </Stack>
  )
}

// Specialized skeleton variants
export const HeroSkeleton = () => <PremiumSkeleton variant="hero" />
export const OfferingSkeleton = () => <PremiumSkeleton variant="offering" count={4} />
export const TestimonialSkeleton = () => <PremiumSkeleton variant="testimonial" count={3} />