"use client"
import { useState } from 'react';
import Image from 'next/image';
import {mrhouse} from "../../assets/images";

const RegisterPage = () => {
  return (
    <div className=''>
        <form className='block max-w-xl mx-4 mdl:mx-auto'>
        <label>Name:</label>
            <input 
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="text"
            />
             <label>Email:</label>
            <input 
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="email"
            />
            <label>Password:</label>
            <input 
            className="w-full bg-mainBg border-2 border-accentBg text-smouthText rounded-md focus:border-smouthText dark:focus:ring-smouthText focus:ring-1 focus:outline-none focus:ring-smouthText"
            type="password"
            />
            <div className="mt-2 flex">
                <button 
               
                className="shadow-button bg-accentBg hover:bg-smouthText 
                px-4 py-2 text-white rounded-md mr-4 
                font-semibold text-white" 
                type="submit"
                >
                    Register
                </button>
            </div>
        </form>
        <div className='block max-w-xl mx-4 mdl:mx-auto mt-8'>
            <div className='rounded-full max-w-[300px] max-h-[300px] overflow-hidden'>
                <Image src={mrhouse} width={500} height={500} alt={"mr house"}/>
            </div>
            <div className='rounded-full max-w-[300px] max-h-[300px] overflow-hidden'>

            </div>
        </div>
    </div>
  )
}

export default RegisterPage;