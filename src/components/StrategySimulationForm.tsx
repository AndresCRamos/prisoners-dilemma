import React, { useState, useMemo } from "react";
import { StrategyName } from "../strategies";
import StrategySelector from "./StrategySelector";
import { simulatePlay } from "../utils/simulation";

const StrategySimulationForm: React.FC = () => {
  const [strategy1Name, setStrategy1Name] = useState<StrategyName | "">("");
  const [strategy2Name, setStrategy2Name] = useState<StrategyName | "">("");

  const handleStrategy1 = (strategyName: StrategyName) => {
    setStrategy1Name(strategyName);
  };

  const handleStrategy2 = (strategyName: StrategyName) => {
    setStrategy2Name(strategyName);
  };

  const bothStrategiesSelected = useMemo(
    () => strategy1Name !== "" && strategy2Name !== "",
    [strategy1Name, strategy2Name]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (strategy1Name && strategy2Name) {
      console.log("Selected Strategies:", { strategy1Name, strategy2Name });
      const results = simulatePlay(strategy1Name, strategy2Name);
      console.log(results);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StrategySelector
        id="strategy_selector_1"
        onStrategyChange={handleStrategy1}
        selectedStrategy={strategy1Name}
      />
      <StrategySelector
        id="strategy_selector_2"
        onStrategyChange={handleStrategy2}
        selectedStrategy={strategy2Name}
      />
      <button type="submit" disabled={!bothStrategiesSelected}>
        Simulate
      </button>
    </form>
  );
};

export default StrategySimulationForm;
