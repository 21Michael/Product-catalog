import { combineReducers } from 'redux';
import authorizationReducer from './authorization.js';
import productCatalogReducer from './productCatalog.js';
import productFormReducer from './productForm.js';

export default combineReducers({
    authorization: authorizationReducer,
    productCatalog: productCatalogReducer,
    productForm: productFormReducer
})