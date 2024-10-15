import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { SWIGGY_HOME_API } from '../Utils/Constants'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';


const Food = () => {

  const[data, setData] = useState([])
  const[images, setImages] = useState([])

  useEffect(() => {
    const getData = async() => {

      const data = await fetch(SWIGGY_HOME_API)
      const json = await data.json()
      // console.log(json.data.cards)
      setImages(json.data.cards[0].card.card.gridElements.infoWithStyle.info)
      setData(json)
      
    }
    
    
    getData()
    
  }, [])

  return (
    <div>

    <ImageSlider data={images} />
      
    </div>
  )
}

export default Food