"use client"
import { useState, useEffect } from 'react'
import CreateWallet from './CreateWallet';
import {useProfile} from "@/components/UseProfile";

const Wallet = () => {
    const [isWallet, setIsWallet] = useState(false);
    const {data} = useProfile();

    useEffect(() => {
        if (data.wallet) {
            setIsWallet(true);
        }
    }, [data])
    


    if (!isWallet) {
        return (
            <CreateWallet email={data.email}/>
        )
    }


  return (
    <div>
        Wallet
    </div>
  )
}

export default Wallet;