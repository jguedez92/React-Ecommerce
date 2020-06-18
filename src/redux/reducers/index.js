import user from "./user";
import product from "./product";
import order from "./order";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user,
    product,
    order
});

export default rootReducer;