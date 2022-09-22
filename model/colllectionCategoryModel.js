const mongoose = require('mongoose');
const collectionCategorySchema = new mongoose.Schema({
    collectionCategory_id:Number,
    collection_type:String,
})

mongoose.model('collectionCategory',collectionCategorySchema, 'collectionCategory');
module.exports = mongoose.model('collectionCategory')