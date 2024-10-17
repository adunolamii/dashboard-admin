const { NextResponse } = require("next/server");
import { connectDB } from "@/lib/config/db";
import TopicModel from "@/Lib/models/topic.models";


// TESTING DB CONNECTION
// export async function GET(request){
//   console.log("Topic posted");
//   return NextResponse.json({msg: "working"})
// }
// STORE DATA in DB
const loadDB = async()=>{
    await connectDB()
  }
  loadDB()


// POST REQ
// export async function POST(request){
  
//         const{name, topic} = await request.json();
//         await TopicModel.create({
//             name,
//             topic })
        
//         return NextResponse.json({msg:"Topic created"})
//     }



// export async function POST(request){
//     const formData = await request.formData();
//     const form = {
//         name: `${formData.get('name')}`,
//         topic: `${formData.get('topic')}`,

//     }
//     await TopicModel.create(form)
//     return NextResponse.json({success: true, msg: "Email Subscribed"})
// }
