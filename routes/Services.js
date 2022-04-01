const express = require("express");

const router=express.Router();

const {Services, Categories}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");


router.post("/",validateToken, async(req,res)=>{
    // const staff=req.body; 
const {service_name,service_type,service_cost,service_hours,BusinessId,CategoryId}=req.body;

Services.create({
    service_name:service_name,
    service_type:service_type,
    service_cost:service_cost,
    service_hours:service_hours,
    BusinessId:req.user.id,
    CategoryId:CategoryId,
   
  });
  res.json("Service created Successfully");

});

router.post("/category",validateToken, async(req, res)=>{
  const post = req.body;
  post.BusinessId=req.user.id;
  await Categories.create(post);
  res.json(post);
});

router.get("/", validateToken,async (req, res,next) => {
  const myServicesList = await Services.findAll({where:{BusinessId:req.user.id}});
  res.json(myServicesList);
});
router.get("/categories", validateToken,async (req, res,next) => {
  const myCategoryList = await Categories.findAll({where:{BusinessId:req.user.id}});
  res.json(myCategoryList);
});


module.exports=router;


