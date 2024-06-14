import Link from "next/link";
import FooterInput from "./FooterInput";
import FooterLogo from "./FooterLogo";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='mt-12 w-full bg-black p-6'>
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
        <div className="px-4 py-12 flex flex-col gap-6">
          <FooterLogo/>
          <FooterInput/>
        </div>
        <div className="flex gap-10 mt-12 mr-12 mx-auto">
          <div>
            <h6 className="text-lg font-semibold">Platform</h6>
              <ul className="mt-4">
                <li className="nav-link">
                    <Link className="nav-link" href={'/marketplace'}>marketplace</Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" href={'/learn'}>learn</Link>
                </li>
                <li className="nav-link">
                  <Link  href={'/community'}>community</Link>
                </li>
                <li className="nav-link">
                  <Link  href={'/tools'}>tools</Link>
                </li>
              </ul>
          </div>
           <div>
              <h6 className="text-lg font-semibold">Socials</h6>
              <div className="mt-4 flex gap-2">
                  <Link
                  className="hover:text-smouthText duration-300" 
                  href={"/x"}
                  >
                      <BsTwitterX className="h-7 w-7"/>
                  </Link>
                  <Link
                  className="hover:text-smouthText duration-300"  
                  href={"/messenger"}
                  >
                      <FaFacebookMessenger className="h-7 w-7"/>
                  </Link>
              </div>
           </div>
        </div>
      </div>
        <div className="mx-auto text-center mt-[80px]">
          <h4 className="font-bold text-2xl">ATOM UNIVERSE</h4>
          <p>&copy; 2024 All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer;