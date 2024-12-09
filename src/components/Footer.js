import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="relative text-white p-16"
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
          opacity: "0.2", // Reduced opacity for the image
          // zIndex: "-1",
        }}
      ></div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
        {/* First Grid Layout */}
        <div>
          <h3 className="font-bold text-lg mb-4">Rhino Homes & Properties</h3>
          <p className="text-sm">
            We build luxury and affordable homes for our clients at competitive
            costs and enable investors to partner with us at different stages of
            our projects.
          </p>
        </div>

        {/* Second Grid Layout */}
        <div>
          <h3 className="font-bold text-lg mb-4">Offers</h3>
          <ul className="text-sm space-y-2">
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
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>News</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Fourth Grid Layout */}
        <div>
          <h3 className="font-bold text-lg mb-4">Join Our Newsletter</h3>
          <p className="mb-4">Your Email</p>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 flex-1 rounded-md text-black"
            />
            <button className="bg-red-600 px-4 py-3 text-white rounded-md">
              Subscribe
            </button>
          </div>
          <ul className="flex space-x-4">
            <li className="bg-red-600 p-3 rounded-full">
              <FaFacebook className="text-white" />
            </li>
            <li className="bg-red-600 p-3 rounded-full">
              <FaInstagram className="text-white" />
            </li>
            <li className="bg-red-600 p-3 rounded-full">
              <FaWhatsapp className="text-white" />
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black text-white mt-8 py-4 px-6 flex justify-between items-center border-t border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="bg-red-600 p-2">
            <img src="/icons/white_logo.png" alt="logo" className="w-12 h-12" />
          </div>
          <p className="text-sm">
            (C) Rhino Homes & Properties Limited. All Rights Reserved
          </p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <FaFacebook className="text-xl" />
          </li>
          <li>
            <FaInstagram className="text-xl" />
          </li>
          <li>
            <FaWhatsapp className="text-xl" />
          </li>
          <li>
            <FaArrowUp className="text-xl cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
