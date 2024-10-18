import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import RegionModel from "@/Lib/models/region.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, region} = await request.json();
        await RegionModel.create({ name, region })
        
        return NextResponse.json({msg:"region created"})
    }

    // GET REQ
    export async function GET(request){
        const RegionModel = await RegionModel.find({});
        return NextResponse.json({RegionModel:RegionModel})
    }