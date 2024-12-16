import "../styles/home.css";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="bg-black max-w-full text-white py-10 px-10">
      <Image
        src="/icons/OUR_PROJECTS.png"
        alt="OUR PROJECTS"
        width={384} // Equivalent to the Tailwind class "w-96"
        height={0} // Use 0 to allow height to be determined by aspect ratio
        className="mx-auto"
      />
      <h2 className="text-lg text-left pt-3 mb-3 md:mb-8">OUR PROJECTS</h2>

      <div className=" animate-slide relative">
        {/* Sliding container */}
        <div className="flex space-x-8 w-max">
          {/* Duplicate cards for continuous sliding effect */}
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg text-center w-80 flex-shrink-0"
              >
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={`/images/project${(index % 2) + 1}.png`}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="text-left mt-4">
                  <h2 className="text-lg font-light">
                    {index % 2 === 0 ? "RESIDENTIAL" : "COMMERCIAL"}
                  </h2>
                  <h1 className="text-2xl font-bold">
                    {index % 2 === 0
                      ? "Kingsdale Court"
                      : "Ekeoha Textile Market"}
                  </h1>
                  <small className="block mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    leo lacus, dapibus a turpis et, convallis cursus turpis.
                  </small>
                  <h4 className="cursor-pointer mt-4">
                    Explore Property{" "}
                    <span className="bg-white text-red-600 font-bold px-2 py-1">
                      +
                    </span>
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
