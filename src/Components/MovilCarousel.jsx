import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { movilImages } from '../Assets/Carrousel';

const CarouselSection = () => {
  return (
    <Carousel
      infiniteLoop={true}
      interval={3000}
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <h2 className='carousel-title '>Conoce nuestro trabajo</h2>
        <img alt='' src={`${movilImages.capitalClean}`} />
      </div>
      <div>
        <img alt='' src={`${movilImages.farmacia}`} />
      </div>
      <div>
        <img alt='' src={`${movilImages.hipotecarios}`} />
      </div>
      <div>
        <img alt='' src={`${movilImages.laguapa}`} />
      </div>
      <div>
        <img alt='' src={`${movilImages.llantired}`} />
      </div>
      <div>
        <img alt='' src={`${movilImages.manhatan}`} />
      </div>
    </Carousel>
  );
};

export default CarouselSection;
