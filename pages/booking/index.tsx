import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
      });
    } catch {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-semibold mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <input
          name="billingAddress"
          placeholder="Billing Address"
          value={formData.billingAddress}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {success && (
          <p className="text-green-600 mt-2">Booking confirmed successfully!</p>
        )}
      </form>
    </div>
  );
}
