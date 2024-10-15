import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Food from "./Components/Food"
import Grocery from "./Components/Grocery"
import Random from "./Components/Random"
import Restaurants from "./Components/Restaurants"
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='' element={<Landing />} />
        <Route path='/food' element={<Food />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='/random' element={<Random />} />
        <Route path='/restaurants' element={<Restaurants />} />
      </Routes>
    </div>
  )
}

export default App