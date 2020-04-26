import { LOADING_SLIDER_DATA_STARTED, LOADING_SLIDER_DATA_SUCCEED, LOADING_SLIDER_DATA_FAILURED } from "../actions/slider.action";

const initialState = {
    slides: [],
    loading: false,
    succeed: false
};

export function slider(state = initialState, action) {
    if(action.type === LOADING_SLIDER_DATA_STARTED) {
        return {
            ...state,
            loading: true,
            succeed: false
        }
    }

    if (action.type === LOADING_SLIDER_DATA_SUCCEED) {
        return {
            ...state,
            loading: false,
            slides: action.payload,
            succeed: true
        }
    }

    if (action.type === LOADING_SLIDER_DATA_FAILURED) {
        return {
            ...state,
            loading: false,
            slides: action.payload,
            succeed: false
        }
    }

    return state;
}