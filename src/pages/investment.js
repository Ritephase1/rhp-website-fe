// pages/investment.js

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PropertyCategory from "@/components/PropertyCategory";
import RecentAdditions from "@/components/RecentAdditions";
import SignupCard from "@/components/SignupCard";
import TrustedByBrands from "@/components/TrustedByBrands";
import WhyInvestWithUs from "@/components/WhyInvest";

export default function Investment() {
  const recentAdditionProperties = [
    {
      id: 1,
      imageUrl:
        "https://landmarkhomes.sgp1.digitaloceanspaces.com/plans/kawau/Kawau-2020.jpg",
      title: "Kawau Beach House",
      address: "123 Kawau Island Rd, Kawau Island, New Zealand",
      beds: 3,
      size: 250,
      bathrooms: 2,
      parking: 2,
      features: "Sea View, Private Beach Access, Fully Furnished",
      roi: 5.2,
    },
    {
      id: 2,
      imageUrl:
        "https://landmarkhomes.sgp1.digitaloceanspaces.com/plans/kawau/Kawau-2020.jpg", // Sample image, replace with another image if you want multiple properties
      title: "Bayview Mansion",
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
      imageUrl:
        "https://landmarkhomes.sgp1.digitaloceanspaces.com/plans/kawau/Kawau-2020.jpg",
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
        height: "100vh", // Full viewport height
        width: "100%", // Full width
      }}
    >
      {/* Navigation bar */}
      <Navbar />
      {/* 
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/investment.jpeg')" }}
      > */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images//investment.jpeg')",
          // transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />
        <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Investment</h1>
          <p className="text-sm md:text-lg  max-w-sm md:max-w-xl border-l-4 border-red-500 pl-4">
            Our projects are strategically designed to maximize value, offering
            you the chance to grow your wealth through safe and reliable
            ventures in Nigeria’s dynamic real estate market.
          </p>
        </div>
      </div>

      <WhyInvestWithUs />
      <PropertyCategory />
      <RecentAdditions properties={recentAdditionProperties} />
      <SignupCard />
      <TrustedByBrands />
      {/* Content can be added here */}
      <Footer />
    </div>
  );
}
