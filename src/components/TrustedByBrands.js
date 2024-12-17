import "../styles/home.css";
import brands from "../app/api/brands.json"; // Import JSON data
import Image from "next/image";
export default function TrustedByBrands() {
  return (
    <section className="bg-[#7D1910F7] text-white py-3 md:p-4 px-14">
      <h2 className="md:text-2xl text-sm gap-1 text-left md:text-center mb-8">
        Trusted by leading Brands
        <span className="text-sm md:text-2xl"> nationwide</span>
      </h2>

      <div className="overflow-hidden relative">
        {/* Sliding container */}
        <div className="flex animate-slide space-x-0 w-max">
          {/* Map over JSON data */}
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="bg-red p-2 rounded-lg text-center w-80 flex-shrink-0"
            >
              <Image
                src={brand.image} // Dynamically passed image path
                alt={`Brand ${brand.name}`}
                width={0} // Width set to scale responsively
                height={20} // Corresponds to h-5 (20px)
                className="w-full object-contain"
                style={{ height: "20px", width: "100%" }} // Ensures full width responsiveness
              />
              <div className="text-center">
                <h2 className="text-md md:text-lg font-light">{brand.name}</h2>
              </div>
            </div>
          ))}
          {/* Duplicate cards for continuous sliding effect */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${brand.id}`}
              className="bg-red p-6 rounded-lg text-center w-80 flex-shrink-0"
            >
              <Image
                src={brand.image} // Dynamically passed image source
                alt={`Brand ${brand.name}`}
                width={0} // Set width to auto, responsive
                height={20} // Set height (h-5 corresponds to 20px)
                className="w-full object-contain"
                style={{ height: "20px", width: "100%" }} // Ensure responsiveness
              />
              <div className="text-left">
                <h2 className="text-md text-center font-light">{brand.name}</h2>
              </div>
            </div>
          ))}

          {/* Duplicate cards for continuous sliding effect */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${brand.id}`}
              className="bg-red p-6 rounded-lg text-center w-80 flex-shrink-0"
            >
              <Image
                src={brand.image} // Dynamically passed image source
                alt={`Brand ${brand.name}`}
                width={0} // Set width to 0 for responsive behavior
                height={20} // Set height to 20px (equivalent to h-5)
                className="w-full object-contain"
                style={{ height: "20px", width: "100%" }} // Ensure responsiveness
              />
              <div className="text-left">
                <h2 className="text-md text-center font-light">{brand.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
