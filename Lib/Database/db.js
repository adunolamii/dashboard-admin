import mongoose from "mongoose"


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://blackCoffer:blackCoffer@blackcoffer.3shzc.mongodb.net/blackCoffer?retryWrites=true&w=majority&appName=blackCoffer')
       console.log("DB connected");
            
}


// const connectDB = async ()=>{
//     try {
//         await mongoose.connect('mongodb+srv://blackCoffer:blackCoffer@blackcoffer.3shzc.mongodb.net/blackCoffer?retryWrites=true&w=majority&appName=blackCoffer')
//         console.log("DB connected");
        
//     } catch (error) {
//         console.log("ooopse error occured!", error);
        
//     }

// await mongoose.connect('mongodb+srv://dashboard:dashboard@dashboard.8t6dv.mongodb.net/dashboard?retryWrites=true&w=majority&appName=dashboard')
export default connectDB