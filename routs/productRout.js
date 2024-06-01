const router=require('express').Router();
let product= require("../models/ProductModel.js");

router.route("/add").post((req,res)=>{
    const ProductId=req.body.ProductId;
    const name=req.body.name;
    const price=req.body.price;
    const img=req.body.img;

    const newproduct = new product({
        ProductId,
        name,
        price,
        img
    })
    newproduct.save().then(()=>{
        res.json("product added")
    }).catch((err)=>{
console.log(err)
    })
    
})

router.route("/").get((req,res)=>{
    product.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
console.log(err)
    })
    
})

router.route("/update/:id").put(async(req,res)=>{
    let productId=req.params.id;
    const {name,price,img}=req.body;

    const productUpdate={
        name,
        price,
        img
    }
    const update=await product.findByIdAndUpdate(productId,productUpdate).then(()=>{
        res.status(200).send({status: 'product update'});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status: 'product update faild'});
    })

   
})

router.route("/delete/:id").delete(async(req,res) => {

    let productId = req.params.id;  
    await product.findByIdAndDelete(productId).then(() => {
        res.status(200).send({status : "Record deleted"});

    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : "Error Deleting product" , error: err.message});
    })
})

module.exports=router