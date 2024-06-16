import Image from "next/image";
import Link from "next/link";
import { world } from "@/assets/images";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa6";


const CommunityIcons = () => {
  return (
    <div className="max-w-6xl mt-6 mx-auto flex flex-col xl:flex-row gap-5 text-center">
      <div className="flex flex-col gap-6 p-4">
        <div className="mx-auto">
          <Image src={world} className="rounded-xl" width={1000} height={600} alt="world"/>
        </div>
          <p className="text-lg xl:text-xl mt-6">
            Growth and Education Education is a cornerstone of our community. 
            We provide resources, host workshops, and organize events to educate our 
            members about blockchain technology and its potential applications. 
            By empowering our community with knowledge, we’re nurturing a generation 
            of informed users and developers who will propel Atom Universe to new heights.
          </p>
          <p className="text-lg xl:text-xl">
            Join our community today and be part of a movement that’s setting 
            the standard for what a blockchain ecosystem should be—open, inclusive, 
            and forward-thinking.
          </p>
          <div className="flex gap-5 mx-auto">
            <Link href={'/x'} className="hover:text-smouthText duration-300">
                <BsTwitterX className="w-20 h-20"/>
            </Link>
            <Link href={'/medium'} className="hover:text-smouthText relative duration-300 flex flex-col -mt-2">
                <FaMedium className="w-20 h-20"/>
                <span className="absolute top-16 left-2 font-bold">MEDIUM</span>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default CommunityIcons;