"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";

const Relevance = () => {
  const [formData, setFormData] = useState({
    name: "",
    relevance: "",
  });
  const onChangeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // API CODEEEEE
    try {
      const response = await axios.post("/api/relevance", formData);

      toast.success(response.data.msg);
      setFormData({
        name: "",
        relevance: "",
      });
     
    } catch (error) {
      toast.error("error occur");
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="grid w-full gap-2 mt-4">
          <Textarea
            onChange={onChangeInput}
            name="name"
            value={formData.name}
            placeholder="Type your message here."
          />
          <Textarea onChange={onChangeInput}
            name="relevance"
            value={formData.relevance} placeholder="Type your message here." />
          <button className=" w-full bg-purple-400 font-semibold h-14 mt-4 hover:bg-black m-auto text-white rounded-lg text-2xl">
            CLICK TO ADD
          </button>

          {/* <Button>CLICK HERE TO ADD</Button> */}
        </div>
      </form>
    </div>
  );
};

export default Relevance;
