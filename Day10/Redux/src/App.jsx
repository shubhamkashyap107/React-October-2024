import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Comp1 from './Components/Comp1'
import{ useDispatch } from "react-redux"
import { addUser } from './Utils/userSlice'

const App = () => {

  const[user, setUser] = useState("")
  const dispatch = useDispatch()

  return (
    <div>

      <div>
        <input onChange={(e) => {
          setUser(e.target.value)
        }} value={user} type="text" placeholder='Enter your name' />
       <button onClick={() => {
        dispatch(addUser(user))
        setUser("")
       }}>Add Name</button>
      </div>

      <Comp1 />
    </div>
  )
}

export default App