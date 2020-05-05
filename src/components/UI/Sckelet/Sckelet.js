import React from 'react';
import './Sckelet.scss';

const Sckelet = (props) => (
    <div className="card-sckelet" style={{width: props.w + '%'}}></div>
);

export default Sckelet;