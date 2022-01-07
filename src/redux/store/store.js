import {createStore, combineReducers} from 'redux';
// reducers
import getDataReducer from '../reducers/getData.reducer.js';
import cartReducer from '../reducers/cart.reducer.js'

const reducers = combineReducers({
    getData:getDataReducer,
    cart:cartReducer
});

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default  store