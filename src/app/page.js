"use client";
import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/Hero"));
const Projects = lazy(() => import("../components/Project"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const SignupCard = lazy(() => import("../components/SignupCard"));
const RHP = lazy(() => import("../components/RHP"));
const Footer = lazy(() => import("../components/Footer"));
const TrustedByBrands = lazy(() => import("../components/TrustedByBrands"));

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

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
    <div className="space-y-8">
      <Suspense fallback={<Loader />}>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<Loader image="/images/logo.png" />}>
        <AnimatedSection>
          <Projects properties={bookedProperties} />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <AnimatedSection>
          <MissionVision />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <AnimatedSection>
          <AboutUs imageUrl="/images/building1.jpg" />
        </AnimatedSection>
      </Suspense>

      <AnimatedSection>
        <SignupCard />
      </AnimatedSection>

      <Suspense fallback={<Loader />}>
        <AnimatedSection>
          <RHP />
        </AnimatedSection>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <AnimatedSection>
          <TrustedByBrands />
        </AnimatedSection>
      </Suspense>

      <Footer />
    </div>
  );
}
