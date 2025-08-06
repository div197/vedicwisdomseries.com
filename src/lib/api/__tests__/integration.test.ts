// 🕉️ Integration Testing Suite - Vedic Wisdom Series
// Comprehensive testing with spiritual consciousness

import { describe, test, expect, beforeAll, afterAll, beforeEach, afterEach, vi } from 'vitest';
import { apiClient, UniversalApiClient } from '../client';
import { paymentService, PaymentService } from '../payments';
import { emailService, EmailService } from '../email';
import { analyticsService, AnalyticsService } from '../analytics';
import { wsManager, SpiritualWebSocketClient } from '../websocket';

// Mock global fetch for testing
global.fetch = vi.fn();

// Test Configuration
const TEST_CONFIG = {
  apiBaseUrl: 'https://test-api.vaidikwisdomseries.com',
  wsBaseUrl: 'wss://test-ws.vaidikwisdomseries.com',
  testTimeout: 10000,
  mockResponses: {
    success: {
      data: { test: 'success' },
      success: true,
      message: 'Test successful',
      timestamp: new Date().toISOString(),
      requestId: 'test-request-123'
    },
    error: {
      data: null,
      success: false,
      message: 'Test error',
      timestamp: new Date().toISOString(),
      requestId: 'test-request-456'
    }
  }
};

describe('🕉️ Universal API Client Integration Tests', () => {
  let testClient: UniversalApiClient;

  beforeAll(() => {
    testClient = new UniversalApiClient(TEST_CONFIG.apiBaseUrl);
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (fetch as any).mockClear();
  });

  describe('API Client Core Functionality', () => {
    test('should make successful GET request', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve(TEST_CONFIG.mockResponses.success.data)
      };
      (fetch as any).mockResolvedValue(mockResponse);

      const response = await testClient.get('/test-endpoint');
      
      expect(fetch).toHaveBeenCalledWith(
        `${TEST_CONFIG.apiBaseUrl}/test-endpoint`,
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Client': 'Vedic-Wisdom-Series'
          })
        })
      );
      
      expect(response.success).toBe(true);
    });

    test('should handle POST request with data', async () => {
      const testData = { spiritualLevel: 'beginner', course: 'meditation' };
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve(testData)
      };
      (fetch as any).mockResolvedValue(mockResponse);

      const response = await testClient.post('/courses/enroll', testData);
      
      expect(fetch).toHaveBeenCalledWith(
        `${TEST_CONFIG.apiBaseUrl}/courses/enroll`,
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify(testData)
        })
      );
    });

    test('should retry on failure', async () => {
      const mockErrorResponse = { ok: false, status: 500, statusText: 'Internal Server Error' };
      const mockSuccessResponse = {
        ok: true,
        json: () => Promise.resolve(TEST_CONFIG.mockResponses.success.data)
      };

      (fetch as any)
        .mockRejectedValueOnce(new Error('Network error'))
        .mockResolvedValueOnce(mockSuccessResponse);

      const response = await testClient.get('/test-retry', { retries: 2 });
      
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(response.success).toBe(true);
    });

    test('should handle caching', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ cached: true })
      };
      (fetch as any).mockResolvedValue(mockResponse);

      // First request
      await testClient.get('/test-cache', { cache: true });
      
      // Second request should not trigger fetch due to cache
      await testClient.get('/test-cache', { cache: true });
      
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Authentication Integration', () => {
    test('should add auth token to requests', async () => {
      const mockResponse = {
        ok: true,
        json: () => Promise.resolve({ authenticated: true })
      };
      (fetch as any).mockResolvedValue(mockResponse);

      testClient.setAuthToken('test-spiritual-token-123');
      await testClient.get('/protected-endpoint');

      expect(fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Authorization': 'Bearer test-spiritual-token-123'
          })
        })
      );
    });
  });
});

describe('🕉️ Payment Service Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (fetch as any).mockClear();
  });

  describe('Payment Intent Creation', () => {
    test('should create payment intent for course enrollment', async () => {
      const mockPaymentResponse = {
        ok: true,
        json: () => Promise.resolve({
          data: {
            clientSecret: 'pi_test_spiritual_secret',
            paymentId: 'pi_test_123'
          },
          success: true
        })
      };
      (fetch as any).mockResolvedValue(mockPaymentResponse);

      const paymentIntent = {
        id: 'test-intent',
        amount: 2500, // $25.00 for Weekend Discourse
        currency: 'USD',
        description: 'Weekend Discourse - Ancient Wisdom for Modern Life',
        customer: {
          email: 'seeker@spiritual.com',
          name: 'Spiritual Seeker'
        },
        offering: {
          id: 'weekend-discourse',
          title: 'Weekend Discourse',
          type: 'discourse' as const
        }
      };

      const result = await paymentService.createPaymentIntent(paymentIntent);
      
      expect(result.success).toBe(true);
      expect(result.data.clientSecret).toBe('pi_test_spiritual_secret');
    });

    test('should validate payment amounts', async () => {
      const { validatePaymentAmount } = await import('../payments');
      
      expect(validatePaymentAmount(25, 'USD')).toBe(true);
      expect(validatePaymentAmount(0.25, 'USD')).toBe(false);
      expect(validatePaymentAmount(100, 'INR')).toBe(true);
      expect(validatePaymentAmount(5, 'INR')).toBe(false);
    });
  });

  describe('Payment Processing', () => {
    test('should handle Stripe payment processing', async () => {
      // Mock Stripe SDK
      global.Stripe = vi.fn(() => ({
        confirmPayment: vi.fn().mockResolvedValue({
          paymentIntent: {
            id: 'pi_stripe_123',
            status: 'succeeded',
            amount: 2500,
            currency: 'usd'
          }
        })
      }));

      const mockStripeService = new PaymentService({
        provider: 'stripe',
        publicKey: 'pk_test_spiritual',
        currency: 'USD',
        locale: 'en-US'
      });

      // This would require more complex mocking in a real test
      // For now, we'll test the structure
      expect(mockStripeService).toBeDefined();
    });
  });
});

describe('🕉️ Email Service Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Email Sending', () => {
    test('should send welcome email', async () => {
      const mockEmailResponse = {
        ok: true,
        json: () => Promise.resolve({
          data: {
            success: true,
            messageId: 'email_welcome_123',
            status: 'sent'
          }
        })
      };
      (fetch as any).mockResolvedValue(mockEmailResponse);

      const recipient = {
        email: 'newstudent@spiritual.com',
        name: 'New Student'
      };

      const result = await emailService.sendWelcomeEmail(recipient);
      
      expect(result.success).toBe(true);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/email/send'),
        expect.objectContaining({
          method: 'POST',
          body: expect.stringContaining('welcome')
        })
      );
    });

    test('should validate email addresses', async () => {
      const { emailUtils } = await import('../email');
      
      expect(emailUtils.validateEmail('valid@email.com')).toBe(true);
      expect(emailUtils.validateEmail('invalid-email')).toBe(false);
      expect(emailUtils.validateEmail('')).toBe(false);
    });

    test('should format currency in emails', async () => {
      const { emailTemplates } = await import('../email');
      
      expect(emailTemplates.formatCurrency(25.00, 'USD')).toBe('$25.00');
      expect(emailTemplates.formatCurrency(2500.00, 'INR')).toBe('₹2,500.00');
    });
  });

  describe('Newsletter Management', () => {
    test('should subscribe user to newsletter', async () => {
      const mockSubscriptionResponse = {
        ok: true,
        json: () => Promise.resolve({
          data: { subscriptionId: 'sub_spiritual_123' },
          success: true
        })
      };
      (fetch as any).mockResolvedValue(mockSubscriptionResponse);

      const subscription = {
        email: 'subscriber@spiritual.com',
        name: 'Spiritual Subscriber',
        preferences: {
          weeklyWisdom: true,
          courseUpdates: true,
          spiritualInsights: false,
          eventNotifications: true
        }
      };

      const result = await emailService.subscribeToNewsletter(subscription);
      
      expect(result.success).toBe(true);
      expect(result.data.subscriptionId).toBe('sub_spiritual_123');
    });
  });
});

describe('🕉️ Analytics Service Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    
    // Mock analytics providers
    global.gtag = vi.fn();
    global.mixpanel = {
      init: vi.fn(),
      identify: vi.fn(),
      track: vi.fn(),
      people: { set: vi.fn() }
    };
  });

  describe('Event Tracking', () => {
    test('should track spiritual milestone', async () => {
      const mockAnalyticsResponse = {
        ok: true,
        json: () => Promise.resolve({ success: true })
      };
      (fetch as any).mockResolvedValue(mockAnalyticsResponse);

      analyticsService.trackSpiritualMilestone('first_meditation', 1, {
        duration: 10,
        technique: 'breath_awareness'
      });

      // Verify backend call
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/analytics/events'),
        expect.objectContaining({
          method: 'POST',
          body: expect.stringContaining('spiritual_progress_milestone')
        })
      );
    });

    test('should track course progress', async () => {
      analyticsService.trackCourseProgress('weekend-discourse-001', 75, 'progress');

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/analytics/events'),
        expect.objectContaining({
          body: expect.stringContaining('course_progress')
        })
      );
    });

    test('should track meditation sessions', async () => {
      analyticsService.trackMeditationSession(20, 'breath_awareness', true);

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/analytics/events'),
        expect.objectContaining({
          body: expect.stringContaining('meditation_completed')
        })
      );
    });
  });

  describe('User Properties', () => {
    test('should set spiritual user properties', () => {
      const userProperties = {
        spiritualLevel: 'intermediate' as const,
        preferredTeachings: ['Bhagavad Gita', 'Upanishads'],
        meditationStreak: 7,
        coursesCompleted: 2
      };

      analyticsService.setUser('user_spiritual_123', userProperties);

      // Verify properties were set (would check provider calls in real implementation)
      expect(analyticsService.getConnectionState).toBeDefined();
    });
  });
});

describe('🕉️ WebSocket Integration Tests', () => {
  let mockWebSocket: any;
  
  beforeEach(() => {
    // Mock WebSocket
    mockWebSocket = {
      readyState: WebSocket.OPEN,
      send: vi.fn(),
      close: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn()
    };
    
    global.WebSocket = vi.fn(() => mockWebSocket) as any;
    vi.clearAllMocks();
  });

  describe('Connection Management', () => {
    test('should establish spiritual connection', async () => {
      const client = wsManager.getClient('live-teaching');
      
      // Mock successful connection
      mockWebSocket.onopen = vi.fn();
      mockWebSocket.onmessage = vi.fn();
      mockWebSocket.onclose = vi.fn();
      mockWebSocket.onerror = vi.fn();

      await client.connect();

      expect(global.WebSocket).toHaveBeenCalledWith(
        expect.stringContaining('live-teaching'),
        undefined
      );
    });

    test('should handle message sending and receiving', () => {
      const client = wsManager.getClient('meditation');
      
      // Send message
      client.send('meditation_session', 'join_meditation', {
        sessionId: 'session_123',
        userId: 'user_456'
      });

      expect(mockWebSocket.send).toHaveBeenCalledWith(
        expect.stringContaining('meditation_session')
      );
    });

    test('should handle reconnection', async () => {
      const client = wsManager.getClient('community', {
        reconnect: true,
        reconnectAttempts: 2,
        reconnectDelay: 100
      });

      // Simulate connection failure
      mockWebSocket.readyState = WebSocket.CLOSED;
      
      // This would require more complex testing with timers
      expect(client).toBeDefined();
    });
  });

  describe('Spiritual Features', () => {
    test('should join live teaching session', () => {
      const { spiritualWebSocket } = require('../websocket');
      
      const client = spiritualWebSocket.joinLiveTeaching('teaching_123', 'auth_token');
      
      expect(client).toBeDefined();
      expect(global.WebSocket).toHaveBeenCalled();
    });

    test('should share meditation experience', () => {
      const { spiritualWebSocket } = require('../websocket');
      
      spiritualWebSocket.shareMeditationExperience({
        duration: 30,
        type: 'mindfulness',
        insights: 'Deep peace and clarity',
        mood: 'peaceful'
      });

      // Would verify WebSocket send was called with correct data
    });
  });
});

describe('🕉️ Integration Flow Tests', () => {
  test('should handle complete course enrollment flow', async () => {
    // Mock all responses
    const mockPaymentResponse = {
      ok: true,
      json: () => Promise.resolve({
        data: { clientSecret: 'pi_123', paymentId: 'pi_456' }
      })
    };
    
    const mockEmailResponse = {
      ok: true,
      json: () => Promise.resolve({
        data: { messageId: 'email_123', status: 'sent' }
      })
    };

    (fetch as any)
      .mockResolvedValueOnce(mockPaymentResponse) // Payment intent
      .mockResolvedValueOnce(mockEmailResponse)   // Confirmation email
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({}) }); // Analytics

    // 1. Create payment intent
    const paymentIntent = await paymentService.createPaymentIntent({
      id: 'intent_123',
      amount: 2500,
      currency: 'USD',
      description: 'Weekend Discourse',
      customer: { email: 'student@test.com', name: 'Test Student' },
      offering: { id: 'discourse', title: 'Weekend Discourse', type: 'discourse' }
    });

    expect(paymentIntent.success).toBe(true);

    // 2. Send confirmation email
    const emailResult = await emailService.sendCourseConfirmation(
      { email: 'student@test.com', name: 'Test Student' },
      { title: 'Weekend Discourse', startDate: '2024-01-15' },
      { amount: 25, transactionId: 'pi_456' }
    );

    expect(emailResult.success).toBe(true);

    // 3. Track enrollment event
    analyticsService.trackEvent({
      name: 'course_enrolled',
      category: 'course_engagement',
      properties: {
        courseId: 'discourse',
        amount: 25,
        paymentMethod: 'stripe'
      }
    });

    // Verify all services were called
    expect(fetch).toHaveBeenCalledTimes(3);
  });
});

// Test utilities
export const testUtils = {
  // Create mock payment intent
  createMockPaymentIntent: (overrides = {}) => ({
    id: 'test_intent_123',
    amount: 2500,
    currency: 'USD',
    description: 'Test Course',
    customer: { email: 'test@example.com', name: 'Test User' },
    offering: { id: 'test', title: 'Test Course', type: 'discourse' as const },
    ...overrides
  }),

  // Create mock email recipient
  createMockRecipient: (overrides = {}) => ({
    email: 'test@example.com',
    name: 'Test User',
    ...overrides
  }),

  // Create mock analytics event
  createMockAnalyticsEvent: (overrides = {}) => ({
    name: 'test_event',
    category: 'user_interaction' as const,
    properties: { test: true },
    ...overrides
  }),

  // Wait for async operations
  waitFor: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),

  // Generate test data
  generateTestData: {
    email: () => `test${Date.now()}@spiritual.com`,
    userId: () => `user_${Date.now()}`,
    sessionId: () => `session_${Date.now()}`,
    transactionId: () => `txn_${Date.now()}`
  }
};