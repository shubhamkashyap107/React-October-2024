import React from 'react'
import { useSelector } from 'react-redux'

const CompN = ({}) => {

  const userData = useSelector(store => store.user)
  console.log(userData)
  return (
    <div>
      {userData && userData.map((item) => {
        return <p>{item}</p>
      })}
    </div>
  )
}

export default CompN