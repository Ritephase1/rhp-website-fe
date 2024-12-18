// Import necessary dependencies
import React from "react";
import { FaHome, FaCar, FaTree } from "react-icons/fa";

const PropertyCategory = () => {
  // Data for the property categories
  const categories = [
    {
      icon: <FaHome size={30} />, // React Icon
      title: "Luxury Residential Estates",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ante pellentesque tristique et lobortis interdum mollis..",
      linkText: "Check it",
    },
    {
      icon: <FaCar size={30} />,
      title: "Commercial Spaces",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ante pellentesque tristique et lobortis interdum mollis..",
      linkText: "Check it",
    },
    {
      icon: <FaTree size={30} />,
      title: "Affordable Housing Scheme",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ante pellentesque tristique et lobortis interdum mollis..",
      linkText: "Check it",
    },
  ];

  return (
    <div className="bg-[#FAECEC]">
      <div className="items-center  py-5 text-center w-[60%] m-auto">
        <p className="text-base text-red-600 font-bold">Property Category</p>
        <h2 className="md:text-3xl text-md font-bold text-black p-5">
          Choose Property by Category{" "}
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-6 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col items-left justify-center p-4 bg-white text-black rounded-b-xl shadow-md transition-all duration-300 hover:bg-[#DA221FF7] group-hover:text-white"
          >
            <div className="mb-2 group-hover:text-white">{category.icon}</div>
            <h2 className="text-lg font-semibold mb-2 group-hover:text-white">
              {category.title}
            </h2>
            <p className="text-emerald-800 mb-2 group-hover:text-white">
              {category.description}
            </p>
            <a
              href="#"
              className="text-red-500 font-bold group-hover:text-white"
            >
              {category.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCategory;
