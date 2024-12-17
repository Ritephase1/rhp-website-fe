// "use client";
// import { useState } from "react";
// import "../../src/styles/globals.css";
// import Footer from "@/components/Footer";
// import Navigation from "@/components/Navigation";

// export default function FAQ() {
//   const [expanded, setExpanded] = useState({});

//   const toggleAnswer = (index) => {
//     setExpanded((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <section>
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/images/faq.png')" }}
//       >
//         <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
//           <div className="absolute top-0 left-0 w-full z-10 mt-4">
//             <Navigation />
//           </div>
//         </section>
//       </div>

//       {/* FAQ Content */}
//       <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12 lg:py-16">
//         <h1 className="text-center text-xl md:text-4xl font-bold mb-8">
//           Frequently Asked Questions (FAQs)
//         </h1>
//         <div className="flex flex-col lg:flex-row justify-between gap-8">
//           {/* Left Section */}
//           <div className="lg:w-1/2">
//             {faqData
//               .slice(0, Math.ceil(faqData.length / 2))
//               .map((item, index) => (
//                 <ExpandableItem
//                   key={index}
//                   index={index}
//                   question={item.question}
//                   answer={item.answer}
//                   expanded={expanded[index]}
//                   toggleAnswer={toggleAnswer}
//                 />
//               ))}
//           </div>

//           {/* Right Section */}
//           <div className="lg:w-1/2">
//             {faqData.slice(Math.ceil(faqData.length / 2)).map((item, index) => (
//               <ExpandableItem
//                 key={index + Math.ceil(faqData.length / 2)}
//                 index={index + Math.ceil(faqData.length / 2)}
//                 question={item.question}
//                 answer={item.answer}
//                 expanded={expanded[index + Math.ceil(faqData.length / 2)]}
//                 toggleAnswer={toggleAnswer}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </section>
//   );
// }

// function ExpandableItem({ index, question, answer, expanded, toggleAnswer }) {
//   return (
//     <div className="mb-4 border-b border-gray-300 pb-4">
//       <h2
//         className="text-md md:text-xl font-semibold cursor-pointer flex justify-between items-center"
//         onClick={() => toggleAnswer(index)}
//       >
//         <span>{question}</span>
//         <span className="text-xl font-bold">{expanded ? "−" : "+"}</span>
//       </h2>
//       <div
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//           expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <p className="mt-2 text-gray-600 text-sm md:text-base">{answer}</p>
//       </div>
//     </div>
//   );
// }

// const faqData = [
//   {
//     question: "What does Rhino Homes and Properties Ltd specialize in?",
//     answer:
//       "We specialize in providing top-tier real estate solutions, including residential and commercial property development, sales, leasing, and investment opportunities across Nigeria.",
//   },
//   {
//     question: "Why should I invest with Rhino Homes?",
//     answer:
//       "We offer:\n• Prime property locations.\n• Transparent processes and legal documentation.\n• High ROI through property appreciation and rental income.\n• Sustainable and innovative developments that align with market trends.",
//   },
//   {
//     question: "What is the expected ROI on investments with Rhino Homes?",
//     answer:
//       "Our projects typically deliver ROI ranging from 10–20% annually, with rental-focused investments yielding up to 12% per annum. Actual ROI depends on the specific property and market conditions.",
//   },
//   {
//     question: "How do I start investing with Rhino Homes?",
//     answer:
//       "Getting started is easy:\n• Explore our current projects on our website or by contacting us.\n• Schedule a consultation with our investment advisors.\n• Complete the necessary paperwork and payment processes to secure your investment.",
//   },
//   {
//     question: "Do you offer flexible payment plans?",
//     answer:
//       "Yes, we provide flexible payment plans tailored to suit your financial goals, ensuring you can invest comfortably.",
//   },
//   {
//     question: "Are Rhino Homes' projects located in prime areas?",
//     answer:
//       "Absolutely! Our properties are strategically located in high-demand areas across Nigeria, such as Lekki, Abuja, Abia, and Port Harcourt, offering strong potential for appreciation.",
//   },
//   {
//     question: "How secure are investments with Rhino Homes?",
//     answer:
//       "All our transactions are legally backed, and we ensure full transparency. We also provide proper documentation, including Certificates of Occupancy (C of O) and other relevant property titles.",
//   },
//   {
//     question: "Can I visit the properties before investing?",
//     answer:
//       "Yes, we encourage property tours for all prospective investors. Contact us to schedule a guided visit to any of our ongoing or completed projects.",
//   },
//   {
//     question: "Do you provide property management services?",
//     answer:
//       "Yes, we offer professional property management services, including tenant sourcing, maintenance, and rent collection, to ensure your investment remains hassle-free.",
//   },
//   {
//     question: "How can I contact Rhino Homes for more information?",
//     answer:
//       "You can reach us through:\n• Phone: +234 810 139 3279\n• Email: sales@rhp.ng\n• Website: www.rhp.ng\n• Or visit our office at Lekki Lagos.",
//   },
// ];

"use client";
import { useState } from "react";
import "../../src/styles/globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function FAQ() {
  const [expanded, setExpanded] = useState({});

  // Toggle Answer Visibility
  const toggleAnswer = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/faq.png')" }}
      >
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            <Navigation />
          </div>
        </section>
      </div>

      {/* FAQ Content */}
      <div className="px-4 sm:px-8 md:px-16 py-8 md:py-12 lg:py-16">
        <h1 className="text-center text-xl md:text-4xl font-bold mb-8">
          Frequently Asked Questions (FAQs)
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
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
      {/* Question Header */}
      <h2
        className="text-md md:text-xl font-semibold cursor-pointer flex justify-between items-center"
        onClick={() => toggleAnswer(index)}
      >
        <span>{question}</span>
        {/* Dynamic Icon */}
        <span className="text-xl font-bold">{expanded ? "−" : "+"}</span>
      </h2>

      {/* Answer Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="mt-2 text-gray-600 text-sm md:text-base">{answer}</p>
      </div>
    </div>
  );
}

// FAQ Data
const faqData = [
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
      "You can reach us through:\n• Phone: +234 810 139 3279\n• Email: sales@rhp.ng\n• Website: www.rhp.ng\n• Or visit our office at Lekki Lagos.",
  },
];
