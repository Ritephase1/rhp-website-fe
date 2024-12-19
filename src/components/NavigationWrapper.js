// NavigationWrapper.js
"use client";

import dynamic from "next/dynamic";

// Lazy load the entire navigation component
const Navigation = dynamic(() => import("./Navigation"), { ssr: false });

export default function NavigationWrapper() {
  return <Navigation />;
}
