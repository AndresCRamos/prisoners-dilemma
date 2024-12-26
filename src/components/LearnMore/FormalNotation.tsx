import { List, Stack, Text, Title } from "@mantine/core";
import React from "react";
import OutcomeTable from "./OutcomeTable";

const FormalNotation: React.FC = () => {
  return (
    <Stack component={"article"} gap={"xs"}>
      <Title order={2} className="text-[--mantine-primary-color-filled]">
        Back to basics: The formal side
      </Title>
      <Text>
        Now that we have an intuitive understanding of the game itself, lets
        define it in more formal game theory terms:
      </Text>
      <List listStyleType="initial" withPadding>
        <List.Item>
          <span className="font-bold">Agent</span> refers to each of the players
          involved, that means your friend and you
        </List.Item>
        <List.Item>
          <span className="font-bold">Cooperate</span> means remain silent
        </List.Item>
        <List.Item>
          {" "}
          <span className="font-bold">Defect</span> means betray your friend
        </List.Item>
      </List>
      <Text>The outcomes for each one turn out to be:</Text>
      <OutcomeTable />
      <Text>In this form, the outcomes can be described as:</Text>
      <List listStyleType="initial" withPadding>
        <List.Item>
          <span className="font-bold">Mutual cooperation (both silent)</span> is
          the best scenario for both, but is risky
        </List.Item>
        <List.Item>
          <span className="font-bold">Mutual defection (both betray)</span> is
          the most stable scenario, as neither can do better without risk
        </List.Item>
        <List.Item>
          <span className="font-bold">Cooperation over defection</span> benefits
          the defector and hurts the cooperator
        </List.Item>
      </List>
    </Stack>
  );
};

export default FormalNotation;
