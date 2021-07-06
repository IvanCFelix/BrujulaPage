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
      centerSlidePercentage={80}
      emulateTouch={true}
    >
      <div>
        <img className='img' alt='' src={`${webImages.pioneros}`} />
      </div>
      <div>
        <img className='img' alt='' src={`${webImages.farmacia}`} />
      </div>
      <div>
        <img className='img' alt='' src={`${webImages.hipotecarios}`} />
      </div>
      <div>
        <img className='img' alt='' src={`${webImages.laguapa}`} />
      </div>
      <div>
        <img className='img' alt='' src={`${webImages.llantired}`} />
      </div>
      <div>
        <img className='img' alt='' src={`${webImages.manhatan}`} />
      </div>
    </Carousel>
  );
};

export default CarouselSection;
