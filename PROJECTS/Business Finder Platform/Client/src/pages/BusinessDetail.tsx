import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

interface Business {
  name: string;
  category: string;
  description: string;
  [key: string]: any; // Optional: Allows additional properties
}

const BusinessDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await api.get(`/businesses/${id}`);
        setBusiness(response.data);
      } catch (error) {
        console.error("Failed to fetch business:", error);
      }
    };

    fetchBusiness();
  }, [id]);

  if (!business) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl">{business.name}</h1>
      <p>Category: {business.category}</p>
      <p>{business.description}</p>
    </div>
  );
};

export default BusinessDetail;
