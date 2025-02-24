import { Container, List, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Sources: React.FC = () => {
  return (
    <Container>
      <Stack gap={"lg"}>
        <Title className="text-[--mantine-primary-color-filled]">Sources</Title>
        <Text>This project draws inspiration from some key resources:</Text>
        <List listStyleType="initial">
          <List.Item>
            What Game Theory Reveals About Life, The Universe, and Everything
            <Text>[Veritasium - Youtube]</Text>
            <Text>
              The main spark for this project, an introduction to the Prisoners
              Dilemma made by Veritasium, a personal favorite science channel.
              It goes in more depth about the prisoners dilemma, Axelrod
              tournament, some variations on it, and some insights about
              Axelrod's discoveries
            </Text>
          </List.Item>
          <List.Item>
            Effective choice in the Prisoners Dilemma
            <Text>[Axelrod - 1980]</Text>
            <Text>
              The original source, Axelrod wrote this paper from a tournament he
              held, where several strategies submitted by some colleges competed
              to maximize the gain. The idea was to identify some common
              characteristics of the best strategies and their impact
            </Text>
          </List.Item>
          <List.Item>
            Axelrod library
            <Text>[Python pip: Axelrod]</Text>
            <Text>
              Most of the implementation details of the strategies themselves
              come from a refactor of this great Python lib, as well as some
              ideas and insights
            </Text>
          </List.Item>
        </List>
      </Stack>
    </Container>
  );
};

export default Sources;
