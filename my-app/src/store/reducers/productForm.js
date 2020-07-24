import { CHANGE_INPUT_PRODUCTFORM, CLEAN_PRODUCTFORM_FORM, EDIT_PRODUCT } from '../actions/actionTypes.js'

const initialState = {
    productID: '',
    form: {
        'photo': {
            name: 'photo',
            file: {},
            fileURL: '',
            type: 'file',
            placeholder: 'Photo',
            required: true,
            validation: {
                valid: false,
                errorMessage: 'Invalid Photo',
                changed: false,
                validateOn: {
                    photo: true
                }
            }
        },
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
                    maxNum: 99999999.99
                }
            }
        },
        'discount': {
            name: 'discount',
            value: '',
            type: 'number',
            placeholder: 'Discount (%)',
            required: false,
            validation: {
                valid: false,
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
            required: false,
            validation: {
                valid: false,
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
            disabled: true
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

export default function productFormReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT_PRODUCTFORM:
            if (action.file) {
                state.form.photo.fileURL = action.fileUrl;
                state.form.photo.file = action.file;
            }

            state.form[action.name].value = action.value;
            state.form[action.name].validation.changed = action.validation.changed;
            state.form[action.name].validation.valid = action.validation.valid;

            if (state.form.discount.value) {
                state.form.date.required = true
            } else {
                state.form.date.required = false
            }

            let formValid = Object.keys(state.form)
                .map((input) => {
                    if (state.form[input].required) {
                        return state.form[input].validation.valid ? true : false
                    } else if (!state.form[input].required) {
                        if (state.form[input].validation.changed) {
                            return state.form[input].validation.valid ? true : false
                        } else {
                            return true
                        }
                    }
                })
                .reduce((pr, cr) => pr * cr);

            state.buttons.uploadButton.disabled = !formValid;

            return { ...state, form: { ...state.form }, buttons: { ...state.buttons } }
        case EDIT_PRODUCT:
            Object.keys(state.form).forEach((input) => {
                state.form[input].value = action.product[input];
                state.form[input].validation.valid = true;
            });

            state.buttons.uploadButton.disabled = false;
            state.form.photo.fileURL = action.product.img;
            state.productID = action.id;

            return { ...state }
        case CLEAN_PRODUCTFORM_FORM:
            Object.keys(state.form).forEach((input) => {
                state.form[input].value = '';
                state.form[input].file = '';
                state.form[input].fileUrl = '';
                state.form[input].validation.valid = false;
                state.form[input].validation.changed = false;
            });
            return { ...state }
        default:
            return state
    }
}