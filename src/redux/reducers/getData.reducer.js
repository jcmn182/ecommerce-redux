// types
import {SORT_BY_PRICE,FILTER_BY_DELIVERY,CLEAR_FILTERS} from '../types/getData.types.js'
// fake data
import products from '../../db/fakeDB.js';

const initialState = {
    products:products,
    sort:"",
    byFastDelivery: false,
    searchQuery: "",
}
const getDataReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SORT_BY_PRICE:
          return { ...state, sort: payload };
        case FILTER_BY_DELIVERY:
          return { ...state, byFastDelivery: !state.byFastDelivery };
        /*case FILTER_BY_SEARCH:
          return { ...state, searchQuery: payload };*/
        case CLEAR_FILTERS:
          return { 
            ...state,
            sort:"",
            byFastDelivery: false,
            searchQuery: "",
           };
           
        default:
          return state;
      }
    
}

export default getDataReducer