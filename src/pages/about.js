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
      {/* Background Image Container */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about_image.png')",
          transform: "scaleX(-1)",
        }}
      >
        {/* Text Section */}
        <div
          className="absolute top-1/2 left-15 transform -translate-y-1/2 text-left"
          style={{ transform: "scaleX(-1)" }}
        >
          <div className="bg-white text-black md:p-16 p-6 rounded-lg shadow-lg max-w-xl opacity-90">
            <p className="md:text-3xl text-xl font-semibold text-black">
              About <span className="text-red-600">Us</span>
            </p>
            <p className="md:text-xl text-md text-black mt-4">
              We are committed to transforming dreams into reality by creating
              exceptional living and working spaces.
            </p>
          </div>
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
