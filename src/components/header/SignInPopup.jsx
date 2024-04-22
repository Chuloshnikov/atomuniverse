"use client"
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const SignInPopup = ({toggle}) => {
  return (
    <div className="popup-content  mb-4">
        <div className="p-2 flex justify-end">
            <button onClick={toggle}>
                <FaWindowClose className=" h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
            </button>
        </div>
        <form className="w-[300px] p-2">
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
                px-4 py-2 text-white rounded-md mr-4 hidden lg:block 
                font-semibold text-white" 
                type="submit"
                >
                    Submit
                </button>
                <div className="-mt-2 w-full flex justify-end">
                    <Link href={'/'}>Register</Link>
                </div>
               
            </div>
        </form>
        
        <div className="p-2">
            <button className="flex gap-1 items-center">
                <FaGooglePlusSquare /> 
                <span>Login with Google</span>
            </button>
            <button className="flex gap-1 items-center">
                <FaSquareGithub />
                <span>Login with Github</span>
            </button>
        </div>
    </div>
  )
}

export default SignInPopup