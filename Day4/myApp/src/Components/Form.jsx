import React, { useState } from 'react'

const Form = () => {

    // let username = ""
    // let password = ""


    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")


  return (
    <div>


        <div>
            <label htmlFor="username">Username</label>
            <input onChange={(e) => {
                setUsername(e.target.value)
            }} value={username} className="" type="text" name="" id="username" />
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input onChange={(e) => {
                setPassword(e.target.value)
            }} value={password} className="" type="text" name="pw" id="password" /> 
        </div>


    </div>
  )
}

export default Form