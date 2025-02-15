import { List, Stack, Text, Title } from "@mantine/core";
import React from "react";
import AxelrodOutcomeTable from "./AxelrodOutcomeTable";
import GeneralResultsTable from "./GeneralResultsTable";

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
      <Title order={3} className="text-[--mantine-primary-color-filled]">
        Sometimes less is more
      </Title>
      <Text>
        One could think that the more complex strategies and cunning strategies
        would dominate the tournament, complex strategies that could adapt and
        take maximum advantage of their opponent. But thats not the case here,
        the results showed a clear winner
      </Text>
      <GeneralResultsTable />
      <Text>
        The winner is a simple strategy: Tit 4 Tat, a strategy as simple as one
        can get:
      </Text>
      <List listStyleType="initial">
        <List.Item>Starts by cooperating</List.Item>
        <List.Item>Copies the last movement of the opponent</List.Item>
      </List>
      <Text>
        Thats it, no fancy analysis, no complicated math, just something could
        call "eye for an eye" strategy, yet, it outperformed every one else
      </Text>
      <Title order={3} className="text-[--mantine-primary-color-filled]">
        Why did it work?
      </Title>
      <Text>
        After some analysis, Axelrod identified some key traits that the top
        players display, specially tit 4 tat, had in common:
      </Text>
      <List listStyleType="initial">
        <List.Item>
          Nice: It wasn't the first to betray. By cooperating initially, it set
          a precedent for mutual trust.
        </List.Item>
        <List.Item>
          Retaliatory: If the opponent betrayed, it responded in kind. Being
          nice didn't mean being a pushover.
        </List.Item>
        <List.Item>
          Forgiving: If the opponent gets the message and cooperates again, it
          doesn't hold a grudge, it resets and gives a fresh start
        </List.Item>
        <List.Item>
          Be clear: Its simple and predictable. Others quickly understand how it
          works, making cooperation easy by reducing uncertainty
        </List.Item>
      </List>
      <Text>
        This combination of cooperation, self-defense and clarity, made Tit 4
        Tat, and other strategies with this traits, and ideal candidate for long
        term success
      </Text>
      <Title order={2} className="text-[--mantine-primary-color-filled]">
        The power of being nice
      </Title>
      <Text>
        Axelrod’s tournament wasn’t just a quirky game theory experiment—it
        showed something profound: being nice actually works. In a world that
        often rewards cutthroat tactics, Tit-for-Tat proved that cooperation,
        fairness, and clarity can lead to long-term success.
      </Text>
      <Text>
        At first glance, betrayal seems like the safest bet. If you take
        advantage of others before they do it to you, you avoid being the fool.
        But the tournament revealed the opposite: those who played fair,
        defended themselves when necessary, and forgave when possible thrived
        the most.
      </Text>
      <Text>
        This isn’t just about games. It reflects real-world dynamics in
        business, relationships, and even international politics. Short-term
        gains from deception or aggression might seem tempting, but over time,
        trust and cooperation build stronger, more resilient systems.
      </Text>
      <Text>
        In the end, Axelrod’s tournament teaches us that success isn’t about
        being the most ruthless—it’s about being strategically kind.
      </Text>
    </Stack>
  );
};

export default AxelrodTournament;
