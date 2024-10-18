import { NextResponse } from "next/server";
import { connectDB } from "@/Lib/Database/db";
import RelevanceModel from "@/Lib/models/relevance.models";

const loadDB = async()=>{
    await connectDB();
  }
  loadDB();


// POST REQ
export async function POST(request){
  
        const{name, relevance} = await request.json();
        await RelevanceModel.create({ name, relevance })
        
        return NextResponse.json({msg:"relevance created"})
    }

    // GET REQ
    export async function GET(request){
        const RelevanceModel = await RelevanceModel.find({});
        return NextResponse.json({RelevanceModel:RelevanceModel})
    }