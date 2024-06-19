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
            <th>Strategy 1 Move</th>
            <th>Strategy 2 Move</th>
            <th>Strategy 1 Points</th>
            <th>Strategy 2 Points</th>
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
      <p>Strategy 1: {results.finalScore.strategy1}</p>
      <p>Strategy 2: {results.finalScore.strategy2}</p>
    </div>
  );
};

export default SimulationResult;
