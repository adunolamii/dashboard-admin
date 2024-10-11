import { UserButton } from '@clerk/nextjs'
import { icons, Dice5, LayoutDashboard, CircleGauge, Rocket, CalendarDays, PlaneTakeoff,  Radar, MapPinned   } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
        const menuList =[
            {
                id: 1,
                name: 'Dashboard',
                icons:"LayoutDashboard"
            },
            {
                id: 1,
                name: 'Intensity',
                icons:" CircleGauge"
            },

            {
                id: 2,
                name: 'Likelihood',
                icons:" MapPinned"
            },
            {
                id: 3,
                name: 'Relevance',
                icons:" Rocket"
            },
            {
                id: 4,
                name: 'Year',
                icons:" CalendarDays"
            },
            {
                id: 5,
                name: 'Country',
                icons:" PlaneTakeoff "
            },
            {
                id: 6,
                name: 'Topics',
                icons:" Dice5"
            },
            {
                id: 7,
                name: 'Region',
                icons:" MapPinCheckInside"
            },
            {
                id: 8,
                name: 'City',
                icons:"  Radar"
            },
            
        ]


  return (
    <div className='h-screen p-5 border shadow-sm'>
    <Image src={"/logo.svg"} alt='logo' width={50} height={30}/>
    
    <div className=' mt-5'>
        {
            menuList.map((menu, index)=>(
                <h2 className=' hover:text-green-700 hover:bg-black flex gap-2 text-gray-200 font-medium p-5 cursor-pointer rounded-md'>
                    {menu.icon}
                    {menu.name}
                </h2>
            ))
        }
    </div>
<div>
    <UserButton/>
    Profile
</div>



    </div>

    
  )
}

export default SideNav