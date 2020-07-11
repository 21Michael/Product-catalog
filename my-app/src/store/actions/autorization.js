import axios from 'axios'
import { CHANGE_INPUT, LOGIN } from './actionTypes.js';

const validationInput = (value, validation) => {

    const validators = {
        email: (email, validation) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        minLength: (value, validation) => {
            if (validation.minLength) {
                return value.length < validation.minLength ? false : true;
            }
        },
        maxLength: (value, validation) => {
            if (validation.maxLength) {
                return value.length > validation.maxLength ? false : true;
            }
        }
    }

    const isValid = (methods, value) => {
        return Object.keys(methods)
            .map((key) => {
                return validators[key] ? validators[key](value, methods) : null;
            })
            .filter((el) => el != null)
            .reduce((prev, curr) => !!curr * !!prev);
    }


    if (value) {
        validation.changed = true;
        validation.valid = isValid(validation.validateOn, value);

    } else {
        validation.changed = false;
    }

    return validation;
}


export function onChangeInput(value, name, validation) {
    return { type: CHANGE_INPUT, value: value, name: name, validation: validationInput(value, validation) }
}

export function onClickSubmit(email, password, name) {
    const authData = {
        email: email,
        password: password,
        returnSecureToken: true
    };
    if (name === 'signin') {
        try {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4', authData)
            .then(response => console.log(response.data));
        } catch (error) {
            console.log(error)
        }

    } else if (name === 'signup') {
        try {
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4', authData)
                .then(response => console.log(response.data));
        } catch (error) {
            console.log(error.response)
        }
    }
}
