//types
import {ADD_PRODUCTS,ADD_TO_CART,REMOVE_FROM_CART,CLEAN,CHANGE_CART_QTY} from '../types/cart.types.js'

const initialState = {
    product:[],
    cart:[]
}
const cartReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) 
    {
        case ADD_PRODUCTS:
            return { ...state, product: [payload] };
        
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };

        case REMOVE_FROM_CART:
            return {
                  ...state,
                  cart: [...state.cart.filter((item) => item.id !== payload)],
                };

        case CHANGE_CART_QTY:
            return {
                  ...state,
                  cart: state.cart.filter((c) =>
                    c.id === payload.id ? (c.qty = payload.qty) : c.qty),
                };

        case CLEAN :
            return {
                ...state,
                cart:[]
            }

        default : return state
    }
}

export default cartReducer