"use client"
import {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {redirect} from "next/navigation";

export default function ProfilePage() {

    const session = useSession();

    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const {status} = session;


    if (status === 'loading') {
    return 'Loading...';
    }

    if (status === 'unauthenticated') {
    return redirect('/login');
    }

    return (
        <section className="mt-12">
            <form className=",ax-w-xs mx-auto">
                    profile
            </form>
        </section>
    )
}