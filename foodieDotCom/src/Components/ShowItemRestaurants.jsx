import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from "react-redux"
import { CATEGORY_API, CATEGORY_API2 } from '../Utils/Constants'
import FoodItem from './FoodItem'

const ShowItemRestaurants = () => {

  const{query} = useParams()
  // console.log(query)
  const[data, setData] = useState([])
  // console.log(data)



useEffect(() => {
  const getData = async() => {
    const data = await fetch(CATEGORY_API + query + CATEGORY_API2)
    const json = await data.json()
    setData(json.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.slice(1))
    console.log(json.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards.slice(1))
    // console.log(json)
  }
  getData()
}, [])




  return (
    <div className=''>
      {data && data.map((item) => {
        // console.log(item)
        return <FoodItem data={item.card.card.info} />
      })}
    </div>
  )
}

export default ShowItemRestaurants