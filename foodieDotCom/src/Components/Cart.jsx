import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CLOUDINARY_URL } from '../Utils/Constants'
import { addItem, emptyCart, removeItem } from '../Utils/cart'


const Cart = () => {

  const cartData = useSelector(store => store.cart)
  const dispatch = useDispatch()
  const [orderPlaced, setOrderPlaced] = useState(false)

  let total = 0

  for(let item of cartData)
  {
    total += item.quantity * (item.defaultPrice || item.price / 100)
  }


  return cartData.length ? (
    <div className="container mx-auto mt-10 p-4">
      {cartData.map((item) => {
        const{name, defaultPrice, imageId, description, price} = item
        return (
          <div key={item.id} className="flex  mx-auto w-[70%] items-center p-4 mb-4 bg-white rounded-lg shadow-lg border border-gray-200">
            <img 
              src={CLOUDINARY_URL + item.imageId} 
              alt={item.name} 
              className="w-24 h-24 object-cover rounded-md" 
            />
            <div className="flex-grow flex justify-between ml-4">
              <div className="text-left">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-gray-500">₹{item.defaultPrice / 100}</p>
                <p className="text-sm text-gray-600 mt-2 w-[90%]">{item.description}</p>
              </div>
              <div className='flex items-center justify-center space-x-4 ml-auto'>
                <button onClick={() => {
                    dispatch(addItem({ name, price, imageId, description, defaultPrice }))
                }} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200'>
                    +
                </button>
        
                <button onClick={() => {
                    dispatch(removeItem({description}))
                }} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200'>
                    -
                </button>
                
            </div>
              <div className="text-right min-w-[30%] flex items-center m-6">
                <p className="font-semibold">
                  {item.defaultPrice / 100} X {item.quantity} = ₹{(item.quantity * item.defaultPrice) / 100}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      <Bill setter={setOrderPlaced} total={total} />
    </div>
  ) : (
    // <Empty />
    orderPlaced ? <PlaceOrder /> : <Empty />
  )
}

export default Cart

function Empty() {
  return (
    <div className="container mx-auto text-center mt-20">
      <h1 className="text-2xl font-bold text-gray-600">Your cart is Empty, go add some items, duh...</h1>
    </div>
  )
}


function Bill({ total, setter }) {

  const dispatch = useDispatch()

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <p className="text-2xl font-semibold text-gray-700 mb-4">
        Total: ₹{total / 100}
      </p>
      <button onClick={() => {
        setter(true)
        dispatch(emptyCart())
      }} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out">
        Checkout
      </button>
    </div>
  )
}

function PlaceOrder() {
  const [showGraffiti, setShowGraffiti] = useState(false)

  // Trigger graffiti after component mounts
  useEffect(() => {
    setTimeout(() => {
      setShowGraffiti(true)
    }, 300); // Delay graffiti appearance slightly
  }, [])

  return (
    <div className="relative container mx-auto text-center mt-20 p-10 overflow-hidden">
      {/* Graffiti on the left */}
      <div
        style={{ top: '20%', left: '-150px', transform: showGraffiti ? 'translateX(0)' : 'translateX(-100%)' }}
        className="absolute text-5xl font-bold text-pink-600 transition-transform duration-700 ease-out"
      >
        ✨✨✨✨✨✨✨✨✨✨✨
      </div>

      {/* Graffiti on the right */}
      <div
        style={{ top: '20%', right: '-150px', transform: showGraffiti ? 'translateX(0)' : 'translateX(100%)' }}
        className="absolute text-5xl font-bold text-blue-600 transition-transform duration-700 ease-out"
      >
        ✨✨✨✨✨✨✨✨✨✨✨

      </div>

      <div className="relative z-10">
        {/* Heading with scale animation */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">
          Order Placed!
        </h1>
        {/* Subheading with fade-in animation */}
        <p className="text-xl text-gray-700 mt-4 animate-fade">
          Your delicious meal is being prepared and will be with you in an hour...
        </p>
      </div>
    </div>
  )
}
