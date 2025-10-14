// @ts-ignore
import * as alt from 'alt-server';
import { EVENTS } from '../../shared/constants.js';
import { emitSuccess, emitError } from '../responces/emit.js';
import {
  validateLogin,
  validateResetPassword,
  validateOtp
} from '../validators/authValidators.js';
import {
  login as apiLogin,
  requestPasswordReset,
  verifyOtp
} from '../api/authService.js';


// --- LOGIN ---
/**
 * 
 * @param {alt.Player} player 
 * @param {object} jsonData 
 * @returns 
 */
export async function handleLogin(player, jsonData) {
  let data = JSON.parse(JSON.parse(jsonData));

  const validation = validateLogin(data);
  if (!validation.valid) {
    return emitError(player, EVENTS.SERVER.LOGIN_FAIL, validation.reason, validation.message);
  }

  const result = await apiLogin(data.username, data.password);
  if (result.success) {
    emitSuccess(player, EVENTS.SERVER.LOGIN_SUCCESS, result.data);
  } else {
    emitError(player, EVENTS.SERVER.LOGIN_FAIL, 'api-error', result.error.message);
  }
}

// --- RESET PASSWORD ---
/**
 * 
 * @param {alt.Player} player 
 * @param {object} jsonData 
 * @returns 
 */
export async function handleResetPassword(player, jsonData) {
  let data = JSON.parse(JSON.parse(jsonData));

  const validation = validateResetPassword(data);
  if (!validation.valid) {
    return emitError(player, EVENTS.SERVER.RESET_FAIL, validation.reason, validation.message);
  }

  const result = await requestPasswordReset(data.email);
  console.log(result);
  if (result.success) {
    emitSuccess(player, EVENTS.SERVER.RESET_SUCCESS, result.data);
  } else {
    emitError(player, EVENTS.SERVER.RESET_FAIL, 'api-error', result.error.message);
  }
}

// --- OTP VALIDATE ---
/**
 * 
 * @param {alt.Player} player 
 * @param {object} jsonData 
 * @returns 
 */
export async function handleOtpValidate(player, jsonData) {
  let data = JSON.parse(JSON.parse(jsonData));

  const validation = validateOtp(data);
  if (!validation.valid) {
    return emitError(player, EVENTS.SERVER.OTP_FAIL, validation.reason, validation.message);
  }

  // В реальности: передавать email тоже (здесь упрощено)
  const result = await verifyOtp('temp@example.com', data.otp_code);
  if (result.success) {
    emitSuccess(player, EVENTS.SERVER.OTP_SUCCESS, {});
  } else {
    // @ts-ignore
    emitError(player, EVENTS.SERVER.OTP_FAIL, 'api-error', result.error.message);
  }
}