 "use client"

// import { UserButton } from '@clerk/nextjs'
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
                icon:"LayoutDashboard",
                path:"/dashboard"
            },
            {
                id: 2,
                name: 'Topics',
                icon:" CircleGauge",
                path:"/dashboard/topics"
            },

            {
                id: 3,
                name: 'Likelihood',
                icon:" MapPinned",
                path:"/dashboard/likelihood"
            },
            {
                id: 4,
                name: 'Relevance',
                icon:" Rocket",
                path:"/dashboard/relevance"
            },
            {
                id: 5,
                name: 'Year',
                icon:" CalendarDays",
                path:"/dashboard/year"
            },
            {
                id: 6,
                name: 'Country',
                icon:" PlaneTakeoff ",
                path:"/dashboard/country"
            },
            {
                id: 7,
                name: 'Intensity',
                icon:" Dice5",
                path:"/dashboard/intensity",
            },
            {
                id: 8,
                name: 'Region',
                icon:" MapPinCheckInside",
                path:"/dashboard/region",
            },
            {
                id: 9,
                name: 'City',
                icon:"  Radar",
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
                <h2 className={` hover:text-purple-700 hover:bg-black flex gap-2 text-gray-200 font-medium p-5 cursor-pointer rounded-md ${path==menu.path&& 'text-blue-600'}`}>
                
                    {/* {menu.icon} */}
                    {menu.name}
                </h2>
                </Link>
            ))
        }
    </div>
<div className='fixex bottom-10 p-5 flex gap-2 items-center'>
    {/* <UserButton/> */}
  
</div>



    </div>

    
  )
}

export default SideNav