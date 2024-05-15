const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;

const testingSchema =new Schema({
    name: {
        type: "String",
        required: "true"
    },
    age: {
        type: "String",
        required: "true"
    },
    id: {
        type: "String",
        required: "true"
    }
})

const testing=Mongoose.model("testing",testingSchema);

module.exports= testing;
