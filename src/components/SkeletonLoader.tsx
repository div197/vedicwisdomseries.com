import React from 'react';
import { 
  Box, 
  Skeleton, 
  SkeletonText,
  VStack,
  HStack,
  Grid,
  GridItem
} from '@chakra-ui/react';

export const HeroSkeleton: React.FC = () => (
  <Box minH="60vh" w="full" p={8}>
    <VStack spacing={6} align="center" justify="center" h="full">
      <Skeleton height="60px" width="80%" maxW="600px" />
      <Skeleton height="40px" width="60%" maxW="400px" />
      <SkeletonText
        mt={4}
        noOfLines={3}
        spacing={4}
        skeletonHeight={4}
        width="70%"
        maxW="500px"
      />
      <HStack spacing={4} mt={8}>
        <Skeleton height="48px" width="150px" borderRadius="md" />
        <Skeleton height="48px" width="150px" borderRadius="md" />
      </HStack>
    </VStack>
  </Box>
);

export const CardGridSkeleton: React.FC<{ count?: number }> = ({ count = 4 }) => (
  <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} p={6}>
    {Array.from({ length: count }).map((_, index) => (
      <GridItem key={index}>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p={6}
          bg="white"
          shadow="sm"
        >
          <Skeleton height="200px" mb={4} borderRadius="md" />
          <Skeleton height="24px" width="80%" mb={3} />
          <SkeletonText
            noOfLines={3}
            spacing={3}
            skeletonHeight={3}
          />
          <HStack spacing={4} mt={4}>
            <Skeleton height="32px" width="80px" borderRadius="md" />
            <Skeleton height="32px" width="100px" borderRadius="md" />
          </HStack>
        </Box>
      </GridItem>
    ))}
  </Grid>
);

export const ContentSkeleton: React.FC = () => (
  <Box maxW="4xl" mx="auto" p={6}>
    <VStack spacing={6} align="stretch">
      <Skeleton height="48px" width="70%" />
      <Skeleton height="20px" width="40%" />
      <SkeletonText
        mt={4}
        noOfLines={8}
        spacing={4}
        skeletonHeight={4}
      />
      <Box>
        <Skeleton height="300px" borderRadius="md" />
      </Box>
      <SkeletonText
        mt={4}
        noOfLines={6}
        spacing={4}
        skeletonHeight={4}
      />
    </VStack>
  </Box>
);

export const TeachingsSkeleton: React.FC = () => (
  <VStack spacing={8} w="full">
    <HeroSkeleton />
    <Box w="full" maxW="6xl" mx="auto" px={6}>
      <Skeleton height="40px" width="50%" mb={6} />
      <CardGridSkeleton count={4} />
    </Box>
  </VStack>
);

export const ContactSkeleton: React.FC = () => (
  <Box maxW="4xl" mx="auto" p={6}>
    <VStack spacing={8}>
      <Skeleton height="48px" width="60%" />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} w="full">
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Skeleton height="24px" width="40%" />
            <Skeleton height="300px" borderRadius="md" />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing={4} align="stretch">
            <Skeleton height="24px" width="50%" />
            <VStack spacing={3}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} height="48px" borderRadius="md" />
              ))}
            </VStack>
            <Skeleton height="48px" borderRadius="md" />
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  </Box>
);

export const AboutSkeleton: React.FC = () => (
  <VStack spacing={8} w="full">
    <Box w="full" bg="gray.50" py={16}>
      <VStack spacing={6} align="center" maxW="4xl" mx="auto" px={6}>
        <Skeleton height="56px" width="70%" />
        <SkeletonText
          noOfLines={3}
          spacing={4}
          skeletonHeight={4}
          width="80%"
        />
      </VStack>
    </Box>
    <Box maxW="6xl" mx="auto" px={6}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
        <GridItem>
          <Skeleton height="400px" borderRadius="lg" />
        </GridItem>
        <GridItem>
          <VStack spacing={6} align="stretch">
            <Skeleton height="32px" width="60%" />
            <SkeletonText
              noOfLines={6}
              spacing={4}
              skeletonHeight={4}
            />
            <Skeleton height="48px" width="150px" borderRadius="md" />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  </VStack>
);

export const NewsSkeleton: React.FC = () => (
  <Box maxW="6xl" mx="auto" p={6}>
    <VStack spacing={8}>
      <Skeleton height="48px" width="40%" />
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {Array.from({ length: 6 }).map((_, index) => (
          <GridItem key={index}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
              shadow="sm"
            >
              <Skeleton height="200px" />
              <Box p={6}>
                <Skeleton height="24px" mb={3} />
                <SkeletonText
                  noOfLines={3}
                  spacing={3}
                  skeletonHeight={3}
                />
                <Skeleton height="16px" width="30%" mt={4} />
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </VStack>
  </Box>
);

export default {
  HeroSkeleton,
  CardGridSkeleton,
  ContentSkeleton,
  TeachingsSkeleton,
  ContactSkeleton,
  AboutSkeleton,
  NewsSkeleton
};