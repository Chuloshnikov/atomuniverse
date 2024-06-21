import {model, models, Schema} from "mongoose";


const NftSchema = new Schema({
    name: {type: String},
    image: {type: String},
    coinPrice: {type: Number},
    tokenPrice: {type: Number}
})

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  tokenAmount: {type: Number, default: 0},
  coinAmount: {type: Number, default: 0},
  nft: {type:[ExtraPriceSchema]}
}, {timestamps: true});

export const User = models?.User || model('User', UserSchema);