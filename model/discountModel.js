const mongoose = require('mongoose');
const discountSchema = new mongoose.Schema({
    discount_id:Number,
    type:String,
})

mongoose.model('discount',discountSchema, 'discount');
module.exports = mongoose.model('discount')