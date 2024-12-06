import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#8B0000",
        color: "white",
        padding: "4rem 2rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* First Grid Layout */}
        <div>
          <h3>Rhino Homes & Properties</h3>
          <p>
            We build luxury and affordable homes for our clients at competitive
            cost and we enable investors partner with us at different stages of
            our projects
          </p>
          <ul>
            <li>Residential Properties</li>
            <li>Commercial Properties</li>
            <li>Investment Opportunities</li>
            <li>Commission</li>
            <li>Agent</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* Second Grid Layout */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>News</li>
            <li>FAQs</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Third Grid Layout */}
        <div>
          <h3>Join a Newsletter</h3>
          <p>Your Email</p>
          <input
            type="email"
            placeholder="Enter Your Email"
            style={{
              padding: "0.8rem",
              width: "100%",
              marginBottom: "1rem",
              borderRadius: "5px",
            }}
          />
          <button
            style={{
              backgroundColor: "#fff",
              color: "#8B0000",
              padding: "0.8rem 2rem",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Subscribe
          </button>
        </div>

        {/* Fourth Grid Layout (empty for now, you can add content later) */}
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
