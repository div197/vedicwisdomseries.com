import React from 'react';
import { ErrorLogger } from '../components/providers/ErrorBoundary-sota';

export const useErrorHandler = () => {
  const errorLogger = ErrorLogger.getInstance();
  
  const logError = React.useCallback((error: Error, context?: Record<string, unknown>) => {
    errorLogger.logError(error, undefined, context);
  }, [errorLogger]);
  
  return { logError };
}; 