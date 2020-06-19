const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'LOGOUT':
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