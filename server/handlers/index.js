// @ts-ignore
import * as alt from 'alt-server';
import { EVENTS } from '../../shared/constants.js';
import {
  handleLogin,
  handleResetPassword,
  handleOtpValidate,
} from './authHandlers.js';
import {
  handleUsersMe,
  handleCreatePerson
} from './profileHandlers.js'


/**
 * Регистрирует обработчики событий
 */
export function registerHandlers() {
  alt.onClient(EVENTS.CLIENT.LOGIN, handleLogin);
  alt.onClient(EVENTS.CLIENT.RESET_PASSWORD, handleResetPassword);
  alt.onClient(EVENTS.CLIENT.OTP_VALIDATE, handleOtpValidate);

  alt.onClient(EVENTS.CLIENT.GET_USERS_ME, handleUsersMe);
  alt.onClient(EVENTS.CLIENT.CREATE_PERSON, handleCreatePerson);
}