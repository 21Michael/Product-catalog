import { DELETE_PRODUCT, GET_PRODUCTS, EDIT_PRODUCT } from './actionTypes.js'
import { database } from '../../firebase/firebase.js'
import Time from '../../utiles/time.js'

export function deleteItem(id, products) {
    return (dispatch) => {
        products = products.filter((el) => el.key !== id);
        database.ref(`/products/${id}`)
            .remove()
            .then(response => {
                dispatch({ type: DELETE_PRODUCT, products: products });
            });
    }
}
export function editItem(id, products) {
    return (dispatch) => {
        let product;
        products.forEach((el) => {
            if (el.key === id) { product = el }
        });
        product.date = Time().addDays(product.discountDuration).toISOString().slice(0, 10);
        
        dispatch({ type: EDIT_PRODUCT, product, id })
    }
}

export function getProducts() {
    return (dispatch) => {
        const uploadTask = database.ref('/products');
        uploadTask.on('value',
            function(snapshot) {
                dispatch({ type: GET_PRODUCTS, products: snapshot.val() })
            });
    }
}