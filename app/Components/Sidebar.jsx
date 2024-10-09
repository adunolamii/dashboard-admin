import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../Assets/Assests'


const Sidebar = () => {
  return (
    <div >
     
       
        <div className=" w-48 sm: m-auto w-50 h-[100vh]  bg-gray-200">
          
        <Link
              href="/dashboard"
              className="mt-6 flex items-center font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Dashboard</p>
            </Link>

            <Link
              href="/intensity"
              className="mt-6 flex items-center font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Intensity</p>
            </Link>

            <Link
              href="/likelihood"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Likelihood</p>
            </Link>
            <Link
              href="/relevance"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Relevance</p>
            </Link>
            <Link
              href="/year"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Year</p>
            </Link>
            <Link
              href="/country"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Country</p>
            </Link>
            <Link
              href="/topics"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Topics</p>
            </Link>
            <Link
              href="/region"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Region</p>
            </Link>
            <Link
              href="/city"
              className=" mt-6 flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>City</p>
            </Link>

           
         </div>

         
      
     
    </div>
  )
}

export default Sidebar