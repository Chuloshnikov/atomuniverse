import { ethers } from 'ethers';
import mongoose from "mongoose";
import { Wallet } from '@/models/Wallet';
import { NextResponse } from 'next/server';
import { User } from '@/models/User';

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const body = await req.json();
        const { email } = body;
        if (email) {
          const existingWallet =  await Wallet.findOne({ email });
          if (existingWallet) {
            // Пользователь с таким email уже существует
            return Response.json({ error: 'User already exists' }, { status: 400 });
          }
        }

        const userWalletCreation = await User.findOneAndUpdate({email}, {wallet: true});

          // Генерация случайного кошелька
        const wallet = ethers.Wallet.createRandom();

        const userWallet = await Wallet.create({
            email,  
            address: wallet.address,
            privateKey: wallet.privateKey,
        });

        return NextResponse.json(userWallet);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}