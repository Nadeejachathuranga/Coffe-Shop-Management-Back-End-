const router=require('express').Router();
const jwt = require('jsonwebtoken');

router.route("/login").post((req,res)=>{
   var userData={id:1 ,name:"nadeeja" ,city:"matara"};
   const token = jwt.sign({ user:userData  }, "secretKey", (err,token)=>{
        if(err){
            res.json({error:err})
        }else{
            res.json({token:token})
        }
   });


})



module.exports=router