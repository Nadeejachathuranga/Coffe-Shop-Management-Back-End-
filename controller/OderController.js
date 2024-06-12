let oder= require("../models/OderModel.js");
const OderController={
    saveOder:async function (req, res, next) {
        try {
            const JsonArrayData = req.body;
            const promise = await oder.insertMany(JsonArrayData);
            res.status(200).json("oder added");
           // res.json(" testingController Ok user added")
        }catch (err){
            console.error("save oder error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },

    findOder:async function (req,res,next){
        try {
            const UserId = req.params.id;
         const result= await oder.find({orderId:UserId})
            res.status(200).json(result);
        }catch (err){
            console.error("find user by id error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    },

    getOder :async function (req, res, next) {
        const Oders =await oder.find();
        res.status(200).json(Oders);
    },
}
module.exports=OderController