import * as React from "react";
import { Card, CardContent } from "./ui/card";
import api from "../services/api"; // Axios instance
import { Button } from "./ui/button";
import { useAuth } from "../context/AuthContext";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";

interface Business {
  name: string;
  description: string;
  category: string;
  _id: string;
}

interface Comment {
  userId: { name: string };
  comment: string;
  createdAt: string;
}

const BusinessCard = () => {
  const [businesses, setBusinesses] = React.useState<Business[]>([]);
  const [savedBusinesses, setSavedBusinesses] = React.useState<string[]>([]);
  const [subscribedBusinesses, setSubscribedBusinesses] = React.useState<
    string[]
  >([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);
  const [currentBusiness, setCurrentBusiness] = React.useState<Business | null>(
    null
  );
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState<string>("");
  const { user } = useAuth();

  React.useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await api.get("/businesses");
        setBusinesses(response.data);
      } catch (err) {
        setError("Failed to load businesses");
      } finally {
        setLoading(false);
      }
    };

    const fetchSavedBusinesses = async () => {
      if (user) {
        try {
          const response = await api.get("/users/saved-businesses");
          setSavedBusinesses(
            response.data.map((business: Business) => business._id)
          );
        } catch (err) {
          console.error("Failed to load saved businesses:", err);
        }
      }
    };

    const fetchSubscribedBusinesses = async () => {
      if (user) {
        try {
          const response = await api.get("/users/subscribed-businesses");
          setSubscribedBusinesses(
            response.data.map((business: Business) => business._id)
          );
        } catch (err) {
          console.error("Failed to load subscribed businesses:", err);
        }
      }
    };

    fetchBusinesses();
    fetchSavedBusinesses();
    fetchSubscribedBusinesses();
  }, [user]);

  const handleSaveBusiness = async (businessId: string) => {
    try {
      await api.post("/users/save-business", { businessId });
      setSavedBusinesses((prev) => [...prev, businessId]);
    } catch (err) {
      console.error("Failed to save business:", err);
    }
  };

  const handleUnsaveBusiness = async (businessId: string) => {
    try {
      await api.delete("/users/save-business", { data: { businessId } });
      setSavedBusinesses((prev) => prev.filter((id) => id !== businessId));
    } catch (err) {
      console.error("Failed to unsave business:", err);
    }
  };

  const handleSubscribe = async (businessId: string) => {
    try {
      await api.post("/businesses/subscribe", { businessId });
      setSubscribedBusinesses((prev) => [...prev, businessId]);
      alert("Subscribed successfully!");
    } catch (err) {
      console.error("Failed to subscribe:", err);
    }
  };

  const handleUnsubscribe = async (businessId: string) => {
    try {
      await api.post("/businesses/unsubscribe", { businessId });
      setSubscribedBusinesses((prev) => prev.filter((id) => id !== businessId));
      alert("Unsubscribed successfully!");
    } catch (err) {
      console.error("Failed to unsubscribe:", err);
    }
  };

  const fetchComments = async (businessId: string) => {
    try {
      const response = await api.get(`/businesses/${businessId}/all-comments`);
      setComments(response.data);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;
    try {
      const response = await api.post("/businesses/comment", {
        businessId: currentBusiness?._id,
        comment: newComment,
      });
      setComments(response.data.reviews);
      setNewComment("");
    } catch (err) {
      console.error("Failed to add comment:", err);
    }
  };

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
            <div className="flex flex-col gap-2 mt-4">
              {savedBusinesses.includes(business._id) ? (
                <Button
                  variant="outline"
                  onClick={() => handleUnsaveBusiness(business._id)}
                >
                  <i className="fa fa-heart text-red-500"></i> Unsave
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => handleSaveBusiness(business._id)}
                >
                  <i className="fa fa-heart"></i> Save
                </Button>
              )}
              {subscribedBusinesses.includes(business._id) ? (
                <Button
                  variant="outline"
                  onClick={() => handleUnsubscribe(business._id)}
                >
                  <i className="fa fa-bell-slash"></i> Unsubscribe
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => handleSubscribe(business._id)}
                >
                  <i className="fa fa-bell"></i> Subscribe
                </Button>
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentBusiness(business);
                      fetchComments(business._id);
                    }}
                  >
                    <i className="fa fa-message"></i> Review
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Reviews for {business.name}</DialogTitle>
                    <DialogDescription>
                      Read and add Reviews below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    {comments.map((comment, idx) => (
                      <div key={idx} className="border-b pb-2">
                        <p className="text-sm text-gray-600">
                          {comment.userId.name} -{" "}
                          {new Date(comment.createdAt).toLocaleString()}
                        </p>
                        <p className="text-gray-800">{comment.comment}</p>
                      </div>
                    ))}
                    <Textarea
                      placeholder="Write your comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setNewComment("")}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddComment}>Add Review</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BusinessCard;
