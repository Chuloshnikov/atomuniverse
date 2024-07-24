import { Order } from "@/models/Order";
import { Wallet } from "@/models/Wallet";
import mongoose from "mongoose";
const stripe = require('stripe');

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL);

    const {data, itemInfo} = await req.json();
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const wallet = await Wallet.findOne({userEmail})

    const orderDoc = await Order.create({
        userEmail,
        userName,
        userWallet: wallet.address,
        amount: itemInfo.price,
        paid: false
    });

    const stripe_line_items = [];

    const stripeSession = await stripe.checkout.sessions.create({
        line_items: [],
        mode: 'payment',
        customer_email: userEmail,
        success_url: process.env.NEXTAUTH_URL + 'marketplace?success=1',
        cancel_url: process.env.NEXTAUTH_URL + 'marketplace?canceled=1',
        metadata: {orderId:orderDoc._id.toString()}, 
        payment_intent_data: {
            metadata:{orderId:orderDoc._id.toString()},
        },      
    });

    return Response.json(stripeSession.url);
}