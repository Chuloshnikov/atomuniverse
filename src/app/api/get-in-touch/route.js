import { GetInTouch } from "@/models/GetInTouch";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await req.json();
    console.log(data);
    try {
        const emailDoc = await GetInTouch.create({email: data});
        return Response.json(emailDoc);

    } catch (error) {
        return Response.json(error)
    }
    
}
       