import mongoose from "mongoose";
const {Schema,model } = mongoose
const Product = new Schema({
    price: {type:Number ,required:true},
    name: {type:String, required:true },
    category:{type:Array, required:true },
    discount :{type:Number, required:true} ,
    image:{type:String, required:true} ,
    description:{type:String, required:true} ,
    stock: {type:Number ,required:true}

})
const product = model('product',Product)
export default product;