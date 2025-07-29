import React from 'react'
import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface PremiumButtonProps extends ButtonProps {
  variant?: 'premium' | 'glass' | 'luxury'
  icon?: IconType
  shimmer?: boolean
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({ 
  variant = 'premium',
  icon,
  shimmer = false,
  children,
  ...props 
}) => {
  const shimmerEffect = shimmer ? {
    position: 'relative' as const,
    overflow: 'hidden',
    _before: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
      transition: 'left 0.6s',
    },
    _hover: {
      _before: {
        left: '100%'
      }
    }
  } : {}

  return (
    <Button
      variant={variant}
      leftIcon={icon ? <Icon as={icon} /> : undefined}
      {...shimmerEffect}
      {...props}
    >
      {children}
    </Button>
  )
}

export default PremiumButton