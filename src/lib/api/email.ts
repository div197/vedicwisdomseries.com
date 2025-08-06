// 🕉️ Email Service Integration - Vedic Wisdom Series
// Universal email communication with spiritual consciousness

import { apiClient, ApiResponse } from './client';

// Email Provider Types
export type EmailProvider = 'sendgrid' | 'aws-ses' | 'mailgun' | 'postmark' | 'resend';

// Email Template Types
export type EmailTemplate = 
  | 'welcome'
  | 'course-confirmation'
  | 'payment-receipt'
  | 'course-reminder'
  | 'newsletter'
  | 'password-reset'
  | 'course-completion'
  | 'testimonial-request';

// Email Priority
export type EmailPriority = 'low' | 'normal' | 'high' | 'critical';

// Email Content Interface
export interface EmailContent {
  subject: string;
  htmlBody: string;
  textBody?: string;
  templateId?: string;
  templateData?: Record<string, any>;
}

// Email Recipient
export interface EmailRecipient {
  email: string;
  name?: string;
  metadata?: Record<string, any>;
}

// Email Attachment
export interface EmailAttachment {
  filename: string;
  content: string; // Base64 encoded
  contentType: string;
  size?: number;
}

// Email Request
export interface EmailRequest {
  to: EmailRecipient[];
  cc?: EmailRecipient[];
  bcc?: EmailRecipient[];
  from: EmailRecipient;
  replyTo?: EmailRecipient;
  content: EmailContent;
  attachments?: EmailAttachment[];
  priority?: EmailPriority;
  tags?: string[];
  metadata?: Record<string, any>;
  scheduledFor?: string; // ISO date string
  trackOpens?: boolean;
  trackClicks?: boolean;
}

// Email Status
export type EmailStatus = 'queued' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'failed' | 'spam';

// Email Result
export interface EmailResult {
  success: boolean;
  messageId: string;
  status: EmailStatus;
  scheduledFor?: string;
  error?: string;
  metadata?: Record<string, any>;
}

// Bulk Email Request
export interface BulkEmailRequest {
  from: EmailRecipient;
  template: EmailTemplate;
  templateData?: Record<string, any>;
  recipients: Array<{
    email: string;
    name?: string;
    personalData?: Record<string, any>;
  }>;
  tags?: string[];
  scheduledFor?: string;
}

// Email Analytics
export interface EmailAnalytics {
  messageId: string;
  sent: number;
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
  spam: number;
  unsubscribed: number;
  openRate: number;
  clickRate: number;
  bounceRate: number;
}

// Newsletter Subscription
export interface NewsletterSubscription {
  email: string;
  name?: string;
  preferences: {
    weeklyWisdom: boolean;
    courseUpdates: boolean;
    spiritualInsights: boolean;
    eventNotifications: boolean;
  };
  tags?: string[];
  metadata?: Record<string, any>;
}

class EmailService {
  private provider: EmailProvider;
  private apiKey: string;
  private fromEmail: string;
  private fromName: string;

  constructor(
    provider: EmailProvider,
    apiKey: string,
    fromEmail: string,
    fromName: string = 'Vedic Wisdom Series'
  ) {
    this.provider = provider;
    this.apiKey = apiKey;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
  }

  // Send single email
  async sendEmail(request: EmailRequest): Promise<ApiResponse<EmailResult>> {
    const emailData = {
      provider: this.provider,
      from: {
        email: this.fromEmail,
        name: this.fromName,
        ...request.from
      },
      to: request.to,
      cc: request.cc,
      bcc: request.bcc,
      replyTo: request.replyTo,
      subject: request.content.subject,
      htmlBody: request.content.htmlBody,
      textBody: request.content.textBody,
      templateId: request.content.templateId,
      templateData: request.content.templateData,
      attachments: request.attachments,
      priority: request.priority || 'normal',
      tags: request.tags,
      metadata: {
        platform: 'vedic-wisdom-series',
        timestamp: new Date().toISOString(),
        ...request.metadata
      },
      scheduledFor: request.scheduledFor,
      trackOpens: request.trackOpens ?? true,
      trackClicks: request.trackClicks ?? true
    };

    return apiClient.post('/email/send', emailData);
  }

  // Send bulk email using template
  async sendBulkEmail(request: BulkEmailRequest): Promise<ApiResponse<{ batchId: string; estimatedDelivery: string }>> {
    const bulkData = {
      provider: this.provider,
      from: {
        email: this.fromEmail,
        name: this.fromName,
        ...request.from
      },
      template: request.template,
      templateData: request.templateData,
      recipients: request.recipients,
      tags: request.tags,
      scheduledFor: request.scheduledFor,
      metadata: {
        platform: 'vedic-wisdom-series',
        bulkSend: true,
        timestamp: new Date().toISOString()
      }
    };

    return apiClient.post('/email/bulk', bulkData);
  }

  // Send welcome email for new students
  async sendWelcomeEmail(recipient: EmailRecipient, courseInfo?: any): Promise<ApiResponse<EmailResult>> {
    return this.sendEmail({
      to: [recipient],
      from: { email: this.fromEmail, name: this.fromName },
      content: {
        templateId: 'welcome',
        subject: '🕉️ Welcome to Your Spiritual Journey - Vedic Wisdom Series',
        htmlBody: '', // Will be populated by template
        templateData: {
          studentName: recipient.name || 'Dear Seeker',
          courseInfo,
          loginUrl: `${window.location.origin}/login`,
          supportEmail: 'support@vaidikwisdomseries.com'
        }
      },
      tags: ['welcome', 'onboarding'],
      priority: 'high'
    });
  }

  // Send course confirmation email
  async sendCourseConfirmation(
    recipient: EmailRecipient,
    courseDetails: any,
    paymentInfo: any
  ): Promise<ApiResponse<EmailResult>> {
    return this.sendEmail({
      to: [recipient],
      from: { email: this.fromEmail, name: this.fromName },
      content: {
        templateId: 'course-confirmation',
        subject: `✨ Course Confirmation: ${courseDetails.title}`,
        htmlBody: '',
        templateData: {
          studentName: recipient.name || 'Dear Student',
          courseTitle: courseDetails.title,
          courseDate: courseDetails.startDate,
          courseTime: courseDetails.time,
          instructorName: 'Dr. Nischaya Nagori',
          paymentAmount: paymentInfo.amount,
          paymentId: paymentInfo.transactionId,
          zoomLink: courseDetails.zoomLink,
          calendarLink: courseDetails.calendarLink
        }
      },
      tags: ['course-confirmation', courseDetails.type],
      priority: 'high'
    });
  }

  // Send payment receipt
  async sendPaymentReceipt(
    recipient: EmailRecipient,
    paymentDetails: any
  ): Promise<ApiResponse<EmailResult>> {
    return this.sendEmail({
      to: [recipient],
      from: { email: this.fromEmail, name: this.fromName },
      content: {
        templateId: 'payment-receipt',
        subject: `📄 Payment Receipt - ${paymentDetails.description}`,
        htmlBody: '',
        templateData: {
          customerName: recipient.name || 'Dear Customer',
          amount: paymentDetails.amount,
          currency: paymentDetails.currency,
          transactionId: paymentDetails.transactionId,
          paymentDate: new Date().toISOString(),
          description: paymentDetails.description,
          receiptUrl: paymentDetails.receiptUrl
        }
      },
      tags: ['receipt', 'payment'],
      priority: 'normal'
    });
  }

  // Send course reminder
  async sendCourseReminder(
    recipient: EmailRecipient,
    courseDetails: any,
    reminderType: '24h' | '1h' = '24h'
  ): Promise<ApiResponse<EmailResult>> {
    const reminderTimes = {
      '24h': 'tomorrow',
      '1h': 'in 1 hour'
    };

    return this.sendEmail({
      to: [recipient],
      from: { email: this.fromEmail, name: this.fromName },
      content: {
        templateId: 'course-reminder',
        subject: `🔔 Reminder: Your class starts ${reminderTimes[reminderType]}`,
        htmlBody: '',
        templateData: {
          studentName: recipient.name || 'Dear Student',
          courseTitle: courseDetails.title,
          startTime: courseDetails.startTime,
          zoomLink: courseDetails.zoomLink,
          preparationNotes: courseDetails.preparationNotes
        }
      },
      tags: ['reminder', courseDetails.type, reminderType],
      priority: 'high'
    });
  }

  // Send newsletter
  async sendNewsletter(
    recipients: EmailRecipient[],
    content: {
      subject: string;
      sections: Array<{
        title: string;
        content: string;
        image?: string;
        cta?: { text: string; url: string };
      }>;
    }
  ): Promise<ApiResponse<{ batchId: string }>> {
    return this.sendBulkEmail({
      from: { email: this.fromEmail, name: this.fromName },
      template: 'newsletter',
      templateData: {
        subject: content.subject,
        sections: content.sections,
        unsubscribeUrl: '{{unsubscribe_url}}',
        preferencesUrl: '{{preferences_url}}'
      },
      recipients: recipients.map(r => ({
        email: r.email,
        name: r.name
      })),
      tags: ['newsletter', 'weekly-wisdom']
    });
  }

  // Subscribe to newsletter
  async subscribeToNewsletter(subscription: NewsletterSubscription): Promise<ApiResponse<{ subscriptionId: string }>> {
    return apiClient.post('/email/newsletter/subscribe', {
      ...subscription,
      source: 'website',
      subscribedAt: new Date().toISOString()
    });
  }

  // Unsubscribe from newsletter
  async unsubscribeFromNewsletter(email: string, token?: string): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.post('/email/newsletter/unsubscribe', {
      email,
      token,
      unsubscribedAt: new Date().toISOString()
    });
  }

  // Update newsletter preferences
  async updateNewsletterPreferences(
    email: string,
    preferences: NewsletterSubscription['preferences']
  ): Promise<ApiResponse<{ success: boolean }>> {
    return apiClient.put('/email/newsletter/preferences', {
      email,
      preferences,
      updatedAt: new Date().toISOString()
    });
  }

  // Get email status
  async getEmailStatus(messageId: string): Promise<ApiResponse<{ status: EmailStatus; events: any[] }>> {
    return apiClient.get(`/email/${messageId}/status`);
  }

  // Get email analytics
  async getEmailAnalytics(
    messageId?: string,
    dateRange?: { start: string; end: string },
    tags?: string[]
  ): Promise<ApiResponse<EmailAnalytics | EmailAnalytics[]>> {
    const params: any = {};
    if (messageId) params.messageId = messageId;
    if (dateRange) {
      params.startDate = dateRange.start;
      params.endDate = dateRange.end;
    }
    if (tags) params.tags = tags.join(',');

    return apiClient.get('/email/analytics', { params });
  }

  // Validate email template
  async validateTemplate(templateId: string, templateData: Record<string, any>): Promise<ApiResponse<{ valid: boolean; preview: string }>> {
    return apiClient.post('/email/template/validate', {
      templateId,
      templateData
    });
  }

  // Send test email
  async sendTestEmail(
    testEmail: string,
    templateId: string,
    templateData: Record<string, any>
  ): Promise<ApiResponse<EmailResult>> {
    return this.sendEmail({
      to: [{ email: testEmail, name: 'Test User' }],
      from: { email: this.fromEmail, name: this.fromName },
      content: {
        templateId,
        subject: `[TEST] ${templateId} - Vedic Wisdom Series`,
        htmlBody: '',
        templateData
      },
      tags: ['test'],
      priority: 'low'
    });
  }

  // Handle email webhooks (for tracking events)
  async handleWebhook(payload: any, signature: string): Promise<boolean> {
    try {
      const response = await apiClient.post('/email/webhook', {
        provider: this.provider,
        payload,
        signature
      });
      return response.success;
    } catch (error) {
      console.error('Email webhook handling failed:', error);
      return false;
    }
  }
}

// Email configuration based on environment
const getEmailConfig = () => {
  const provider = import.meta.env.VITE_EMAIL_PROVIDER as EmailProvider || 'sendgrid';
  const apiKey = import.meta.env.VITE_EMAIL_API_KEY || '';
  const fromEmail = import.meta.env.VITE_FROM_EMAIL || 'noreply@vaidikwisdomseries.com';
  const fromName = import.meta.env.VITE_FROM_NAME || 'Vedic Wisdom Series';

  return { provider, apiKey, fromEmail, fromName };
};

// Create and export email service instance
const emailConfig = getEmailConfig();
export const emailService = new EmailService(
  emailConfig.provider,
  emailConfig.apiKey,
  emailConfig.fromEmail,
  emailConfig.fromName
);

// Export types and service class
export { EmailService };

// Email template helpers
export const emailTemplates = {
  getWelcomeSubject: (name?: string) => `🕉️ Welcome ${name ? name + ' ' : ''}to Your Spiritual Journey`,
  
  getCourseReminderSubject: (courseTitle: string, timeFrame: string) => 
    `🔔 Reminder: "${courseTitle}" starts ${timeFrame}`,
  
  getNewsletterSubject: (week: number) => 
    `🌟 Weekly Wisdom #${week} - Ancient Teachings for Modern Life`,
    
  formatCurrency: (amount: number, currency: string = 'USD') => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
};

// Email validation utilities
export const emailUtils = {
  validateEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  sanitizeEmail: (email: string): string => {
    return email.toLowerCase().trim();
  },
  
  generateUnsubscribeToken: (email: string): string => {
    // In production, use proper JWT or similar
    return btoa(`${email}:${Date.now()}`);
  }
};