const mongoose = require('mongoose');
const colorSchema = new mongoose.Schema({
    color_name:String,
    color_id:Number,
    
})

mongoose.model('color',colorSchema, 'color');
module.exports = mongoose.model('color')