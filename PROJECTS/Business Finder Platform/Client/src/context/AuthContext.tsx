import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import api from "../services/api";

interface AuthContextType {
  user: { id: string; name: string; email: string; plan: string } | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  // Fetch user details on app load to validate the session
  useEffect(() => {
    const validateSession = async () => {
      try {
        const response = await api.get("/auth/me");
        setUser(response.data); // Set the logged-in user
      } catch (err) {
        setUser(null); // Clear user if validation fails
      }
    };
    validateSession();
  }, []);

  const login = async () => {
    try {
      const response = await api.get("/auth/me");
      setUser(response.data); // Set the user after login
    } catch (err) {
      console.error("Failed to fetch user after login:", err);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout"); // Call the backend to clear the cookie
      setUser(null); // Clear the user locally
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
