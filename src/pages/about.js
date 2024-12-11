import "../../src/styles/globals.css";

import { Suspense, lazy } from "react";

// Lazy load the components
const MissionVision = lazy(() => import("../components/MissionVision"));
const Team = lazy(() => import("../components/Team"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Footer = lazy(() => import("../components/Footer"));
const Testimonial = lazy(() => import("../components/Testimonial"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <section>
      <Navbar />
      {/* Background Image Container */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about_image.png')" }}
      >
        {/* Text Section */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-2xl mx-auto opacity-90">
            <p className="text-3xl font-semibold text-black">
              About <span className="text-red-600">Us</span>
            </p>
            <p className="text-xl text-black mt-4 max-w-xl mx-auto">
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
