import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { webImages } from '../Assets/Carrousel';
import '../Components/Carousel.css';
const CarouselSection = () => {
  return (
    <Carousel
      infiniteLoop={true}
      interval={3000}
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      centerMode={true}
    >
      <div>
        <h2 className='carousel-title '>Conoce nuestro trabajo</h2>
        <img className='img' alt='' src={`${webImages.pioneros}`} />
      </div>
      <div>
        <img alt='' src={`${webImages.farmacia}`} />
      </div>
      <div>
        <img alt='' src={`${webImages.hipotecarios}`} />
      </div>
      <div>
        <img alt='' src={`${webImages.laguapa}`} />
      </div>
      <div>
        <img alt='' src={`${webImages.llantired}`} />
      </div>
      <div>
        <img alt='' src={`${webImages.manhatan}`} />
      </div>
    </Carousel>
  );
};

export default CarouselSection;
