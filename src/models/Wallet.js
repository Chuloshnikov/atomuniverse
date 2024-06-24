
import {Types, model, models, Schema } from 'mongoose';

const NftSchema = new Schema({
    name: { type: String },
    image: { type: String },
    coinPrice: { type: Types.Decimal128},
    tokenPrice: { type: Types.Decimal128},
});

const WalletSchema = new Schema({
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    privateKey: { type: String, required: true, unique: true },
    tokenAmount: { type: Types.Decimal128, default: Types.Decimal128.fromString("0") },
    coinAmount: { type: Types.Decimal128, default: Types.Decimal128.fromString("0") },
    nft: { type: [NftSchema] },
}, { timestamps: true });

export const Wallet = models?.Wallet || model('Wallet', WalletSchema);