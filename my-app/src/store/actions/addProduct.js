import { validationInput } from '../../validation/validation.js';
import { CHANGE_INPUT } from './actionTypes.js';

export function onChangeInput(value, name, validation) {
    return { type: CHANGE_INPUT, value: value, name: name, validation: validationInput(value, validation) }
}
export function onClickSubmit(email, password, name, history) {
    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

    }
}