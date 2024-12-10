// Navigation.js

"use client";

import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { useState, useEffect, useRef } from "react";
// import { FaChevronDown, FaTimes, FaBars, FaUserCircle } from "react-icons/fa";
// import { MdPhone } from "react-icons/md";

// Lazy load the icons (optional to enhance performance)
const FaChevronDownLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaChevronDown),
  { ssr: false }
);
const FaTimesLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaTimes),
  { ssr: false }
);
const FaBarsLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaBars),
  { ssr: false }
);
const FaUserCircleLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaUserCircle),
  { ssr: false }
);
const MdPhoneLazy = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdPhone),
  { ssr: false }
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const modalRef = useRef();

  const links = [
    // { name: "Home", href: "#home" },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Projects",
      href: "#projects",
      subLinks: [
        { name: "Residential", href: "#residential" },
        { name: "Commercial", href: "#commercial" },
      ],
    },
    { name: "Agent", href: "#agent" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white text-black sticky top-0 z-50 border-b shadow-md rounded-full mx-20">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div>
          <img
            src="/images/rhp_logo.png"
            alt="Real Estate Logo"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.href} className="hover:text-gray-700 transition">
                {link.name}
              </a>
              {link.subLinks && (
                <>
                  <FaChevronDownLazy className="ml-2 inline-block text-sm text-gray-500 group-hover:text-gray-700 transition" />
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name} className="hover:bg-gray-100">
                        <a
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700"
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
          <li className="flex space-flex-2">
            <MdPhoneLazy /> + 3490-2734
          </li>
          <li>
            <a
              href="#invest"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Invest
            </a>
          </li>
          <li>
            <a href="#profile" className="text-2xl">
              <FaUserCircleLazy />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <a
            href="#invest"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
          >
            Invest
          </a>
          <a href="#profile" className="text-2xl">
            <FaUserCircleLazy />
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimesLazy /> : <FaBarsLazy />}
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {isMenuOpen && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col items-center justify-center"
        >
          <ul className="bg-white rounded-lg shadow-lg w-3/4 max-w-md p-6 space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full text-left text-black font-semibold"
                >
                  {link.name}
                  {link.subLinks && (
                    <FaChevronDownLazy
                      className={`ml-2 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {activeDropdown === link.name && link.subLinks && (
                  <ul className="mt-2 bg-gray-100 rounded-md">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <a
                          href={subLink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
