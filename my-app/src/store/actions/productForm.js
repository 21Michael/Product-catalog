import { validationInput } from '../../utiles/validation.js';
import { getProducts } from './productCatalog.js'
import Time from '../../utiles/time.js'
import { CHANGE_INPUT_ADDPRODUCT, GET_PRODUCTS, CLEAN_ADDPRODUCT_FORM } from './actionTypes.js';
import { database, storage, firebase, firebaseHandlers } from '../../firebase/firebase.js'

export function onChangeInput(value, name, validation, file) {
    return dispatch => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = function(evt) {
                var img = document.createElement('img');
                img.src = reader.result;

                img.onload = function() {
                    value = [img.width, img.height];
                    dispatch({
                        type: CHANGE_INPUT_ADDPRODUCT,
                        name: name,
                        validation: validationInput(value, validation),
                        fileUrl: reader.result,
                        file: file
                    });
                };
            }
        } else {
            dispatch({
                type: CHANGE_INPUT_ADDPRODUCT,
                value: value,
                name: name,
                validation: validationInput(value, validation)
            });
        }
    }
}

export function onClickSubmit(props) {
    const form = props.form;

    return dispatch => {
        const file = {
            description: form.description.value,
            discount: form.discount.value,
            discountDuration: Time(form.date.value).durationDays(),
            img: form.photo.fileURL,
            key: Math.floor(Math.random() * 100),
            price: form.price.value,
            name: form.name.value
        };

        if (form.photo.file) {
            const img = form.photo.file;
            const uploadTask = storage.ref(`/images/${img.name}`).put(img);

            uploadTask.on(
                firebase.storage.TaskEvent.STATE_CHANGED,
                firebaseHandlers.loading,
                firebaseHandlers.error,
                function() {
                    uploadTask.snapshot.ref.getDownloadURL()
                        .then(downloadURL => {
                            file.img = downloadURL;
                            if (props.reqType === 'add') {
                                dispatch(addProductForm(file, props.history, props.id))
                            } else if (props.reqType === 'edit') {
                                dispatch(editProductForm(file, props.history, props.id))
                            }
                        })
                }
            );
        } else {
            dispatch(editProductForm(file, props.history, props.id))
        }
    }
}

export function cleanForm() {
    return { type: CLEAN_ADDPRODUCT_FORM };
};

export function editProductForm(file, history, productId) {
    return dispatch => {
        database.ref(`/products/${productId}`)
            .set(file)
            .then(response => {
                history.push('/productsCatalog');
                dispatch(getProducts());
            });
    }
}
export function addProductForm(file, history) {
    return dispatch => {
        database.ref('/products')
            .push(file)
            .then(response => {
                history.push('/productsCatalog');
                dispatch(getProducts());
                dispatch(cleanForm());
            });
    }
}