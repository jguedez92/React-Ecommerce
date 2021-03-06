const productReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'GET_PRODUCT':
        case 'KICK_PRODUCT':
            return {
                ...state,
                product: action.payload
            }


        default:
            return state;
    }
}
export default productReducer;