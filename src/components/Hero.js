"use client";

import Navigation from "./Navigation";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/images/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "100vh", // Ensure it covers the viewport height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Navigation Component */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "100",
          marginTop: "1rem",
        }}
      >
        <Navigation />
      </div>

      <div
        style={{
          padding: "5px 20px",
          margin: "50px 0px 10px",
          borderRadius: "20px",
          color: "white",
          border: "1px solid white",
        }}
      >
        <p>LET US GUIDE YOUR HOME</p>
      </div>

      {/* Hero Content */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        Rhino Homes & Properties
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "2rem",
        }}
      >
        We are committed to transforming dreams into reality by creating
        exceptional living and working spaces.
      </p>

      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "90%",
          maxWidth: "500px",
          borderRadius: "25px",
          overflow: "hidden",
          marginTop: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name, Keywords..."
          style={{
            flex: 1,
            padding: "0.8rem 1.5rem",
            border: "none",
            outline: "none",
            fontSize: "1rem",
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            backgroundColor: "#fff",
            color: "#333",
            transition: "background-color 0.3s ease",
          }}
        />
        <button
          style={{
            backgroundColor: "#8B0000",
            padding: "0.8rem",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: "50%",
            borderBottomRightRadius: "50%",
            borderRadius: "50%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
          >
            <path
              d="M10 2a8 8 0 105.293 14.707l4 4a1 1 0 001.414-1.414l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        <p>What are you looking for ?</p>
      </div>

      {/* Image Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "20px",
        }}
      >
        {/* Commercial Image */}
        <div
          style={{
            flex: "1 1 120px",
            maxWidth: "150px",
            textAlign: "center",
          }}
        >
          <img
            src="/icons/commercial.png"
            alt="commercial button"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "120px",
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Residential Image */}
        <div
          style={{
            flex: "1 1 120px",
            maxWidth: "150px",
            textAlign: "center",
          }}
        >
          <img
            src="/icons/residential.png"
            alt="residential"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "120px",
              borderRadius: "8px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
