import { EDIT_PRODUCT,  CHANGE_INPUT_EDITPRODUCT } from '../actions/actionTypes.js'

const initialState = {
    titleForm: "Edit product",
    productID: '',
    form: {
        'name': {
            name: 'name',
            value: '',
            type: 'text',
            placeholder: 'Name',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid Name',
                changed: false,
                validateOn: {
                    minLength: 20,
                    maxLength: 60
                }
            }
        },
        'photo': {
            name: 'photo',
            file: '',
            value: '',
            type: 'file',
            placeholder: 'Photo',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid Photo',
                changed: false,
                validateOn: {
                    photo: true
                }
            }
        },
        'description': {
            name: 'description',
            value: '',
            type: 'text',
            placeholder: 'Description',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid Description',
                changed: false,
                validateOn: {
                    maxLength: 200
                }
            }
        },
        'price': {
            name: 'price',
            value: '',
            type: 'number',
            placeholder: 'Price (€)',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid price',
                changed: false,
                validateOn: {
                    maxNum: 999
                }
            }
        },
        'discount': {
            name: 'discount',
            value: '',
            type: 'number',
            placeholder: 'Discount (%)',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid discount',
                changed: false,
                validateOn: {
                    minNum: 10,
                    maxNum: 90
                }
            }
        },
        'date': {
            name: 'date',
            value: '',
            minDate: new Date().toISOString().slice(0, 10),
            type: 'date',
            placeholder: 'Date of the end of discount',
            required: true,
            validation: {
                valid: true,
                errorMessage: 'Invalid date',
                changed: false,
                validateOn: {
                    date: true
                }
            }
        }
    },
    buttons: {
        uploadButton: {
            name: 'upload',
            text: 'upload',
            type: 'submit',
            disabled: false
        }
    },
    currentUser: {
        answerType: false,
        message: '',
        authorized: {
            email: false
        }
    }
}

export default function editProductReducer(state = initialState, action) {
    switch (action.type) {
         case CHANGE_INPUT_EDITPRODUCT:
            if (action.file) {
                state.form[action.name].file = action.file;
            }

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
        case EDIT_PRODUCT:
            Object.keys(state.form).forEach((input) => {
                state.form[input].value = action.product[input];
            });
            state.productID = action.id;
            return { ...state }
        default:
            return state
    }
}