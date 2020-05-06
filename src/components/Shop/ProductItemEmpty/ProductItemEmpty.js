import React from "react";
import {
  Card
} from "reactstrap";
import Sckelet from "../../UI/Sckelet/Sckelet";
import ContentLoader from "react-content-loader";

const ProductItemEmpty = () => (
  <Card className="product-item-card">
    <ContentLoader height="550">
      <rect x="0" y="0" rx="5" ry="5" height="320" width="100%"/>
      <rect x="0" y="340"  height="24" width="40%"/>
      <rect x="0" y="384"  height="20" width="100%"/>
      <rect x="0" y="410"  height="20" width="100%"/>
      <rect x="0" y="445"  height="14" width="100%"/>
    </ContentLoader>   
  </Card>
);

export default ProductItemEmpty;
