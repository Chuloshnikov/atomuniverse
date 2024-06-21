"use client"
import Wallet from "@/components/wallet/Wallet";
import UserTabs from "../../components/profile/UserTabs";
import { useSession } from "next-auth/react";
import {redirect} from "next/navigation";


export default function WalletPage() {

    const session = useSession();
    const {status} = session;
    

    if (status === 'loading') {
        return 'Loading...';
        };
    
        if (status === 'unauthenticated') {
        return redirect('/login');
        };
    
    return (
        <section className="max-w-md mx-auto mt-12 p-4">
            <UserTabs isAdmin={true}/>
            <Wallet/>
        </section>
    )
}