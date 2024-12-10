"use client";
import { useState } from "react";
import "../../src/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FAQ() {
  // State to track which questions are expanded
  const [expanded, setExpanded] = useState({});

  // Toggle the expanded state for a specific question
  const toggleAnswer = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      {/* Image Section */}
      <Navbar />
      <div
        className="relative w-full h-80 sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/faq.png')" }}
      >
        <h1 className="absolute inset-0 text-white text-4xl font-bold text-center flex items-center justify-center">
          FAQ
        </h1>
      </div>

      {/* FAQ Content Section */}
      <div className="px-6 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="mb-4">
              <h2
                className="text-2xl text-red font-semibold cursor-pointer"
                onClick={() => toggleAnswer(1)}
              >
                What does Rhino Homes and Properties Ltd specialize in?
                <span className="ml-2 text-xl">{expanded[1] ? "-" : "+"}</span>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[1] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expanded[1] && (
                  <p className="transition-all ease-in-out duration-300">
                    We specialize in providing top-tier real estate solutions,
                    including residential and commercial property development,
                    sales, leasing, and investment opportunities across Nigeria.
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAnswer(2)}
              >
                Why should I invest with Rhino Homes?
                <span className="ml-2 text-xl">{expanded[2] ? "-" : "+"}</span>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[2] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expanded[2] && (
                  <p className="transition-all ease-in-out duration-300">
                    Investing with Rhino Homes offers reliable returns, secure
                    investment opportunities, and access to premium real estate
                    options in both residential and commercial sectors.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAnswer(3)}
              >
                What is Residential and commercial property?
                <span className="ml-2 text-xl">{expanded[3] ? "-" : "+"}</span>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[3] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expanded[3] && (
                  <p className="transition-all ease-in-out duration-300">
                    Residential property refers to buildings intended for
                    housing, while commercial property is used for business
                    activities like offices, shops, and industrial spaces.
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAnswer(4)}
              >
                What are the various investments available at RHP?
                <span className="ml-2 text-xl">{expanded[4] ? "-" : "+"}</span>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[4] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expanded[4] && (
                  <p className="transition-all ease-in-out duration-300">
                    At Rhino Homes, you can invest in residential and commercial
                    properties, real estate development projects, and leasing
                    opportunities, each tailored to your investment needs.
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h2
                className="text-2xl font-semibold cursor-pointer"
                onClick={() => toggleAnswer(5)}
              >
                How can I invest with Rhino Homes?
                <span className="ml-2 text-xl">{expanded[5] ? "-" : "+"}</span>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded[5] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                {expanded[5] && (
                  <p className="transition-all ease-in-out duration-300">
                    To invest, simply reach out to our sales team, sign the
                    necessary agreements, and choose your preferred investment
                    package based on your budget and preferences.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
