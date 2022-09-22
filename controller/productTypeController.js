const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const ProductType = require('../model/productTypeModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/productTypeList',(req,res) => {
    
    ProductType.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;