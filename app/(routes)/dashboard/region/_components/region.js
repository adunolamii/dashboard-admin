'use client'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const region = () => {
    const [formData, setFormData] = useState({
        name:'',
        region:'',
      })
      const onChangeInput =(e)=>{
        const name= e.target.name;
        const value =e.target.value;
        setFormData(form =>({...form, [name]: value}))
        console.log(formData)
      }

      const onSubmit =async(e)=>{
        e.preventDefault()
        // API CODEEEEE
        try {
          const response = await axios.post('/api/region', formData)
    
          toast.success(response.data.msg)
          setFormData({
            name:'',
            region:'',
          })
             
        } catch (error) {
          
    
          toast.error('error occur')
        }}
   
  return (
    <div>region
         <ToastContainer theme="dark"/>
  <form onSubmit={onSubmit}>
    <input onChange={onChangeInput} name="name" value={formData.name} className=" text-xl border-2 h-12 border-purple-400 rounded-sm mb-4 w-full" type="text" placeholder="Enter Title"/>
    <textarea onChange={onChangeInput} name='region' value={formData.region} className="text-xl border-2 h-12 border-purple-400 rounded-sm mt-4 w-full"  placeholder="Enter discription"/>
    <button className=" w-full bg-purple-400 font-semibold h-14 mt-4 hover:bg-black m-auto text-white rounded-lg text-2xl">CLICK TO ADD</button>
  </form>
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="text-xl px-6 py-3 shadow-md">
                    ID
                </th>
                <th scope="col" className="text-xl px-6 py-3 shadow-md">
                    TITLE
                </th>
                <th scope="col" className="text-xl px-6 py-3 shadow-md">
                    DESCRIPTION
                </th>
               
            </tr>
        </thead>
        <tbody>
     
   
       
        </tbody>
    </table>


    </div>
   
  )
}

export default region