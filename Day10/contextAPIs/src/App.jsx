import React, { createContext, useEffect, useState } from 'react'
import Comp1 from './Components/Comp1'

export const userContext = createContext()

const App = () => {

  const[user, setUser] = useState("")
  console.log(user)

  useEffect(() => {
    const getUser = async() => {
      const data = await fetch("https://randomuser.me/api/")
      const json = await data.json()
      console.log(json)

      setUser(json.results[0].name)
    }

    getUser()
  }, [])

  return (
    <userContext.Provider value={user} >

    <div>
      <Comp1 />
    </div>
    
    </userContext.Provider>
  )
}

export default App