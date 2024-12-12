"use client";
import { useState } from "react";
import "../../src/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
      <Navbar />

      {/* Image Section */}

      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/faq.png')",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400] flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">FAQ</h1>
        </div> */}
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
