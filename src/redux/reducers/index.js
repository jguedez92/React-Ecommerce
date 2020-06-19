import user from "./user";
import products from "./product";
import orders from "./order";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user,
    products,
    orders
});

export default rootReducer;