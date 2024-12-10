// pages/about-us.js

import { Suspense, lazy } from "react";

// Lazy load the components
const MissionVision = lazy(() => import("../components/MissionVision"));
const Team = lazy(() => import("../components/Team"));

export default function AboutUs() {
  return (
    <section>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about_image.png')" }}
      >
        {/* Lazy load the AboutUs component */}
        <AboutUs imageUrl="/images/about2.png" />

        {/* Suspense wrapper for MissionVision and Team components */}
        <Suspense fallback={<div>Loading...</div>}>
          <MissionVision />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Team />
        </Suspense>

        <div className="container mx-auto py-12 px-6">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

          <div>
            {/* About Us Page Content */}
            <a id="team">
              <h2>Our Team</h2>
              <p>Information about the team.</p>
            </a>

            <a id="mission">
              <h2>Our Mission</h2>
              <p>Details about the mission.</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
