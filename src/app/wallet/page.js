"use client"
import Wallet from "@/components/wallet/Wallet";
import UserTabs from "../../components/profile/UserTabs";
import { useSession } from "next-auth/react";
import {redirect} from "next/navigation";
import LoadingSpinner from "@/components/ui/LoadingSpinner";


export default function WalletPage() {

    const session = useSession();
    const {status} = session;
    

        
    if (status === 'loading') {
        return(
            <div className='flex items-center justify-center'>
                <LoadingSpinner/>
            </div>
        );
    }
    
    if (status === 'unauthenticated') {
        return redirect('/');
    };
    
    return (
        <section className="max-w-md mx-auto mt-12 p-4">
            <UserTabs/>
            <Wallet/>
        </section>
    )
}