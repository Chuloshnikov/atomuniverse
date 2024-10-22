"use client"
import Link from "next/link";
import {useState} from "react";
import { FaWindowClose } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import {signIn, signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

const SignInPopup = ({toggle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    const [error, setError] = useState('');
    const session = useSession();
    const status = session?.status;
    console.log(session.status)

    if (session.status === "authenticated") {
        redirect('/');
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoginInProgress(true);
        const logIn = await signIn('credentials', {redirect: false, email, password, callbackUrl: '/'});
        if (logIn) {
            setLoginInProgress(false);
          } else {
            setError(toString(logIn));
            setLoginInProgress(false);
          }
        setEmail('');
        setPassword('');
    }

  return (
    <div className="z-50 popup-content  mb-4">
        <div className="p-2 flex justify-end">
            <button onClick={toggle}>
                <FaWindowClose className=" h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
            </button>
        </div>
        <form 
        onSubmit={handleFormSubmit}
        className="w-[300px] p-2"
        >
             <label>Email:</label>
            <input 
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
            />
            <label>Password:</label>
            <input 
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            value={password}
            />
            <div className="mt-2 flex">
                
                <button 
                onClick={toggle}
                disabled={loginInProgress}
                className="shadow-button bg-accentBg hover:bg-smouthText 
                px-4 py-2 text-white rounded-md mr-4 hidden lg:block 
                font-semibold text-white" 
                type="submit"
                >
                    Login
                </button>
                <div className="-mt-2 w-full flex justify-end">
                    <Link onClick={toggle}  href={'/register'}>Register</Link>
                </div>
               
            </div>
        </form>
        <div className="p-2">
            <button 
            onClick={() => signIn('google')}
            className="flex gap-1 items-center hover:text-smouthText duration-300"
            >
                <FaGooglePlusSquare /> 
                <span>Login with Google</span>
            </button>
            <button 
            onClick={() => signIn('github')}
            className="flex gap-1 items-center hover:text-smouthText duration-300"
            >
                <FaSquareGithub />
                <span>Login with Github</span>
            </button>
        </div>
    </div>
  )
}

export default SignInPopup