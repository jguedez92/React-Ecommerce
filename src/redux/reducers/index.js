import user from "./user";
import product from "./product";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    user,
    product
});

export default rootReducer;