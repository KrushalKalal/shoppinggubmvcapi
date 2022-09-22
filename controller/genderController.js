const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Gender = require('../model/genderModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/genderList',(req,res) => {
    
    Gender.find({},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


module.exports = router;


