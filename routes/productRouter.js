
const express = require("express");

const router=express.Router();

const {Products}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");


router.post("/",async(req,res)=>{
    // const staff=req.body; 
// const {service_name,service_type,service_cost,BusinessId}=req.body;

Services.create({
    image: req.file.path,
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
   
  });
  res.json("Service created Successfully");

});




module.exports=router;