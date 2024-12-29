import { useAuth } from "../context/AuthContext";

export const useAuthStatus = () => {
  const { user } = useAuth();
  return !!user; // Returns true if user is logged in
};
