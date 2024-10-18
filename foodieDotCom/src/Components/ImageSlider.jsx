import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CLOUDINARY_URL } from '../Utils/Constants';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"



const ImageSlider = ({data}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Infinite loop sliding
    speed: 500,  // Transition speed in ms
    slidesToShow: 6,  // Number of slides to show at once
    slidesToScroll: 3,  // Number of slides to scroll at once
    autoplay: true,  // Automatically scroll through slides
    autoplaySpeed: 2000,  // Speed for autoplay (2 seconds)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        {data && data.map((item) => {
          let temp = item.description.split(" ")
          // console.log(temp)
          if(temp.length == 2)
          {
            return 
          }
          // console.log(item)
            return (<div key={item.id}>
                <img onClick={() => {
                  navigate(`/showitems/${item.description}`)
                }} src={CLOUDINARY_URL + item.imageId} alt="Slide 1" />
              </div>)
        })}
      
      </Slider>
    </div>
  );
};

export default ImageSlider;
