import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await req.json();
        const emailDoc = await GetInTouch.create(data);
        return Response.json(emailDoc);
}