import { DELETE_PRODUCT, GET_PRODUCTS } from '../actions/actionTypes.js'

const initialState = {
    products: [],
    buttons:{
        addButton:{
            name:'Add product',
            to: '/addProduct',
            icon: 'icon-plus'
        },
        signInButton:{
            name:'Sign In',
            to: '/',
            icon: 'icon-signin'
        }
    }
}
export default function productCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_PRODUCT:
            return { ...state, products:  action.products  }
        case GET_PRODUCTS:
            let getProducts = [];
            Object.keys(action.products).forEach( (key) =>{
                action.products[key].key = key;
                getProducts.push(action.products[key])
            });
            return { ...state, products:  getProducts  }
        default:
            return state
    }
}