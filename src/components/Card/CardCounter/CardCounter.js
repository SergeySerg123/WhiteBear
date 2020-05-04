import React from "react";
import "./CardCounter.scss";

const CardCounter = (props) => {
  const isVisible = props.itemsInCard > 0 ? "visible" : "hidden";
  return (
    <div className="card-counter d-inline-block" style={{visibility: isVisible}}>
      <div className="d-flex justify-content-center aligth-items-center">
        <div>{props.itemsInCard}</div>
      </div>
    </div>
  );
};

export default CardCounter;
