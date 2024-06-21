"use client"
import { useState, useEffect } from 'react'
import CreateWallet from './CreateWallet';
import {useProfile} from "@/components/UseProfile";

const Wallet = () => {
    const [isWallet, setIsWallet] = useState(false);
    const {data} = useProfile();
    console.log(data);

    useEffect(() => {
        if (data.wallet) {
            setIsWallet(true);
        }
    }, [data])
    


    if (!isWallet) {
        return (
            <CreateWallet/>
        )
    }


  return (
    <div>
        Wallet
    </div>
  )
}

export default Wallet;