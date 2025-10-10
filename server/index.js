import * as alt from 'alt-server';
import { registerHandlers } from './handlers/index.js';

registerHandlers();
alt.log('✅ Resource [auth] started');