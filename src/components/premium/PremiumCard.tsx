import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface PremiumCardProps extends BoxProps {
  variant?: 'glass' | 'elevated' | 'gradient'
  premium?: boolean
}

export const PremiumCard: React.FC<PremiumCardProps> = ({ 
  variant = 'elevated', 
  premium = false,
  children, 
  ...props 
}) => {
  const variants = {
    glass: {
      background: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    },
    elevated: {
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    },
    gradient: {
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    }
  }

  const premiumEffects = premium ? {
    position: 'relative' as const,
    overflow: 'hidden',
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #FF9933, #1E90FF, #F2DB49)',
      borderRadius: '20px 20px 0 0',
    }
  } : {}
  
  return (
    <Box
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)'
      }}
      {...variants[variant]}
      {...premiumEffects}
      {...props}
    >
      {children}
    </Box>
  )
}

export default PremiumCard