import React from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
// import Header from '@/app/_component/Header'

const DashboardLayout = ({children}) => {
  return (
    <div>
      <div>
        {/* <Header/> */}
      </div>
        <div className='fixed md:w-64 hidden bg-purple-500 md:block shadow-lg'>
        <SideNav/>
           
        </div >
        <div className='md:ml-64'>
            <DashboardHeader/>
            {children}</div>
        
        </div>
        
    
  )
}

export default DashboardLayout