// Handle user authentication and session details globally.
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  user: { id: string; name: string; email: string; plan: string } | null;
  login: (user: AuthContextType["user"]) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);

  const login = (userData: AuthContextType["user"]) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Persist session
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Clear session
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
