const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProductCategory = require('../model/productCategoryModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/productCategories',(req,res) => {
    
    ProductCategory.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;