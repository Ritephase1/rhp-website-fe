"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalTime = 9000; // 3 seconds timer

  useEffect(() => {
    // Load data from the JSON file
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading project data:", err));
  }, []);

  // Auto slide timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, slideIntervalTime);
    return () => clearInterval(interval);
  }, [projects]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gray-500 max-w-full text-white py-10 px-6">
      <h2 className="text-lg text-center pt-3 mb-6 font-bold">OUR PROJECTS</h2>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div className="relative h-96 rounded-lg">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {/* Project Details */}
                <div className="absolute bottom-5 left-5 p-4 bg-black bg-opacity-60 rounded-lg text-white">
                  <h2 className="text-lg font-light">{project.category}</h2>
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <p className="mt-2 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-6 transform ml-10 -translate-y-1/2 bg-red-800 hover:text-red-800 hover:bg-white/40 text-white rounded-full p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-6 transform mr-10 -translate-y-1/2 bg-red-800 hover:bg-white/40 hover:text-red-800 text-white rounded-full p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
