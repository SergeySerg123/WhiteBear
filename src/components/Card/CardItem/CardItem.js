import React from "react";
import "./CardItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Counter from "../../Counter/Counter";

const cardItem = (props) => {
  const img = require("../../../assets/pics/Music-item.png");
  const id = props.id;
  return (
    <div className="card-item-content ml-5">
      <div className="image-item">
        <span className="card-delete-item-btn">
          <FontAwesomeIcon
            onClick={() => props.deleteProductFromCard(id)}
            icon={faTimes}
            className="cursor-pointer"
          />
        </span>
        <img src={img} />
      </div>
      <div className="description-item-area">
        <div className="item-title">
          <div>
            Пиво "{props.title}" {props.color} {props.type} {props.density}
          </div>
          <Counter />
        </div>
        <div className="price-area">{props.price} грн.</div>
      </div>
    </div>
  );
};

export default cardItem;
