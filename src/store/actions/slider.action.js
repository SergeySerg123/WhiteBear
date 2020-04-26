export const LOADING_SLIDER_DATA_STARTED = 'LOADING_SLIDER_DATA_STARTED';
export const LOADING_SLIDER_DATA_SUCCEED = 'LOADING_SLIDER_DATA_SUCCEED';
export const LOADING_SLIDER_DATA_FAILURED = 'LOADING_SLIDER_DATA_FAILURED';

export const loadingSliderDataStarted = () => {
    return {
        type: LOADING_SLIDER_DATA_STARTED,
        payload: null
    }
}

export const loadingSliderDataSucceed = (slides) => {
    return {
        type: LOADING_SLIDER_DATA_SUCCEED,
        payload: slides
    }
}

export const loadingSliderDataFailured = (error) => {
    return {
        type: LOADING_SLIDER_DATA_FAILURED,
        payload: error
    }
}