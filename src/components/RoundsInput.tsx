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
      if (!isNaN(numberValue)) {
        onRoundsChange(numberValue);
        onErrorChange("");
      } else {
        onErrorChange("Please enter a valid number");
      }
    }
  };

  return (
    <div>
      <label>
        Number of Rounds:
        <input
          defaultValue={20}
          onChange={handleChange}
          placeholder="Enter number of rounds"
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default RoundsInput;
