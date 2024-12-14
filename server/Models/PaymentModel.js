import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order", 
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "Paid", "Failed"],
        default: "Pending",
    },
},
{
    timestamps: true
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
