import React from 'react'
import SideNav from './_components/SideNav'

const DashboardLayout = ({children}) => {
  return (
    <div>
        <div className='fixed md:w-64 hidden bg-red-700 md:block'>
        <SideNav/>
           
        </div >
        <div className='md:ml-64 bg-green-600'>{children}</div>
        
        </div>
        
    
  )
}

export default DashboardLayout