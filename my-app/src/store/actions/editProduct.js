import { validationInput } from '../../utiles/validation.js';
import {getProducts} from './productCatalog.js'
import { CHANGE_INPUT_EDITPRODUCT, GET_PRODUCTS  } from './actionTypes.js';
import Axios from '../../utiles/axious.js'

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
  
        const file = {
            description: form.description.value,
            discount: form.discount.value,
            discountDuration: discountDuration,
            img: form.photo.value,
            key: Math.floor(Math.random() * 100),
            price: form.price.value,
            name: form.name.value
        } 

        const url = `https://product-catalog-6482a.firebaseio.com/products/${productId }.json`;
        const onSucces = (response) => {
            history.push('/productsCatalog');
            dispatch(getProducts());
        };

        new Axios("put", url, file).send(onSucces);
    }
}