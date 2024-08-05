import { Group, Text } from "@mantine/core";
import React from "react";

interface SimulationPointsProps {
  strategy_name: string;
  strategy_points: number;
}

const SimulationPoints: React.FC<SimulationPointsProps> = ({
  strategy_name,
  strategy_points,
}) => {
  return (
    <Group className="gap-1">
      <Text
        component="span"
        className="font-bold text-[--mantine-primary-color-9]"
      >
        {strategy_name}:
      </Text>
      <Text className="font-extralight">{strategy_points}</Text>
    </Group>
  );
};

export default SimulationPoints;
