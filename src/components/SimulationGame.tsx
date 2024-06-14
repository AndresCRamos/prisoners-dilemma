import { useState } from "react";
import { PlayResult } from "../utils/simulation";
import SimulationResult from "./SimulationResults";
import StrategySimulationForm from "./StrategySimulationForm";

const SimulationGame = () => {
  const [results, setResults] = useState<PlayResult | null>(null);
  return (
    <>
      <StrategySimulationForm onSimulationComplete={setResults} />
      <SimulationResult result={results} />
    </>
  );
};

export default SimulationGame;
