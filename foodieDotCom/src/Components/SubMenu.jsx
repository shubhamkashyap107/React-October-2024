import React, { useState } from 'react'
import FoodItem from './FoodItem'

const SubMenu = ({arr, title}) => {
    // console.log(arr)
    const[show, setShow] = useState(false)
  return (
    <div className=' flex flex-col items-center '>
    <div onClick={() => {
      setShow(!show)
    }} className='border justify-between w-6/12 mt-5 font-bold h-14 flex items-center px-4'>{title}<span>{show ? "⬆️" : "⬇️"}</span></div>
      
        {show && arr && arr.map((item) => {
            return <FoodItem data={item.card.info} />
        })}

        
    </div>
  )
}

export default SubMenu