// 🕉️ Payment Gateway Integration - Vedic Wisdom Series
// Universal payment processing with spiritual consciousness

import { apiClient, ApiResponse } from './client';

// Payment Provider Types
export type PaymentProvider = 'stripe' | 'razorpay' | 'paypal' | 'square';

// Payment Intent Interface
export interface PaymentIntent {
  id: string;
  amount: number;
  currency: string;
  description?: string;
  metadata?: Record<string, any>;
  customer?: {
    id?: string;
    email: string;
    name: string;
    phone?: string;
  };
  offering?: {
    id: string;
    title: string;
    type: 'discourse' | 'chanting' | 'training' | 'lifestyle';
  };
}

// Payment Status
export type PaymentStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'refunded';

// Payment Result
export interface PaymentResult {
  success: boolean;
  paymentId: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  transactionId?: string;
  receipt?: string;
  error?: string;
  metadata?: Record<string, any>;
}

// Subscription Interface
export interface Subscription {
  id: string;
  customerId: string;
  planId: string;
  status: 'active' | 'cancelled' | 'paused' | 'past_due';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  amount: number;
  currency: string;
  interval: 'month' | 'year';
}

// Payment Configuration
interface PaymentConfig {
  provider: PaymentProvider;
  publicKey: string;
  currency: string;
  locale: string;
  theme?: 'light' | 'dark' | 'spiritual';
}

class PaymentService {
  private config: PaymentConfig;
  private isInitialized = false;
  private providerSDK: any = null;

  constructor(config: PaymentConfig) {
    this.config = config;
  }

  // Initialize payment provider SDK
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      switch (this.config.provider) {
        case 'stripe':
          await this.initializeStripe();
          break;
        case 'razorpay':
          await this.initializeRazorpay();
          break;
        case 'paypal':
          await this.initializePayPal();
          break;
        case 'square':
          await this.initializeSquare();
          break;
        default:
          throw new Error(`Unsupported payment provider: ${this.config.provider}`);
      }
      
      this.isInitialized = true;
      console.log('🕉️ Payment service initialized with divine energy');
    } catch (error) {
      console.error('🚨 Payment initialization failed:', error);
      throw error;
    }
  }

  // Stripe initialization
  private async initializeStripe(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    // Load Stripe.js dynamically
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/';
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    // @ts-ignore
    this.providerSDK = Stripe(this.config.publicKey);
  }

  // Razorpay initialization
  private async initializeRazorpay(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });
  }

  // PayPal initialization
  private async initializePayPal(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${this.config.publicKey}&currency=${this.config.currency}`;
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });
  }

  // Square initialization
  private async initializeSquare(): Promise<void> {
    if (typeof window === 'undefined') return;
    
    const script = document.createElement('script');
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js'; // Use production URL for live
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });
  }

  // Create payment intent
  async createPaymentIntent(intent: PaymentIntent): Promise<ApiResponse<{ clientSecret: string; paymentId: string }>> {
    await this.initialize();
    
    return apiClient.post('/payments/intent', {
      provider: this.config.provider,
      amount: intent.amount,
      currency: intent.currency,
      description: intent.description,
      customer: intent.customer,
      offering: intent.offering,
      metadata: {
        platform: 'vedic-wisdom-series',
        source: 'web',
        ...intent.metadata
      }
    });
  }

  // Process payment with provider-specific logic
  async processPayment(
    paymentIntentId: string,
    paymentMethodData?: any
  ): Promise<PaymentResult> {
    await this.initialize();

    try {
      switch (this.config.provider) {
        case 'stripe':
          return this.processStripePayment(paymentIntentId, paymentMethodData);
        case 'razorpay':
          return this.processRazorpayPayment(paymentIntentId, paymentMethodData);
        case 'paypal':
          return this.processPayPalPayment(paymentIntentId, paymentMethodData);
        case 'square':
          return this.processSquarePayment(paymentIntentId, paymentMethodData);
        default:
          throw new Error(`Payment processing not implemented for ${this.config.provider}`);
      }
    } catch (error) {
      console.error('🚨 Payment processing failed:', error);
      return {
        success: false,
        paymentId: paymentIntentId,
        status: 'failed',
        amount: 0,
        currency: this.config.currency,
        error: error instanceof Error ? error.message : 'Payment failed'
      };
    }
  }

  // Stripe payment processing
  private async processStripePayment(paymentIntentId: string, paymentMethodData?: any): Promise<PaymentResult> {
    const { error, paymentIntent } = await this.providerSDK.confirmPayment({
      elements: paymentMethodData.elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment/success`,
      },
    });

    if (error) {
      return {
        success: false,
        paymentId: paymentIntentId,
        status: 'failed',
        amount: 0,
        currency: this.config.currency,
        error: error.message
      };
    }

    return {
      success: true,
      paymentId: paymentIntent.id,
      status: paymentIntent.status === 'succeeded' ? 'completed' : 'processing',
      amount: paymentIntent.amount / 100, // Stripe uses cents
      currency: paymentIntent.currency,
      transactionId: paymentIntent.id
    };
  }

  // Razorpay payment processing
  private async processRazorpayPayment(paymentIntentId: string, paymentMethodData?: any): Promise<PaymentResult> {
    return new Promise((resolve) => {
      // @ts-ignore
      const razorpay = new Razorpay({
        key: this.config.publicKey,
        amount: paymentMethodData.amount * 100, // Razorpay uses paise
        currency: this.config.currency,
        name: 'Vedic Wisdom Series',
        description: paymentMethodData.description,
        order_id: paymentIntentId,
        handler: (response: any) => {
          resolve({
            success: true,
            paymentId: response.razorpay_payment_id,
            status: 'completed',
            amount: paymentMethodData.amount,
            currency: this.config.currency,
            transactionId: response.razorpay_payment_id
          });
        },
        modal: {
          ondismiss: () => {
            resolve({
              success: false,
              paymentId: paymentIntentId,
              status: 'cancelled',
              amount: paymentMethodData.amount,
              currency: this.config.currency,
              error: 'Payment cancelled by user'
            });
          }
        },
        theme: {
          color: '#FF9933' // Spiritual saffron color
        }
      });

      razorpay.open();
    });
  }

  // PayPal payment processing
  private async processPayPalPayment(paymentIntentId: string, paymentMethodData?: any): Promise<PaymentResult> {
    // Implementation would depend on PayPal SDK integration
    return {
      success: false,
      paymentId: paymentIntentId,
      status: 'failed',
      amount: 0,
      currency: this.config.currency,
      error: 'PayPal integration not yet implemented'
    };
  }

  // Square payment processing
  private async processSquarePayment(paymentIntentId: string, paymentMethodData?: any): Promise<PaymentResult> {
    // Implementation would depend on Square SDK integration
    return {
      success: false,
      paymentId: paymentIntentId,
      status: 'failed',
      amount: 0,
      currency: this.config.currency,
      error: 'Square integration not yet implemented'
    };
  }

  // Refund payment
  async refundPayment(paymentId: string, amount?: number, reason?: string): Promise<ApiResponse<{ refundId: string; status: string }>> {
    return apiClient.post('/payments/refund', {
      paymentId,
      amount,
      reason,
      provider: this.config.provider
    });
  }

  // Get payment status
  async getPaymentStatus(paymentId: string): Promise<ApiResponse<{ status: PaymentStatus; details: any }>> {
    return apiClient.get(`/payments/${paymentId}/status`);
  }

  // Create subscription
  async createSubscription(
    planId: string,
    customerId: string,
    paymentMethodId: string
  ): Promise<ApiResponse<Subscription>> {
    return apiClient.post('/subscriptions', {
      planId,
      customerId,
      paymentMethodId,
      provider: this.config.provider
    });
  }

  // Cancel subscription
  async cancelSubscription(subscriptionId: string): Promise<ApiResponse<{ status: string }>> {
    return apiClient.post(`/subscriptions/${subscriptionId}/cancel`);
  }

  // Get customer subscriptions
  async getCustomerSubscriptions(customerId: string): Promise<ApiResponse<Subscription[]>> {
    return apiClient.get(`/customers/${customerId}/subscriptions`);
  }

  // Webhook verification (for backend)
  async verifyWebhook(payload: string, signature: string): Promise<boolean> {
    try {
      const response = await apiClient.post('/payments/webhook/verify', {
        payload,
        signature,
        provider: this.config.provider
      });
      return response.success;
    } catch (error) {
      console.error('Webhook verification failed:', error);
      return false;
    }
  }
}

// Payment configuration based on environment
const getPaymentConfig = (): PaymentConfig => {
  const isDevelopment = import.meta.env.NODE_ENV === 'development';
  const provider = import.meta.env.VITE_PAYMENT_PROVIDER as PaymentProvider || 'stripe';
  
  let publicKey = '';
  
  switch (provider) {
    case 'stripe':
      publicKey = isDevelopment 
        ? import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY_TEST 
        : import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
      break;
    case 'razorpay':
      publicKey = isDevelopment 
        ? import.meta.env.VITE_RAZORPAY_KEY_TEST 
        : import.meta.env.VITE_RAZORPAY_KEY;
      break;
    case 'paypal':
      publicKey = isDevelopment 
        ? import.meta.env.VITE_PAYPAL_CLIENT_ID_TEST 
        : import.meta.env.VITE_PAYPAL_CLIENT_ID;
      break;
    case 'square':
      publicKey = isDevelopment 
        ? import.meta.env.VITE_SQUARE_APPLICATION_ID_TEST 
        : import.meta.env.VITE_SQUARE_APPLICATION_ID;
      break;
  }

  return {
    provider,
    publicKey,
    currency: import.meta.env.VITE_DEFAULT_CURRENCY || 'USD',
    locale: import.meta.env.VITE_DEFAULT_LOCALE || 'en-US',
    theme: 'spiritual'
  };
};

// Create and export payment service instance
export const paymentService = new PaymentService(getPaymentConfig());

// Export types and utilities
export { PaymentService };

// Utility functions
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount);
};

export const validatePaymentAmount = (amount: number, currency: string = 'USD'): boolean => {
  // Minimum amounts by currency
  const minimums: Record<string, number> = {
    USD: 0.50,
    EUR: 0.50,
    GBP: 0.30,
    INR: 10.00,
    AUD: 0.50,
    CAD: 0.50
  };

  return amount >= (minimums[currency.toUpperCase()] || 0.50);
};