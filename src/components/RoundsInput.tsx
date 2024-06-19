import React from "react";
import { useSimulation } from "../hooks/useSimulation";

const RoundsInput = () => {
  const { setRounds, error, setError } = useSimulation();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "") {
      setRounds(20); // Default to 20 if input is invalid or empty
      setError("");
    } else {
      const numberValue = parseInt(value, 10);
      if (isNaN(numberValue)) {
        setError("Please enter a valid number");
      } else if (numberValue <= 0) {
        setError("Number has to be positive");
      } else {
        setRounds(numberValue);
        setError("");
      }
    }
  };

  return (
    <div>
      <label>
        Number of Rounds:
        <input
          defaultValue={20}
          type="number"
          onChange={handleChange}
          placeholder="Enter number of rounds"
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default RoundsInput;
