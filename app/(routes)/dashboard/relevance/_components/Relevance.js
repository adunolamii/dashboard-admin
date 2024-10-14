'use client'
// import Header from '@/app/_component/Header'
import React from 'react'

import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Textarea } from "@/components/ui/textarea"

 




const Relevance = () => {
 
  return (
    <div>
       {/* <Header/> */}
        <form>
       <div className="grid w-full gap-2 mt-4">
      <Textarea placeholder="Type your message here." />
      <Textarea placeholder="Type your message here." />
      <button className=" w-full bg-purple-400 font-semibold h-14 mt-4 hover:bg-black m-auto text-white rounded-lg text-2xl">CLICK TO ADD</button>

      {/* <Button>CLICK HERE TO ADD</Button> */}
  
    </div>

    </form>

  
    </div>
  )
}

export default Relevance