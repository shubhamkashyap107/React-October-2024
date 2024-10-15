import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "./Navbar"


const Landing = () => {

    const navigate = useNavigate()

  return (
    <div>
        






        {/* <div>

            <div>
                <img src="https://www.tripsavvy.com/thmb/m1-v5KGTyZKcn2uFAQqNN0z98JA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-177043240-d6c9e9c074044652a88b0902cdd59807.jpg" alt="" />
                <h3>Food</h3>
            </div>
            <div>
                <img src="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg" alt="" />
                <h3>Restaurant</h3>
            </div>
            <div>
                <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min.jpg" alt="" />
                <h3>Grocery</h3>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Achtung.svg" alt="" />
                <h3>TBD</h3>
            </div>

        </div> */}
<div class="grid grid-cols-2 gap-4 md:grid-cols-4 p-4 mt-20">
   
  <div onClick={() => {
    navigate("/food")
  }} class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img src="https://www.tripsavvy.com/thmb/m1-v5KGTyZKcn2uFAQqNN0z98JA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-177043240-d6c9e9c074044652a88b0902cdd59807.jpg" alt="" class="w-full h-48 object-cover"/>
    <h3 class="text-center text-xl font-semibold py-2">Food</h3>
  </div>


  
  <div onClick={() => {
    navigate("/restaurants")
  }} class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img src="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1920,h_1080,c_limit/Prequel-lead.jpg" alt="" class="w-full h-48 object-cover" />
    <h3 class="text-center text-xl font-semibold py-2">Restaurant</h3>
  </div>
  
  <div onClick={() => {
    navigate("/grocery")
  }} class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img src="https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min.jpg" alt="" class="w-full h-48 object-cover" />
    <h3 class="text-center text-xl font-semibold py-2">Grocery</h3>
  </div>
  
  <div onClick={() => {
    navigate("/random")
  }} class="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
    <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Achtung.svg" alt="" class="w-full h-48 object-cover" />
    <h3 class="text-center text-xl font-semibold py-2">TBD</h3>
  </div>
</div>



    </div>
  )
}

export default Landing