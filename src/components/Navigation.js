"use client";

import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "1rem 2rem",
        borderBottom: "1px solid #ddd",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        margin: "0px 10px",
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div>
          <img
            src="/images/rhp_logo.png"
            alt="Real Estate Logo"
            style={{ height: "40px", objectFit: "contain" }}
          />
        </div>

        {/* Desktop Links */}
        <ul
          style={{
            display: isMenuOpen ? "block" : "flex",
            listStyle: "none",
            gap: "1.5rem",
            margin: 0,
            padding: 0,
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            ...(isMenuOpen
              ? {
                  flexDirection: "column",
                  position: "absolute",
                  top: "4rem",
                  left: 0,
                  backgroundColor: "white",
                  width: "100%",
                  padding: "1rem 0",
                  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                }
              : {}),
          }}
        >
          <li>
            <a href="#home" style={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" style={linkStyle}>
              About Us
            </a>
          </li>
          <li>
            <a href="#projects" style={linkStyle}>
              Projects
            </a>
          </li>
          <li>
            <a href="#agent" style={linkStyle}>
              Agent
            </a>
          </li>
          <li>
            <a href="#blog" style={linkStyle}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </li>
        </ul>

        {/* Phone Number Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap", // Adjust for responsive views
          }}
        >
          {/* Call Icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{ height: "20px", width: "20px" }}
            >
              <path
                d="M15.05 5.05a11 11 0 014.95 4.95m-2.14 2.14a4 4 0 01-5.66 0L11 9.09a10.97 10.97 0 01-6.36 6.36m0 0a4 4 0 010-5.66L9.09 11"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <a
              href="tel:+123456789"
              style={{ color: "black", textDecoration: "none" }}
            >
              +1 234 567 89
            </a>
          </div>

          {/* User Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "32px",
              width: "32px",
              borderRadius: "50%",
              border: "1px solid black",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{ height: "20px", width: "20px" }}
            >
              <circle cx="12" cy="8" r="4" />
              <path
                d="M16 14H8a4 4 0 00-4 4v1h16v-1a4 4 0 00-4-4z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>

          {/* Invest Button */}
          <button
            style={{
              border: "2px solid red",
              borderRadius: "20px",
              padding: "0.2rem 1rem",
              color: "red",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Invest
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: "none",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "500",
};
