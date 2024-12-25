import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useAuth } from "../context/AuthContext";
import { login as loginService } from "../services/auth";

export function LoginCardWithForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = await loginService({ email, password });
      login(userData); // Update the context with the authenticated user
      navigate("/"); // Redirect to home page
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleExit = () => {
    navigate("/"); // Navigate to home page
  };

  return (
    <Card className="w-[350px] p">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Don't have an account?
          <Link to="/signup" className="pl-1 text-blue-500 hover:underline">
            Sign up here
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleExit}>
          Exit
        </Button>
        <Button onClick={handleLogin}>Log In</Button>
      </CardFooter>
    </Card>
  );
}
