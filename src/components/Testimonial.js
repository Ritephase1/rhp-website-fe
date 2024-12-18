"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/team2.png",
      title: "ENGR",
      content: "This platform has truly transformed my learning experience!",
      name: "John Doe",
    },
    {
      id: 2,
      image: "/images/team3.png",
      title: "ENGR",
      content: "The user interface is sleek and easy to navigate.",
      name: "Jane Smith",
    },
    {
      id: 3,
      image: "/images/team4.png",
      title: "ENGR",
      content: "I highly recommend this to anyone starting out.",
      name: "Alice Brown",
    },
    {
      id: 4,
      image: "/images/about2.png",
      title: "ENGR",
      content: "The resources available here are top-notch.",
      name: "David Clark",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonial = () => testimonials[currentIndex];

  return (
    <div className="relative w-[90%] m-auto overflow-hidden py-10">
      <h2 className="mb-2 text-base font-bold md:text-2xl md:mb-5">
        Testimonials
      </h2>
      {/* Carousel Wrapper */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Card */}
        <div className="flex w-full md:h-40 lg:h-80 md:w-1/2 p-4 md:p-4 rounded-md bg-red-800 text-white">
          <div className="flex-shrink-0 w-1/3">
            <Image
              src={getVisibleTestimonial().image} // Dynamically passed image source
              alt={getVisibleTestimonial().name}
              width={96} // Equivalent to w-24 (24 * 4 for responsive sizing)
              height={96} // Equivalent to h-24 (24 * 4 for responsive sizing)
              className="rounded-md object-contain mb-4"
              // layout="intrinsic" // Ensures the image maintains its aspect ratio
            />
          </div>
          <div className="flex flex-col w-2/3 ml-4">
            <h2 className="font-bold text-left text-lg text-white">
              <div className="flex gap-20">
                {getVisibleTestimonial().title}
                <RiDoubleQuotesR className="text-xl font-bold" />
              </div>
            </h2>
            <p className="mt-1 text-lg mb-5 text-left">
              - {getVisibleTestimonial().name}
            </p>
            <p className="text-sm text-left mb-4">
              {getVisibleTestimonial().content}
            </p>
          </div>
        </div>

        {/* Right Card (Hidden on Small Screens) */}
        <div className="hidden shadow-lg  md:h-40 lg:h-80 border-b-4 border-red-500 md:flex w-full md:w-1/2 p-4 rounded-md bg-white text-gray-900">
          <div className="flex-shrink-0 w-1/3">
            <Image
              src={getVisibleTestimonial().image} // Dynamically passed image source
              alt={getVisibleTestimonial().name}
              width={96} // Equivalent to w-24 (24 * 4 for responsive sizing)
              height={96} // Equivalent to h-24 (24 * 4 for responsive sizing)
              className="rounded-md object-contain mb-4"
              // layout="intrinsic" // Ensures the image maintains its aspect ratio
            />
          </div>
          <div className="flex flex-col w-2/3 ml-4">
            <h2 className="font-bold text-left text-lg">
              <div className="flex gap-20">
                {getVisibleTestimonial().title}
                <RiDoubleQuotesR className="text-xl text-red-800 font-bold" />
              </div>
            </h2>
            <p className="mt-1 text-md mb-3 text-left">
              - {getVisibleTestimonial().name}
            </p>
            <p className="text-sm text-left mb-4">
              {getVisibleTestimonial().content}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={() => {
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + testimonials.length) % testimonials.length
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4 text-gray-800"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Testimonial;
