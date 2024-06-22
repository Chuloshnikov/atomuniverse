'use client';

import { useRouter } from 'next/navigation';

const CreateWallet = ({ email, setCreateWallet }) => {
    
    const router = useRouter();

    async function createUserWallet(email) {
        const response = await fetch('/api/wallet', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        
        if (response.ok) {
            console.log("Wallet created successfully");
            setCreateWallet(true);
        } else {
            console.log("Error creating wallet:", response);
        }
    }

    return (
        <div className="py-12 text-center">
            <h2 className="text-lg">
                You don't have a wallet yet
            </h2>
            <p>Here you can generate your wallet</p>
            <button 
                onClick={() => createUserWallet(email)}
                className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
                px-4 py-2 text-white rounded-md mr-4 
                font-semibold text-white w-full"
                type="button"
            >
                Create Wallet
            </button>
        </div>
    );
};

export default CreateWallet;