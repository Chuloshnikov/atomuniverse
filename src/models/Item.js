import mongoose, { Schema, model, models } from "mongoose";


const ItemSchema = new Schema({
    image: {type: String},
    name: {type: String},
    contract: {type: String},
    category: {type: mongoose.Types.ObjectId},
    price: {type: Number}
}, {timestamps: true});


export const Item = models?.MenuItem || model('Item', ItemSchema);