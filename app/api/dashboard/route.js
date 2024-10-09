import connectDB from "@/Lib/Database/db";
import { NextResponse } from "next/server";
import DataModel from "@/Lib/models/datas.models";


// TESTING DB CONNECTION
// export async function GET(request){
//   console.log("dashboard hitted");
//   return NextResponse.json({msg: "working"})
// }

// STORE DATA in DB
const loadDB = async()=>{
  await connectDB()
}
loadDB()

// POST REQ

const dashboardData = {
  end_year: `${formData.get('end_year')}`,
  intensity:`${formData.get('intensity')}`,
  sector: `${formData.get('sector')}`,
  topic: `${formData.get('topic')}`,
  insight: `${formData.get('insight')}`,
  region: `${formData.get('region')}`,
  start_year: `${formData.get('start_year')}`,
  impact: `${formData.get('impact')}`,
  added: `${formData.get('added')}`,
  published: `${formData.get('published')}`,
  country: `${formData.get('country')}`,
  relevance: `${formData.get('relevance')}`,
  pestle: `${formData.get('pestle')}`,
  source: `${formData.get('source')}`,
  title: `${formData.get('title')}`,
  likelihood: `${formData.get('likelihood')}`,
  
}
await DataModel.create(dashboardData);
console.log("datas saved");
return NextResponse.json({success:true, msg:"datas added"})

// APIS ENDPOINT TO GET ALL REQUEST
export async function GET (request){
  const datas = await DataModel.find({})
  return NextResponse.json({datas})
}


// DELETE REQ
export async function DELETE(request){
  const id = await request.nextUrl.searchParams.get("id")
  await DataModel.findByIdAndDelete(id)
  return NextResponse.json({success: true, msg: "Data Deleted"})
}