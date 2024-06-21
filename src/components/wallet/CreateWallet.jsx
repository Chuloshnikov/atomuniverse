"use client"
import { useState } from 'react'

const CreateWallet = ({email}) => {
    const [createWallet, setCreateWallet] = useState(false);

    
    async function createUserWallet({email}) {
        const response = await fetch('/api/wallet', {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email,
                address,
            })
        });
        if (response.ok) {
            
        } else {
            
        }
    }
    
    
    if (createWallet) {
        
    }

  return (
    <div className='py-12 text-center'>
        <h2 className='text-lg'>
            You don't have a wallet yet
        </h2>
        <p>Here you can generate your wallet</p>
        <button 
        onClick={() => setCreateWallet(true)}
         className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
         px-4 py-2 text-white rounded-md mr-4 
         font-semibold text-white w-full"
         type="button"
        >
            Create Wallet
        </button>
    </div>
  )
}

export default CreateWallet;