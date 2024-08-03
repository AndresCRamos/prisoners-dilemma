import React, { useMemo } from "react";
import { StrategyName } from "../strategies";
import StrategySelector from "./StrategySelector";
import { simulatePlay } from "../utils/simulation";
import RoundsInput from "./RoundsInput";
import { useSimulation } from "../hooks/useSimulation";
import { Button, Center } from "@mantine/core";

const StrategySimulationForm = () => {
  const {
    strategy1Name,
    setStrategy1Name,
    strategy2Name,
    setStrategy2Name,
    setResults,
    rounds,
  } = useSimulation();

  const handleStrategy1 = (strategyName: StrategyName) => {
    setStrategy1Name(strategyName);
  };

  const handleStrategy2 = (strategyName: StrategyName) => {
    setStrategy2Name(strategyName);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (strategy1Name && strategy2Name) {
      const results = simulatePlay(strategy1Name, strategy2Name, rounds);
      setResults(results);
    }
  };

  const bothStrategiesSelected = useMemo(
    () => strategy1Name !== "" && strategy2Name !== "",
    [strategy1Name, strategy2Name]
  );

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
      <RoundsInput />
      <Center>
        <Button type="submit" disabled={!bothStrategiesSelected}>
          Simulate
        </Button>
      </Center>
    </form>
  );
};

export default StrategySimulationForm;
