import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';

export const register = async(user) => {
    await axios.post(API_URL + '/users/register', user);
}
export const login = async(credentials) => {
    const res = await axios.post(API_URL + '/users/login', credentials);
    localStorage.setItem('authToken', res.data.token);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    });
}
export const updateProfile = async(user) => {
    const res = await axios.put(API_URL + '/users', user, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_USER',
        payload: res.data
    });
}
export const getUserInfo = async(user) => {
    const res = await axios.get(API_URL + '/users/info', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'SET_USER',
        payload: res.data
    });
}