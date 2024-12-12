"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/globals.css";

const ContactPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contactBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />
        <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4 ">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-base md:text-lg  max-w-xl border-l-4 border-red-500 pl-4">
            Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
            feugiat. Morbi rutrum magna et dui.
          </p>
        </div>
      </div>
      <div className="text-2xl font-bold text-red-800  border-b-4 border-red-800 max-w-[20%] m-auto text-center mt-5 py-5">
        Get In Touch
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Leave us a message</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700">
              Feel free to reach out to us through the following channels:
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Address</h3>
            <p className="text-gray-700">No. 14 Nwadinobi Crescent, BCA Road</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-700 flex items-center">
              <FaPhoneAlt className="mr-2" /> +123 456 7890
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-gray-700 flex items-center">
              <FaEnvelope className="mr-2" /> info@example.com
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <FaInstagram size={24} />
            </a>
          </div>
          {/* Google Map Placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-md">
            <p className="text-center text-gray-600">Google Maps Placeholder</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
