import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'framer-motion'

// Premium Animation System - Centralized Motion Architecture
// Highest Quality Animation Components for Maximum Impact

interface PremiumAnimationProps extends BoxProps {
  variant?: 
    | 'fadeIn' 
    | 'slideUp' 
    | 'slideDown' 
    | 'slideLeft' 
    | 'slideRight'
    | 'scaleIn' 
    | 'rotateIn'
    | 'bounceIn'
    | 'flipIn'
    | 'elastic'
    | 'spring'
  duration?: number
  delay?: number
  distance?: number
  once?: boolean
  threshold?: number
  stagger?: number
  children: React.ReactNode
}

interface PremiumStaggerProps extends BoxProps {
  staggerDelay?: number
  duration?: number
  children: React.ReactNode
}

interface PremiumParallaxProps extends BoxProps {
  speed?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  children: React.ReactNode
}

interface PremiumHoverProps extends BoxProps {
  variant?: 'lift' | 'glow' | 'scale' | 'rotate' | 'tilt' | 'float'
  intensity?: 'subtle' | 'normal' | 'strong'
  children: React.ReactNode
}

// Advanced Animation Variants
const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    }
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 }
  },
  elastic: {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 5,
        stiffness: 100
      }
    }
  },
  spring: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  }
}

// Custom Animation Variants with Distance
const getCustomVariant = (variant: string, distance: number): Variants => {
  const baseVariant = animationVariants[variant]
  if (!baseVariant) return animationVariants.fadeIn

  const customVariant = { ...baseVariant }
  
  if (variant === 'slideUp') {
    customVariant.hidden = { opacity: 0, y: distance }
  } else if (variant === 'slideDown') {
    customVariant.hidden = { opacity: 0, y: -distance }
  } else if (variant === 'slideLeft') {
    customVariant.hidden = { opacity: 0, x: distance }
  } else if (variant === 'slideRight') {
    customVariant.hidden = { opacity: 0, x: -distance }
  }

  return customVariant
}

// Premium Animation Component
export const PremiumAnimation: React.FC<PremiumAnimationProps> = ({
  variant = 'fadeIn',
  duration = 0.6,
  delay = 0,
  distance = 50,
  once = true,
  threshold = 0.1,
  children,
  ...props
}) => {
  const MotionBox = motion(Box)
  const variants = getCustomVariant(variant, distance)

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: `${-threshold * 100}%` }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`premium-animation premium-animation--${variant}`}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Premium Stagger Animation
export const PremiumStagger: React.FC<PremiumStaggerProps> = ({
  staggerDelay = 0.1,
  duration = 0.5,
  children,
  ...props
}) => {
  const MotionBox = motion(Box)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration }
    }
  }

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={containerVariants}
      className="premium-stagger"
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </MotionBox>
  )
}

// Premium Parallax Component
export const PremiumParallax: React.FC<PremiumParallaxProps> = ({
  speed = 0.5,
  direction = 'up',
  children,
  ...props
}) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false })

  const directionMap = {
    up: { y: isInView ? 0 : 50 * speed },
    down: { y: isInView ? 0 : -50 * speed },
    left: { x: isInView ? 0 : 50 * speed },
    right: { x: isInView ? 0 : -50 * speed }
  }

  const MotionBox = motion(Box)

  return (
    <MotionBox
      ref={ref}
      animate={directionMap[direction]}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`premium-parallax premium-parallax--${direction}`}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Premium Hover Animation Component
export const PremiumHover: React.FC<PremiumHoverProps> = ({
  variant = 'lift',
  intensity = 'normal',
  children,
  ...props
}) => {
  const intensityMap = {
    subtle: 0.5,
    normal: 1,
    strong: 1.5
  }

  const multiplier = intensityMap[intensity]

  const hoverVariants = {
    lift: {
      y: -8 * multiplier,
      boxShadow: `0 ${12 * multiplier}px ${32 * multiplier}px rgba(0,0,0,0.15)`
    },
    glow: {
      boxShadow: `0 0 ${20 * multiplier}px rgba(255,153,51,0.4), 0 0 ${40 * multiplier}px rgba(255,153,51,0.2)`
    },
    scale: {
      scale: 1 + (0.05 * multiplier)
    },
    rotate: {
      rotate: 5 * multiplier
    },
    tilt: {
      rotateX: 10 * multiplier,
      rotateY: 10 * multiplier
    },
    float: {
      y: [-5 * multiplier, 5 * multiplier, -5 * multiplier],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const MotionBox = motion(Box)

  return (
    <MotionBox
      whileHover={hoverVariants[variant]}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`premium-hover premium-hover--${variant}`}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Premium Loading Animation
interface PremiumLoadingProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'wave' | 'bounce'
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export const PremiumLoading: React.FC<PremiumLoadingProps> = ({
  variant = 'spinner',
  size = 'md',
  color = 'primary.500'
}) => {
  const sizeMap = {
    sm: 4,
    md: 8,
    lg: 12
  }

  const boxSize = sizeMap[size]

  const loadingVariants = {
    spinner: (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        style={{
          width: boxSize * 4,
          height: boxSize * 4,
          border: `2px solid transparent`,
          borderTopColor: color,
          borderRadius: '50%'
        }}
      />
    ),
    dots: (
      <Box display="flex" gap={1}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2
            }}
            style={{
              width: boxSize,
              height: boxSize,
              backgroundColor: color,
              borderRadius: '50%'
            }}
          />
        ))}
      </Box>
    ),
    pulse: (
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{
          width: boxSize * 2,
          height: boxSize * 2,
          backgroundColor: color,
          borderRadius: '50%'
        }}
      />
    ),
    wave: (
      <Box display="flex" gap={1}>
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ scaleY: [1, 2, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1
            }}
            style={{
              width: 3,
              height: boxSize * 2,
              backgroundColor: color,
              borderRadius: 2
            }}
          />
        ))}
      </Box>
    ),
    bounce: (
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          width: boxSize * 2,
          height: boxSize * 2,
          backgroundColor: color,
          borderRadius: '50%'
        }}
      />
    )
  }

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      className={`premium-loading premium-loading--${variant}`}
    >
      {loadingVariants[variant]}
    </Box>
  )
}

// Premium Reveal Animation (for progressive disclosure)
interface PremiumRevealProps extends BoxProps {
  trigger?: boolean
  children: React.ReactNode
}

export const PremiumReveal: React.FC<PremiumRevealProps> = ({
  trigger = true,
  children,
  ...props
}) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      animate={{
        height: trigger ? 'auto' : 0,
        opacity: trigger ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      overflow="hidden"
      className="premium-reveal"
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// Export all animation components
export {
  PremiumAnimation as Animation,
  PremiumStagger as Stagger,
  PremiumParallax as Parallax,
  PremiumHover as Hover,
  PremiumLoading as Loading,
  PremiumReveal as Reveal
}