"use client";

import Navigation from "./Navigation";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
// import { SearchIcon } from "@heroicons/react/24/solid";
// import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Navigation Component */}
      <div className="absolute top-0 left-0 w-full z-10 mt-4">
        <Navigation />
      </div>

      <div className="bg-white text-black p-1 rounded-full border-2 border-white mb-10">
        <small className="text-sm font-bold md:text-lg md:p-5">
          LET US GUIDE YOUR HOME
        </small>
      </div>

      {/* Hero Content */}
      <h1 className="text-2xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
        Rhino Homes & Properties
      </h1>
      <p className="text-sm w-[80%] md:text-2xl text-white mx-auto mb-10">
        We are committed to transforming dreams into reality by creating
        exceptional living and working spaces.
      </p>

      {/* Search Bar */}
      <div className="flex items-center w-[90%] max-w-md border-2 rounded-full overflow-hidden bg-white mx-auto">
        <input
          type="text"
          placeholder="Enter Name, Keywords..."
          className="flex-1 px-6 py-3 text-gray-800text-sm outline-none rounded-l-full"
        />
        <button className="bg-red-600 p-3 rounded-r-full flex items-center justify-center">
          <FaSearch className="size-6 text-white" />
        </button>
      </div>

      <div className="mt-10 text-white">
        <p className="md:text-xl">What are you looking for ?</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Commercial Image */}
        <div className="flex-1 max-w-[150px] text-center">
          <Image
            src="/icons/commercial.png"
            alt="commercial button"
            layout="intrinsic"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>

        {/* Residential Image */}
        <div className="flex-1 max-w-[150px] text-center">
          <Image
            src="/icons/residential.png"
            alt="residential button"
            layout="intrinsic"
            width={120}
            height={120}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
