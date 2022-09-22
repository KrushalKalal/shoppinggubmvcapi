const mongoose = require('mongoose');
const occasionSchema = new mongoose.Schema({
    occasion_id:Number,
    occasion_type:String,
})

mongoose.model('occasion',occasionSchema, 'occasion');
module.exports = mongoose.model('occasion')



