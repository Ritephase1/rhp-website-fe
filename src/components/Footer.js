"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer
      className="relative text-white px-6 py-10 md:py-16 bg-[#050914]"
      // style={{
      //   backgroundColor: "#0A1229", // Footer background color
      // }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "navy",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.2",
        }}
      ></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        {/* Section 1 */}
        <div>
          <h3 className="font-bold text-xl sm:text-lg mb-4">
            Rhino Homes & Properties
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            We build luxury and affordable homes for our clients at competitive
            costs and enable investors to partner with us at different stages of
            our projects.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="font-bold text-xl sm:text-lg mb-4">Offers</h3>
          <ul className="space-y-2">
            <li className="text-sm sm:text-base">Residential Properties</li>
            <li className="text-sm sm:text-base">Commercial Properties</li>
            <li className="text-sm sm:text-base">Investment Opportunities</li>
            <li className="text-sm sm:text-base">Commission</li>
            <li className="text-sm sm:text-base">Agent</li>
            <li className="text-sm sm:text-base">Projects</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="font-bold text-xl sm:text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:underline text-sm sm:text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:underline text-sm sm:text-base"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/agent"
                className="hover:underline text-sm sm:text-base"
              >
                Agent
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline text-sm sm:text-base"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:underline text-sm sm:text-base"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline text-sm sm:text-base"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="font-bold text-xl sm:text-lg mb-4">
            Join Our Newsletter
          </h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 w-full rounded-md text-black mb-3"
          />
          <button className="bg-red-600 w-full py-2 text-white rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative  border-t border-[#7C7878]">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mt-10 py-4">
          {/* Logo */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="bg-[#D02A1A] p-2 rounded-md">
              <Image
                src="/icons/white_logo.png"
                alt="Rhino Homes Logo"
                width={140}
                height={32}
                className="w-28 md:w-36"
              />
            </div>
            <p className="text-sm md:text-md sm:text-xs">
              © Rhino Homes & Properties Limited. All Rights Reserved.
            </p>
          </div>

          {/* Social Links */}
          <ul className="flex items-center space-x-4 mt-4 md:mt-0">
            <li className="p-3 bg-[#0A1229] border rounded-full">
              <FaFacebook />
            </li>
            <li className="p-3 bg-[#0A1229] border rounded-full">
              <FaInstagram />
            </li>
            <li className="p-3 bg-[#0A1229] border rounded-full">
              <FaWhatsapp />
            </li>
          </ul>
        </div>

        {/* Scroll-to-Top Button */}
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-4 right-4 bg-[#D02A1A] p-3 rounded-full shadow-lg cursor-pointer hover:opacity-90"
          aria-label="Scroll to Top"
        >
          <Image
            src="/icons/move_up.png"
            alt="Scroll Up"
            width={16}
            height={16}
          />
        </button>
      </div>
    </footer>
  );
}
