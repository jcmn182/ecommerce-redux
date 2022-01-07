// types
import {SORT_BY_PRICE,FILTER_BY_STOCK,FILTER_BY_DELIVERY,FILTER_BY_RATING,
        FILTER_BY_SEARCH,CLEAR_FILTERS,GET_DATA} from '../types/getData.types.js'
// fake data
import products from '../../db/fakeDB.js';

const initialState = {
    products:products,
    byStock: false,
    sort:"",
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
}
const getDataReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) 
    {
        case GET_DATA:
        return { ...state,
                products:state.products
        };

        default:
            return state;
    }
}

export default getDataReducer