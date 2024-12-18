import React from "react";
// Importation of icons
import Image from "next/image";
import { MdCoPresent } from "react-icons/md";
const HowToBecome = () => {
  const points = [
    {
      sn: 1,
      img: "/icons/slide.png",
      title: "Understand",
      description:
        "Research Rhino Homes and Properties' values, services, and mission Familiarize yourself with their key projects, such as the Abia Marketplace Project",
    },
    {
      sn: 2,
      img: "/icons/brownSquare.png",
      // img: "/icons/mission.png",
      title: "Comprehensive Training and Development",
      description:
        "Access to detailed training programs, including sales techniques, real estate market insights, and negotiation skills, to enhance professional growth.",
    },
    {
      sn: 3,
      img: "/icons/register_an_agent.png",
      title: "Brand Recognition",
      description:
        "Leverage Rhino Homes' strong reputation and credibility in the real estate market to build trust with clients and close deals faster.",
    },
    {
      sn: 4,
      img: "/icons/attend_training.png",
      title: "Marketing Support",
      description:
        "Access to professional marketing tools, materials, and resources, including flyers, banners, and online advertisements, to promote properties effectively.",
    },
    {
      sn: 5,
      img: "/icons/sign_agreement.png",
      title: "Flexible Work Schedule",
      description:
        "Enjoy the freedom to set your own schedule and achieve work-life balance while earning.",
    },
    {
      sn: 6,
      img: "/icons/network.png",
      title: "Networking Opportunities",
      description:
        "Connect with industry professionals, property developers, and clients to expand your business network and opportunities.",
    },
    {
      sn: 7,
      img: "/icons/slide.png",
      title: "Incentives and Rewards",
      description:
        "Top-performing agents are often rewarded with bonuses, awards, and recognition for their efforts.",
    },
    {
      sn: 8,
      img: "/icons/stay_commitment.png",
      title: "Access to Exclusive Properties",
      description:
        "Agents get early or exclusive access to prime properties, enhancing their ability to serve high-value clients.",
    },
    // {
    //   sn: 9,
    //   img: "/icons/poduim.png",
    //   title: "Technology and Tools",
    //   description:
    //     "Utilize cutting-edge tools and software provided by Rhino Homes to manage leads, track sales, and improve customer experiences.",
    // },
    // {
    //   sn: 10,
    //   title: "Supportive Team Environment",
    //   description:
    //     "Work with a collaborative and supportive team dedicated to helping agents succeed in their roles.",
    // },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-md md:text-xl font-bold text-center mb-4 md:mb-8 text-red-800">
          How to become an Agent
        </h2>
        <h1 className="font-bold text-lg md:text-3xl text-center text-black pb-8">
          To become an agent with Rhino Homes and Properties, follow these
          steps:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  ">
          {points.map((point, index) => (
            <div
              key={index}
              className="group border-gray-300 p-6 bg-white shadow hover:shadow-md transition border-red-800 shadow-xl border-b-4 hover:border-white hover:bg-[#7D1910F7]"
            >
              <div className="grid grid-cols-3 items-center ">
                {/* Icon aligned to the left */}
                <div className="flex justify-start sm:w-3/4 md:w-3/4 w-3/4 lg:w-3/4 xl:w-3/4">
                  <Image
                    src={point.img}
                    alt="RHP Logo"
                    width={300}
                    height={200}
                    quality={100}
                    className="
      w-full 
      h-auto 
      max-w-[300px] 
      rounded-md 
      group-hover:text-white
    "
                  />
                </div>

                {/* Content spanning two columns */}
                <div className=" col-span-2 flex flex-col justify-end p-4 gap-4 text-left">
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="md:text-xl text-lg font-semibold text-gray-800 md:mb-2 mb-0 group-hover:text-white">
                      {point.title}
                    </h3>
                    <h2 className="text-xl font-bold text-red-800 ml-3 group-hover:text-white">
                      {point.sn}
                    </h2>
                  </div>
                  <p className="text-gray-600 group-hover:text-white md:text-base text-sm text-justify">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBecome;
