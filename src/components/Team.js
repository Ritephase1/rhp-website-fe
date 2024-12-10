// import React from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaShareAltSquare,
//   FaLinkedin,
// } from "react-icons/fa";

// export default function Team() {
//   return (
//     <section className="bg-black text-white py-12 px-16">
//       <h2 className="text-2xl text-left mb-8">OUR TEAM</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Team Member */}
//         <div className="relative w-full sm:w-80 mx-auto">
//           {/* Image */}
//           <img
//             src="/images/team2.png"
//             alt="Team Member"
//             className="w-full h-auto rounded-md"
//           />

//           {/* Social Icons */}
//           <div className="absolute top-2 right-2 flex flex-col space-y-2">
//             <div className="p-1 border border-[#7C7878] bg-red-800 rounded-md">
//               <FaShareAltSquare className="text-white text-lg" />
//             </div>
//             <div className="p-1 border border-[#7C7878] rounded-md">
//               <FaFacebook className="text-black text-lg" />
//             </div>
//             <div className="p-1 border border-[#7C7878] rounded-md">
//               <FaLinkedin className="text-black text-lg" />
//             </div>
//             <div className="p-1 border border-[#7C7878] rounded-md">
//               <FaTwitter className="text-black text-lg" />
//             </div>
//           </div>

//           {/* Name */}
//           <div className="absolute bottom-2 left-2 bg-black/50 text-white p-2 rounded-md">
//             <h2 className="text-sm font-light">ENGR</h2>
//             <h3 className="text-base font-bold">Mercy Tolibabo</h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import teamData from "../app/api/teamData.json"; // Adjust the path as needed
import {
  FaFacebook,
  FaTwitter,
  FaShareAltSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Team() {
  return (
    <section className="bg-black text-white py-12 px-16">
      <h2 className="text-2xl text-left mb-8">OUR TEAM</h2>

      <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <div key={member.id} className="relative w-full sm:w-80 mx-auto">
            {/* Image */}
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-auto rounded-md"
            />

            {/* Social Icons */}
            <div className="absolute top-2 right-2 flex flex-col space-y-2">
              <a
                href={member.socialLinks.share}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border border-[#7C7878] bg-red-800 rounded-md"
              >
                <FaShareAltSquare className="text-white text-lg" />
              </a>
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border border-[#7C7878] rounded-md"
              >
                <FaFacebook className="text-black text-lg" />
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border border-[#7C7878] rounded-md"
              >
                <FaLinkedin className="text-black text-lg" />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 border border-[#7C7878] rounded-md"
              >
                <FaTwitter className="text-black text-lg" />
              </a>
            </div>

            {/* Name and Occupation */}
            <div className="absolute bottom-2 left-2 bg-black/50 text-white p-2 rounded-md">
              <h2 className="text-sm font-light">{member.occupation}</h2>
              <h3 className="text-base font-bold">{member.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
