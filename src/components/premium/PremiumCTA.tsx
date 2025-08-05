import React, { useEffect, useState } from 'react'
import { Box, Button, Text, VStack, HStack, Icon, Badge, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaPhone, FaWhatsapp, FaCalendarCheck, FaOm } from 'react-icons/fa'
import { PremiumButton } from './PremiumButton'

/**
 * 🕉️ PREMIUM CTA SYSTEM
 * Unified conversion-optimized call-to-action component with A/B testing capability
 */

interface CTAVariant {
  id: string
  text: string
  subtext?: string
  icon?: React.ElementType
  urgency?: string
  social?: {
    count: number
    label: string
  }
}

interface PremiumCTAProps {
  variant?: 'primary' | 'secondary' | 'spiritual' | 'booking' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fullWidth?: boolean
  showUrgency?: boolean
  showSocialProof?: boolean
  onClick?: () => void
  href?: string
  isLoading?: boolean
  customText?: string
  abTestId?: string // For A/B testing integration
}

const MotionBox = motion(Box)

// A/B Test variants - can be controlled via analytics
const ctaVariants: Record<string, CTAVariant[]> = {
  primary: [
    {
      id: 'control',
      text: '🕉️ Start Your Spiritual Journey',
      subtext: 'Join 1000+ seekers worldwide',
      urgency: 'Limited seats available'
    },
    {
      id: 'variant_a',
      text: '🕉️ Claim Your Spiritual Awakening Now',
      subtext: 'MIT Scientist reveals ancient secrets',
      urgency: 'Special pricing ends soon'
    },
    {
      id: 'variant_b',
      text: '🕉️ Experience Quantum Consciousness',
      subtext: 'Where Einstein meets the Rishis',
      urgency: 'Next batch starts Monday'
    }
  ],
  booking: [
    {
      id: 'control',
      text: 'Book Your Consultation',
      icon: FaCalendarCheck,
      subtext: 'Free 15-minute discovery call'
    },
    {
      id: 'variant_a',
      text: 'Schedule Your Transformation',
      icon: FaCalendarCheck,
      subtext: 'Personalized spiritual guidance'
    }
  ],
  whatsapp: [
    {
      id: 'control',
      text: 'WhatsApp Dr. Nagori',
      icon: FaWhatsapp,
      subtext: 'Get instant guidance'
    }
  ]
}

export const PremiumCTA: React.FC<PremiumCTAProps> = ({
  variant = 'primary',
  size = 'lg',
  fullWidth = false,
  showUrgency = true,
  showSocialProof = true,
  onClick,
  href,
  isLoading = false,
  customText,
  abTestId = 'control'
}) => {
  const [selectedVariant, setSelectedVariant] = useState<CTAVariant | null>(null)
  const [pulseAnimation, setPulseAnimation] = useState(true)
  
  const bgGradient = useColorModeValue(
    'linear(to-r, kd.primary.400, kd.tertiary.400)',
    'linear(to-r, kd.primary.500, kd.tertiary.500)'
  )
  
  const hoverBgGradient = useColorModeValue(
    'linear(to-r, kd.primary.500, kd.tertiary.500)',
    'linear(to-r, kd.primary.600, kd.tertiary.600)'
  )

  useEffect(() => {
    // Select variant based on A/B test ID or random selection for demo
    const variants = ctaVariants[variant] || ctaVariants.primary
    const selected = variants.find(v => v.id === abTestId) || variants[0]
    setSelectedVariant(selected)
    
    // Track CTA impression for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_impression', {
        cta_variant: selected.id,
        cta_type: variant
      })
    }
  }, [variant, abTestId])

  const handleClick = () => {
    // Track CTA click for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cta_click', {
        cta_variant: selectedVariant?.id,
        cta_type: variant
      })
    }
    
    if (onClick) {
      onClick()
    } else if (href) {
      window.location.href = href
    }
  }

  if (!selectedVariant) return null

  const buttonSize = {
    sm: { py: 3, px: 6, fontSize: 'md' },
    md: { py: 4, px: 8, fontSize: 'lg' },
    lg: { py: 6, px: 10, fontSize: 'xl' },
    xl: { py: 8, px: 12, fontSize: '2xl' }
  }[size]

  return (
    <VStack spacing={3} width={fullWidth ? 'full' : 'auto'}>
      <MotionBox
        position="relative"
        width={fullWidth ? 'full' : 'auto'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect */}
        <Box
          position="absolute"
          inset={-2}
          bg={bgGradient}
          filter="blur(20px)"
          opacity={0.5}
          borderRadius="full"
          animate={pulseAnimation ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Main CTA Button */}
        <Button
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          bgGradient={bgGradient}
          _hover={{ bgGradient: hoverBgGradient }}
          color="white"
          borderRadius="full"
          boxShadow="xl"
          position="relative"
          overflow="hidden"
          isLoading={isLoading}
          onClick={handleClick}
          width={fullWidth ? 'full' : 'auto'}
          {...buttonSize}
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transition: 'left 0.5s',
          }}
          _hover={{
            _before: {
              left: '100%'
            }
          }}
        >
          <HStack spacing={3}>
            {selectedVariant.icon && <Icon as={selectedVariant.icon} />}
            <Text fontWeight="bold">{customText || selectedVariant.text}</Text>
            <Icon as={FaArrowRight} />
          </HStack>
        </Button>
      </MotionBox>

      {/* Subtext */}
      {selectedVariant.subtext && (
        <Text
          color="kd.text.secondary"
          fontSize={size === 'xl' ? 'lg' : 'md'}
          textAlign="center"
        >
          {selectedVariant.subtext}
        </Text>
      )}

      {/* Urgency & Social Proof */}
      <AnimatePresence>
        {(showUrgency || showSocialProof) && (
          <MotionBox
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <HStack spacing={4} flexWrap="wrap" justify="center">
              {showUrgency && selectedVariant.urgency && (
                <Badge
                  colorScheme="red"
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                >
                  🔥 {selectedVariant.urgency}
                </Badge>
              )}
              
              {showSocialProof && selectedVariant.social && (
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                >
                  ✨ {selectedVariant.social.count}+ {selectedVariant.social.label}
                </Badge>
              )}
            </HStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </VStack>
  )
}

// Specialized CTA variants
export const BookingCTA = (props: Omit<PremiumCTAProps, 'variant'>) => (
  <PremiumCTA variant="booking" {...props} />
)

export const WhatsAppCTA = (props: Omit<PremiumCTAProps, 'variant'>) => (
  <PremiumCTA variant="whatsapp" {...props} />
)

export const SpiritualCTA = (props: Omit<PremiumCTAProps, 'variant'>) => (
  <PremiumCTA variant="spiritual" showUrgency showSocialProof {...props} />
)