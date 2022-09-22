const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Size = require('../model/sizeModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/sizeList',(req,res) => {
    
    Size.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;