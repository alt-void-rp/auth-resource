// @ts-ignore
import * as alt from 'alt-server';

import { EVENTS } from '../../shared/constants.js';
import { emitSuccess, emitError } from '../responces/emit.js';
import {
  getUsersMe as apiUsersMe,
} from '../api/profilesService.js';


/**
 * 
 * @param {alt.Player} player 
 * @param {object} jsonData 
 */
export async function handleUsersMe(player, jsonData) {
    let data = jsonData;
  
    const result = await apiUsersMe(data.access_token);
    if (result.success) {
        emitSuccess(player, EVENTS.SERVER.GET_USERS_ME_SUCCESS, result.data);
    } else {
        emitError(player, EVENTS.SERVER.GET_USERS_ME_FAIL, 'api-error', result.error.message);
    }

}

/**
 * 
 * @param {alt.Player} player 
 */
export async function handleCreatePerson(player){
    const dim = player.id; 
    player.dimension = dim;

    const pos = { x: -786.8663, y: 315.7642, z: 217.6385 };
    emitSuccess(player, EVENTS.SERVER.CREATE_PERSON_DIMENSION, pos);
}