import { 
    LOAD_PRODUCTS_STARTED, 
    LOAD_PRODUCTS_SUCCEED, 
    LOAD_PRODUCTS_FAILURED 
} from "../actions/shop.action";

const initialState = {
    products: [],
    isFull: false,
    loading: false,
    succeed: false,
    hasError: false,
    countItems: 8
};

export function shop (state = initialState, action) {
    if (action.type === LOAD_PRODUCTS_STARTED) {
        return {
            ...state,
            loading: true,
            succeed: false,
            isFull: false,
            hasError: false
        }
    }

    if (action.type === LOAD_PRODUCTS_SUCCEED) {
        return {
            ...state,
            loading: false,
            succeed: true,
            hasError: false,
            isFull: action.payload.isFull,
            products: [...action.payload.beerItems],
            countItems: action.payload.countItems
        }
    }

    if (action.type === LOAD_PRODUCTS_FAILURED) {
        return {
            ...state,
            loading: false,
            succeed: false,
            hasError: true,
            isFull: false
        }
    }

    return state;
}