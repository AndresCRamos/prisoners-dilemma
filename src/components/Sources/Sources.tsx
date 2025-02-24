import { Card, Container, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Sources: React.FC = () => {
  return (
    <Container>
      <Stack gap={"lg"} className="pt-64 pb-32">
        <Title className="text-[--mantine-primary-color-filled]">Sources</Title>
        <Text>This project draws inspiration from some key resources:</Text>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Stack>
            <Title
              order={2}
              className="text-[--mantine-primary-color-filled] text-center"
            >
              What Game Theory Reveals About Life, The Universe, and Everything
            </Title>
            <Text className="text-center">[Veritasium - Youtube]</Text>
            <Text>
              The main spark for this project, an introduction to the Prisoners
              Dilemma made by Veritasium, a personal favorite science channel.
              It goes in more depth about the prisoners dilemma, Axelrod
              tournament, some variations on it, and some insights about
              Axelrod's discoveries
            </Text>
          </Stack>
        </Card>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title order={2} className="text-[--mantine-primary-color-filled]">
            Effective choice in the Prisoners Dilemma
          </Title>
          <Text>[Axelrod - 1980]</Text>
          <Text>
            The original source, Axelrod wrote this paper from a tournament he
            held, where several strategies submitted by some colleges competed
            to maximize the gain. The idea was to identify some common
            characteristics of the best strategies and their impact
          </Text>
        </Card>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title order={2} className="text-[--mantine-primary-color-filled]">
            Axelrod library
          </Title>
          <Text>[Python pip: Axelrod]</Text>
          <Text>
            Most of the implementation details of the strategies themselves come
            from a refactor of this great Python lib, as well as some ideas and
            insights
          </Text>
        </Card>
      </Stack>
    </Container>
  );
};

export default Sources;
