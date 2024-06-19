import React, { createContext, useState, ReactNode } from "react";
import { PlayResult } from "../utils/simulation";
import { StrategyName } from "../strategies";

// Define the context type
interface SimulationContextType {
  strategy1Name: StrategyName | "";
  setStrategy1Name: (name: StrategyName) => void;
  strategy2Name: StrategyName | "";
  setStrategy2Name: (name: StrategyName) => void;
  rounds: number;
  setRounds: (rounds: number) => void;
  error: string;
  setError: (error: string) => void;
  results: PlayResult | null;
  setResults: (result: PlayResult | null) => void;
}

// Create the context
const SimulationContext = createContext<SimulationContextType | undefined>(
  undefined
);

// Create the provider component
export const SimulationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [strategy1Name, setStrategy1Name] = useState<StrategyName | "">("");
  const [strategy2Name, setStrategy2Name] = useState<StrategyName | "">("");
  const [rounds, setRounds] = useState<number>(20);
  const [error, setError] = useState<string>("");
  const [results, setResults] = useState<PlayResult | null>(null);

  const value = {
    strategy1Name,
    setStrategy1Name,
    strategy2Name,
    setStrategy2Name,
    rounds,
    setRounds,
    error,
    setError,
    results,
    setResults,
  };

  return (
    <SimulationContext.Provider value={value}>
      {children}
    </SimulationContext.Provider>
  );
};

// Export the context to be used by the hook
export default SimulationContext;
