/**
 * Валидирует данные для авторизации
 * @param {object} data
 * @returns {object}
 */
export function validateLogin(data) {
    if (!data) {
      return { valid: false, reason: 'invalid-data', message: 'Неверный формат данных' };
    }
    if (!data.username || !data.password) {
      return { valid: false, reason: 'missing-fields', message: 'Логин и пароль обязательны' };
    }
    if (typeof data.username !== 'string' || typeof data.password !== 'string') {
      return { valid: false, reason: 'invalid-types', message: 'Логин и пароль должны быть строками' };
    }
    
    return { valid: true };
  }
  
/**
 * Валидирует данные для сброса пароля
 * @param {object} data
 * @returns {object}
 */
export function validateResetPassword(data) {
    if (!data?.email || typeof data.email !== 'string') {
        return { valid: false, reason: 'email-required', message: 'Email обязателен и должен быть строкой' };
    }

    return { valid: true };
}
  
/**
 * Валидирует данные для подтверждения кода
 * @param {object} data
 * @returns {object}
 */
export function validateOtp(data) {
    if (!data?.otp_code) {
        return { valid: false, reason: 'otp-required', message: 'Код подтверждения обязателен' };
    }
    if (typeof data.otp_code !== 'string' || data.otp_code.length !== 6) {
        return { valid: false, reason: 'invalid-otp', message: 'Код должен быть строкой из 6 символов' };
    }

    return { valid: true };
}