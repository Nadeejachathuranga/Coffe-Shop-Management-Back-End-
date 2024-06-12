const router=require('express').Router();
let product= require("../models/UserModel.js");
const JosnUserController = require("../controller/JsonArrayTstingController");

router.post("/save",JosnUserController.saveJson);


router.get("/",JosnUserController.getUsers);
router.get("/find/:id",JosnUserController.findUser);






module.exports=router