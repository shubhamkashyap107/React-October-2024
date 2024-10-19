import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { SWIGGY_HOME_API } from '../Utils/Constants'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';
import RestaurantsList from './RestaurantsList';
import SkeletonOrShimmer from './SkeletonOrShimmer';


const Food = () => {

  const[data, setData] = useState([])
  const[images, setImages] = useState([])

  useEffect(() => {
    const getData = async() => {

      const data2 = await fetch(SWIGGY_HOME_API)
      const json = await data2.json()
   
      setData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setImages(json.data.cards[0].card.card.gridElements.infoWithStyle.info)

      
    }
    
    
    getData()
    
  }, [])

  return data.length ? (
    <div>

    <ImageSlider data={images} />

    <RestaurantsList data={data} />
      
    </div>
  ) : (
   <SkeletonOrShimmer />
  )
}

export default Food