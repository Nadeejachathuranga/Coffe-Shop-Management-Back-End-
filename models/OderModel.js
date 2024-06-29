const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;

const OderModelSchema =new Schema({
    orderId:  { type: String, required: true },
    product: {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        currency: { type: String, required: true }
    },
    itemCount: { type: Number, required: true },
    userID: { type: String, required: true }
})

const Oder=Mongoose.model("Oder",OderModelSchema);

module.exports= Oder;