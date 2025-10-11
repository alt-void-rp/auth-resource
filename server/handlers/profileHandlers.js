import { EVENTS } from '../../shared/constants.js';
import { emitSuccess, emitError } from '../responces/emit.js';
import {
  getUsersMe as apiUsersMe,
} from '../api/profilesService.js';

export async function handleUsersMe(player, jsonData) {
    let data = jsonData;
  
    const result = await apiUsersMe(data.access_token);
    if (result.success) {
        emitSuccess(player, EVENTS.SERVER.GET_USERS_ME_SUCCESS, result.data);
    } else {
        emitError(player, EVENTS.SERVER.GET_USERS_ME_FAIL, 'api-error', result.error.message);
    }

}