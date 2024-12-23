"use client";
import "../../src/styles/globals.css";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

// Lazy load the components
const MissionVision = lazy(() => import("../components/MissionVision"));
const Team = lazy(() => import("../components/Team"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Footer = lazy(() => import("../components/Footer"));
const Testimonial = lazy(() => import("../components/Testimonial"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));
const WhyInvestWithUs = lazy(() => import("../components/WhyInvest"));

export default function About() {
  // Animation Variants
  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="overflow-hidden">
      {/* Hero Section */}
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
            <Navigation />

            <motion.div
              className="relative h-full flex flex-col justify-center -ml-2 md:ml-0 md:mt-0 -mt-2 items-start pl-8 md:pl-16 text-white space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={slideFromLeft}
            >
              <h1 className="text-2xl md:text-6xl font-bold text-black mt-10">
                About
                <span className="text-2xl md:text-6xl text-red-800"> Us</span>
              </h1>
              <motion.p
                className="text-sm md:text-lg mr-5 bg-white text-black text-left md:p-16 p-6 rounded-lg shadow-lg max-w-sm md:max-w-xl opacity-90 border-l-4 border-red-500 pl-4"
                variants={fadeIn}
              >
                We build luxury and affordable homes for our clients at
                competitive costs, and we enable investors to partner with us at
                different stages of our projects.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Content Sections */}
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <AboutUs imageUrl="/images/singleAgent.png" />
          </motion.div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideFromRight}
          >
            <MissionVision />
          </motion.div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideFromLeft}
          >
            <Team />
          </motion.div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <WhyInvestWithUs />
          </motion.div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={slideFromRight}
          >
            <Testimonial />
          </motion.div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn}
          >
            <TrustedByBrands />
          </motion.div>
        </Suspense>
      </div>

      {/* Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideFromLeft}
      >
        <Footer />
      </motion.div>
    </section>
  );
}
