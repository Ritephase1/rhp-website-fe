import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-[#7D1910] text-white md:p-20 py-12 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[90%] mx-auto">
        {/* Mission Section */}
        <div className="bg-[#7D1910] p-8 rounded-lg text-left w-full flex flex-col items-center">
          <div className="flex gap-6">
            <Image
              src="/icons/mission.png" // Replace with the path to your mission icon
              alt="Mission Icon"
              width={50} // Equivalent to the Tailwind class "w-10"
              height={40} // Equivalent to the Tailwind class "h-10"
              className="mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Mission Statement</h3>
          </div>
          <p className="text-sm md:text-lg  text-justify leading-relaxed">
            We are committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial real estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
        </div>

        {/* Vision Section */}
        <div className="bg-[#7D1910] p-8 rounded-lg text-left w-full flex flex-col items classna-center">
          <div className="flex gap-6">
            <Image
              src="/icons/vision.png" // Replace with the path to your mission icon
              alt="Vision Icon"
              width={40} // Equivalent to the Tailwind class "w-10"
              height={40} // Equivalent to the Tailwind class "h-10"
              className="mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
          </div>
          <p className="text-sm text-justify md:text-lg leading-relaxed">
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
