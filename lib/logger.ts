/**
 * Production-safe logging utility
 * 
 * In development: Logs full error details to console
 * In production: Logs sanitized messages, hides sensitive info
 */

type LogLevel = 'info' | 'warn' | 'error';

interface LogContext {
    component?: string;
    action?: string;
    userId?: string;
    [key: string]: unknown;
}

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * Sanitize error for production - remove stack traces and internal details
 */
function sanitizeError(error: unknown): string {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return 'An unexpected error occurred';
}

/**
 * Format log entry with timestamp and context
 */
function formatLogEntry(level: LogLevel, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` | ${JSON.stringify(context)}` : '';
    return `[${timestamp}] [${level.toUpperCase()}] ${message}${contextStr}`;
}

/**
 * Log an informational message
 */
export function logInfo(message: string, context?: LogContext): void {
    if (isDevelopment) {
        console.log(formatLogEntry('info', message, context));
    }
    // In production, you could send to a logging service here
}

/**
 * Log a warning message
 */
export function logWarn(message: string, context?: LogContext): void {
    if (isDevelopment) {
        console.warn(formatLogEntry('warn', message, context));
    }
    // In production, you could send to a logging service here
}

/**
 * Log an error - sanitizes in production
 */
export function logError(
    message: string,
    error?: unknown,
    context?: LogContext
): void {
    if (isDevelopment) {
        // Full error logging in development
        console.error(formatLogEntry('error', message, context));
        if (error) {
            console.error('Error details:', error);
        }
    } else {
        // Sanitized logging in production
        const sanitizedMessage = error
            ? `${message}: ${sanitizeError(error)}`
            : message;
        console.error(formatLogEntry('error', sanitizedMessage, context));

        // TODO: Send to external logging service in production
        // Example: sendToLoggingService({ message: sanitizedMessage, context });
    }
}

/**
 * User-friendly error messages for common scenarios
 */
export const UserMessages = {
    NETWORK_ERROR: 'Erro de conexão. Verifique sua internet e tente novamente.',
    DATABASE_ERROR: 'Erro ao acessar dados. Tente novamente em alguns instantes.',
    VALIDATION_ERROR: 'Por favor, verifique os dados informados.',
    GENERIC_ERROR: 'Ocorreu um erro inesperado. Tente novamente.',
    AUTH_ERROR: 'Erro de autenticação. Faça login novamente.',
} as const;

/**
 * Get user-friendly error message based on error type
 */
export function getUserFriendlyMessage(error: unknown): string {
    if (error instanceof Error) {
        // Check for common error patterns
        if (error.message.includes('network') || error.message.includes('fetch')) {
            return UserMessages.NETWORK_ERROR;
        }
        if (error.message.includes('firestore') || error.message.includes('database')) {
            return UserMessages.DATABASE_ERROR;
        }
        if (error.message.includes('auth')) {
            return UserMessages.AUTH_ERROR;
        }
    }
    return UserMessages.GENERIC_ERROR;
}
