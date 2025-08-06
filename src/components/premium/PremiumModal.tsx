import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  HStack
} from '@chakra-ui/react'
import { PremiumButton } from './PremiumButton'

/**
 * 🕉️ PREMIUM MODAL SYSTEM
 * Sophisticated modal with multiple variants and animations
 */

interface PremiumModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  variant?: 'default' | 'spiritual' | 'confirmation' | 'fullscreen'
  primaryAction?: {
    label: string
    onClick: () => void
    colorScheme?: string
  }
  secondaryAction?: {
    label: string
    onClick: () => void
  }
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  isCentered?: boolean
}

export const PremiumModal: React.FC<PremiumModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  variant = 'default',
  primaryAction,
  secondaryAction,
  showCloseButton = true,
  closeOnOverlayClick = true,
  isCentered = true
}) => {
  const getModalStyles = () => {
    switch (variant) {
      case 'spiritual':
        return {
          bg: 'white',
          borderRadius: '2xl',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          border: '1px solid',
          borderColor: 'kd.primary.100',
          overflow: 'hidden',
          position: 'relative' as const,
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            bg: 'linear-gradient(90deg, var(--chakra-colors-kd-primary), var(--chakra-colors-kd-secondary), var(--chakra-colors-kd-tertiary))',
          }
        }
      
      case 'confirmation':
        return {
          bg: 'white',
          borderRadius: 'xl',
          boxShadow: 'xl',
          maxW: '400px',
          mx: 'auto'
        }
      
      case 'fullscreen':
        return {
          bg: 'white',
          borderRadius: 0,
          maxW: '100vw',
          maxH: '100vh',
          height: '100vh',
          m: 0
        }
      
      default:
        return {
          bg: 'white',
          borderRadius: 'xl',
          boxShadow: 'lg'
        }
    }
  }

  const overlayStyles = variant === 'spiritual' 
    ? { bg: 'blackAlpha.700', backdropFilter: 'blur(4px)' }
    : { bg: 'blackAlpha.600' }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered={isCentered}
      closeOnOverlayClick={closeOnOverlayClick}
      motionPreset="slideInBottom"
    >
      <ModalOverlay {...overlayStyles} />
      <ModalContent {...getModalStyles()}>
        {title && (
          <ModalHeader
            bg={variant === 'spiritual' ? 'kd.surface.50' : 'transparent'}
            borderBottom={variant === 'spiritual' ? '1px solid' : 'none'}
            borderColor="kd.primary.100"
            fontSize="xl"
            fontWeight="bold"
            color="kd.text.primary"
            pt={variant === 'spiritual' ? 8 : 6}
          >
            {title}
          </ModalHeader>
        )}
        
        {showCloseButton && (
          <ModalCloseButton
            top={variant === 'spiritual' ? 8 : 4}
            right={4}
            size="lg"
            borderRadius="full"
            color="kd.text.secondary"
            _hover={{
              bg: 'kd.surface.100',
              color: 'kd.primary'
            }}
          />
        )}

        <ModalBody py={6}>
          {children}
        </ModalBody>

        {(primaryAction || secondaryAction) && (
          <ModalFooter
            bg={variant === 'spiritual' ? 'kd.surface.50' : 'transparent'}
            borderTop={variant === 'spiritual' ? '1px solid' : 'none'}
            borderColor="kd.primary.100"
          >
            <HStack spacing={4}>
              {secondaryAction && (
                <Button
                  variant="ghost"
                  onClick={secondaryAction.onClick}
                  color="kd.text.secondary"
                  _hover={{ bg: 'kd.surface.100' }}
                >
                  {secondaryAction.label}
                </Button>
              )}
              
              {primaryAction && (
                <PremiumButton
                  onClick={primaryAction.onClick}
                  colorScheme={primaryAction.colorScheme || 'orange'}
                >
                  {primaryAction.label}
                </PremiumButton>
              )}
            </HStack>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

// Hook for easy modal management
// eslint-disable-next-line react-refresh/only-export-components
export const usePremiumModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const openModal = () => onOpen()
  const closeModal = () => onClose()
  
  return {
    isOpen,
    openModal,
    closeModal,
    modalProps: { isOpen, onClose }
  }
}

// Specialized modal variants
export const ConfirmationModal: React.FC<{
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
  confirmText?: string
  cancelText?: string
}> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = 'Confirm',
  cancelText = 'Cancel' 
}) => {
  return (
    <PremiumModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      variant="confirmation"
      size="sm"
      primaryAction={{
        label: confirmText,
        onClick: () => {
          onConfirm()
          onClose()
        }
      }}
      secondaryAction={{
        label: cancelText,
        onClick: onClose
      }}
    >
      <Text color="kd.text.secondary">{message}</Text>
    </PremiumModal>
  )
}