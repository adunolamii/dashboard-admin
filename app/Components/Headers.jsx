import React from 'react'
import { assets } from '../Assets/Assests'
import Image from 'next/image'

const Headers = () => {
  return (
    <div>
        <div className=' grid mt-3 sm: grid-cols-3 bg-green-300 gap-4'>
            <h1 className=' text-blue-600 font-bold p-3'>AdminDashboard</h1>
            <input className=' border-2 border-r-8 text-2xl' type="text" placeholder='Search' />
            <Image className='mt-2 rounded-full' src={assets.pic} width={20} height={20} alt=''/>

        </div>
        
    </div>
  )
}

export default Headers