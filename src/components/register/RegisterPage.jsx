"use client"
import { useState } from 'react'

const RegisterPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default RegisterPage;