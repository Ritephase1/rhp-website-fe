"use client";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import PropertyCategory from "@/components/PropertyCategory";
import RecentAdditions from "@/components/RecentAdditions";
import SignupCard from "@/components/SignupCard";
import WhyInvestWithUs from "@/components/WhyInvest";
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));
import "../styles/globals.css";
import Navigation from "@/components/Navigation";

export default function Investment() {
  const recentAdditionProperties = [
    {
      id: 1,
      imageUrl: "/images/building1.jpg",
      title: "Kings Court",
      address: "Aba Abia Sate",
      beds: 2,
      size: 250,
      bathrooms: 1,
      parking: 0,
      features: "Modern architecture, 24/7 security, smart home technology.",
      roi: "Up to 15% annual growth.",
    },
    {
      id: 2,
      title: "Bayview Mansion",
      imageUrl: "/images/project1.png",
      address: "456 Bayview St, Auckland, New Zealand",
      beds: 4,
      size: 350,
      bathrooms: 3,
      parking: 3,
      features: "Ocean View, Spacious Living, Pool",
      roi: 6.8,
    },
    {
      id: 3,
      imageUrl: "/images/building1.jpg",
      title: "Kawau Beach House",
      address: "123 Kawau Island Rd, Kawau Island, New Zealand",
      beds: 3,
      size: 250,
      bathrooms: 2,
      parking: 2,
      features: "Sea View, Private Beach Access, Fully Furnished",
      roi: 5.2,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffcccc", // Light red color
        overflowX: "hidden", // Prevent horizontal overflow
        width: "100%", // Full width
      }}
    >
      {/* Hero Section with Scroll Animation */}
      <motion.div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat hero-bg"
        style={{
          backgroundImage: "url('/images/investment.jpeg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            <Navigation />
            <motion.div
              className="relative h-full flex flex-col justify-center items-start pl-4 sm:pl-8 md:pl-16 text-white mt-10 md:mt-40 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Hero Text Section */}
              <motion.h1
                className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Investment
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm md:text-lg max-w-[80%] sm:max-w-[70%] md:max-w-xl border-l-4 border-red-500 text-left pl-4"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Discover lucrative investment opportunities with Rhino Homes and
                Properties Ltd, your trusted partner in real estate.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Why Invest Section with Scroll-Based Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <WhyInvestWithUs />
      </motion.div>

      {/* Property Categories Section with Scroll-Based Animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <PropertyCategory />
      </motion.div>

      {/* Recent Additions Section with Scroll-Based Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <RecentAdditions properties={recentAdditionProperties} />
      </motion.div>

      {/* Signup Card Section with Scroll-Based Animation */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SignupCard />
      </motion.div>

      {/* Trusted By Brands Section with Scroll-Based Animation */}
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            staggerChildren: 0.3,
          }}
        >
          <TrustedByBrands />
        </motion.div>
      </Suspense>

      {/* Footer Section with Scroll-Based Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
