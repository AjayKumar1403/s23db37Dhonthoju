
const mongoose = require("mongoose")
const ringSchema = mongoose.Schema({
    ring_Material: String,
    ring_Weight: String,
    ring_Cost: Number
})
module.exports = mongoose.model("ring",ringSchema);