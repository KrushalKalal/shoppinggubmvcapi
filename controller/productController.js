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
    let productTypeId = Number(req.params.productTypeId)
    let colorId = Number(req.query.colorId);
    let genderId = Number(req.query.genderId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let discountId = Number(req.query.discountId);
    let occasionId = Number(req.query.occasionId);
    if(productTypeId && colorId && genderId && lcost && hcost && discountId && occasionId){
        query = {
            "brands.brand_id":brandId,
            productType_id:productTypeId,
            "gender.gender_id":genderId,
            occasion_id:occasionId,
            "color.color_id":colorId,
            "discount.discount_id":discountId,
            $and:[{price:{$gt:lcost,$lt:hcost}}],
        }
    }
    else if(productTypeId){
        query = {
            "brands.brand_id":brandId,
            productType_id:productTypeId
        }
    }else if(genderId){
        query = {
            "brands.brand_id":brandId,
            "gender.gender_id":genderId
        }
    }else if(occasionId){
        query = {
            "brands.brand_id":brandId,
            occasion_id:occasionId
        }
    }else if(colorId){
        query = {
            "brands.brand_id":brandId,
            "color.color_id":colorId
        }
    } else if(discountId){
        query = {
            "brands.brand_id":brandId,
            "discount.discount_id":discountId
        }
    }else if(lcost && hcost){
        query = {
            "brands.brand_id":brandId,
            $and:[{price:{$gt:lcost,$lt:hcost}}]
           
        }
    
    }else{
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

