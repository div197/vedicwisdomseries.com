/**
 * 🕉️ ABUNDANCE HERO COMPONENT
 * Leo Agent - Venus-Jupiter synthesis in visual form
 * August 6, 2025 - Venus Day Manifestation
 */

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Badge,
  Icon,
  useColorModeValue,
  keyframes,
  Flex
} from '@chakra-ui/react';
import { FaInfinity, FaStar, FaGem } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { getVenusColor, getJupiterColor } from '@/data/abundanceData';
import { PremiumButton } from '../premium/PremiumButton';

const shimmerAnimation = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

interface AbundanceHeroProps {
  showVenusDay?: boolean;
}

export const AbundanceHero: React.FC<AbundanceHeroProps> = ({ showVenusDay = true }) => {
  // Venus-Jupiter color synthesis
  const venusGold = getVenusColor('primary');
  const jupiterSaffron = getJupiterColor('primary');
  const divineBlue = '#1E90FF';
  
  // Premium backgrounds
  const heroGradient = useColorModeValue(
    `linear-gradient(135deg, ${venusGold}15 0%, ${jupiterSaffron}10 50%, ${divineBlue}08 100%)`,
    `linear-gradient(135deg, ${venusGold}20 0%, ${jupiterSaffron}15 50%, ${divineBlue}10 100%)`
  );
  
  const glowColor = useColorModeValue(venusGold, jupiterSaffron);

  return (
    <Box
      minH="100vh"
      bg={heroGradient}
      position="relative"
      overflow="hidden"
    >
      {/* Floating Venus-Jupiter Orbs */}
      <Box
        position="absolute"
        top="10%"
        left="15%"
        w="200px"
        h="200px"
        bg={`radial-gradient(circle, ${venusGold}40 0%, transparent 70%)`}
        borderRadius="full"
        filter="blur(60px)"
        animation={`${floatAnimation} 8s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        top="60%"
        right="20%"
        w="150px"
        h="150px"
        bg={`radial-gradient(circle, ${jupiterSaffron}30 0%, transparent 70%)`}
        borderRadius="full"
        filter="blur(40px)"
        animation={`${floatAnimation} 10s ease-in-out infinite reverse`}
      />
      
      {/* Sacred Geometry Pattern */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        bgImage="url('/assets/images/sacred-geometry-venus.svg')"
        bgRepeat="repeat"
        bgSize="300px"
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        <VStack spacing={8} py={20} textAlign="center">
          {/* Venus Day Badge */}
          {showVenusDay && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                bg={`linear-gradient(45deg, ${venusGold}, ${jupiterSaffron})`}
                color="white"
                fontSize="md"
                px={6}
                py={3}
                borderRadius="full"
                boxShadow={`0 8px 32px ${glowColor}40`}
                animation={`${shimmerAnimation} 3s linear infinite`}
                backgroundSize="200% 100%"
              >
                <HStack spacing={2}>
                  <Icon as={FaGem} />
                  <Text>Venus Day Special - August 6, 2025</Text>
                  <Icon as={FaGem} />
                </HStack>
              </Badge>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Heading
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
              bgGradient={`linear-gradient(45deg, ${jupiterSaffron}, ${venusGold})`}
              bgClip="text"
              fontWeight="bold"
              letterSpacing="tight"
              lineHeight="shorter"
            >
              When Venus Abundance Meets
              <br />
              Jupiter Wisdom
            </Heading>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              maxW="4xl"
              color="gray.700"
              fontWeight="medium"
            >
              MIT Scientist Reveals How Ancient Vedic Codes Unlock
              {' '}
              <Text as="span" color={jupiterSaffron} fontWeight="bold">
                Infinite Prosperity
              </Text>
              {' '}Through{' '}
              <Text as="span" color={venusGold} fontWeight="bold">
                Divine Knowledge
              </Text>
            </Text>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Flex
              gap={8}
              flexWrap="wrap"
              justify="center"
              mt={8}
            >
              <VStack>
                <Icon as={FaInfinity} boxSize={8} color={venusGold} />
                <Text fontWeight="bold" fontSize="2xl">1,327</Text>
                <Text fontSize="sm" color="gray.600">Global Seekers</Text>
              </VStack>
              <VStack>
                <Icon as={FaStar} boxSize={8} color={jupiterSaffron} />
                <Text fontWeight="bold" fontSize="2xl">27</Text>
                <Text fontSize="sm" color="gray.600">Countries</Text>
              </VStack>
              <VStack>
                <Icon as={FaGem} boxSize={8} color={divineBlue} />
                <Text fontWeight="bold" fontSize="2xl">99.7%</Text>
                <Text fontSize="sm" color="gray.600">Transformation</Text>
              </VStack>
            </Flex>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <VStack spacing={4} mt={8}>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <PremiumButton
                  size="lg"
                  variant="premium"
                  bg={`linear-gradient(45deg, ${venusGold}, ${jupiterSaffron})`}
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: `0 20px 60px ${glowColor}40`
                  }}
                  px={10}
                  py={7}
                  fontSize="lg"
                  shimmer
                >
                  Activate Your Abundance Portal
                </PremiumButton>
                
                <Button
                  size="lg"
                  variant="outline"
                  borderColor={jupiterSaffron}
                  color={jupiterSaffron}
                  _hover={{
                    bg: `${jupiterSaffron}10`,
                    transform: 'translateY(-2px)'
                  }}
                  px={8}
                  py={7}
                  fontSize="lg"
                >
                  Discover Venus-Jupiter Synthesis
                </Button>
              </HStack>
              
              {/* Urgency Text */}
              <Text
                fontSize="sm"
                color="red.500"
                fontWeight="medium"
                mt={2}
              >
                ⏰ Venus Day Special: 27% Sacred Discount Expires Tonight
              </Text>
            </VStack>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Text
              fontSize="sm"
              color="gray.600"
              fontStyle="italic"
              mt={8}
            >
              "Where Jupiter's wisdom flows, Venus's abundance grows"
              <br />
              - Ancient Vedic Principle
            </Text>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};