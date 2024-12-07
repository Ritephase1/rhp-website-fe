export default function Projects() {
  return (
    <section className="bg-black text-white py-12 px-16">
      <img
        src="/icons/OUR_PROJECTS.png"
        alt="OUR PROJECTS"
        className="w-96 mx-auto"
      />
      <h2 className="text-2xl text-left mb-8">OUR PROJECTS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex justify-center mt-12">
          <div className="space-x-4">
            <button className="bg-white text-black py-2 px-4 rounded-md cursor-pointer">
              Prev
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-md cursor-pointer">
              Next
            </button>
          </div>
        </div>

        {/* Project 1 */}
        <div className="bg-black p-6 rounded-lg text-center w-full sm:w-80 mx-auto">
          <img
            src="/images/project1.png"
            alt="Project 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="text-left mt-4">
            <h2 className="text-lg font-light">RESIDENTIAL</h2>
            <h1 className="text-2xl font-bold">Kingsdale Court</h1>
            <small className="block mt-2">
              Lorem ipsum dolor sit amet, consect matetur adipiscing elit. Nam
              leo lacus, dapibus a turpis et, convallis sectetur cursus turpis.
              Duis mattis vel erat in luctus adipiscing comus dapibus
            </small>
            <h4 className="cursor-pointer mt-4">
              Explore Property{" "}
              <span className="bg-white text-red-600 font-bold px-2 py-1">
                +
              </span>
            </h4>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-black p-6 rounded-lg text-center w-full sm:w-80 mx-auto">
          <img
            src="/images/project2.png"
            alt="Project 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="text-left mt-4">
            <h2 className="text-lg font-light">COMMERCIAL</h2>
            <h1 className="text-2xl font-bold">Ekeoha Textile Market</h1>
            <small className="block mt-2">
              Lorem ipsum dolor sit amet, consect matetur adipiscing elit. Nam
              leo lacus, dapibus a turpis et, convallis sectetur cursus turpis.
              Duis mattis vel erat in luctus adipiscing comus dapibus
            </small>
            <h4 className="cursor-pointer mt-4">
              Explore Property{" "}
              <span className="bg-white text-red-600 font-bold px-2 py-1">
                +
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
