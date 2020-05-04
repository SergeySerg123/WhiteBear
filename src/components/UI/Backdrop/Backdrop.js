import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
    const show = {
        visibility: 'visible',
        opacity: "0.7"
    }

    const hide = {
        visibility: 'hidden',
        opacity: "0"
    }

    return (
        <div className="backdrop" 
            style={props.isOpenedMenu || props.isOpenedCard ? show : hide}>

        </div>
    )
}

export default backdrop;