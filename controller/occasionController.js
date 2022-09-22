const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Occasion = require('../model/occasionModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/occasionList',(req,res) => {
    
    Occasion.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;