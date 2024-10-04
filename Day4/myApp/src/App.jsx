// import React from 'react'

// const App = () => {


//   function h1ClickHandler(){
//     console.log("CLicked on h1 tag...")
//   }
//   return (
//     <div>
//       <h1 onClick={h1ClickHandler}>Hello jiiiiiii</h1>


//       <h1 onClick={() => {
//         console.log("Second h1 tag clicked...")
//       }}>Hello again</h1>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { Counter } from './Components/Counter'
import Form from './Components/Form'
import Theme from './Components/Theme'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Form /> */}
      <Theme />
    </div>
  )
}

export default App