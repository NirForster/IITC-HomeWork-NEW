import { useState, useEffect } from "react";
import api from "../services/api";

export const useBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      const response = await api.get("/businesses");
      setBusinesses(response.data);
      setLoading(false);
    };

    fetchBusinesses();
  }, []);

  return { businesses, loading };
};
