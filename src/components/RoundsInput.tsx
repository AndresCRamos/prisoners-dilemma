import { useSimulation } from "../hooks/useSimulation";
import { NumberInput } from "@mantine/core";

const RoundsInput = () => {
  const { rounds, setRounds } = useSimulation();
  const handleChange = (number_string: string | number) => {
    const value = number_string as number;
    setRounds(value);
  };

  return (
    <div>
      <NumberInput
        allowNegative={false}
        min={20}
        value={rounds}
        defaultValue={20}
        allowDecimal={false}
        label="Rounds"
        onChange={handleChange}
      />
    </div>
  );
};

export default RoundsInput;
