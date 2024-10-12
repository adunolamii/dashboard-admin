 "use client"

import { UserButton } from '@clerk/nextjs'
import { icons, Dice5, LayoutDashboard, CircleGauge, Rocket, CalendarDays, PlaneTakeoff,  Radar, MapPinned   } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useEffect } from 'react'

const SideNav = () => {
        const menuList =[
            {
                id: 1,
                name: 'Dashboard',
                icons:"LayoutDashboard",
                path:"/dashboard"
            },
            {
                id: 2,
                name: 'Topics',
                icons:" CircleGauge",
                path:"/dashboard/topics"
            },

            {
                id: 3,
                name: 'Likelihood',
                icons:" MapPinned"
            },
            {
                id: 4,
                name: 'Relevance',
                icons:" Rocket"
            },
            {
                id: 5,
                name: 'Year',
                icons:" CalendarDays",
                path:"/dashboard/year"
            },
            {
                id: 6,
                name: 'Country',
                icons:" PlaneTakeoff ",
                path:"/dashboard/country"
            },
            {
                id: 7,
                name: 'Intensity',
                icons:" Dice5",
                path:"/dashboard/intensity",
            },
            {
                id: 8,
                name: 'Region',
                icons:" MapPinCheckInside",
                path:"/dashboard/region",
            },
            {
                id: 9,
                name: 'City',
                icons:"  Radar",
                path:"/dashboard/city"
            },
            {
                id: 10,
                name: 'ADD',
                icons:"  Radar",
                path:"/dashboard/city"
            },
            
        ]

        const path = usePathname();
        useEffect(() => {
            console.log(path);
            
        
        }, [path])
        

  return (
    <div className='h-screen p-5 border shadow-sm'>
    <Image src={"/logo.svg"} alt='logo' width={50} height={30}/>
    
    <div className=' mt-5'>
        {
            menuList.map((menu, index)=>(
                <Link href={menu}>
                <h2 className={` hover:text-green-700 hover:bg-black flex gap-2 text-gray-200 font-medium p-5 cursor-pointer rounded-md ${path==menu.path&& 'text-blue-600'}`}>
                
                    {menu.icon}
                    {menu.name}
                </h2>
                </Link>
            ))
        }
    </div>
<div className='fixex bottom-10 p-5 flex gap-2 items-center'>
    <UserButton/>
    Profile
</div>



    </div>

    
  )
}

export default SideNav