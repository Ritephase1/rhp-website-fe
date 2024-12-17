import Image from "next/image";
import { FaBed, FaShower, FaCar, FaMapMarkerAlt } from "react-icons/fa";

export default function RecentAdditions({ properties }) {
  return (
    <section className="text-black bg-white py-8 px-6">
      <div className="mb-8">
        <h2 className="text-xl md:text-2xl text-[#006557] text-left ">
          Recent Additions
        </h2>
        <h1 className="text-black font-bold text-xl md:text-2xl">
          Find Properties that Suits You
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-[#FFFBE8] text-white rounded-lg overflow-hidden shadow-lg flex"
          >
            {/* Image Section */}
            <div className="w-1/3 relative">
              <div className="relative w-full h-full rounded-bl-lg overflow-hidden">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="w-2/3 p-4 bg-[#FFFBR8] text-left">
              <h3 className="text-lg text-black font-bold mb-2">
                {property.title}
              </h3>

              {/* Address */}
              <div className="flex items-center text-black text-sm mb-4">
                <FaMapMarkerAlt className="w-5 h-5 mr-2" />
                <p>{property.address}</p>
              </div>

              {/* Beds, Size, Parking */}
              <div className="flex items-center text-xs text-black mb-4">
                <FaBed className="w-5 h-5 mr-2" />
                <p>{property.beds} Beds</p>
                <span className="mx-2">|</span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{property.size} m²</p>
                </span>
              </div>

              {/* Bathrooms */}
              <div className="flex items-center text-black text-xs mb-4">
                <FaShower className="w-5 h-5 mr-2" />
                <p>{property.bathrooms} Bathrooms</p>
                <span className="mx-2">|</span>
                <FaCar className="w-5 h-5 mr-2" />
                <p>{property.parking} Parking Lot</p>
              </div>

              {/* Features */}
              <div className="text-[#006557] text-sm font-semibold mb-2">
                Features
              </div>
              <div className="text-black text-sm mb-2">{property.features}</div>

              {/* ROI */}
              <div className="text-[#006557] text-sm font-semibold mb-2">
                ROI: {property.roi}%
              </div>

              {/* Invest Now Button */}
              <a
                href="#"
                className="text-red-500 mt-4 block text-center font-bold underline"
              >
                Invest Now
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 items-center">
        <button className="bg-[#DA221FF7] text-white mt-5 py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300 text-sm">
          Show Property
        </button>
      </div>
    </section>
  );
}
