// import { Component } from "react";

// class ClassComp extends Component {

//     constructor(props)
//     {
//         super(props)

//         this.state = {
//             count : 0
//         }
//     }

//     handleIncrement = () => {
//         this.setState({count : this.state.count + 1})
//     }


//     componentDidMount(){
//         console.log("Class based component mounted / rendered")
//     }


//     componentDidUpdate(prevProps, prevState){
//         if(prevState.count != this.state.count)
//         {
//             console.log("Component Updated")
//         }
//     }

//      componentWillUnmount(){
//         console.log("Component unmounted")
//      }

//     render(){
//         return (
//             <>
//                 <h1>Count : {this.state.count}</h1>
//                 <button onClick={this.handleIncrement}>Increment</button>
//             </>
//         )
//     }
// }

// export default ClassComp



import React, { useEffect, useState } from 'react'

const ClassComp = () => {
    const[count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component Mounted")



        return () => {
            console.log("Component Unmounted")
        }

    }, [count])


  return (
    <>
            <h1>Count : {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
    </>
  )
}

export default ClassComp