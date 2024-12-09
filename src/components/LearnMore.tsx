import { Blockquote, Container, List, Stack, Text, Title } from "@mantine/core";
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
          <Title order={4}>The catch?</Title>
          <Text>
            You know is too good to be true, so you ask the cop about the catch,
            and he tells you that your friend is given the same offer, if he
            betrays you, he will go free, and you will be in jail for 5 years
          </Text>
          <Text>
            He tells you as well, that if you both betray each other, both of
            you get a sentence of 3 years
          </Text>
          <Title order={4}>What would you do?</Title>
          <Text>
            The cop does not let you think about this much, remember,your friend
            has the same options as you, so you start to weight your options:
          </Text>
          <List withPadding listStyleType="initial">
            <List.Item>If both remain silent, both get 1 year</List.Item>
            <List.Item>
              If you betray your friend, you get free, but he gets 5 years (and
              he gets mad at you)
            </List.Item>
            <List.Item>
              If he betrays you, he gets free, but you get 5 years (and he gets
              mad at you)
            </List.Item>
            <List.Item>If both betray each other, both get 3 year</List.Item>
          </List>
        </Stack>
      </Container>
    </>
  );
};

export default LearnMore;
