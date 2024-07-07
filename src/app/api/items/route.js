import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import { Item } from "../../../models/Item";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const data = await req.json();
    if (await isAdmin()) {
        const itemDoc = await Item.create(data);
        return Response.json(itemDoc);
    } else {
        return Response.json({});
    }
}

export async function PUT(req) {
    mongoose.connect(process.env.MONGODB_URL);
    if (await isAdmin()) {
        const {_id, ...data} = await req.json();
        await Item.findByIdAndUpdate(_id, data);
    }
    
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    return Response.json(
        await Item.find()
    );
}

export async function DELETE(req) {
    mongoose.connect(process.env.MONGODB_URL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if (await isAdmin()) {
      await Item.deleteOne({_id});
    }
    return Response.json(true);
  }