import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connected");
        
    } catch (error) {
        console.log("ooopse error occured", error);
        
    }
}

export default connectDB