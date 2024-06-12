let user= require("../models/UserModel.js");

const UserController={
    saveUser:async function (req, res, next) {
        try {
            const userData = req.body;
            const promise = await user.create(userData);
            res.status(200).json(promise);
        }catch (err){
            console.error("save user error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },


    getUsers :async function (req, res, next) {
        const userList =await user.find();
        res.status(200).json(userList);
    },

   
    findUser:async function (req,res,next){
        try {
            const UserId = req.params.id;
         const user= await user.find({id:UserId})
            res.status(200).json(user);
        }catch (err){
            console.error("find user by id error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },


    updateUser:async function (req,res,next){
      
        let userId=req.params.id;
        const userdata=req.body;
    
       
        const update=await user.findByIdAndUpdate(userId,userdata).then(()=>{
            res.status(200).send({status: 'user update'});
        }).catch((err)=>{
            console.log(err)
            res.status(500).send({status: 'user update faild'});
        })
    
    },


    deleteuser:async function (req,res,next){
     /*   try {
            const userId = req.params.id;
            const  deleteuser=await user.deleteOne({
                id:userId
            });
            if (deleteuser.deletedCount==0){
                return res.status(500).json({error:"can't delete"})
            }else {
                return res.status(200).json("deleted")
            }
        }catch (err){
            console.error("delete user by id error:",err)
            res.status(500).json({error:'something went wrong'})
        }*/

        let userId = req.params.id;  
        await user.findByIdAndDelete(userId).then(() => {
            res.status(200).send({status : "Record deleted"});
    
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status : "Error Deleting user" , error: err.message});
        })
    }


   
}
module.exports=UserController