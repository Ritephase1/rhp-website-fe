"use client";
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
// const preferImage = "/images/agent.jpeg";
import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <section>
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about_image.png')",
          transform: "scaleX(-1)",
        }}
      >
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            {/* ADD NAVIGATION HERE */}
            <Navigation />

            <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4">
              <h1 className="text-2xl md:text-6xl font-bold text-black mt-10">
                About
                <span className="text-2xl md:text-6xl text-red-800"> Us</span>
              </h1>
              <p className="text-sm md:text-lg mr-5 bg-white text-black text-left md:p-16 p-6 rounded-lg shadow-lg max-w-sm md:max-w-xl opacity-90 border-l-4 border-red-500 pl-4">
                We build luxury and affordable homes for our clients at
                competitive costs, and we enable investors partner with us at
                different stages of our projects..
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Suspense>
          {/* <AboutUs imageUrl={preferImage} /> */}
          <AboutUs imageUrl="/images/agent.jpeg" />
        </Suspense>
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
