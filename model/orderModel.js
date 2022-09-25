const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    order_id:Number,
    name:String,
    email:String,
    phone:Number,
    cost:Number,
    status:String,
    bank_name:String,
    date:String,
    productItem:String,
})

mongoose.model('orders',orderSchema, 'orders');
module.exports = mongoose.model('orders')



