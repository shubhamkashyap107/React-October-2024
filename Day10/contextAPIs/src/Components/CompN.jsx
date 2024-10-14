import React, {useContext, useSelector} from 'react'
import { userContext } from '../App'

const CompN = ({}) => {

    const userData = useContext(userContext)
    const{first, last} = userData
    
  return (
    <div>
        Hello my name is {first + " " + last}
    </div>
  )
}

export default CompN