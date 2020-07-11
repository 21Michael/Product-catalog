import { combineReducers } from 'redux'
import autorizationReducer from './autorization.js'
import productCatalogReducer from './productCatalog.js'
import add_editProductReducer from './add-editProduct.js'

export default combineReducers({
    autorization: autorizationReducer,
    productCatalog: productCatalogReducer,
    add_editProduct: add_editProductReducer
})