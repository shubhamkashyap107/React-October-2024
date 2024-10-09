import React, {useContext} from 'react'
import { nameContext } from '../App'
import { newContext } from './Comp2'

const CompN = () => {

  const {name, name2} = useContext(nameContext)
  const exampke = useContext(newContext)

  return name.length? (
    <h1>Hello, my name is {name + name2 + exampke}</h1>
  ) : ""
}

export default CompN