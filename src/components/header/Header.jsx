"use client"
import {useState, useEffect} from "react";
import Link from "next/link";
import Logo from "./Logo";
import { TiThMenuOutline } from "react-icons/ti";
import DesktopHeaderNavLinks from "./DesktopHeaderNavLinks";
import { motion, AnimatePresence } from 'framer-motion';
import SignInPopup from "./SignInPopup";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const [openLoginPopup, setOpenLoginPopup] = useState(false);
    const [openRegisterPopup, setOpenRegisterPopup] = useState(false);

    useEffect(() => {
        setWindowWidth(window?.innerWidth);
    }, []);

    const handleMenuToggle = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    }

    const handleLoginToggle = () => {
      setOpenLoginPopup(!openLoginPopup)
    }

  return (
    <header className="flex justify-between items-center sticky">
      <nav className="px-4 mdl:px-8 py-4 flex gap-4 items-center">
        <Logo />
        {windowWidth >= 960 && <DesktopHeaderNavLinks/>}
      </nav>
      <button 
      onClick={handleLoginToggle}
      className="bg-accentBg hover:bg-smouthText duration-200 px-4 py-2
       text-white rounded-lg mr-4 hidden lg:block font-semibold shadow-md">
          Log in
      </button>
      <TiThMenuOutline className="text-accentBg w-7 h-7 lg:hidden mr-4"/>
      <AnimatePresence>
        {openLoginPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="popup absolute right-5 top-5"
          >
            <SignInPopup toggle={handleLoginToggle}/>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;