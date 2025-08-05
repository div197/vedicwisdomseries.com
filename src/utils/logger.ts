/**
 * 🕉️ PRODUCTION-SAFE LOGGER
 * Eliminates console statements in production while maintaining debugging capability
 */

const isDevelopment = import.meta.env.DEV

interface Logger {
  log: (...args: any[]) => void
  warn: (...args: any[]) => void
  error: (...args: any[]) => void
  debug: (...args: any[]) => void
  info: (...args: any[]) => void
}

export const logger: Logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args)
    }
  },
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args)
    }
  },
  error: (...args) => {
    // Always log errors for monitoring
    console.error(...args)
  },
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args)
    }
  },
  info: (...args) => {
    if (isDevelopment) {
      console.info(...args)
    }
  }
}

// Performance logger for optimization tracking
export const performanceLogger = {
  measure: (name: string, callback: () => void) => {
    if (!isDevelopment) {
      callback()
      return
    }
    
    const start = performance.now()
    callback()
    const end = performance.now()
    logger.debug(`⚡ Performance [${name}]: ${(end - start).toFixed(2)}ms`)
  },
  
  async measureAsync: async (name: string, callback: () => Promise<void>) => {
    if (!isDevelopment) {
      await callback()
      return
    }
    
    const start = performance.now()
    await callback()
    const end = performance.now()
    logger.debug(`⚡ Performance [${name}]: ${(end - start).toFixed(2)}ms`)
  }
}