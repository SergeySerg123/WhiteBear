import Axios from "axios";
import { 
    loadingSliderDataStarted, 
    loadingSliderDataSucceed, 
    loadingSliderDataFailured 
} from "../store/actions/slider.action";

const baseUrl = "http://localhost:5000";

export function loadSlides() {
    return dispatch => {
        dispatch(loadingSliderDataStarted());
        Axios
            .get(baseUrl + '/slides')
            .then(res => dispatch(loadingSliderDataSucceed(res.data)))
            .catch(err => dispatch(loadingSliderDataFailured(err)));
    } 
}