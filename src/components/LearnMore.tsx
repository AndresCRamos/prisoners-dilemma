import { Blockquote, Container, Stack, Text, Title } from "@mantine/core";
import React from "react";
const LearnMore: React.FC = () => {
  return (
    <>
      <Container>
        <Stack>
          <Title order={2}>What's the Prisoners Dilemma?</Title>
          <Text>The prisoners dilemma in its formal form, is defined as:</Text>
          <Blockquote>
            Is a game theory thought experiment involving two rational agents,
            each of whom can either cooperate for mutual benefit or betray their
            partner ("defect") for individual gain
          </Blockquote>
          <Text>A normal game follows the same structure</Text>
          <Text>
            But a more easier to get explanation would be actually explaining
            the game
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default LearnMore;
