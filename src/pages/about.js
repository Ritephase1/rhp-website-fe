import "../../src/styles/globals.css";

import { Suspense, lazy } from "react";

// Lazy load the components
const MissionVision = lazy(() => import("../components/MissionVision"));
const Team = lazy(() => import("../components/Team"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Footer = lazy(() => import("../components/Footer"));
const Testimonial = lazy(() => import("../components/Testimonial"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));

const WhyInvestWithUs = lazy(() => import("../components/WhyInvest"));
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <section>
      <Navbar />
      {/* Hero Section */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about_image.png')",
          transform: "scaleX(-1)",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r to-[#000000D1] from-[#C4C4C400]" /> */}
        <div
          className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Contact{" "}
            <span className="text-4xl md:text-6xl text-red-800"> Us</span>
          </h1>
          <p className="text-base md:text-lg    bg-white text-black md:p-16 p-6 rounded-lg shadow-lg max-w-xl opacity-90 border-l-4 border-red-500 pl-4">
            We build luxury and affordable homes for our clients at competitive
            costs, and we enable investors partner with us at different stages
            of our projects..
          </p>
        </div>
      </div>

      <div>
        {/* Lazy load the AboutUs component */}
        <AboutUs imageUrl="/images/about2.png" />

        {/* Suspense wrapper for MissionVision and Team components */}
        <Suspense fallback={<div>Loading...</div>}>
          <MissionVision />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Team />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <WhyInvestWithUs />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Testimonial />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <TrustedByBrands />
        </Suspense>
      </div>
      <Footer />
    </section>
  );
}
