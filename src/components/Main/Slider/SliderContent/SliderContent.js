import React from "react";
import BeerSliderImage from '../BeerSliderImage/BeerSliderImage';
import { Row, Col } from 'reactstrap';
import './SliderContent.css';

class SliderContent extends React.Component {

  isCurrentSlide() {
    let {currentSlide, id} = this.props;
    let slideId = id + 1;
    return currentSlide === slideId; 
  }

  render() {
    return (
      <Row className={this.isCurrentSlide() ? "slide-body show-content" : "slide-body hide-content"}>
        <Col xs="6" className="d-flex align-items-center pl-5">
          <div className="text-white">
            <h1>{this.props.title}</h1>
            <div>{this.props.description}</div>
          </div>
        </Col>
        <Col
          xs="6"
          className="d-flex align-items-center justify-content-center pr-5"
        >
          <BeerSliderImage image={this.props.image} />
        </Col>
      </Row>
    );
  }
}

export default SliderContent;
