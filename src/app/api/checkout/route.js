import mongoose from "mongoose";
const stripe = require('stripe');

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL);

    const {data, itemInfo} = await req.json();
}