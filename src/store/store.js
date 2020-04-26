import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { login } from './reducers/login';
import { slider } from './reducers/slider';


const rootReducer = combineReducers({
    login,
    slider
});

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)));