import { useState } from "react"

export const Counter = () => {
    //let count = 0 // react cant track the changes for variables made using var, let  & const


    const[count, setCount] = useState(0)


    return (
        <div style={{border : "1px solid black", width : "200px", height : "300px", padding : "10px", margin : "auto", marginTop : "100px"}}>
            <div style={{height : "100px", border : "1px solid black", fontSize : "70px", padding : "10px", textAlign : "right"}}>
                {count}
            </div>
            <div style={{border : "1px solid black", height : "170px", display : "flex", alignItems:"center", justifyContent : "space-evenly"}}>
                <button onClick={() => {
                    // count++
                    // console.log(count)
                    setCount(count + 1)

                }} style={{height : "50px", width : "50px", borderRadius : "50%"}}>+</button>
                <button onClick={() => {
                    // count = 0
                    // console.log(count)


                    setCount(0)

                }} style={{height : "50px", width : "50px", borderRadius : "50%"}}>Reset</button>
                <button onClick={() => {
                    // count--
                    // console.log(count)
                    if(count == 0) return

                    setCount(count - 1)
                }} style={{height : "50px", width : "50px", borderRadius : "50%"}}>-</button>
            </div>
        </div>
    )
}