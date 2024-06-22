"use client"
import { useState, useEffect } from 'react'
import CreateWallet from './CreateWallet';
import {useProfile} from "@/components/UseProfile";
import UserWallet from './UserWallet';

const Wallet = ({}) => {
    const [isWallet, setIsWallet] = useState(false);
    const [createWallet, setCreateWallet] = useState(false);
    const {data} = useProfile();
    console.log(data.wallet);

    useEffect(() => {
        if (data.wallet) {
            setIsWallet(true);
        }
    }, [data])

    if (createWallet) {
        window.location.reload();
    }
    


    if (!isWallet) {
        return (
            <CreateWallet email={data.email} setCreateWallet={setCreateWallet}/>
        )
    }


  return (
    <div>
        <UserWallet/>
    </div>
  )
}

export default Wallet;