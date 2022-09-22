const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    product_id:Number,
    img:String,
    decription:String,
    price:Number,
    brands:Array,
    size:Array,
    color:Array,
    gender:Array,
    discount:Array,
    productCategory_id:Number,
    productType_id:Number,
    occasion_id:Number,
    about:String
})

mongoose.model('products',productSchema, 'products');
module.exports = mongoose.model('products')

