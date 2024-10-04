
const MyComponent = (props) => {
    // console.log(gabbar.name)
    // console.log(gabbar.age)
    // console.log(gabbar.favColor)

    const{name, age, favColor} = props


  return (
    // <h1>{`Hi my name is ${name}, I am ${age} years old and my favourite color is ${favColor}`}</h1>
    <h1>Hi my name is {name} and my age is {age}</h1>

  )
}


export default MyComponent





export const MyComp = () => {
    return <h1>Hello from my comp</h1>
  }
  
  
  
  export const MyComp2 = () => {
    return <>2</>
  }
  
  export const MyComp3 = () => {
    return <>3</>
  }
  
  export const MyComp4 = () => {
    return <>4</>
  }
