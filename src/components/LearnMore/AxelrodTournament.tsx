import { Stack, Title } from "@mantine/core";
import React from "react";

const AxelrodTournament: React.FC = () => {
  return (
    <Stack component="article" gap="xs">
      <Title order={2} className="text-[--mantine-primary-color-filled]">
        Axelrod's Tournament: A Game Theory Experiment
      </Title>
    </Stack>
  );
};

export default AxelrodTournament;
