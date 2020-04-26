import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './LeftMenu.css';

const openStyle = 'is-opened';
const closeStyle = 'is-closed';

const leftMenu = (props) => {
    function navbarToggle() {
        props.navbarToggle();
    }

    return (
        <div className={props.isOpenedMenu ? "left-menu " +  openStyle : "left-menu " + closeStyle}>
            <div className="text-right text-white mt-2 mr-3">
                <FontAwesomeIcon
                    onClick={navbarToggle} 
                    className="cursor-pointer"
                    size="2x" icon={faTimes} />
            </div>               
        </div>
    )
}

export default leftMenu;