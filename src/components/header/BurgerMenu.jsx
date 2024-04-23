"use client"
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";

const BurgerMenu = ({ toggle }) => {
  return (
    <div className='popup-content mb-4'>
        <div className='p-4'>
        <div className="p-2 flex justify-end">
            <button onClick={toggle}>
                <FaWindowClose className=" h-7 w-7 text-accentBg hover:text-smouthText duration-200"/>
            </button>
        </div>
           <ul className="flex flex-col gap-4 mt-4">
                <li><Link href={'/'}>marketplace</Link></li>
                <li><Link href={'/'}>learn</Link></li>
                <li><Link href={'/'}>community</Link></li>
                <li><Link href={'/'}>tools</Link></li>
           </ul>
           <div className="mt-4 flex gap-2">
                <button 
                className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
                text-white rounded-md mr-4 font-semibold"
                >
                    Log in
                </button>
                <button className="text-md">
                    Register
                </button>
           </div>
        </div>
    </div>
  )
}

export default BurgerMenu