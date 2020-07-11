import { DELETE_PRODUCT } from './actionTypes.js'

export function deleteItem(id) {
    return { type: DELETE_PRODUCT, id: id }
}