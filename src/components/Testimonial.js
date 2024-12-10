"use client";

import { useState, useEffect } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: "/images/team2.png",
      content: "This platform has truly transformed my learning experience!",
      name: "John Doe",
    },
    {
      id: 2,
      image: "/images/team3.png",
      content: "The user interface is sleek and easy to navigate.",
      name: "Jane Smith",
    },
    {
      id: 3,
      image: "/images/team4.png",
      content: "I highly recommend this to anyone starting out.",
      name: "Alice Brown",
    },
    {
      id: 4,
      image: "/images/about2.png",
      content: "The resources available here are top-notch.",
      name: "David Clark",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % testimonials.length // Change slide every 5 seconds
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials.length]);

  const getVisibleTestimonial = () => {
    return testimonials[currentIndex];
  };

  return (
    <div className="relative w-[90%] m-auto overflow-hidden py-10">
      {/* Carousel Wrapper */}
      <div className="flex transition-transform duration-700 ease-in-out">
        <div className="flex w-full px-4 md:px-6 mx-5 text-center items-center space-x-4 py-20 rounded-md">
          {/* Left Card */}
          <div className="flex w-full p-4 rounded-md bg-red-800 text-white">
            {/* Image on the top left */}
            <div className="flex-shrink-0 w-1/3">
              <img
                src={getVisibleTestimonial().image}
                alt={getVisibleTestimonial().name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
            </div>

            {/* Content section */}
            <div className="flex flex-col w-2/3 ml-4">
              <p className="text-md text-left mb-4">
                {getVisibleTestimonial().content}
              </p>
              <p className="mt-2 text-sm text-left">
                - {getVisibleTestimonial().name}
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex w-full p-4 rounded-md bg-white text-gray-900">
            {/* Image on the top left */}
            <div className="flex-shrink-0 w-1/3">
              <img
                src={getVisibleTestimonial().image}
                alt={getVisibleTestimonial().name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
            </div>

            {/* Content section */}
            <div className="flex flex-col w-2/3 ml-4">
              <p className="mt-2 text-sm text-left">
                - {getVisibleTestimonial().name}
              </p>
              <p className="text-md text-left mb-4">
                {getVisibleTestimonial().content}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={() => {
          setCurrentIndex(
            (prevIndex) =>
              (prevIndex - 1 + testimonials.length) % testimonials.length // Previous testimonial
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
          setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % testimonials.length // Next testimonial
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Testimonial;

// "use client";

// import { useState, useEffect } from "react";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       image: "/images/team2.png",
//       content: "This platform has truly transformed my learning experience!",
//       name: "John Doe",
//     },
//     {
//       id: 2,
//       image: "/images/team3.png",
//       content: "The user interface is sleek and easy to navigate.",
//       name: "Jane Smith",
//     },
//     {
//       id: 3,
//       image: "/images/team4.png",
//       content: "I highly recommend this to anyone starting out.",
//       name: "Alice Brown",
//     },
//     {
//       id: 4,
//       image: "/images/about2.png",
//       content: "The resources available here are top-notch.",
//       name: "David Clark",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2) // Update for two testimonials per view
//       );
//     }, 5000); // Change slides every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [testimonials.length]);

//   const getVisibleTestimonials = () => {
//     // Show two testimonials per view
//     const start = currentIndex * 2;
//     const end = start + 2;
//     return testimonials
//       .slice(start, end)
//       .concat(testimonials.slice(0, Math.max(0, end - testimonials.length)));
//   };

//   return (
//     <div className="relative w-[90%] m-auto overflow-hidden py-10">
//       {/* Carousel Wrapper */}
//       <div className="flex transition-transform duration-700 ease-in-out">
//         {getVisibleTestimonials().map((testimonial, index) => (
//           <div
//             key={index}
//             className="flex w-1/2 px-4 md:px-6 mx-5 text-center items-center border border-5 space-x-4 py-20 rounded-md"
//           >
//             {/* Image */}
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-24 h-24 rounded-full object-cover"
//             />
//             {/* Content */}
//             <div className="px-5  py-20 bg-red-800 rounded-md">
//               <p className="text-md py-5 text-center text-white">
//                 {testimonial.content}
//               </p>
//               <p className="mt-2 text-sm text-left text-white">
//                 - {testimonial.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <button
//         type="button"
//         className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//         onClick={() => {
//           setCurrentIndex(
//             (prevIndex) =>
//               (prevIndex - 1 + Math.ceil(testimonials.length / 2)) %
//               Math.ceil(testimonials.length / 2)
//           );
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           className="w-4 h-4 text-gray-800"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//       </button>
//       <button
//         type="button"
//         className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
//         onClick={() => {
//           setCurrentIndex(
//             (prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2)
//           );
//         }}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="2"
//           stroke="currentColor"
//           className="w-4 h-4 text-gray-800"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Testimonial;
