import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CLOUDINARY_URL } from '../Utils/Constants';

const ImageSlider = ({data}) => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite loop sliding
    speed: 500,  // Transition speed in ms
    slidesToShow: 6,  // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll at once
    autoplay: true,  // Automatically scroll through slides
    autoplaySpeed: 2000,  // Speed for autoplay (2 seconds)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        {data && data.map((item) => {
            return (<div>
                <img src={CLOUDINARY_URL + item.imageId} alt="Slide 1" />
              </div>)
        })}
      
      </Slider>
    </div>
  );
};

export default ImageSlider;
