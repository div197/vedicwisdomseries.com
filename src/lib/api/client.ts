// 🕉️ Universal API Client - Vedic Wisdom Series Integration Layer
// Comprehensive API client with spiritual essence and enterprise capabilities

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: string;
  requestId: string;
}

export interface ApiError extends Error {
  status?: number;
  code?: string;
  details?: any;
  requestId?: string;
}

export interface RequestConfig {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  cache?: boolean;
  cacheExpiry?: number;
}

class UniversalApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private cache: Map<string, { data: any; expiry: number }> = new Map();
  private requestInterceptors: Array<(config: RequestConfig) => RequestConfig | Promise<RequestConfig>> = [];
  private responseInterceptors: Array<(response: any) => any | Promise<any>> = [];
  private errorInterceptors: Array<(error: ApiError) => ApiError | Promise<ApiError>> = [];

  constructor(baseUrl: string = '', defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Client': 'Vedic-Wisdom-Series',
      'X-Client-Version': '1.0.0',
      ...defaultHeaders
    };

    // Add default interceptors
    this.addResponseInterceptor(this.defaultResponseInterceptor.bind(this));
    this.addErrorInterceptor(this.defaultErrorInterceptor.bind(this));
  }

  // Request Interceptors
  addRequestInterceptor(interceptor: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>) {
    this.requestInterceptors.push(interceptor);
  }

  // Response Interceptors
  addResponseInterceptor(interceptor: (response: any) => any | Promise<any>) {
    this.responseInterceptors.push(interceptor);
  }

  // Error Interceptors
  addErrorInterceptor(interceptor: (error: ApiError) => ApiError | Promise<ApiError>) {
    this.errorInterceptors.push(interceptor);
  }

  // Default response interceptor
  private defaultResponseInterceptor(response: Response): Promise<ApiResponse> {
    return response.json().then(data => ({
      data,
      success: response.ok,
      message: data.message || (response.ok ? 'Success' : 'Request failed'),
      timestamp: new Date().toISOString(),
      requestId: this.generateRequestId()
    }));
  }

  // Default error interceptor
  private defaultErrorInterceptor(error: ApiError): ApiError {
    console.error('🚨 API Error:', error.message, {
      status: error.status,
      code: error.code,
      requestId: error.requestId
    });
    return error;
  }

  // Generate unique request ID
  private generateRequestId(): string {
    return `vws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Cache utilities
  private getCacheKey(url: string, params?: Record<string, any>): string {
    const paramString = params ? JSON.stringify(params) : '';
    return `${url}${paramString}`;
  }

  private getFromCache(key: string): any | null {
    const cached = this.cache.get(key);
    if (cached && cached.expiry > Date.now()) {
      return cached.data;
    }
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, data: any, expiry: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + expiry
    });
  }

  // Main request method
  private async makeRequest<T>(
    method: string,
    endpoint: string,
    data?: any,
    config: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const {
      timeout = 30000,
      retries = 3,
      retryDelay = 1000,
      headers = {},
      params = {},
      cache = false,
      cacheExpiry = 5 * 60 * 1000
    } = config;

    // Apply request interceptors
    let processedConfig = { ...config };
    for (const interceptor of this.requestInterceptors) {
      processedConfig = await interceptor(processedConfig);
    }

    const url = new URL(endpoint, this.baseUrl);
    
    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });

    const cacheKey = this.getCacheKey(url.toString(), data);

    // Check cache for GET requests
    if (method === 'GET' && cache) {
      const cached = this.getFromCache(cacheKey);
      if (cached) {
        return cached;
      }
    }

    const requestOptions: RequestInit = {
      method,
      headers: {
        ...this.defaultHeaders,
        ...headers
      },
      signal: AbortSignal.timeout(timeout)
    };

    if (data && method !== 'GET') {
      requestOptions.body = JSON.stringify(data);
    }

    let lastError: ApiError | null = null;

    // Retry logic
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url.toString(), requestOptions);
        
        if (!response.ok) {
          const error: ApiError = new Error(`HTTP ${response.status}: ${response.statusText}`) as ApiError;
          error.status = response.status;
          error.requestId = this.generateRequestId();
          
          // Apply error interceptors
          for (const interceptor of this.errorInterceptors) {
            await interceptor(error);
          }
          
          throw error;
        }

        // Apply response interceptors
        let processedResponse = response;
        for (const interceptor of this.responseInterceptors) {
          processedResponse = await interceptor(processedResponse);
        }

        // Cache successful GET requests
        if (method === 'GET' && cache) {
          this.setCache(cacheKey, processedResponse, cacheExpiry);
        }

        return processedResponse as ApiResponse<T>;

      } catch (error) {
        lastError = error as ApiError;
        
        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
        }
      }
    }

    throw lastError;
  }

  // HTTP Methods
  async get<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('GET', endpoint, undefined, config);
  }

  async post<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('POST', endpoint, data, config);
  }

  async put<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('PUT', endpoint, data, config);
  }

  async patch<T>(endpoint: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('PATCH', endpoint, data, config);
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.makeRequest<T>('DELETE', endpoint, undefined, config);
  }

  // Utility methods
  clearCache(): void {
    this.cache.clear();
  }

  setDefaultHeader(key: string, value: string): void {
    this.defaultHeaders[key] = value;
  }

  removeDefaultHeader(key: string): void {
    delete this.defaultHeaders[key];
  }

  setAuthToken(token: string): void {
    this.setDefaultHeader('Authorization', `Bearer ${token}`);
  }

  removeAuthToken(): void {
    this.removeDefaultHeader('Authorization');
  }
}

// Create and export default instance
export const apiClient = new UniversalApiClient(
  import.meta.env.VITE_API_BASE_URL || 'https://api.vaidikwisdomseries.com',
  {
    'X-App-Version': import.meta.env.VITE_APP_VERSION || '1.0.0',
    'X-Environment': import.meta.env.NODE_ENV || 'development'
  }
);

// Export class for custom instances
export { UniversalApiClient };

// Convenience function for one-off requests
export const apiRequest = <T>(
  method: string,
  endpoint: string,
  data?: any,
  config?: RequestConfig
): Promise<ApiResponse<T>> => {
  return (apiClient as any).makeRequest<T>(method, endpoint, data, config);
};