const router=require('express').Router();
let oder= require("../models/OderModel.js");
const OderController = require("../controller/OderController");

router.post("/save",OderController.saveOder);
router.get('/', OderController.getOder);
router.get("/find/:id",OderController.findOder);
/*router.put("/update/:id",OderController.updateUser);
router.delete("/delete/:id",OderController.deleteuser);*/

module.exports=router