"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link"; // Import Link from next/link

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="relative text-white px-6 py-10 md:py-16"
      style={{
        backgroundColor: "#0A1229", // Background color
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/footer_img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.2",
        }}
      ></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        {/* First Grid Layout */}
        <div>
          <h3 className="font-bold md:text-2xl text-lg mb-4">
            Rhino Homes & Properties
          </h3>
          <p className="text-sm md:text-md leading-relaxed">
            We build luxury and affordable homes for our clients at competitive
            costs and enable investors to partner with us at different stages of
            our projects.
          </p>
        </div>

        {/* Second Grid Layout */}
        <div>
          <h3 className="font-bold text-lg mb-4 md:text-xl ">Offers</h3>
          <ul className="text-sm  space-y-2">
            <li>Residential Properties</li>
            <li>Commercial Properties</li>
            <li>Investment Opportunities</li>
            <li>Commission</li>
            <li>Agent</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Third Grid Layout */}
        <div>
          <h3 className="font-bold text-lg mb-4 md:text-xl ">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/about" className="text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#agent" className="text-white">
                Agent
              </Link>
            </li>
            <li>
              <Link href="#blog" className="text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Grid Layout */}
        <div>
          <h3 className="md:text-xl  font-bold text-lg mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-sm mb-4">Your Email</p>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 w-full rounded-md text-black"
            />
            <button className="bg-red-600 w-full py-3 text-white rounded-md">
              Subscribe
            </button>
          </div>
          <ul className="flex py-5 items-center space-x-4">
            <li className="p-3 bg-[#0A1229] border border-[#7C7878] rounded-full">
              <FaFacebook className="text-white text-lg" />
            </li>
            <li className="p-3 bg-[#0A1229] border border-[#7C7878] rounded-full">
              <FaInstagram className="text-white text-lg" />
            </li>
            <li className="p-3 bg-[#0A1229] border border-[#7C7878] rounded-full">
              <FaWhatsapp className="text-white text-lg" />
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-[#0A1229] border-t border-[#7C7878] text-white mt-10 flex flex-col md:flex-row justify-between items-center bottom-0 left-0 right-0">
        {/* Logo and Rights */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 p-4">
          <div className="bg-[#D02A1A] p-2">
            <img
              src="/icons/white_logo.png"
              alt="logo"
              className="w-28 h-8 md:w-35 md:h-10"
            />
          </div>
          <p className="text-sm md:text-lg text-center md:text-left">
            © Rhino Homes & Properties Limited. All Rights Reserved.
          </p>
        </div>

        {/* Social Links */}
        <ul className="flex flex-wrap justify-center items-center md:space-x-4">
          <li className="p-3 bg-[#0A1229] border border-[#7C7878]">
            <FaFacebook className="text-white text-lg" />
          </li>
          <li className="p-3 bg-[#0A1229] border border-[#7C7878]">
            <FaInstagram className="text-white text-lg" />
          </li>
          <li className="p-3 bg-[#0A1229] border border-[#7C7878]">
            <FaWhatsapp className="text-white text-lg" />
          </li>
          <li
            onClick={handleScrollToTop}
            className="p-3 bg-[#D02A1A] border border-[#7C7878] cursor-pointer"
          >
            <img src="/icons/move_up.png" alt="go up" className="w-4 h-4" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
