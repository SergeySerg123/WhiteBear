import React from 'react';

const beerSliderImage = (props) => {
    function importImg() {
        return require('../../../../assets/pics/' + props.image);
    }

    return (
        <img className="slider-image" alt="" src={importImg()} />
    )
}
    

export default beerSliderImage;