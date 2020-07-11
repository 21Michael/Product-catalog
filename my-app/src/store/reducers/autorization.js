import { CHANGE_INPUT } from '../actions/actionTypes.js'

const initialState = {
    form: {
        'email': {
            name: 'email',
            value: '',
            type: 'email',
            placeholder: 'E-mail address',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Incorrect E-mail',
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
                errorMessage: 'Incorrect password',
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

    }
}

export default function autorizationReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            state.form[action.name].value = action.value;
            state.form[action.name].validation.changed = action.validation.changed;
            state.form[action.name].validation.valid = action.validation.valid;

            let isValid = !Object.keys(state.form)
                .map((input) => !!state.form[input].validation.valid)
                .reduce((pr, cr) => pr * cr);

            Object.keys(state.buttons).forEach((button) => {
                state.buttons[button].disabled = isValid;
            });

            return { ...state, form: { ...state.form }, buttons: { ...state.buttons } }
        default:
            return state
    }
}