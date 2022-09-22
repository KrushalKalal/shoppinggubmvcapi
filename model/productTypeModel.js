const mongoose = require('mongoose');
const productTypeSchema = new mongoose.Schema({
    productType_id:Number,
    category_type:String,
})

mongoose.model('productType',productTypeSchema, 'productType');
module.exports = mongoose.model('productType')