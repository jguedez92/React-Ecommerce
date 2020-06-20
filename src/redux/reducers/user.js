const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'LOGOUT':
            return {
                user: action.payload
            }
        case 'LOGIN':
        case 'GET_USER':
        case 'PUT_USER':
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;