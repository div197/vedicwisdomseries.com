// 🕉️ API Integration Index - Vedic Wisdom Series
// Central export point for all spiritual integrations

// Core API Client
export { 
  apiClient, 
  UniversalApiClient,
  apiRequest,
  type ApiResponse,
  type ApiError,
  type RequestConfig 
} from './client';

// Payment Integration
export { 
  paymentService, 
  PaymentService,
  formatCurrency,
  validatePaymentAmount,
  type PaymentProvider,
  type PaymentIntent,
  type PaymentResult,
  type PaymentStatus,
  type Subscription 
} from './payments';

// Email Integration
export { 
  emailService, 
  EmailService,
  emailTemplates,
  emailUtils,
  type EmailProvider,
  type EmailTemplate,
  type EmailContent,
  type EmailRecipient,
  type EmailRequest,
  type EmailResult,
  type EmailStatus,
  type NewsletterSubscription 
} from './email';

// Analytics Integration
export { 
  analyticsService, 
  AnalyticsService,
  spiritualAnalytics,
  type AnalyticsProvider,
  type EventCategory,
  type CustomEvent,
  type AnalyticsEvent,
  type PageViewEvent,
  type ConversionEvent,
  type UserJourneyStage,
  type SpiritualUserProperties 
} from './analytics';

// WebSocket Integration
export { 
  wsManager, 
  SpiritualWebSocketClient,
  SpiritualWebSocketManager,
  spiritualWebSocket,
  type WebSocketEventType,
  type WebSocketMessage,
  type ConnectionState 
} from './websocket';

// Integration utilities and helpers
export const integrationUtils = {
  // Initialize all services
  async initializeAll(config?: {
    userId?: string;
    authToken?: string;
    userProperties?: any;
    enableAnalytics?: boolean;
    enableWebSocket?: boolean;
  }) {
    try {
      console.log('🕉️ Initializing spiritual integrations...');
      
      // Set authentication if provided
      if (config?.authToken) {
        apiClient.setAuthToken(config.authToken);
      }

      // Initialize analytics if enabled
      if (config?.enableAnalytics !== false && config?.userId) {
        analyticsService.setUser(config.userId, config.userProperties);
        
        // Track initialization event
        analyticsService.trackEvent({
          name: 'platform_initialized',
          category: 'user_interaction',
          properties: {
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            platform: 'web'
          }
        });
      }

      // Initialize WebSocket connections if enabled
      if (config?.enableWebSocket && config?.authToken) {
        await wsManager.connectAll();
      }

      console.log('✨ All spiritual integrations initialized successfully');
      return true;
    } catch (error) {
      console.error('🚨 Failed to initialize integrations:', error);
      return false;
    }
  },

  // Cleanup all services
  cleanup() {
    try {
      console.log('🕉️ Cleaning up spiritual integrations...');
      
      // Clear API cache
      apiClient.clearCache();
      
      // Clear analytics data
      analyticsService.clearUserData();
      
      // Disconnect WebSockets
      wsManager.disconnectAll();
      
      console.log('✨ Cleanup completed successfully');
    } catch (error) {
      console.error('🚨 Cleanup failed:', error);
    }
  },

  // Health check for all services
  async healthCheck() {
    const results = {
      api: false,
      payments: false,
      email: false,
      analytics: false,
      websocket: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Test API connectivity
      const apiResponse = await apiClient.get('/health', { timeout: 5000 });
      results.api = apiResponse.success;
    } catch (error) {
      console.warn('API health check failed:', error);
    }

    try {
      // Test payment service (just check if initialized)
      results.payments = typeof paymentService !== 'undefined';
    } catch (error) {
      console.warn('Payment service health check failed:', error);
    }

    try {
      // Test email service
      results.email = typeof emailService !== 'undefined';
    } catch (error) {
      console.warn('Email service health check failed:', error);
    }

    try {
      // Test analytics service
      results.analytics = typeof analyticsService !== 'undefined';
    } catch (error) {
      console.warn('Analytics service health check failed:', error);
    }

    return results;
  },

  // Get integration status
  getIntegrationStatus() {
    return {
      api: {
        initialized: typeof apiClient !== 'undefined',
        authenticated: apiClient ? 'Authorization' in apiClient['defaultHeaders'] : false
      },
      payments: {
        initialized: typeof paymentService !== 'undefined'
      },
      email: {
        initialized: typeof emailService !== 'undefined'
      },
      analytics: {
        initialized: typeof analyticsService !== 'undefined'
      },
      websocket: {
        initialized: typeof wsManager !== 'undefined',
        connections: Array.from(wsManager['clients']?.keys() || [])
      }
    };
  }
};

// Spiritual constants for integration
export const spiritualConstants = {
  // Event categories for analytics
  eventCategories: {
    SPIRITUAL_JOURNEY: 'spiritual_journey',
    COURSE_ENGAGEMENT: 'course_engagement',
    PAYMENT: 'payment',
    USER_INTERACTION: 'user_interaction',
    CONTENT_CONSUMPTION: 'content_consumption',
    NEWSLETTER: 'newsletter',
    TESTIMONIAL: 'testimonial',
    MEDITATION: 'meditation',
    COMMUNITY: 'community'
  },

  // Payment amounts (in cents for Stripe, actual values for display)
  courseAmounts: {
    WEEKEND_DISCOURSE: { usd: 2500, inr: 200000, display: '$25 / ₹2000' },
    CHANTING_CLASSES: { usd: 3000, inr: 250000, display: '$30 / ₹2500' },
    TEACHER_TRAINING: { usd: 10000, inr: 800000, display: '$100 / ₹8000' },
    LIFESTYLE_EXPERIENCE: { usd: 0, inr: 0, display: 'Custom Quote' }
  },

  // Email templates
  emailTemplates: {
    WELCOME: 'welcome',
    COURSE_CONFIRMATION: 'course-confirmation',
    PAYMENT_RECEIPT: 'payment-receipt',
    COURSE_REMINDER: 'course-reminder',
    NEWSLETTER: 'newsletter',
    PASSWORD_RESET: 'password-reset',
    COURSE_COMPLETION: 'course-completion',
    TESTIMONIAL_REQUEST: 'testimonial-request'
  },

  // WebSocket event types
  wsEventTypes: {
    LIVE_TEACHING: 'live_teaching',
    MEDITATION_SESSION: 'meditation_session',
    COMMUNITY_CHAT: 'community_chat',
    SPIRITUAL_NOTIFICATION: 'spiritual_notification',
    COURSE_UPDATE: 'course_update',
    TEACHER_PRESENCE: 'teacher_presence',
    GROUP_CHANTING: 'group_chanting',
    WISDOM_SHARING: 'wisdom_sharing',
    STUDENT_PROGRESS: 'student_progress',
    SYSTEM_ANNOUNCEMENT: 'system_announcement'
  },

  // Spiritual journey stages
  journeyStages: {
    AWARENESS: 'awareness',
    INTEREST: 'interest',
    CONSIDERATION: 'consideration',
    TRIAL: 'trial',
    PURCHASE: 'purchase',
    ONBOARDING: 'onboarding',
    ACTIVE: 'active',
    ADVOCATE: 'advocate',
    TRANSCENDENT: 'transcendent'
  }
};

// Default initialization hook for React components
export const useIntegrations = (config?: Parameters<typeof integrationUtils.initializeAll>[0]) => {
  const [initialized, setInitialized] = React.useState(false);
  const [status, setStatus] = React.useState<any>(null);

  React.useEffect(() => {
    integrationUtils.initializeAll(config).then(success => {
      setInitialized(success);
      setStatus(integrationUtils.getIntegrationStatus());
    });

    // Cleanup on unmount
    return () => {
      integrationUtils.cleanup();
    };
  }, []);

  return { initialized, status };
};

// Export React for the hook (if available)
let React: any;
try {
  React = require('react');
} catch {
  // React not available, hook won't work but other exports will
}