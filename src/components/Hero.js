"use client";

import Navigation from "./Navigation";

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
        <small className="text-sm  font-bold md:text-lg">
          LET US GUIDE YOUR HOME
        </small>
      </div>

      {/* Hero Content */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
        Rhino Homes & Properties
      </h1>
      <p className="text-sm w-[80%] md:text-xl text-white mx-auto mb-8">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            color="white"
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
          >
            <path
              d="M10 2a8 8 0 105.293 14.707l4 4a1 1 0 001.414-1.414l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="mt-10 text-white">
        <p>What are you looking for ?</p>
      </div>

      {/* Image Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {/* Commercial Image */}
        <div className="flex-1 max-w-[150px] text-center">
          <img
            src="/icons/commercial.png"
            alt="commercial button"
            className="w-full h-auto max-w-[120px] rounded-lg"
          />
        </div>

        {/* Residential Image */}
        <div className="flex-1 max-w-[150px] text-center">
          <img
            src="/icons/residential.png"
            alt="residential"
            className="w-full h-auto max-w-[120px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
