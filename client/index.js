import * as alt from 'alt-client';
import * as native from 'natives';
import { FRONTEND_URL } from '../shared/constants.js';
import { registerEvents } from './events/index.js';
import { setupWebViewHandlers } from './webview/handlers.js';

const view = new alt.WebView(`${FRONTEND_URL}/auth`);

// Блокируем игру
alt.toggleGameControls(false);
alt.showCursor(true);
view.focus();

// Замораживаем игрока (опционально)
const player = alt.Player.local;
native.freezeEntityPosition(player.scriptID, true);

// Регистрируем обработчики
setupWebViewHandlers(view);
registerEvents(view);

alt.log('✅ Resource [auth] client started');