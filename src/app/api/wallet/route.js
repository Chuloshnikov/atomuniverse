import { ethers } from 'ethers';
import {Wallet} from '@/models/User';
import mongoose from "mongoose";

export default async function PUT(req) {
  // Генерация случайного кошелька
    try {
    await mongoose.connect(process.env.MONGODB_URL);

    const body = await req.json();
    //get email
    const { email } = body;

     // generate address and private key
    const wallet = ethers.Wallet.createRandom();

    const userWallet = await User.create({
    email,  
    address: wallet.address,
    privateKey: wallet.privateKey,
    });
    return Response.json(userWallet);
    } catch (error) {
        console.error('Error:', error);
        return Response.error(error);
    }
}