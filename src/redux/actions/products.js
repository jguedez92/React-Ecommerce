import axios from 'axios';
import { API_URL } from '../../api-config';
import store from '../store';

export const getAllProducts = async() => {
    const res = await axios.get(API_URL + 'products')
    store.dispatch({
        type: 'GET_ALL_PRODUCTS',
        payload: res.data
    });
    return res;
}
export const insertProduct = async(product) => {
    await axios.post(API_URL + 'products/insert', product, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}
export const updateProduct = async(product, id) => {
    await axios.put(API_URL + 'products/' + id, product, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}
export const deleteProduct = async(id) => {
    await axios.delete(API_URL + 'products/' + id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}