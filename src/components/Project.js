"use client"; // Ensures this runs only on the client side for Next.js

import { useEffect } from "react";
import Image from "next/image";

export default function Project() {
  useEffect(() => {
    // Import the Flowbite Carousel functionality dynamically if you are using Flowbite
    if (typeof window !== "undefined") {
      import("flowbite").then((module) => {
        // Flowbite JS will handle the carousel
      });
    }
  }, []);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div
          className="hidden duration-700 bg-black ease-in-out"
          data-carousel-item
        >
          <Image
            src="/images/carousel/carousel-1.svg"
            alt="Slide 1"
            layout="fill"
            className="absolute block w-full bg-black object-cover"
          />
        </div>
        {/* Item 2 */}
        <div
          className="hidden duration-700 bg-black ease-in-out"
          data-carousel-item
        >
          <Image
            src="/images/carousel/carousel-2.svg"
            alt="Slide 2"
            layout="fill"
            className="absolute block w-full bg-black object-cover"
          />
        </div>
        {/* Item 3 */}
        <div
          className="hidden duration-700 bg-black ease-in-out"
          data-carousel-item
        >
          <Image
            src="/images/carousel/carousel-3.svg"
            alt="Slide 3"
            layout="fill"
            className="absolute block bg-black w-full object-cover"
          />
        </div>
        {/* Item 4 */}
        <div
          className="hidden duration-700 bg-black ease-in-out"
          data-carousel-item
        >
          <Image
            src="/images/carousel/carousel-4.svg"
            alt="Slide 4"
            layout="fill"
            className="absolute bg-black block w-full object-cover"
          />
        </div>
        {/* Item 5 */}
        <div
          className="hidden duration-700 bg-black ease-in-out"
          data-carousel-item
        >
          <Image
            src="/images/carousel/carousel-5.svg"
            alt="Slide 5"
            layout="fill"
            className="absolute bg-black block w-full object-cover"
          />
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: 5 }, (_, index) => (
          <button
            key={index}
            type="button"
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-600"
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
