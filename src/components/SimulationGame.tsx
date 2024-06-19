import { SimulationProvider } from "../context/SimulationContext";
import SimulationResult from "./SimulationResults";
import StrategySimulationForm from "./StrategySimulationForm";

const SimulationGame = () => {
  return (
    <>
      <SimulationProvider>
        <StrategySimulationForm />
        <SimulationResult />
      </SimulationProvider>
    </>
  );
};

export default SimulationGame;
