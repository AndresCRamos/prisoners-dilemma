import { Container, List, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Sources: React.FC = () => {
  // TODO: Create description for resources
  return (
    <Container>
      <Stack gap={"lg"}>
        <Title className="text-[--mantine-primary-color-filled]">Sources</Title>
        <Text>This project draws inspiration from some key resources:</Text>

        <List listStyleType="initial">
          <List.Item>Veritasium Video</List.Item>
          <List.Item>Prisoners Dilemma paper</List.Item>
          <List.Item>Axelrod library</List.Item>
        </List>
      </Stack>
    </Container>
  );
};

export default Sources;
