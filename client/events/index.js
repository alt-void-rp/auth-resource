import * as alt from 'alt-client';
import { EVENTS } from '../../shared/constants.js';
import * as authEvents from './authEvents.js';

export function registerEvents(view) {
  authEvents.setView(view);

  alt.onServer(EVENTS.SERVER.LOGIN_SUCCESS, authEvents.onLoginSuccess);
  alt.onServer(EVENTS.SERVER.LOGIN_FAIL, authEvents.onLoginFail);

  alt.onServer(EVENTS.SERVER.RESET_SUCCESS, authEvents.onResetSuccess);
  alt.onServer(EVENTS.SERVER.RESET_FAIL, authEvents.onResetFail);

  alt.onServer(EVENTS.SERVER.OTP_SUCCESS, authEvents.onOtpSuccess);
  alt.onServer(EVENTS.SERVER.OTP_FAIL, authEvents.onOtpFail);

  alt.onServer(EVENTS.SERVER.GET_USERS_ME_SUCCESS, authEvents.onUsersGetSuccess);
  alt.onServer(EVENTS.SERVER.GET_USERS_ME_FAIL, authEvents.onUsersGetFail);
}