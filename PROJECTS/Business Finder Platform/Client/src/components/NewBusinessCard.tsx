import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api"; // API instance

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function NewBusinessCard() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !category) {
      setError("All fields are required.");
      return;
    }

    console.log("Sending data:", { name, description, category }); // Debug log

    try {
      await api.post("/businesses/create", { name, description, category }); // Token is sent automatically via cookies
      alert("Business added successfully!");
    } catch (err) {
      console.error("Failed to add business:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add A New Business</CardTitle>
        <CardDescription>
          Fill in the details to add your business.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                placeholder="Enter the name of your company"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="Enter a short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={(value) => setCategory(value)}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => navigate("/businesses")}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Add Business</Button>
      </CardFooter>
    </Card>
  );
}
