import React, { useState } from 'react'

const Calculator = () => {


    const[value, setValue] = useState("0")
    function HandleClick(e){



        let innerTxt = e.target.innerText

        if(value == 0)
        {
            setValue(innerTxt)
            return 
        }
        setValue(value + innerTxt)
    }

    function CalculateFunction(){
        let ans = eval(value).toFixed(4)
        // console.log(typeof(ans))
        setValue(String(ans))
    }

    function HandleBackspace(){

        if(value.length == 1)
        {
            setValue("0")
        }
        
        let newVal = value.slice(0, -1)
        setValue(newVal)
    }

  return (
    <div className='border border-black w-fit mx-auto mt-[100px] rounded-lg bg-slate-100 p-2'>
        <div className='border w-[300px] h-[50px] text-right p-2 text-2xl bg-white'>
            {value}
        </div>
        <div className='grid grid-cols-4 max-w-fit gap-8 p-2'>
            <button onClick={() => {
                setValue(0)
            }} className='border h-12 w-12 rounded-[50%] bg-white'>C</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>**</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>%</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>/</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>7</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>8</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>9</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>*</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>4</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>5</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>6</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>-</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>1</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>2</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>3</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>+</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%]  bg-white'>0</button>
            <button onClick={HandleBackspace} className='border h-12 w-12 rounded-[50%] bg-white'>⬅️</button>
            <button onClick={HandleClick} className='border h-12 w-12 rounded-[50%] bg-white'>.</button>
            <button onClick={CalculateFunction} className='border h-12 w-12 rounded-[50%] bg-white'>=</button>
        </div>
    </div>
  )
}

export default Calculator