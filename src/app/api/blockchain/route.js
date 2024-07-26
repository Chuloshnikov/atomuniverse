import mongoose from 'mongoose';
import { Blockchain } from '@/models/Blockchain';


export async function GET() {
    mongoose.connect(process.env.MONGODB_URL);
    const blockchainDoc = await Blockchain.find()

    return Response.json(blockchainDoc);


}