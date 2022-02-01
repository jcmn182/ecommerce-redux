// imports from redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// redux thunk
import thunk from "redux-thunk";
// reducers
import FakeApiReducer from '../reducers/fake.api.reducer.js';
import cartReducer from '../reducers/cart.reducer.js';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    FakeApi:FakeApiReducer,
    cart: cartReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))
    )

export default  store