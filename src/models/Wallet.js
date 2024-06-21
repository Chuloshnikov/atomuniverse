import { model, models, Schema } from 'mongoose';

const NftSchema = new Schema({
    name: { type: String },
    image: { type: String },
    coinPrice: { type: Number },
    tokenPrice: { type: Number },
});

const WalletSchema = new Schema({
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    privateKey: { type: String, required: true, unique: true },
    tokenAmount: { type: Number, default: 0 },
    coinAmount: { type: Number, default: 0 },
    nft: { type: [NftSchema] },
}, { timestamps: true });

export const Wallet = models?.Wallet || model('Wallet', WalletSchema);