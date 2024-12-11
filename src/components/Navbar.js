"use client";
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link from next/link
import { FaUser, FaBars } from "react-icons/fa"; // Import icons from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl gap-2 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 ">
          <Image
            src="/icons/white_logo.png"
            alt="Company Logo"
            width={120}
            height={20}
            className="bg-red-800 py-5 px-10 m:px-10"
          />
        </div>

        {/* Navigation Links (for desktop and mobile) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-black">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#agent" className="text-black">
              Agent
            </Link>
          </li>
          <li>
            <Link href="#blog" className="text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-black">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-black">
              Contact
            </Link>
          </li>
        </ul>

        {/* User Icon and Investment Button */}
        <div className="flex items-center mr-5 space-x-4">
          <VscAccount className="text-2xl" />{" "}
          {/* Using React Icon for user icon */}
          <button className="bg-red-600 text-white py-2 px-4 rounded-md md:rounded-full  hover:bg-red-700">
            Investment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-black" onClick={toggleMenu}>
            <FaBars className="mr-5 text-2xl" />{" "}
            {/* Using React Icon for menu button */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (toggle visibility) */}
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden `}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link href="/" className="text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-black">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#agent" className="text-black">
              Agent
            </Link>
          </li>
          <li>
            <Link href="#blog" className="text-black">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" className="text-black">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-black">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
