const router=require('express').Router();
let product= require("../models/UserModel.js");
const UserController = require("../controller/UserController");

router.post("/save",UserController.saveUser);
router.get('/', UserController.getUsers);
router.get("/find/:id",UserController.findUser);
router.put("/update/:id",UserController.updateUser);
router.delete("/delete/:id",UserController.deleteuser);

module.exports=router