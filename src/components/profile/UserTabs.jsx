"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserTabs = ({ isAdmin }) => {

    const path = usePathname();

    return (
        <div
        className="flex flex-col md:flex-row gap-2 justify-center tabs"
        >
            <Link 
            href={'/profile'} 
            className={`${path === '/profile' ? 'active' : 'cursor-pointer text-center py-4 xs:w-full mdl:w-[50%] xs:rounded-t-xl mdl:rounded-r-none mdl:rounded-l-xl'}`}>
                Profile
            </Link>
            {isAdmin && (
                <>
                    <Link 
                    href={"/categories"}
                    className={path === '/categories' ? 'active' : ''}
                    >
                        Blockchain
                    </Link>
                    <Link 
                    href={"/menu-items"}
                    className={/menu-item/.test(path) ? 'active' : ''}
                    >
                        NFT
                    </Link>
                    <Link 
                    href={'/users'}
                    className={/user/.test(path) ? 'active' : ''}
                    >
                        Users
                    </Link>
                   
                </>
            )}
             <Link 
                href={'/orders'}
                className={path === '/orders' ? 'active' : ''}
                >
                    Wallet
            </Link>
        </div>

    )
}

export default UserTabs;