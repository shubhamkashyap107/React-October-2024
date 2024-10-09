import React, {createContext} from 'react'
import Comp3 from "./Comp3"


export const newContext = createContext()

const Comp2 = () => {
    let exampke = "hehe"

  return (
      <newContext.Provider value={exampke}>

    <div>
        <Comp3  />
    </div>
      
      </newContext.Provider>
  )
}

export default Comp2