import React from "react";

const HowToBecome = () => {
  const points = [
    {
      title: "Attractive Commission Structure",
      description:
        "Agents earn competitive commissions on each sale, providing significant income potential based on performance.",
    },
    {
      title: "Comprehensive Training and Development",
      description:
        "Access to detailed training programs, including sales techniques, real estate market insights, and negotiation skills, to enhance professional growth.",
    },
    {
      title: "Brand Recognition",
      description:
        "Leverage Rhino Homes' strong reputation and credibility in the real estate market to build trust with clients and close deals faster.",
    },
    {
      title: "Marketing Support",
      description:
        "Access to professional marketing tools, materials, and resources, including flyers, banners, and online advertisements, to promote properties effectively.",
    },
    {
      title: "Flexible Work Schedule",
      description:
        "Enjoy the freedom to set your own schedule and achieve work-life balance while earning.",
    },
    {
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, property developers, and clients to expand your business network and opportunities.",
    },
    {
      title: "Incentives and Rewards",
      description:
        "Top-performing agents are often rewarded with bonuses, awards, and recognition for their efforts.",
    },
    {
      title: "Access to Exclusive Properties",
      description:
        "Agents get early or exclusive access to prime properties, enhancing their ability to serve high-value clients.",
    },
    {
      title: "Technology and Tools",
      description:
        "Utilize cutting-edge tools and software provided by Rhino Homes to manage leads, track sales, and improve customer experiences.",
    },
    {
      title: "Supportive Team Environment",
      description:
        "Work with a collaborative and supportive team dedicated to helping agents succeed in their roles.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-md md:text-xl font-bold text-center mb-8 text-red-800">
          Why Become an Agent
        </h2>
        <h1 className="font-bold text-xl md:text-3xl text-center text-black pb-8">
          Benefits of becoming an RHP agent
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 bg-white shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBecome;
