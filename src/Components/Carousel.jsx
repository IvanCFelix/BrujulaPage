import React from 'react';
import { Row } from 'react-bootstrap';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import capitalClean from '../Assets/Carrousel/capital-clean-movil.png';
const CarouselSection = () => {
  return (
    <Carousel
      infiniteLoop={true}
      interval={5000}
      autoPlay={false}
      showThumbs={false}
    >
      <div>
        <h2 className='carousel-title '>Conoce nuestro trabajo</h2>
        <img src={`${capitalClean}`} />
      </div>
      <div>
        <img src={`${capitalClean}`} />
      </div>
      <div>
        <img src={`${capitalClean}`} />
      </div>
      <div>
        <img src={`${capitalClean}`} />
      </div>
    </Carousel>
  );
};

export default CarouselSection;
