import React from 'react'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

const NavigationBar = () => {

  return (
    <div className='bg--500 flex justify-center gap-4 text-2xl font-extrabold '>
      <div>
        <Link href="/">
        <h1>Home</h1>
        </Link>
      </div>

       <div>
        <Link href="/about">
        <h1>about</h1>
        </Link>
      </div>

      <div>
        <Link href="/contact">
        <h1>contact</h1>
        </Link>
      </div>

      <div className='md:hidden'>
        <button>
          <FaBars size={30} className='bg-red-600'/>

        </button>
        </div>  
    </div>
    
  )
}

export default NavigationBar
