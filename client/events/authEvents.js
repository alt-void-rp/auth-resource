import * as alt from 'alt-client';
import { EVENTS } from '../../shared/constants.js';
import * as SHARED from 'alt:shared-variables';

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
  const user = SHARED.localUser;
  user.set("access_token", data.access_token);
  user.set("refresh_token", data.refresh_token);
  currentView?.emit(EVENTS.SERVER.LOGIN_SUCCESS, data);
}

/**
 * Обрабатывает неудачную авторизацию
 * @param {object} data
 */
export function onLoginFail(data) {
  currentView?.emit(EVENTS.SERVER.LOGIN_FAIL, data);
}

/**
 * @param {object} data
 */
export function onResetSuccess(data) {
  currentView?.emit(EVENTS.SERVER.RESET_SUCCESS, data);
}

/**
 * @param {object} data
 */
export function onResetFail(data) {
  currentView?.emit(EVENTS.SERVER.RESET_FAIL, data);
}

/**
 * @param {object} data
 */
export function onOtpSuccess(data) {
  currentView?.emit(EVENTS.SERVER.OTP_SUCCESS, data);
}

/**
 * @param {object} data
 */
export function onOtpFail(data) {
  currentView?.emit(EVENTS.SERVER.OTP_SUCCESS, data);
}

/**
 * @param {object} data
*/
export function onUsersGetSuccess(data) {
  currentView?.emit(EVENTS.SERVER.GET_USERS_ME_SUCCESS, data);
}

/**
 * @param {object} data
*/
export function onUsersGetFail(data) {
  currentView?.emit(EVENTS.SERVER.GET_USERS_ME_FAIL, data);
}

/**
 * @param {object} data
*/
export function onCreatePerson(data){
  const user = SHARED.localUser;
  user.loadDimension(data);

  currentView.isVisible = false;
  currentView.unfocus();
}