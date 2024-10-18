const {default: mongoose} = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    relevance:{type: String, required: true},
    isCompleted:{type:Boolean, default:false}
},
{
    timestamp:true

})
const RelevanceModel = mongoose.models.relevance || mongoose.model ("relevance", Schema);

export default RelevanceModel;

