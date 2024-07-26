import { Order } from "@/models/Order";
import { Wallet } from "@/models/Wallet";
import mongoose from "mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function POST(req) {
  mongoose.connect(process.env.MONGODB_URL);

  const { data, itemInfo } = await req.json();
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return new Response('User not authenticated', { status: 401 });
  }

  const wallet = await Wallet.findOne({ email:userEmail });

  if (!wallet) {
    return new Response('Wallet not found', { status: 404 });
  }

  const orderDoc = await Order.create({
    userEmail,
    userName: data.name,
    userWallet: wallet.address,
    amount: itemInfo.price,
    purchaseName: itemInfo.name,
    address: "none",
    paid: false
  });

  const productName = itemInfo.name;

  // Convert product price to tokens
  const priceAmount = (itemInfo.price * 100);

  const stripeLineItems = [{
    quantity: 1,
    price_data: {
      currency: 'USD',
      product_data: {
        name: productName,
      },
      unit_amount: priceAmount,
    },
  }];

  const stripeSession = await stripe.checkout.sessions.create({
    line_items: stripeLineItems,
    mode: 'payment',
    customer_email: userEmail,
    success_url: `${process.env.NEXTAUTH_URL}marketplace/${orderDoc._id.toString()}`,
    cancel_url: `${process.env.NEXTAUTH_URL}marketplace?canceled=1`,
    metadata: { orderId: orderDoc._id.toString() },
    payment_intent_data: {
      metadata: { orderId: orderDoc._id.toString() },
    },
  });

  return new Response(JSON.stringify({ url: stripeSession.url }), { status: 200 });
}