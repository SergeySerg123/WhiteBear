import { loadProductStartAction, loadProductSucceedAction, loadProductFailuredAction } from "../store/actions/shop.action";
import Axios from "axios";
import { BASE_URL } from "../config/config";

export function loadProducts(items) {
    return (dispatch) => {
        dispatch(loadProductStartAction());
        Axios
            .get(BASE_URL + '/api/beers/all?count=' + items)
            .then(res => dispatch(loadProductSucceedAction(res.data)))
            .catch(err => dispatch(loadProductFailuredAction()));
    }
}