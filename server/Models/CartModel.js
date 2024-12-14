import mongoose from "mongoose";

const {Schema,model } = mongoose
const Cart= new Schema({
    User: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true},
        product:{type:Array, required:true },

})
const cart = model('cart',Cart)
export default cart;
