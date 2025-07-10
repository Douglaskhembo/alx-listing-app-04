import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  comment: string;
  rating: number;
  user: { name: string };
}

const ReviewSection = ({ propertyId }: { propertyId: string | string[] | undefined }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const res = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(res.data);
      } catch (err) {
        console.error(err);
        setError("Could not fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 border-b pb-2">
          <p className="font-semibold">{review.user?.name || "Anonymous"}</p>
          <p className="text-yellow-500">Rating: {review.rating} ★</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
