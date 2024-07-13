"use server"

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import UserTabs from "@/components/profile/UserTabs";
import { getServerSession } from "next-auth";
import mongoose from "mongoose";
import { User } from "@/models/User";
import UserInfo from "@/components/users/UserInfo";


export default async function Users() {

    const session = await getServerSession(authOptions);
    if (!session) {
        return 'Not logged in';
    }

    await mongoose.connect(process.env.MONGODB_URL);
    const users = JSON.parse(JSON.stringify(await User.find()))
    console.log(users)

  return (
    <section className="mt-12 p-4">
        <UserTabs/>
        <div className="mx-auto flex flex-col items-center">
            {users && users.map(user => <UserInfo key={user._id} user={user}/>)}
        </div>
    </section>
  )
}
