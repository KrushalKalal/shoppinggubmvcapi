const mongoose = require('mongoose');
const imageCollectionSchema = new mongoose.Schema({
    collection_id:Number,
    img:String,
    collectionCategory_id:Number,
    brand_id:Number,
    discount_id:Number,


})

mongoose.model('imageCollection',imageCollectionSchema, 'imageCollection');
module.exports = mongoose.model('imageCollection')

