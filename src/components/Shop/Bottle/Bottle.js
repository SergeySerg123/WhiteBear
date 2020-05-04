import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineBottle } from "@fortawesome/free-solid-svg-icons";
import './Bottle.scss';

const Bottle = () => (
  <div className="bottle-container">
    <FontAwesomeIcon size="2x" icon={faWineBottle} />
  </div>
);

export default Bottle;
