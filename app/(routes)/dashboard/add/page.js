'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const page = () => {

    const [data, setData] = useState({
        end_year:"",
       
       })

       const onChangeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value;
        setData(data=>({...data, [name]: value}))
        console.log(data);
        
     }
     const onSubmitHandler = async (e)=>{
        e.preventDefault()
  
        const formData = new FormData();
        formData.append('title', data.title);

        const response = await axios.post('/api/dashboard', formData) 
        // if(response.data.success){
        //  toast.success(response.data.msg)
        console.log(response);
        
        
         // TO RESET AFTER POSTING
         setImage(false)
         setData({
           end_year:"",
          
         })
     }
    //  else{
    //    toast.error("error")
    //  }
     
    //   }
     

  return (
    <div>addpage
        <form  onSubmit={onSubmitHandler}  className=' mt-8'>
            <input name='end_year' onChange={onChangeHandler} value={data.end_year} className=' border-4 w-full h-12 text-2xl' placeholder='end_year'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='intensity'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='sector'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='topic'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='insight'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='region'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='start_year'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='impact'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='added'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='published'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='country'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='relevance'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='pestle'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='source'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='title'/>
            <input className=' border-4 w-full h-12 text-2xl' placeholder='liklihood'/>
            <button className='bg-purple-500 w-full text-2xl text-white mt-4'>Add</button>
        </form>


    </div>
  )
}

export default page