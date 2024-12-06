export default function MissionVision() {
  return (
    <section
      style={{
        backgroundColor: "#D02A1A",
        color: "white",
        // padding: "3rem 2rem",
        textAlign: "center",
      }}
    >
      {/* <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
        Our Mission and Vision
      </h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Mission Section */}
        <div
          style={{
            backgroundColor: "#D02A1A",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "left",
            width: "450px",
          }}
        >
          <img
            src="/icons/mission.png" // Replace with the path to your mission icon
            alt="Mission Icon"
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "1rem",
            }}
          />
          <h3
            style={{
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: "2.3rem",
              lineHeight: "2.5rem",
            }}
          >
            Mission Statement
          </h3>
          <p>
            We are committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial eal estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
        </div>

        {/* Vision Section */}
        <div
          style={{
            backgroundColor: "#D02A1A",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "left",
          }}
        >
          <img
            src="/icons/vision.png" // Replace with the path to your vision icon
            alt="Vision Icon"
            style={{
              width: "40px",
              height: "40px",
              marginBottom: "1rem",
            }}
          />
          <h3
            style={{
              marginBottom: "1rem",
              fontWeight: "2.5rem",
              fontSize: "2.5rem",
              lineHeight: "2.5rem",
            }}
          >
            Vision
          </h3>
          <p>
            We are committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial eal estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
