const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Brand = require('../model/brandModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/brandList',(req,res) => {
    
    Brand.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;
