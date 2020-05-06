import React from "react";
import { Card, Col } from "reactstrap";
import ContentLoader from "react-content-loader";

const ProductItemEmpty = (props) => {
  const max = 8;
  const product = (
    <Col xs="3">
    <Card className="product-item-card">
      <ContentLoader height="550">
        <rect x="0" y="0" rx="5" ry="5" height="320" width="100%" />
        <rect x="0" y="340" height="24" width="40%" />
        <rect x="0" y="384" height="20" width="100%" />
        <rect x="0" y="410" height="20" width="100%" />
        <rect x="0" y="445" height="14" width="100%" />
      </ContentLoader>
    </Card>
  </Col>
  );

  function moreThenMax(num) {return num > max ? max : num;}

  function initArr (num) {
    let arr = [];
    for (let i = 1; i <= moreThenMax(num); i++) {
      arr.push(i);
    } 
    return arr;
  }

  return (initArr(props.items).map(i => (product)));
}
  


export default ProductItemEmpty;
