export default function RecentAdditions({ properties }) {
  return (
    <section
      style={{
        backgroundColor: "#8B0000",
        color: "white",
        padding: "3rem 2rem",
      }}
    >
      <h2
        style={{ fontSize: "2rem", textAlign: "center", marginBottom: "2rem" }}
      >
        Recent Booked Properties
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            style={{
              backgroundColor: "#000",
              padding: "1rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h3 style={{ marginTop: "1rem" }}>{property.title}</h3>
            <p>{property.description}</p>
            <p>${property.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
