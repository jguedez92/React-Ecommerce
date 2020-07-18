import axios from 'axios';
import {
    API_URL
} from '../../api-config';
import store from '../store';

export const register = async(user) => {
    const res = await axios.post(API_URL + 'users/register', user)
    return res
}
export const confirmation = async(data) => {
    const res = await axios.post(API_URL + 'users/confirmation', data)
    return res
}
export const login = async(credentials) => {
    const res = await axios.post(API_URL + 'users/login', credentials);
    localStorage.setItem('authToken', res.data.token);
    store.dispatch({
        type: 'LOGIN',
        payload: res.data.user
    });
    return res
}
export const updatePassword = async(user) => {
    await axios.post(API_URL + 'users/update_password', user, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}
export const updateUser = async(data, id) => {
    const res = await axios.put(API_URL + 'users/' + id, data, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
}
export const refreshUser = async() => {
    const res = await axios.get(API_URL + 'users/get_by_auth', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    });
    store.dispatch({
        type: 'GET_USER',
        payload: res.data
    });
}
export const getAllUsers = async() => {
    const res = await axios.get(API_URL + 'users/getAll')
    store.dispatch({
        type: 'GET_ALL_USERS',
        payload: res.data
    });
}
export const logout = async() => {
    const res = await axios.get(API_URL + 'users/logout', {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('authToken')
        }
    })
    localStorage.removeItem('authToken');
    store.dispatch({
        type: 'LOGOUT',
        payload: undefined
    })
    return res;
}