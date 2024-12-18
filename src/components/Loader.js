import React from "react";

import Image from "next/image";
export default function Loader({ image }) {
  return (
    <div className="flex justify-center items-center h-screen">
      {image ? (
        <Image
          src={image}
          height={40}
          width={40}
          alt="Loading..."
          className="animate-pulse w-32 h-32 object-contain"
        />
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
