const express = require("express");

const router=express.Router();

const {Staffs}=require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");





// router.post("/",async(req,res)=>{   
// const {staff_name,phone_no,email,BusinessId}=req.body;

// Staffs.create({
//     staff_name:staff_name,
//     phone_no:phone_no,
//     email:email,
//     BusinessId:BusinessId,
   
//   });
//   res.json("Staff created Successfully");

// });


router.get("/byBussId/:id", async (req, res) => {
    const id = req.params.id;
    const staffList = await Staffs.findAll({
      where: { BusinessId: id },
    });
    res.json(staffList);
  });


  router.delete("/:staffId", validateToken, async (req, res) => {
    const staffId = req.params.staffId;
  
    await Staffs.destroy({
      where: {
        id: staffId,
      },
    });

    res.json("DELETED SUCCESSFULLY");
});

router.post("/",validateToken, async (req, res) => {
  const post = req.body
  c;
  const add=await Staffs.create(post);
   res.json({code:1, message:"success"})
});

router.get("/", validateToken,async (req, res,next) => {
  const myStaffList = await Staffs.findAll();
  const topStaff = await Staffs.findOne();
  // console.log(myStaffList);

  res.json({topStaff:topStaff,myStaffList:myStaffList});
});

router.get("/:id", validateToken,async (req, res) => {
  const id = req.params.id;
  const myStaffList = await Staffs.findAll();
  const topStaff = await Staffs.findOne({where:{id:id}});
  // console.log(topStaff);

  res.json({topStaff:topStaff,myStaffList:myStaffList});
});





module.exports=router;