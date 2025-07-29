/* eslint-disable react-refresh/only-export-components */
// 🕉️ Karpatri Dham - SOTA Error Boundary System
// Implementing Nishkaam Karma Yoga: अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्
// Enterprise-Grade Error Handling with Graceful Degradation

import React, { Component, ErrorInfo, ReactNode } from 'react'
import {
  Box,
  Button,
  Text,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Code,
  Collapse,
  useDisclosure,
  Icon,
  Spinner,
  Badge,
  Divider
} from '@chakra-ui/react'
import { FiRefreshCw, FiHome, FiAlertTriangle, FiChevronDown, FiChevronUp, FiDatabase, FiClock } from 'react-icons/fi'

// ===================================================================
// CONFIGURATION CONSTANTS (INLINE)
// ===================================================================

const SUPABASE_CONFIG = {
  isProduction: !import.meta.env.DEV
}

// ===================================================================
// ERROR CLASSIFICATION SYSTEM
// ===================================================================

export interface ErrorDetails {
  name: string
  message: string
  stack?: string | undefined
  componentStack?: string
  timestamp: string
  url: string
  userAgent: string
  userId?: string
  sessionId?: string
  buildVersion?: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  category: 'network' | 'authentication' | 'database' | 'ui' | 'unknown'
  retryable: boolean
  userFriendlyMessage: string
}

class ErrorClassifier {
  static classifyError(error: Error, errorInfo?: ErrorInfo): ErrorDetails {
    const timestamp = new Date().toISOString()
    const url = window.location.href
    const userAgent = navigator.userAgent
    
    // Default classification
    let severity: ErrorDetails['severity'] = 'medium'
    let category: ErrorDetails['category'] = 'unknown'
    let retryable = false
    let userFriendlyMessage = 'An unexpected error occurred. Please try again.'
    
    const errorMessage = error.message.toLowerCase()
    const errorStack = error.stack?.toLowerCase() || ''
    
    // Network errors
    if (errorMessage.includes('network') || 
        errorMessage.includes('fetch') || 
        errorMessage.includes('connection') ||
        errorMessage.includes('timeout')) {
      category = 'network'
      severity = 'high'
      retryable = true
      userFriendlyMessage = 'Network connection problem. Please check your internet and try again.'
    }
    
    // Authentication errors
    else if (errorMessage.includes('auth') || 
             errorMessage.includes('unauthorized') || 
             errorMessage.includes('permission') ||
             errorMessage.includes('session')) {
      category = 'authentication'
      severity = 'high'
      retryable = false
      userFriendlyMessage = 'Authentication problem. Please sign in again.'
    }
    
    // Database errors
    else if (errorMessage.includes('supabase') || 
             errorMessage.includes('database') || 
             errorMessage.includes('query') ||
             errorMessage.includes('pgrst')) {
      category = 'database'
      severity = 'critical'
      retryable = true
      userFriendlyMessage = 'Database connection issue. Our team has been notified. Please try again in a moment.'
    }
    
    // React/UI errors
    else if (errorStack.includes('react') || 
             errorStack.includes('component') ||
             errorMessage.includes('render') ||
             errorMessage.includes('hook')) {
      category = 'ui'
      severity = 'medium'
      retryable = true
      userFriendlyMessage = 'Interface rendering problem. Please refresh the page.'
    }
    
    // Critical system errors
    else if (errorMessage.includes('memory') || 
             errorMessage.includes('stack overflow') ||
             errorMessage.includes('maximum call stack')) {
      severity = 'critical'
      retryable = false
      userFriendlyMessage = 'System resource issue. Please refresh the page and contact support if this continues.'
    }
    
         return {
       name: error.name,
       message: error.message,
       stack: error.stack || undefined,
       componentStack: errorInfo?.componentStack || undefined,
       timestamp,
       url,
       userAgent,
       severity,
       category,
       retryable,
       userFriendlyMessage
     }
  }
}

// ===================================================================
// ERROR LOGGING SERVICE
// ===================================================================

export class ErrorLogger {
  private static instance: ErrorLogger
  private errorQueue: ErrorDetails[] = []
  private isOnline = navigator.onLine
  
  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger()
      ErrorLogger.instance.setupEventListeners()
    }
    return ErrorLogger.instance
  }
  
  private setupEventListeners() {
    // Online/offline detection
    window.addEventListener('online', () => {
      this.isOnline = true
      this.flushErrorQueue()
    })
    
    window.addEventListener('offline', () => {
      this.isOnline = false
    })
    
    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError(new Error(`Unhandled Promise Rejection: ${event.reason}`))
    })
  }
  
  async logError(error: Error, errorInfo?: ErrorInfo, additionalContext?: Record<string, unknown>) {
    const errorDetails = ErrorClassifier.classifyError(error, errorInfo)
    
    // Add additional context
    if (additionalContext) {
      Object.assign(errorDetails, additionalContext)
    }
    
    // Log to console in development
    if (!SUPABASE_CONFIG.isProduction) {
      console.group('🚨 Error Boundary - Detailed Error Report')
      console.error('Error:', error)
      console.log('Classification:', errorDetails)
      if (errorInfo) {
        console.log('Component Stack:', errorInfo.componentStack)
      }
      console.groupEnd()
    }
    
    // Queue for sending to logging service
    this.errorQueue.push(errorDetails)
    
    // Attempt to send immediately if online
    if (this.isOnline) {
      await this.flushErrorQueue()
    }
    
    // Local storage backup
    this.saveToLocalStorage(errorDetails)
  }
  
  private async flushErrorQueue() {
    if (this.errorQueue.length === 0) return
    
    const errorsToSend = [...this.errorQueue]
    this.errorQueue = []
    
    try {
      // In production, you would send to your error tracking service
      // For now, we'll simulate this
      if (SUPABASE_CONFIG.isProduction) {
        // Example: Send to Sentry, LogRocket, or custom endpoint
        // await fetch('/api/errors', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(errorsToSend)
        // })
        console.log('Would send errors to logging service:', errorsToSend)
      }
    } catch (sendError) {
      // If sending fails, put errors back in queue
      this.errorQueue.unshift(...errorsToSend)
      console.warn('Failed to send error logs:', sendError)
    }
  }
  
  private saveToLocalStorage(errorDetails: ErrorDetails) {
    try {
      const storedErrors = JSON.parse(localStorage.getItem('karpatridham_error_logs') || '[]')
      storedErrors.push(errorDetails)
      
      // Keep only last 10 errors
      if (storedErrors.length > 10) {
        storedErrors.splice(0, storedErrors.length - 10)
      }
      
      localStorage.setItem('karpatridham_error_logs', JSON.stringify(storedErrors))
    } catch (storageError) {
      console.warn('Failed to save error to localStorage:', storageError)
    }
  }
}

// ===================================================================
// ERROR BOUNDARY COMPONENT
// ===================================================================

interface ErrorBoundaryState {
  hasError: boolean
  errorDetails: ErrorDetails | null
  retryCount: number
  isRetrying: boolean
}

interface ErrorBoundaryProps {
  children: ReactNode
  fallbackComponent?: React.ComponentType<{ error: ErrorDetails; onRetry: () => void }>
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  isolateErrors?: boolean
  maxRetries?: number
}

export class ErrorBoundarySota extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private errorLogger = ErrorLogger.getInstance()
  private retryTimeouts: NodeJS.Timeout[] = []
  
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      errorDetails: null,
      retryCount: 0,
      isRetrying: false
    }
  }
  
  static getDerivedStateFromError(_error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true
    }
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorDetails = ErrorClassifier.classifyError(error, errorInfo)
    
    this.setState({ errorDetails })
    
    // Log the error
    this.errorLogger.logError(error, errorInfo, {
      retryCount: this.state.retryCount,
      isolateErrors: this.props.isolateErrors
    })
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }
  
  componentWillUnmount() {
    // Clear any pending retry timeouts
    this.retryTimeouts.forEach(clearTimeout)
  }
  
  handleRetry = () => {
    const { maxRetries = 3 } = this.props
    
    if (this.state.retryCount >= maxRetries) {
      console.warn('Maximum retry attempts reached')
      return
    }
    
    this.setState({ isRetrying: true })
    
    // Exponential backoff: 1s, 2s, 4s
    const retryDelay = Math.pow(2, this.state.retryCount) * 1000
    
    const timeout = setTimeout(() => {
      this.setState({
        hasError: false,
        errorDetails: null,
        retryCount: this.state.retryCount + 1,
        isRetrying: false
      })
    }, retryDelay)
    
    this.retryTimeouts.push(timeout)
  }
  
  handleGoHome = () => {
    window.location.href = '/'
  }
  
  handleReload = () => {
    window.location.reload()
  }
  
  render() {
    if (this.state.hasError && this.state.errorDetails) {
      // Use custom fallback component if provided
      if (this.props.fallbackComponent) {
        const FallbackComponent = this.props.fallbackComponent
        return (
          <FallbackComponent 
            error={this.state.errorDetails} 
            onRetry={this.handleRetry}
          />
        )
      }
      
      // Default error UI
      return <DefaultErrorFallback 
        errorDetails={this.state.errorDetails}
        onRetry={this.handleRetry}
        onGoHome={this.handleGoHome}
        onReload={this.handleReload}
        isRetrying={this.state.isRetrying}
        retryCount={this.state.retryCount}
        maxRetries={this.props.maxRetries || 3}
      />
    }
    
    return this.props.children
  }
}

// ===================================================================
// DEFAULT ERROR FALLBACK COMPONENT
// ===================================================================

interface DefaultErrorFallbackProps {
  errorDetails: ErrorDetails
  onRetry: () => void
  onGoHome: () => void
  onReload: () => void
  isRetrying: boolean
  retryCount: number
  maxRetries: number
}

const DefaultErrorFallback: React.FC<DefaultErrorFallbackProps> = ({
  errorDetails,
  onRetry,
  onGoHome,
  onReload,
  isRetrying,
  retryCount,
  maxRetries
}) => {
  const { isOpen, onToggle } = useDisclosure()
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'green'
      case 'medium': return 'yellow'
      case 'high': return 'orange'
      case 'critical': return 'red'
      default: return 'gray'
    }
  }
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'network': return FiRefreshCw
      case 'authentication': return FiAlertTriangle
      case 'database': return FiDatabase
      case 'ui': return FiHome
      default: return FiAlertTriangle
    }
  }
  
  return (
    <Box 
      minHeight="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      bg="kd.surfaceElevated"
      p={6}
    >
      <Box
        maxWidth="600px"
        width="100%"
        bg="kd.surface"
        borderRadius="lg"
        boxShadow="xl"
        p={8}
      >
        <VStack spacing={6} align="stretch">
          {/* Header */}
          <VStack spacing={4}>
            <Icon 
              as={getCategoryIcon(errorDetails.category)} 
              boxSize={12} 
              color={`${getSeverityColor(errorDetails.severity)}.500`}
            />
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Oops! Something went wrong
            </Text>
            <Text color="kd.textSecondary" textAlign="center">
              {errorDetails.userFriendlyMessage}
            </Text>
          </VStack>
          
          {/* Error Details */}
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            <Box>
              <AlertTitle>Error Details</AlertTitle>
              <AlertDescription>
                <HStack spacing={2} mt={2}>
                  <Badge colorScheme={getSeverityColor(errorDetails.severity)}>
                    {errorDetails.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">
                    {errorDetails.category}
                  </Badge>
                  <Badge variant="outline">
                    <Icon as={FiClock} mr={1} />
                    {new Date(errorDetails.timestamp).toLocaleTimeString()}
                  </Badge>
                </HStack>
              </AlertDescription>
            </Box>
          </Alert>
          
          {/* Action Buttons */}
          <HStack spacing={4} justify="center">
            {errorDetails.retryable && retryCount < maxRetries && (
              <Button
                colorScheme="primary"
                leftIcon={isRetrying ? <Spinner size="sm" /> : <Icon as={FiRefreshCw} />}
                onClick={onRetry}
                isLoading={isRetrying}
                loadingText="Retrying..."
              >
                Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>
            )}
            
            <Button
              variant="outline"
              leftIcon={<Icon as={FiHome} />}
              onClick={onGoHome}
            >
              Go Home
            </Button>
            
            <Button
              variant="ghost"
              leftIcon={<Icon as={FiRefreshCw} />}
              onClick={onReload}
            >
              Reload Page
            </Button>
          </HStack>
          
          {/* Technical Details (Collapsible) */}
          <Box>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              rightIcon={<Icon as={isOpen ? FiChevronUp : FiChevronDown} />}
              width="100%"
            >
              {isOpen ? 'Hide' : 'Show'} Technical Details
            </Button>
            
            <Collapse in={isOpen} animateOpacity>
              <Box mt={4} p={4} bg="kd.surfaceElevated" borderRadius="md">
                <VStack align="stretch" spacing={3}>
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm" mb={1}>Error Message:</Text>
                    <Code p={2} borderRadius="sm" display="block" whiteSpace="pre-wrap">
                      {errorDetails.message}
                    </Code>
                  </Box>
                  
                  {errorDetails.stack && (
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" mb={1}>Stack Trace:</Text>
                      <Code p={2} borderRadius="sm" display="block" whiteSpace="pre-wrap" maxHeight="200px" overflowY="auto">
                        {errorDetails.stack}
                      </Code>
                    </Box>
                  )}
                  
                  <Divider />
                  
                  <HStack spacing={4} fontSize="sm" color="kd.textSecondary">
                    <Text><strong>URL:</strong> {errorDetails.url}</Text>
                    <Text><strong>Time:</strong> {new Date(errorDetails.timestamp).toLocaleString()}</Text>
                  </HStack>
                </VStack>
              </Box>
            </Collapse>
          </Box>
          
          {/* Help Text */}
          <Text fontSize="sm" color="kd.textMuted" textAlign="center">
            If this problem persists, please contact support with the error details above.
            Error ID: {errorDetails.timestamp}
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}

// ===================================================================
// UTILITY HOOKS
// ===================================================================

export const useErrorHandler = () => {
  const errorLogger = ErrorLogger.getInstance()
  
  const logError = React.useCallback((error: Error, context?: Record<string, unknown>) => {
    errorLogger.logError(error, undefined, context)
  }, [errorLogger])
  
  return { logError }
}

// ===================================================================
// HIGHER-ORDER COMPONENT FOR FUNCTION COMPONENTS
// ===================================================================

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => {
    return (
      <ErrorBoundarySota {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundarySota>
    )
  }
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`
  return WrappedComponent
}

export default ErrorBoundarySota 
