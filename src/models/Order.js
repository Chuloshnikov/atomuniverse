import { Schema } from "mongoose";

const OrderSchema = new Schema({
    userEmail: String,
    userName: String,
    userWallet: String,
    amount: String,
    paid: {type: Boolean, default: false},
}, {timestamps: true});

export const Order = models?.Order || model('Order', OrderSchema);