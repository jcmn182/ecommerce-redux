// types
import {SORT_BY_PRICE,FILTER_BY_DELIVERY,CLEAR_FILTERS} from '../types/getData.types.js';

    export const SearchSortLowToHigh = () => {
         return {
            type: SORT_BY_PRICE,
            payload: "lowToHigh"
          }
    }

    export const SearchSortHightoLow = () => {
        return {
            type: SORT_BY_PRICE,
            payload: "HighToLow",
          }
    }

    export const SearchbyFastDelivery = () => {
        return {
            type: FILTER_BY_DELIVERY
          }
    }

    export const clearFilter = (e) => {
        e.preventDefault()
        return {
            type: CLEAR_FILTERS
          }
    }