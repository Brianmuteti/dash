const express = require("express");

const router=express.Router();

const bcrypt = require("bcrypt");

const { sign } = require("jsonwebtoken");

const {Users,Business,Staffs,Customers,Services}=require("../models")

const {validateToken}=require("../middlewares/AuthMiddleware");


router.post("/",async(req,res)=>{
 
      console.log(req.body)
    const{first_name,last_name,email,phone_no,country,state,city,password,account_type,status}=req.body;

    var role="";

   if(account_type==1){

    role="Buss_Owner";

   }
   else if (account_type==2) {

    role="Client";
     
   } else {
     
    role="Guest";
   }

   console.log(first_name);
   
    bcrypt.hash(password,10).then((hash)=>{
      Users.create({
        first_name:first_name,
        last_name:last_name,
        username:phone_no,
        email:email,
        phone_no:phone_no,
        role:role, 
        country:country,
        state:state,
        city:city,
        status:status,
        account_type:account_type,
        password:hash

      });
      res.json("Success")
    });
  

});


router.post("/login", async (req, res) => { 

  const {username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });

  if(!user){
    res.json({error:"User Does not exist"});

    return;

  } 

  bcrypt.compare(password, user.password).then((match) => {
    if (!match){
      res.json({ error: "Wrong Username And Password Combination" });
    } 
    else{

      const accessToken = sign(
        {username: user.username,first_name: user.first_name,role:user.role, id: user.id},
        "importantsecret"
        
      );
    
      res.json({ token: accessToken, username: username, first_name: user.first_name,phone:user.phone,role:user.role, id: user.id });
    }

  
  });

});




router.get("/mybuss", validateToken,async (req, res) => {
  const myStaffList = await Business.findAll({
    where: { UserId: req.user.id }, include: [Staffs],
  });

  const myCustomersList = await Business.findAll({
    where: { UserId: req.user.id }, include: [Customers],
  });

  const myServicesList = await Business.findAll({
    where: { UserId: req.user.id }, include: [Services],
  });

  res.json({myStaffList:myStaffList,myCustomersList:myCustomersList,myServicesList:myServicesList});
});


//This where we get the information about the user
router.get("/auth", validateToken, (req, res) => {
  // console.log(req.user);
  res.json(req.user);
});


router.post("/save", async (req, res) => {
  const post = req.body;
  console.log(post);
  post.role = "Buss_Owner";
  post.account_type=1;
  await Users.create(post);
  res.json({code:1, message:"success"});
});






module.exports=router;