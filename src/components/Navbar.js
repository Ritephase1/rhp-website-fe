"use client";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link from next/link
import { FaUser, FaBars } from "react-icons/fa"; // Import icons from react-icons
// import Link from "next/link"; // Import Link component from next/link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl gap-2 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/icons/white_logo.png"
            alt="Company Logo"
            width={120}
            height={20}
            className="bg-red-800 py-5 px-10"
          />
        </div>

        {/* Navigation Links (for desktop and mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/agent"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              Agent
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full hover:p-2 p-2"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* User Icon and Investment Button */}
        <div className="flex items-center mr-5 space-x-4">
          <VscAccount className="text-2xl" />{" "}
          {/* Using React Icon for user icon */}
          <Link href="/investment">
            <button className="bg-red-600 text-white py-2 px-4 rounded-md md:rounded-full hover:bg-red-700">
              Investment
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-black" onClick={toggleMenu}>
            <FaBars className="mr-5 text-2xl" />{" "}
            {/* Using React Icon for menu button */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (toggle visibility with animation) */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen
            ? "max-h-screen opacity-100 translate-x-0"
            : "max-h-0 opacity-0 -translate-x-full"
        } md:hidden bg-white shadow-md border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li className="border-b border-gray-300 pb-2">
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="/about" className="text-black">
              About Us
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="#projects" className="text-black">
              Projects
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="/agent" className="text-black">
              Agent
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="/blog" className="text-black">
              Blog
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="/faq" className="text-black">
              FAQ
            </Link>
          </li>
          <li className="border-b border-gray-300 pb-2">
            <Link href="/contact" className="text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
