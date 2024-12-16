import Image from "next/image";

export default function AboutUs({ imageUrl }) {
  return (
    <section className="text-black bg-white text-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[90%] mx-auto my-0">
        {/* Image Section */}
        <div className="md:px-5 md:py-2  p-2 bg-red-800 rounded-lg text-left flex justify-center">
          <div className="relative w-full h-full z-0">
            <Image
              src="/images/about2.png"
              alt="RHP Logo"
              width={300} // Replace with actual width
              height={200} // Replace with actual height
              style={{ marginTop: 10, zIndex: -1 }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="p-8 rounded-lg bg-white text-left">
          <h3 className="text-xl text-red-600 mb-4">About Us</h3>
          <h1 className="font-bold text-3xl mb-4">
            Rhino Properties & Homes Ltd.
          </h1>
          <small className="block mb-6 text-md md:text-lg lg:text-xl text-black leading-relaxed text-justify  mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </small>

          <button className="bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
