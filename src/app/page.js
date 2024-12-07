import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import AboutUs from "@/components/AboutUs";
import RecentAdditions from "@/components/RecentAdditions";
import Footer from "@/components/Footer";
import Projects from "@/components/Project";
import SignupCard from "@/components/SignupCard";
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
      <AboutUs />
      <RecentAdditions properties={recentAdditionProperties} />
      <SignupCard />
      <Footer />
    </div>
  );
}
