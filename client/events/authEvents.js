import * as alt from 'alt-client';
import * as native from 'natives';
import { EVENTS } from '../../shared/constants.js';

/**
 * Устанавливает текущий вид
 * @param {alt.WebView} view
 */
let currentView = null;

/**
 * Устанавливает текущий вид
 * @param {alt.WebView} view
 */
export function setView(view) {
  currentView = view;
}

/**
 * Обрабатывает успешную авторизацию
 * @param {object} data
 */
export function onLoginSuccess(data) {
  if (!data.success) return;

  const player = alt.Player.local;
  alt.toggleGameControls(true);
  alt.showCursor(false);
  currentView?.unfocus();
  currentView?.destroy();
  native.freezeEntityPosition(player.scriptID, false);
}

/**
 * Обрабатывает неудачную авторизацию
 * @param {object} data
 */
export function onLoginFail(data) {
  currentView?.emit(EVENTS.SERVER.LOGIN_FAIL, data);
}

// --- RESET PASSWORD ---
export function onResetSuccess(data) {
  currentView?.emit(EVENTS.SERVER.RESET_SUCCESS, data);
}

export function onResetFail(data) {
  currentView?.emit(EVENTS.SERVER.RESET_FAIL, data);
}

// --- OTP ---
export function onOtpSuccess(data) {
  currentView?.emit(EVENTS.SERVER.OTP_SUCCESS, data);
}

export function onOtpFail(data) {
  currentView?.emit(EVENTS.SERVER.OTP_SUCCESS, data);
}