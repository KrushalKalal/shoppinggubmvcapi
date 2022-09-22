const mongoose = require('mongoose');
const productTypeSchema = new mongoose.Schema({
    productCategory_id:Number,
    category_type:String,
    productType_id:Number
})

mongoose.model('productCategory',productTypeSchema, 'productCategory');
module.exports = mongoose.model('productCategory')