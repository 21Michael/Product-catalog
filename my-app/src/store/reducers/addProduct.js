import { CHANGE_INPUT } from '../actions/actionTypes.js'

const initialState = {
    form: {
        'name': {
            name: 'name',
            value: '',
            type: 'text',
            placeholder: 'Name',
            required: true,
            validation: {
                valid: false,
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
            value: '',
            type: 'file',
            placeholder: 'Photo',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Invalid Photo',
                changed: false,
                validateOn: {
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
                valid: false,
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
                valid: false,
                errorMessage: 'Invalid price',
                changed: false,
                validateOn: {
                    minLength: 999
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
                valid: false,
                errorMessage: 'Invalid discount',
                changed: false,
                validateOn: {
                    minLength: 10,
                    maxLength: 90
                }
            }
        },
        'date': {
            name: 'date',
            value: '',
            type: 'date',
            placeholder: 'Date of the end of discount',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Invalid date',
                changed: false,
                validateOn: {
                    minLength: 999
                }
            }
        }
    },
    buttons: {
        uploadButton: {
            name: 'upload',
            text: 'upload',
            type: 'submit',
            disabled: true
        }
    }
}

export default function addProductReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return { ...state, form: { ...state.form }, buttons: { ...state.buttons } }
        default:
            return state
    }
}