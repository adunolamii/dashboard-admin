const {default: mongoose} = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    city:{type: String, required: true},
    isCompleted:{type:Boolean, default:false}
},
{
    timestamp:true

})
const CityModel = mongoose.models.city || mongoose.model ("city", Schema);

export default CityModel;

