import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import RHP from "@/components/RHP";
import WhyBecomeAgent from "@/components/WhyBecomeAgent";
import HowToBecome from "@/components/HowToBecomeAgent";
import SignupCard from "@/components/SignupCard";
import TrustedByBrands from "@/components/TrustedByBrands";

export default function Agent() {
  return (
    <div className="bg-red-400">
      <Navbar />
      <div
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/agent.jpeg')",
          // transform: "scaleX(-1)",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#000000D1] to-[#C4C4C400]" /> */}

        <div className="absolute inset-0 bg-gradient-to-r to-[#D02A1AD1] from-[#7D1910F7]" />
        <div className="relative h-full flex flex-col justify-center items-start pl-8 md:pl-16 text-white space-y-4 ">
          <h1 className="text-2xl md:text-6xl font-bold">Agent</h1>
          <p className="text-sm md:text-lg  max-w-[80%] md:max-w-xl border-l-4 border-white pl-4">
            Etiam scelerisque tortor at lectus dapibus, nec fermentum diam
            feugiat. Morbi rutrum magna et dui.{" "}
          </p>
        </div>
      </div>
      <RHP />
      <WhyBecomeAgent />
      <HowToBecome />
      <SignupCard />
      <TrustedByBrands />
      <Footer />
    </div>
  );
}
