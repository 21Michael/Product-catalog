import { validationInput } from '../../utiles/validation.js';
import { getProducts } from './productCatalog.js'
import { CHANGE_INPUT_EDITPRODUCT, GET_PRODUCTS } from './actionTypes.js';
import axios from 'axios'
import { storage, firebase } from '../../firebase/firebase.js'

export function onChangeInput(value, name, validation, file) {
    return { type: CHANGE_INPUT_EDITPRODUCT, value: value, name: name, validation: validationInput(file || value, validation), file: file }
}
export function onClickSubmit(props) {
    const form = props.form;
    const productId = props.id;
    const history = props.history;
    console.log(productId)

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
                    axios.put(`https://product-catalog-6482a.firebaseio.com/products/${productId }.json`, file)
                        .then(response => {
                            history.push('/productsCatalog');
                            dispatch(getProducts());
                        });
                })
            }
        );

    }
}