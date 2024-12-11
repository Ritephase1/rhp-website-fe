import "../styles/home.css";
import brands from "../app/api/brands.json"; // Import JSON data

export default function TrustedByBrands() {
  return (
    <section className="bg-[#7D1910F7] text-white py-5 md:p-20 px-14">
      <h2 className="md:text-2xl text-sm gap-1 text-left md:text-center mb-8">
        Trusted by leading Brands
        <span className="text-sm md:text-2xl"> nationwide</span>
      </h2>

      <div className="overflow-hidden relative">
        {/* Sliding container */}
        <div className="flex animate-slide space-x-2 w-max">
          {/* Map over JSON data */}
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="bg-red p-2 rounded-lg text-center w-[90%] flex-shrink-0"
            >
              <img
                src={brand.image}
                alt={`Brand ${brand.name}`}
                className="w-full h-5 object-contain"
              />
              <div className="text-right">
                <h2 className="text-md md:text-lg font-light">{brand.name}</h2>
              </div>
            </div>
          ))}
          {/* Duplicate cards for continuous sliding effect */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${brand.id}`}
              className="bg-red p-2 rounded-lg text-center w-80 flex-shrink-0"
            >
              <img
                src={brand.image}
                alt={`Brand ${brand.name}`}
                className="w-full h-5 object-contain"
              />
              <div className="text-left">
                <h2 className="text-md text-right font-light">{brand.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
