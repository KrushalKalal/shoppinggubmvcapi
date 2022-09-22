const mongoose = require('mongoose');
const sizeSchema = new mongoose.Schema({
    size_id:Number,
    size_type:String,
})

mongoose.model('size',sizeSchema, 'size');
module.exports = mongoose.model('size')