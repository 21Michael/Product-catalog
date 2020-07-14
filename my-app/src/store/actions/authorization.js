import axios from 'axios'
import { validationInput } from '../../utiles/validation.js';
import { CHANGE_INPUT, LOGIN, WRONG_AUTHORIZE, CORRECT_AUTHORIZE, AUTHORIZED, CLEAN_FORM } from './actionTypes.js';

export function onChangeInput(value, name, validation) {
    return { type: CHANGE_INPUT, value: value, name: name, validation: validationInput(value, validation) }
}


export function onClickSubmit(props) {
    const email = props.form.email.value;
    const password = props.form.password.value;
    const name = props.name;
    const history = props.history;

    return dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        };

        if (name === 'signin') {
            dispatch(signIn(authData, history));
        } else if (name === 'signup') {
            dispatch(signUp(authData));
        }
    }
}

export function signIn(authData, history) {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4', authData)
            .then(response => {
                dispatch(correctAuthorize('logged in', 'success'));
                dispatch(userAuthorized(response.data.email))
                history.push('/productsCatalog')
            })
            .catch(error => {
                dispatch(wrongAuthorize(error, 'error'));
            })
    }
};

export function signUp(authData) {
    return dispatch => {
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4', authData)
            .then(response => {
                dispatch(correctAuthorize('new account signed up. Please sign in.', 'success'))
            })
            .catch(error => {
                dispatch(wrongAuthorize(error, 'error'));
            })
    }
};

export function wrongAuthorize(error, answerType) {
    return {
        type: WRONG_AUTHORIZE,
        errorMessage: error.response.data.error.message.match(/[A-Z]{2,100}/g).join(" ").toLowerCase(),
        answerType
    };
}

export function correctAuthorize(successMessage, answerType) {
    return {
        type: CORRECT_AUTHORIZE,
        successMessage,
        answerType
    };
}

export function userAuthorized(userEmail) {
    return { type: AUTHORIZED, userEmail }
}

export function cleanForm() {
    return { type: CLEAN_FORM }
}