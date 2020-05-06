import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ProductItem.scss";
import Counter from "../../Counter/Counter";
import Bottle from "../Bottle/Bottle";

const productItem = (props) => {
  // const img = require("../../../assets/pics/" + props.image);
  return (
    <Card className="product-item-card">
      <CardImg
        top
        className="card-img"
        width="100%"
        className="grey-background"
        // src={img}
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>

        <CardText>{props.description}</CardText>
        <CardText>
          <span className="raiting">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon className="raiting-negative" icon={faStar} />
            <FontAwesomeIcon className="raiting-negative" icon={faStar} />

            <span className="price-color">{props.price} грн. за кг</span>
          </span>
        </CardText>
        <div className="d-flex justify-content-between">
          <Counter />
          <Bottle />
          <Button
            onClick={() => props.addToCard(props.productId)}
            size="sm"
            color="primary"
            className="color-btn"
          >
            У кошик
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default productItem;
