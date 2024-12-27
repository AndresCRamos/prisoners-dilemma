import { Stack, Text, Title } from "@mantine/core";
import React from "react";

const AxelrodTournament: React.FC = () => {
  return (
    <Stack component="article" gap="xs">
      <Title order={2} className="text-[--mantine-primary-color-filled]">
        Axelrod's Tournament: A Game Theory Experiment
      </Title>
      <Text>
        In the late 1970s, political scientist Robert Axelrod had a dilemma of
        his own (pun intended). In nature, every animal seems to act selfishly,
        always prioritizing its own survival—even at the expense of others. Yet,
        surprisingly, cooperation still emerges. Axelrod saw a parallel between
        this and the Prisoner’s Dilemma: the best outcome for both players comes
        from cooperation, but the temptation to betray for personal gain often
        gets in the way. To understand how cooperation could thrive in a world
        of selfish individuals, Axelrod designed a tournament where participants
        submitted strategies to play the Prisoner’s Dilemma against each other.
      </Text>
    </Stack>
  );
};

export default AxelrodTournament;
