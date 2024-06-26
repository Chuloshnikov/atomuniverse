"use client"
import { useState } from 'react';
import Image from 'next/image';
import { mrhouse, atomcard } from "../../assets/images";
import { tone0 } from "../../assets/svg";
import { redirect, useRouter } from 'next/navigation';
import {signIn, useSession} from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    const session = useSession();
    const router = useRouter();

    if (session.status === "authenticated") {
        redirect('/');
    }


    async function handleFormSubmit(e) {
        e.preventDefault();
        setCreatingUser(true);
        setError(false);
        setUserCreated(false);
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({name, email, password}),
        });
        if (response.ok) {
            setUserCreated(true);
            setEmail('');
            setName('');
            setPassword('');
            setTimeout(() => router.push('/'), 2000);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }

  return (
    <div className=''>
        <form 
        onSubmit={handleFormSubmit}
        className='block max-w-xl mx-4 md:mx-auto'
        >
        <label>Name:</label>
            <input 
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder='name'
            />
             <label>Email:</label>
            <input 
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder='email'
            />
            <label>Password:</label>
            <input 
            type='password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
            />
            <div className="mt-2 flex items-center">
                <button 
                className="shadow-button bg-accentBg hover:bg-smouthText 
                px-4 py-2 text-white rounded-md mr-4 
                font-semibold text-white" 
                type="submit"
                disabled={creatingUser}
                >
                    Register
                </button>
                {userCreated && (
                        <p
                        className="text-center text-green-600"
                        >
                            User created. Now you can login
                        </p>
                )}
                {error && (
                    <p
                    className="text-center text-red-600"
                    >
                        An error has occurred. Please try again later
                    </p>
                )}
            </div>
        </form>
        <div className='flex gap-2 block max-w-xl mx-4 md:mx-auto mt-2'>
            <button
            onClick={() => signIn('google')}
            className='w-full py-2 flex gap-1 justify-center items-center 
            font-semibold border-2 bg-white text-black rounded-md
            hover:bg-mainBg hover:text-mainText border-accentBg duration-300'
            >
                <span className='hidden mdl:block'>Login with Google</span>
                <FcGoogle className='xs:w-7 xs:h-7 mdl:w-5 mdl:h-5'/>
            </button>
            <button
            onClick={() => signIn('github')}
            className='w-full py-2 flex gap-1 justify-center items-center 
            font-semibold border-2 bg-white text-black rounded-md
            hover:bg-mainBg hover:text-mainText border-accentBg duration-300'
            >
                <span className='hidden mdl:block'>Login with GitHub</span>
                <FaGithub className='xs:w-7 xs:h-7 mdl:w-5 mdl:h-5'/>
            </button>
        </div>
        <div>
        </div>
        <div className='relative block max-w-xl mx-4 mdl:mx-auto mt-8 flex flex-col mdl:flex-row'>
            <div className='z-10 rounded-full max-w-[300px] max-h-[300px] overflow-hidden'>
                <Image src={mrhouse} width={500} height={500} alt={"mr house"}/>
            </div>
            <div className='top-2 right-2 absolute max-w-[300px] max-h-[300px] overflow-hidden'>
                <Image className='z-5' src={tone0} width={500} height={500} alt={"atom"}/>
                <Image className='z-1 border-accentBg border-2 rounded-xl -mt-5' src={atomcard} width={200} height={100} alt={"atomcard"}/>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage;