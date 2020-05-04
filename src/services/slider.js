import Axios from "axios";
import { 
    loadingSliderDataStarted, 
    loadingSliderDataSucceed, 
    loadingSliderDataFailured 
} from "../store/actions/slider.action";
import { BASE_URL } from "../config/config";

export function loadSlides() {
    return dispatch => {
        dispatch(loadingSliderDataStarted());
        Axios
            .get(BASE_URL + '/slides')
            .then(res => dispatch(loadingSliderDataSucceed(res.data)))
            .catch(err => dispatch(loadingSliderDataFailured(err)));
    } 
}