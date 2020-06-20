import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';

export const getAllOrders = async() => {
    const res = await axios.get(API_URL + 'orders')
    store.dispatch({
        type: 'GET_ALL_ORDERS',
        payload: res.data
    });
    return res;
}

export const insertOrder = async(order) => {
    await axios.post(API_URL + 'orders/insert', order, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
}

export const changeStatus = async(option) => {
    await axios.post(API_URL + 'orders/enable', option, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
}