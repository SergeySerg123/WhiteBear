import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Slider.css';
import SliderContent from './SliderContent/SliderContent';
import {connect} from 'react-redux';
import {loadSlides} from '../../../services/slider';
import SliderPaginator from './SliderPaginator/SliderPaginator';

class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            currentSlide: 1
        }
    }

    componentDidMount() {
        this.props.onLoad();
        this.enableSlidePlayer();
    }

    prevSlide() {
        const totalSlides = this.props.slides.length;
        if (this.state.currentSlide === 1) {
            this.setState( {currentSlide: totalSlides} );
        } else {
            this.setState( {currentSlide: this.state.currentSlide - 1} );
        }      
    }

    nextSlide() {
        const totalSlides = this.props.slides.length;
        if (this.state.currentSlide < totalSlides) {
            this.setState( {currentSlide: this.state.currentSlide + 1} );
        } else {
            this.setState( {currentSlide: 1} )
        }
    }

    changeSlide(num) {
        this.setState({ currentSlide: num });
    }

    enableSlidePlayer() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    render() {
        return (
          <Container>
            <Row>
              <Col xs="12" className="slider-area">
                <div onClick={() => this.prevSlide()} className="slider-btn prev-btn">PREV &rarr;</div>
                <div onClick={() => this.nextSlide()} className="slider-btn next-btn">NEXT &rarr;</div>
                {
                    this.props.slides.map((slide, i) => (
                        <SliderContent 
                            key={i}
                            id={i}
                            title={slide.title}
                            description={slide.description}
                            image={slide.image}
                            currentSlide={this.state.currentSlide}
                             />
                    ))
                }   
                <SliderPaginator 
                    changeSlide={(num) => this.changeSlide(num)}
                    currentSlide={this.state.currentSlide}
                    totalItems={this.props.slides.length} />            
              </Col>
            </Row>
          </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        slides: state.slider.slides     
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => dispatch(loadSlides())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);