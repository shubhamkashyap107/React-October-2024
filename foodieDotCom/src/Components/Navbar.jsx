import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
  // Mocking the cart items count for now
  const cartArray = useSelector(store => store.cart)
  const navigate = useNavigate()


  let num = 0;

  for(let item of cartArray)
  {
    num += item.quantity
  }


  return (
    <div className='flex bg-blue-200 justify-between p-3 items-center'>
      <div>
        <img src="https://fooddotcom.in/assets/img/logo.png" className='w-12' alt="Logo" />
      </div>

      <div className='flex gap-5'>   
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/search"}>Search</Link>
      </div>

      <div onClick={() => {
        navigate("/cart")
      }} className='relative'>
        🛒
        {cartArray.length > 0 && (
          <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2'>
            {num}
          </span>
        )}
      </div>
    </div>
  )
}

export default Navbar
