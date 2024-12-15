import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import RHP from "@/components/RHP";
import WhyBecomeAgent from "@/components/WhyBecomeAgent";
import HowToBecome from "@/components/HowToBecomeAgent";
import SignupCard from "@/components/SignupCard";
import TrustedByBrands from "@/components/TrustedByBrands";
import Navigation from "@/components/Navigation";

export default function Agent() {
  return (
    <section className="bg-red-400">
      {/* <Navbar /> */}
      {/* <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/agent.jpeg')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r to-[#D02A1AD1] from-[#7D1910F7]" />
        <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Agent</h1>
          <p className="text-sm md:text-lg  max-w-[80%] md:max-w-xl border-l-4 border-white pl-4">
            Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
            feugiat. Morbi rutrum magna et dui.{" "}
          </p>
        </div>
      </div> */}

      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/agent.jpeg')",
          transform: "scaleX(-1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r to-[#D02A1AD1] from-[#7D1910F7]" />
        {/* <div
          className="absolute top-0 left-0 w-full z-10 mt-4"
          style={{
            transform: "scaleX(-1)",
          }}
        >   */}

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
              <h1 className="text-2xl md:text-6xl font-bold text-white md:mt-40 mt-10">
                Agent
                {/* <span className="text-2xl md:text-6xl text-red-800"> Us</span> */}
              </h1>
              <p className="text-sm md:text-lg mr-5 text-white text-left font-bold md:p-16 p-6  shadow-lg max-w-sm md:max-w-xl opacity-90 border-l-4 border-white pl-4">
                We build luxury and affordable homes for our clients at
                competitive costs, and we enable investors partner with us at
                different stages of our projects..
              </p>
            </div>
          </div>
        </section>
      </div>

      <RHP />
      <WhyBecomeAgent />
      <HowToBecome />
      <SignupCard />
      <TrustedByBrands />
      <Footer />
    </section>
  );
}
