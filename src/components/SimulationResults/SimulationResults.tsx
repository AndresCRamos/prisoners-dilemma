import {
  Button,
  Center,
  Collapse,
  Container,
  Group,
  Stack,
  Table,
  TableData,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { useSimulation } from "../../hooks/useSimulation";
import SimulationPoints from "./SimulationPoints";
import SimulationWinnerChip from "./SimulationWinnerChip";

const SimulationResult = () => {
  const { results } = useSimulation();
  const [showResultsTable, { toggle, close }] = useDisclosure(false);

  useEffect(() => {
    close();
  }, [results]);
  if (results === null) {
    return (
      <Container>
        <Text mt={4} ta="center">
          No results to display
        </Text>
      </Container>
    );
  }

  const tableData: TableData = {
    head: [
      "Round",
      `${results.strategy1} Move`,
      `${results.strategy1} Points`,
      `${results.strategy2} Move`,
      `${results.strategy2} Points`,
    ],
    body: results.rounds.map((round) => [
      round.round,
      round.strategy1Move ? "Cooperate" : "Defect",
      round.strategy2Move ? "Cooperate" : "Defect",
      round.strategy1Points,
      round.strategy2Points,
    ]),
  };

  const decideWinner = {
    strategy1Name: results.strategy1,
    strategy1Points: results.finalScore.strategy1,
    strategy2Name: results.strategy2,
    strategy2Points: results.finalScore.strategy2,
  };

  return (
    <Container>
      <Title order={2}>Simulation Results</Title>
      <Title order={3}>Final Score</Title>
      <Stack className="mb-4">
        <Group justify="center">
          <SimulationPoints
            strategy_name={results.strategy1}
            strategy_points={results.finalScore.strategy1}
          />
          <SimulationPoints
            strategy_name={results.strategy2}
            strategy_points={results.finalScore.strategy2}
          />
        </Group>
        <Center>
          <SimulationWinnerChip {...decideWinner} />
        </Center>
      </Stack>
      <Center className="mb-2">
        <Button onClick={toggle}>Show rounds</Button>
      </Center>
      <Collapse in={showResultsTable} transitionDuration={500} className="mb-4">
        <Table.ScrollContainer minWidth={200}>
          <Table
            striped="even"
            data={tableData}
            stickyHeader
            withColumnBorders
            withRowBorders={false}
            withTableBorder
            classNames={{
              th: "text-center",
              td: "text-center",
              thead: "bg-[--table-striped-color]",
            }}
          />
        </Table.ScrollContainer>
      </Collapse>
    </Container>
  );
};

export default SimulationResult;
