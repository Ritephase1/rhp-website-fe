import Image from "next/image";

export default function PropertyCard({ property }) {
  return (
    <div className="relative w-full h-full rounded-bl-lg overflow-hidden">
      <Image
        src={property.imageUrl}
        alt={property.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust as needed
      />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>${property.price.toFixed(2)}</p>
    </div>
  );
}
