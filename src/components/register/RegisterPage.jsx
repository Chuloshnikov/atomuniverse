"use client"
import { useState } from 'react';
import Image from 'next/image';
import { mrhouse, atomcard } from "../../assets/images";
import { tone0 } from "../../assets/svg";
import { redirect } from 'next/navigation';
import {signIn, useSession} from "next-auth/react";


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState('');
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    const session = useSession();

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
            setTimeout(() => {
                redirect('/');
            }, 4000);
        } else {
            setError(true);
        }
        setCreatingUser(false);
    }

  return (
    <div className=''>
        <form 
        onSubmit={handleFormSubmit}
        className='block max-w-xl mx-4 mdl:mx-auto'
        >
        <label>Name:</label>
            <input 
            onChange={e => setName(e.target.value)}
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="text"
            placeholder='name'
            />
             <label>Email:</label>
            <input 
            onChange={e => setEmail(e.target.value)}
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="email"
            placeholder='email'
            />
            <label>Password:</label>
            <input 
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="password"
            placeholder='password'
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