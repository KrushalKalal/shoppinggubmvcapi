const mongoose = require('mongoose');
const brandSchema = new mongoose.Schema({
    brand_id:Number,
    brand_name:String,
})

mongoose.model('brand',brandSchema, 'brand');
module.exports = mongoose.model('brand')


