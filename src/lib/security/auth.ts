// 🕉️ CANCER AGENT AUTHENTICATION SYSTEM
// Enterprise-grade authentication with spiritual protection
// Supports JWT, OAuth, and multi-factor authentication

import { apiClient } from '../api/client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  profile: UserProfile;
  preferences: UserPreferences;
  lastLogin?: string;
  isVerified: boolean;
  mfaEnabled: boolean;
}

export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin'
}

export enum Permission {
  READ_CONTENT = 'read_content',
  WRITE_CONTENT = 'write_content',
  MANAGE_USERS = 'manage_users',
  MANAGE_COURSES = 'manage_courses',
  MANAGE_PAYMENTS = 'manage_payments',
  VIEW_ANALYTICS = 'view_analytics',
  SYSTEM_ADMIN = 'system_admin'
}

export interface UserProfile {
  avatar?: string;
  bio?: string;
  location?: string;
  timezone?: string;
  language: string;
  spiritualPath?: string;
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced' | 'teacher';
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'private' | 'students_only';
    showProgress: boolean;
  };
  content: {
    difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all';
    topics: string[];
  };
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  tokenType: 'Bearer';
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
  mfaCode?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
  acceptTerms: boolean;
  marketingConsent?: boolean;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

class AuthenticationService {
  private user: User | null = null;
  private tokens: AuthTokens | null = null;
  private refreshTimer: NodeJS.Timeout | null = null;
  private listeners: Array<(user: User | null) => void> = [];

  constructor() {
    this.initializeAuth();
  }

  // Initialize authentication state from storage
  private async initializeAuth(): Promise<void> {
    try {
      const storedTokens = this.getStoredTokens();
      if (storedTokens && this.isTokenValid(storedTokens)) {
        this.tokens = storedTokens;
        apiClient.setAuthToken(storedTokens.accessToken);
        await this.fetchCurrentUser();
        this.scheduleTokenRefresh();
      } else {
        this.clearAuth();
      }
    } catch (error) {
      console.error('Failed to initialize auth:', error);
      this.clearAuth();
    }
  }

  // Token validation
  private isTokenValid(tokens: AuthTokens): boolean {
    return tokens.expiresAt > Date.now() + 60000; // 1 minute buffer
  }

  // Storage utilities
  private getStoredTokens(): AuthTokens | null {
    try {
      const stored = localStorage.getItem('vws_auth_tokens');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }

  private storeTokens(tokens: AuthTokens): void {
    localStorage.setItem('vws_auth_tokens', JSON.stringify(tokens));
  }

  private clearStoredTokens(): void {
    localStorage.removeItem('vws_auth_tokens');
  }

  // User authentication methods
  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/login', {
        email: credentials.email.toLowerCase().trim(),
        password: credentials.password,
        mfaCode: credentials.mfaCode,
        rememberMe: credentials.rememberMe
      });

      if (!response.success) {
        throw new Error(response.message || 'Login failed');
      }

      const { user, tokens } = response.data;
      
      this.setAuth(user, tokens);
      return user;
    } catch (error) {
      this.clearAuth();
      throw this.handleAuthError(error);
    }
  }

  async register(data: RegisterData): Promise<User> {
    if (data.password !== data.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    try {
      const response = await apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/register', {
        email: data.email.toLowerCase().trim(),
        password: data.password,
        name: data.name.trim(),
        acceptTerms: data.acceptTerms,
        marketingConsent: data.marketingConsent
      });

      if (!response.success) {
        throw new Error(response.message || 'Registration failed');
      }

      const { user, tokens } = response.data;
      
      this.setAuth(user, tokens);
      return user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async logout(): Promise<void> {
    try {
      if (this.tokens) {
        await apiClient.post('/auth/logout', {
          refreshToken: this.tokens.refreshToken
        });
      }
    } catch (error) {
      console.warn('Logout request failed:', error);
    } finally {
      this.clearAuth();
    }
  }

  async refreshToken(): Promise<AuthTokens> {
    if (!this.tokens?.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await apiClient.post<{ tokens: AuthTokens }>('/auth/refresh', {
        refreshToken: this.tokens.refreshToken
      });

      if (!response.success) {
        throw new Error('Token refresh failed');
      }

      const { tokens } = response.data;
      this.tokens = tokens;
      this.storeTokens(tokens);
      apiClient.setAuthToken(tokens.accessToken);
      this.scheduleTokenRefresh();

      return tokens;
    } catch (error) {
      this.clearAuth();
      throw this.handleAuthError(error);
    }
  }

  async requestPasswordReset(request: PasswordResetRequest): Promise<void> {
    try {
      const response = await apiClient.post('/auth/password-reset', {
        email: request.email.toLowerCase().trim()
      });

      if (!response.success) {
        throw new Error(response.message || 'Password reset request failed');
      }
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async confirmPasswordReset(data: PasswordResetConfirm): Promise<void> {
    if (data.newPassword !== data.confirmPassword) {
      throw new Error('Passwords do not match');
    }

    try {
      const response = await apiClient.post('/auth/password-reset/confirm', {
        token: data.token,
        newPassword: data.newPassword
      });

      if (!response.success) {
        throw new Error(response.message || 'Password reset failed');
      }
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  // OAuth methods
  async loginWithGoogle(): Promise<string> {
    const state = this.generateState();
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      response_type: 'code',
      scope: 'openid email profile',
      redirect_uri: `${window.location.origin}/auth/google/callback`,
      state,
      access_type: 'offline',
      prompt: 'consent'
    });

    sessionStorage.setItem('oauth_state', state);
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }

  async handleOAuthCallback(code: string, state: string): Promise<User> {
    const storedState = sessionStorage.getItem('oauth_state');
    sessionStorage.removeItem('oauth_state');

    if (!storedState || storedState !== state) {
      throw new Error('Invalid OAuth state');
    }

    try {
      const response = await apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/oauth/google', {
        code,
        redirectUri: `${window.location.origin}/auth/google/callback`
      });

      if (!response.success) {
        throw new Error(response.message || 'OAuth login failed');
      }

      const { user, tokens } = response.data;
      this.setAuth(user, tokens);
      return user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  // Multi-factor authentication
  async enableMFA(): Promise<{ qrCode: string; backupCodes: string[] }> {
    try {
      const response = await apiClient.post<{ qrCode: string; backupCodes: string[] }>('/auth/mfa/enable');

      if (!response.success) {
        throw new Error(response.message || 'Failed to enable MFA');
      }

      return response.data;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async confirmMFA(code: string): Promise<void> {
    try {
      const response = await apiClient.post('/auth/mfa/confirm', { code });

      if (!response.success) {
        throw new Error(response.message || 'Invalid MFA code');
      }

      if (this.user) {
        this.user.mfaEnabled = true;
        this.notifyListeners();
      }
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async disableMFA(password: string): Promise<void> {
    try {
      const response = await apiClient.post('/auth/mfa/disable', { password });

      if (!response.success) {
        throw new Error(response.message || 'Failed to disable MFA');
      }

      if (this.user) {
        this.user.mfaEnabled = false;
        this.notifyListeners();
      }
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  // User management
  private async fetchCurrentUser(): Promise<void> {
    try {
      const response = await apiClient.get<User>('/auth/me');
      
      if (response.success) {
        this.user = response.data;
        this.notifyListeners();
      } else {
        throw new Error('Failed to fetch user');
      }
    } catch (error) {
      console.error('Failed to fetch current user:', error);
      this.clearAuth();
    }
  }

  async updateProfile(updates: Partial<UserProfile>): Promise<User> {
    try {
      const response = await apiClient.patch<User>('/auth/profile', updates);

      if (!response.success) {
        throw new Error(response.message || 'Failed to update profile');
      }

      this.user = response.data;
      this.notifyListeners();
      return response.data;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async updatePreferences(preferences: Partial<UserPreferences>): Promise<User> {
    try {
      const response = await apiClient.patch<User>('/auth/preferences', preferences);

      if (!response.success) {
        throw new Error(response.message || 'Failed to update preferences');
      }

      this.user = response.data;
      this.notifyListeners();
      return response.data;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    try {
      const response = await apiClient.post('/auth/change-password', {
        currentPassword,
        newPassword
      });

      if (!response.success) {
        throw new Error(response.message || 'Failed to change password');
      }
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  // Authentication state management
  private setAuth(user: User, tokens: AuthTokens): void {
    this.user = user;
    this.tokens = tokens;
    this.storeTokens(tokens);
    apiClient.setAuthToken(tokens.accessToken);
    this.scheduleTokenRefresh();
    this.notifyListeners();
  }

  private clearAuth(): void {
    this.user = null;
    this.tokens = null;
    this.clearStoredTokens();
    apiClient.removeAuthToken();
    
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
      this.refreshTimer = null;
    }
    
    this.notifyListeners();
  }

  private scheduleTokenRefresh(): void {
    if (this.refreshTimer) {
      clearTimeout(this.refreshTimer);
    }

    if (!this.tokens) return;

    // Schedule refresh 5 minutes before expiry
    const refreshIn = this.tokens.expiresAt - Date.now() - 300000;
    
    if (refreshIn > 0) {
      this.refreshTimer = setTimeout(() => {
        this.refreshToken().catch(console.error);
      }, refreshIn);
    }
  }

  // Event management
  onAuthChange(listener: (user: User | null) => void): () => void {
    this.listeners.push(listener);
    // Call immediately with current state
    listener(this.user);
    
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.user));
  }

  // Utility methods
  private generateState(): string {
    return btoa(crypto.getRandomValues(new Uint8Array(32)).join(''));
  }

  private handleAuthError(error: any): Error {
    if (error.status === 401) {
      this.clearAuth();
      return new Error('Authentication failed. Please log in again.');
    }
    
    if (error.status === 403) {
      return new Error('Access denied. You do not have permission to perform this action.');
    }
    
    if (error.status === 429) {
      return new Error('Too many requests. Please try again later.');
    }
    
    return error instanceof Error ? error : new Error('An unexpected error occurred');
  }

  // Getters
  get currentUser(): User | null {
    return this.user;
  }

  get isAuthenticated(): boolean {
    return !!this.user && !!this.tokens && this.isTokenValid(this.tokens);
  }

  get userRole(): UserRole | null {
    return this.user?.role || null;
  }

  get userPermissions(): Permission[] {
    return this.user?.permissions || [];
  }

  hasPermission(permission: Permission): boolean {
    return this.userPermissions.includes(permission) || this.userRole === UserRole.SUPER_ADMIN;
  }

  hasRole(role: UserRole): boolean {
    return this.user?.role === role;
  }

  hasAnyRole(roles: UserRole[]): boolean {
    return !!this.user?.role && roles.includes(this.user.role);
  }
}

// Create and export singleton instance
export const authService = new AuthenticationService();

// Export types and service
export default authService;