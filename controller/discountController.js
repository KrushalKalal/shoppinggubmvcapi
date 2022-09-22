const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Discount = require('../model/discountModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/discountList',(req,res) => {
    
    Discount.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;