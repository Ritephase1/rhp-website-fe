// pages/investment.js
import { lazy, Suspense } from "react";
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
        height: "100vh", // Full viewport height
        width: "100%", // Full width
      }}
    >
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images//investment.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" />

        <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center">
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            {/* ADD NAVIGATION HERE */}
            <Navigation />

            <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white mt-10 md:mt-60 space-y-4 ">
              <h1 className="text-2xl md:text-6xl font-bold">Investment</h1>
              <p className="text-sm md:text-lg  max-w-[60%] md:max-w-xl border-l-4 border-red-500 text-left pl-4">
                Discover lucrative investment opportunities with Rhino Homes and
                Properties Ltd, your trusted partner in real estate.
              </p>
            </div>
          </div>
        </section>
      </div>
      <WhyInvestWithUs />
      <PropertyCategory />
      <RecentAdditions properties={recentAdditionProperties} />
      <SignupCard />
      <Suspense fallback={<div>Loading...</div>}>
        <TrustedByBrands />
      </Suspense>
      <Footer />
    </div>
  );
}
