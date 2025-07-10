import Link from "next/link";

const PropertyCard: React.FC<{ property: any }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <p className="text-sm text-gray-600">
          {property.address.city}, {property.address.country}
        </p>
        <p className="text-green-600 font-bold mt-2">${property.price}/night</p>
        <p className="text-yellow-500">{property.rating} stars</p>

        <Link
          href={`/property/${property.id}`}
          className="inline-block mt-3 text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
