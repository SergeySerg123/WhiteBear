import {addToCard} from '../store/actions/card.action';

export function addProductToCard(item) {
    return (dispatch) => {
        dispatch(addToCard(item));
    }
}

export function deleteFormCard() {
    
}