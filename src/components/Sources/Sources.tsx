import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const Sources: React.FC = () => {
  return (
    <Container>
      <Stack gap={"lg"} className="pt-64 pb-32">
        <Title order={2} className="text-[--mantine-primary-color-filled]">
          Sources
        </Title>
        <Text>This project draws inspiration from some key resources:</Text>

        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title
            order={3}
            className="text-[--mantine-primary-color-filled] text-center"
          >
            What Game Theory Reveals About Life, The Universe, and Everything
          </Title>
          <Text className="text-center font-semibold pb-4" c="dimmed">
            [Veritasium - Youtube]
          </Text>
          <Text>
            The main spark for this project, an introduction to the Prisoners
            Dilemma made by Veritasium, a personal favorite science channel. It
            goes in more depth about the prisoners dilemma, Axelrod tournament,
            some variations on it, and some insights about Axelrod's discoveries
          </Text>
          <Center>
            <Button
              component="a"
              href="https://youtu.be/mScpHTIi-kM?si=RgMVZ21-n4QEX5rd"
              target="_blank"
            >
              See it for yourself
            </Button>
          </Center>
        </Card>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title
            order={3}
            className="text-[--mantine-primary-color-filled] text-center"
          >
            Effective choice in the Prisoners Dilemma
          </Title>
          <Text className="text-center font-semibold pb-4" c="dimmed">
            [Axelrod - 1980]
          </Text>
          <Text>
            The original source, Axelrod wrote this paper from a tournament he
            held, where several strategies submitted by some colleges competed
            to maximize the gain. The idea was to identify some common
            characteristics of the best strategies and their impact
          </Text>
        </Card>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title
            order={3}
            className="text-[--mantine-primary-color-filled] text-center"
          >
            Axelrod library
          </Title>
          <Text className="text-center font-semibold pb-4" c="dimmed">
            [Python pip: Axelrod]
          </Text>
          <Text>
            Most of the implementation details of the strategies themselves come
            from a refactor of this great Python lib, as well as some ideas and
            insights
          </Text>
          <Center>
            <Button
              component="a"
              href="https://axelrod.readthedocs.io/en/stable/index.html"
              target="_blank"
            >
              Read the docs
            </Button>
          </Center>
        </Card>
        <Card shadow="md" padding="xl" radius={"md"} withBorder>
          <Title
            order={3}
            className="text-[--mantine-primary-color-filled] text-center"
          >
            stdlib stats
          </Title>
          <Text className="text-center font-semibold pb-4" c="dimmed">
            [Part of the stdlib js library]
          </Text>
          <Text>
            stdlib aims to be a standard library for JavaScript, it includes a
            stats module, that provides the chi squared test used by some
            strategies
          </Text>
          <Group align="center" justify="center">
            <Button
              component="a"
              href="https://stdlib.io/docs/ts/latest/index.html"
              target="_blank"
            >
              Check the library here
            </Button>
            <Button
              component="a"
              href="https://stdlib.io/docs/ts/latest/modules/_stats_chi2gof_docs_types_index_d_.html"
              target="_blank"
              variant="light"
            >
              Check the chi squared test module here
            </Button>
          </Group>
        </Card>
      </Stack>
    </Container>
  );
};

export default Sources;
