import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import LikelihoodModel from "@/Lib/models/likelihood.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, likelihood} = await request.json();
        await LikelihoodModel.create({ name, likelihood })
        
        return NextResponse.json({msg:"Likelihood created"})
    }

    // GET REQ
    export async function GET(request){
        const LikelihoodModel = await LikelihoodModel.find({});
        return NextResponse.json({LikelihoodModel:LikelihoodModel})
    }