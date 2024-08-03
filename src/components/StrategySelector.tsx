import React from "react";
import { StrategyName, strategyNames } from "../strategies";
import { Select } from "@mantine/core";

interface StrategySelectorProps {
  id: string;
  selectedStrategy: StrategyName | "";
  onStrategyChange: (strategyName: StrategyName) => void;
}

const StrategySelector: React.FC<StrategySelectorProps> = ({
  id,
  selectedStrategy,
  onStrategyChange,
}) => {
  const handleChange = (selectedValue: string | null): void => {
    const selectedStrategy = selectedValue as StrategyName;
    onStrategyChange(selectedStrategy);
  };

  return (
    <div>
      <Select
        id={id}
        data={strategyNames}
        value={selectedStrategy}
        placeholder="Select a strategy"
        onChange={handleChange}
        allowDeselect={false}
        searchable
        required
      />
    </div>
  );
};

export default StrategySelector;
