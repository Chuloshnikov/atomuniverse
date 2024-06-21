"use client"
import {useState, useEffect} from "react";
import Link from "next/link";
import Logo from "./Logo";
import { TiThMenuOutline } from "react-icons/ti";
import { FaHouseUser } from "react-icons/fa";
import DesktopHeaderNavLinks from "./DesktopHeaderNavLinks";
import { motion, AnimatePresence } from 'framer-motion';
import SignInPopup from "./SignInPopup";
import BurgerMenu from "./BurgerMenu";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const [openLoginPopup, setOpenLoginPopup] = useState(false);
    const session = useSession();
    const status = session?.status;
    const userData = session.data?.user;
    let userName = userData?.name || userData?.email;
    if (userName && userName.includes(" ")) {
        userName = userName.split(' ')[0];
    }

    useEffect(() => {
        setWindowWidth(window?.innerWidth);
    }, []);

    const gmailCredentials = userData?.email.indexOf("gmail");
    const githubCredentials = userData?.image?.indexOf("github");

    useEffect(() => {
      if (gmailCredentials) {
        fetch('/api/profile', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              email: userData.email,
              name: userData.name,
              image: userData.image,
          }),
      });
      } 
      if (!!githubCredentials) {
        fetch('/api/profile', {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              email: userData.email,
              name: userData.name,
              image: userData.image,
          }),
      });
      }
    },[gmailCredentials]);

    const handleMenuToggle = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    }

    const handleLoginToggle = () => {
      setOpenLoginPopup(!openLoginPopup)
    }

    const handleModalClick = (e) => {
      e.stopPropagation();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

  return (
    <header className="flex justify-between items-center sticky">
      <nav className="px-4 mdl:px-8 py-4 flex gap-4 items-center">
        <Logo />
        {windowWidth >= 960 && <DesktopHeaderNavLinks/>}
      </nav>
    
      
      <div className="flex items-center gap-2">
      {/*profile link*/}
        <div>
            {status === 'authenticated' && (
              <div className="flex items-center gap-2">
                    <Link 
                      href={'/profile'} 
                      className='flex items-center gap-1 items-center'
                      >
                          <span className='hidden md:block whitespace-nowrap'>{userName}</span>
                          <FaHouseUser className='h-8 w-8 text-primary'/>
                      </Link>
                    <button 
                      onClick={() => signOut()}
                      className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
                    text-white rounded-md mr-4 hidden lg:block font-semibold"
                    >
                        Log out
                    </button>
              </div>
            )}
          {/*login and logout button*/}

          {status === 'unauthenticated' && (
              <button 
              onClick={handleLoginToggle}
              className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
              text-white rounded-md mr-4 hidden lg:block font-semibold">
                  Log in
              </button>
            )}
            {status === 'loading' && (
              <button 
              onClick={handleLoginToggle}
              className="shadow-button bg-accentBg hover:bg-smouthText px-4 py-2
                text-white rounded-md mr-4 hidden lg:block font-semibold">
                  Log in
              </button>
            )}
        </div>
      
      {/* login menu start */}
      <AnimatePresence>
        {openLoginPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="z-50 popup absolute top-0 left-0 w-full h-screen"
          >
            <div 
            onClick={handleLoginToggle}
            className="absolute top-0 left-0 w-full h-full">
              <div 
              onClick={handleModalClick}
              className="absolute right-2 md:right-4 top-5 w-[300px] h-[500px]">
                <SignInPopup toggle={handleLoginToggle}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* login menu end */}
      <TiThMenuOutline onClick={handleMenuToggle} className="text-accentBg w-7 h-7 lg:hidden mr-4"/>
      {/*Mobile menu start*/}

      <AnimatePresence>
        {openBurgerMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="z-50 popup absolute top-0 left-0 w-full h-screen"
          >
            <div 
            onClick={handleMenuToggle}
            className="absolute top-0 left-0 w-full h-full">
              <div 
              onClick={handleModalClick}
              className="absolute right-2 top-5 w-[300px] h-[500px]">
                <BurgerMenu userName={userName} status={status} toggle={handleMenuToggle} loginToggle={handleLoginToggle}/>
              </div>
            </div>
           
          </motion.div>
        )}
      </AnimatePresence>
      </div>
      {/*Mobile menu end*/}
    </header>
  );
};

export default Header;