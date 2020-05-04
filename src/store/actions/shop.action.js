export const LOAD_PRODUCTS_STARTED = 'LOAD_PRODUCTS_STARTED';
export const LOAD_PRODUCTS_SUCCEED = 'LOAD_PRODUCTS_SUCCEED';
export const LOAD_PRODUCTS_FAILURED = 'LOAD_PRODUCTS_FAILURED';

export const loadProductStartAction = () => {
    return {
        type: LOAD_PRODUCTS_STARTED
    }
}

export const loadProductSucceedAction = (products) => {
    return {
        type: LOAD_PRODUCTS_SUCCEED,
        payload: products
    }
}

export const loadProductFailuredAction = () => {
    return {
        type: LOAD_PRODUCTS_FAILURED
    }
}