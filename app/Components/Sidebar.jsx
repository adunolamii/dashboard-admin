import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { assets } from '../Assets/Assests'

const Sidebar = () => {
  return (
    <div className=' m-4 grid gap-4 md:grid-cols-12'>
        <div className=' bg-red-400 shadow sm:col-span-2 h-screen '>
        <div className=" w-28 sm:w-80 h-[100vh] relative border ">
          
          {/* <div className="w-[-40%] sm:w-[40%] absolute right-0 border-black"> */}
            <Link
              href="/adminComponents/intensity"
              className=" flex items-center border border-black  font-medium px-3 py-2  bg-white shadow-[-5px_5px_0px_#000000] w-40 "
            >
              <Image src={assets.intensity} alt=" " width={28} />
              <p>Intensity</p>
            </Link>
  
            <Link
             href="/adminComponents/relevance"
             className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] w-40" 
            > 
               <Image src={assets.relevance} alt=" " width={28} />
              <p>Relevance</p>
            </Link> 
            <Link
               href="/adminComponents/likelihood"
              className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]  w-40"  >
              <Image src={assets.likelihood} alt=" " width={28} /> 
              <p>Likelihood</p> 
             </Link> 
             <Link
               href="/adminComponents/city"
              className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]  w-40"  >
              <Image src={assets.city} alt=" " width={28} /> 
              <p>City</p> 
             </Link> 
             <Link
               href="/adminComponents/tpoics"
              className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]  w-40"  >
              <Image src={assets.topics} alt=" " width={28} /> 
              <p>Topics</p> 
             </Link> 
             <Link
               href="/adminComponents/year"
              className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]  w-40"  >
              <Image src={assets.year} alt=" " width={28} /> 
              <p>Year</p> 
             </Link> 
             <Link
               href="/adminComponents/region"
              className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]  w-40"  >
              <Image src={assets.region} alt=" " width={28} /> 
              <p>Region</p> 
             </Link> 
           {/* </div>  */}
         </div>

        </div>
        <div className=' bg-yellow-200 shadow sm:col-span-8 h-screen'>b</div>
        <div className=' bg-orange-500 shadow sm:col-span-2 h-screen'>c</div>

    </div>
  )
}

export default Sidebar