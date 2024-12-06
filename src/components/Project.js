export default function Projects() {
  return (
    <section
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "3rem 4rem",
      }}
    >
      <img
        src="/icons/OUR_PROJECTS.png"
        alt="OUR PROJECTS"
        style={{ width: "600px", display: "block", margin: "0 auto" }}
      />
      <h2 style={{ fontSize: "2rem", textAlign: "left", marginBottom: "2rem" }}>
        OUR PROJECTS
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            //   display: "block",
            //   display: "flex",
            //   justifyContent: "space-around",
            marginTop: "4.5rem",
            width: "200px",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.5rem 1rem",
              border: "none",
              display: "block",
              marginBottom: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Prev
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Next
          </button>
        </div>
        {/* Project 1 */}
        <div
          style={{
            backgroundColor: "#000",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            width: "400px",
            margin: "0 auto", // Centers the divs horizontally
          }}
        >
          <img
            src="/images/project1.png"
            alt="Project 1"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginTop: "1rem", fontWeight: "lighter" }}>
              RESIDENTIAL
            </h2>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Kingsdale Court
            </h1>
            <small>
              Lorem ipsum dolor sit amet, consect matetur adipiscing elit. Nam
              leo lacus, dapibus a turpis et, convallis sectetur cursus turpis.
              Duis mattis vel erat in luctus adipiscing comus dapibus
            </small>
            <h4 style={{ cursor: "pointer", marginTop: "5px" }}>
              Explore Property{" "}
              <span
                style={{
                  padding: "3px 6px",
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                +
              </span>
            </h4>
          </div>
        </div>

        {/* Project 2 */}
        <div
          style={{
            backgroundColor: "#000",
            padding: "1rem",
            borderRadius: "8px",
            textAlign: "center",
            width: "400px",
            margin: "0 auto",
          }}
        >
          <img
            src="/images/project2.png"
            alt="Project 2"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
          <div style={{ textAlign: "left" }}>
            <h2 style={{ marginTop: "1rem" }}>COMMERCIAL</h2>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Ekeoha Textile Market
            </h1>
            <small>
              Lorem ipsum dolor sit amet, consect matetur adipiscing elit. Nam
              leo lacus, dapibus a turpis et, convallis sectetur cursus turpis.
              Duis mattis vel erat in luctus adipiscing comus dapibus
            </small>
            <h4 style={{ cursor: "pointer", marginTop: "5px" }}>
              Explore Property{" "}
              <span
                style={{
                  padding: "3px 6px",
                  backgroundColor: "white",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                +
              </span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
