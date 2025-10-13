import * as alt from 'alt-client';
import { FRONTEND_URL } from '../shared/constants.js';
import { registerEvents } from './events/index.js';
import { setupWebViewHandlers } from './webview/handlers.js';
import * as SHARED from 'alt:shared-variables';

const view = new alt.WebView(`${FRONTEND_URL}/auth`);

const user = SHARED.localUser;
user.blockControls();

view.focus();

// Регистрируем обработчики
setupWebViewHandlers(view);
registerEvents(view);

alt.log('✅ Resource [auth] client started');