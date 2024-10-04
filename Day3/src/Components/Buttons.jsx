import React from 'react'

const Buttons = (props) => {
    const{text, color} = props

    let styles = {
        backgroundColor:color
    }
  return (
    <button style={styles}>{text}</button>
  )
}

export default Buttons