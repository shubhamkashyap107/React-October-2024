import React, {useState, createContext} from 'react'
import Comp1 from './Components/Comp1'

export const nameContext = createContext()

const App = () => {


  const[name, setName] = useState("")
  const[name2, setName2] = useState("hjsdbfkjsdhbf")

  return (
    <nameContext.Provider value={{name, name2}}>

    <div>
      <input type="text" onChange={(e) => {
        setName(e.target.value)
      }} value={name} />



      <Comp1  />
    </div>
    </nameContext.Provider>
  )
}

export default App