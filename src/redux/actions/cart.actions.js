//types
import {ADD_TO_CART,REMOVE_FROM_CART,CLEAN,CHANGE_CART_QTY} from '../types/cart.types.js'

export const addCart = (prod) => {

    return {
        type: ADD_TO_CART,
        payload:prod
    }
}

export const removeFromCart  = (id) => {
    
    return {
        type:REMOVE_FROM_CART,
        payload:id
    }

}

export const addQty = (value,id) => {
  
    return {
        type: CHANGE_CART_QTY,
        payload: {
          id: id,
          qty:value,
        },
      }
}

export const cleanCart = () => {
  
    return {
        type: CLEAN,
      }
}