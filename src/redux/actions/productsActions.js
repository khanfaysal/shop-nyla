export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
export const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

export const productsRequest = () => {
    return {
        type: PRODUCTS_REQUEST
    }
}

export const productsSuccess = products => {
    return {
        type: PRODUCTS_SUCCESS,
        payload: products
    }
}

export const productsFailure = error => {
    return {
        type: PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(productsRequest())
        fetch('https://shop-nyla.herokuapp.com/products')
        .then(res => res.json())
        .then(data => dispatch(productsSuccess(data)))
        .catch(err => dispatch(productsFailure(err.message)))
    }
}