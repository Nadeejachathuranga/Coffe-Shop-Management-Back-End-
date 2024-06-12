let user= require("../models/JsonArrayTestingModel.js");
const JsonArrayTstingController={
    saveJson:async function (req, res, next) {
        try {
            const JsonArrayData = req.body;
            const promise = await user.insertMany(JsonArrayData);
            res.status(200).json("Json testingController Ok user added");
           // res.json(" testingController Ok user added")
        }catch (err){
            console.error("saveProduct error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },

    findUser:async function (req,res,next){
        try {
            const UserId = req.params.id;
         const userr= await user.find({id:UserId})
            res.status(200).json(userr);
        }catch (err){
            console.error("find user by id error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },

    getUsers :async function (req, res, next) {
        const userList =await user.find();
        res.status(200).json(userList);
    },
}

module.exports=JsonArrayTstingController