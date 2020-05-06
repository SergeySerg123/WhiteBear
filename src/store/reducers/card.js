import { ADD_TO_CARD, DELETE_FROM_CARD } from "../actions/card.action";

const initialState = {
    products: []
}

export function card(state = initialState, action) {

    if (action.type === ADD_TO_CARD) {
        let targetArr = [...state.products];
        targetArr.push(action.payload);
        return {
            ...state,
            products: [...targetArr]
        }
    }

    if (action.type === DELETE_FROM_CARD) {
        let targetArr = [...state.products]
            .filter(p => p.id != action.payload);
        return {
            ...state,
            products: [...targetArr]
        }
    }

    return state;
}