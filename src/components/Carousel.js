import { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full bg-black text-white py-12 px-16">
      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden h-96 rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index > currentIndex
                ? "translate-x-full"
                : "-translate-x-full"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
              <h2 className="text-lg font-light">{item.type}</h2>
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 text-white rounded-full p-2 hover:bg-white/50 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
