import { ethers } from 'ethers';
import mongoose from "mongoose";
import { Wallet } from '@/models/Wallet';
import { NextResponse } from 'next/server';
import { User } from '@/models/User';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

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
          } else {
            const wallet = {wallet: true};
            await User.findOneAndUpdate({email}, wallet);
          }
        }

        

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



export async function GET() {
  mongoose.connect(process.env.MONGODB_URL);
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email) {
      return Response.json({});
  }
  return Response.json(
      await Wallet.findOne({email})
  )
}