import {
  Button,
  Center,
  Collapse,
  Container,
  Table,
  TableData,
  Text,
  Title,
} from "@mantine/core";
import { useSimulation } from "../../hooks/useSimulation";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";

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

  return (
    <Container>
      <Title>Simulation Results</Title>
      <h3>Final Score</h3>
      <p>
        {results.strategy1}: {results.finalScore.strategy1}
      </p>
      <p>
        {results.strategy2}: {results.finalScore.strategy2}
      </p>
      <Center className="mb-2">
        <Button onClick={toggle}>Show rounds</Button>
      </Center>
      <Collapse in={showResultsTable} transitionDuration={500} className="mb-4">
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
      </Collapse>
    </Container>
  );
};

export default SimulationResult;
