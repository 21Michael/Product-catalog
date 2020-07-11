import {  } from '../actions/actionTypes.js'

const initialState = {
    title: {
        to: '/',
        label: 'SH'
    },
    nav: [
        { to: '/categoryAll/woman', label: 'Woman' },
        { to: '/categoryAll/men', label: 'Men' },
        { to: '/categoryAll/kids', label: 'Kids' },
        { to: '/categoryAll/comingSoon', label: 'Coming Soon' }
    ],
    form: {
        hidden: true,
        value: ' ',
        type: 'text',
        placeholder: 'Search something...',
        required: true
    },
    basket: {
        to: '/basket',
        counter: 0
    }
}

export default function add_editProductReducer(state = initialState, action) {
    switch (action.type) {
        //case :
            
        default:
            return state
    }
}