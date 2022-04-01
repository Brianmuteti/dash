const express = require("express");

const router=express.Router();

const {Customers}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





// router.post("/",async(req,res)=>{
//     // const staff=req.body; 
// const {name,phone_no,email,BusinessId}=req.body;

// Customers.create({
//     name:name,
//     phone_no:phone_no,
//     email:email,
//     BusinessId:BusinessId,
   
//   });
//   res.json("Customer created Successfully");

// });


router.post("/", async (req, res) => {
  const post = req.body;
  // post.username = req.user.username;
  // post.UserId=req.user.id;
  await Customers.create(post);
  res.json({code:1, message:"success"});
});

router.get("/", validateToken,async (req, res,next) => {
  const myCustomersList = await Customers.findAll();
  const topCustomer = await Customers.findOne();
  // console.log(myCustomersList);

  res.json({topCustomer:topCustomer,myCustomersList:myCustomersList});
});

router.get("/:id", validateToken,async (req, res) => {
  const id = req.params.id;
  const myCustomersList = await Customers.findAll();
  const topCustomer = await Customers.findOne({where:{id:id}});
  // console.log(topCustomer);

  res.json({topCustomer:topCustomer,myCustomersList:myCustomersList});
});

module.exports=router;