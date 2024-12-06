export default function AboutUs() {
  return (
    <section
      style={{
        color: "black",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* image section */}
        <div
          style={{
            padding: "2.5rem",
            borderRadius: "8px",
            textAlign: "left",
            width: "450px",
          }}
        >
          <img
            src="/images/about.png" // Replace with the path to your mission icon
            alt="about Icon"
            style={{
              marginBottom: "1rem",
            }}
          />
        </div>

        {/* Text Section */}
        <div
          style={{
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          <h3
            style={{
              marginBottom: "1rem",
              // fontWeight: "2.5rem",
              fontSize: "1.2rem",
              color: "red",
              lineHeight: "2.5rem",
            }}
          >
            About Us
          </h3>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "2.5rem",
              lineHeight: "2.3rem",
            }}
          >
            Rhino Properties & Homes Ltd.
          </h1>
          <small style={{ width: "500px", lineHeight: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </small>

          <button
            style={{
              color: "white",
              backgroundColor: "red",
              borderRadius: "5px",
              padding: "4px",
              margin: "4px",
              fontWeight: "bold",
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
