import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import CityModel from "@/Lib/models/city.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, city} = await request.json();
        await CityModel.create({ name, city })
        
        return NextResponse.json({msg:"city created"})
    }

    // GET REQ
    export async function GET(request){
        const admintodos = await CityModel.find({});
        return NextResponse.json({CityModel:CityModel})
    }