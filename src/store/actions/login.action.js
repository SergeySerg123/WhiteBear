import Axios from "axios";

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_FAILURED = 'LOGIN_FAILURED';

const BASE_URL = 'https://localhost:44376/';

export const login = (user) => {
    return dispatch => {
        dispatch(loginStarted());
        Axios({ method: 'post', url: BASE_URL + 'login', data: {
                "username" : user.email,
                "password" : user.password
            }}).then(res => {
                console.log(res.data)
                dispatch(loginSucceed(res.token))
            })
            .catch(err => dispatch(loginFailured()));
    }
}

const loginStarted = () => {
    return {
        type: LOGIN_STARTED
    }
};

const loginSucceed = (token) => {
    return {
        type: LOGIN_SUCCEED,
        payload: token
    }
};

const loginFailured = () => {
    return {
        type: LOGIN_FAILURED
    }
};