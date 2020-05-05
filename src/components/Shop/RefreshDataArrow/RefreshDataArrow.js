import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { Col } from "reactstrap";
import "./RefreshDataArrow.scss";

class RefreshDataArrow extends React.Component {
  constructor() {
    super();
    this.styles = "refresh-icon";
  }

  initLoading = () => {
    return this.styles + " refresh-icon-loading";
  };

  interruptLoading = () => {
    return this.styles;
  };

  render() {
    return (
      <Col xs="12" className="d-flex justify-content-center mt-2 mb-5">
        {!this.props.isFull && (
          <FontAwesomeIcon
            className={
              this.props.loading ? this.initLoading() : this.interruptLoading()
            }
            icon={faSync}
            size="3x"
          />
        )}
      </Col>
    );
  }
}

export default RefreshDataArrow;
