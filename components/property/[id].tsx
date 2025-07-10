import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        const res = await axios.get(`/api/properties/${id}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error loading property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property...</p>;
  if (!property) return <p>Property not found.</p>;

  return (
    <div className="container mx-auto p-6 space-y-8">
      <PropertyDetail property={property} />
      <BookingSection price={property.price} />
      <ReviewSection propertyId={id} />
    </div>
  );
}
