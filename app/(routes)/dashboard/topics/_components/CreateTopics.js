"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import EmojiPicker, { Emoji } from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { DialogClose } from "@/components/ui/dialog";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "@/app/_component/Header";

const CreateTopics = () => {
  // const [emojiIcon, setEmojiIcon] = useState(" blush");
  // const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  
  const [postTopics, setPostTopics] = useState()
  const [formData, setFormData] = useState({
    name:'',
    topic:'',
  })
  const onChangeInput =(e)=>{
    const name= e.target.name;
    const value =e.target.value;
    setFormData(form =>({...form, [name]: value}))
    console.log(formData)

    
  }


  const onCreateTopic =async(e)=>{
    e.preventDefault()
    console.log(data);

    try {
      const response = await axios.post('/topics', formData)

      toast.success(response.data.msg)
      setFormData({
        name:'',
        topic:'',
      })
       setPostTopics()

    } catch (error) {
      console.log("error has happpened",  error);
      
    }
  }
 
    return (
    <div>
     
      <Dialog>
        
        <DialogTrigger asChild>
          <div className=" bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
            <h2 className="text-3xl">+</h2>
            <h2>Create new Topic</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new Topics</DialogTitle>
            <DialogDescription>
              {/* <div className=" mt-5">
                <Button
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  size="lg"
                  className="text-lg"
                  variant="outline"
                >
                  {emojiIcon}
                </Button>
              </div>

              <div className=" absolute">
                <EmojiPicker
                  open={openEmojiPicker}
                  onEmojiClick={(e) => {
                    setEmojiIcon(e.emoji);
                    setOpenEmojiPicker(false);
                  }}
                />
              </div> */}
              <div>
              <ToastContainer theme="dark"/>
                <div className=" mt-2">
                  <h2 className=" text-black font-medium"> Name</h2>
                  <Input
                    placeholder="e.g BlackCoffer Details"
                    onChange={onChangeInput} name="name"
                    value={formData.name}
                   
                    
                  />
                </div>

                <div className=" mt-2">
                  <h2 className=" text-black font-medium">Topic</h2>
                  <Input
                    placeholder="e.g BlackCoffer Tech Company"
                    onChange={onChangeInput} name="topic"
                    value={formData.title}
                    type="text"
                    
                    
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                // disable={!(name && topic)}
                onClick={() => onCreateTopic}
                className=" mt-5 w-full"
              >
                Create Topic
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

  {/* FETCH INCOMING DATAS HERE */}
  
  <div className=" bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
  
            <h2 className="text-3xl">+</h2>
            <h2>Create new Topic</h2>
          </div>
      </div>
   
  );
};

export default CreateTopics;
