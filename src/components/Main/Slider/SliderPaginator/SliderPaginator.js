import React from 'react';
import './SliderPaginator.css';

const sliderPaginator = (props) => {
    function changeSlide(num) {
        props.changeSlide(num);
    }

    function generateItems() {
        let slideNums = [];
        for(let i = 1; i <= props.totalItems; i++) {
            slideNums.push(i);
        }
        return (
            <ul>
                {slideNums.map((num, i) => {
                    return (
                        <li 
                            key={i} 
                            onClick={() => changeSlide(num)} 
                            className={props.currentSlide === num ? "active" : ""}
                            >{num}</li>
                    )
                })}
            </ul>
        )    
    }

    return (
        <div className="slider-paginator">
            {generateItems()}
        </div>
    )
}

export default sliderPaginator;