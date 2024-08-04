import { Container, Table, TableData } from "@mantine/core";
import { useSimulation } from "../hooks/useSimulation";

const SimulationResult = () => {
  const { results } = useSimulation();
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
    <div className="">
      <h2>Simulation Results</h2>
      <Container>
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
      </Container>
      <h3>Final Score</h3>
      <p>
        {results.strategy1}: {results.finalScore.strategy1}
      </p>
      <p>
        {results.strategy2}: {results.finalScore.strategy2}
      </p>
    </div>
  );
};

export default SimulationResult;
