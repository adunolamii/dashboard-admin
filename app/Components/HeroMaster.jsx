import React from 'react'
import Sidebar from './Sidebar'
import Top from './Top'
// import Dashboard from "../dashboard/page"
import Likelihood from '../likelihood/page'


const HeroMaster = () => {
  return (
    <div  className=' m-8 grid gap-4 md:grid-cols-12 bg-teal-500'>
        <div className='shadow sm:col-span-2 h-screen bg-gray-900'>

        <Sidebar/>
        </div>
       
        <div className='shadow sm:col-span-7 h-screen bg-yellow-500'>
            <Top/>
            {/* <Dashboard/> */}
            <Likelihood/>
            
        </div>
        
        
        <div className='shadow sm:col-span-3 h-screen bg-yellow-900'>side2
            
        </div>
    </div>
  )
}

export default HeroMaster