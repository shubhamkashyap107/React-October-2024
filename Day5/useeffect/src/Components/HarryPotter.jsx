import React, { useEffect, useState } from 'react'
import { API } from '../Constants'
import Cards from './Cards'


const HarryPotter = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {


        const getData = async() => {
            const rawData = await fetch(API)
            const json = await rawData.json()
            // console.log(json)
            setCharData(json)
            setFilteredArray(json)
        }

        getData()

    },[])

    const [charData, setCharData] = useState([])
    const[searchValue, setSearchValue] = useState("")
   const[filteredArray, setFilteredArray] = useState(charData)


  return (
    <>

<div className="w-full bg-blue-400 p-4 flex justify-center items-center">
    <input 
        onChange={(e) => {
            // console.log(e.target.value)
            setSearchValue(e.target.value)
            const arr = charData.filter((item) => {
                console.log(searchValue)
                return item.name.toLowerCase().includes(e.target.value.toLowerCase())
            })

            console.log(arr)

            setFilteredArray(arr)
          
        }}
        value={searchValue}
        type="text" 
        placeholder="Search..." 
        className="px-4 py-2 rounded-lg w-1/2 border-2 border-blue-500 focus:outline-none focus:border-blue-700"
    />
</div>

{/* 
    <div>
        <h1>{count}</h1>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>
    </div> */}


        {/* <h1>Harry Potter</h1> */}
    <div className='grid grid-cols-4 w-fit mx-auto'>
        {
            filteredArray.map((item) => {
                const{name, image} = item
                return <Cards image={image ? image : "data:image/jpeg;base64,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"} name={name} />
            })
        }
    </div>
        </>
  )
}

export default HarryPotter