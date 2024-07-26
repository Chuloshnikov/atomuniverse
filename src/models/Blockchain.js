import { Types, Schema, model, models } from "mongoose";


const BlockchainSchema = new Schema({
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    currency: { type: String, required: true },
    founds: { type: Types.Decimal128, default: Types.Decimal128.fromString("0") },
}, {timestamps: true});


export const Blockchain = models?.Blockchain || model('Blockchain', BlockchainSchema);