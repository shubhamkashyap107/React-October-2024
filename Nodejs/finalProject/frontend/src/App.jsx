import React from 'react'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Home from './Components/Home'
import Form from './Components/Form'

const App = () => {
  return (
    <BrowserRouter>


<nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">MyBlog</a>
          </div>

          <div className="flex space-x-6">
            <Link to="/new" className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300">New Blog</Link>
            <Link to="/home" className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300">Home</Link>
          </div>
        </div>
      </div>
    </nav>



        <Routes>
          <Route path="/home" element={<Home />}  />
          <Route path="/" element={<Home />}  />
          <Route path="/new" element={<Form />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default App