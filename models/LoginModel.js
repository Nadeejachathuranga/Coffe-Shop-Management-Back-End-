const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String
  });



const Login=Mongoose.model("Login",userSchema);
module.exports= Login;