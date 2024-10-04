import React, { useState } from 'react'

const Theme = () => {


    const[theme, setTheme] = useState("light")

    let styleObject = {
        backgroundColor : theme == "light" ? "lightgray" : "black",
        color : theme == "light" ? "black" : "white",
        height : "100vh"
    }

  return (

    <div style={styleObject} >

    {/* <button onClick={() =>{
        setTheme("light")
    }}>☀️</button>
    <button onClick={() => {
        setTheme("dark")
    }}>🌕</button> */}

    <button onClick={() => {
        if(theme == "light")
        {
            setTheme("dark")
        }
        else
        {
            setTheme("light")
        }
    }}>{theme == "light" ? "🌙" : "☀️"}</button>


    <h1>Current Theme : {theme}</h1>

    </div>
 

  )
}

export default Theme