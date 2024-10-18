import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import IntensityModel from "@/Lib/models/intensity.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, intensity} = await request.json();
        await IntensityModel.create({ name, intensity })
        
        return NextResponse.json({msg:"intensity created"})
    }

    // GET REQ
    export async function GET(request){
        const IntensityModel = await IntensityModel.find({});
        return NextResponse.json({IntensityModel:IntensityModel})
    }