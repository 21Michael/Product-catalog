import { DELETE_PRODUCT, GET_PRODUCTS, EDIT_PRODUCT } from './actionTypes.js'
import Axios from '../../utiles/axious.js'

export function deleteItem(id, products) {
    return (dispatch) => {
        products = products.filter((el) => el.key !== id);
        const url = 'https://product-catalog-6482a.firebaseio.com/products.json';
        const onSucces = (response) => {
            dispatch({ type: DELETE_PRODUCT, products: products })
        };
        new Axios("put", url, products).send(onSucces);
    }
}
export function editItem(id, products) {
    return (dispatch) => {
        let product = null;
        products.forEach((el) => {
            if (el.key === id) {product = el}
        });

        let dateEndDiscount = new Date();
        dateEndDiscount.setDate(dateEndDiscount.getDate() + product.discountDuration);
        product.date = dateEndDiscount.toISOString().slice(0, 10);

        dispatch({ type: EDIT_PRODUCT, product, id })

    }
}

export function getProducts() {
    return (dispatch) => {
        const url = 'https://product-catalog-6482a.firebaseio.com/products.json';
        const onSucces = (response) => {
            dispatch({ type: GET_PRODUCTS, products: response.data })
        };
        new Axios("get", url).send(onSucces);
    }
}