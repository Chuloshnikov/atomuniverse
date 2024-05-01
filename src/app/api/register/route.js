import {User} from "@/models/User";
import mongoose from "mongoose";
import { hash } from "bcryptjs";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGODB_URL);
  if (!body.password?.length || body.password.length < 5) {
    new Error('password must be at least 5 characters');
  }
  
  const {name, email, password } = body;
  const notHashedPassword = password;
  const hashedPassword = await hash(notHashedPassword, 12)
  const createdUser = await User.create({name, email, password: hashedPassword});

  return Response.json(createdUser);
}