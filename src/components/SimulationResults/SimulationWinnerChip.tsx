import React from "react";

interface SimulationWinnerChipProps {
  strategy1Name: string;
  strategy2Name: string;
  strategy1Points: number;
  strategy2Points: number;
}

const SimulationWinnerChip: React.FC<SimulationWinnerChipProps> = ({
  strategy1Name,
  strategy1Points,
  strategy2Name,
  strategy2Points,
}) => {
  if (strategy1Points === strategy2Points) {
    return (
      <p className="bg-[--mantine-primary-color-filled] py-1 px-4 rounded-full text-[--mantine-color-white] text-sm">
        There is a tie
      </p>
    );
  }
  return (
    <>
      <span className="bg-[--mantine-primary-color-filled] py-1 px-4 rounded-full text-[--mantine-color-white] text-sm">
        {strategy1Points > strategy2Points ? strategy1Name : strategy2Name} wins
      </span>
    </>
  );
};

export default SimulationWinnerChip;
