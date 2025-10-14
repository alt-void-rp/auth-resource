// @ts-ignore
import * as alt from 'alt-server';

/**
 * Отправляет успешный ответ клиенту
 * @param {alt.Player} player
 * @param {string} event
 * @param {Object} data
 */
export function emitSuccess(player, event, data = {}) {
  alt.emitClient(player, event, { success: true, ...data });
}

/**
 * Отправляет ошибку клиенту
 * @param {alt.Player} player
 * @param {string} event
 * @param {string} reason
 * @param {string} [message='']
 */
export function emitError(player, event, reason, message = '') {
  alt.emitClient(player, event, { success: false, reason, message });
}