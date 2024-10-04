import React from 'react'

const Card = ({name, imgUrl, price}) => {
  return (
    <div id='card'>
        <img id='img' src={imgUrl} />

        <h3>{name}</h3>
        <p>${price}</p>
    </div>
  )
}

export default Card