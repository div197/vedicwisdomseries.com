/**
 * 🕉️ TRUST-BASED SECURITY SYSTEM
 * Cancer Agent - Protecting spiritual seekers with divine security
 * Venus Day: Abundance flows in trusted environments
 */

import { nishkaamConfig } from '@/config/nishkaamConfig';

// Security Configuration
export const SECURITY_CONFIG = {
  // Trust Indicators
  trustLevel: {
    public: 1,      // Open content
    registered: 2,  // Email verified seekers
    student: 3,     // Active program participants
    teacher: 4,     // Certified teachers
    admin: 5        // Dr. Nagori and team
  },
  
  // Session Management
  session: {
    duration: 7200000, // 2 hours
    refreshWindow: 900000, // 15 minutes
    maxDevices: 3,
    cookieName: 'vws_session',
    storageKey: 'vws_auth'
  },
  
  // Rate Limiting
  rateLimit: {
    public: { requests: 100, window: 3600000 }, // 100/hour
    authenticated: { requests: 1000, window: 3600000 }, // 1000/hour
    api: { requests: 50, window: 60000 } // 50/minute
  },
  
  // Content Protection
  protection: {
    downloadable: ['public', 'sample'],
    streamOnly: ['premium', 'exclusive'],
    watermark: true,
    copyProtection: true
  }
};

// Trust Score Calculator
export class TrustScoreCalculator {
  private factors = {
    emailVerified: 10,
    phoneVerified: 15,
    socialLinked: 5,
    programCompleted: 20,
    testimonialGiven: 25,
    referralsMade: 15,
    paymentHistory: 10
  };

  calculateScore(user: any): number {
    let score = 0;
    
    if (user.emailVerified) score += this.factors.emailVerified;
    if (user.phoneVerified) score += this.factors.phoneVerified;
    if (user.socialProfiles?.length > 0) score += this.factors.socialLinked;
    if (user.completedPrograms?.length > 0) {
      score += this.factors.programCompleted * user.completedPrograms.length;
    }
    if (user.testimonials?.length > 0) score += this.factors.testimonialGiven;
    if (user.referrals?.length > 0) {
      score += Math.min(this.factors.referralsMade * user.referrals.length, 50);
    }
    if (user.payments?.length > 0) score += this.factors.paymentHistory;
    
    return Math.min(score, 100); // Cap at 100
  }

  getTrustLevel(score: number): string {
    if (score >= 80) return 'Divine Trust';
    if (score >= 60) return 'High Trust';
    if (score >= 40) return 'Growing Trust';
    if (score >= 20) return 'Building Trust';
    return 'New Seeker';
  }
}

// Security Headers Manager
export class SecurityHeadersManager {
  getHeaders(): Record<string, string> {
    return {
      // Content Security Policy
      'Content-Security-Policy': this.buildCSP(),
      
      // Security Headers
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': this.buildPermissionsPolicy(),
      
      // HSTS
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      
      // Custom Headers
      'X-Spiritual-Protection': 'Divine-Shield-Active',
      'X-Venus-Abundance': 'Flowing',
      'X-Trust-Required': 'true'
    };
  }

  private buildCSP(): string {
    const directives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.vaidikwisdomseries.com https://api.stripe.com wss://api.vaidikwisdomseries.com",
      "frame-src 'self' https://js.stripe.com https://www.youtube.com",
      "media-src 'self' https://stream.vaidikwisdomseries.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ];
    
    return directives.join('; ');
  }

  private buildPermissionsPolicy(): string {
    const policies = [
      'accelerometer=()',
      'camera=()',
      'geolocation=()',
      'gyroscope=()',
      'magnetometer=()',
      'microphone=()',
      'payment=(self "https://api.stripe.com")',
      'usb=()'
    ];
    
    return policies.join(', ');
  }
}

// Input Sanitization
export class InputSanitizer {
  // Sanitize user input to prevent XSS
  sanitizeHTML(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  // Validate email with spiritual domains allowed
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const blockedDomains = ['tempmail.com', 'throwaway.email'];
    
    if (!emailRegex.test(email)) return false;
    
    const domain = email.split('@')[1];
    return !blockedDomains.includes(domain);
  }

  // Validate phone numbers (international)
  validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  }

  // Sanitize file uploads
  validateFileUpload(file: File): { valid: boolean; reason?: string } {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    
    if (file.size > maxSize) {
      return { valid: false, reason: 'File too large (max 10MB)' };
    }
    
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, reason: 'Invalid file type' };
    }
    
    return { valid: true };
  }
}

// Session Security Manager
export class SessionSecurityManager {
  private readonly storageKey = SECURITY_CONFIG.session.storageKey;

  // Create secure session
  createSession(userId: string, trustLevel: number): string {
    const sessionId = this.generateSecureId();
    const sessionData = {
      id: sessionId,
      userId,
      trustLevel,
      created: Date.now(),
      expires: Date.now() + SECURITY_CONFIG.session.duration,
      fingerprint: this.generateFingerprint()
    };
    
    // Store encrypted in localStorage
    localStorage.setItem(this.storageKey, this.encrypt(JSON.stringify(sessionData)));
    
    return sessionId;
  }

  // Validate session
  validateSession(): { valid: boolean; userId?: string; trustLevel?: number } {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) return { valid: false };
    
    try {
      const sessionData = JSON.parse(this.decrypt(stored));
      
      // Check expiration
      if (sessionData.expires < Date.now()) {
        this.clearSession();
        return { valid: false };
      }
      
      // Verify fingerprint
      if (sessionData.fingerprint !== this.generateFingerprint()) {
        this.clearSession();
        return { valid: false };
      }
      
      return {
        valid: true,
        userId: sessionData.userId,
        trustLevel: sessionData.trustLevel
      };
    } catch {
      this.clearSession();
      return { valid: false };
    }
  }

  // Clear session
  clearSession(): void {
    localStorage.removeItem(this.storageKey);
  }

  // Generate secure ID
  private generateSecureId(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Generate browser fingerprint
  private generateFingerprint(): string {
    const factors = [
      navigator.userAgent,
      navigator.language,
      new Date().getTimezoneOffset(),
      screen.width + 'x' + screen.height,
      screen.colorDepth
    ];
    
    return btoa(factors.join('|'));
  }

  // Simple encryption (in production, use proper encryption)
  private encrypt(data: string): string {
    return btoa(data);
  }

  private decrypt(data: string): string {
    return atob(data);
  }
}

// Export security utilities
export const trustCalculator = new TrustScoreCalculator();
export const securityHeaders = new SecurityHeadersManager();
export const inputSanitizer = new InputSanitizer();
export const sessionManager = new SessionSecurityManager();

// React Hook for Security
export function useSecurityContext() {
  const session = sessionManager.validateSession();
  
  return {
    isAuthenticated: session.valid,
    userId: session.userId,
    trustLevel: session.trustLevel,
    login: (userId: string, trustLevel: number) => {
      return sessionManager.createSession(userId, trustLevel);
    },
    logout: () => {
      sessionManager.clearSession();
    }
  };
}