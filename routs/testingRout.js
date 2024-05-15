const router=require('express').Router();
let testing= require("../models/testingModel.js");

router.route("/add").post((req,res)=>{
    const name=req.body.name;
    const age=req.body.age;
    const id=req.body.id;

    const newTesting = new testing({
        name,
        age,
        id
    })
    newTesting.save().then(()=>{
        res.json("testing added")
    }).catch((err)=>{
console.log(err)
    })
    
})


router.route("/").get((req,res)=>{
    testing.find().then((testing)=>{
        res.json(testing)
    }).catch((err)=>{
console.log(err)
    })
    
})

router.route("/update/:id").put(async(req,res)=>{
    let testingId=req.params.id;
    const {name,age}=req.body;

    const updateTesting={
        name,
        age,
    }
    const update=await testing.findByIdAndUpdate(testingId,updateTesting).then(()=>{
        res.status(200).send({status: 'testing update'});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: 'testing update faild'});
    })

   
})


router.route("/save").post(async(req,res)=>{
    res.status(200).send({status: 'new testing success'});
})

module.exports=router