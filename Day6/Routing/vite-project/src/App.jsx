import React from 'react'
import{ BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CompA from './Components/CompA'
import CompB from './Components/CompB'
import CompC from './Components/CompC'
import CompD from "./Components/CompD"
import Home from "./Components/Home"



const App = () => {
  return (

    <>
    <h1>Hello</h1>
      <BrowserRouter>
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#333', padding: '10px 20px', color: 'white' }}>
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>MyLogo</div>
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
      {/* <li><a href="/compa" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompA</a></li>
      <li><a href="/compb" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompB</a></li>
      <li><a href="/compc" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompC</a></li>
      <li><a href="/compd" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompD</a></li> */}
      <li><Link to="/compa" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompA</Link></li>
      <li><Link to="/compb" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompB</Link></li>
      <li><Link to="/compc" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompC</Link></li>
      <li><Link to="/compd" style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }}>CompD</Link></li>
    </ul>
    <button style={{ padding: '10px 20px', backgroundColor: '#f04', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>Sign Up</button>
  </nav>


    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/compa' element={<CompA />} />
        <Route path='/compb' element={<CompB />} />
        <Route path='/compc' element={<CompC />} />
        <Route path='/compd' element={<CompD />} />
      </Routes>
    </div>
</BrowserRouter>
    </>
  )
}

export default App