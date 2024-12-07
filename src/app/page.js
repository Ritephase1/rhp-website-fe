import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import AboutUs from "@/components/AboutUs";
import RecentAdditions from "@/components/RecentAdditions";
import Footer from "@/components/Footer";
import Projects from "@/components/Project";
import "../styles/globals.css";

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
      <AboutUs />
      {/* <RecentAdditions properties={bookedProperties} /> */}
      <Footer />
    </div>
  );
}
