import { PRODUCTS_FAILURE, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from "../actions/productsActions";

const initialState = {
    products: [],
    loading: false,
    error: '',
    alreadyLoaded: false
}

const productsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case PRODUCTS_REQUEST:{
            return {
                ...state,
                loading:true
            }
        }
        case PRODUCTS_SUCCESS:{
            return {
                ...state,
                products: payload,
                loading:false,
                error: '',
                alreadyLoaded: true
            }
        }
        case PRODUCTS_FAILURE:{
            return {
                ...state,
                loading:false,
                products: [],
                error: payload,
                alreadyLoaded: true
            }
        }
        default: return state;
    }
}

export default productsReducer;