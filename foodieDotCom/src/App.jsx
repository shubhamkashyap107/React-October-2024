import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Food from "./Components/Food"
import Grocery from "./Components/Grocery"
import Random from "./Components/Random"
import Restaurants from "./Components/Restaurants"
import Navbar from './Components/Navbar'
import ShowItemRestaurants from './Components/ShowItemRestaurants'
import {Provider} from "react-redux"
import store from './Utils/store'
import ResMenu from './Components/ResMenu'
import Cart from "./Components/Cart"


const App = () => {
  return (
    <Provider store={store}>

    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='' element={<Landing />} />
        <Route path='/food' element={<Food />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='/random' element={<Random />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/showitems/:query' element={<ShowItemRestaurants />} />
        <Route path='/menu/:id' element={<ResMenu />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </Provider>
  )
}

export default App