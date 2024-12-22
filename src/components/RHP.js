import Image from "next/image";
export default function RHP() {
  return (
    <section className="text-black bg-white text-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:max-w-[90%] mx-auto">
        {/* Image Section */}
        <div className="rounded-lg text-left flex justify-center">
          <Image
            src="/images/RHP_agent.png" // Image path
            alt="About Icon"
            width={500} // Adjust width as needed, here set to 500px (replace with your preferred size)
            height={300} // Adjust height accordingly
            className="w-full sm:w-[100%] h-auto object-contain md:object-cover rounded-lg"
            // layout="intrinsic" // Maintains the aspect ratio of the image
          />
        </div>

        {/* Text Section */}
        <div className="px-5 py-2 rounded-lg bg-white text-left">
          <h3 className="text-md md:text-xl font-bold text-red-600 mb-4">
            RHP AGENT
          </h3>
          <h1 className="font-bold text-3xl mb-4">Who is an RHP agent</h1>
          <small className="block text-black bg-white mb-6 text-md md:text-xl leading-relaxed mx-auto text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </small>

          <button className="bg-[#DA221FF7] text-white py-2 px-4 rounded-tr-xl font-semibold hover:bg-red-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
