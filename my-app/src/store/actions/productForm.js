import { validationInput } from '../../utiles/validation.js';
import { getProducts } from './productCatalog.js'
import Time from '../../utiles/time.js'
import { CHANGE_INPUT_ADDPRODUCT, GET_PRODUCTS, CLEAN_ADDPRODUCT_FORM } from './actionTypes.js';
import axios from 'axios'
import { storage, firebase } from '../../firebase/firebase.js'


export function onChangeInput(value, name, validation, file) {
    return dispatch => {
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(evt) {
                var img = document.createElement('img');
                img.onload = function() {
                    value = [img.width, img.height];
                    dispatch({ type: CHANGE_INPUT_ADDPRODUCT, name: name, validation: validationInput(value, validation), fileUrl: reader.result, file: file });
                };
                img.src = reader.result;
            }
        } else {
            dispatch({ type: CHANGE_INPUT_ADDPRODUCT, value: value, name: name, validation: validationInput(value, validation) });
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

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                function(snapshot) {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            console.log('Upload is running');
                            break;
                    }
                },
                function(error) {
                    console.log(error)
                },
                function() {
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                        file.img = downloadURL;
                        if (props.reqType === 'add') {
                            dispatch(addProductForm(file, props.history))
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
        axios.put(`https://product-catalog-6482a.firebaseio.com/products/${productId }.json`, file)
            .then(response => {
                history.push('/productsCatalog');
                dispatch(getProducts());
            });
    }
}
export function addProductForm(file, history) {
    return dispatch => {
        axios.post('https://product-catalog-6482a.firebaseio.com/products.json', file)
            .then(response => {
                history.push('/productsCatalog');
                dispatch(getProducts());
                dispatch(cleanForm());
            });
    }
}