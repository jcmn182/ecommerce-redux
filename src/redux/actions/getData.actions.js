// types
import {SORT_BY_PRICE,FILTER_BY_STOCK,FILTER_BY_DELIVERY,FILTER_BY_RATING,
    FILTER_BY_SEARCH,CLEAR_FILTERS,GET_DATA} from '../types/getData.types.js';

    export const getData = () => {
        return {
            type: GET_DATA
        }
    }