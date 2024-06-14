import React from "react";
import { StrategyName, strategyNames } from "../strategies";

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
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as StrategyName;
    onStrategyChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor={id}>Select Strategy</label>
      <select id={id} value={selectedStrategy} onChange={handleChange}>
        <option value="">Select a strategy</option>
        {strategyNames.map((strategyName) => (
          <option key={strategyName} value={strategyName}>
            {strategyName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StrategySelector;
