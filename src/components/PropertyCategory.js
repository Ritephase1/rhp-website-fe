// Import necessary dependencies
import React from "react";
import { FaHome, FaCar, FaTree } from "react-icons/fa";

const PropertyCategory = () => {
  // Data for the property categories
  const categories = [
    {
      icon: <FaHome size={30} />, // React Icon
      title: "Home",
      description: "Find your dream home with us.",
      linkText: "Check it",
    },
    {
      icon: <FaCar size={30} />,
      title: "Car",
      description: "Browse cars for every need.",
      linkText: "Check it",
    },
    {
      icon: <FaTree size={30} />,
      title: "Land",
      description: "Explore available lands.",
      linkText: "Check it",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 hover:text-white">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 bg-white text-black rounded-b-lg shadow-md transition-all duration-300 hover:bg-red-500 hover:text-white"
        >
          <div className="mb-2">{category.icon}</div>
          <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
          <p className="text-green-500 mb-2 hover:text-white">
            {category.description}
          </p>
          <a href="#" className="text-red-500 font-bold hover:text-white">
            {category.linkText}
          </a>
        </div>
      ))}
    </div>
  );
};

export default PropertyCategory;
