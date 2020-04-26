import * as actions from '../actions/login.action';

const initialState = {
    authorized: false,
    accessToken: null,
    waitingOfResponce: false,
    hasErrors: false
};

export function login(state = initialState, action) {
    if(action.type === actions.LOGIN_STARTED) {
        return {
            ...state,
            waitingOfResponce: true,
            authorized: false,
            hasErrors: false,
            accessToken: null
        }
    } else if (action.type === actions.LOGIN_SUCCEED) {
        return {
            ...state,
            waitingOfResponce: false,
            accessToken: action.payload,
            authorized: true,
            hasErrors: false
        }
    } else if (action.type === actions.LOGIN_FAILURED) {
        return {
            ...state,
            authorized: false,
            waitingOfResponce: false,
            hasErrors: true,
            accessToken: null
        }
    } else {
        return state
    }   
}