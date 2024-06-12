let testing= require("../models/testingModel.js");
const testingControllerVeriable={
    saveProduct:async function (req, res, next) {
        try {
            const productData = req.body;
            const promise = await testing.create(productData);
            res.status(200).json(" testingController Ok user added");
           // res.json(" testingController Ok user added")
        }catch (err){
            console.error("saveProduct error:",err)
            res.status(500).json({error:'something went wrong'})
        }
    }
}

module.exports=testingControllerVeriable