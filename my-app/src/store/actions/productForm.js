import { validationInput } from '../../utiles/validation.js';
import { getProducts } from './productCatalog.js'
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
        const discountEnd = new Date(form.date.value);
        const currentDate = new Date();
        const discountDuration = Math.ceil((discountEnd - currentDate) / (1000 * 60 * 60 * 24));

        const img = form.photo.file;
        const uploadTask = storage.ref(`/images/${img.name}`).put(img);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            function(error) {
                console.log(error)
            },
            function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    
                    const file = {
                        description: form.description.value,
                        discount: form.discount.value,
                        discountDuration: discountDuration,
                        img: downloadURL,
                        key: Math.floor(Math.random() * 100),
                        price: form.price.value,
                        name: form.name.value
                    }

                    if (props.reqType === 'add') {
                        dispatch(addProductForm(file, props.history))
                    } else if (props.reqType === 'edit') {
                        dispatch(editProductForm(file, props.history, props.id))
                    }
                })
            }
        );
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