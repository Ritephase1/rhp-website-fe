export default function PropertyCard({ property }) {
  return (
    <div>
      <img src={property.imageUrl} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>${property.price.toFixed(2)}</p>
    </div>
  );
}
