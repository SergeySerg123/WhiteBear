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
import Counter from "../../Counter/Counter";
import Bottle from "../Bottle/Bottle";
import './ProductItem.scss';
import Sckelet from "../../UI/Sckelet/Sckelet";

const ProductItemEmpty = () => (
  <Card className="product-item-card">
    <div className="img-area grey-background "></div>
    <CardBody>
      <CardTitle>
          <Sckelet w="50" />
      </CardTitle>
      <CardText>
        <CardText><Sckelet w="100" /></CardText>
        <Sckelet w="100" />
      </CardText>
      <div className="d-flex justify-content-between">
        <Sckelet w="100" />
      </div>
    </CardBody>
  </Card>
);

export default ProductItemEmpty;
