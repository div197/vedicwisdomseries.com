import React, { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  VStack,
  Text,
  Icon,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FaEye, FaEyeSlash, FaExclamationTriangle } from 'react-icons/fa'
import { motion } from 'framer-motion'

// Premium Form System - Centralized Chakra UI Form Architecture
// Highest Quality Form Components for Maximum Conversion

interface PremiumInputProps {
  name: string
  label?: string
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number'
  variant?: 'default' | 'glass' | 'floating' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  icon?: IconType
  rightIcon?: IconType
  required?: boolean
  error?: string
  helperText?: string
  value?: string
  onChange?: (value: string) => void
  validate?: (value: string) => string | undefined
}

interface PremiumTextareaProps {
  name: string
  label?: string
  placeholder?: string
  variant?: 'default' | 'glass' | 'floating' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  rows?: number
  required?: boolean
  error?: string
  helperText?: string
  value?: string
  onChange?: (value: string) => void
}

interface PremiumSelectProps {
  name: string
  label?: string
  placeholder?: string
  variant?: 'default' | 'glass' | 'floating' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  options: { value: string; label: string }[]
  required?: boolean
  error?: string
  helperText?: string
  value?: string
  onChange?: (value: string) => void
}

interface FormData {
  [key: string]: string | number | boolean | undefined;
}

interface PremiumFormProps {
  variant?: 'default' | 'card' | 'modal' | 'inline'
  spacing?: number
  onSubmit?: (data: FormData) => void
  children: React.ReactNode
  title?: string
  subtitle?: string
  loading?: boolean
}

// Advanced Input Variants - Custom Hook
const useInputStyles = (variant: string, size: string, hasError: boolean) => {
  // Call all hooks unconditionally at the top level
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBorderColor = useColorModeValue('gray.300', 'gray.500');
  const floatingBorderColor = useColorModeValue('gray.300', 'gray.600');
  const floatingHoverBorderColor = useColorModeValue('gray.400', 'gray.500');

  const baseStyles = {
    default: {
      bg: bgColor,
      border: '2px solid',
      borderColor: hasError ? 'red.300' : borderColor,
      _hover: {
        borderColor: hasError ? 'red.400' : hoverBorderColor
      },
      _focus: {
        borderColor: hasError ? 'red.500' : 'primary.500',
        boxShadow: hasError 
          ? '0 0 0 1px red.500' 
          : '0 0 0 1px primary.500'
      }
    },
    glass: {
      bg: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      _placeholder: { color: 'whiteAlpha.700' },
      _hover: {
        bg: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(255, 255, 255, 0.3)'
      },
      _focus: {
        bg: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'primary.300',
        boxShadow: '0 0 0 1px primary.300'
      }
    },
    floating: {
      bg: 'transparent',
      border: 'none',
      borderBottom: '2px solid',
      borderColor: hasError ? 'red.300' : floatingBorderColor,
      borderRadius: 0,
      px: 0,
      _hover: {
        borderColor: hasError ? 'red.400' : floatingHoverBorderColor
      },
      _focus: {
        borderColor: hasError ? 'red.500' : 'primary.500',
        boxShadow: 'none'
      }
    },
    minimal: {
      bg: useColorModeValue('gray.50', 'gray.900'),
      border: '1px solid transparent',
      _hover: {
        bg: useColorModeValue('gray.100', 'gray.800')
      },
      _focus: {
        bg: useColorModeValue('white', 'gray.800'),
        borderColor: 'primary.500',
        boxShadow: '0 0 0 1px primary.500'
      }
    }
  }

  const sizeStyles = {
    sm: { h: 8, fontSize: 'sm' },
    md: { h: 10, fontSize: 'md' },
    lg: { h: 12, fontSize: 'lg' }
  }

  return {
    ...baseStyles[variant as keyof typeof baseStyles],
    ...sizeStyles[size as keyof typeof sizeStyles]
  }
}

// Premium Input Component
export const PremiumInput: React.FC<PremiumInputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  variant = 'default',
  size = 'md',
  icon,
  rightIcon,
  required = false,
  error,
  helperText,
  value,
  onChange,
  validate
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [touched, setTouched] = useState(false)
  const [localError, setLocalError] = useState<string>()

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type
  const hasError = !!(error || localError)
  const labelColor = useColorModeValue('gray.700', 'gray.300')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange?.(newValue)
    
    if (validate && touched) {
      const validationError = validate(newValue)
      setLocalError(validationError)
    }
  }

  const handleBlur = () => {
    setTouched(true)
    if (validate && value !== undefined) {
      const validationError = validate(value)
      setLocalError(validationError)
    }
  }

  const inputStyles = useInputStyles(variant, size, hasError)

  return (
    <FormControl isInvalid={hasError} isRequired={required}>
      {label && (
        <FormLabel 
          fontSize={size === 'lg' ? 'md' : 'sm'}
          fontWeight="600"
          color={labelColor}
          mb={2}
        >
          {label}
        </FormLabel>
      )}
      
      <InputGroup>
        {icon && (
          <InputLeftElement h={inputStyles.h}>
            <Icon as={icon} color="gray.400" />
          </InputLeftElement>
        )}
        
        <Input
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...inputStyles}
          pl={icon ? 10 : undefined}
          pr={isPassword || rightIcon ? 10 : undefined}
        />
        
        {isPassword && (
          <InputRightElement h={inputStyles.h}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon as={showPassword ? FaEyeSlash : FaEye} color="gray.400" />
            </Button>
          </InputRightElement>
        )}
        
        {rightIcon && !isPassword && (
          <InputRightElement h={inputStyles.h}>
            <Icon as={rightIcon} color="gray.400" />
          </InputRightElement>
        )}
      </InputGroup>
      
      {hasError && (
        <FormErrorMessage fontSize="sm" mt={1}>
          <Icon as={FaExclamationTriangle} mr={1} />
          {error || localError}
        </FormErrorMessage>
      )}
      
      {helperText && !hasError && (
        <FormHelperText fontSize="sm" mt={1}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

// Premium Textarea Component
export const PremiumTextarea: React.FC<PremiumTextareaProps> = ({
  name,
  label,
  placeholder,
  variant = 'default',
  size = 'md',
  rows = 4,
  required = false,
  error,
  helperText,
  value,
  onChange
}) => {
  const hasError = !!error
  const inputStyles = useInputStyles(variant, size, hasError)
  const labelColor = useColorModeValue('gray.700', 'gray.300')

  return (
    <FormControl isInvalid={hasError} isRequired={required}>
      {label && (
        <FormLabel 
          fontSize={size === 'lg' ? 'md' : 'sm'}
          fontWeight="600"
          color={labelColor}
          mb={2}
        >
          {label}
        </FormLabel>
      )}
      
      <Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        rows={rows}
        resize="vertical"
        {...inputStyles}
        minH={`${(rows * 1.5) + 2}rem`}
      />
      
      {hasError && (
        <FormErrorMessage fontSize="sm" mt={1}>
          <Icon as={FaExclamationTriangle} mr={1} />
          {error}
        </FormErrorMessage>
      )}
      
      {helperText && !hasError && (
        <FormHelperText fontSize="sm" mt={1}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

// Premium Select Component
export const PremiumSelect: React.FC<PremiumSelectProps> = ({
  name,
  label,
  placeholder,
  variant = 'default',
  size = 'md',
  options,
  required = false,
  error,
  helperText,
  value,
  onChange
}) => {
  const hasError = !!error
  const inputStyles = useInputStyles(variant, size, hasError)
  const labelColor = useColorModeValue('gray.700', 'gray.300')

  return (
    <FormControl isInvalid={hasError} isRequired={required}>
      {label && (
        <FormLabel 
          fontSize={size === 'lg' ? 'md' : 'sm'}
          fontWeight="600"
          color={labelColor}
          mb={2}
        >
          {label}
        </FormLabel>
      )}
      
      <Select
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...inputStyles}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      
      {hasError && (
        <FormErrorMessage fontSize="sm" mt={1}>
          <Icon as={FaExclamationTriangle} mr={1} />
          {error}
        </FormErrorMessage>
      )}
      
      {helperText && !hasError && (
        <FormHelperText fontSize="sm" mt={1}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

// Premium Form Container
export const PremiumForm: React.FC<PremiumFormProps> = ({
  variant = 'default',
  spacing = 6,
  onSubmit,
  children,
  title,
  subtitle,
  loading: _loading = false
}) => {
  const MotionBox = motion(Box)
  
  // Call hooks unconditionally at the top level
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')
  const modalBg = useColorModeValue('white', 'gray.800')
  const titleColor = useColorModeValue('gray.800', 'white')
  const subtitleColor = useColorModeValue('gray.600', 'gray.400')

  const variantStyles = {
    default: {
      as: 'form' as const
    },
    card: {
      as: 'form' as const,
      bg: cardBg,
      p: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
      border: '1px solid',
      borderColor: cardBorder
    },
    modal: {
      as: 'form' as const,
      bg: modalBg,
      p: 6,
      borderRadius: 'lg'
    },
    inline: {
      as: 'form' as const,
      display: 'flex',
      gap: 4,
      alignItems: 'end'
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.target as HTMLFormElement)
      const data = Object.fromEntries(formData.entries())
      onSubmit(data)
    }
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`premium-form premium-form--${variant}`}
      onSubmit={handleSubmit}
      {...variantStyles[variant]}
    >
      {(title || subtitle) && (
        <VStack spacing={2} mb={spacing} textAlign="center">
          {title && (
            <Text fontSize="2xl" fontWeight="700" color={titleColor}>
              {title}
            </Text>
          )}
          {subtitle && (
            <Text color={subtitleColor}>
              {subtitle}
            </Text>
          )}
        </VStack>
      )}
      
      <VStack spacing={spacing} align="stretch">
        {children}
      </VStack>
    </MotionBox>
  )
}

// Premium Submit Button
interface PremiumSubmitProps {
  children: React.ReactNode
  loading?: boolean
  variant?: 'solid' | 'outline' | 'ghost' | 'gradient'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  icon?: IconType
}

export const PremiumSubmit: React.FC<PremiumSubmitProps> = ({
  children,
  loading = false,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  icon
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      size={size}
      width={fullWidth ? 'full' : 'auto'}
      isLoading={loading}
      leftIcon={icon ? <Icon as={icon} /> : undefined}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg'
      }}
      transition="all 0.3s ease"
    >
      {children}
    </Button>
  )
}

// Export all form components
export {
  PremiumInput as Input,
  PremiumTextarea as Textarea,
  PremiumSelect as Select,
  PremiumForm as Form,
  PremiumSubmit as Submit
}