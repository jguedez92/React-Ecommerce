import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { save, load } from 'redux-localstorage-simple';
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(
    save(),
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    load(),
    composeEnhancers(),
);

export default store;