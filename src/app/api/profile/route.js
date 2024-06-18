import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import {User} from '@/models/User';
import generateRandomString from "../../../libs/generateRandomString";
import { hash } from "bcryptjs";

export async function POST(req) {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      
      const body = await req.json();
      const { email } = body;
  
      if (email) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          // Пользователь с таким email уже существует
          return Response.json({ error: 'User with this email already exists' }, { status: 400 });
        }
  
        // Пользователя с таким email нет в базе, можно создать нового пользователя
        const { name, password, image } = body;
        const generatedPassword = generateRandomString(32);
        const hashedPassword = await hash(generatedPassword, 12);
  
        const newUser = await User.create({ name, email, password: hashedPassword, image });
        return Response.json(newUser);
      } else {
        return Response.json({ error: 'Email is required' }, { status: 400 });
      }
    } catch (error) {
      console.error('Error:', error);
      return Response.error(error);
    }
  }

  export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;

    
        await User.updateOne({email}, data);


    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
        return Response.json({});
    }
    return Response.json(
        await User.findOne({email})
    )
}