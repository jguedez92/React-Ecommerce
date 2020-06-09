import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllProducts = async() => {
    const res = await axios.get(API_URL + '/products')
    store.dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: res.data
    });
    return res;
}