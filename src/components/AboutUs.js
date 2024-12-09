export default function AboutUs({ imageUrl }) {
  return (
    <section className="text-black text-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="p-10 rounded-lg text-left flex justify-center">
          <img
            src={imageUrl} // Use the passed image URL prop
            alt="About Icon"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="p-8 rounded-lg text-left">
          <h3 className="text-xl text-red-600 mb-4">About Us</h3>
          <h1 className="font-bold text-3xl mb-4">
            Rhino Properties & Homes Ltd.
          </h1>
          <small className="block mb-6 text-md text-white leading-relaxed max-w-prose mx-auto">
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
