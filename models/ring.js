
const mongoose = require("mongoose")
const ringSchema = mongoose.Schema({
    ring_Material: String,
    ring_Weight: String,
    ring_Cost:{
        type: Number,
        min: 0,
        max: 1000
    } 
})
module.exports = mongoose.model("ring",ringSchema);