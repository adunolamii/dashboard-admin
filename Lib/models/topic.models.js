import mongoose from "mongoose";



const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    topic:{type: String, required: true},
    
})

const TopicModel = mongoose.models.topic ||  mongoose.model ("topic", Schema)

export default TopicModel;