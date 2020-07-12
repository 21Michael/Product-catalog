import { combineReducers } from 'redux';
import authorizationReducer from './authorization.js';
import productCatalogReducer from './productCatalog.js';
import addProductReducer from './addProduct.js';
import editProductReducer from './editProduct.js';

export default combineReducers({
    authorization: authorizationReducer,
    productCatalog: productCatalogReducer,
    addProduct: addProductReducer,
    editProduct: editProductReducer
})