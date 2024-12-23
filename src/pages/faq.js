"use client";
import { useState } from "react";
import "../../src/styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion"; // Import framer-motion

export default function FAQ() {
  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/faq.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            <Navigation />
          </div>
        </section>
      </motion.div>

      {/* FAQ Content */}
      <motion.div
        className="px-4 sm:px-8 md:px-16 py-8 md:py-12 lg:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-center text-xl md:text-4xl font-bold mb-8">
          Frequently Asked Questions (FAQs)
        </h1>

        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 * index }}
            >
              <ExpandableItem
                index={index}
                question={item.question}
                answer={item.answer}
                expanded={expanded === index}
                toggleAnswer={toggleAnswer}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Footer />
    </section>
  );
}

function ExpandableItem({ index, question, answer, expanded, toggleAnswer }) {
  return (
    <div
      className="border-b border-gray-300 pb-4 transition-all"
      onClick={() => toggleAnswer(index)}
    >
      {/* Question */}
      <motion.h2
        className="text-md md:text-xl font-semibold cursor-pointer flex justify-between items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 * index }}
      >
        <span>{question}</span>
        {question && (
          <span className="text-xl font-bold">{expanded ? "−" : "+"}</span>
        )}
      </motion.h2>

      {/* Answer */}
      <motion.div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-2 text-gray-600 text-sm md:text-base">{answer}</p>
      </motion.div>
    </div>
  );
}

const faqData = [
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  { question: "", answer: "" },
  {
    question: "What does Rhino Homes and Properties Ltd specialize in?",
    answer:
      "We specialize in providing top-tier real estate solutions, including residential and commercial property development, sales, leasing, and investment opportunities across Nigeria.",
  },
  {
    question: "Why should I invest with Rhino Homes?",
    answer:
      "We offer:\n• Prime property locations.\n• Transparent processes and legal documentation.\n• High ROI through property appreciation and rental income.\n• Sustainable and innovative developments that align with market trends.",
  },
  {
    question: "What is the expected ROI on investments with Rhino Homes?",
    answer:
      "Our projects typically deliver ROI ranging from 10–20% annually, with rental-focused investments yielding up to 12% per annum. Actual ROI depends on the specific property and market conditions.",
  },
  {
    question: "How do I start investing with Rhino Homes?",
    answer:
      "Getting started is easy:\n• Explore our current projects on our website or by contacting us.\n• Schedule a consultation with our investment advisors.\n• Complete the necessary paperwork and payment processes to secure your investment.",
  },
  {
    question: "Do you offer flexible payment plans?",
    answer:
      "Yes, we provide flexible payment plans tailored to suit your financial goals, ensuring you can invest comfortably.",
  },
  {
    question: "Are Rhino Homes' projects located in prime areas?",
    answer:
      "Absolutely! Our properties are strategically located in high-demand areas across Nigeria, such as Lekki, Abuja, Abia, and Port Harcourt, offering strong potential for appreciation.",
  },
  {
    question: "How secure are investments with Rhino Homes?",
    answer:
      "All our transactions are legally backed, and we ensure full transparency. We also provide proper documentation, including Certificates of Occupancy (C of O) and other relevant property titles.",
  },
  {
    question: "Can I visit the properties before investing?",
    answer:
      "Yes, we encourage property tours for all prospective investors. Contact us to schedule a guided visit to any of our ongoing or completed projects.",
  },
  {
    question: "Do you provide property management services?",
    answer:
      "Yes, we offer professional property management services, including tenant sourcing, maintenance, and rent collection, to ensure your investment remains hassle-free.",
  },
  {
    question: "How can I contact Rhino Homes for more information?",
    answer:
      "You can reach us through:\n\n\t• Phone: +234 810 139 3279\n• Email: sales@rhp.ng\n• Website: www.rhp.ng\n• Or visit our office at Lekki Lagos.",
  },
];
