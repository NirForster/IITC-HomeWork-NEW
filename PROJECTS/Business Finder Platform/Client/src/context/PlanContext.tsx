// Manage subscription plans (optional).
import React, { createContext, useState, useContext, ReactNode } from "react";

interface PlanContextType {
  plan: "Standard" | "Gold" | "Platinum";
  setPlan: (newPlan: PlanContextType["plan"]) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [plan, setPlan] = useState<PlanContextType["plan"]>("Standard");

  const updatePlan = (newPlan: PlanContextType["plan"]) => {
    setPlan(newPlan);
    localStorage.setItem("userPlan", newPlan); // Persist plan
  };

  return (
    <PlanContext.Provider value={{ plan, setPlan: updatePlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = (): PlanContextType => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
};
