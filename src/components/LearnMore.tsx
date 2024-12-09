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
          <Title order={3}>Really what's the Prisoners Dilemma?</Title>
          <Text>
            Imagine this, you and a friend are arrested for being suspects for a
            crime, you are not allow to communicate whatsoever with your friend,
            and the cop tells you that, while they have evidence for a lesser
            charge, that will get you and your friend each one year in jail, he
            admits they dont have enough evidence for the main charge, so he
            offers a bargain.
          </Text>
          <Title order={4}>Bargain: Betray your friend?</Title>
          <Text>
            If you decide to testify against your friend, betraying him, your
            lesser charge will be dropped, getting you free, but your friend
            would spend 5 years in prison for the main charge
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default LearnMore;
