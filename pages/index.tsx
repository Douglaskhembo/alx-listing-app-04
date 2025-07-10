import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "@/components/property/PropertyCard";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  address: {
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/properties");
        setProperties(res.data);
      } catch {
        setError("Failed to fetch properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className} p-6`}>
      <h1 className="text-3xl font-bold mb-6 text-center">Available Properties</h1>

      {loading && <p className="text-center">Loading properties...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading &&
          !error &&
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
      </div>
    </div>
  );
}
