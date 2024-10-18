import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import YearModel from "@/Lib/models/year.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, year} = await request.json();
        await YearModel.create({ name, year })
        
        return NextResponse.json({msg:"year created"})
    }

    // GET REQ
    export async function GET(request){
        const YearModel = await YearModel.find({});
        return NextResponse.json({YearModel:YearModel})
    }