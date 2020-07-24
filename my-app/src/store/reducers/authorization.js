import { CHANGE_INPUT, WRONG_AUTHORIZE, CORRECT_AUTHORIZE, AUTHORIZED, CLEAN_FORM } from '../actions/actionTypes.js'

const initialState = {
    titleForm: "Authorization",
    form: {
        'email': {
            name: 'email',
            value: '',
            type: 'email',
            placeholder: 'E-mail address',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Invalid E-mail',
                changed: false,
                validateOn: {
                    email: true,
                }
            }

        },
        'password': {
            name: 'password',
            value: '',
            type: 'password',
            placeholder: 'Password',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Invalid password',
                changed: false,
                validateOn: {
                    minLength: 6
                }
            }
        }
    },
    buttons: {
        loginButton: {
            name: 'signin',
            text: 'login',
            type: 'submit',
            disabled: true
        },
        registryButton: {
            className: 'registry',
            name: 'signup',
            text: 'sign up',
            type: 'submit',
            disabled: true
        }

    },
    currentUser: {
        answerType: false,
        message: '',
        authorized: {
            email: ''
        }
    }
}

export default function autorizationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            state.form[action.name].value = action.value;
            state.form[action.name].validation.changed = action.validation.changed;
            state.form[action.name].validation.valid = action.validation.valid;

            let formValid = !Object.keys(state.form)
                .map((input) => !!state.form[input].validation.valid)
                .reduce((pr, cr) => pr * cr);

            Object.keys(state.buttons).forEach((button) => {
                state.buttons[button].disabled = formValid;
            });

            return { ...state, form: { ...state.form }, buttons: { ...state.buttons } }
        case WRONG_AUTHORIZE:
            state.currentUser.message = action.errorMessage;
            state.currentUser.answerType = action.answerType;
            return { ...state, currentUser: { ...state.currentUser } }
        case CORRECT_AUTHORIZE:
            state.currentUser.message = action.successMessage;
            state.currentUser.answerType = action.answerType;
            return { ...state, currentUser: { ...state.currentUser } }
        case AUTHORIZED:
            state.currentUser.authorized.email = action.userEmail;
            return { ...state, currentUser: { ...state.currentUser } }
        case CLEAN_FORM:
            Object.keys(state.form).forEach((input) => {
                state.form[input].value = '';
            });
            Object.keys(state.buttons).forEach((button) => {
                state.buttons[button].disabled = true;
            });
            state.currentUser.answerType = false;
            state.currentUser.message = '';
            state.currentUser.authorized.email = false;
            return { ...state, currentUser: { ...state.currentUser } }
        default:
            return state
    }
}