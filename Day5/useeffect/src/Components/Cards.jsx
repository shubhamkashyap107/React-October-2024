import React from 'react'

const Cards = ({name, image}) => {
  return (
    <div className="border w-[200px] flex flex-col items-center p-2 m-4">
        <img className='w-[80%] rounded-lg' src={image} />
        <h3>{name}</h3>
    </div>
  )
}

export default Cards