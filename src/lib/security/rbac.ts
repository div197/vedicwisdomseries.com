// 🕉️ CANCER AGENT ROLE-BASED ACCESS CONTROL SYSTEM
// Enterprise-grade authorization with spiritual protection
// Implements fine-grained permissions and resource access control

import { UserRole, Permission } from './auth';

export interface Resource {
  type: ResourceType;
  id?: string;
  attributes?: Record<string, any>;
}

export enum ResourceType {
  COURSE = 'course',
  LESSON = 'lesson',
  ASSIGNMENT = 'assignment',
  USER = 'user',
  PAYMENT = 'payment',
  ANALYTICS = 'analytics',
  SYSTEM = 'system',
  CONTENT = 'content'
}

export enum Action {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
  EXECUTE = 'execute',
  MANAGE = 'manage'
}

export interface AccessRule {
  role: UserRole;
  resource: ResourceType | '*';
  actions: Action[];
  conditions?: AccessCondition[];
  description?: string;
}

export interface AccessCondition {
  field: string;
  operator: ConditionOperator;
  value: any;
  description?: string;
}

export enum ConditionOperator {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  IN = 'in',
  NOT_IN = 'not_in',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  CONTAINS = 'contains',
  STARTS_WITH = 'starts_with',
  ENDS_WITH = 'ends_with',
  IS_OWNER = 'is_owner',
  IS_MEMBER = 'is_member'
}

export interface AccessRequest {
  userId: string;
  userRole: UserRole;
  userPermissions: Permission[];
  resource: Resource;
  action: Action;
  context?: Record<string, any>;
}

export interface AccessResult {
  granted: boolean;
  reason?: string;
  conditions?: string[];
  metadata?: Record<string, any>;
}

class RoleBasedAccessControl {
  private rules: AccessRule[] = [];
  private cache = new Map<string, AccessResult>();
  private cacheExpiry = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.initializeDefaultRules();
  }

  // Initialize default access rules
  private initializeDefaultRules(): void {
    this.rules = [
      // Super Admin - Full access
      {
        role: UserRole.SUPER_ADMIN,
        resource: '*',
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE, Action.EXECUTE, Action.MANAGE],
        description: 'Super admin has full system access'
      },

      // Admin Rules
      {
        role: UserRole.ADMIN,
        resource: ResourceType.USER,
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE],
        description: 'Admin can manage all users'
      },
      {
        role: UserRole.ADMIN,
        resource: ResourceType.COURSE,
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE, Action.MANAGE],
        description: 'Admin can manage all courses'
      },
      {
        role: UserRole.ADMIN,
        resource: ResourceType.CONTENT,
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE],
        description: 'Admin can manage all content'
      },
      {
        role: UserRole.ADMIN,
        resource: ResourceType.PAYMENT,
        actions: [Action.READ, Action.UPDATE, Action.MANAGE],
        description: 'Admin can manage payments'
      },
      {
        role: UserRole.ADMIN,
        resource: ResourceType.ANALYTICS,
        actions: [Action.READ],
        description: 'Admin can view analytics'
      },

      // Teacher Rules
      {
        role: UserRole.TEACHER,
        resource: ResourceType.COURSE,
        actions: [Action.CREATE, Action.READ, Action.UPDATE],
        conditions: [
          { field: 'teacherId', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Teacher can manage their own courses'
      },
      {
        role: UserRole.TEACHER,
        resource: ResourceType.LESSON,
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE],
        conditions: [
          { field: 'course.teacherId', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Teacher can manage lessons in their courses'
      },
      {
        role: UserRole.TEACHER,
        resource: ResourceType.ASSIGNMENT,
        actions: [Action.CREATE, Action.READ, Action.UPDATE, Action.DELETE],
        conditions: [
          { field: 'course.teacherId', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Teacher can manage assignments in their courses'
      },
      {
        role: UserRole.TEACHER,
        resource: ResourceType.USER,
        actions: [Action.READ],
        conditions: [
          { field: 'enrolledCourses', operator: ConditionOperator.CONTAINS, value: '{{userCourses}}' }
        ],
        description: 'Teacher can view students in their courses'
      },
      {
        role: UserRole.TEACHER,
        resource: ResourceType.ANALYTICS,
        actions: [Action.READ],
        conditions: [
          { field: 'courseId', operator: ConditionOperator.IN, value: '{{userCourses}}' }
        ],
        description: 'Teacher can view analytics for their courses'
      },

      // Student Rules
      {
        role: UserRole.STUDENT,
        resource: ResourceType.COURSE,
        actions: [Action.READ],
        conditions: [
          { field: 'isPublic', operator: ConditionOperator.EQUALS, value: true },
          { field: 'enrolledStudents', operator: ConditionOperator.CONTAINS, value: '{{userId}}' }
        ],
        description: 'Student can view enrolled or public courses'
      },
      {
        role: UserRole.STUDENT,
        resource: ResourceType.LESSON,
        actions: [Action.READ],
        conditions: [
          { field: 'course.enrolledStudents', operator: ConditionOperator.CONTAINS, value: '{{userId}}' }
        ],
        description: 'Student can view lessons in enrolled courses'
      },
      {
        role: UserRole.STUDENT,
        resource: ResourceType.ASSIGNMENT,
        actions: [Action.READ, Action.UPDATE],
        conditions: [
          { field: 'course.enrolledStudents', operator: ConditionOperator.CONTAINS, value: '{{userId}}' },
          { field: 'studentId', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Student can view and complete their assignments'
      },
      {
        role: UserRole.STUDENT,
        resource: ResourceType.USER,
        actions: [Action.READ, Action.UPDATE],
        conditions: [
          { field: 'id', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Student can manage their own profile'
      },
      {
        role: UserRole.STUDENT,
        resource: ResourceType.PAYMENT,
        actions: [Action.CREATE, Action.READ],
        conditions: [
          { field: 'userId', operator: ConditionOperator.EQUALS, value: '{{userId}}' }
        ],
        description: 'Student can make and view their own payments'
      }
    ];
  }

  // Main access control method
  checkAccess(request: AccessRequest): AccessResult {
    const cacheKey = this.generateCacheKey(request);
    const cached = this.getFromCache(cacheKey);
    
    if (cached) {
      return cached;
    }

    const result = this.evaluateAccess(request);
    this.setCache(cacheKey, result);
    
    return result;
  }

  // Evaluate access request against rules
  private evaluateAccess(request: AccessRequest): AccessResult {
    const { userRole, resource, action, userId, context = {} } = request;

    // Check super admin access
    if (userRole === UserRole.SUPER_ADMIN) {
      return {
        granted: true,
        reason: 'Super admin access',
        metadata: { rule: 'super_admin' }
      };
    }

    // Find applicable rules
    const applicableRules = this.rules.filter(rule => 
      rule.role === userRole && 
      (rule.resource === '*' || rule.resource === resource.type) &&
      rule.actions.includes(action)
    );

    if (applicableRules.length === 0) {
      return {
        granted: false,
        reason: `No rules found for role ${userRole} on resource ${resource.type} for action ${action}`
      };
    }

    // Evaluate each applicable rule
    for (const rule of applicableRules) {
      const conditionResult = this.evaluateConditions(rule.conditions || [], {
        userId,
        resource,
        context,
        userRole
      });

      if (conditionResult.satisfied) {
        return {
          granted: true,
          reason: rule.description || `Access granted by ${rule.role} rule`,
          conditions: conditionResult.details,
          metadata: { rule: rule.description }
        };
      }
    }

    return {
      granted: false,
      reason: 'Access denied: conditions not met',
      conditions: applicableRules.flatMap(rule => 
        rule.conditions?.map(c => c.description || `${c.field} ${c.operator} ${c.value}`) || []
      )
    };
  }

  // Evaluate access conditions
  private evaluateConditions(
    conditions: AccessCondition[], 
    context: {
      userId: string;
      resource: Resource;
      context: Record<string, any>;
      userRole: UserRole;
    }
  ): { satisfied: boolean; details: string[] } {
    if (conditions.length === 0) {
      return { satisfied: true, details: [] };
    }

    const details: string[] = [];
    let satisfied = true;

    for (const condition of conditions) {
      const result = this.evaluateCondition(condition, context);
      details.push(result.detail);
      
      if (!result.satisfied) {
        satisfied = false;
      }
    }

    return { satisfied, details };
  }

  // Evaluate single condition
  private evaluateCondition(
    condition: AccessCondition,
    context: {
      userId: string;
      resource: Resource;
      context: Record<string, any>;
      userRole: UserRole;
    }
  ): { satisfied: boolean; detail: string } {
    const { field, operator, value } = condition;
    const { userId, resource, context: requestContext } = context;

    // Get the actual value from resource or context
    const actualValue = this.getFieldValue(field, { resource, context: requestContext, userId });
    
    // Replace template variables in expected value
    const expectedValue = this.replaceTemplateVariables(value, { userId, context: requestContext });

    let satisfied = false;

    switch (operator) {
      case ConditionOperator.EQUALS:
        satisfied = actualValue === expectedValue;
        break;
      case ConditionOperator.NOT_EQUALS:
        satisfied = actualValue !== expectedValue;
        break;
      case ConditionOperator.IN:
        satisfied = Array.isArray(expectedValue) && expectedValue.includes(actualValue);
        break;
      case ConditionOperator.NOT_IN:
        satisfied = Array.isArray(expectedValue) && !expectedValue.includes(actualValue);
        break;
      case ConditionOperator.GREATER_THAN:
        satisfied = actualValue > expectedValue;
        break;
      case ConditionOperator.LESS_THAN:
        satisfied = actualValue < expectedValue;
        break;
      case ConditionOperator.CONTAINS:
        satisfied = Array.isArray(actualValue) && actualValue.includes(expectedValue);
        break;
      case ConditionOperator.STARTS_WITH:
        satisfied = typeof actualValue === 'string' && actualValue.startsWith(expectedValue);
        break;
      case ConditionOperator.ENDS_WITH:
        satisfied = typeof actualValue === 'string' && actualValue.endsWith(expectedValue);
        break;
      case ConditionOperator.IS_OWNER:
        satisfied = actualValue === userId;
        break;
      case ConditionOperator.IS_MEMBER:
        satisfied = Array.isArray(actualValue) && actualValue.includes(userId);
        break;
      default:
        satisfied = false;
    }

    return {
      satisfied,
      detail: `${field} ${operator} ${expectedValue} (actual: ${actualValue})`
    };
  }

  // Get field value from nested object
  private getFieldValue(field: string, context: any): any {
    const path = field.split('.');
    let value = context;

    for (const key of path) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return undefined;
      }
    }

    return value;
  }

  // Replace template variables in values
  private replaceTemplateVariables(value: any, context: { userId: string; context: Record<string, any> }): any {
    if (typeof value !== 'string') {
      return value;
    }

    return value.replace(/\{\{(\w+)\}\}/g, (match, variable) => {
      switch (variable) {
        case 'userId':
          return context.userId;
        case 'userCourses':
          return context.context.userCourses || [];
        default:
          return context.context[variable] || match;
      }
    });
  }

  // Cache management
  private generateCacheKey(request: AccessRequest): string {
    return `${request.userId}_${request.userRole}_${request.resource.type}_${request.resource.id || 'all'}_${request.action}`;
  }

  private getFromCache(key: string): AccessResult | null {
    const cached = this.cache.get(key);
    
    if (cached && Date.now() < (cached.metadata?.expires || 0)) {
      return cached;
    }
    
    this.cache.delete(key);
    return null;
  }

  private setCache(key: string, result: AccessResult): void {
    this.cache.set(key, {
      ...result,
      metadata: {
        ...result.metadata,
        expires: Date.now() + this.cacheExpiry
      }
    });
  }

  // Rule management
  addRule(rule: AccessRule): void {
    this.rules.push(rule);
    this.clearCache();
  }

  removeRule(index: number): void {
    if (index >= 0 && index < this.rules.length) {
      this.rules.splice(index, 1);
      this.clearCache();
    }
  }

  updateRule(index: number, rule: AccessRule): void {
    if (index >= 0 && index < this.rules.length) {
      this.rules[index] = rule;
      this.clearCache();
    }
  }

  getRules(): AccessRule[] {
    return [...this.rules];
  }

  clearCache(): void {
    this.cache.clear();
  }

  // Utility methods
  hasAccess(userId: string, userRole: UserRole, resource: Resource, action: Action, context?: Record<string, any>): boolean {
    return this.checkAccess({
      userId,
      userRole,
      userPermissions: [], // Not used in current implementation
      resource,
      action,
      context
    }).granted;
  }

  // Bulk access check
  checkMultipleAccess(requests: AccessRequest[]): AccessResult[] {
    return requests.map(request => this.checkAccess(request));
  }

  // Resource filtering based on access
  filterResources<T extends { id: string; type: ResourceType }>(
    resources: T[],
    userId: string,
    userRole: UserRole,
    action: Action,
    context?: Record<string, any>
  ): T[] {
    return resources.filter(resource => 
      this.hasAccess(userId, userRole, { type: resource.type, id: resource.id }, action, context)
    );
  }
}

// Create and export singleton instance
export const rbacService = new RoleBasedAccessControl();

// Export types and service
export default rbacService;