const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Color = require('../model/colorModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/colorList',(req,res) => {
    
    Color.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;