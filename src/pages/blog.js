// import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import blogData from "../../src/app/api/blog_card.json";
import BlogCard from "@/components/BlogCard";
import Navigation from "@/components/Navigation";
import BlogRightSection from "@/components/BlogRightSection";
import Footer from "@/components/Footer";

const Blog = () => {
  const categories = ["Commercial", "Residential", "Construction", "Materials"];
  const latestPosts = [
    {
      imageUrl: "/images/project3.png",
      title: "Modern Apartments",
      description: "Discover the latest in urban living.",
    },
    {
      imageUrl: "/images/footer_img.png",
      title: "Eco-Friendly Homes",
      description: "Sustainable housing for a better future.",
    },
    {
      imageUrl: "/images/project4.png",
      title: "Luxury Villas",
      description: "Experience opulence and comfort.",
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blog.jpeg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" /> */}

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

            <div className="flex justify-between items-center gap-4 px-4 md:px-16 mt-20 md:mt-60">
              <div className="flex flex-col justify-center items-start text-black space-y-4">
                <h1 className="text-2xl md:text-6xl font-bold">Our Blog</h1>
                <p className="text-sm md:text-lg text-left max-w-[60%] md:max-w-xl border-l-4 border-red-500 pl-4">
                  Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
                  feugiat. Morbi rutrum magna et dui.
                </p>
              </div>
              {/* Logo for the organization */}
              <div className="w-46 h-46  mr-4">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={200} // Ensure dimensions for responsive sizing
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-[70%]  order-1">
          {blogData.map((data, index) => (
            <BlogCard key={index} {...data} />
          ))}
        </div>
        <div className="w-full lg:w-[30%] order-2 lg:order-1">
          <BlogRightSection categories={categories} latestPosts={latestPosts} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Blog;
