import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const inputRef = useRef("ksdhflasdh")



  useEffect(() => {
    const getData = async() => {
      const data = await fetch(API + inputRef.current.value)
    }
  }, [])

  return (
    <div>
      
      <input type="text" ref={inputRef}   />
      <button onClick={() => {
        console.log(inputRef)
      }}>Click Me</button>

    </div>
  )
}

export default App