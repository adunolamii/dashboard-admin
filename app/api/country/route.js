import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import CountryModel from "@/Lib/models/country.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, country} = await request.json();
        await CountryModel.create({ name, country })
        
        return NextResponse.json({msg:"country created"})
    }

    // GET REQ
    export async function GET(request){
        const CountryModel = await CountryModel.find({});
        return NextResponse.json({CountryModel:CountryModel})
    }