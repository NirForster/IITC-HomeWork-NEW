import * as React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import api from "../services/api"; // Importing the API

// Business interface based on your backend schema
interface Business {
  name: string;
  description: string;
  category: string;
  _id: string;
}

export function BusinessCarosel() {
  const [businesses, setBusinesses] = React.useState<Business[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch businesses on component mount
  React.useEffect(() => {
    async function fetchBusinesses() {
      try {
        const response = await api.get("/businesses"); // Adjust the endpoint if needed
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
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {businesses.map((business) => (
          <CarouselItem key={business._id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">{business.name}</h3>
                    <p className="text-gray-500 mt-2">{business.category}</p>
                    <p className="text-sm mt-2">{business.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
