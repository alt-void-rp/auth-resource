import axios from 'axios';
import { API_URL } from '../../shared/constants.js';

/**
 * Выполняет вход через внешний API
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{ success: boolean, data?: any, error?: any }>}
 */
export async function login(username, password) {
  /*try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password
    }, { timeout: 5000 });
    return { success: true, data: response.data };
  } catch (error) {
    const message = error.response?.data?.message || error.message || 'Неизвестная ошибка';
    return { success: false, error: { message } };
  }*/
  return { success: true, data: { username, password } };
}
/**
 * Запрашивает сброс пароля через внешний API
 * @param {string} email
 * @returns {Promise<{ success: boolean, data?: any, error?: any }>}
 */
export async function requestPasswordReset(email) {
  // Пример: return await axios.post(`${API_URL}/password-reset`, { email });
  return { success: true, data: { email } };
}
/**
 * Запрашивает сброс пароля через внешний API
 * @param {string} email
 * @param {string} otp_code
 * @returns {Promise<{ success: boolean }>}
 */
export async function verifyOtp(email, otp_code) {
  // Пример: return await axios.post(`${API_URL}/verify-otp`, { email, otp_code });
  return { success: true };
}