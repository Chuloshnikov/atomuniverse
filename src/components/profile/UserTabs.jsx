"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserTabs = ({ isAdmin }) => {

    const path = usePathname();

    return (
        <div
        className="max-w-md flex flex-col md:flex-row justify-center tabs mx-auto mb-4 px-4"
        >
            <Link 
            href={'/profile'} 
            className={`border-2 border-accentBg xs:rounded-t-xl mdl:rounded-r-none mdl:rounded-l-xl ${path === '/profile' ? 'active' : ''}`}>
                Profile
            </Link>
            {isAdmin && (
                <>
                    <Link 
                    href={"/testnet"}
                    className={`border border-accentBg ${path === '/blockchain' ? 'active' : ''}`}
                    >
                        Testnet
                    </Link>
                    <Link 
                    href={"/nft"}
                    className={`border border-accentBg ${path === '/nft' ? 'active' : ''}`}
                    >
                        NFT
                    </Link>
                    <Link 
                    href={'/users'}
                    className={`border border-accentBg ${path === '/users' ? 'active' : ''}`}
                    >
                        Users
                    </Link>
                   
                </>
            )}
             <Link 
                href={'/wallet'}
                className={`border-2 border-accentBg xs:rounded-b-xl mdl:rounded-l-none mdl:rounded-r-xl ${path === '/wallet' ? 'active' : ''}`}
                >
                    Wallet
            </Link>
        </div>

    )
}

export default UserTabs;