import React, { useState } from 'react'
import { CLOUDINARY_URL } from '../Utils/Constants'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../Utils/cart'


const FoodItem = ({data}) => {
    // console.log(data)
    const { name, price, imageId, description, defaultPrice } = data
    const dispatch = useDispatch()
    const[count, setCount] = useState(0)


    return (
        <div className='flex border w-6/12 p-4 mx-auto mt-2 bg-white shadow-lg rounded-md'>
            <div className='w-1/3'>
                {imageId ? <img className='w-full h-auto object-cover rounded-md' src={CLOUDINARY_URL + imageId} alt={name} /> : <img className='w-full h-[200px] object-cover rounded-md' src={"https://images.ctfassets.net/ihx0a8chifpc/GTlzd4xkx4LmWsG1Kw1BB/ad1834111245e6ee1da4372f1eb5876c/placeholder.com-1280x720.png?w=1920&q=60&fm=webp"} alt={name} />}


                {/* <img className='w-full h-auto object-cover rounded-md' src={CLOUDINARY_URL + imageId} alt={name} /> */}
            </div>
            <div className='w-2/3 px-4'>
                <h3 className='text-xl font-semibold mb-2'>{name}</h3>
                <p className='text-lg text-gray-700 mb-2'>${((price || defaultPrice) / 100).toFixed(2)}</p>
                <p className='text-gray-600'>{description}</p>
            </div>

            <div className='flex items-center justify-center space-x-4 ml-auto'>
                <button onClick={() => {
                    setCount(count + 1)
                    dispatch(addItem({ name, price, imageId, description, defaultPrice }))
                }} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>
                    +
                </button>
                <span>
                   {count}
                </span>
                <button onClick={() => {
                    if(count > 0)
                    {
                        setCount(count - 1)
                    }
                    dispatch(removeItem({description}))
                }} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200'>
                    -
                </button>
                
            </div>
        </div>
    )
}

export default FoodItem
