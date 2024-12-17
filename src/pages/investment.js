// pages/investment.js

import Footer from "@/components/Footer";
import PropertyCategory from "@/components/PropertyCategory";
import RecentAdditions from "@/components/RecentAdditions";
import SignupCard from "@/components/SignupCard";
import TrustedByBrands from "@/components/TrustedByBrands";
import WhyInvestWithUs from "@/components/WhyInvest";
import hello from "../../public/images/building1.png";

import "../styles/globals.css";
import Navigation from "@/components/Navigation";
export default function Investment() {
  const recentAdditionProperties = [
    {
      id: 1,
      imageUrl: "/public/images/building1.jpg",
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
      imageUrl: "/public/images/building1.jpg", // Sample image, replace with another image if you want multiple properties
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
      imageUrl: "/public/images/building1.jpg",
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
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images//investment.jpeg')",
          // transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />

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

            <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white mt-20 md:mt-60 space-y-4 ">
              <h1 className="text-2xl md:text-6xl font-bold">Investment</h1>
              <p className="text-sm md:text-lg  max-w-[60%] md:max-w-xl border-l-4 border-red-500 text-left pl-4">
                Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
                feugiat. Morbi rutrum magna et dui.
              </p>
            </div>
          </div>
        </section>
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
