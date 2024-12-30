import { List, Stack, Text, Title } from "@mantine/core";
import React from "react";
import AxelrodOutcomeTable from "./AxelrodOutcomeTable";

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
      <Title order={3} className="text-[--mantine-primary-color-filled]">
        The Tournament
      </Title>
      <Text>
        To adapt the dilemma o its new context, some changes were necessary, now
        instead of minimizing a prison sentence, the game was about maximizing
        points, so the payoffs where inverted
      </Text>
      <AxelrodOutcomeTable />
      <Text>
        Since real-life interactions aren’t one-and-done (especially for social
        beings like humans), Axelrod made the tournament iterative, with each
        strategy playing multiple rounds against others.
      </Text>
      <Title order={4} className="text-[--mantine-primary-color-filled]">
        The Rules
      </Title>
      <Text>Axelrod established a few ground rules:</Text>
      <List listStyleType="initial">
        <List.Item>
          Each strategy played against every other strategy, itself, and a
          random strategy
        </List.Item>
        <List.Item>Each match consisted of 200 turns</List.Item>
        <List.Item>
          To ensure reliability, the entire tournament was repeated five times
        </List.Item>
      </List>
      <Text>
        With the rules set and strategies submitted, the tournament began, and
        the results were anything but predictable.
      </Text>
    </Stack>
  );
};

export default AxelrodTournament;
