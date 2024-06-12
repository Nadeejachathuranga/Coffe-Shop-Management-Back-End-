const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;


const userSchema = new Schema({
    name: String,
    age: Number,
    city: String
});

const Jsonuser=Mongoose.model("Jsonuser",userSchema);

module.exports= Jsonuser;