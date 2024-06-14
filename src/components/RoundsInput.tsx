import React from "react";

interface RoundsInputProps {
  rounds: number;
  onRoundsChange: (value: number) => void;
  error: string;
  onErrorChange: (value: string) => void;
}

const RoundsInput: React.FC<RoundsInputProps> = ({
  onRoundsChange,
  error,
  onErrorChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "") {
      onRoundsChange(20); // Default to 20 if input is invalid or empty
      onErrorChange("");
    } else {
      const numberValue = parseInt(value, 10);
      if (isNaN(numberValue)) {
        onErrorChange("Please enter a valid number");
      } else if (numberValue <= 0) {
        onErrorChange("Number has to be positive");
      } else {
        onRoundsChange(numberValue);
        onErrorChange("");
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
