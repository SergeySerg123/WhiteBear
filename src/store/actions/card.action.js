export const ADD_TO_CARD = 'ADD_TO_CARD';
export const DELETE_FROM_CARD = 'DELETE_FROM_CARD';

export const addToCard = (product) => {
    return {
        type: ADD_TO_CARD,
        payload: product
    }
}

export const deleteFromCard = (item) => {
    return {
        type: DELETE_FROM_CARD,
        payload: item.id
    }
}