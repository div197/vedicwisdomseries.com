// 🕉️ Analytics Integration - Vedic Wisdom Series
// Universal analytics tracking with spiritual consciousness

import { apiClient, ApiResponse } from './client';

// Analytics Provider Types
export type AnalyticsProvider = 'google-analytics' | 'mixpanel' | 'amplitude' | 'segment' | 'hotjar';

// Event Categories for Spiritual Platform
export type EventCategory = 
  | 'spiritual_journey'
  | 'course_engagement'
  | 'payment'
  | 'user_interaction'
  | 'content_consumption'
  | 'newsletter'
  | 'testimonial'
  | 'meditation'
  | 'community';

// Custom Events for Vedic Wisdom Series
export type CustomEvent = 
  | 'course_enrolled'
  | 'meditation_completed'
  | 'teaching_viewed'
  | 'testimonial_submitted'
  | 'newsletter_subscribed'
  | 'spiritual_progress_milestone'
  | 'community_joined'
  | 'wisdom_shared'
  | 'chakra_assessment_completed'
  | 'vedic_text_studied';

// User Properties for Spiritual Tracking
export interface SpiritualUserProperties {
  spiritualLevel?: 'beginner' | 'intermediate' | 'advanced' | 'teacher';
  preferredTeachings?: string[];
  meditationStreak?: number;
  coursesCompleted?: number;
  favoriteVedicTexts?: string[];
  spiritualGoals?: string[];
  joinedDate?: string;
  lastActiveDate?: string;
  preferredLanguage?: string;
  timeZone?: string;
  location?: {
    country?: string;
    state?: string;
    city?: string;
  };
}

// Analytics Event Interface
export interface AnalyticsEvent {
  name: string | CustomEvent;
  category: EventCategory;
  properties?: Record<string, any>;
  value?: number;
  userId?: string;
  sessionId?: string;
  timestamp?: string;
  metadata?: Record<string, any>;
}

// Page View Event
export interface PageViewEvent {
  page: string;
  title: string;
  referrer?: string;
  userId?: string;
  sessionId?: string;
  loadTime?: number;
  scrollDepth?: number;
  timeOnPage?: number;
}

// Conversion Event
export interface ConversionEvent {
  eventName: string;
  value: number;
  currency?: string;
  transactionId?: string;
  items?: Array<{
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
  }>;
}

// User Journey Stage
export type UserJourneyStage = 
  | 'awareness'
  | 'interest'
  | 'consideration'
  | 'trial'
  | 'purchase'
  | 'onboarding'
  | 'active'
  | 'advocate'
  | 'transcendent'; // Unique to spiritual platform

// Analytics Configuration
interface AnalyticsConfig {
  providers: {
    googleAnalytics?: {
      measurementId: string;
      enabled: boolean;
    };
    mixpanel?: {
      token: string;
      enabled: boolean;
    };
    amplitude?: {
      apiKey: string;
      enabled: boolean;
    };
    segment?: {
      writeKey: string;
      enabled: boolean;
    };
    hotjar?: {
      hjid: string;
      enabled: boolean;
    };
  };
  enableDebugMode: boolean;
  enableConsentMode: boolean;
  trackingConsent: boolean;
}

class AnalyticsService {
  private config: AnalyticsConfig;
  private isInitialized = false;
  private providers: Map<AnalyticsProvider, any> = new Map();
  private sessionId: string;
  private userId?: string;
  private userProperties: SpiritualUserProperties = {};
  private eventQueue: AnalyticsEvent[] = [];

  constructor(config: AnalyticsConfig) {
    this.config = config;
    this.sessionId = this.generateSessionId();
    
    // Initialize providers based on config
    this.initializeProviders();
  }

  // Initialize all enabled analytics providers
  private async initializeProviders(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Google Analytics 4
      if (this.config.providers.googleAnalytics?.enabled) {
        await this.initializeGoogleAnalytics();
      }

      // Mixpanel
      if (this.config.providers.mixpanel?.enabled) {
        await this.initializeMixpanel();
      }

      // Amplitude
      if (this.config.providers.amplitude?.enabled) {
        await this.initializeAmplitude();
      }

      // Hotjar
      if (this.config.providers.hotjar?.enabled) {
        await this.initializeHotjar();
      }

      this.isInitialized = true;
      this.flushEventQueue();
      
      console.log('🕉️ Analytics service initialized with divine consciousness');
    } catch (error) {
      console.error('🚨 Analytics initialization failed:', error);
    }
  }

  // Initialize Google Analytics 4
  private async initializeGoogleAnalytics(): Promise<void> {
    if (typeof window === 'undefined') return;

    const measurementId = this.config.providers.googleAnalytics!.measurementId;

    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter: 'spiritual_level'
      }
    });

    this.providers.set('google-analytics', gtag);
  }

  // Initialize Mixpanel
  private async initializeMixpanel(): Promise<void> {
    if (typeof window === 'undefined') return;

    const token = this.config.providers.mixpanel!.token;

    // Load Mixpanel script
    const script = document.createElement('script');
    script.src = 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    // Initialize Mixpanel
    (window as any).mixpanel.init(token, {
      debug: this.config.enableDebugMode,
      track_pageview: true,
      persistence: 'localStorage'
    });

    this.providers.set('mixpanel', (window as any).mixpanel);
  }

  // Initialize Amplitude
  private async initializeAmplitude(): Promise<void> {
    if (typeof window === 'undefined') return;

    const apiKey = this.config.providers.amplitude!.apiKey;

    // Load Amplitude script
    const script = document.createElement('script');
    script.src = 'https://cdn.amplitude.com/libs/amplitude-8.21.9-min.gz.js';
    script.async = true;
    document.head.appendChild(script);

    await new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    // Initialize Amplitude
    (window as any).amplitude.getInstance().init(apiKey);

    this.providers.set('amplitude', (window as any).amplitude.getInstance());
  }

  // Initialize Hotjar
  private async initializeHotjar(): Promise<void> {
    if (typeof window === 'undefined') return;

    const hjid = this.config.providers.hotjar!.hjid;

    // Hotjar tracking code
    (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      h.hj = h.hj || function (...args: any[]) { (h.hj.q = h.hj.q || []).push(args); };
      h._hjSettings = { hjid, hjsv: 6 };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

    this.providers.set('hotjar', (window as any).hj);
  }

  // Generate unique session ID
  private generateSessionId(): string {
    return `vws_session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Set user ID and properties
  setUser(userId: string, properties?: SpiritualUserProperties): void {
    this.userId = userId;
    if (properties) {
      this.userProperties = { ...this.userProperties, ...properties };
    }

    // Set user for each provider
    this.providers.forEach((provider, providerName) => {
      switch (providerName) {
        case 'google-analytics':
          provider('config', this.config.providers.googleAnalytics!.measurementId, {
            user_id: userId,
            custom_parameter: properties?.spiritualLevel
          });
          break;
        case 'mixpanel':
          provider.identify(userId);
          if (properties) provider.people.set(properties);
          break;
        case 'amplitude':
          provider.setUserId(userId);
          if (properties) provider.setUserProperties(properties);
          break;
      }
    });
  }

  // Update user properties
  updateUserProperties(properties: Partial<SpiritualUserProperties>): void {
    this.userProperties = { ...this.userProperties, ...properties };

    this.providers.forEach((provider, providerName) => {
      switch (providerName) {
        case 'mixpanel':
          provider.people.set(properties);
          break;
        case 'amplitude':
          provider.setUserProperties(properties);
          break;
      }
    });
  }

  // Track custom event
  trackEvent(event: AnalyticsEvent): void {
    if (!this.isInitialized) {
      this.eventQueue.push(event);
      return;
    }

    const enrichedEvent = {
      ...event,
      userId: event.userId || this.userId,
      sessionId: event.sessionId || this.sessionId,
      timestamp: event.timestamp || new Date().toISOString(),
      metadata: {
        platform: 'vedic-wisdom-series',
        userAgent: navigator.userAgent,
        ...event.metadata
      }
    };

    // Track on each provider
    this.providers.forEach((provider, providerName) => {
      switch (providerName) {
        case 'google-analytics':
          provider('event', event.name, {
            event_category: event.category,
            event_label: JSON.stringify(event.properties),
            value: event.value,
            custom_parameter: this.userProperties.spiritualLevel
          });
          break;
        case 'mixpanel':
          provider.track(event.name, {
            category: event.category,
            ...event.properties,
            $insert_id: enrichedEvent.timestamp
          });
          break;
        case 'amplitude':
          provider.logEvent(event.name, {
            category: event.category,
            ...event.properties
          });
          break;
      }
    });

    // Send to backend for additional processing
    this.sendEventToBackend(enrichedEvent);
  }

  // Track page view
  trackPageView(pageView: PageViewEvent): void {
    const event: AnalyticsEvent = {
      name: 'page_view',
      category: 'user_interaction',
      properties: {
        page: pageView.page,
        title: pageView.title,
        referrer: pageView.referrer,
        loadTime: pageView.loadTime,
        scrollDepth: pageView.scrollDepth,
        timeOnPage: pageView.timeOnPage
      },
      userId: pageView.userId,
      sessionId: pageView.sessionId
    };

    this.trackEvent(event);
  }

  // Track conversion
  trackConversion(conversion: ConversionEvent): void {
    const event: AnalyticsEvent = {
      name: conversion.eventName,
      category: 'payment',
      value: conversion.value,
      properties: {
        currency: conversion.currency,
        transactionId: conversion.transactionId,
        items: conversion.items
      }
    };

    this.trackEvent(event);

    // Special handling for Google Analytics Enhanced Ecommerce
    if (this.providers.has('google-analytics')) {
      const gtag = this.providers.get('google-analytics');
      gtag('event', 'purchase', {
        transaction_id: conversion.transactionId,
        value: conversion.value,
        currency: conversion.currency,
        items: conversion.items
      });
    }
  }

  // Track spiritual milestone
  trackSpiritualMilestone(milestone: string, level: number, metadata?: any): void {
    this.trackEvent({
      name: 'spiritual_progress_milestone',
      category: 'spiritual_journey',
      value: level,
      properties: {
        milestone,
        level,
        progressPercentage: (level / 100) * 100,
        ...metadata
      }
    });
  }

  // Track course progress
  trackCourseProgress(courseId: string, progress: number, action: 'start' | 'progress' | 'complete'): void {
    this.trackEvent({
      name: 'course_progress',
      category: 'course_engagement',
      value: progress,
      properties: {
        courseId,
        progress,
        action,
        completionRate: progress / 100
      }
    });
  }

  // Track meditation session
  trackMeditationSession(duration: number, type: string, completed: boolean): void {
    this.trackEvent({
      name: 'meditation_completed',
      category: 'meditation',
      value: duration,
      properties: {
        durationType: this.categorizeDuration(duration),
        meditationType: type,
        completed,
        sessionQuality: completed ? 'complete' : 'partial'
      }
    });
  }

  // Categorize meditation duration
  private categorizeDuration(minutes: number): string {
    if (minutes < 5) return 'micro';
    if (minutes < 15) return 'short';
    if (minutes < 30) return 'medium';
    if (minutes < 60) return 'long';
    return 'extended';
  }

  // Set user journey stage
  setUserJourneyStage(stage: UserJourneyStage): void {
    this.updateUserProperties({ 
      currentJourneyStage: stage,
      lastStageUpdate: new Date().toISOString()
    } as any);

    this.trackEvent({
      name: 'journey_stage_transition',
      category: 'spiritual_journey',
      properties: {
        stage,
        previousStage: this.userProperties.currentJourneyStage,
        transitionTime: new Date().toISOString()
      }
    });
  }

  // Flush queued events
  private flushEventQueue(): void {
    this.eventQueue.forEach(event => this.trackEvent(event));
    this.eventQueue = [];
  }

  // Send event to backend for processing
  private async sendEventToBackend(event: AnalyticsEvent): Promise<void> {
    try {
      await apiClient.post('/analytics/events', event, {
        timeout: 5000,
        retries: 1
      });
    } catch (error) {
      if (this.config.enableDebugMode) {
        console.warn('Failed to send event to backend:', error);
      }
    }
  }

  // Get user analytics summary
  async getUserAnalytics(userId: string, dateRange?: { start: string; end: string }): Promise<ApiResponse<any>> {
    return apiClient.get(`/analytics/users/${userId}`, {
      params: {
        startDate: dateRange?.start,
        endDate: dateRange?.end
      }
    });
  }

  // Get course analytics
  async getCourseAnalytics(courseId: string): Promise<ApiResponse<any>> {
    return apiClient.get(`/analytics/courses/${courseId}`);
  }

  // Enable/disable tracking based on consent
  setTrackingConsent(consent: boolean): void {
    this.config.trackingConsent = consent;

    if (this.providers.has('google-analytics')) {
      const gtag = this.providers.get('google-analytics');
      gtag('consent', 'update', {
        analytics_storage: consent ? 'granted' : 'denied',
        ad_storage: consent ? 'granted' : 'denied'
      });
    }
  }

  // Clear user data (GDPR compliance)
  clearUserData(): void {
    this.userId = undefined;
    this.userProperties = {};
    
    this.providers.forEach((provider, providerName) => {
      switch (providerName) {
        case 'mixpanel':
          provider.reset();
          break;
        case 'amplitude':
          provider.setUserId(null);
          provider.clearUserProperties();
          break;
      }
    });
  }
}

// Analytics configuration based on environment
const getAnalyticsConfig = (): AnalyticsConfig => {
  const isDevelopment = import.meta.env.NODE_ENV === 'development';
  
  return {
    providers: {
      googleAnalytics: {
        measurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || '',
        enabled: Boolean(import.meta.env.VITE_GA_MEASUREMENT_ID)
      },
      mixpanel: {
        token: import.meta.env.VITE_MIXPANEL_TOKEN || '',
        enabled: Boolean(import.meta.env.VITE_MIXPANEL_TOKEN)
      },
      amplitude: {
        apiKey: import.meta.env.VITE_AMPLITUDE_API_KEY || '',
        enabled: Boolean(import.meta.env.VITE_AMPLITUDE_API_KEY)
      },
      hotjar: {
        hjid: import.meta.env.VITE_HOTJAR_HJID || '',
        enabled: Boolean(import.meta.env.VITE_HOTJAR_HJID)
      }
    },
    enableDebugMode: isDevelopment,
    enableConsentMode: true,
    trackingConsent: true
  };
};

// Create and export analytics service instance
export const analyticsService = new AnalyticsService(getAnalyticsConfig());

// Export types and service class
export { AnalyticsService };

// Spiritual analytics helpers
export const spiritualAnalytics = {
  // Track specific Vedic wisdom events
  trackVedicTextStudy: (textName: string, chapterOrVerse: string, timeSpent: number) => {
    analyticsService.trackEvent({
      name: 'vedic_text_studied',
      category: 'content_consumption',
      value: timeSpent,
      properties: {
        textName,
        chapterOrVerse,
        studyDuration: timeSpent,
        textCategory: textName.includes('Gita') ? 'Bhagavad Gita' : 
                     textName.includes('Upanishad') ? 'Upanishads' : 'Other'
      }
    });
  },

  // Track spiritual practice consistency
  trackSpiritualPractice: (practice: string, consistency: number, streak: number) => {
    analyticsService.trackEvent({
      name: 'spiritual_practice_logged',
      category: 'spiritual_journey', 
      value: consistency,
      properties: {
        practice,
        consistency,
        streak,
        practiceCategory: practice.includes('meditation') ? 'meditation' : 
                         practice.includes('mantra') ? 'chanting' : 
                         practice.includes('yoga') ? 'yoga' : 'other'
      }
    });
  }
};