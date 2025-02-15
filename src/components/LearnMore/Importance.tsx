import { Stack, Text, Title } from "@mantine/core";
import React from "react";

const Importance: React.FC = () => {
  return (
    <Stack component={"article"} gap={"xs"}>
      <Title order={2} className="text-[--mantine-primary-color-filled]">
        Why its important?
      </Title>
      <Text>
        This shows the real dilemma: the choice between looking out for yourself
        and trusting someone else to do the same. Betraying seems safer because
        it avoids the worst-case scenario and leads to the best outcome for you,
        but if both of you betray, the outcome isn’t ideal for either. If only
        you and your friend could trust each other enough to stay silent, you’d
        both end up better off.
      </Text>
      <Title order={3} className="text-[--mantine-primary-color-filled]">
        More than just a game
      </Title>
      <Text>
        The Prisoner’s Dilemma isn’t just a thought experiment; it mirrors
        real-life situations where trust and self-interest collide. Whether in
        relationships, business, or even global issues, it reminds us how hard
        cooperation can be, even when it benefits everyone.
      </Text>
    </Stack>
  );
};

export default Importance;
