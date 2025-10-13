
//import axios from 'axios';
//import { API_URL } from '../../shared/constants.js';


/**
 * Возвращает персонажей пользователя через внешний API
 * @param {string} access_token
 */
export async function getUsersMe(access_token){
    const data = [
        {
            "username": "MIRONOOUV",
            "first_name": "Алексис",
            "last_name": "Миронооу",
            "lvl": 2,
            "exp": 3,
            "credit_money": 12300,
            "cash_money": 1350,
            "hours_in_game": 322,

            "last_position" : {
                "x" : -683,
                "y" : 102,
                "z" : 55
            }

        }
    ];
  
    return { success: true, data:  data};
}
