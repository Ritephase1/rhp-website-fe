"use client";
import { useState } from "react";
import "../../src/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";

export default function FAQ() {
  const [expanded, setExpanded] = useState({});

  const toggleAnswer = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      {/* <Navbar /> */}

      {/* Image Section */}

      {/* <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/faq.png')",
        }}
      ></div> */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/faq.png')",
          // transform: "scaleX(-1)",
        }}
      >
        {/* <div
          className="absolute top-0 left-0 w-full z-10 mt-4"
          style={{
            transform: "scaleX(-1)",
          }}
        >   */}

        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
          style={
            {
              // transform: "scaleX(-1)",
            }
          }
        >
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            {/* ADD NAVIGATION HERE */}
            <Navigation />

            {/* <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4">
              <h1 className="text-2xl md:text-6xl font-bold text-black mt-10">
                About
                <span className="text-2xl md:text-6xl text-red-800"> Us</span>
              </h1>
              <p className="text-sm md:text-lg mr-5 bg-white text-black md:p-16 p-6 rounded-lg shadow-lg max-w-sm md:max-w-xl opacity-90 border-l-4 border-red-500 pl-4">
                We build luxury and affordable homes for our clients at
                competitive costs, and we enable investors partner with us at
                different stages of our projects..
              </p>
            </div> */}
          </div>
        </section>
      </div>

      {/* FAQ Content Section */}
      <div className="px-6 lg:px-16 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {faqData
              .slice(0, Math.ceil(faqData.length / 2))
              .map((item, index) => (
                <ExpandableItem
                  key={index}
                  index={index}
                  question={item.question}
                  answer={item.answer}
                  expanded={expanded[index]}
                  toggleAnswer={toggleAnswer}
                />
              ))}
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
              <ExpandableItem
                key={index + Math.ceil(faqData.length / 2)}
                index={index + Math.ceil(faqData.length / 2)}
                question={item.question}
                answer={item.answer}
                expanded={expanded[index + Math.ceil(faqData.length / 2)]}
                toggleAnswer={toggleAnswer}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

function ExpandableItem({ index, question, answer, expanded, toggleAnswer }) {
  return (
    <div className="mb-4 border-b border-gray-300 pb-4">
      <h2
        className="text-md md:text-2xl font-semibold cursor-pointer"
        onClick={() => toggleAnswer(index)}
      >
        {question}
        <span className="ml-2 text-lg md:text-xl">{expanded ? "-" : "+"}</span>
      </h2>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {expanded && (
          <p className="mt-2 text-sm md:text-base text-gray-600 transition-all duration-300">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "What does Rhino Homes and Properties Ltd specialize in?",
    answer:
      "We specialize in providing top-tier real estate solutions, including residential and commercial property development, sales, leasing, and investment opportunities across Nigeria.",
  },
  {
    question: "Why should I invest with Rhino Homes?",
    answer:
      "Investing with Rhino Homes offers reliable returns, secure investment opportunities, and access to premium real estate options in both residential and commercial sectors.",
  },
  {
    question: "What is Residential and Commercial property?",
    answer:
      "Residential property refers to buildings intended for housing, while commercial property is used for business activities like offices, shops, and industrial spaces.",
  },
  {
    question: "What are the various investments available at RHP?",
    answer:
      "At Rhino Homes, you can invest in residential and commercial properties, real estate development projects, and leasing opportunities, each tailored to your investment needs.",
  },
  {
    question: "How can I invest with Rhino Homes?",
    answer:
      "To invest, simply reach out to our sales team, sign the necessary agreements, and choose your preferred investment package based on your budget and preferences.",
  },
];
