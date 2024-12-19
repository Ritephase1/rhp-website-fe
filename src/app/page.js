import React, { lazy, Suspense } from "react";
import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/Hero"));
const Projects = lazy(() => import("../components/Project"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const SignupCard = lazy(() => import("../components/SignupCard"));
const RHP = lazy(() => import("../components/RHP"));
const Footer = lazy(() => import("../components/Footer"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));

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
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<Loader image="/images/logo.png" />}>
        <Projects properties={bookedProperties} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <MissionVision />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <AboutUs imageUrl="/images/building1.jpg" />
      </Suspense>

      <SignupCard />

      <Suspense fallback={<Loader />}>
        <RHP />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <TrustedByBrands />
      </Suspense>

      <Footer />
    </div>
  );
}
