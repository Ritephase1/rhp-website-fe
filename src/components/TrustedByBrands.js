import "../styles/home.css";
import brands from "../app/api/brands.json"; // Import JSON data

export default function TrustedByBrands() {
  return (
    <section className="bg-[#DA221FF7] text-white py-10 px-16">
      <h2 className="text-2xl text-center mb-8">
        Trusted by leading Brands <span className="text-md">nationwide</span>
      </h2>

      <div className="overflow-hidden relative">
        {/* Sliding container */}
        <div className="flex animate-slide space-x-5 w-max">
          {/* Map over JSON data */}
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="bg-red p-6 rounded-lg text-center w-80 flex-shrink-0"
            >
              <img
                src={brand.image}
                alt={`Brand ${brand.name}`}
                className="w-full h-5 object-contain"
              />
              <div className="text-right">
                <h2 className="text-lg font-light">{brand.name}</h2>
              </div>
            </div>
          ))}
          {/* Duplicate cards for continuous sliding effect */}
          {brands.map((brand, index) => (
            <div
              key={`duplicate-${brand.id}`}
              className="bg-red p-6 rounded-lg text-center w-80 flex-shrink-0"
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
