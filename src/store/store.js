import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { login } from './reducers/login';
import { slider } from './reducers/slider';
import { card } from './reducers/card';
import { shop } from './reducers/shop';


const rootReducer = combineReducers({
    login,
    slider,
    card,
    shop
});

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)));