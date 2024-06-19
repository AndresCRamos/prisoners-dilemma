import { useSimulation } from "../hooks/useSimulation";

const SimulationResult = () => {
  const { results } = useSimulation();
  if (results === null) {
    return <p>No results to display</p>;
  }

  return (
    <div>
      <h2>Simulation Results</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>{results.strategy1} Move</th>
            <th>{results.strategy2} Move</th>
            <th>{results.strategy1} Points</th>
            <th>{results.strategy2} Points</th>
          </tr>
        </thead>
        <tbody>
          {results.rounds.map((round) => (
            <tr key={round.round}>
              <td>{round.round}</td>
              <td>{round.strategy1Move ? "Cooperate" : "Defect"}</td>
              <td>{round.strategy2Move ? "Cooperate" : "Defect"}</td>
              <td>{round.strategy1Points}</td>
              <td>{round.strategy2Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
