import * as alt from 'alt-client';
import { EVENTS } from '../../shared/constants.js';

const access_token = { access_token : '12321h321kjhk21j3h' };

/**
 * Настраивает обработчики событий от WebView → сервер
 * @param {alt.WebView} view
 */
export function setupWebViewHandlers(view) {
  view.on(EVENTS.CLIENT.LOGIN, (data) => {
    alt.emitServer(EVENTS.CLIENT.LOGIN, JSON.stringify(data));
  });

  view.on(EVENTS.CLIENT.RESET_PASSWORD, (data) => {
    alt.emitServer(EVENTS.CLIENT.RESET_PASSWORD, JSON.stringify(data));
  });

  view.on(EVENTS.CLIENT.OTP_VALIDATE, (data) => {
    alt.emitServer(EVENTS.CLIENT.OTP_VALIDATE, JSON.stringify(data));
  });

  view.on(EVENTS.CLIENT.GET_USERS_ME, () => {
    alt.emitServer(EVENTS.CLIENT.GET_USERS_ME, access_token);
  });
}