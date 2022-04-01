const express = require("express");

const router=express.Router();

const {Business,Services}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/",async(req,res)=>{
   const business_list= await Business.findAll();

  //  res.json({listOfPosts:listOfPosts,likedPosts:likedPosts});
   res.json(business_list);
});

router.get("/byId/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const bussData = await Business.findOne({where:{UserId:id}});
    // console.log(business);
    res.json(bussData);
  });

  router.post("/",validateToken,async(req,res)=>{


    const {business_name,business_type,industry,location,address_line_1,latitude,longitude,city,state,country,status}=req.body;


   console.log(req.body)
    Business.create({
        business_name:business_name,
        business_type:"barber",
        industry:industry,
        location:location,

        address_line_1:address_line_1,
        latitude:latitude,
        longitude:longitude,
        city:city,
        state:state,
        country:country,

        status:status,
        UserId:req.user.id,
       
      });
      res.json("Success");
  

});


router.delete("/:bussId", validateToken, async (req, res) => {
    const bussId = req.params.bussId;
    await Business.destroy({
      where: {
        id: bussId,
      },
    });
  
    res.json("BUSINESS DELETED SUCCESSFULLY");
  });


module.exports=router;

