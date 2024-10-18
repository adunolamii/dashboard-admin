const {default: mongoose} = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    intensity:{type: String, required: true},
    isCompleted:{type:Boolean, default:false}
},
{
    timestamp:true

})
const IntensityModel = mongoose.models.intensity || mongoose.model ("intensity", Schema);

export default IntensityModel;

