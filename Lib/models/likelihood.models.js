const {default: mongoose} = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    likelihood:{type: String, required: true},
    isCompleted:{type:Boolean, default:false}
},
{
    timestamp:true

})
const LikelihoodModel = mongoose.models.likelihood || mongoose.model ("likelihood", Schema);

export default LikelihoodModel;

