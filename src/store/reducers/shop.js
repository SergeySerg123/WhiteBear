import { 
    LOAD_PRODUCTS_STARTED, 
    LOAD_PRODUCTS_SUCCEED, 
    LOAD_PRODUCTS_FAILURED 
} from "../actions/shop.action";

const initialState = {
    products: [],
    loading: false,
    succeed: false,
    hasError: false
};

export function shop (state = initialState, action) {
    if (action.type === LOAD_PRODUCTS_STARTED) {
        return {
            ...state,
            loading: true,
            succeed: false,
            hasError: false
        }
    }

    if (action.type === LOAD_PRODUCTS_SUCCEED) {
        return {
            ...state,
            loading: false,
            succeed: true,
            hasError: false,
            products: [...action.payload]
        }
    }

    if (action.type === LOAD_PRODUCTS_FAILURED) {
        return {
            ...state,
            loading: false,
            succeed: false,
            hasError: true
        }
    }

    return state;
}