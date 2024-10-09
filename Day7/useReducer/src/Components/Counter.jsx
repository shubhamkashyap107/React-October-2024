// import React, { useState } from 'react'

// const Counter = () => {
//     // let count = 0
//     const[count, setCount] = useState(0)
//   return (
//     <div>
//         <p>Count is {count}</p>

//         <div>
//             <button onClick={() => {
//                 // count = count + 1
//                 // console.log(count)



//                 setCount(count + 1)

//             }}>Increment</button>
//             <button onClick={() => {
//                 // count = 0 
//                 // console.log(count)


//                 setCount(0)
//             }}>Reset</button>
//             <button onClick={() => {
//                 // count = count - 1
//                 // console.log(count)

//                 setCount(count - 1)
//             }}>Decrement</button>
//         </div>
//     </div>
//   )
// }

// export default Counter



// import React, { useState } from 'react'

// const Counter = () => {
//     // let count = 0
//     const[count, setCount] = useState(0)

//     function incrementBtnHandler(){
//         setCount(count + 1)
//     }

//     function resetBtnHandler(){
//         setCount(0)
//     }

//     function decrementBtnHandler(){
//         setCount(count - 1)
//     }

//   return (
//     <div>
//         <p>Count is {count}</p>

//         <div>
//             <button onClick={incrementBtnHandler}>Increment</button>
//             <button onClick={resetBtnHandler}>Reset</button>
//             <button onClick={decrementBtnHandler}>Decrement</button>
//         </div>
//     </div>
//   )
// }

// export default Counter




import React, { useReducer } from 'react'

function reducerFunction(state, action)
{
    if(action.type == "increment")
    {
        return {count : state.count + 1}
    }
    else if(action.type == "decrement")
    {
        if(state.count == 0) return{ count : 0 }
        
        return {count : state.count - 1}
    }
    else
    {
        return {count : 0}
    }
}

const Counter = () => {

    const[state, dispatch] = useReducer(reducerFunction, {count : 0})

  return (
    <div>

        <p>Count is {state.count}</p>
        

        <div>
            <button onClick={() => {
                dispatch({type : "increment"})
            }}>Increment</button>
            <button onClick={() => {
                dispatch({type : "reset"})
            }}>Reset</button>
            <button onClick={() => {
                dispatch({type : "decrement"})
            }}>Decrement</button>
        </div>

    </div>
  )
}

export default Counter