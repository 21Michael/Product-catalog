import { DELETE_PRODUCT } from '../actions/actionTypes.js'

const initialState = {
    products: [{
            key: 1,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '100',
            discount: '20',
            discountDuration: '10'
        },
        {
            key: 2,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '130'
        },
        {
            key: 3,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '100',
            discount: '10',
            discountDuration: '10'
        },
        {
            key: 4,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '100',
            discount: '20',
            discountDuration: '10'
        },
        {
            key: 5,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '100'
        },
        {
            key: 6,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '100',
            discount: '30',
            discountDuration: '10'
        },
         {
            key: 7,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '230',
            discount: '50',
            discountDuration: '10'
        },
         {
            key: 8,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '160',
            discount: '13',
            discountDuration: '10'
        },
         {
            key: 9,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '200'
        },
         {
            key: 10,
            img: '/image/products/outwear-2.jpg',
            title: 'Leather jacket',
            description: 'Blue solid jacket, has a spread collar, 4 pockets, button closure, long sleeves, straight hem',
            price: '130',
            discount: '5',
            discountDuration: '10'
        }
    ]
}
export default function productCatalogReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_PRODUCT:
            let products = state.products.filter((el) => el.key !== action.id);
            return { ...state, products:  products  }
        default:
            return state
    }
}