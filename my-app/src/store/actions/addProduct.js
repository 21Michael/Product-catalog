import { validationInput } from '../../utiles/validation.js';
import { getProducts } from './productCatalog.js'
import { CHANGE_INPUT_ADDPRODUCT, GET_PRODUCTS } from './actionTypes.js';
import Axios from '../../utiles/axious.js'
import firebase from 'firebase/app'
import 'firebase/storage'

export function onChangeInput(value, name, validation, file) {
    return { type: CHANGE_INPUT_ADDPRODUCT, value: value, name: name, validation: validationInput(file || value, validation), file: file }
}
export function onClickSubmit(props) {
    const form = props.form;
    const history = props.history;
    return dispatch => {
        const discountEnd = new Date(form.date.value);
        const currentDate = new Date();
        const discountDuration = Math.ceil((discountEnd - currentDate) / (1000 * 60 * 60 * 24));

        console.log(props)
        const file = {
            description: form.description.value,
            discount: form.discount.value,
            discountDuration: discountDuration,
            img: form.photo.value,
            key: Math.floor(Math.random() * 100),
            price: form.price.value,
            name: form.name.value
        }
        const url = 'https://product-catalog-6482a.firebaseio.com/products.json';
        const onSucces = (response) => {
            history.push('/productsCatalog');
            dispatch(getProducts())
        };
        new Axios("post", url, file).send(onSucces);

        var firebaseConfig = {
            apiKey: "AIzaSyBufuTzNyae7QJdcvBaWZS9cZNNV5RD9N4",
            authDomain: "tallans-imageupload-tutorial.firebaseapp.com",
            databaseURL: "https://tallans-imageupload-tutorial.firebaseio.com",
            projectId: "tallans-imageupload-tutorial",
            storageBucket: "tallans-imageupload-tutorial.appspot.com",
            messagingSenderId: "super secret keys.....asgvegxgevergfvr",
            appId: "super secret app id....adsfa;lsdkjf",
            measurementId: "super secret as;dlkfjal;dskjf"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        //analytics is optional for this tutoral 
        firebase.analytics();

        const storage = firebase.storage()
    }
}