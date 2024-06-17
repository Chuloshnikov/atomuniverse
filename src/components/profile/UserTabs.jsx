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
                    href={"/categories"}
                    className={`border border-accentBg ${path === '/profile' ? 'active' : ''}`}
                    >
                        Blockchain
                    </Link>
                    <Link 
                    href={"/menu-items"}
                    className={`border border-accentBg ${path === '/profile' ? 'active' : ''}`}
                    >
                        NFT
                    </Link>
                    <Link 
                    href={'/users'}
                    className={`border border-accentBg ${path === '/profile' ? 'active' : ''}`}
                    >
                        Users
                    </Link>
                   
                </>
            )}
             <Link 
                href={'/orders'}
                className={`border-2 border-accentBg xs:rounded-b-xl mdl:rounded-l-none mdl:rounded-r-xl ${path === '/wallet' ? 'active' : ''}`}
                >
                    Wallet
            </Link>
        </div>

    )
}

export default UserTabs;