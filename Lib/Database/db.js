import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://dashboard:dashboard@dashboard.8t6dv.mongodb.net/dashboard?retryWrites=true&w=majority&appName=dashboard')
        console.log("DB connected");
        
    } catch (error) {
        console.log("ooopse error occured!", error);
        
    }
}

export default connectDB