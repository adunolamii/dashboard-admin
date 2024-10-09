import React from 'react'
import { assets } from '../Assets/Assests'
import Image from 'next/image'

const Headers = () => {
  return (
    <div>
        <div className=' grid mt-3 sm: grid-cols-3'>
            <h1 className=' text-blue-600 font-bold p-3'>AdminDashboard</h1>
            <input className=' border-2 text-2xl rounded-md' type="text" placeholder='Search' />
            <div className=' flex justify-end mr-5'>
           
            <Image className='mt-2 rounded' src={assets.pic} width={25} height={25} alt=''/>
            <Image className='mt-2 rounded-full' src={assets.notification} width={30} height={20} alt=''/>
            <Image className='mt-2 rounded-full' src={assets.msg} width={25} height={25} alt=''/>
           
            </div>
            
     </div>
        
    </div>
  )
}

export default Headers