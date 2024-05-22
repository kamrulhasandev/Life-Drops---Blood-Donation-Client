"use client";
import { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";


import dynamic from "next/dynamic";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="max-w-screen-xl mx-auto px-2 flex justify-between items-center relative">
        <div>
          <div className="  relative">
            <h5 className="text-2xl font-bold">LifeDrops.</h5>
          </div>
        </div>
        <div className="hidden md:flex space-x-5">
          <ul className="flex space-x-5">
            <Link
              className="border-b-2 border-transparent hover:border-b-2 hover:border-white hover:transition-all"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="border-b-2 border-transparent hover:border-b-2 hover:border-white hover:transition-all"
              href={"/about"}
            >
              About Us
            </Link>
            <AuthButton />
          </ul>
        </div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoCloseSharp className="text-white" size={26} />
          ) : (
            <IoMenuOutline className="text-white" size={26} />
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <ul className="flex flex-col h-full w-full  items-center space-y-5  backdrop-blur-sm bg-white/50 text-black py-5 md:hidden mt-3 absolute">
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-b-2 hover:border-[#EB2C29] hover:transition-all"
              href="/"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="border-b-2 border-transparent hover:border-b-2 hover:border-[#EB2C29] hover:transition-all"
              href="/about"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
