"use client"
import {useState, useEffect} from "react";
import Link from "next/link";
import Logo from "./Logo";
import { TiThMenuOutline } from "react-icons/ti";
import DesktopHeaderNavLinks from "./DesktopHeaderNavLinks";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    useEffect(() => {
        setWindowWidth(window?.innerWidth);
    }, []);

    const handleMenuToggle = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    }

  return (
    <header className="flex justify-between items-center sticky">
      <nav className="px-4 mdl:px-8 py-4 flex gap-4 items-center">
        <Logo />
        {windowWidth >= 960 && <DesktopHeaderNavLinks/>}
      </nav>
      <button className="bg-accentBg px-4 py-2 text-white rounded-lg mr-4 hidden lg:block">Log in</button>
      <TiThMenuOutline className="text-accentBg w-7 h-7 lg:hidden mr-4"/>
    </header>
  );
};

export default Header;