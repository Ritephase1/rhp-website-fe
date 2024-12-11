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
    <section className="bg-white text-white m-auto w-[80%] py-12 px-4">
      <h2 className="text-2xl text-black text-left mb-8">OUR TEAM</h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="relative w-full mx-auto bg-white rounded-md shadow-lg p-4 flex flex-col items-center space-y-4"
          >
            {/* Image */}
            <img
              src={member.imageSrc}
              alt={member.name}
              className="w-full h-auto rounded-md"
            />

            {/* Name and Occupation */}
            <div className="text-center">
              <h3 className="text-base font-bold text-black">{member.name}</h3>
              <h2 className="text-sm font-light text-gray-600">
                {member.occupation}
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a
                href={member.socialLinks.share}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md bg-red-800"
              >
                <FaShareAltSquare className="text-white text-lg" />
              </a>
              <a
                href={member.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md"
              >
                <FaFacebook className="text-blue-600 text-lg" />
              </a>
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md"
              >
                <FaLinkedin className="text-blue-500 text-lg" />
              </a>
              <a
                href={member.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md"
              >
                <FaTwitter className="text-blue-400 text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
