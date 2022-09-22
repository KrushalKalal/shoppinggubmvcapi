const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Product = require('../model/productModel');


router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());



router.get('/productList',(req,res) => {
    
    let query = {}
    let brandId = Number(req.query.brandId);
    let discountId = Number(req.query.discountId);
    let productCategoryId = Number(req.query.productCategoryId);
    let genderId = Number(req.query.genderId);
     if(brandId){
         query = {"brands.brand_id":brandId}
    }
    else if(genderId){
        query = {"gender.gender_id":genderId}
    }
    else if(discountId){
        query = {"discount.discount_id":discountId}
    }
    else if(productCategoryId){
        query = {productCategory_id:productCategoryId}
    }
    else{
         query = {}
     }
     Product.find(query,{},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/filter/:brandId',(req,res) => {
    
    let query = {}
    let brandId = Number(req.params.brandId);
    let sizeId = Number(req.query.sizeId);
    let genderId = Number(req.query.genderId);
    let occasionId = Number(req.query.occasionId);
    if(sizeId && genderId && occasionId){
        query = {
            "brands.brand_id":brandId,
            size_id:sizeId,
            occasion_Id:occasionId,
            gender_id:genderId
        }
    }
    else if(sizeId){
        query = {
            "brands.brand_id":brandId,
             size_id:sizeId
        }
    }else if(genderId){
        query = {
            "brands.brand_id":brandId,
            gender_id:genderId
        }
    }else if(occasionId){
        query = {
            "brands.brand_id":brandId,
            occasion_Id:occasionId
        }
    } else{
        query = {
            "brands.brand_id":brandId,
        }
    }
     Product.find(query,{},(err,data) => {
        if(err) throw err;
        res.send(data)
    })
})


router.get('/details/:id',(req,res)=>{
        let id = Number(req.params.id);
        Product.find({product_id:id},(err,data) => {
            if(err) throw err;
            res.send(data)
        })
    
 })

 router.post('/productItem',(req,res) => {
         if(Array.isArray(req.body.id)){
          Product.find({product_id:{$in:req.body.id}},(err,data) => {
                if(err) throw err;
                res.send(data)
            })
        }else{
            res.send("Invalid input");  
         }
 })
   
module.exports = router;

