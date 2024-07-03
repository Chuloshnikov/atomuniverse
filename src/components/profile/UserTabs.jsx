"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProfile } from "../UseProfile";

const UserTabs = () => {

    const path = usePathname();
    const {data} = useProfile();
    const isAdmin = data.admin;

    return (
        <div
        className="max-w-md flex flex-col md:flex-row justify-center tabs mx-auto mb-4 px-4"
        >
            <Link 
            href={'/profile'} 
            className={`border-2 border-accentBg xs:rounded-t-md md:rounded-r-none md:rounded-l-md ${path === '/profile' ? 'active' : ''}`}>
                Profile
            </Link>
            <Link 
            href={"/blockchain"}
            className={`border-2 border-accentBg ${path.includes('blockchain') ? 'active' : ''}`}>
                    Blockchain
            </Link>
            {isAdmin && (
                <>
                    <Link 
                    href={"/profile/items"}
                    className={`border-2 border-accentBg ${path.includes('items') ? 'active' : ''}`}
                    >
                        Items
                    </Link>
                    <Link 
                    href={"/profile/nft"}
                    className={`border-2 border-accentBg ${path.includes('nft') ? 'active' : ''}`}
                    >
                        NFT
                    </Link>
                    <Link 
                    href={'/users'}
                    className={`border-2 border-accentBg ${path.includes('users') ? 'active' : ''}`}
                    >
                        Users
                    </Link>
                   
                </>
            )}
             <Link 
                href={'/wallet'}
                className={`border-2 border-accentBg xs:rounded-b-md md:rounded-l-none md:rounded-r-md ${path.includes('wallet') ? 'active' : ''}`}
                >
                    Wallet
            </Link>
        </div>

    )
}

export default UserTabs;