import { Button, Center, Container, Fieldset } from "@mantine/core";
import React, { useMemo } from "react";
import { useSimulation } from "../../hooks/useSimulation";
import { StrategyName } from "../../strategies";
import { simulatePlay } from "../../utils/simulation";
import RoundsInput from "../RoundsInput";
import StrategySelector from "../StrategySelector";

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
      setResults(null);
      const results = simulatePlay(strategy1Name, strategy2Name, rounds);
      setResults(results);
    }
  };

  const bothStrategiesSelected = useMemo(
    () => strategy1Name !== "" && strategy2Name !== "",
    [strategy1Name, strategy2Name],
  );

  return (
    <Container className="w-full">
      <Fieldset>
        <form onSubmit={handleSubmit}>
          <Fieldset
            legend="Select the strategies"
            className="flex flex-col gap-4"
          >
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
          </Fieldset>
          <RoundsInput />
          <Center className="mt-4 mb-2">
            <Button type="submit" disabled={!bothStrategiesSelected}>
              Simulate
            </Button>
          </Center>
        </form>
      </Fieldset>
    </Container>
  );
};

export default StrategySimulationForm;
