import { ADD_COUNT, ADD_TO_CART, REMOVE_COUNT, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TO_CART:{
            const found = state.cart.find(item => item.key === payload.key);
            if (!found){
                const newCart = [...state.cart, {...payload, quantity: 1}];
                return {
                    ...state,
                    cart: newCart 
                }
            }
            return state;
        }
        case REMOVE_FROM_CART:{
            const newCart = state.cart.filter(item => item.key !== payload);
            return {
                ...state,
                cart: newCart
            } 
        }
        case ADD_COUNT:{
            const index = state.cart.findIndex(item => item.key === payload);
            const newCart = [...state.cart];
            newCart[index].quantity = newCart[index].quantity + 1;
            return {
                ...state,
                cart: newCart
            } 
        }
        case REMOVE_COUNT:{
            const index = state.cart.findIndex(item => item.key === payload);
            const newCart = [...state.cart];
            if (newCart[index].quantity > 1) {
                newCart[index].quantity = newCart[index].quantity - 1;
                return {
                    ...state,
                    cart: newCart
                }
            }
            return state;
        }
        default: return state;
    }
}

export default cartReducer;