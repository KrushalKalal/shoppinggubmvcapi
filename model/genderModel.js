const mongoose = require('mongoose');
const genderSchema = new mongoose.Schema({
    gender_id:Number,
    gender_type:String,
})

mongoose.model('gender',genderSchema, 'gender');
module.exports = mongoose.model('gender')