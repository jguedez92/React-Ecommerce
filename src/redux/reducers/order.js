const orderReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL':
            return {
                ...state,
                orders: action.payload
            }

        default:
            return state;
    }
}
export default orderReducer;