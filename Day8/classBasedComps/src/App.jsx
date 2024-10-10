// import React, { useState } from 'react'
// import ClassComp from './Components/ClassComp'

// const App = () => {

//   const[showComp, setShowComp] = useState(true)

//   return (
//     <div>
//       {showComp && <ClassComp />}
//       <button onClick={() => {
//         setShowComp(!showComp)
//       }}>Toggle</button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import ClassComp from './Components/ClassComp'
import Random from "./Components/Random"
import Home from "./Components/Home"
import ErrorComponent from './Components/Error'

const App = () => {
  return (
    <BrowserRouter>

    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <Link to="/class" style={{ textDecoration: "none", color: "blue", fontSize: "18px", padding: "10px", border: "1px solid blue", borderRadius: "5px" }}>
        Class Based Comp
      </Link>
      <Link to="/random" style={{ textDecoration: "none", color: "blue", fontSize: "18px", padding: "10px", border: "1px solid blue", borderRadius: "5px" }}>
        Random
      </Link>
    </div>


      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/class' element={<ClassComp/>} />
        <Route path='/random' element={<Random/>} />
        <Route path='/*' element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App