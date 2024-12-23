import Footer from "@/components/Footer";
import "../styles/globals.css";
import RHP from "@/components/RHP";
import WhyBecomeAgent from "@/components/WhyBecomeAgent";
import HowToBecome from "@/components/HowToBecomeAgent";
import SignupCard from "@/components/SignupCard";
import TrustedByBrands from "@/components/TrustedByBrands";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Agent() {
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
    <section className="bg-red-400">
      {/* /* Hero Section */}
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/agent.jpeg')",
          transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r to-[#D02A1AD1] from-[#7D1910F7]" />

        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
          style={{
            transform: "scaleX(-1)",
          }}
        >
          <div className="absolute top-0 left-0 w-full z-10 mt-4">
            <Navigation />

            <motion.div
              className="relative h-full flex flex-col justify-center items-start px-4 md:px-16 text-white space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={slideFromLeft}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-10 md:mt-40">
                Agent
              </h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white text-left font-bold p-4 md:p-6 lg:p-8 shadow-lg max-w-sm md:max-w-xl opacity-90 border-l-4 border-white pl-4"
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
      {/* /* Content Sections */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideFromRight}
      >
        <RHP />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideFromLeft}
      >
        <WhyBecomeAgent />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <HowToBecome />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideFromRight}
      >
        <SignupCard />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <TrustedByBrands />
      </motion.div>
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
