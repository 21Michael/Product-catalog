import { DELETE_PRODUCT, GET_PRODUCTS, EDIT_PRODUCT } from './actionTypes.js'
import axios from 'axios'
import Time from '../../utiles/time.js'

export function deleteItem(id, products) {
    return (dispatch) => {
        products = products.filter((el) => el.key !== id);
        axios.put('https://product-catalog-6482a.firebaseio.com/products.json', products)
            .then(response => {
                dispatch({ type: DELETE_PRODUCT, products: products })
            })
    }
}
export function editItem(id, products) {
    return (dispatch) => {
        let product = null;
        products.forEach((el) => {
            if (el.key === id) { product = el }
        });
        
        product.date = Time().addDays(product.discountDuration).toISOString().slice(0, 10);

        dispatch({ type: EDIT_PRODUCT, product, id })

    }
}

export function getProducts() {
    return (dispatch) => {
        axios.get('https://product-catalog-6482a.firebaseio.com/products.json')
            .then(response => {
                dispatch({ type: GET_PRODUCTS, products: response.data })
            })
    }
}