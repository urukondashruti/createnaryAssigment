import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "./index.css";

const MyCarousel = (props) => {
    const {img} = props
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block carouselimg"
                    src={img}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselimg"
                    src={img}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carouselimg"
                    src={img}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MyCarousel;
