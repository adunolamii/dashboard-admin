"use client"

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const CreateTopics = () => {
    const [emojiIcon, setEmojiIcon] = useState(" blush")
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false)
    const [name, setName] = useState()
    const [topic, setTopic] = useState()

    const onCreateTopic = ()=>{
      
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
                <div className=" mt-5">
                <Button onClick={()=>setOpenEmojiPicker(!openEmojiPicker)}
                 size="lg"
                 className= 'text-lg'
                 variant='outline' >{emojiIcon}</Button>
                </div>
                
                <div className=" absolute">
                    <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e)=>{
                        setEmojiIcon(e.emoji)
                        setOpenEmojiPicker(false)
                    }}
                    />
                </div>
                <div>
                  <div className=" mt-2">
                    <h2 className=" text-black font-medium">Topic Name</h2>
                    <Input placeholder='e.g BlackCoffer Details'
                    onChange={(e)=>setName(e.target.value)}
                    />
                  </div>

                  <div className=" mt-2">
                    <h2 className=" text-black font-medium">Topic Name</h2>
                    <Input placeholder='e.g BlackCoffer Tech Company'
                    onChange={(e)=>setTopic(e.target.value)}
                    type='text'
                    />
                  </div>
                  <Button
                  disable={!(name&&topic)}
                  onClick={()=>onCreateTopic}
                  className=" mt-5 w-full">Create Topic</Button>
                </div>
              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTopics;
