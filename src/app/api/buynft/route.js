import mongoose from 'mongoose';
import { Wallet } from "@/models/Wallet";

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        const { itemInfo, data } = await req.json();
        const findWallet = { email: data.email };
        const userWallet = await Wallet.findOne(findWallet);

        if (!userWallet) {
            return Response.json({ error: 'Wallet not found' }, { status: 404 });
        }

        const nftPrice = itemInfo.price;
        const withdrawFromWallet = userWallet.tokenAmount - nftPrice;

        if (withdrawFromWallet < 0) {
            return Response.json({ error: 'Insufficient funds' }, { status: 400 });
        }

        await Wallet.updateOne(findWallet, { tokenAmount: withdrawFromWallet });
        const nft = {
            name: itemInfo.name,
            image: itemInfo.image,
            contract: itemInfo.contract,
            coinPrice: itemInfo.coinPrice,
            tokenPrice: itemInfo.tokenPrice
        };

        await Wallet.updateOne(findWallet, { $push: { nft } });

        return Response.json(true);

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}