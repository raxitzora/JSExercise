"use client"
import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div>
        <div>
            <h1 className='text-2xl flex justify-center mt-5 font-bold'>Counter:{counter}</h1>
        </div>
        <div>
            <button className='bg-red-400 flex justify-center'
            onClick={()=>setCounter(counter+1)}>Increase</button>

            <button className='bg-red-400 flex justify-center'
            onClick={()=>setCounter(counter-1)}>Decrease</button>
        </div>
      
    </div>
  )
}

export default Counter
