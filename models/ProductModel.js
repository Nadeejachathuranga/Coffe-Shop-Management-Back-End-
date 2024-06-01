const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;

const ProductModelSchema =new Schema({
    "ProductId": {
        require:true,
        type:String,
        unique:true,
        index:true
    },
    "name": {
        require:true,
        type:String
    },
    "price": {
        require:true,
        type:Number
    },
    "img": {
        require:true,
        type:String
    }
})

const product=Mongoose.model("product",ProductModelSchema);

module.exports= product;