import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='flex bg-blue-200 justify-between p-3 items-center'>
    <div>
        <img src="https://fooddotcom.in/assets/img/logo.png" className='w-12' alt="" />
    </div>


    <div className='flex gap-5'>   
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/search"}>Search</Link>
    </div>


    <div>
        🛒
    </div>
</div>
  )
}

export default Navbar