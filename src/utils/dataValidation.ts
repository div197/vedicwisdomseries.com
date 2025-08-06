// 🕉️ TAURUS AGENT DATA VALIDATION SYSTEM
// Type-safe validation schemas for Vedic Wisdom Series data
// Ensures data integrity across global deployments

// Type definitions
export interface ValidationResult<T = any> {
  isValid: boolean;
  data?: T;
  errors: ValidationError[];
  warnings: string[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
  severity: 'error' | 'warning';
}

export interface ValidationSchema<T> {
  validate: (data: unknown) => ValidationResult<T>;
  sanitize?: (data: T) => T;
  transform?: (data: unknown) => T;
}

// Base validation utilities
const validators = {
  required: (value: unknown, fieldName: string): ValidationError | null => {
    if (value === undefined || value === null || value === '') {
      return {
        field: fieldName,
        message: `${fieldName} is required`,
        code: 'REQUIRED',
        severity: 'error'
      };
    }
    return null;
  },

  string: (value: unknown, fieldName: string, options?: { minLength?: number; maxLength?: number; pattern?: RegExp }): ValidationError | null => {
    if (typeof value !== 'string') {
      return {
        field: fieldName,
        message: `${fieldName} must be a string`,
        code: 'TYPE_STRING',
        severity: 'error'
      };
    }

    if (options?.minLength && value.length < options.minLength) {
      return {
        field: fieldName,
        message: `${fieldName} must be at least ${options.minLength} characters`,
        code: 'MIN_LENGTH',
        severity: 'error'
      };
    }

    if (options?.maxLength && value.length > options.maxLength) {
      return {
        field: fieldName,
        message: `${fieldName} must be no more than ${options.maxLength} characters`,
        code: 'MAX_LENGTH',
        severity: 'error'
      };
    }

    if (options?.pattern && !options.pattern.test(value)) {
      return {
        field: fieldName,
        message: `${fieldName} format is invalid`,
        code: 'PATTERN',
        severity: 'error'
      };
    }

    return null;
  },

  number: (value: unknown, fieldName: string, options?: { min?: number; max?: number; integer?: boolean }): ValidationError | null => {
    if (typeof value !== 'number' || isNaN(value)) {
      return {
        field: fieldName,
        message: `${fieldName} must be a valid number`,
        code: 'TYPE_NUMBER',
        severity: 'error'
      };
    }

    if (options?.integer && !Number.isInteger(value)) {
      return {
        field: fieldName,
        message: `${fieldName} must be an integer`,
        code: 'INTEGER',
        severity: 'error'
      };
    }

    if (options?.min !== undefined && value < options.min) {
      return {
        field: fieldName,
        message: `${fieldName} must be at least ${options.min}`,
        code: 'MIN_VALUE',
        severity: 'error'
      };
    }

    if (options?.max !== undefined && value > options.max) {
      return {
        field: fieldName,
        message: `${fieldName} must be no more than ${options.max}`,
        code: 'MAX_VALUE',
        severity: 'error'
      };
    }

    return null;
  },

  array: (value: unknown, fieldName: string, options?: { minLength?: number; maxLength?: number }): ValidationError | null => {
    if (!Array.isArray(value)) {
      return {
        field: fieldName,
        message: `${fieldName} must be an array`,
        code: 'TYPE_ARRAY',
        severity: 'error'
      };
    }

    if (options?.minLength && value.length < options.minLength) {
      return {
        field: fieldName,
        message: `${fieldName} must have at least ${options.minLength} items`,
        code: 'MIN_ARRAY_LENGTH',
        severity: 'error'
      };
    }

    if (options?.maxLength && value.length > options.maxLength) {
      return {
        field: fieldName,
        message: `${fieldName} must have no more than ${options.maxLength} items`,
        code: 'MAX_ARRAY_LENGTH',
        severity: 'error'
      };
    }

    return null;
  },

  url: (value: unknown, fieldName: string): ValidationError | null => {
    const stringError = validators.string(value, fieldName);
    if (stringError) return stringError;

    try {
      new URL(value as string);
      return null;
    } catch {
      return {
        field: fieldName,
        message: `${fieldName} must be a valid URL`,
        code: 'INVALID_URL',
        severity: 'error'
      };
    }
  },

  email: (value: unknown, fieldName: string): ValidationError | null => {
    const stringError = validators.string(value, fieldName);
    if (stringError) return stringError;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value as string)) {
      return {
        field: fieldName,
        message: `${fieldName} must be a valid email address`,
        code: 'INVALID_EMAIL',
        severity: 'error'
      };
    }

    return null;
  }
};

// Helper function to validate data against a schema
function validateData<T>(data: unknown, validationRules: Record<string, (value: unknown) => ValidationError | null>): ValidationResult<T> {
  const errors: ValidationError[] = [];
  const warnings: string[] = [];

  if (typeof data !== 'object' || data === null) {
    return {
      isValid: false,
      errors: [{
        field: 'root',
        message: 'Data must be an object',
        code: 'TYPE_OBJECT',
        severity: 'error'
      }],
      warnings
    };
  }

  const dataObj = data as Record<string, unknown>;

  for (const [field, validator] of Object.entries(validationRules)) {
    const error = validator(dataObj[field]);
    if (error) {
      errors.push(error);
    }
  }

  return {
    isValid: errors.length === 0,
    data: errors.length === 0 ? (data as T) : undefined,
    errors,
    warnings
  };
}

// Vedic Wisdom Series specific schemas
export const offeringSchema: ValidationSchema<any> = {
  validate: (data: unknown) => {
    return validateData(data, {
      badge: (value) => validators.required(value, 'badge') || validators.string(value, 'badge', { maxLength: 50 }),
      title: (value) => validators.required(value, 'title') || validators.string(value, 'title', { maxLength: 100 }),
      description: (value) => validators.required(value, 'description') || validators.string(value, 'description', { maxLength: 1000 }),
      price: (value) => validators.required(value, 'price') || validators.string(value, 'price', { maxLength: 50 }),
      duration: (value) => validators.required(value, 'duration') || validators.string(value, 'duration', { maxLength: 100 }),
      details: (value) => validators.required(value, 'details') || validators.string(value, 'details', { maxLength: 200 }),
      color: (value) => validators.required(value, 'color') || validators.string(value, 'color', { maxLength: 20 }),
      link: (value) => validators.required(value, 'link') || validators.string(value, 'link', { maxLength: 200 }),
      features: (value) => validators.required(value, 'features') || validators.array(value, 'features', { minLength: 1, maxLength: 10 })
    });
  },

  sanitize: (data) => ({
    ...data,
    title: data.title?.trim(),
    description: data.description?.trim(),
    price: data.price?.trim(),
    duration: data.duration?.trim(),
    details: data.details?.trim(),
    features: data.features?.map((f: string) => f.trim())
  })
};

export const teacherSchema: ValidationSchema<any> = {
  validate: (data: unknown) => {
    return validateData(data, {
      name: (value) => validators.required(value, 'name') || validators.string(value, 'name', { maxLength: 100 }),
      title: (value) => validators.required(value, 'title') || validators.string(value, 'title', { maxLength: 200 }),
      image: (value) => validators.string(value, 'image', { maxLength: 500 }),
      credentials: (value) => validators.required(value, 'credentials') || validators.array(value, 'credentials', { minLength: 1 }),
      vision: (value) => validators.required(value, 'vision') || validators.string(value, 'vision', { maxLength: 1000 }),
      socialLinks: (value) => validators.array(value, 'socialLinks')
    });
  },

  sanitize: (data) => ({
    ...data,
    name: data.name?.trim(),
    title: data.title?.trim(),
    vision: data.vision?.trim(),
    credentials: data.credentials?.map((c: string) => c.trim())
  })
};

export const testimonialSchema: ValidationSchema<any> = {
  validate: (data: unknown) => {
    return validateData(data, {
      name: (value) => validators.required(value, 'name') || validators.string(value, 'name', { maxLength: 100 }),
      role: (value) => validators.required(value, 'role') || validators.string(value, 'role', { maxLength: 100 }),
      text: (value) => validators.required(value, 'text') || validators.string(value, 'text', { maxLength: 2000 }),
      rating: (value) => validators.required(value, 'rating') || validators.number(value, 'rating', { min: 1, max: 5, integer: true })
    });
  },

  sanitize: (data) => ({
    ...data,
    name: data.name?.trim(),
    role: data.role?.trim(),
    text: data.text?.trim()
  })
};

export const ctaSchema: ValidationSchema<any> = {
  validate: (data: unknown) => {
    return validateData(data, {
      text: (value) => validators.required(value, 'text') || validators.string(value, 'text', { maxLength: 100 }),
      description: (value) => validators.string(value, 'description', { maxLength: 200 }),
      href: (value) => validators.required(value, 'href') || validators.string(value, 'href', { maxLength: 500 }),
      colorScheme: (value) => validators.required(value, 'colorScheme') || validators.string(value, 'colorScheme', { maxLength: 20 }),
      variant: (value) => validators.required(value, 'variant') || validators.string(value, 'variant', { maxLength: 20 }),
      icon: (value) => validators.string(value, 'icon', { maxLength: 50 }),
      urgency: (value) => validators.string(value, 'urgency', { maxLength: 200 })
    });
  },

  sanitize: (data) => ({
    ...data,
    text: data.text?.trim(),
    description: data.description?.trim(),
    urgency: data.urgency?.trim()
  })
};

export const heroSchema: ValidationSchema<any> = {
  validate: (data: unknown) => {
    return validateData(data, {
      headline: (value) => validators.required(value, 'headline') || validators.string(value, 'headline', { maxLength: 200 }),
      subheading: (value) => validators.required(value, 'subheading') || validators.string(value, 'subheading', { maxLength: 300 }),
      description: (value) => validators.required(value, 'description') || validators.string(value, 'description', { maxLength: 1000 }),
      primaryCta: (value) => validators.required(value, 'primaryCta') || validators.string(value, 'primaryCta'),
      secondaryCta: (value) => validators.string(value, 'secondaryCta'),
      socialProof: (value) => validators.string(value, 'socialProof', { maxLength: 300 }),
      urgency: (value) => validators.string(value, 'urgency', { maxLength: 200 })
    });
  }
};

// Main validation function for complete data structures
export const vedicWisdomValidator = {
  validateOfferings: (offerings: unknown[]) => {
    const results = offerings.map((offering, index) => {
      const result = offeringSchema.validate(offering);
      return {
        index,
        ...result,
        errors: result.errors.map(err => ({
          ...err,
          field: `offerings[${index}].${err.field}`
        }))
      };
    });

    const allErrors = results.flatMap(r => r.errors);
    const validOfferings = results.filter(r => r.isValid).map(r => r.data);

    return {
      isValid: allErrors.length === 0,
      data: validOfferings,
      errors: allErrors,
      warnings: []
    };
  },

  validateTeacher: (teacher: unknown) => teacherSchema.validate(teacher),
  
  validateTestimonials: (testimonials: unknown[]) => {
    const results = testimonials.map((testimonial, index) => {
      const result = testimonialSchema.validate(testimonial);
      return {
        index,
        ...result,
        errors: result.errors.map(err => ({
          ...err,
          field: `testimonials[${index}].${err.field}`
        }))
      };
    });

    const allErrors = results.flatMap(r => r.errors);
    const validTestimonials = results.filter(r => r.isValid).map(r => r.data);

    return {
      isValid: allErrors.length === 0,
      data: validTestimonials,
      errors: allErrors,
      warnings: []
    };
  },

  validateContentMaster: (content: unknown) => {
    // Complex validation for content master structure
    if (typeof content !== 'object' || content === null) {
      return {
        isValid: false,
        errors: [{
          field: 'contentMaster',
          message: 'Content master must be an object',
          code: 'TYPE_OBJECT',
          severity: 'error' as const
        }],
        warnings: []
      };
    }

    const contentObj = content as any;
    const errors: ValidationError[] = [];

    // Validate CTAs
    if (contentObj.ctas) {
      for (const [key, cta] of Object.entries(contentObj.ctas)) {
        const ctaResult = ctaSchema.validate(cta);
        if (!ctaResult.isValid) {
          errors.push(...ctaResult.errors.map(err => ({
            ...err,
            field: `ctas.${key}.${err.field}`
          })));
        }
      }
    }

    // Validate heroes
    if (contentObj.heroes) {
      for (const [key, hero] of Object.entries(contentObj.heroes)) {
        const heroResult = heroSchema.validate(hero);
        if (!heroResult.isValid) {
          errors.push(...heroResult.errors.map(err => ({
            ...err,
            field: `heroes.${key}.${err.field}`
          })));
        }
      }
    }

    return {
      isValid: errors.length === 0,
      data: errors.length === 0 ? content : undefined,
      errors,
      warnings: []
    };
  }
};

// Data sanitization utilities
export const sanitizers = {
  cleanHtml: (text: string): string => {
    return text.replace(/<[^>]*>/g, '').trim();
  },

  normalizeWhitespace: (text: string): string => {
    return text.replace(/\s+/g, ' ').trim();
  },

  capitalizeWords: (text: string): string => {
    return text.replace(/\b\w/g, l => l.toUpperCase());
  },

  sanitizeUrl: (url: string): string => {
    try {
      const urlObj = new URL(url);
      return urlObj.toString();
    } catch {
      return url.startsWith('/') ? url : `/${url}`;
    }
  }
};

// Performance monitoring for validation
export const validationMetrics = {
  validationCount: 0,
  errorCount: 0,
  totalValidationTime: 0,

  recordValidation: (isValid: boolean, duration: number) => {
    validationMetrics.validationCount++;
    validationMetrics.totalValidationTime += duration;
    if (!isValid) validationMetrics.errorCount++;
  },

  getAverageTime: () => {
    return validationMetrics.validationCount > 0 
      ? validationMetrics.totalValidationTime / validationMetrics.validationCount 
      : 0;
  },

  getErrorRate: () => {
    return validationMetrics.validationCount > 0 
      ? (validationMetrics.errorCount / validationMetrics.validationCount) * 100 
      : 0;
  },

  reset: () => {
    validationMetrics.validationCount = 0;
    validationMetrics.errorCount = 0;
    validationMetrics.totalValidationTime = 0;
  }
};