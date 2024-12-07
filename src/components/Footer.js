import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        color: "white",
        padding: "4rem 2rem",
      }}
    >
      {/* Background Image Overlay */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundImage: `url('/images/footer_img.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5", // Adjust opacity here
          zIndex: "-1", // Ensure it's behind the content
        }}
      ></div>

      {/* Content inside Footer */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative", // Ensure content is above the image overlay
        }}
      >
        {/* First Grid Layout */}
        <div>
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Rhino Homes & Properties
          </h3>
          <p style={{ fontSize: "0.8rem" }}>
            We build luxury and affordable homes for our clients at competitive
            cost and we enable investors partner with us at different stages of
            our projects
          </p>
        </div>

        {/* Second Grid Layout */}
        <div>
          {/* <ul></ul> */}
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Offers</h3>
          <ul style={{ fontSize: "0.8rem" }}>
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
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {" "}
            Quick Link
          </h3>
          <ul style={{ fontSize: "0.8rem" }}>
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
          <h3 style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            Join a Newsletter
          </h3>
          <p>Your Email</p>
          <div style={{ display: "flex" }}>
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
                backgroundColor: "#DA221FF7",
                color: "white",
                padding: "16px 48px",
                border: "none",
                cursor: "pointer",

                borderRadius: "5px",
              }}
            >
              Subscribe
            </button>
          </div>
          <ul style={{ display: "flex", gap: "7px", marginTop: "10px" }}>
            <li
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                padding: "3px",
                backgroundColor: "red",
              }}
            >
              f
            </li>
            <li
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                padding: "3px",
                backgroundColor: "red",
              }}
            >
              Bc
            </li>
            <li
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                padding: "3px",
                backgroundColor: "red",
              }}
            >
              {" "}
              lg
            </li>
          </ul>
        </div>

        {/* Fourth Grid Layout (empty for now, you can add content later) */}
      </div>

      {/* Color Overlay */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "#0A1229",
          opacity: "0.7", // Adjust opacity for the overlay
          zIndex: "-1", // Ensure it's behind the content
        }}
      ></div>
      {/* The horizontal rectangle at the footer */}

      <div
        style={{
          backgroundColor: "#0A1229",
          width: "90%",
          border: "1px solid white",
          textAlign: "center",
          position: "absolute",
          bottom: "0px",
          // margin: "30px 0px 0px 0px",
          marginTop: "40px",
          display: "flex",
          gap: "10px",
          // marginBottom: "0px",
          // marginTop: "20px",
        }}
      >
        <div
          style={{
            padding: "3px",
            backgroundColor: "#D02A1A",
            width: "120px",
          }}
        >
          <img src="/icons/white_logo.png" alt="logo" />
        </div>
        <div>
          <p>(C) Rhino Homes & Properties Limited. All Rights Reserved</p>
        </div>
        {/* Social media handles */}
        <div style={{ position: "relative", right: "0px" }}>
          <ul>
            <li>instagram</li>
            <li>facebook</li>
            <li>Whatsapp</li>
            <li> Arrow Up</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
