import * as React from "react";
import { Card, CardContent } from "./ui/card";
import api from "../services/api"; // Importing the API
import { Button } from "./ui/button";

interface Business {
  name: string;
  description: string;
  category: string;
  _id: string;
}

const BusinessCard = () => {
  const [businesses, setBusinesses] = React.useState<Business[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch businesses on component mount
  React.useEffect(() => {
    async function fetchBusinesses() {
      try {
        const response = await api.get("/businesses");
        setBusinesses(response.data);
      } catch (err) {
        setError("Failed to load businesses");
      } finally {
        setLoading(false);
      }
    }

    fetchBusinesses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((business) => (
        <Card key={business._id}>
          <CardContent className="flex flex-col justify-between h-full p-6">
            <div className="flex flex-col flex-grow text-center">
              <h3 className="text-2xl font-semibold">{business.name}</h3>
              <p className="text-gray-500 mt-2">{business.category}</p>
              <p className="text-sm mt-2">{business.description}</p>
            </div>

            {/* Buttons Container */}
            <div className="flex justify-between mt-4">
              <Button>
                <i className="fa fa-message"></i>
              </Button>
              <Button>
                <i className="fa fa-heart"></i>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BusinessCard;
