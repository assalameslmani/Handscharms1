import mongoose from "mongoose";

const {Schema,model } = mongoose
const Order = new Schema({
    order: {type:Number  ,default: null},
    product: {type:Array, required:true },
    amount :{type:Number, required:true} ,
    status:{type:String, required:true} ,
    date: {type:Date,required:true},
    User: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true},
    Payment: {
            type:Schema.Types.ObjectId,
            ref: 'Payment',
            default: null  // provide a default value
        }

})
const order= model('order',Order)
export default order;
