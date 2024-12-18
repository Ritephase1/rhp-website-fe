const Hero = lazy(() => import("../components/Hero"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const AboutUs = lazy(() => import("../components/AboutUs"));
// const RecentAdditions = lazy(() => import("../components/RecentAdditions"));
const Footer = lazy(() => import("../components/Footer"));
const Projects = lazy(() => import("../components/Project"));

const SignupCard = lazy(() => import("../components/SignupCard"));
const RHP = lazy(() => import("../components/RHP"));

const Team = lazy(() => import("../components/Team"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));
import { lazy, Suspense } from "react";
export default function Home() {
  const bookedProperties = [
    {
      id: 1,
      title: "Modern Villa",
      description: "A luxurious villa with stunning sea views.",
      price: 450000,
      imageUrl: "/images/villa.jpg",
    },
    {
      id: 2,
      title: "City Apartment",
      description: "A stylish apartment in the heart of the city.",
      price: 250000,
      imageUrl: "/images/apartment.jpg",
    },
  ];

  return (
    <div>
      {/* <Navigation /> */}
      <Hero />
      <Projects properties={bookedProperties} />
      <MissionVision />
      {/* <Team /> */}
      <AboutUs imageUrl="/images/about.png" />
      {/* <RecentAdditions properties={recentAdditionProperties} /> */}
      <SignupCard />
      {/* <Testimonial /> */}
      {/* <TrustedByBrands /> */}

      <RHP />

      <Suspense fallback={<div>Loading...</div>}>
        <TrustedByBrands />
      </Suspense>
      <Footer />
    </div>
  );
}
