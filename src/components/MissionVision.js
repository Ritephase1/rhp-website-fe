export default function MissionVision() {
  return (
    <section className="bg-[#7D1910] text-white py-12 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Mission Section */}
        <div className="bg-[#7D1910] p-8 rounded-lg text-left w-full flex flex-col items-center">
          <img
            src="/icons/mission.png" // Replace with the path to your mission icon
            alt="Mission Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
          <p className="text-base leading-relaxed">
            We are committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial real estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-[#7D1910] p-8 rounded-lg text-left w-full flex flex-col items-center">
          <img
            src="/icons/vision.png" // Replace with the path to your vision icon
            alt="Vision Icon"
            className="w-10 h-10 mb-4"
          />
          <h3 className="text-2xl font-bold mb-4">Vision</h3>
          <p className="text-base leading-relaxed">
            We are committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial real estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
