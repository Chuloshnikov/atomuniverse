"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserTabs from "@/components/profile/UserTabs";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";


export default async function Users() {

    const session = await getServerSession(authOptions);
    if (!session) {
        return 'Not logged in';
    }

    await mongoose.connect(process.env.MONGODB_URL);


  return (
    <div>
        <UserTabs/>
        
    </div>
  )
}
