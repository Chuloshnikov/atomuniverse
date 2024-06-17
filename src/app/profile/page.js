"use client"
import {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";
import { PiUserCircleThin } from "react-icons/pi";

export default function ProfilePage() {

    const session = useSession();

    const [userName, setUserName] = useState(session.data?.user?.name || '');
    const [image, setImage] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const {status} = session;


    if (status === 'loading') {
    return 'Loading...';
    };

    if (status === 'unauthenticated') {
    return redirect('/login');
    };

    const userImage = session.data.user.image;

    return (
        <section className="mt-12">
            <div className="max-w-md mx-auto">
                    <div className="flex gap-2">
                        <div className="bg-mainText p-2 rounded-lg">
                            {userImage ? (
                                <div className="w-[100px] h-[100px]">
                                    <Image 
                                    className="rounded-lg" 
                                    src={userImage} 
                                    width={100} 
                                    height={100} 
                                    alt="avatar"
                                    />
                                </div>
                                
                            ) : (
                                <div className="w-[100px] h-[100px]">
                                    <PiUserCircleThin className="text-black w-[100px] h-[100px] mx-auto"/>
                                </div>
                                
                            )}
                            <label>
                                <input type="file" className="hidden"/>
                                <span className="block border-2 border-black rounded-lg p-[4px] text-black font-semibold text-center cursor-pointer mt-2">Edit</span>
                            </label>
                        </div>
                        <form className="grow">
                        <label>Username:</label>
                        <input 
                            onChange={e => setUserName(e.target.value)}
                            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
                            type="text" 
                            placeholder="User name" 
                            value={userName} 
                            />
                            <label>Email:</label>
                            <input
                            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText" 
                            type="email" 
                            disabled={true} 
                            value={session.data.user.email}
                            />
                            <button
                            className="mt-4 shadow-button bg-accentBg hover:bg-smouthText 
                            px-4 py-2 text-white rounded-md mr-4 hidden lg:block 
                            font-semibold text-white w-full"
                            type="submit"
                            >
                                Save
                            </button>
                        </form>
                    </div>
            </div>
        </section>
    )
}