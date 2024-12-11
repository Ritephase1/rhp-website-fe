import "../styles/home.css";

export default function Projects() {
  return (
    <section className="bg-black text-white py-10 px-10">
      <img
        src="/icons/OUR_PROJECTS.png"
        alt="OUR PROJECTS"
        className="w-96 mx-auto"
      />
      <h2 className="text-lg text-left pt-3 mb-3 md:mb-8">OUR PROJECTS</h2>

      <div className="overflow-hidden animate-slide relative">
        {/* Sliding container */}
        <div className="flex space-x-8 w-max">
          {/* Duplicate cards for continuous sliding effect */}
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg text-center w-80 flex-shrink-0"
              >
                <img
                  src={`/images/project${(index % 2) + 1}.png`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="text-left mt-4">
                  <h2 className="text-lg font-light">
                    {index % 2 === 0 ? "RESIDENTIAL" : "COMMERCIAL"}
                  </h2>
                  <h1 className="text-2xl font-bold">
                    {index % 2 === 0
                      ? "Kingsdale Court"
                      : "Ekeoha Textile Market"}
                  </h1>
                  <small className="block mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    leo lacus, dapibus a turpis et, convallis cursus turpis.
                  </small>
                  <h4 className="cursor-pointer mt-4">
                    Explore Property{" "}
                    <span className="bg-white text-red-600 font-bold px-2 py-1">
                      +
                    </span>
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";

// const Project = () => {
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

// export default Project;
