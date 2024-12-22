// import React from "react";
import { motion } from "framer-motion";
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

  // Animation variants for Framer Motion
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/blog.jpeg')",
        }}
      >
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            {/* Navigation */}
            <Navigation />

            <motion.div
              className="flex justify-between items-center gap-4 px-4 md:px-16 mt-10 md:mt-60"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                className="flex flex-col justify-center items-start text-black md:space-y-4 space-y-2"
                variants={slideFromLeft}
              >
                <h1 className="text-2xl md:text-6xl font-bold">Our Blog</h1>
                <p className="text-sm md:text-lg text-left max-w-[70%] md:max-w-xl border-l-4 border-red-500 pl-4">
                  Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
                  feugiat. Morbi rutrum magna et dui.
                </p>
              </motion.div>
              {/* Logo */}
              <motion.div className="w-46 h-46 mr-4" variants={slideFromRight}>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={200}
                  height={400}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Blog Content */}
      <motion.div
        className="flex flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="w-full lg:w-[70%] order-1"
          variants={slideFromLeft}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {blogData.map((data, index) => (
            <BlogCard key={index} {...data} />
          ))}
        </motion.div>
        <motion.div
          className="w-full lg:w-[30%] order-2 lg:order-1"
          variants={slideFromRight}
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <BlogRightSection categories={categories} latestPosts={latestPosts} />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Blog;
