const {default: mongoose} = require("mongoose")

const Schema = new mongoose.Schema({
    name:{type: String, required: true},
    year:{type: String, required: true},
    isCompleted:{type:Boolean, default:false}
},
{
    timestamp:true

})
const YearModel = mongoose.models.year || mongoose.model ("year", Schema);

export default YearModel;

