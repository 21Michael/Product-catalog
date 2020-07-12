import { DELETE_PRODUCT, GET_PRODUCTS } from './actionTypes.js'
import axios from 'axios'

export function deleteItem(id, products) {
    return (dispatch) => {
        products = products.filter((el) => el.key !== id);
        axios.put('https://product-catalog-6482a.firebaseio.com/products.json', products)
	        .then(response => dispatch({ type: DELETE_PRODUCT, products: products }))
	        .catch(error => console.log(error));
    }
}

export function getProducts() {
    return (dispatch) => {
        axios.get('https://product-catalog-6482a.firebaseio.com/products.json')
            .then(response => dispatch({ type: GET_PRODUCTS, products: response.data }))
            .catch(error => console.log(error));
    }
}