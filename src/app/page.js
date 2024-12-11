const Hero = lazy(() => import("../components/Hero"));
const MissionVision = lazy(() => import("../components/MissionVision"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const RecentAdditions = lazy(() => import("../components/RecentAdditions"));
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

  const recentAdditionProperties = [
    {
      id: 1,
      imageUrl:
        "https://landmarkhomes.sgp1.digitaloceanspaces.com/plans/kawau/Kawau-2020.jpg",
      title: "Kawau Beach House",
      address: "123 Kawau Island Rd, Kawau Island, New Zealand",
      beds: 3,
      size: 250,
      bathrooms: 2,
      parking: 2,
      features: "Sea View, Private Beach Access, Fully Furnished",
      roi: 5.2,
    },
    {
      id: 2,
      imageUrl:
        "https://landmarkhomes.sgp1.digitaloceanspaces.com/plans/kawau/Kawau-2020.jpg", // Sample image, replace with another image if you want multiple properties
      title: "Bayview Mansion",
      address: "456 Bayview St, Auckland, New Zealand",
      beds: 4,
      size: 350,
      bathrooms: 3,
      parking: 3,
      features: "Ocean View, Spacious Living, Pool",
      roi: 6.8,
    },
  ];

  return (
    <div>
      {/* <Navigation /> */}
      <Hero />
      <Projects properties={bookedProperties} />
      <MissionVision />
      <Team />
      <AboutUs imageUrl="/images/about.png" />
      <RecentAdditions properties={recentAdditionProperties} />
      <SignupCard />
      {/* <Testimonial /> */}
      {/* <TrustedByBrands /> */}

      <Suspense fallback={<div>Loading...</div>}>
        <TrustedByBrands />
      </Suspense>

      <RHP />
      <Footer />
    </div>
  );
}
